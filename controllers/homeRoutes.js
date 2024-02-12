const router = require('express').Router();
const { Comments, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data into template
    res.render('homepage', { 
      posts, 
    //   logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render dashboard page and the existing posts
router.get('/post/:id', async (req, res) => {
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

    res.render('dashboard', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
