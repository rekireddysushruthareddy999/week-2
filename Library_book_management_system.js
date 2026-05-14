/* Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */

      class book {
        title;
        author;
        pages;
        isAvailable;
        constructor(title , author , pages , isAvailable){
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.isAvailable = isAvailable;
        }
        borrow(){
            this.isAvailable = false;
        }
        returnBook(){
            this.isAvailable = true;
        }
        getInfo(){
            console.log(book)
        }
        isLongBook(){
            if(book.pages > 300){
                return true;
            }
            return false;
        }
    }
      let r1 = new book("hi","sushrutha",500,true)
      let r2 = new book("bye","Ashrutha",30,false)
      let r3 = new book("dream","swetha",850,true)
      let r4 = new book("hp","pandu",903,false)
      let r5 = new book("mac","ashu",100,true)
      console.log(r1)
      console.log(r2)
      console.log(r3)
      console.log(r4)
      console.log(r5)
           let r6 = r1.borrow()
      console.log(r6);
      let r7 = r2.borrow()
      console.log(r7)