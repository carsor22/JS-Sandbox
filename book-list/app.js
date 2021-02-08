//Book constuctor - handle book object

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor - set of prototype methods - add,delete,alerts

function UI() {}

//Add book to list
UI.prototype.addBooktolist = function (book) {
  const list = document.getElementById('book-list');

  //create tr element
  const row = document.createElement('tr');
  //insert cols
  row.innerHTML = `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href ="#" class = "delete">X</a> </td>`;

  list.appendChild(row);
};

//show alerts

UI.prototype.showAlert = function (message, className) {
  //create div
  const div = document.createElement('div');
  //add classes
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //insert into dom
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-from');
  // insert alert
  container.insertBefore(div, form);

  // timeout afyter 3 secs
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 2500);
};

// clear field

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Delete book

UI.prototype.deleteBook = function (target) {
  if ((target.className = 'delete')) {
    target.parentElement.parentElement.remove();
  }
};
//Event listener for add book

document.getElementById('book-form').addEventListener('submit', function (e) {
  //get form values

  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();

  //Validate
  if (title === '' || author === '' || isbn === '') {
    //error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    //Add book to list

    ui.addBooktolist(book);

    //show success

    ui.showAlert('book added', 'success');

    //clear fields

    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for delete

document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();

  ui.deleteBook(e.target);

  e.preventDefault();

  ui.showAlert('Book Removed', 'success');
});
