import { globalConfig, themeConfigKeys } from "../fa-check/fa-check-config";
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
        var configToUse = config ? config : globalConfig;
        themeConfigKeys.forEach(function (x) {
            _this.updateVariable(element, x, configToUse[x].toString());
        });
    };
    return ThemeController;
}());
export { ThemeController };
export var themeController = new ThemeController();
