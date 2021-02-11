define([
    'jquery',
    'jcf',
    'jcf-select',
    'mageUtils'
], function ($, jcf) {
    'use strict';

    $.widget('mage.dadolunSelect', {
        _create: function () {
            let cssSelector = this.element[0].id;
            jcf.replace('#' + cssSelector, false, {"wrapNative": false});
        }
    });

    return $.mage.dadolunSelect;
});
