// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/subscribe-800x600.png',
            'thumb': 'images/photos/150.png',
            'subHtml': 'Subscribe Landing Page'
        }, ]
    });
});

// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            {
                "src": "http://vimeo.com/70301553",
                "subHtml": "Vimeo"
            },
            { // You Tube videos work only on a server.
                "src": "http://www.youtube.com/embed/efVWyPNd3xw",
                "subHtml": "You Tube"
            }
        ]
    });
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/wrapnroll-800x600.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Wrap 'n Roll Logo"
        }, ]
    });
});

// GALLERY 6
jQuery('#gallery6').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/crossroads-big.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Crossroads Clothing Photo Competition"
        }, ]
    });
});

// GALLERY 7
jQuery('#gallery7').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/bubs-800x800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "BUBS Logo"
        }, ]
    });
});

// GALLERY 5
jQuery('#gallery5').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/pataynasihesus-big.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Patay na si Hesus Movie"
        }, ]
    });
});

// GALLERY 8
jQuery('#gallery8').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/zee-big.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "ZEE Lifestyle Magazine Cover Photo"
        }, ]
    });
});

// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/wrapnroll-800x800.png',
            'thumb': 'images/photos/150.png',
            'subHtml': 'Wrap n Roll Rewards Card'
        }, ]
    });
});

// GALLERY 9
jQuery('#gallery9').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/mda-big.png',
            'thumb': 'images/photos/150.png',
            'subHtml': "Million Dollar Attitude Book"
        }, ]
    });
});

// GALLERY 10
jQuery('#gallery10').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/wedding-1-big.png',
            'thumb': 'images/photos/wedding-1-small.png',
            'subHtml': 'Angelika+Chris'
        }, {
            'src': 'images/photos/wedding-2-big.png',
            'thumb': 'images/photos/wedding-2-small.png',
            'subHtml': "Karyl+Raymund"
        }, {
            'src': 'images/photos/wedding-3-big.png',
            'thumb': 'images/photos/wedding-3-small.png',
            'subHtml': "Rodolfo+Anthony"
        }, {
            'src': 'images/photos/wedding-4-big.png',
            'thumb': 'images/photos/wedding-4-small.png',
            'subHtml': "Non nulla"
        }]
    });
});
// GALLERY 11
jQuery('#gallery11').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/washingtonpost-big.png',
            'thumb': 'images/photos/wedding-1-small.png',
            'subHtml': 'Angelika+Chris'
        }]
    });
});
// GALLERY 12
jQuery('#gallery12').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/missamerica-big.png',
            'thumb': 'images/photos/150.png',
            'subHtml': 'Miss America on Asian Magazine'
        }]
    });
});