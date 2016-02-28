var quotes = [
    {
        "quote"    :    "The message of this lecture is that black holes ain't as black as they are painted. They are not the eternal prisons they were once thought. Things can get out of a black hole both on the outside and possibly to another universe. So if you feel you are in a black hole, don't give up. There's a way out.",

        "author"   :    " - Stephen Hawking"
    },

    {
        "quote"    :    "Do not worry about your difficulties in Mathematics. I can assure that mine are still greater.",
        "author"   :    " - Albert Einstein"
    },

    {
        "quote"    :     "Think like a proton and stay positive! :)",
        "author"   :     " "
    },

    {
        "quote"    :    "You are the universe, expressing itself as a human for a little while.",
        "author"   :    " - Eckhart Tolle"
    },

    {
        "quote"    :    "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, and the carbon in our apple pies were made in the interiors of collapsing stars. You are literally made of star stuff.",
        "author"   :    " - Carl Sagan"
    },

    {
        "quote"    :    "Energy, like you, has no beginning and no end. It can never be destoryed. It is only ever shifting states.",
        "author"    :    " - Panache Desai"
    },

    {
        "quote"    :    "It is never too late to be what you might have been.",
        "author"    :    " - George Eliot"
    },

    {
        "quote"    :    "You miss 100% of the shots you don't take.",
        "author"    :    " - Wayne Gretzky"
    },

    {
        "quote"    :    "Pursue your passions, even when you feel absolutely worthless.",
        "author"    :    " - Bret Autrey"
    }
];


var q = quotes.length;

var whichquote = Math.floor(Math.random() * (q - 1));
console.log(whichquote);

$('#quoteText').html(quotes[whichquote].quote + '<br><br>' + '<i>' + quotes[whichquote].author + '</i>');

