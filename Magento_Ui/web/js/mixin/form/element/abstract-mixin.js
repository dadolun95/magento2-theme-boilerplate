define([
    'jquery',
    'jcf',
    'jcf-select'
], function ($, jcf) {
    'use strict';

    return function (Element) {
        return Element.extend({
            initJcf: function (uid) {
                if(uid === null || typeof this.uid !== 'undefined') {
                    uid = this.uid;
                    jcf.replace('#' + uid , false, {"wrapNative": false});
                }
            }
        });
    };
});
