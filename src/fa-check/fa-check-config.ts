export declare type FaCheckSize = 'standard' | 'big' 
export declare type FaCheckTheme = 'standard' | 'react' 
export declare type FaCheckShape = 'square' | 'circle' 

export interface IFaCheckConfig {
  faVersion: 4 | 5,
  selectedColor: string
  theme: FaCheckTheme
  size: FaCheckSize
  shape: FaCheckShape
}

export let globalConfig: IFaCheckConfig = {
  faVersion: 4,
  selectedColor: 'black',
  theme: 'standard',
  size: 'standard',
  shape: 'square'
}
