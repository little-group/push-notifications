/**
 * Created by Дмитрий on 21.06.2017.
 */
var worker = new Worker('doWork.js');

worker.addEventListener('message', function(e) {
    $('#messages').append('<p class="bg-info">' + e.data + '</p>');
}, false);

worker.addEventListener('message2', function(e) {
    $('#messages').append('<p class="bg-primary">' + e.data + '</p>');
}, false);

worker.addEventListener('message3', function(e) {
    $('#messages').append('<p class="bg-warning">' + e.data + '</p>');
}, false);

function makeTheWorkerCryLikeABitch() {
    worker.postMessage('Im crying like a bitch');
}

function makeTheWorkerCryLikeTwoBitchesBitch() {
    worker.postMessage('Im crying like two bitches');
}
