module.exports = {
    ensureAuth: function (req, res, next) {
      console.log(req.user)
      console.log(req.session)
      if (req.isAuthenticated()) {
        return next();
      } else {
        // if they are not logged in, it takes them back to home page
        res.redirect("/");
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/dashboard");
      }
    },
  };
  