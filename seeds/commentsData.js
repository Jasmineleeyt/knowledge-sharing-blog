const { Comments } = require('../models');

const commentData = [
    {
        id: 1,
        comment: 'Very important concept to learn.',
        user_id: 2,
        post_id: 3
    },
    {
        id: 2,
        comment: 'Cool',
        user_id: 5,
        post_id: 2
    },
    {
        id: 3,
        comment: 'Sounds interesting.',
        user_id: 4,
        post_id: 2
    },
    {
        id: 4,
        comment: 'Thank you for sharing!',
        user_id: 1,
        post_id: 1
    },
    {
        id: 5,
        comment: 'Here is an useful documentation if you uses Sequelize https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/',
        user_id: 3,
        post_id: 1
    },
];

const commentSeeds = () => Comments.bulkCreate(commentData);

module.exports = commentSeeds;