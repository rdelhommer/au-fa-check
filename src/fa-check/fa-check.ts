import { bindable, customElement, computedFrom, inject } from "aurelia-framework";
import { globalConfig, FaCheckSize, FaCheckShape, FaCheckIconType, FaCheckOrientation } from "./fa-check-config";
import { themeController } from "../utils/theme-controller";
import { IFaCheckConfig } from "..";

@inject(Element)
@customElement('au-fa-check')
export class FaCheck {
  private instanceConfig: IFaCheckConfig
  private outlineIcon: string
  private faVersion: number

  isInputFocused: boolean
  renderedIcon: string

  @bindable checked: boolean
  @bindable disabled: boolean
  @bindable icon: string
  @bindable orientation: FaCheckOrientation
  @bindable checkedColor: string
  @bindable size: FaCheckSize
  @bindable shape: FaCheckShape
  @bindable iconType: FaCheckIconType

  constructor(private element: HTMLElement) { }

  @computedFrom('disabled')
  get labelClasses() {
    return [
      this.disabled ? 'disabled' : undefined,
    ].filter(x => !!x).join(' ')
  }

  @computedFrom('size', 'disabled', 'checked', 'isInputFocused', 'iconType')
  get iconClasses() {
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
    ].filter(x => !!x).join(' ')
  }

  private configureIcon() {
    if (!this.icon) return

    this.outlineIcon = `${this.icon}-o`

    if (this.iconType === 'standard') {
      this.renderedIcon = this.icon
      return
    }

    this.renderedIcon = this.checked
      ? this.icon
      : this.outlineIcon
  }

  onClick(event: Event) {
    if (this.disabled) return;

    this.isInputFocused = true;
    this.checked = !!!this.checked;
    event.stopPropagation()
  }

  checkedChanged() {
    if (this.iconType === 'standard') return;

    this.renderedIcon = this.checked
      ? this.icon
      : this.outlineIcon
  }

  iconChanged() {
    this.configureIcon()
  }

  iconTypeChanged() {
    this.configureIcon()
  }

  checkedColorChanged() {
    console.log(this.element);
    console.log(this.instanceConfig);
    themeController.configureTheme(this.element, this.instanceConfig)
  }

  bind() {
    this.orientation = this.orientation ? this.orientation : 'horizontal'
    this.checkedColor = this.checkedColor ? this.checkedColor : globalConfig.checkedColor
    this.size = this.size ? this.size : globalConfig.size
    this.shape = this.shape ? this.shape : globalConfig.shape
    this.iconType = this.iconType ? this.iconType : 'standard'

    if (this.iconType === 'outline' && !this.icon) {
      throw 'You must specify an icon when using outline checkboxes'
    }

    this.icon = this.icon ? this.icon : 'fa-check'
    this.faVersion = globalConfig.faVersion

    this.instanceConfig = Object.assign({}, globalConfig, { 
      checkedColor: this.checkedColor,
      size: this.size,
      shape: this.shape
    })

    this.configureIcon()
    this.checkedColorChanged()
  }
}
