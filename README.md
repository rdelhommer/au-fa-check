# au-fa-check
A checkbox for the Aurelia Framework that uses FontAwesome for checkbox icons.
![overview](https://github.com/rdelhommer/au-fa-check/blob/master/docs/images/overview.png)

## Compatibility
At this time, this libary is only compatible with FontAwesome 4.x.x and Solid icons in FontAwesome 5.x.x

## Installation and Usage
This plugin uses FontAwesome icon classes.  You'll need to ensure that the classes are bundled with your app

### Install the plugin
```
npm install au-fa-check --save
```

### Configure the plugin
Add the following to your index file
```javascript
aurelia.use
  .plugin(PLATFORM.moduleName('au-fa-check'), { /* configuration object */})
```

### Use the plugin 
Add a checkbox to any template
```html
<template>
  <au-fa-check>This is the label</au-fa-check>
</template>
```
## Configuration
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

```
<au-fa-check>Standard Checked</au-fa-check>
```
![standard](https://github.com/rdelhommer/au-fa-check/blob/master/docs/images/standard-check.png)

When outline, the value of the icon property is rendered as the checkbox when it is checked and its "*-o" version is rendered as the checkbox when it is unchecked
**NOTE** This option is only available when using FontAwesome 4.x.x

```
<au-fa-check icon-type="outline" icon="fa-heart" checked-color="red">Hello</au-fa-check>
```
![outline](https://github.com/rdelhommer/au-fa-check/blob/master/docs/images/outline-check.png)

### Global Configuration
When performing the initial configuration in your app's index file you may provide an optional configuration object.  The global configuration will specify default values that can generally be overriden in case-by-case scenarios with the component bindings.

#### Properties
##### faVersion: 4 | 5
Default value: 4

Specifies the FontAwesome version that you are using.

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

## TODO
* material styles - need to figure out a good way to do theming
* add support for fontawesome libraries like aurelia-fontawesome
