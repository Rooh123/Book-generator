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
  let context = "you are a bibliophile who reads fiction books. your mission is to write the names of all the books, along with a short famouse sentense of that book in basci html. make sure to consider the user input";
  let prompt = `user input is: generate, books are written by${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let bookElement = document.querySelector("#book");
  bookElement.classList.remove("hidden");
  bookElement.innerHTML=`<div class="generating"> ⏳Generating Books written by ${userInput.value}.....</div>`;
  axios.get(apiUrl).then(displayBook);
  console.log("Generating book....");
 console.log(`prompt${prompt}`);
 console.log(`context${context}`);
}

let bookForm = document.querySelector("#book-generator-form");
bookForm.addEventListener("submit", generateBook);
