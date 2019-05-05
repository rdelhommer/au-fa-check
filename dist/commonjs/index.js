"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var fa_check_config_1 = require("./fa-check/fa-check-config");
function configure(aurelia, config) {
    aurelia.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('au-fa-check/fa-check/fa-check')
    ]);
    if (config) {
        Object.assign(fa_check_config_1.globalConfig, config);
    }
}
exports.configure = configure;
