![cf](https://i.imgur.com/7v5ASc8.png) Lab 23 - ngMarsMission
======

## To Submit this Assignment
  * create a fork of this repository
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.babelrc`
  * `.gitignore`
  * `package.json`
    * create an npm `build` script for running `webpack`
    * create an npm `watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `lint` script for linting your JS with `eslint`
    * create an npm `test` script for running karma and all associated tests
    * create an npm `test-watch` script for running karma on file system changes
  * **ignore the build directory**
  * `webpack.config.js`
  * `karma.config.js`


## Description
  * Create the following directories to organize your code:
    * app
    * app/component
    * app/component/`your-component-name`
    * app/service
    * app/scss
    * app/scss/lib
    * app/scss/lib/base
    * app/scss/lib/layout
    * app/scss/lib/theme
  * Include a **main.scss** file that only includes `@import` statements for the SCSS files that should compile into a single stylesheet
  * Create the following SCSS partials and include them in the appropriate directories (`base`, `layout`, `theme`, `your-component-name`)
    * `_base.scss`
    * `_reset.scss`
    * `_header.scss`
    * `_content.scss`
    * `_footer.scss`
    * `_vars.scss`
    * `_your-component-name.scss`

## Game Features
For this assignment you'll be creating a text based adventure game.

  * Your game should have at lright 6 rooms that the player can move between.
  * Your game should have a form that enables your player to move between rooms (ex: `game-pad`)
  * Manage the state of your map in a service
  * Manage the state of your player in a service
  * Your application should include **at lright** three components
    * a component for your "gamepad" form
    * a component for the player info
    * a component for the tracking the history of a game
  * Include a final destination room and alert the user when they have reached the end of the game
  * Be creative, do not use the same rooms as demonstrated in lecture, and have fun with this assignment!

## Bonus
* **2pts:** Test the default properties on your controllers
* **2pts:** Test the methods on your controllers
