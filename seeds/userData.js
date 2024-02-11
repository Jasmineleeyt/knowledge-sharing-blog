const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'Rachel1105',
        password: 'vlJrvDpw&'
    },
    {
        id: 2,
        username: 'jackiew',
        password: 'cB9sveCPNW'
    },
    {
        id: 3,
        username: 'johndoe',
        password: 'F^6$Nx6'
    },
    {
        id: 4,
        username: 'minniey',
        password: 'wOKjNNrGK7'
    },
    {
        id: 5,
        username: 'janewhite',
        password: 'abcd1234'
    },
];

const userSeeds = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = userSeeds;
