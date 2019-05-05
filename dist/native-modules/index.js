import { PLATFORM } from 'aurelia-framework';
import { globalConfig } from './fa-check/fa-check-config';
export function configure(aurelia, config) {
    aurelia.globalResources([
        PLATFORM.moduleName('au-fa-check/fa-check/fa-check')
    ]);
    if (config) {
        Object.assign(globalConfig, config);
    }
}
