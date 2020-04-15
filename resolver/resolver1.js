const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: {
            name: 'J.K. Rowling',
            type: '奇幻作家'
        }
    },
    {
        title: 'Jurassic Park',
        author: {
            name: 'Michael Crichton',
            type: '科幻作家'
        }
    },
    {
        title: '三体',
        author: {
            name: '刘慈欣',
            type: '科幻作家'
        }
    },
    {
        title: '三重门',
        author: {
            name: '韩寒',
            type: '校园作家'
        }
    }
];

const resolvers = {
    Query: {
        books: () => books,
    },
};

module.exports = resolvers;