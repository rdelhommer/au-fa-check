var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, computedFrom, inject } from "aurelia-framework";
import { globalConfig } from "./fa-check-config";
import { themeController } from "../utils/theme-controller";
var FaCheck = /** @class */ (function () {
    function FaCheck(element) {
        this.element = element;
    }
    Object.defineProperty(FaCheck.prototype, "labelClasses", {
        get: function () {
            return [
                this.disabled ? 'disabled' : undefined,
            ].filter(function (x) { return !!x; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaCheck.prototype, "iconClasses", {
        get: function () {
            return [
                this.size,
                this.disabled ? 'disabled' : undefined,
                this.checked ? 'checked' : 'unchecked',
                this.isInputFocused ? 'focused' : undefined,
                this.shape === 'square'
                    ? 'square-check'
                    : this.shape === 'circle'
                        ? 'circle-check'
                        : undefined,
                this.iconType === 'outline' ? 'outline-check' : undefined,
                this.faVersion === 4 ? 'fa' : 'fas'
            ].filter(function (x) { return !!x; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    FaCheck.prototype.configureIcon = function () {
        if (!this.icon)
            return;
        this.outlineIcon = this.icon + "-o";
        if (this.iconType === 'standard') {
            this.renderedIcon = this.icon;
            return;
        }
        this.renderedIcon = this.checked
            ? this.icon
            : this.outlineIcon;
    };
    FaCheck.prototype.checkedChanged = function () {
        if (this.iconType === 'standard')
            return;
        this.renderedIcon = this.checked
            ? this.icon
            : this.outlineIcon;
    };
    FaCheck.prototype.iconChanged = function () {
        this.configureIcon();
    };
    FaCheck.prototype.iconTypeChanged = function () {
        this.configureIcon();
    };
    FaCheck.prototype.checkedColorChanged = function () {
        themeController.configureTheme(this.element, this.instanceConfig);
    };
    FaCheck.prototype.bind = function () {
        this.orientation = this.orientation ? this.orientation : 'horizontal';
        this.checkedColor = this.checkedColor ? this.checkedColor : globalConfig.checkedColor;
        this.size = this.size ? this.size : globalConfig.size;
        this.shape = this.shape ? this.shape : globalConfig.shape;
        this.iconType = this.iconType ? this.iconType : 'standard';
        if (this.iconType === 'outline' && !this.icon) {
            throw 'You must specify an icon when using outline checkboxes';
        }
        this.icon = this.icon ? this.icon : 'fa-check';
        this.faVersion = globalConfig.faVersion;
        this.instanceConfig = Object.assign({}, globalConfig, {
            checkedColor: this.checkedColor,
            size: this.size,
            shape: this.shape
        });
        this.configureIcon();
        this.checkedColorChanged();
    };
    __decorate([
        bindable
    ], FaCheck.prototype, "checked", void 0);
    __decorate([
        bindable
    ], FaCheck.prototype, "disabled", void 0);
    __decorate([
        bindable
    ], FaCheck.prototype, "icon", void 0);
    __decorate([
        bindable
    ], FaCheck.prototype, "orientation", void 0);
    __decorate([
        bindable
    ], FaCheck.prototype, "checkedColor", void 0);
    __decorate([
        bindable
    ], FaCheck.prototype, "size", void 0);
    __decorate([
        bindable
    ], FaCheck.prototype, "shape", void 0);
    __decorate([
        bindable
    ], FaCheck.prototype, "iconType", void 0);
    __decorate([
        computedFrom('disabled')
    ], FaCheck.prototype, "labelClasses", null);
    __decorate([
        computedFrom('size', 'disabled', 'checked', 'isInputFocused', 'iconType')
    ], FaCheck.prototype, "iconClasses", null);
    FaCheck = __decorate([
        inject(Element),
        customElement('au-fa-check')
    ], FaCheck);
    return FaCheck;
}());
export { FaCheck };
