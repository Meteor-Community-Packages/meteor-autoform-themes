# AutoForm Theme Bootstrap 3

This theme contains the Bootstrap 3 compatible theme. It requires a Boostrap 3
installation.

## Installation

First, make sure you have Bootstrap 3 installed in your app. You cann easily add
Boostrap 3 via

```bash
$ meteor add twbs:bootstrap 
```

but **beware**, it's a deprecated package, targeting an outdated Bootstrap 
version and can lead to problematic XSS vulnerabilities and it requires an 
outdated jQuery version, that is full of vulnerabilities!

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

 
You have two options of installing this theme.

A. Adding the theme to the initial bundle (default); comfortable but with bigger
   initial bundle size.

B. Using dynamic imports and adding the theme on-demand; manual effort required
   but lowers the footprint of the initial client bundle.
   
In both cases you have to install the package to your packages list:

```bash
$ meteor add mcp:autoform-bootstrap3
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
import { AutoFormThemeBootstrap3 } from 'meteor/mcp:autoform-booostrap3'

AutoFormThemeBootstrap3.load()
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
