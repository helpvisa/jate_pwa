const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.display = 'block';

    butInstall.addEventListener('click', () => {
        event.prompt();
        butInstall.textContent = "Installed!";
    });
});

window.addEventListener('appinstalled', (event) => {
    console.log('App installed!', event);
});
