const getAllPosts = async (req, res) => {
  res.status(200).json({ msg: "this is getAllposts route!" });
};
module.exports.getAllPosts = getAllPosts;
