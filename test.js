let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [ 
            'Learn to still the mind',
            'Happiness is calmness',
            'Being present is harmony',
            'Present moment and expectations',
            'If you think you cant meditate',
            'Purposefully remain calm',
            'Meditation is freedom and happiness',
            'Begin spiritual practice',
            'Taste the present moment',
            'Learn to switch off the mind',
            'How long you can be present',
            'The expansiveness of your soul',
            'Meditation is gold',
            'Love peacefulness more',
            'Find happiness and joy in stillness',
            'Feel the inner calmness',
            'Without the mind, there is peace',
            'Live in the now',
            'Ignore the monkey mind',
            'Anchor to the present moment',
            'Learn to switch off your thoughts',
            'Live in the present, fearlessly',
            'Love spiritual practice',
            ];


btn.addEventListener('click',function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;
})