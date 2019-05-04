import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { IFaCheckConfig, globalConfig } from './fa-check/fa-check-config';
import { themeController } from './utils/theme-controller';

export function configure(aurelia: FrameworkConfiguration, config: IFaCheckConfig) {
  aurelia.globalResources([
    PLATFORM.moduleName('au-fa-check/fa-check/fa-check')
  ]);

  if (config) {
    Object.assign(globalConfig, config)
  }

  themeController.configureTheme()
}

export {
  IFaCheckConfig
}
