var numberPage = $('.number-page');
var ProjectName = $('.ProjectName');
var yearText = $('.text-container-inner-plus');
var img1 = $('.img-inner1');
var img2 = $('.img-inner2');
var img3 = $('.img-inner3');
var textInner = $('.text-container-inner ');
var btn1 = $('.under-1');
var btn2 = $('.under-2');
// var srcimg = ['/images/img01.jpg', '/images/img2.jpg', '/images/img03.jpg'];

var project1 = {
  name: 'Organic Fitness World',
  info: 'ONLINE STORE - 2018',
  imgs: [
    'public/images/img01.jpg',
    'public/images/img02.jpg',
    'public/images/img03.jpg'
  ],
  text:
    'Online Store specialized in organic products for athlets such as groceries, supplements and clothing. This full stack app features: MongoDB, Express, React, Redux, NodeJS, Sass, ReactStrap, and Passport JWT.',
  hrefS: [
    'https://github.com/igorcweb/online-store',
    'https://organic-fitness-world.herokuapp.com/'
  ]
};

var project2 = {
  name: 'FlyAway',
  info: 'Airline App - 2018',
  imgs: [
    'public/images/img04.jpg',
    'public/images/img05.jpg',
    'public/images/img06.jpg'
  ],
  text:
    'Full-Stack App  that accomplishes most common functions of a local Airline Company such as booking tickets, see reservations, cancel tickets and, search for an specific flight status. This App feautures MySQL, Handlebars, Node.Js, Express.JS and BodyParser.',
  hrefS: [
    'https://github.com/uta200105/FlyAway',
    'https://flyawaytx.herokuapp.com/'
  ]
};
var project3 = {
  name: 'Newstaker',
  info: 'Scraper - 2018',
  imgs: [
    'public/images/img07.jpg',
    'public/images/img08.jpg',
    'public/images/img09.jpg'
  ],
  text:
    "This Full-Stack App let users view and leave comments on the latest news. Newstaker uses Mongoose and Cheerio to scrape news from the NYTimes and storage them in it's own database.",
  hrefS: [
    'https://github.com/armandogautreaux/newstaker',
    'https://newstaker.herokuapp.com/'
  ]
};
var project4 = {
  name: 'Eat-Da-Burger!',
  info: 'HandleBars - 2018',
  imgs: [
    'public/images/img10.jpg',
    'public/images/img11.jpg',
    'public/images/img12.jpg'
  ],
  text:
    "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app displays the burger on the left side of the page -- waiting to be devoured. The app stores every burger in a database, whether devoured or not. This app features MySQL, Node, Express and Handlebars.",
  hrefS: [
    'https://github.com/armandogautreaux/burger',
    'https://burgertx.herokuapp.com/'
  ]
};
var project5 = {
  name: 'FriendFinder',
  info: 'ExpressJs - 2018',
  imgs: [
    'public/images/img13.jpg',
    'public/images/img14.jpg',
    'public/images/img15.jpg'
  ],
  text:
    "FriendFinder is basically a dating app. This full-stack site takes in results from ther users' surveys, then compare their answers with those from other users. The app will then display the name of the user with the best overall match.",
  hrefS: [
    'https://github.com/armandogautreaux/FriendFinder',
    'https://friendfindertx.herokuapp.com/'
  ]
};
var project6 = {
  name: 'Bamazon',
  info: 'MySQL/Databases - 2018',
  imgs: [
    'public/images/img16.jpg',
    'public/images/img17.jpg',
    'public/images/img18.jpg'
  ],
  text:
    "Bamazon is an Amazon-like storefront that runs with MySQL as Database. The app takes in orders from customers and deplete stock from the store's inventory.",
  hrefS: [
    'https://github.com/armandogautreaux/bamazon',
    'https://github.com/armandogautreaux/bamazon'
  ]
};
var project7 = {
  name: 'Train-Scheduler',
  info: 'Firebase/Moment.js - 2018',
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
  info: 'API Calls - 2018',
  imgs: [
    'public/images/img22.jpg',
    'public/images/img23.jpg',
    'public/images/img24.jpg'
  ],
  text:
    'GifTastic is a JS App that uses the GIPHY API to make a dynamic web page that populates with gifs of your choice. In this App we call the GIPHY API and use JavaScript and jQuery to change the HTML of this site.',
  hrefS: [
    'https://github.com/armandogautreaux/GifTastic',
    'https://armandogautreaux.github.io/GifTastic/'
  ]
};
var project9 = {
  name: 'TriviaGame',
  info: 'JSTimer - 2018',
  imgs: [
    'public/images/img25.jpg',
    'public/images/img26.jpg',
    'public/images/img27.jpg'
  ],
  text:
    'Trivia Game is an App that uses JavaScript for the logic and jQuery to manipulate HTML. In this game, the App creates a trivia form with multiple choice or true/false options, from where the player will have a limited amount of time to choose from. The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.',
  hrefS: [
    'https://github.com/armandogautreaux/TriviaGame',
    'https://armandogautreaux.github.io/TriviaGame/'
  ]
};
var project10 = {
  name: 'Crystal Collector',
  info: 'jQuery Game - 2018',
  imgs: [
    'public/images/img28.jpg',
    'public/images/img29.jpg',
    'public/images/img30.jpg'
  ],
  text:
    "Cristal Collector is a jQuery Game that dynamically update the HTML pages. In this App, there will be four crystals displayed as buttons on the page, the player will be shown a random number at the start of the game, when the player clicks on a crystal, it will add a specific amount of points to the player's total score. The player wins if their total score matches the random number from the beginning of the game.",
  hrefS: [
    'https://github.com/armandogautreaux/unit-4-game',
    'https://armandogautreaux.github.io/unit-4-game/'
  ]
};
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
  // $('.overlay-content-section').css('background-color', '#80c0ca');
});

