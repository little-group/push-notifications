/**
 * Created by Дмитрий on 21.06.2017.
 */
'use strict';

var worker = new Worker('assets/js/doWork.js');

worker.addEventListener('message', function(e) {
    $('#messages').append('<p class="' + e + '">' + e + '</p>');
}, false);

function makeTheWorkerCryLikeABitch() {
    worker.postMessage({
        'test': 'mama'
    });
}

function makeTheWorkerCryLikeTwoBitchesBitch() {
    worker.postMessage({
        'test': 'lava'
    });
}
