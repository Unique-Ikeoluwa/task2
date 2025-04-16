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
libraryBooks("Indepence", 2016)
// console.log(library)

// or 

// let book1 = {
//     title: "Mirror", 
//     year: 2025
// }
// let book2 = {
//     title: "Last days at Forcados high school", 
//     year: 2012
// }
// let book3 = {
//     title: "The ugly ones refuse to die", 
//     year: 2005
// }
// let book4 = {
//     title: "Half of a yellow sun", 
//     year: 2010
// }
// let library = [book1, book2, book3, book4]
// console.log(library)

// Delete a book from the library

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


// let bookValues = Object.values(library)
// console.log(bookValues)
// if (bookValues.title === "Half of a yellow sun"){
//     bookValues.year = 2006
//     return book
// }
// console.log(bookValues)

// What is wrong with my code?   function updateBook(bookTitle){
//     for (book of library){
//         if (book.title === bookTitle){
//             book.year === 2006
//         }
//     }
// }
// updateBook("Half of a yellow sun")
// console.log(`the year of publication for ${book.title} is ${book.year}`)
