import { globalConfig, themeConfigKeys, IFaCheckConfig } from "../fa-check/fa-check-config";

export class ThemeController {

  private getVariableKey(key: string) {
    return `--au-fa-check--${key}`
  }
  
  updateVariable(element: HTMLElement, key: string, value: string) {
    element.style.setProperty(this.getVariableKey(key), value)
  }

  configureTheme(element: HTMLElement, config?: IFaCheckConfig) {
    let configToUse = config ? config : globalConfig

    themeConfigKeys.forEach(x => {
      this.updateVariable(element, x, configToUse[x].toString())
    })
  }
}

export let themeController = new ThemeController()