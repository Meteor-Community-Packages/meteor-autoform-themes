# AutoForm Theme Bootstrap 4

This theme contains the Bootstrap 3 compatible theme for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). 
It requires a Boostrap 4 installation.

## Installation

If you haven't installed [Bootstrap 4](http://getbootstrap.com/) yet, you need 
to install it and it's peer dependencies using NPM. 

You can (optionally) add [fontawesome](https://fontawesome.com) for builtin 
icons.  This theme supports fontawesome 4 and font-awesome 5

Also note, that Meteor's default builtin jquery is not sufficient, 
which is why you need to add it here, too.

Altogether you need the following packages:

```
$ meteor npm install --save bootstrap popper.js jquery
$ meteor npm install --save @fortawesome/fontawesome-free # optional, if using FA 5
$ meteor add mcp:autoform-bootstrap4 jquery@3.0.0!
$ meteor add fortawesome:fontawesome # optional, if using FA4
```

Import the Bootstrap theme and optional packages in your otp level client code:

```javascript
import 'bootstrap'
import 'bootstrap/dist/bootstrap.css'            // optional, default theme
import '@fortawesome/fontawesome-free/js/all.js' // optional, is using FA5
import popper from 'popper.js'
global.Popper = popper                           // fix Popper.js issues
```

You have two options of installing this theme.

A. Adding the theme to the initial bundle (default); comfortable but with bigger
   initial bundle size.

B. Using dynamic imports and adding the theme on-demand; manual effort required
   but lowers the footprint of the initial client bundle.
   
In both cases you have to install the package to your packages list:

```bash
$ meteor add mcp:autoform-bootstrap4
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
import { AutoFormThemeBootstrap4 } from 'meteor/mcp:autoform-booostrap4'

AutoFormThemeBootstrap4.load()
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
AutoForm.setDefaultTemplate('bootstrap4')
``` 

### Setting the theme locally

If you want this theme to apply only on certain forms you need to name it in the
form declaration:

```html
{{#autoForm template="bootstrap4" ...}}
  ...
{{/autoForm}}
```


## History

- 1.0.2
  - input type select-radio uses [bs4 custom-radio skin](https://getbootstrap.com/docs/4.5/components/forms/#radios)
  - input type select-radio-inline uses [bs4 custom-radio-inline skin](https://getbootstrap.com/docs/4.5/components/forms/#inline-1)
  - input type select-checkbox uses [bs4 custom-checkbox skin](https://getbootstrap.com/docs/4.5/components/forms/#checkboxes)
  - 
- 1.0.1
  - import via dynamic imports