/**
 * Created by Дмитрий on 21.06.2017.
 */
'use strict';

self.addEventListener('message', function(e) {

    console.log(e);

    var data = 'primary';

    switch(e.test) {
        case "mama": data = 'bg-info'; break;
        case "lava": data = 'bg-warning'; break;
    }

    self.postMessage(data);

}, false);
