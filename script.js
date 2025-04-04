$(document).ready(function() {

  console.log("jQuery is working");

  function avenaStuff() {
    if (avenaButton.textContent == "Avena's a popstar!") {
      avenaButton.textContent = "Click to see the future!";
    } else {
      avenaButton.textContent = "Avena's a popstar!";
    }
    playAvenaSound();
  }

  function playAvenaSound() {
    if (avenaButton.textContent == "Avena's a popstar!") {
      avenaMusic.play();
      $('#oneAvena').show();
      $('#twoAvena').hide();
    } else {
      avenaMusic.pause();
      $('#twoAvena').show();
      $('#oneAvena').hide();
    }
  }

  function maggieStuff() {
    if (maggieButton.textContent == "Maggie's a fairy ballerina!") {
      maggieButton.textContent = "Click to see the future!";
    } else {
      maggieButton.textContent = "Maggie's a fairy ballerina!";
    }
    playMaggieSound();
  }

  function playMaggieSound() {
    if (maggieButton.textContent == "Maggie's a fairy ballerina!") {
      maggieMusic.play();
      $('#oneMaggie').show();
      $('#twoMaggie').hide();
    } else {
      maggieMusic.pause();
      $('#twoMaggie').show();
      $('#oneMaggie').hide();
    }
  }

  function dexterStuff() {
    if (dexterButton.textContent == "Dexter's a builder!") {
      dexterButton.textContent = "Click to see the future!";
    } else {
      dexterButton.textContent = "Dexter's a builder!";
    }
    playDexterSound();
  }

  function playDexterSound() {
    if (dexterButton.textContent == "Dexter's a builder!") {
      dexterMusic.play();
      $('#oneDexter').show();
      $('#twoDexter').hide();
    } else {
      dexterMusic.pause();
      $('#twoDexter').show();
      $('#oneDexter').hide();
    }
  }

  function millieStuff() {
    if (millieButton.textContent == "Millie's a unicorn taxi driver!") {
      millieButton.textContent = "Click to see the future!";
    } else {
      millieButton.textContent = "Millie's a unicorn taxi driver!";
    }
    playMillieSound();
  }

  function playMillieSound() {
    if (millieButton.textContent == "Millie's a unicorn taxi driver!") {
      millieMusic.play();
      $('#oneMillie').show();
      $('#twoMillie').hide();
    } else {
      millieMusic.pause();
      $('#twoMillie').show();
      $('#oneMillie').hide();
    }
  }

  function eliStuff() {
    if (eliButton.textContent == "Elianna's a veterinarian!") {
      eliButton.textContent = "Click to see the future!";
    } else {
      eliButton.textContent = "Elianna's a veterinarian!";
    }
    playEliSound();
  }

  function playEliSound() {
    if (eliButton.textContent == "Elianna's a veterinarian!") {
      eliMusic.play();
      $('#oneEli').show();
      $('#twoEli').hide();
    } else {
      eliMusic.pause();
      $('#twoEli').show();
      $('#oneEli').hide();
    }
  }

  function benStuff() {
    if (benButton.textContent == "Ben's an archaeologist!") {
      benButton.textContent = "Click to see the future!";
    } else {
      benButton.textContent = "Ben's an archaeologist!";
    }
    playBenSound();
  }

  function playBenSound() {
    if (benButton.textContent == "Ben's an archaeologist!") {
      benMusic.play();
      $('#oneBen').show();
      $('#twoBen').hide();
    } else {
      benMusic.pause();
      $('#twoBen').show();
      $('#oneBen').hide();
    }
  }

  avenaButton.onclick = avenaStuff;
  maggieButton.onclick = maggieStuff;
  dexterButton.onclick = dexterStuff;
  millieButton.onclick = millieStuff;
  eliButton.onclick = eliStuff;
  benButton.onclick = benStuff;
});
