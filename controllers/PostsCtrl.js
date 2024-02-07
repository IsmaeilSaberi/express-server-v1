const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  try {
    //for error use bellow code
    // console.log(i);

    const allPosts = await Post.find();
    allPosts.reverse();

    res.status(200).json(allPosts);
  } catch (err) {
    res.status(400).json({ msg: "errorr!" });
  }
};
module.exports.getAllPosts = getAllPosts;

const newPost = async (req, res) => {
  try {
    const postData = {
      title: req.body.title,
      viewNum: req.body.viewNum,
    };

    console.log(req.body);

    await Post.create(postData);

    res.status(200).json({ msg: "post created successfully!" });
  } catch (err) {
    res.status(400).json({ msg: "errorr!" });
  }
};
module.exports.newPost = newPost;
