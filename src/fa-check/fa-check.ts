import { bindable, autoinject, customElement, observable, computedFrom } from "aurelia-framework";
import { globalConfig, FaCheckSize, FaCheckShape } from "./fa-check-config";

// TODO: disabled styles
// TODO: react styles
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
  @bindable shape: FaCheckShape

  isInputFocused: boolean

  @computedFrom('disabled')
  get labelClasses() {
    return [
      this.disabled ? 'disabled' : undefined,
      // this.checked ? 'disabled' : undefined,
    ].filter(x => !!x).join(' ')
  }

  @computedFrom('size', 'checked', 'isInputFocused')
  get iconClasses() {
    return [
      this.size,
      this.checked ? 'checked' : 'unchecked',
      this.isInputFocused ? 'focused' : undefined,
      this.shape === 'square' 
        ? 'square-check' 
        : this.shape === 'circle'
          ? 'circle-check'
          : undefined
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
    this.shape = this.shape || globalConfig.shape
  }
}
