Feature: Calculations

  In order to learn how to use Serenity/JS with Cucumber and Protractor
  As a Curious Developer
  I'd like to see an example


  @important @smoke
  Scenario: Adding numbers

  The ["Super Calculator"](https://juliemr.github.io/protractor-demo/) was developed by Julie Ralph,
  the author of Protractor, to demonstrate what Protractor is capable of.

  By the way, did you notice that with **Serenity/JS** you can use [Markdown](https://en.wikipedia.org/wiki/Markdown)
  to better describe each `Feature` and `Scenario`?
    Given Callie decides to use the Super Calculator
    When she adds 19 and 23
    Then she should see that the result is 42

  @fast @smoke
  Scenario Outline: Multiplying numbers

  The great thing about Serenity/JS reports is that they aggregate all the examples from a `Scenario Outline`.
    Given Callie decides to use the Super Calculator
    When she multiplies <first> and <second>
    Then she should see that the result is <expected>

    Examples:
      | first | second | expected | comment          |
      | -5    | -3     | 15       | Negative numbers |
      | 6     | 2      | 12       | Positive numbers |


  @important @smoke @fast
  Scenario Outline: Logging into Salesforce Beta
  Given the user opens Salesforce beta
  And I enter <username> with <password>

Examples:

|username|password|
|sam.fergusone@bb2bank.com|Challenge12!|

