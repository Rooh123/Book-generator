function generateBook(event) {
  event.preventDefault();

  new Typewriter("#book", {
    strings: "Hemlet",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  authorName.innerHTML = "<em>Hemlet</em>";
}

let bookForm = document.querySelector("#book-generator-form");
bookForm.addEventListener("submit", generateBook);
