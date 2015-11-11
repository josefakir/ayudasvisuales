cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/phonegap-plugin-contentsync/www/index.js",
        "id": "phonegap-plugin-contentsync.ContentSync",
        "pluginId": "phonegap-plugin-contentsync",
        "clobbers": [
            "window.ContentSync",
            "window.Zip",
            "window.zip"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});