import { bindable, autoinject, customElement, observable, computedFrom } from "aurelia-framework";
import { globalConfig, FaCheckSize } from "./fa-check-config";

// TODO: keyboard control and focus/active styles
// TODO: react styles
// TODO: square vs circle container in config
// TODO: fontawesome 5 classes
// TODO: support aurelia-fontawesome

@autoinject
@customElement('au-fa-check')
export class FaCheck {
  @bindable checked: boolean
  @bindable disabled: boolean
  @bindable checkIcon: string
  @bindable orientation: 'horizontal' | 'vertical'
  @bindable selectedColor: string
  @bindable size: FaCheckSize

  isInputFocused: boolean

  @computedFrom('disabled', 'checked', 'isInputFocused')
  get labelClasses() {
    return [
      this.disabled ? 'disabled' : undefined,
      // this.checked ? 'disabled' : undefined,
      this.isInputFocused ? 'focused' : undefined,
    ].filter(x => !!x).join(' ')
  }

  @computedFrom('size')
  get faStackClasses() {
    return [
      this.size
    ].filter(x => !!x).join(' ')
  }

  toggleChecked(event: Event) {
    if (this.disabled) return;

    this.checked = !!!this.checked;
    event.stopPropagation()
  }

  bind() {
    this.checkIcon = this.checkIcon || 'fa-check'
    this.orientation = this.orientation || 'horizontal'
    this.selectedColor = this.selectedColor || globalConfig.selectedColor
    this.size = this.size || globalConfig.size
  }
}
