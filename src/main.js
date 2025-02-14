'use strict';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    //document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
    document.getElementById('app').innerHTML = `<p>Cute Fotografie</p>`;
  }, 1000);
}

counter();
