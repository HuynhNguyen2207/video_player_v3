// Initialize MediaElementsJS
$(document).ready(function(){$('video, audio').mediaelementplayer();});

// Get the <video> element with id="myVideo"
const vid = document.querySelector('#myVideo');
// Get the <span> elements
const span = document.querySelectorAll('span');

// Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
vid.ontimeupdate = function() {myFunction()};

function myFunction() {

  const span = document.querySelectorAll('span');

  for (let i = 0; i < span.length; i++) {

    let start = span[i].getAttribute('data-start');
    let end = span[i].getAttribute('data-end');

    if (vid.currentTime > start && vid.currentTime < end) {
      span[i].style.color = 'orange';
    } else {
      span[i].style.color = 'initial';
    }
  }
}

// Play The video when the span element is clicked
for (let i = 0; i < span.length; i++) {
  span[i].addEventListener('click', function() {

    let start = span[i].getAttribute('data-start');

    vid.currentTime = start;
    vid.play();

  });
}
