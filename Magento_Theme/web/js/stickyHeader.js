define([
    'jquery',
    'jquerySticky'
], function ($) {
    'use strict';

    $.widget('mage.dadolunStickyHeader', {
        options: {
            mobileBreakpoint: '768px',
            paddingBottom: 20,
            mobileSearchBoxHeight: 75
        },
        _create: function () {
            let self = this;
            this._stick();
            $(window).resize( function () {
                self._unstick();
                self._stick();
            });
        },
        _unstick: function () {
            $(this.element).unstick();
        },
        _stick: function () {
            let self = this;
            $(self.element).sticky({topSpacing: 0});
        }
    });

    return $.mage.dadolunStickyHeader;
});
