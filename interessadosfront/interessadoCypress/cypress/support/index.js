// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

require('cypress-xpath')


// Import commands.js using ES2015 syntax:
import './commands'

Cypress.SelectorPlayground.defaults({
    selectorPriority: [
        'id',
        'class', 
        'tag', 
        'attributes', 
        'data-cy', 
        'data-test', 
        'data-testid', 
        'nth-child'
    ],
  })

// Alternatively you can use CommonJS syntax:
// require('./commands')


/*
https://stackoverflow.com/questions/62980435/the-following-error-originated-from-your-application-code-not-from-cypress
  
*/

import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
   // failing the test
return false
})