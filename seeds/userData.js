const { User } = require('../models');

const userData = [
    {
        username: 'Rachel1105',
        password: 'vlJrvDpw&'
    },
    {
        username: 'jackiew',
        password: 'cB9sveCPNW'
    },
    {
        username: 'johndoe',
        password: 'F^6$Nx6'
    },
    {
        username: 'minniey',
        password: 'wOKjNNrGK7'
    },
    {
        username: 'janewhite',
        password: 'abcd1234'
    },
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;
