// Yak settings. 

$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Slider : Rev settings. 

$('.owl-carousel').owlCarousel({ 
items:1, 
margin:10, 
autoHeight:true, 
loop:true, 
nav:true 
});

// Slider : Works.

var mixer = mixitup('.works__item__wrapper');


$(".works__button-wrapper button").click(function(e) {
  e.preventDefault();
  $(".works__button-wrapper button").removeClass('works__button-active');
  $(this).addClass('works__button-active');
})



//Youtube script.
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'RIA2POf6PBA',  // youtube video id
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

var p = document.getElementById ("player");
$(p).hide();

var t = document.getElementById ("video__section");
t.src = "http://img.youtube.com/vi/AkyQgpqRyBY/0.jpg";

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.video__play').fadeIn('normal');
    }
}

$(document).on('click', '.video__play', function () {
    $("#player").show();
    $(".video__mid").hide();
    player.playVideo();
});


// Map creation.

function initMap() {
  var myLatLng = {lat: 55.651493, lng: 37.488762};
    
      var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
],
    center: myLatLng,
    mapTypeControl: false,
    disableDefaultUI: true,
    scrollwheel: false,
  });
    
     var contentString = 
        '117513, Москва, Ленинский проспект, 119а, 5-й этаж, Тел. +7 (495) 933-61-30, факс: +7 (495) 933-61-31.';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    
          var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: '117513, Москва, Ленинский проспект, 119а, 5-й этаж, Тел. +7 (495) 933-61-30, факс: +7 (495) 933-61-31.'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}





//Form settings. 

$(document).ready(function(){
    $('.review__call').on('click', function(){
        $('.review__connect-form').toggle();
    });
    
    
});

$(document).ready(function(){
    $('.close__svg').on('click', function(){
        $('.review__connect-form').toggle();
    });
});

$(document).ready(function(){
    $('.rev__bg').on('click', function(){
        $('.review__connect-form').toggle();
    });
});

