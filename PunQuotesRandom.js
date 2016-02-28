var quotes = [
    {
        "quote"    :    "The optimist sees the glass half full. The pessimist sees the glass half empty. The chemist sees the glass completely full, half with liquid and half with air.",

        "author"   :    " "
    },

    {
        "quote"    :    "Don't trust atoms, they make up everything.",
        "author"   :    " "
    },

    {
        "quote"    :     "I asked the guy sitting next to me if he had any Sodium Hypobromite... He said NaBrO.",
        "author"   :     " "
    },

    {
        "quote"    :    "Biology is the only science in which multiplication is the same thing as division.",
        "author"   :    " "
    },

    {
        "quote"    :    "If you're not part of the solution, you're part of the precipitate.",
        "author"   :    " "
    },

    {
        "quote"    :    "Old chemists never die, they just stop reacting.",
        "author"    :    " "
    },

    {
        "quote"    :    "Titanium is a most amorous metal. When it gets hot, it'll combine with anything.",
        "author"    :    " "
    },

    {
        "quote"    :    "Money has recently been discovered to be a not-yet-identified super heavy element. The proposed name is: Un-obtainium.",
        "author"    :    " "
    },

    {
        "quote"    :    "We're making bad chemistry jokes because all the good ones Argon.",
        "author"    :    " "
    },

    {
        "quote"    :    "We would like to apologize for not adding more jokes... but we only update them.... periodically!",
        "author"    :    " "
    }
];


var q = quotes.length;

var whichquote = Math.floor(Math.random() * (q - 1));
console.log(whichquote);

$('#quoteText').html(quotes[whichquote].quote + '<br><br>' + '<i>' + quotes[whichquote].author + '</i>');

