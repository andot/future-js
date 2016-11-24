function TimeoutError(t){Error.call(this),this.message=t,this.name=TimeoutError.name,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,TimeoutError)}TimeoutError.prototype=Object.create(Error.prototype),TimeoutError.prototype.constructor=TimeoutError,Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice,n=e.call(arguments,1),r=this,u=function(){},i=function(){return r.apply(this instanceof u?this:t,n.concat(e.call(arguments)))};return this.prototype&&(u.prototype=this.prototype),i.prototype=new u,i}),function(t,e){"use strict";function n(t){var e=this;Object.defineProperties(this,{_subscribers:{value:[]},resolve:{value:this.resolve.bind(this)},reject:{value:this.reject.bind(this)}}),"function"==typeof t&&V(function(){try{e.resolve(t())}catch(t){e.reject(t)}})}function r(t){return t instanceof n}function u(t){return r(t)?t:f(t)}function i(t){return"function"==typeof t.then}function o(t,e){var r="function"==typeof e?e:function(){return e},u=new n;return setTimeout(function(){try{u.resolve(r())}catch(t){u.reject(t)}},t),u}function c(t){var e=new n;return e.reject(t),e}function f(t){var e=new n;return e.resolve(t),e}function a(t){try{var e=t();return f(e)}catch(t){return c(t)}}function l(t){var e=new n;return t(e.resolve,e.reject),e}function s(t){var e=0;return W.call(t,function(){++e}),e}function h(t){return u(t).then(function(t){var e=t.length,r=s(t),i=new Array(e);if(0===r)return i;var o=new n;return W.call(t,function(t,e){u(t).then(function(t){i[e]=t,0===--r&&o.resolve(i)},o.reject)}),o})}function v(){return h(arguments)}function p(t){return u(t).then(function(t){var e=new n;return W.call(t,function(t){u(t).fill(e)}),e})}function y(t){return u(t).then(function(t){var e=t.length,r=s(t);if(0===r)throw new RangeError("any(): array must not be empty");var i=new Array(e),o=new n;return W.call(t,function(t,e){u(t).then(o.resolve,function(t){i[e]=t,0===--r&&o.reject(i)})}),o})}function d(t){return u(t).then(function(t){var e=t.length,r=s(t),i=new Array(e);if(0===r)return i;var o=new n;return W.call(t,function(t,e){var n=u(t);n.complete(function(){i[e]=n.inspect(),0===--r&&o.resolve(i)})}),o})}function m(t){var e=function(){return this}(),n=X.call(arguments,1);return h(n).then(function(n){return t.apply(e,n)})}function j(t,e){var n=X.call(arguments,2);return h(n).then(function(n){return t.apply(e,n)})}function w(t){return!!t&&("function"==typeof t.next&&"function"==typeof t.throw)}function b(t){if(!t)return!1;var e=t.constructor;return!!e&&("GeneratorFunction"===e.name||"GeneratorFunction"===e.displayName||w(e.prototype))}function g(t){return function(n,r){return n instanceof Error?t.reject(n):arguments.length<2?t.resolve(n):(r=null===n||n===e?X.call(arguments,1):X.call(arguments,0),void(1==r.length?t.resolve(r[0]):t.resolve(r)))}}function E(t){if(b(t)||w(t))return O(t);var e=function(){return this}(),r=new n;return t.call(e,g(r)),r}function _(t){return function(){var e=X.call(arguments,0),r=this,u=new n;e.push(function(){r=this,u.resolve(arguments)});try{t.apply(this,e)}catch(t){u.resolve([t])}return function(t){u.then(function(e){t.apply(r,e)})}}}function x(t){return function(){var e=X.call(arguments,0),r=new n;e.push(g(r));try{t.apply(this,e)}catch(t){r.reject(t)}return r}}function T(t){return b(t)||w(t)?O(t):u(t)}function O(t){function e(e){try{u(t.next(e))}catch(t){c.reject(t)}}function r(e){try{u(t.throw(e))}catch(t){c.reject(t)}}function u(t){t.done?c.resolve(t.value):("function"==typeof t.value?E(t.value):T(t.value)).then(e,r)}var i=function(){return this}();if("function"==typeof t){var o=X.call(arguments,1);t=t.apply(i,o)}if(!t||"function"!=typeof t.next)return T(t);var c=new n;return e(),c}function P(t,e){return function(){return e=e||this,h(arguments).then(function(n){var r=t.apply(e,n);return b(r)||w(r)?O.call(e,r):r})}}function F(t,e,n){return n=n||function(){return this}(),h(t).then(function(t){return t.forEach(e,n)})}function A(t,e,n){return n=n||function(){return this}(),h(t).then(function(t){return t.every(e,n)})}function I(t,e,n){return n=n||function(){return this}(),h(t).then(function(t){return t.some(e,n)})}function R(t,e,n){return n=n||function(){return this}(),h(t).then(function(t){return t.filter(e,n)})}function k(t,e,n){return n=n||function(){return this}(),h(t).then(function(t){return t.map(e,n)})}function S(t,e,n){return arguments.length>2?h(t).then(function(t){return u(n).then(function(n){return t.reduce(e,n)})}):h(t).then(function(t){return t.reduce(e)})}function C(t,e,n){return arguments.length>2?h(t).then(function(t){return u(n).then(function(n){return t.reduceRight(e,n)})}):h(t).then(function(t){return t.reduceRight(e)})}function G(t,e,n){return h(t).then(function(t){return u(e).then(function(e){return t.indexOf(e,n)})})}function N(t,n,r){return h(t).then(function(t){return u(n).then(function(n){return r===e&&(r=t.length-1),t.lastIndexOf(n,r)})})}function q(t,e,n){return h(t).then(function(t){return u(e).then(function(e){return t.includes(e,n)})})}function z(t,e,n){return n=n||function(){return this}(),h(t).then(function(t){return t.find(e,n)})}function B(t,e,n){return n=n||function(){return this}(),h(t).then(function(t){return t.findIndex(e,n)})}function D(t,e,n){V(function(){try{var r=t(n);e.resolve(r)}catch(t){e.reject(t)}})}function H(t,e,n){t?D(t,e,n):e.resolve(n)}function J(t,e,n){t?D(t,e,n):e.reject(n)}function K(t){n.call(this),t(this.resolve,this.reject)}var L=0,M=1,Q=2,U="undefined"!=typeof t.process&&"[object process]"===Object.prototype.toString.call(t.process)&&!t.process.browser,V="function"==typeof t.setImmediate?t.setImmediate:U?t.process.nextTick:function(t){setTimeout(t,0)},W=Array.prototype.forEach,X=Array.prototype.slice;return O.wrap=P,Object.defineProperties(n,{delayed:{value:o},error:{value:c},sync:{value:a},value:{value:f},all:{value:h},race:{value:p},resolve:{value:f},reject:{value:c},promise:{value:l},isFuture:{value:r},toFuture:{value:u},isPromise:{value:i},toPromise:{value:T},join:{value:v},any:{value:y},settle:{value:d},attempt:{value:m},run:{value:j},thunkify:{value:_},promisify:{value:x},co:{value:O},wrap:{value:P},forEach:{value:F},every:{value:A},some:{value:I},filter:{value:R},map:{value:k},reduce:{value:S},reduceRight:{value:C},indexOf:{value:G},lastIndexOf:{value:N},includes:{value:q},find:{value:z},findIndex:{value:B}}),Object.defineProperties(n.prototype,{_value:{writable:!0},_reason:{writable:!0},_state:{value:L,writable:!0},resolve:{value:function(t){if(t===this)return void this.reject(new TypeError("Self resolution"));if(r(t))return void t.fill(this);if(null!==t&&"object"==typeof t||"function"==typeof t){var e;try{e=t.then}catch(t){return void this.reject(t)}if("function"==typeof e){var n=!0;try{var u=this;return void e.call(t,function(t){n&&(n=!1,u.resolve(t))},function(t){n&&(n=!1,u.reject(t))})}catch(t){n&&(n=!1,this.reject(t))}return}}if(this._state===L){this._state=M,this._value=t;for(var i=this._subscribers;i.length>0;){var o=i.shift();H(o.onfulfill,o.next,t)}}}},reject:{value:function(t){if(this._state===L){this._state=Q,this._reason=t;for(var e=this._subscribers;e.length>0;){var n=e.shift();J(n.onreject,n.next,t)}}}},then:{value:function(t,e){"function"!=typeof t&&(t=null),"function"!=typeof e&&(e=null);var r=new n;return this._state===M?H(t,r,this._value):this._state===Q?J(e,r,this._reason):this._subscribers.push({onfulfill:t,onreject:e,next:r}),r}},done:{value:function(t,e){this.then(t,e).then(null,function(t){V(function(){throw t})})}},inspect:{value:function(){switch(this._state){case L:return{state:"pending"};case M:return{state:"fulfilled",value:this._value};case Q:return{state:"rejected",reason:this._reason}}}},catchError:{value:function(t,e){if("function"==typeof e){var n=this;return this.catch(function(r){if(e(r))return n.catch(t);throw r})}return this.catch(t)}},catch:{value:function(t){return this.then(null,t)}},fail:{value:function(t){this.done(null,t)}},whenComplete:{value:function(t){return this.then(function(e){return t(),e},function(e){throw t(),e})}},complete:{value:function(t){return t=t||function(t){return t},this.then(t,t)}},always:{value:function(t){this.done(t,t)}},fill:{value:function(t){this.then(t.resolve,t.reject)}},timeout:{value:function(t,e){var r=new n,u=setTimeout(function(){r.reject(e||new TimeoutError("timeout"))},t);return this.whenComplete(function(){clearTimeout(u)}).fill(r),r}},delay:{value:function(t){var e=new n;return this.then(function(n){setTimeout(function(){e.resolve(n)},t)},e.reject),e}},tap:{value:function(t,e){return this.then(function(n){return t.call(e,n),n})}},spread:{value:function(t,e){return this.then(function(n){return t.apply(e,n)})}},get:{value:function(t){return this.then(function(e){return e[t]})}},set:{value:function(t,e){return this.then(function(n){return n[t]=e,n})}},apply:{value:function(t,e){return e=e||[],this.then(function(n){return h(e).then(function(e){return n[t].apply(n,e)})})}},call:{value:function(t){var e=X.call(arguments,1);return this.then(function(n){return h(e).then(function(e){return n[t].apply(n,e)})})}},bind:{value:function(t){var e=X.call(arguments);{if(!Array.isArray(t)){e.shift();var n=this;return Object.defineProperty(this,t,{value:function(){var r=X.call(arguments);return n.then(function(n){return h(e.concat(r)).then(function(e){return n[t].apply(n,e)})})}}),this}for(var r=0,u=t.length;r<u;++r)e[0]=t[r],this.bind.apply(this,e)}}},forEach:{value:function(t,e){return F(this,t,e)}},every:{value:function(t,e){return A(this,t,e)}},some:{value:function(t,e){return I(this,t,e)}},filter:{value:function(t,e){return R(this,t,e)}},map:{value:function(t,e){return k(this,t,e)}},reduce:{value:function(t,e){return arguments.length>1?S(this,t,e):S(this,t)}},reduceRight:{value:function(t,e){return arguments.length>1?C(this,t,e):C(this,t)}},indexOf:{value:function(t,e){return G(this,t,e)}},lastIndexOf:{value:function(t,e){return N(this,t,e)}},includes:{value:function(t,e){return q(this,t,e)}},find:{value:function(t,e){return z(this,t,e)}},findIndex:{value:function(t,e){return B(this,t,e)}}}),n.deferred=function(){var t=new n;return Object.create(null,{promise:{value:t},resolve:{value:t.resolve},reject:{value:t.reject}})},t.Future=n,"function"==typeof define&&(define.cmd?define("Future",[],n):define.amd&&define("Future",[],function(){return n})),"object"==typeof module&&(module.exports=n),"function"==typeof Promise?void(t.Promise=Promise):(K.prototype=Object.create(n.prototype),K.prototype.constructor=n,Object.defineProperties(K,{all:{value:h},race:{value:p},resolve:{value:f},reject:{value:c}}),void(t.Promise=K))}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this);