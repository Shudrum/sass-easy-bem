# Sass easy BEM

Not just another mixins project with only, `@include element('name')` and the same for _blocks_ and _modifiers_.

Did you know [http://getbem.com/](http://getbem.com/)? Well, this toolbox will help you strictly follow the rules the easiest way you'll see.

Just check the examples:

## Examples

Let's start with a container containing a button:

```scss
@include block('my-container') {
  @include element('my-button') {
    color: red;
  }
}
```

Gives:

```css
.my-container__my-button {
  color: red;
}
```

Ok, nothing particular. So now, I wan't to add a modifier blue to my button.

```scss
@include block('my-container') {
  @include element('my-button') {
    color: red;
    @include modifier('blue') {
      color: blue;
    }
  }
}
```

Gives:

```css
.my-container__my-button {
  color: red;
}
.my-container__my-button.my-container__my-button--blue {
  color: blue;
}
```

Yep, this is striclty the rule of [http://getbem.com/](http://getbem.com/).

Still not impressed? Ok.

I want… A cyan button if my button get the _blue_ AND _green_ modifiers. But also ONLY if my container have a _allow-color-mixes_ modifier.

Nothing more simple. Just do:

```scss
@include block('my-container') {
  @include modifier('allow-color-mixes') {
    @include element('my-button') {
      @include modifier('blue') {
        @include modifier('green') {
          color: cyan;
        }
      }
    }
  }
}
```

Gives:

```css
.my-container.my-container--allow-color-mixes .my-button.my-button--blue.my-button--green {
  color: cyan;
}
```

Yep, it works!

And you know what? It is tested!
