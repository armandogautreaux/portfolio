// Global Variables
var numberPage = $('.number-page');
var ProjectName = $('.ProjectName');
var yearText = $('.text-container-inner-plus');
var img1 = $('.img-inner1');
var img2 = $('.img-inner2');
var img3 = $('.img-inner3');
var textInner = $('.text-container-inner ');
var btn1 = $('.under-1');
var btn2 = $('.under-2');

// Project Content
var project1 = {
  name: 'Organic Fitness World',
  info: 'Role: Front-End Developer',
  imgs: [
    'public/images/img01.jpg',
    'public/images/img02.jpg',
    'public/images/img03.jpg'
  ],
  text:
    'Online Store specialized in organic products for athletes such as groceries, supplements, and clothing. This full stack app is the result of the final project from the SMU Coding Program and showcases my contribution as Front-End Developer. It features React, Sass, ReactStrap, Express, MongoDB, Redux, NodeJS, and Passport JWT.',
  hrefS: [
    'https://github.com/igorcweb/online-store',
    'https://organic-fitness-world.herokuapp.com/'
  ]
};

var project2 = {
  name: 'FlyAway',
  info: 'Role: Back-End Developer',
  imgs: [
    'public/images/img04.jpg',
    'public/images/img05.jpg',
    'public/images/img06.jpg'
  ],
  text:
    'Local Airline App that allows the user to book tickets, look for reservations, cancel purchased tickets and, search for a specific flight. This Application represents the outcome of my second group project from the SMU Coding Program and demonstrates my modest knowledge as Back-End Developer. It features MySQL, Handlebars, Node.Js, Express.JS and BodyParser.',
  hrefS: [
    'https://github.com/uta200105/FlyAway',
    'https://flyawaytx.herokuapp.com/'
  ]
};
var project3 = {
  name: 'Newstaker',
  info: 'Role: Full-Stack Developer',
  imgs: [
    'public/images/img07.jpg',
    'public/images/img08.jpg',
    'public/images/img09.jpg'
  ],
  text:
    "Newstaker is Full-Stack App that let users view and leave comments on the latest news, it uses Mongoose and Cheerio to scrape news from the NYTimes and storage them in it's own database.",
  hrefS: [
    'https://github.com/armandogautreaux/newstaker',
    'https://newstaker.herokuapp.com/'
  ]
};
var project4 = {
  name: 'Eat-Da-Burger!',
  info: 'Role: Full-Stack Developer',
  imgs: [
    'public/images/img10.jpg',
    'public/images/img11.jpg',
    'public/images/img12.jpg'
  ],
  text:
    "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like eat so the app stores every burger in an online database. This Full-Stack App features MySQL, Node, Express and Handlebars.",
  hrefS: [
    'https://github.com/armandogautreaux/burger',
    'https://burgertx.herokuapp.com/'
  ]
};
var project5 = {
  name: 'FriendFinder',
  info: 'Role: Full-Stack Developer',
  imgs: [
    'public/images/img13.jpg',
    'public/images/img14.jpg',
    'public/images/img15.jpg'
  ],
  text:
    "FriendFinder is basically a dating app. It takes in results from ther users' surveys, then compare their answers with those from other users and display the name of the user with the best overall match. This Full-Stack App features, Node,Express, front and back-end JS and, plain HTML and CSS.",
  hrefS: [
    'https://github.com/armandogautreaux/FriendFinder',
    'https://friendfindertx.herokuapp.com/'
  ]
};
var project6 = {
  name: 'Bamazon',
  info: 'Role: Back-End Developer',
  imgs: [
    'public/images/img16.jpg',
    'public/images/img17.jpg',
    'public/images/img18.jpg'
  ],
  text:
    "Bamazon is an Amazon-like storefront that runs with MySQL as Database. This back-end app takes in orders from customers and deplete stock from the store's inventory. It features Node, front and back-end JS and, plain HTML and CSS.",
  hrefS: [
    'https://github.com/armandogautreaux/bamazon',
    'https://github.com/armandogautreaux/bamazon'
  ]
};
var project7 = {
  name: 'Train-Scheduler',
  info: 'Role: Full-Stack Developer',
  imgs: [
    'public/images/img19.jpg',
    'public/images/img20.jpg',
    'public/images/img21.jpg'
  ],
  text:
    'Train-Scheduler is an application that incorporates Firebase to host arrival and departure data. The app retrieves and manipulates this information with Moment.js. This website provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.',
  hrefS: [
    'https://github.com/armandogautreaux/Train-Scheduler',
    'https://armandogautreaux.github.io/Train-Scheduler/'
  ]
};
var project8 = {
  name: 'GifTastic',
  info: 'Role: Front-End Developer',
  imgs: [
    'public/images/img22.jpg',
    'public/images/img23.jpg',
    'public/images/img24.jpg'
  ],
  text:
    "GifTastic is a JS App that uses the GIPHY API to make a dynamic web page that populates with gifs of the user's choice. This front-end site uses JavaScript and jQuery to change the HTML of this site.",
  hrefS: [
    'https://github.com/armandogautreaux/GifTastic',
    'https://armandogautreaux.github.io/GifTastic/'
  ]
};
var project9 = {
  name: 'TriviaGame',
  info: 'Role: Front-End Developer',
  imgs: [
    'public/images/img25.jpg',
    'public/images/img26.jpg',
    'public/images/img27.jpg'
  ],
  text:
    'Trivia Game is an App that uses JavaScript for the logic and jQuery to manipulate HTML. In this game, the App creates a trivia form with multiple choice or true/false options, from where the player will have a limited amount of time to choose from. The game ends when the time runs out.',
  hrefS: [
    'https://github.com/armandogautreaux/TriviaGame',
    'https://armandogautreaux.github.io/TriviaGame/'
  ]
};
var project10 = {
  name: 'Crystal Collector',
  info: 'Role: Front-End Developer',
  imgs: [
    'public/images/img28.jpg',
    'public/images/img29.jpg',
    'public/images/img30.jpg'
  ],
  text:
    'Cristal Collector is a jQuery Game that dynamically update the HTML pages. In this App the player wins if their total score matches the random number from the beginning of the game.',
  hrefS: [
    'https://github.com/armandogautreaux/unit-4-game',
    'https://armandogautreaux.github.io/unit-4-game/'
  ]
};

