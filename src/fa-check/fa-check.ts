import { bindable, customElement, computedFrom } from "aurelia-framework";
import { globalConfig, FaCheckSize, FaCheckShape, FaCheckIconType, FaCheckOrientation } from "./fa-check-config";
import { themeController } from "../utils/theme-controller";

// TODO: aria attributes - what is needed for this? maybe labeled by?
// TODO: outline iconType focus styles - maybe a gradient background that fades to transparent from the middle?
// TODO: material styles - can i do a dynamic require and separate stylesheets for each theme?
// TODO: fontawesome 5 classes
// TODO: support aurelia-fontawesome

@customElement('au-fa-check')
export class FaCheck {
  private outlineIcon: string

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
      this.iconType === 'outline' ? 'outline-check' : undefined
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

  toggleChecked(event: Event) {
    if (this.disabled) return;

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
    themeController.configureTheme()
  }

  bind() {
    this.orientation = this.orientation || 'horizontal'
    this.checkedColor = this.checkedColor || globalConfig.checkedColor
    this.size = this.size || globalConfig.size
    this.shape = this.shape || globalConfig.shape
    this.iconType = this.iconType || 'standard'

    if (this.iconType === 'outline' && !this.icon) {
      throw 'You must specify an icon when using outline checkboxes'
    }

    this.icon = this.icon || 'fa-check'

    this.configureIcon()
  }
}
