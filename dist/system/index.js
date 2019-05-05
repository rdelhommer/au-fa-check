System.register(["aurelia-framework", "./fa-check/fa-check-config"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1, fa_check_config_1;
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia, config) {
        aurelia.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('au-fa-check/fa-check/fa-check')
        ]);
        if (config) {
            Object.assign(fa_check_config_1.globalConfig, config);
        }
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (fa_check_config_1_1) {
                fa_check_config_1 = fa_check_config_1_1;
            }
        ],
        execute: function () {
        }
    };
});
