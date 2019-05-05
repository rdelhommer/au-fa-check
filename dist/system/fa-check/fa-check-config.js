System.register([], function (exports_1, context_1) {
    "use strict";
    var globalConfig, themeConfigKeys;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("globalConfig", globalConfig = {
                faVersion: 4,
                checkedColor: 'black',
                theme: 'standard',
                size: 'standard',
                shape: 'square',
            });
            exports_1("themeConfigKeys", themeConfigKeys = [
                'checkedColor'
            ]);
        }
    };
});
