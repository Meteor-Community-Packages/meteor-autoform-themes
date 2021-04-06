# AutoForm Theme Bootstrap 3

This theme contains the Bootstrap 3 compatible theme. It requires a Boostrap 3
installation.

## Installation

This theme relies on [Bootstrap](https://getbootstrap.com/) with support for the
third major version of it. Before you can use this theme you need to make sure, 
that Bootstrap 3 is installed.

Note, it will not work with Bootstrap 2.x or Bootstrap 4.x. 

### Install Boostrap 3

**Better:** use the NPM version:

```bash
$ meteor npm install --save bootstrap@3.4.1 jquery
```

You will have to import Bootstrap at some point in order to make it available
to your css compiler:

```javascript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'       // optional, default theme
import 'bootstrap/dist/css/bootstrap-theme.css' // optional, default theme
```

**Troubleshooting jQuery**

If you have trouble with jQuery, you can try to explicit reference the latest
Meteor jQuery package and then manually install jQuery from NPM:

```bash
$ meteor add jquery@3.0.0!  
$ meteor npm install --save jquery  
```

### Alternatively install the legacy `twbs:bootstrap` package

This theme also supports the legacy `twbs:bootstrap` package, which also leaves
out the need to install a newer jQuery version. Sipmply add the following line:

```bash
$ meteor add twbs:bootstrap 
```

but **beware**, it's a deprecated package, targeting an outdated Bootstrap 
version and can lead to problematic XSS vulnerabilities and it requires an 
outdated jQuery version, that is full of vulnerabilities!

Try to use the NPM version whenever you can.
 
### Install the theme
 
You have two options of installing this theme.

A. Adding the theme to the initial bundle (default); comfortable but with bigger
   initial bundle size.

B. Using dynamic imports and adding the theme on-demand; manual effort required
   but lowers the footprint of the initial client bundle.
   
In both cases you have to install the package to your packages list:

```bash
$ meteor add communitypackages:autoform-bootstrap3
``` 


#### Install via static imports (default)

For statically (immediately) importing the theme you need to import the static 
loader module in your client's startup code:

```javascript
import { AutoFormThemeBootstrap3 } from 'meteor/communitypackages:autoform-bootstrap3/static'

AutoFormThemeBootstrap3.load()
```

That's it. The theme is imported and ready to use.

#### Install via dynamic imports

This theme also supports `dynamic-import` so your initial client bundle will
contain only a minimum portion of this package's code and saves about 44 KB of
size (estimated via `bundle-visualizer`).

In order to do so you need to import the dynamic version of the loader function:

```javascript
import { AutoFormThemeBootstrap3 } from 'meteor/communitypackages:autoform-bootstrap3/dynamic'

AutoFormThemeBootstrap3.load()
  .then(() => {
    // The theme is imported. You can now make the form available.
    // You could use a reactive var that resolves to true here
    // or any other mechanism you like to use to reactively activate the form.
    
    // You can now set this theme as default, see the next section.
    AutoForm.setDefaultTemplate('bootstrap3')
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
AutoForm.setDefaultTemplate('bootstrap3')
``` 

### Setting the theme locally

If you want this theme to apply only on certain forms you need to name it in the
form declaration:

```html
{{#autoForm template="bootstrap3" ...}}
  ...
{{/autoForm}}
```

## History

- 1.0.1
  - provide real split between static and dynamic version without environment
    flags required
  
## License
  
This theme is LICENSED under MIT. See the [LICENSE file](../LICENSE) for more. 
