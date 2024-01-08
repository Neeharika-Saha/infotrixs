const quoteText=document.getElementById("quote");
const quoteAuthor=document.getElementById("author");

function getNewQuote(){
    //API for quotes and fetch the data from api
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            display(data);
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
        });
}

function display(quote) {
    
    //function to dynamically display the quote and the author
    quoteText.textContent = `"${quote.content}"`;
    quoteAuthor.textContent = `~ ${quote.author}`;
}

// Add a new function to handle the search by author
function searchByAuthor() {
    const authorSearchInput = document.getElementById('authorSearch');
    const authorName = authorSearchInput.value.trim();

    // If the search input is not empty, fetch and display a quote by the specified author
    if (authorName !=='') {
        getQuoteByAuthor(authorName);
    } else {
        // If the search input is empty, fetch and display a random quote
        alert("Provide a correct author name!!!")
    }
}

// Add a new function to fetch a quote by a specific author
function getQuoteByAuthor(author) {
    fetch(`https://api.quotable.io/quotes?author=${author}`)
        .then(response => response.json())
        .then(data => {
            // Display a random quote by the specified author
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const quote = data.results[randomIndex];
            display(quote);
        })
        .catch(error => {
            console.error(`Error fetching quotes by ${author}:`, error);
        });
}

getNewQuote();