$('.menu__link2').hover(function() {
  setNewValues(project2);
  // $('.overlay-content-section').css('background-color', '#657881');
});

$('.menu__link3').hover(function() {
  setNewValues(project3);
  // $('.overlay-content-section').css('background-color', '#5d8fac');
});

$('.menu__link4').hover(function() {
  setNewValues(project4);
  // $('.overlay-content-section').css('background-color', '#ec8466');
});
$('.menu__link5').hover(function() {
  setNewValues(project5);
  // $('.overlay-content-section').css('background-color', '#4c5c7a');
});
$('.menu__link6').hover(function() {
  setNewValues(project6);
  // $('.overlay-content-section').css('background-color', '#4b668a');
});
$('.menu__link7').hover(function() {
  setNewValues(project7);
  // $('.overlay-content-section').css('background-color', '#9dafc7');
});
$('.menu__link8').hover(function() {
  setNewValues(project8);
  // $('.overlay-content-section').css('background-color', '#45aae9');
});
$('.menu__link9').hover(function() {
  setNewValues(project9);
  // $('.overlay-content-section').css('background-color', '#3c86c3');
});
$('.menu__link10').hover(function() {
  setNewValues(project10);
  // $('.overlay-content-section').css('background-color', '#799cc1');
});

function displayImages() {
  event.preventDefault();
  if ($('.gallery').is(':visible'))
    $('.gallery').hide(), $('#btn-display').text('Show Images');
  else $('.gallery').show(), $('#btn-display').text('Hide Images');
}
$(document).on('click', '#btn-display', displayImages);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;
$('#date').text(today);

$('.menu__linkAbout').hover(function() {
  event.preventDefault();
  $('.overlay-content-section').empty();
  var tittlehead = $('<p>')
    .text('About me')
    .addClass('tittlehead mt-5');
  // var imgProfile = $('<img>')
  //   .attr('src', '/Assets/images/profile.jpg')
  //   .addClass('imgProfile mx-auto');

  var textAbout1 = $('<p>')
    .text(
      ' Hello, my name is Armando Gautreaux, I am a full-stack JS Developer with experience in all 5 stages of the web development process including: information gathering, planning, design, development, testing and delivery. Some of my Coding Skills include Vanilla JavaScript, JQuery, Node, Express, MySQL, Mongo, Handlebars and React. '
    )
    .addClass('mt-5 mb-4');
  var textAbout2 = $('<p>').text(
    ' I also have a modest knowledge in Photoshop, Illustrator and Sketch, some of my certifications in Design include  Typography and Fundamentals of Graphic Design for CalArts. I invite you to visit my project seccion and read a small description about each of them, you can even visit each site (live) or see my code through Github. I am so thankfull that you spend the time reading my profile. Wishing you the best of luck. '
  );
  // .addClass('text-center');

  var dateToday = $('<p>').attr('id', 'date');

  var innerContainerAbout = $('<div>').addClass(
    'about-inner-text mt-0  mb-3 mx-auto'
  );
  innerContainerAbout.append(
    tittlehead,
    textAbout1,
    textAbout2,

    dateToday
  );
  var containerAbout = $('<div>').addClass('container-inner-about');
  containerAbout.append(innerContainerAbout);
  $('.overlay-content-section').css('background-color', 'white');
  $('.overlay-content-section').append(containerAbout);
});

