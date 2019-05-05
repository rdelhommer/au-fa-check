import { FaCheckSize, FaCheckShape, FaCheckIconType, FaCheckOrientation } from "./fa-check-config";
export declare class FaCheck {
    private element;
    private instanceConfig;
    private outlineIcon;
    private faVersion;
    isInputFocused: boolean;
    renderedIcon: string;
    checked: boolean;
    disabled: boolean;
    icon: string;
    orientation: FaCheckOrientation;
    checkedColor: string;
    size: FaCheckSize;
    shape: FaCheckShape;
    iconType: FaCheckIconType;
    constructor(element: HTMLElement);
    readonly labelClasses: string;
    readonly iconClasses: string;
    private configureIcon;
    onClick(event: Event): void;
    checkedChanged(): void;
    iconChanged(): void;
    iconTypeChanged(): void;
    checkedColorChanged(): void;
    bind(): void;
}
