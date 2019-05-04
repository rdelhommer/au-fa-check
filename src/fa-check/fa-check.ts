import { bindable, autoinject, customElement } from "aurelia-framework";
import { globalConfig } from "./fa-check-config";

// TODO: keyboard control and focus/active styles
// TODO: Get config working
// TODO: react/bootstrap theming in config
// TODO: react styles
// TODO: checkbox size in config (just normal and large for now
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

  toggleChecked(event: Event) {
    if (this.disabled) return;

    this.checked = !!!this.checked;
    event.stopPropagation()
  }

  bind() {
    this.checkIcon = this.checkIcon || 'fa-check'
    this.orientation = this.orientation || 'horizontal'
    this.selectedColor = this.selectedColor || globalConfig.selectedColor
  }
}
