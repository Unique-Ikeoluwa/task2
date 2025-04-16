// // Add a book to the Library
let library = [
    {
        title: "Mirror", 
        year: 2025
    }
]
function libraryBooks(title, yearReleased){
    let book = {
        title: title,
        year: yearReleased
    }
    library.push(book)
}
libraryBooks("Last days at Forcados high school", 2012)
libraryBooks("The ugly ones refuse to die", 2005)
libraryBooks("Half of a yellow sun", 2010)
libraryBooks("Magic pot", 2006)
libraryBooks("Independence", 2016)
// console.log(library)

function deleteBook(book){
    for (let i = 0; i < library.length; i++){
        if (library[i].title === book){
            library.splice(i, 1)
        }
    }
}
deleteBook("The ugly ones refuse to die")
// console.log(library)

// Update a book. I realise some of the years of publication of some books were not correct so I want to update it.

function updateBook(bookTitle){
    for (let i = 0; i < library.length; i++){
        if (library[i].title === bookTitle){
            library[i].year = 2006
            return library[i]
        }
    }
}
let updatedBook = updateBook("Half of a yellow sun")
console.log(`the year of publication for ${updatedBook.title} is ${updatedBook.year}`)

// Get a book from the library

function getBook(bookNeed){
    for (let i = 0; i < library.length; i++){
        if (library[i].title === bookNeed){
            return library[i]
        }
    }
}
let bookNeeded = getBook("Independence")
console.log(bookNeeded)

// View all the books in the library
console.log(library)
