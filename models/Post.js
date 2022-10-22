const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },

  // this "User" under here is referencing the "User.js" file in the models folder -- it is referencing the User schema

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// here we are creating model, then we are exporting it. We are giving the model a name called "Post", then we give the model the blueprint, the schema, on how to build what is needed

 
module.exports = mongoose.model("Post", PostSchema);

// module.exports = mongoose.model("Post", PostSchema, "this-is-collection-name");
