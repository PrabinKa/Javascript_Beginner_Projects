const url = `https://api.quotable.io/random`;

let quote = document.getElementById('quote');
let author = document.getElementById('author');

async function getQuotes(api){
    const response = await fetch(api);
    let data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuotes(url)

function shareTweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "By:- " + author.innerHTML , "Tweet Window", "width=600, height=300")
}