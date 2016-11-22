/**********************************************************\
 *                                                        *
 * TimeoutError.js                                        *
 *                                                        *
 * LastModified: Nov 10, 2016                             *
 * Author: Ma Bingyao <andot@qq.com>                      *
 *                                                        *
\**********************************************************/

function TimeoutError(message) {
    Error.call(this);
    this.message = message;
    this.name = TimeoutError.name;
    if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(this, TimeoutError);
    }
}
TimeoutError.prototype = Object.create(Error.prototype);
TimeoutError.prototype.constructor = TimeoutError;
