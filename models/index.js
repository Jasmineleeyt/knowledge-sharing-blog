const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

// A user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// A post belongs to a single user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// A user can have many comments
User.hasMany(Comments, {
    foreignKey: 'user_id',
})

// A comment belongs to a single user
Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

// A comment belongs to a post
Comments.belongsTo(Post, {
    foreignKey: 'post_id'
})

// A post can have many comments
Post.hasMany(Comments, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Comments };