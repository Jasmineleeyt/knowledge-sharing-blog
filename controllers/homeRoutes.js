const router = require('express').Router();
const { Comments, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Renders existing post on the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Renders the dashboard page when signed in
router.get("/dashboard",  withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(...posts);
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// Render the existing posts
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
            model: User,
            attributes: ['username'],
        },
        {
            model: Comments,
            attributes: ['comment', 'comment_date', 'user_id'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('eachPost', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Renders login and redirects the user to the homepage when logged in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Renders signup and redirects the user to the homepage when logged in
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


module.exports = router;