// The next function set new values of every project through a hover event
function setNewValues(project) {
  $('.overlay-content-section').empty();

  var projectName = $('<h2>')
    .text(project.name)
    .addClass('ProjectName');
  var subtitle = $('<p>')
    .text(project.info)
    .addClass('subtitle mb-4');
  var textContent = $('<p>')
    .text(project.text)
    .addClass('text-container-inner mt-1 mb-4');

  var gallery = $('<div>').addClass('gallery');
  var img1 = $('<img>')
    .addClass('img-inner1 img')
    .attr('src', project.imgs[0])
    .attr('alt', project.info);
  var img2 = $('<img>')
    .addClass('ml-2 img-inner2 img')
    .attr('src', project.imgs[1])
    .attr('alt', project.info);
  var img3 = $('<img>')
    .addClass('ml-2 img-inner3 img')
    .attr('src', project.imgs[2])
    .attr('alt', project.info);
  gallery.append(img1, img2, img3);

  showImgToggle = $('<a>')
    .attr('id', 'btn-display')
    .attr('href', '#')
    .text('Show Images');

  var leftUl = $('<ul>').addClass('links-port text-right');
  var link1 = $('<li>').addClass('link-under-2');
  var link2 = $('<li>').addClass('link-under-1');
  var link1Inner = $('<a>')
    .text('SEE CODE')
    .addClass('btn btn-custom under-1')
    .attr('href', project.hrefS[0])
    .attr('target', '_blank');
  var link2Inner = $('<a>')
    .text('VISIT SITE')
    .addClass('btn btn-custom under-2 ml-2')
    .attr('href', project.hrefS[1])
    .attr('target', '_blank');
  link1.append(link1Inner);
  link2.append(link2Inner);
  leftUl.append(link1, link2);
  $('.overlay-content-section').append(
    projectName,
    subtitle,
    textContent,
    gallery,
    showImgToggle,
    leftUl
  );
}

$('.menu__link1').hover(function() {
  setNewValues(project1);
});

$('.menu__link2').hover(function() {
  setNewValues(project2);
});

$('.menu__link3').hover(function() {
  setNewValues(project3);
});

$('.menu__link4').hover(function() {
  setNewValues(project4);
});
$('.menu__link5').hover(function() {
  setNewValues(project5);
});
$('.menu__link6').hover(function() {
  setNewValues(project6);
});
$('.menu__link7').hover(function() {
  setNewValues(project7);
});
$('.menu__link8').hover(function() {
  setNewValues(project8);
});
$('.menu__link9').hover(function() {
  setNewValues(project9);
});
$('.menu__link10').hover(function() {
  setNewValues(project10);
});

// The next funciton display images of every project through a click event
function displayImages() {
  event.preventDefault();
  if ($('.gallery').is(':visible'))
    $('.gallery').hide(), $('#btn-display').text('Show Images');
  else $('.gallery').show(), $('#btn-display').text('Hide Images');
}
$(document).on('click', '#btn-display', displayImages);

// The next function is activated once a email request is send it and the server has receive it.
$('#contact-form').submit(event => {
  event.preventDefault();
  if ($('[name="name"]').val() == '') {
    alert('Please enter your Full Name');
  } else if ($('[name="email"]').val() == '') {
    alert('Please enter your a valid email');
  } else if ($('[name="message"]').val() == '') {
    alert('Please enter your message');
  } else {
    const newContact = {
      name: $('[name="name"]')
        .val()
        .trim(),
      email: $('[name="email"]')
        .val()
        .trim(),
      subject: $('[name="subject"]')
        .val()
        .trim(),
      message: $('[name="message"]')
        .val()
        .trim()
    };

    $.post('/send', newContact).done(function(data) {
      if (data) {
        $('[name="name"]').val(''),
          $('[name="email"]').val(''),
          $('[name="subject"]').val(''),
          $('[name="message"]').val('');
        $('#myModal').modal('toggle');
        $('#modalBody').text(
          'Dear ' +
            data.name +
            ', thank you for contact me, I have received your menssage. As early as possible I will get back to you.'
        );
      }
    });
  }
});

// The next function shows and hice the list of projects in small screens.

$(document.body).on('click', '.closing-toggle', function() {
  var state = $(this).attr('data-state');

  if (state === 'open') {
    $(this).empty();
    $('.right-test').hide();
    var titleToggle = $('<small>').text('Projects   ');
    var icon = $('<i>');
    icon.addClass('fas');
    icon.addClass('fa-expand-arrows-alt');
    $(this).append(titleToggle, icon);
    $(this).attr('data-state', 'close');
  } else {
    $('.right-test').show();
    $(this).empty();
    var icon = $('<i>');
    icon.addClass('fas');
    icon.addClass('fa-times');
    $(this).append(icon);
    $(this).attr('data-state', 'open');
  }
});
