define(["require", "exports", "aurelia-framework", "./fa-check/fa-check-config"], function (require, exports, aurelia_framework_1, fa_check_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia, config) {
        aurelia.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('au-fa-check/fa-check/fa-check')
        ]);
        if (config) {
            Object.assign(fa_check_config_1.globalConfig, config);
        }
    }
    exports.configure = configure;
});
