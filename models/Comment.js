const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },

  // this "post" under here is referencing the "Post.js" file in the models folder -- it is referencing the User schema (same thing with "User" reference under)
  // it is saying WHICH post, does this comment come from? We get it by the postid

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },

  createdBy: {
    type: String, 
    ref: "User"
  },

  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// here we are creating model, then we are exporting it. We are giving the model a name called "Post", then we give the model the blueprint, the schema, on how to build what is needed

 
module.exports = mongoose.model("Comment", CommentSchema);

// module.exports = mongoose.model("Post", PostSchema, "this-is-collection-name");
