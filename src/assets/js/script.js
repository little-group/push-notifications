/**
 * Created by Дмитрий on 21.06.2017.
 */
'use strict';

$('#workers_tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show');
})

var worker = new Worker('assets/js/doWork.js');

worker.addEventListener('message', function(e) {
    $('#messages').append('<p class="' + e.data + '">' + e.data + '</p>');
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
