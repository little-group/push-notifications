/**
 * Created by Дмитрий on 21.06.2017.
 */

self.addEventListener('message', function(e) {
    setTimeout(function () {
        self.postMessage(e.data);
    }, 1000);
}, false);

self.addEventListener('message2', function(e) {
    setTimeout(function () {
        self.postMessage(e.data);
    }, 2000);
}, false);

self.addEventListener('message3', function(e) {
    setTimeout(function () {
        self.postMessage(e.data);
    }, 3000);
}, false);