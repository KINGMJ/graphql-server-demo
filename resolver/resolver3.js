const authors = [
    {
        id: 1,
        name: '韩寒',
        type: '校园作家'
    },
    {
        id: 2,
        name: 'J.K. Rowling',
        type: '奇幻作家'
    },
    {
        id: 3,
        name: '刘慈欣',
        type: '科幻作家'
    },
    {
        id: 4,
        name: '东野圭吾',
        type: '悬疑作家'
    }
]


const resolvers = {
    Query: {
        authors: (parent, args, context, info) => {
            return authors;
        },
        author(parent, args, context, info) {
            return authors[args.id];
        }
    }
};

module.exports = resolvers;