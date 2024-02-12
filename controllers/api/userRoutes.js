const router = require('express').Router();
const { User } = require('../../models');

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
            message: "Logged in Successfully."
        })
    }) 

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;