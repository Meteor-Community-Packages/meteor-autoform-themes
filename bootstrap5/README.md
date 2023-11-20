# AutoForm Theme Bootstrap 5

This theme contains the Bootstrap 5 compatible theme for [aldeed:autoform](https://github.com/aldeed/meteor-autoform)
versions 6.0.0 or greater). 
It requires a Bootstrap 5 installation.

## Installation

If you haven't installed [Bootstrap 5](http://getbootstrap.com/) yet, you need 
to install it and it's peer dependencies using NPM. 

You can (optionally) add [fontawesome](https://fontawesome.com) for builtin 
icons.  This theme supports fontawesome 4, as well as fontawesome 5 (solid).

Also note, that Meteor's default builtin jquery is not sufficient, 
which is why you need to install via NPM, too.

Altogether you need the following packages:

```
$ meteor npm install --save bootstrap @popperjs/core
$ meteor add communitypackages:autoform-bootstrap5
```

### Importing Bootstrap 5

Import the Bootstrap theme and optional packages in your otp level client code
(for example in *`imports/startup/client/bootstrap.js`*):

```javascript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // optional, default theme
import popper from '@popperjs/core'
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
import { AutoFormThemeBootstrap5 } from 'meteor/communitypackages:autoform-bootstrap5/static'

AutoFormThemeBootstrap5.load()
```

That's it. The theme is imported and ready to use.

#### Option B - Import using dynamic imports

This theme also supports `dynamic-import` so your initial client bundle will
contain only a minimum portion of this package's code and saves about 39 KB of
size (estimated via `bundle-visualizer`).

In order to do so you need to import the dynamic version of the loader function:

```javascript
import { AutoFormThemebootstrap5 } from 'meteor/communitypackages:autoform-bootstrap5/dynamic'

AutoFormThemebootstrap5.load()
  .then(() => {
    // The theme is imported. You can now make the form available.
    // You could use a reactive var that resolves to true here
    // or any other mechanism you like to use to reactively activate the form.
    
    // You can now set this theme as default, see the next section.
    AutoForm.setDefaultTemplate('bootstrap5')
  })
  .catch(err => {
    // handle load error
  })
```  

### Mapping Icons (optional)

The Array component contains Buttons with icons, which we now renderer with an internal fallback. 
We removed support for a specific icon library and now do provide a way to register your custom template
to render these icons.
This allows you to use your favourite icon library, like fontawesome, bootstrap icons, hero icons and more!

```js
import { AutoFormThemebootstrap5 } from 'meteor/communitypackages:autoform-bootstrap5/static'

// ...make sure your icon renderer template is imported
AutoFormThemebootstrap5.icons.register({ name: 'myIconTemplateName' })
```

The icon template will be called with `{ name }` as arguments, where `name` is currently representing the following:

| value   | description                 | fallback |
|---------|-----------------------------|----------|
| `plus`  | Representing a plus symbol  | +        |
| `minus` | Representing a minus symbol | -        |

Make sure you correctly map these names to your icon names, in case the do differ from these values.
An example implementation with fontawesome could look like this:

```handlebars
<template name="myIconTemplateName">
  <i class="fa fas fa-fw fa-{{name}}"></i>
</template>
```



## Using the theme

After installation you have to options to use the theme with your forms:

### Setting the theme globally

Add the following code **before** you create the first form: 

```javascript
AutoForm.setDefaultTemplate('bootstrap5')
``` 

### Setting the theme locally

If you want this theme to apply only on certain forms you need to name it in the
form declaration:

```html
{{#autoForm template="bootstrap5" ...}}
  ...
{{/autoForm}}
```

## Adding icons

If you registered an icon template (See installation - mapping icons) then you can place your custom icons within
certain templates.

### quickForm

The submit button now contains an option `buttonIcon`, which renders an icon next to the submit button's content.
This does not affect the other options, like `buttonClasses` or `buttonContents`.

## Prepend / Append

You can now [append/prepend icons or text or use text as fallback](https://getbootstrap.com/docs/5.3/forms/input-group/).
Take a look at the following schema:

```js
new SimpleSchema({
  text: {
    type: String,
      autoform: {
        // rendered at the end of the input,
        // use prepend to render at the start
        // or both to render at start and end
        append: {
          icon: 'user',
          // dynamic text is possible, too,
          text: () => i18n.get('actions.update')
        },
    }
  }
})
```

This works with all text-based inputs, color, textarea and even select!

## History

- 1.0.0
  - initial release

## License

This theme is LICENSED under MIT. See the [LICENSE file](../LICENSE) for more. 
