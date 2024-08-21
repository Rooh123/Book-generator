function displayBook(response) {
    console.log("book generated");
  new Typewriter("#book", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateBook(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#userInput");



  let apiKey = "974569437050o2aa8t3b74db826af365";
  let context = "you are a bibliophile who reads old fiction books. your mission is to write the name of the book along with a short famouse sentense in basic html make sure to consider the user input";
  let prompt = `user input is: generate, books are written by${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayBook);
  console.log("Generating book....");
 console.log(`prompt${prompt}`);
 console.log(`context${context}`);
}

let bookForm = document.querySelector("#book-generator-form");
bookForm.addEventListener("submit", generateBook);
