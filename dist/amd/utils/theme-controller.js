define(["require", "exports", "../fa-check/fa-check-config"], function (require, exports, fa_check_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThemeController = /** @class */ (function () {
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
    exports.ThemeController = ThemeController;
    exports.themeController = new ThemeController();
});
