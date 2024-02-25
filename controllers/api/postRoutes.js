const router = require('express').Router();
const { Post, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// Render newPost page - requires the user to be logged in
router.get('/newpost', withAuth, (req, res) => {
    res.render('newPost', {
        logged_in: req.session.logged_in
    })
});




module.exports = router;