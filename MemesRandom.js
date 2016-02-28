var quotes = [
    {
        "quote"    :    "http://badassmemes.com/wp-content/uploads/2013/11/crush-my-enemies.jpg",
        "author"   :    " "
    },

    {
        "quote"    :    "https://s-media-cache-ak0.pinimg.com/564x/52/70/9b/52709b0346a2b23ad23c4ac39767fa0b.jpg",
        "author"   :    " "
    },

    {
        "quote"    :     "http://i1.kym-cdn.com/photos/images/newsfeed/000/581/567/bab.jpg",
        "author"   :     " "
    },

    {
        "quote"    :    "http://memesvault.com/wp-content/uploads/Asian-Dad-Meme-Face-10.jpg",
        "author"   :    " "
    },

    {
        "quote"    :    "http://www.quickmeme.com/img/fb/fb50e55931ea408914e3d4e952ee078740cabbdeb34cf119ee3667579d2bd6a8.jpg",
        "author"   :    " "
    },

    {
        "quote"    :    "http://img.memecdn.com/me-talking-to-animals-anime-himouto-umaru-chan_fb_5608725.jpg",
        "author"    :    " "
    },

    {
        "quote"    :    "http://cdnimg.in/wp-content/uploads/2015/08/trump-vs-corn-who-wore-it-better-meme.jpg?cfaea8",
        "author"    :    " "
    },

    {
        "quote"    :    "https://s-media-cache-ak0.pinimg.com/736x/ff/89/1c/ff891c36d10cededa0411a9100f3befe.jpg",
        "author"    :    " "
    },

    {
        "quote"    :    "http://img.memecdn.com/coding_o_147403.jpg",
        "author"    :    " "
    },

    {
        "quote"    :    "http://cdn.meme.am/instances/500x/48812887.jpg",
        "author"    :    " "
    },

    {
        "quote"    :    "https://s-media-cache-ak0.pinimg.com/236x/b9/2b/1b/b92b1b05c5396f3983045b529d1453a0.jpg",
        "author"    :    " "
    }
];


var q = quotes.length;

var whichquote = Math.floor(Math.random() * (q - 1));
console.log(whichquote);

$('#quoteText').html('<img src="' + quotes[whichquote].quote + '">');

