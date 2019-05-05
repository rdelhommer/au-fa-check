import { globalConfig, themeConfigKeys } from "../fa-check/fa-check-config";
export class ThemeController {
    getVariableKey(key) {
        return `--au-fa-check--${key}`;
    }
    updateVariable(element, key, value) {
        element.style.setProperty(this.getVariableKey(key), value);
    }
    configureTheme(element, config) {
        let configToUse = config ? config : globalConfig;
        themeConfigKeys.forEach(x => {
            this.updateVariable(element, x, configToUse[x].toString());
        });
    }
}
export let themeController = new ThemeController();
