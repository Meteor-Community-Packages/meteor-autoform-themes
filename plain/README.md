# AutoForm Theme Plain

This theme contains no specific styling. Customizations are possible using
`class` attributes, where desired.

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![GitHub](https://img.shields.io/github/license/Meteor-Community-Packages/meteor-autoform-themes)

## Installation

Make sure you have 
You have two options of installing this theme.

A. Adding the theme to the initial bundle (default); comfortable but with bigger
   initial bundle size.

B. Using dynamic imports and adding the theme on-demand; manual effort required
   but lowers the footprint of the initial client bundle.
   
In both cases you have to install the package to your packages list:

```bash
$ meteor add communitypackages:autoform-plain
``` 


### Installing using static imports (default)

You don't have to do a thing, simply adding the package will automatically
make it available to your client. The only thing you need to do is either
setting the theme globally or locally.

### Installing using dynamic imports

This theme supports `dynamic-import` so your initial client bundle will not
contain any of this package's code. 

In order to do so you need to start your Meteor application with a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) 
`AUTOFORM_DYNAMIC_IMPORTS` environment flag:

```bash
$ AUTOFORM_DYNAMIC_IMPORTS=1 meteor
```

This will cause the package to make an export available, that contains a 
function that dynamically loads the theme. 

In order to load the theme you need to add the following code before you use
the form (if the form is intended to use this theme):

```javascript
import { AutoFormPlainTheme } from 'meteor/communitypackages:autoform-plain'

AutoFormPlainTheme.load()
  .then(() => {
    // theme is imported, you can now make the form available
    // you could use a reactive var that resolves to true here
    // or any other mechanism you like to use to reactively activate the form
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
