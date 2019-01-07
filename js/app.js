if(navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js')
    .then(() => {
        console.log('Service worker Installed');
    })
    .catch(() => {
        console.log('Service Worker Did Not Install');
    })
}