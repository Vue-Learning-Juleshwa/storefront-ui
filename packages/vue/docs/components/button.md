# Button
Base button component.

[[toc]]

## Most common usage scenario
<br />
<SfButton>Hello World!</SfButton>

```html 
<template>
  <SfButton>Hello World!</SfButton>
</template>

<script>
import { SfButton } from '@storefront-ui/vue'

export default {
  components: {
    SfButton
  }
}
</script>
```

## Props
none
## Slots
- `default` button content
## Events
none
## CSS Modifiers

- `sf-button--full-width` 

## SCSS variables
Below you can find defaut values of SCSS variables bound to this component. You can override them in `sfui.scss` in the root of your project.

```scss
$button-color: $c-text-on-dark !default;
$button-background-color: $c-green-primary !default;
$button-border-radius: 0 !default;
$button-text-transform: uppercase !default;
$button-desktop-padding: 0.9375rem 2.5rem !default;
$button-desktop-font-size: 1.125rem !default;
$button-mobile-padding: 0.5rem 1.7rem !default;
$button-mobile-font-size: 0.75rem !default;
```

## Partials

If you want to customize this component even more you can use it's partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfButton.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfButton.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfButton.scss";
</style>
```
You can read about using component partials [here](docs.storefrontui.io/customization)

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-button--basic">Storybook</a>.
