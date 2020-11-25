# AutoForm Theme Plain

This theme contains no specific styling. Customizations are possible using
`class` attributes, where desired.

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![GitHub](https://img.shields.io/github/license/Meteor-Community-Packages/meteor-autoform-themes)

### Install the theme
 
You have two options of installing this theme.

A. Adding the theme to the initial bundle (default); comfortable but with bigger
   initial bundle size.

B. Using dynamic imports and adding the theme on-demand; manual effort required
   but lowers the footprint of the initial client bundle.
   
In both cases you have to install the package to your packages list:

```bash
$ meteor add communitypackages:autoform-plain
``` 


#### Install via static imports (default)

For statically (immediately) importing the theme you need to import the static 
loader module in your client's startup code:

```javascript
import { AutoFormPlainTheme } from 'meteor/communitypackages:autoform-plain/static'

AutoFormPlainTheme.load()
```

That's it. The theme is imported and ready to use.

#### Install via dynamic imports

This theme also supports `dynamic-import` so your initial client bundle will
contain only a minimum portion of this package's code and saves about 9 KB of
size (estimated via `bundle-visualizer`).

In order to do so you need to import the dynamic version of the loader function:

```javascript
import { AutoFormPlainTheme } from 'meteor/communitypackages:autoform-plain/dynamic'

AutoFormPlainTheme.load()
  .then(() => {
    // The theme is imported. You can now make the form available.
    // You could use a reactive var that resolves to true here
    // or any other mechanism you like to use to reactively activate the form.
    
    // You can now set this theme as default, see the next section.
    AutoForm.setDefaultTemplate('plain')
  })
  .catch(err => {
    // handle load error
  })
```

## Using the theme

After installation you have to options to use the theme with your forms:

### Setting the theme globally

Add the following code **before** you create the first form: 

```javascript
AutoForm.setDefaultTemplate('plain')
``` 

### Setting the theme locally

If you want this theme to apply only on certain forms you need to name it in the
form declaration:

```html
{{#autoForm template="plain" ...}}
  ...
{{/autoForm}}
```

## History

- 1.0.1
  - provide real split between static and dynamic version without environment
    flags required
  
## License
  
This theme is LICENSED under MIT. See the [LICENSE file](../LICENSE) for more. 
