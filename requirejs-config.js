var config = {
    map: {
        '*': {
            "jcf": "js/assets/jcf",
            "dadolunSelect": "Magento_Ui/js/jqueryUi/select",
            "dadolunStickyHeader": "Magento_Theme/js/stickyHeader",
        }
    },
    config: {
        mixins: {
            "Magento_Ui/js/form/element/abstract": {
                "dadolunUiAbstractMixin": true
            }
        }
    },
    shim: {
        "jcf": ["jquery"],
        "jcf-radio": ["jcf"],
        "jquerySticky": ["jquery"]
    },
    paths: {
        "jcf": "js/assets/jcf",
        "jcf-select": "js/assets/jcf.select",
        "dadolunUiAbstractMixin": "Magento_Ui/js/mixin/form/element/abstract-mixin",
        "jquerySticky" : "js/assets/jquery.sticky",
    }
};
