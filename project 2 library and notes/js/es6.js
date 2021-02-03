console.log("This is  new project");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
    
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
      </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.lenght < 2 || book.auhor.lenght < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show  (type,displaymessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                 <strong>Holy guacamole!</strong> ${displaymessage}
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                setTimeout(function(){
                    message.innerHTML=``
                },5000);
    
    }
    
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit ', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("hello");
    console.log("hello");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let fiction = document.getElementById('fiction');
    let tech = document.getElementById('tech');
    let cook = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (tech.checked) {
        type = tech.value;
    }
    else if (cook.checked) {
        type = cook.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been succesfully added');
    }
    else {
        display.show('danger', ' Sorry you cant add this book');
    }
    e.preventDefault();
}

