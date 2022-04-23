var getUserEndPoint = "http://127.0.0.1:8091/getUser"



$(document).ready(function () {
  $.ajax({
    url: getUserEndPoint,
    type: "GET",
    xhrFields: {
      withCredentials: true
    },
    success: function (response) {
      console.log(response)
      console.log(response.username)
      $("#userName").html(response.username)
      $("#email").html(response.email)
    },
    error: function (error) {
      alert(error.responseText)
    }
  });
})


//////////////ARROWS ///////////////////
///////////////////////////////
$('.rightContainer').on('click', () => {
  $('.stories').addClass('col-md-6')
  $('.stories').css('margin-left', '-50%')
  $(".second").animate({
    marginLeft: '-100%'
  }, 500);
});

$('.leftContainer').on('click', () => {
  $('.blogs').addClass('col-md-6')
  $(".blogs").animate({
    marginRight: '50%'
  }, 500);
});


//////////////INFO H1_TITLE ///////////////////
///////////////////////////////
$('.rightContainer').on('mouseover', () => {
  $('.info').html('Interactive stories')
});
$('.leftContainer').on('mouseover', () => {
  $('.info').html('Blogs')
});
$('.first').on('mouseover', () => {
  $('.info').html('My posts')
});

/////////////// PARTICLES /////////////
////////////////////////////
particlesJS("bg", {
  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": true,
        "value_area": 315
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);