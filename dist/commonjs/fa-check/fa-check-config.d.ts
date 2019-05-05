export declare type FaCheckSize = 'standard' | 'big';
export declare type FaCheckTheme = 'standard' | 'material';
export declare type FaCheckShape = 'square' | 'circle';
export declare type FaCheckIconType = 'standard' | 'outline';
export declare type FaCheckOrientation = 'horizontal' | 'vertical';
export interface IFaCheckConfig {
    faVersion: 4 | 5;
    checkedColor: string;
    theme: FaCheckTheme;
    size: FaCheckSize;
    shape: FaCheckShape;
}
export declare let globalConfig: IFaCheckConfig;
export declare let themeConfigKeys: (keyof IFaCheckConfig)[];
