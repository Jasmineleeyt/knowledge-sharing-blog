const router = require('express').Router();
const { User } = require('../../models');

// Signup
router.post('/signup', async (req, res) => {
  try {
      const userData = await User.create(req.body);
      req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.loggedIn = true;
          // res.status(200).json(userData);
          return res.status(200).json({
            userData,
            message: "Signed up successfully."
        })
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    
    if (!userData) {
      res.status(400).json({ message: "Failed to provide login info." });
      return;
    }
    const checkPW = await userData.checkPassword(req.body.password);
    console.log(checkPW);
    if (!checkPW) {
      res.status(400).json({ message: "Failed to provide login info." });
      return;
    }
    console.log('line 18');
    req.session.save( () => {
        console.log('save')
        req.session.logged_in = true

        return res.status(200).json({
            userData,
            message: "Logged in successfully."
        })
    }) 

  } catch (err) {
    res.status(500).json(err);
  }
});

// Remove session and sign out
router.post('/signout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;