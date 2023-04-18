setInterval(function () {
  navigator.getBattery().then(function (battery) {
    console.log("Battery level: " + battery.level * 100 + "%");
    var audio = new Audio('alarme.mp3');
    var nivel = battery.level * 100;
    document.getElementById('texto').innerHTML = nivel + "%";
    nivel > 98 ? (audio.play()) : (console('teste'))




  });
}, 300000); // 300000 milisegundos = 5 minutos

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});

function showInstallButton() {
  const installButton = document.querySelector('#install-button');
  installButton.style.display = 'block';
  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário rejeitou a instalação');
      }
      deferredPrompt = null;
    });
  });
}
  
