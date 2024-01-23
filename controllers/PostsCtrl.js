const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  try {
    //for error use bellow code
    // console.log(i);

    const allPosts = await Post.find();

    res.status(200).json(allPosts);
  } catch (err) {
    res.status(400).json({ msg: "errorr!" });
  }
};
module.exports.getAllPosts = getAllPosts;
