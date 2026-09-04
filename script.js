// 👇 YOUR QUOTES GO HERE (Add/remove as you like!)
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Be the change you wish to see in the world. – Mahatma Gandhi",
    "In the end, we only regret the chances we didn't take. – Unknown",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. – Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. – Franklin D. Roosevelt",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt"
];

// Pick a random quote and display it
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').textContent = quotes[randomIndex];
}

// Show a quote when page loads
window.onload = showRandomQuote;

// Show new quote when button clicked
document.getElementById('new-quote').addEventListener('click', showRandomQuote);