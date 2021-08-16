const { strictEqual } = require('assert').strict
const { Given, Then, When } = require('@cucumber/cucumber')
const { browser, by, element } = require('protractor')

// PLEASE NOTE:
//  To keep this example simple, the implementation below invokes Protractor APIs directly and doesn't use any design patterns.
//  To learn more about the Screenplay Pattern, which is a far more flexible way to implement acceptance tests, read:
//  https://serenity-js.org/handbook/thinking-in-serenity-js/

Given(/.* decides to use the Super Calculator/, async () => {
    await browser.get('/protractor-demo/')
})

When('she adds {int} and {int}', async (first, second) => {
    await element(by.model('first')).sendKeys(first)
    await element(by.model('operator')).element(by.cssContainingText('option', '+')).click()
    await element(by.model('second')).sendKeys(second)
    await element(by.id('gobutton')).click()
})

When('she multiplies {int} and {int}', async (first, second) => {
    await element(by.model('first')).sendKeys(first)
    await element(by.model('operator')).element(by.cssContainingText('option', '*')).click()
    await element(by.model('second')).sendKeys(second)
    await element(by.id('gobutton')).click()
})

Then('she should see that the result is {word}', async (expectedResult) => {
    await element(by.css('h2')).getText().then(result => {
        strictEqual(result, expectedResult)
    })

Given(/.* the user opens Salesforce beta/, async () => {
    await browser.get('beta.my.salesforce.com');
})

When('I enter {word} with {word}', async (username, password) => {
    await element(by.name('username')).sendKeys(username)
    await element(by.name('pw')).sendKeys(password)
    await element(by.name('login')).click()
})




    
})
