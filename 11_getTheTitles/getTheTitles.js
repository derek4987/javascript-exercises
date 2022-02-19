const books = [
{
    title: 'Book',
    author: 'Name'
},
{
    title: 'Book2',
    author: 'Name2'
}
]

const getTheTitles = function() {
    const titles = books.map(book => (book.title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
