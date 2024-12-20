//we will be bulding a movtional quote generator 
// we will be using an array of quotes to generate a random quote

const quotes = [
    {quote1: ' "The power of positive thinking is the ability to generate a feeling of certainty in yourself when nothing in the environment supports you."',
     quote2: ' "When you are grateful, fear disappears and abundance appears."',
     quote3: ' "The only thing that’s keeping you from getting what you want is the story you keep telling yourself." ',
     quote4: ' “Persistence overshadows even talent as the most valuable resource shaping the quality of life.” ',
     quote5: ' “People who fail focus on what they have to go through; people who succeed focus on what it will feel like at the end.”',
     quote6: ' “Goals are like magnets. They’ll attract the things that make them come true.” ',
     quote7: ' “Setting goals is the first step in turning the invisible into the visible.”',
     quote8: ' “The path to success is to take massive, determined action." ',
     quote9: ' “Any time you sincerely want to make a change, the first thing you must do is to raise your standards.”',
     quote10: ' “Identify your problems, but give your power and energy to solutions.” ', 
     quote11: ' “The only thing that’s keeping you from getting what you want is the story you keep telling yourself.” ',
     quote12: ' “When you are grateful, fear disappears and abundance appears.” ',
    }
]

const quoteBtn = document.querySelector('#genBtn');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    let quoteList = document.createElement('ul');
    quote.innerHTML = ''; // Clear previous quotes
    quote.appendChild(quoteList);

    for (let i = 1; i <= 12; i++) {
        setTimeout(() => {
            let listItem = document.createElement('li');
            listItem.textContent = quotes[random][`quote${i}`];
            quoteList.appendChild(listItem);
        }, i * 1000); // Delay of 1 second between each quote
    }
});
