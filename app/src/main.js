const books = [
  { name: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, quantity: 5 },
  { name: "1984", author: "George Orwell", year: 1949, quantity: 8 },
  { name: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, quantity: 4 },
  { name: "Moby Dick", author: "Herman Melville", year: 1851, quantity: 3 },
  { name: "Pride and Prejudice", author: "Jane Austen", year: 1813, quantity: 7 },
  { name: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, quantity: 6 },
  { name: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, quantity: 10 },
  { name: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, quantity: 12 },
  { name: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, quantity: 8 },
  { name: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, quantity: 5 },
  { name: "Jane Eyre", author: "Charlotte Brontë", year: 1847, quantity: 4 },
  { name: "Animal Farm", author: "George Orwell", year: 1945, quantity: 9 },
  { name: "The Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884, quantity: 3 },
  { name: "Wuthering Heights", author: "Emily Brontë", year: 1847, quantity: 6 },
  { name: "The Odyssey", author: "Homer", year: -700, quantity: 2 },
  { name: "The Iliad", author: "Homer", year: -750, quantity: 1 },
  { name: "War and Peace", author: "Leo Tolstoy", year: 1869, quantity: 4 },
  { name: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, quantity: 5 },
  { name: "Brave New World", author: "Aldous Huxley", year: 1932, quantity: 6 },
  { name: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, quantity: 7 },
  { name: "The Alchemist", author: "Paulo Coelho", year: 1988, quantity: 8 },
  { name: "Don Quixote", author: "Miguel de Cervantes", year: 1605, quantity: 2 },
  { name: "Frankenstein", author: "Mary Shelley", year: 1818, quantity: 3 },
  { name: "Dracula", author: "Bram Stoker", year: 1897, quantity: 5 },
  { name: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, quantity: 4 },
  { name: "A Tale of Two Cities", author: "Charles Dickens", year: 1859, quantity: 6 },
  { name: "Les Misérables", author: "Victor Hugo", year: 1862, quantity: 3 },
  { name: "The Count of Monte Cristo", author: "Alexandre Dumas", year: 1844, quantity: 7 },
  { name: "Slaughterhouse-Five", author: "Kurt Vonnegut", year: 1969, quantity: 5 },
  { name: "Of Mice and Men", author: "John Steinbeck", year: 1937, quantity: 6 },
  { name: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, quantity: 4 },
  { name: "Catch-22", author: "Joseph Heller", year: 1961, quantity: 5 },
  { name: "Ulysses", author: "James Joyce", year: 1922, quantity: 2 },
  { name: "The Road", author: "Cormac McCarthy", year: 2006, quantity: 6 },
  { name: "Beloved", author: "Toni Morrison", year: 1987, quantity: 4 },
  { name: "Gone with the Wind", author: "Margaret Mitchell", year: 1936, quantity: 3 },
  { name: "Dune", author: "Frank Herbert", year: 1965, quantity: 8 },
  { name: "The Shining", author: "Stephen King", year: 1977, quantity: 6 },
  { name: "The Kite Runner", author: "Khaled Hosseini", year: 2003, quantity: 7 },
  { name: "Life of Pi", author: "Yann Martel", year: 2001, quantity: 5 },
  { name: "Memoirs of a Geisha", author: "Arthur Golden", year: 1997, quantity: 6 },
  { name: "The Fault in Our Stars", author: "John Green", year: 2012, quantity: 8 },
  { name: "The Hunger Games", author: "Suzanne Collins", year: 2008, quantity: 10 },
  { name: "The Maze Runner", author: "James Dashner", year: 2009, quantity: 9 },
  { name: "Divergent", author: "Veronica Roth", year: 2011, quantity: 7 },
  { name: "Percy Jackson & the Olympians", author: "Rick Riordan", year: 2005, quantity: 10 },
  { name: "Twilight", author: "Stephenie Meyer", year: 2005, quantity: 6 },
  { name: "The Secret Garden", author: "Frances Hodgson Burnett", year: 1911, quantity: 4 },
];

const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');
const bookContainer = document.getElementById('bookContainer');

function filterBooksByQuery(bookList, query) {
  const result = [];

  for (let i = 0; i < bookList.length; i++) {
    if (
      bookList[i].name.toLowerCase().includes(query) ||
      bookList[i].author.toLowerCase().includes(query) ||
      bookList[i].year.toString().includes(query)
    ) {
      result.push(bookList[i]);
    }
  }

  return result;
}

function displayBooks(bookList) {
  bookContainer.innerHTML = '';

  for (let i = 0; i < bookList.length; i++) {
    const bookCard = document.createElement('div');
    bookCard.className = 'bookCard';
    bookCard.innerHTML = `
      <h3>${bookList[i].name}</h3>
      <p><strong>Author:</strong> ${bookList[i].author}</p>
      <p><strong>Year:</strong> ${bookList[i].year}</p>
      <p><strong>Quantity:</strong> ${bookList[i].quantity}</p>
    `;
    bookContainer.appendChild(bookCard);
  }
}

displayBooks(books);

searchButton.addEventListener('click', function () {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredBooks = filterBooksByQuery(books, searchTerm);
  displayBooks(filteredBooks);
});

searchBar.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredBooks = filterBooksByQuery(books, searchTerm);
    displayBooks(filteredBooks);
  }
});
