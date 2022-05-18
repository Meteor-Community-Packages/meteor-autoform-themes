# AutoForm Theme Bootstrap 4

This theme contains the Bootstrap 4 compatible theme for [aldeed:autoform](https://github.com/aldeed/meteor-autoform)
versions 6.0.0 or greater). 
It requires a Boostrap 4 installation.

## Installation

If you haven't installed [Bootstrap 4](http://getbootstrap.com/) yet, you need 
to install it and it's peer dependencies using NPM. 

You can (optionally) add [fontawesome](https://fontawesome.com) for builtin 
icons.  This theme supports fontawesome 4, as well as fontawesome 5 (solid).

Also note, that Meteor's default builtin jquery is not sufficient, 
which is why you need to install via NPM, too.

Altogether you need the following packages:

```
# install NPM dependencies
$ meteor npm install --save bootstrap popper.js jquery
$ meteor npm install --save @fortawesome/fontawesome-free # optional, if using FA 5

# install meteor packages
$ meteor add communitypackages:autoform-bootstrap4 jquery@3.0.0!
$ meteor add fortawesome:fontawesome # optional, if using FA4
```

### Importing Bootstrap 4

Import the Bootstrap theme and optional packages in your otp level client code
(for example in *`imports/startup/client/bootstrap.js`*):

```javascript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'            // optional, default theme
import '@fortawesome/fontawesome-free/js/all.js' // optional, is using FA5
import popper from 'popper.js'

global.Popper = popper                           // fix Popper.js issues
```

### Importing the AutoForm theme

From here you have two options for importing this theme.

**A. Static import:** 
   Adds the theme to the initial bundle (default); more comfortable but with 
   bigger initial bundle size.

**B. Dynamic imports:**
   Adds the theme on-demand; manual effort required
   but lowers the footprint of the initial client bundle.


#### Option A - Import using static imports (default)

For statically (immediately) importing the theme you need to import the static 
loader module in your client's startup code:

```javascript
import { AutoFormThemeBootstrap4 } from 'meteor/communitypackages:autoform-bootstrap4/static'

AutoFormThemeBootstrap4.load()
```

That's it. The theme is imported and ready to use.

#### Option B - Import using dynamic imports

This theme also supports `dynamic-import` so your initial client bundle will
contain only a minimum portion of this package's code and saves about 39 KB of
size (estimated via `bundle-visualizer`).

In order to do so you need to import the dynamic version of the loader function:

```javascript
import { AutoFormThemeBootstrap4 } from 'meteor/communitypackages:autoform-bootstrap4/dynamic'

AutoFormThemeBootstrap4.load()
  .then(() => {
    // The theme is imported. You can now make the form available.
    // You could use a reactive var that resolves to true here
    // or any other mechanism you like to use to reactively activate the form.
    
    // You can now set this theme as default, see the next section.
    AutoForm.setDefaultTemplate('bootstrap4')
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

- 1.0.6
  - fix checkbox/radio buttons where existing values were not marked as checked
- 1.0.5
  - provide real split between static and dynamic version without environment
    flags required
- 1.0.4
  - skipped, do not use
- 1.0.3
  - Added optional dynamic import via `AUTOFORM_DYNAMIC_IMPORTS` env flag
- 1.0.2
  - input type select-radio uses [bs4 custom-radio skin](https://getbootstrap.com/docs/4.5/components/forms/#radios)
  - input type select-radio-inline uses [bs4 custom-radio-inline skin](https://getbootstrap.com/docs/4.5/components/forms/#inline-1)
  - input type select-checkbox uses [bs4 custom-checkbox skin](https://getbootstrap.com/docs/4.5/components/forms/#checkboxes)
  - 
- 1.0.1
  - import via dynamic imports

## License

This theme is LICENSED under MIT. See the [LICENSE file](../LICENSE) for more. 
