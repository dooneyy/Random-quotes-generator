const newQuoteBtn = document.getElementById('js-new-quote');
const spinner = document.getElementById('js-spinner');
const twitterBtn = document.getElementById('js-tweet');

newQuoteBtn.addEventListener('click', getQuote);

// adding the api url 
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'; 


async function getQuote() {
   spinner.classList.remove('hidden');
   newQuoteBtn.disabled = true

    try{
        const response = await fetch(endpoint)

        if(!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        displayQuote(json.message);
        setTweetButton(json.message)
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    } finally {
        spinner.classList.add('hidden');
        newQuoteBtn.disabled = false;
    }
}

function displayQuote(quote) {
    const quoteText = document.getElementById('js-quote-text');
    quoteText.textContent = quote;
}

function setTweetButton(quote) {
    twitterBtn.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
  }

  getQuote();

  