export declare type FaCheckSize = 'standard' | 'big' 
export declare type FaCheckTheme = 'standard' | 'material' 
export declare type FaCheckShape = 'square' | 'circle' 
export declare type FaCheckIconType = 'standard' | 'outline' 

export interface IFaCheckConfig {
  faVersion: 4 | 5,
  selectedColor: string
  theme: FaCheckTheme
  size: FaCheckSize
  shape: FaCheckShape
  iconType: FaCheckIconType
}

export let globalConfig: IFaCheckConfig = {
  faVersion: 4,
  selectedColor: 'black',
  theme: 'standard',
  size: 'standard',
  shape: 'square',
  iconType: 'standard'
}
