const books = [
    { title: "Pride and Prejudice ", author: "Jane Austen", year: 2005 },
    { title: "The Red and the Black", author: "Stendhal", year: 2015 },
    { title: "Le Père Goriot", author: "Honoré de Balzac ", year: 2008 },
    { title: "David Copperfield", author: "Charles Dickens", year: 2012 },
];

function filterAndCapitalize(bookList) {
    
    const filteredBooks = bookList.filter(book => book.year >= 2010);

    const booksWithCapitalizedAuthors = filteredBooks.map(book => {
        return {
            title: book.title,
            author: book.author.toUpperCase(),
            year: book.year
        };
    });

    return booksWithCapitalizedAuthors;
}

const filteredBooks = filterAndCapitalize(books);

console.log("Original Books:", books);
console.log("Filtered and Capitalized Books:", filteredBooks);
