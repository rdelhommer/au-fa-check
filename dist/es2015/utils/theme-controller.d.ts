import { IFaCheckConfig } from "../fa-check/fa-check-config";
export declare class ThemeController {
    private getVariableKey;
    updateVariable(element: HTMLElement, key: string, value: string): void;
    configureTheme(element: HTMLElement, config?: IFaCheckConfig): void;
}
export declare let themeController: ThemeController;
