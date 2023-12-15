    // console.log('Good');
    function Book(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

    class Display {
        add(book) {
            console.log("Adding to UI");
            let tableBody = document.getElementById('tableBody');
            let uiString = `<tr>
                                <td>${book.name}</td>
                                <td>${book.author}</td>
                                <td>${book.type}</td>
                            </tr>`;
            tableBody.innerHTML += uiString;
        }
        // clear() {
        //     let NewBook = document.getElementById('AddBook');
        //     NewBook.reset();
        // }
        validate(book) {
            if (book.name.length < 2 || book.author.length < 2) {
                return false;
            }
            else {
                return true;
            }
        }
        show(type, displayMessage) {
            let messageContainer = document.getElementById('message');
            let boldText;
            if (type === 'Success') {
                boldText = 'Success';
                messageContainer.style.backgroundColor='lightgreen';
            } else {
                boldText = 'Error';
                messageContainer.style.backgroundColor='lightyellow';
            }
            messageContainer.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert" style="position: relative;">
            <strong>${boldText}:</strong> ${displayMessage}
        </div>`;
            setTimeout(function () {
                messageContainer.innerHTML = '';
            }, 1000);
        }
    }

    let NewBtn = document.getElementById('AddBook');
    NewBtn.addEventListener('click', addbook);

    function addbook(e) {
        e.preventDefault();
        let name = document.getElementById('Book-Name').value;
        let author = document.getElementById('Author').value;
        let type;
        let SciFic = document.getElementById('SciFic');
        let Thriller = document.getElementById('Thriller');
        let Fiction = document.getElementById('Fiction');

        if (SciFic.checked) {
            type = SciFic.value;
        } else if (Thriller.checked) {
            type = Thriller.value;
        } else if (Fiction.checked) {
            type = Fiction.value;
        }

        let book = new Book(name, author, type);
        console.log(book);
        let display = new Display();
        if (display.validate(book)) {
            display.add(book);
            display.show('Success', ' Your book added successfully');
        }
        else {
            display.show('Error', ' You cannot add book');
        }
    }
