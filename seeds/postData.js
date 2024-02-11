const { Post } = require('../models');

const postData = [
    {
        id: 1,
        title: 'What is validation in SQL',
        content: 'The purpose of validation is to ensure that the data feed columns adhere to the specified criteria. It ensures that values entered by the user conform to the specified conditions.',
        user_id: 2
    },
    {
        id: 2,
        title: 'What is Test-Driven Development',
        content: 'Test-Driven Development, aka TDD, is a software development approach where tests are written before the code they are meant to validate.',
        user_id: 1
    },
    {
        id: 3,
        title: 'What are some key principles of Object-Oriented Programming (OOP)?',
        content: 'Some of the key principles of OOP include: Encapsulation, Inheritance, Polymorphism, etc.',
        user_id: 5
    },
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;