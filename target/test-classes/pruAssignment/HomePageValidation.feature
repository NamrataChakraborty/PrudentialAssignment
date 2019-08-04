Feature: HomePageValidation

  Scenario: Validate elemets in the home page
    Given User opens the browser
    When User navigates to the OpenWeather home page
    Then User should be able to validate the website title
    And User should be able to validate the elements present in the home page
