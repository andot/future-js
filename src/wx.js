/**********************************************************\
 *                                                        *
 * wx.js                                                  *
 *                                                        *
 * LastModified: Nov 18, 2016                             *
 * Author: Ma Bingyao <andot@qq.com>                      *
 *                                                        *
\**********************************************************/

(function() {
    var Future = require('future.js');

    function promisify_wx(name) {
        return function(args) {
            args = args || {};
            var future = new Future();
            try {
                args.success = future.resolve;
                args.fail = future.reject;
                wx[name](args);
            }
            catch (e) {
                future.reject(e);
            }
            return future;
        }
    }

    var exclusionList = [
        'invoke',
        'showNavigationBarLoading',
        'hideNavigationBarLoading',
        'navigateBack',
        'drawCanvas',
        'canvasToTempFilePath',
        'hideKeyboard',
        'getPublicLibVersion'
    ];

    module.exports = {};

    for (var name in wx) {
        if (typeof wx[name] === 'function' &&
            exclusionList.indexOf(name) < 0 &&
            name.search(/(^(on|create|stop|pause))|((Sync)$)/) < 0) {
            module.exports[name] = promisify_wx(name); 
        }
        else {
            module.exports[name] = wx[name];
        }
    }

})();
