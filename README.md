# au-fa-check - WORK IN PROGRESS
A checkbox for the Aurelia Framework that uses FontAwesome for checkbox icons

This library is a work in progress and has not been published to npm.  Please check back again soon!

## Compatibility
At this time, this libary is only compatible with FontAwesome 4.x.x

Compatibility with FontAwesome 5.x.x and other libraries such as aurelia-fontawesome and aurelia/ux is coming soon!

## Usage and Configuration
This plugin uses FontAwesome 4.x.x icon classes.  You'll need to ensure that the classes are bundled with your app

Configure the plugin in your index file
```javascript
aurelia.use
  .plugin(PLATFORM.moduleName('au-fa-check'), { /* configuration object */})
```

Add a checkbox to any template
```html
<template>
  <au-fa-check></au-fa-check>
</template>
```

### Bindings
#### checked: boolean
Exposes the checked state of the input

#### disabled: boolean
Controls whether the input is enabled or disabled

#### icon: string
Default value: fa-check
The icon to use in the checkbox. 
The value of this property functions in a different way depending on the value provided to the iconType property (See below)

#### orientation: FaCheckOrientation
Default value: horizontal
When horizontal, the checkbox is placed to the left of the label
When vertical, the checkbox is placed above the label

#### checkedColor: string
Default value: black
The color of the checkbox when it is checked

#### size: FaCheckSize
Default value: standard
The size of the checkbox relative to the label

#### shape: FaCheckShape
Default value: square
The shape of the checkbox

#### iconType: FaCheckIconType
Default value: standard
When standard, the value of the icon property is placed inside the checkbox outline
TODO: Add image
When outline, the value of the icon property is rendered as the checkbox when it is checked and its "*-o" version is rendered as the checkbox when it is unchecked
TODO: Add image

### Global Configuration
When performing the initial configuration in your app's index file you may provide an optional configuration object.  The global configuration will specify default values that can generally be overriden in case-by-case scenarios with the component bindings.

#### Properties
##### faVersion: 4 | 5
Default value: 4
Specifies the FontAwesome version that you are using.  Currently only 4.x.x is supported

##### checkedColor: string
Default value: black
Specifies the default color of a checked checkbox

##### theme: FaCheckTheme
Default value: standard
Specifies the style theme you wish use.  Material theme is currently not supported but is coming soon!

##### size: FaCheckSize
Default value: standard
Specifies the default size of a checkbox relative to its label

##### shape: FaCheckShape
Default value: square
Specifies the shape of the checkbox outline when a checkbox's iconType === 'standard'
