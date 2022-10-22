// in this Controller, the controller is talking to the database (i.e. createPost func) via the Post model that we referencein line 4
const Comment = require("../models/Comment")
const User = require('../models/User')


module.exports = {
  createComment: async (req, res) => {
    try {

      // this gets the "_id" document property from the "users" collection in the social-app-db, and then we can extract the users Username and print it. Were supposed to use in line 23, but that is a shortcut. 
      const commentUser = await User.findById(req.user.id);
      console.log(`priiiintt ${commentUser.userName}`) 

      await Comment.create({

        // the ".comment" that is referenced here in req.body.comment is in Line 48 in the posts.ejs View. The form is named "comment"
        
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,

        // the difference between req.user and req.params is that req.user is being passed through middleware in the body of the request itself. When we say req.params, that is being passed in the path (example: "/user/userID" -- this is what is used in the Views in the Forms or Anchor tag elements)

        //this createdBy is the username of the user who posted the comment.
        createdBy: req.user.userName,

        //we get the ID value of the user that just submitted a comment by using "req.user" in line 32 in posts.js file in comments controller file -- this works because all the properties are being passed in through that line 32 line AND the correct user has to be logged in. Passport handles this
        createdById: req.user.id,
      });
      console.log("Post has been added!");
      // We redirect them back to the same post (reloads the page), so we implement that under here
      // we take them to that specific post by getting the id
      res.redirect("/post/"+req.params.id);

    } catch (err) {
      console.log(err);
    }
  },
  // delete comments Controller under here
  deleteComment: async (req, res) => {
    
    try {

      await Comment.deleteOne({_id: req.params.commentid})
      console.log("comment removed")
      res.redirect("/post/"+req.params.postid);
    } catch(err) {
      console.log(err)
    }
  }
};