$('.menu__linkContact').hover(function() {
  event.preventDefault();
  $('.overlay-content-section').empty();
  var formDiv = $('<div>').addClass('mx-5 p-5 div-form');
  var headingText = $('<p>')
    .text('Reach out')
    .addClass('tittlehead');
  var textMsg = $('<p>')
    .text(
      'I would like to hear from you. Please send me a message by filling out the form bellow and I will get back to you shortly.'
    )
    .addClass('about-inner-text');

  var formContent = $('<form>')
    .addClass('mt-3')
    .attr('id', 'contact-form2');

  var nameFormGroup = $('<div>')
    .addClass('form-group pt-0 mt-0')
    .append(
      $('<input>')
        .attr('type', 'text')
        .attr('name', 'name')
        .attr('placeholder', 'Name')
        .addClass('form-control')
    );
  var emailFormGroup = $('<div>')
    .addClass('form-group pt-0 mt-0')
    .append(
      $('<input>')
        .attr('type', 'email')
        .attr('name', 'email')
        .attr('placeholder', 'Email')
        .addClass('form-control')
    );

  var topic = $('<div>')
    .addClass('form-group')
    .append(
      $('<input>')
        .attr('type', 'text')
        .attr('name', 'subject')
        .attr('placeholder', 'Topic')
        .addClass('form-control')
    );

  var textFormGroup = $('<div>')
    .addClass('form-group')
    .append(
      $('<textarea>')
        .attr('type', 'text')
        .attr('name', 'message')
        .attr('placeholder', 'Message')
        .addClass('form-control')
    );
  var buttonFooter = $('<button>')
    .addClass('btn btn-secondary mt-3 btn-block')
    .attr('type', 'submit')
    .attr('name', 'submit')
    .text('SUBMIT');
  var altMsg = $('<small>')
    .text('For other inquieries, reach out to info@armandogautreaux.com')
    .addClass('d-block mt-5  text-muted');
  formContent.append(
    nameFormGroup,

    emailFormGroup,
    topic,
    textFormGroup,
    buttonFooter
  );
  formDiv.append(
    headingText,
    textMsg,
    // secondHeading,
    // emailheading,
    formContent,
    altMsg
  );

  $('.overlay-content-section').css('background-color', 'white');
  $('.overlay-content-section').append(formDiv);
});

$('#contact-form').submit(event => {
  event.preventDefault();
  if ($('[name="name"]').val() == '') {
    alert('Please enter your Full Name');
  } else if ($('email').val() == '') {
    alert('Please enter your a valid email');
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

    //4. We call our post (ajax) method to send our object to the back-end
    $.post('/send', newContact).done(function(data) {
      //After our back-end receive the object and proccess its logic, send back the data to display to the user
      if (data) {
        $('[name="name"]').val(''),
          $('[name="email"]').val(''),
          $('[name="subject"]').val(''),
          $('[name="message"]').val('');

        //If our logic was correct, the next info is gonna be displayed to the user through the hidden Boostrap modal
        // $('#contactModal').modal('hide');
        // $('#contactModal').toggle();
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

$(document.body).on('click', '.closing-toggle', function() {
  var state = $(this).attr('data-state');

  if (state === 'open') {
    $('.right-test').hide();
    $(this).text('Projects  ');
    var icon = $('<i>');
    icon.addClass('fas');
    icon.addClass('fa-external-link-alt');
    $(this).append(icon);
    $(this).attr('data-state', 'close');
  } else {
    $('.right-test').show();
    var icon = $('<i>');
    $(this).text('');
    icon.addClass('fas');
    icon.addClass('fa-times');
    $(this).append(icon);
    $(this).attr('data-state', 'open');
  }
});

// function checkWidth(init) {
//   if ($(window).width() < 768) {
//     $('.footer-ul').addClass('justify-content-center');
//   } else {
//     if (!init) {
//       $('.footer-ul').removeClass('justify-content-center');
//       $('.container-footer').removeClass('d-flex');
//       // $('.margin-left-auto').addClass('ml-auto');
//       $('.container-footer').addClass('px-0');
//       $('.navlink-1-bo').addClass('ml-0 pl-0');
//     }
//   }
// }

// checkWidth(true);

// $(window).resize(function() {
//   checkWidth(false);
// });
