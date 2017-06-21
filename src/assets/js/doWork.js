/**
 * Created by Дмитрий on 21.06.2017.
 */
'use strict';

self.addEventListener('message', function(e) {

    var data = 'bg-primary';

    switch(e.data.test) {
        case "mama": data = 'bg-info'; break;
        case "lava": data = 'bg-warning'; break;
    }

    self.postMessage(data);

}, false);
