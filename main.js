var log = function (msg) {
    console.log('[generator-pixmap-analyzer] ' + msg);
};

exports.init = function (generator, config) {
    log('test initialized');
    log('getting document info');
    generator.getDocumentInfo().then(function (document) {
        log('got document info');

        var layer = document.layers[0].id;

        log('requested pixmap for ' + layer);

        generator.getPixmap(document.id, layer, {}).then(function (pixmap) {
            log('got pixmap ' + layer);

            var totalPixels = pixmap.width * pixmap.height;

            log('analyzing colors of ' + totalPixels + ' pixels');

            var colors = {};
            var pixel;
            var color;
            for (var j = 0; j < totalPixels; ++j) {
                pixel = pixmap.getPixel(j);
                color = [pixel.r, pixel.g, pixel.b, pixel.a].join(',');

                if (colors[color]) {
                    colors[color]++;
                } else {
                    colors[color] = 1;
                }
            }

            log('colors and pixel counts: ' + JSON.stringify(colors));
        },
        function (err) {
            log('error');
        }).done();

    }, function (err) {
        log('Can\'t export document');
    }).done();
};
