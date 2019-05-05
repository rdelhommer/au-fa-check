System.register(["../fa-check/fa-check-config"], function (exports_1, context_1) {
    "use strict";
    var fa_check_config_1, ThemeController, themeController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (fa_check_config_1_1) {
                fa_check_config_1 = fa_check_config_1_1;
            }
        ],
        execute: function () {
            ThemeController = /** @class */ (function () {
                function ThemeController() {
                }
                ThemeController.prototype.getVariableKey = function (key) {
                    return "--au-fa-check--" + key;
                };
                ThemeController.prototype.updateVariable = function (element, key, value) {
                    element.style.setProperty(this.getVariableKey(key), value);
                };
                ThemeController.prototype.configureTheme = function (element, config) {
                    var _this = this;
                    var configToUse = config ? config : fa_check_config_1.globalConfig;
                    fa_check_config_1.themeConfigKeys.forEach(function (x) {
                        _this.updateVariable(element, x, configToUse[x].toString());
                    });
                };
                return ThemeController;
            }());
            exports_1("ThemeController", ThemeController);
            exports_1("themeController", themeController = new ThemeController());
        }
    };
});
