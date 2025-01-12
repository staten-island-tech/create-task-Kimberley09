const books = [
  { name: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, quantity: 3 },
  { name: "1984", author: "George Orwell", year: 1949, quantity: 5 },
  { name: "Moby Dick", author: "Herman Melville", year: 1851, quantity: 2 },
  { name: "Pride and Prejudice", author: "Jane Austen", year: 1813, quantity: 7 },
  { name: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, quantity: 4 },
  { name: "Jane Eyre", author: "Charlotte Bronte", year: 1847, quantity: 6 },
  { name: "War and Peace", author: "Leo Tolstoy", year: 1869, quantity: 3 },
  { name: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, quantity: 8 },
  { name: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, quantity: 10 },
  { name: "Brave New World", author: "Aldous Huxley", year: 1932, quantity: 5 },
  { name: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, quantity: 4 },
  { name: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880, quantity: 3 },
  { name: "Ulysses", author: "James Joyce", year: 1922, quantity: 2 },
  { name: "The Odyssey", author: "Homer", year: -800, quantity: 7 },
  { name: "The Iliad", author: "Homer", year: -750, quantity: 6 },
  { name: "Les Misérables", author: "Victor Hugo", year: 1862, quantity: 5 },
  { name: "Wuthering Heights", author: "Emily Bronte", year: 1847, quantity: 4 },
  { name: "Dracula", author: "Bram Stoker", year: 1897, quantity: 3 },
  { name: "Frankenstein", author: "Mary Shelley", year: 1818, quantity: 2 },
  { name: "The Divine Comedy", author: "Dante Alighieri", year: 1320, quantity: 7 },
  { name: "The Canterbury Tales", author: "Geoffrey Chaucer", year: 1400, quantity: 6 },
  { name: "Beowulf", author: "Unknown", year: 975, quantity: 4 },
  { name: "Paradise Lost", author: "John Milton", year: 1667, quantity: 5 },
  { name: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, quantity: 8 },
  { name: "Heart of Darkness", author: "Joseph Conrad", year: 1899, quantity: 3 },
  { name: "Don Quixote", author: "Miguel de Cervantes", year: 1615, quantity: 6 },
  { name: "A Tale of Two Cities", author: "Charles Dickens", year: 1859, quantity: 7 },
  { name: "Great Expectations", author: "Charles Dickens", year: 1861, quantity: 9 },
  { name: "Oliver Twist", author: "Charles Dickens", year: 1837, quantity: 5 },
  { name: "David Copperfield", author: "Charles Dickens", year: 1850, quantity: 4 },
  { name: "Bleak House", author: "Charles Dickens", year: 1853, quantity: 3 },
  { name: "Anna Karenina", author: "Leo Tolstoy", year: 1877, quantity: 8 },
  { name: "Madame Bovary", author: "Gustave Flaubert", year: 1857, quantity: 4 },
  { name: "The Count of Monte Cristo", author: "Alexandre Dumas", year: 1844, quantity: 6 },
  { name: "The Three Musketeers", author: "Alexandre Dumas", year: 1844, quantity: 5 },
  { name: "The Hunchback of Notre-Dame", author: "Victor Hugo", year: 1831, quantity: 3 },
  { name: "The Metamorphosis", author: "Franz Kafka", year: 1915, quantity: 7 },
  { name: "The Trial", author: "Franz Kafka", year: 1925, quantity: 2 },
  { name: "Invisible Man", author: "Ralph Ellison", year: 1952, quantity: 6 },
  { name: "Beloved", author: "Toni Morrison", year: 1987, quantity: 5 },
  { name: "Song of Solomon", author: "Toni Morrison", year: 1977, quantity: 4 },
  { name: "Sula", author: "Toni Morrison", year: 1973, quantity: 3 },
  { name: "The Bluest Eye", author: "Toni Morrison", year: 1970, quantity: 7 },
  { name: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967, quantity: 8 },
  { name: "Love in the Time of Cholera", author: "Gabriel Garcia Marquez", year: 1985, quantity: 5 },
  { name: "Chronicle of a Death Foretold", author: "Gabriel Garcia Marquez", year: 1981, quantity: 4 },
  { name: "Of Mice and Men", author: "John Steinbeck", year: 1937, quantity: 6 },
  { name: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, quantity: 5 },
  { name: "East of Eden", author: "John Steinbeck", year: 1952, quantity: 4 },
  { name: "Cannery Row", author: "John Steinbeck", year: 1945, quantity: 3 },
  { name: "The Pearl", author: "John Steinbeck", year: 1947, quantity: 7 },
  { name: "Tortilla Flat", author: "John Steinbeck", year: 1935, quantity: 6 },
  { name: "The Stranger", author: "Albert Camus", year: 1942, quantity: 5 },
  { name: "The Plague", author: "Albert Camus", year: 1947, quantity: 4 },
  { name: "The Myth of Sisyphus", author: "Albert Camus", year: 1942, quantity: 3 },
  { name: "The Fall", author: "Albert Camus", year: 1956, quantity: 7 },
  { name: "The Republic", author: "Plato", year: -380, quantity: 9 },
  { name: "Meditations", author: "Marcus Aurelius", year: 180, quantity: 6 },
  { name: "The Prince", author: "Niccolo Machiavelli", year: 1532, quantity: 5 },
  { name: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", year: 1883, quantity: 4 },
  { name: "Beyond Good and Evil", author: "Friedrich Nietzsche", year: 1886, quantity: 3 },
  { name: "The Birth of Tragedy", author: "Friedrich Nietzsche", year: 1872, quantity: 8 },
  { name: "A Farewell to Arms", author: "Ernest Hemingway", year: 1929, quantity: 7 },
  { name: "For Whom the Bell Tolls", author: "Ernest Hemingway", year: 1940, quantity: 6 },
  { name: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, quantity: 5 },
  { name: "The Sun Also Rises", author: "Ernest Hemingway", year: 1926, quantity: 4 },
  { name: "In Our Time", author: "Ernest Hemingway", year: 1925, quantity: 3 },
  { name: "To Have and Have Not", author: "Ernest Hemingway", year: 1937, quantity: 7 },
  { name: "The Road", author: "Cormac McCarthy", year: 2006, quantity: 6 },
  { name: "No Country for Old Men", author: "Cormac McCarthy", year: 2005, quantity: 5 },
  { name: "Blood Meridian", author: "Cormac McCarthy", year: 1985, quantity: 4 },
  { name: "The Crossing", author: "Cormac McCarthy", year: 1994, quantity: 3 },
  { name: "All the Pretty Horses", author: "Cormac McCarthy", year: 1992, quantity: 7 },
  { name: "Suttree", author: "Cormac McCarthy", year: 1979, quantity: 6 },
  { name: "As I Lay Dying", author: "William Faulkner", year: 1930, quantity: 5 },
  { name: "The Sound and the Fury", author: "William Faulkner", year: 1929, quantity: 4 },
  { name: "Light in August", author: "William Faulkner", year: 1932, quantity: 3 },
  { name: "Absalom, Absalom!", author: "William Faulkner", year: 1936, quantity: 7 },
  { name: "Go Down, Moses", author: "William Faulkner", year: 1942, quantity: 6 },
  { name: "Intruder in the Dust", author: "William Faulkner", year: 1948, quantity: 5 },
  { name: "Catch-22", author: "Joseph Heller", year: 1961, quantity: 4 },
  { name: "Slaughterhouse-Five", author: "Kurt Vonnegut", year: 1969, quantity: 3 },
  { name: "Breakfast of Champions", author: "Kurt Vonnegut", year: 1973, quantity: 8 },
  { name: "Cat's Cradle", author: "Kurt Vonnegut", year: 1963, quantity: 7 },
  { name: "Mother Night", author: "Kurt Vonnegut", year: 1961, quantity: 6 },
  { name: "Galapagos", author: "Kurt Vonnegut", year: 1985, quantity: 5 },
  { name: "Bluebeard", author: "Kurt Vonnegut", year: 1987, quantity: 4 },
];

// Function to search for books based on a search term
function searchBooks(searchTerm) {
  return books.filter(book => 
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Function to display books in the bookContainer
function displayBooks(bookList) {
  const bookContainer = document.getElementById('bookContainer');
  bookContainer.innerHTML = ""; // Clear previous content

  if (bookList.length === 0) {
    bookContainer.innerHTML = '<p>No books found</p>';
    return;
  }

  bookList.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.className = 'bookItem';
    bookElement.innerHTML = `
      <h3>${book.name}</h3>
      <p>Author: ${book.author}</p>
      <p>Publish Year: ${book.year}</p>
      <p>Quantity: ${book.quantity}</p>
    `;
    bookContainer.appendChild(bookElement);
  });
}

// Event listener for the search input field
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search books...';
searchInput.id = 'searchInput';
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value;
  const filteredBooks = searchBooks(searchTerm);
  displayBooks(filteredBooks);
});

document.body.insertBefore(searchInput, document.getElementById('bookContainer'));

displayBooks(books);