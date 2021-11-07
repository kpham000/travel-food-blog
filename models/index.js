const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Blog);

Blog.belongsTo(User);

Blog.hasMany(Comment);

Comment.belongsTo(Blog);

Comment.belongsTo(User);

User.hasMany(Comment);


module.exports={User, Blog, Comment};