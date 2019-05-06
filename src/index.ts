import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { IFaCheckConfig, globalConfig, FaCheckSize, FaCheckOrientation, FaCheckIconType, FaCheckShape, FaCheckTheme } from './fa-check/fa-check-config';

export function configure(aurelia: FrameworkConfiguration, config: IFaCheckConfig) {
  aurelia.globalResources([
    PLATFORM.moduleName('au-fa-check/fa-check/fa-check')
  ]);

  if (config) {
    Object.assign(globalConfig, config)
  }
}

export {
  IFaCheckConfig,
  FaCheckSize,
  FaCheckTheme,
  FaCheckShape,
  FaCheckIconType,
  FaCheckOrientation
}
