export interface IFaCheckConfig {
  faVersion: 4 | 5,
  selectedColor: string
  theme: 'standard' | 'react'
}

export let globalConfig: IFaCheckConfig = {
  faVersion: 4,
  selectedColor: 'black',
  theme: 'standard'
}
