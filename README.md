# generator-pixmap-analyzer

This is simple test case for adobe photoshop generator issue discussed here: https://github.com/adobe-photoshop/generator-core/issues/154

Just run generator with this plugin and first layer of active document will be analyzed right away and you will see output in console (prefixed with `[generator-pixmap-analyzer]`).

It will get pixmap of first layer, loop throught all its pixels and save every color with number of pixels it is applied on.
