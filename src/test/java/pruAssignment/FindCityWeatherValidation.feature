Feature: FindCityWeatherValidation

  Scenario Outline: Validate weather report of correct city is displayed when a valid City name is provided in the Search nbar
    Given User opens the browser
    When User navigates to the OpenWeather home page
    Then User should be able to validate the website title
    When User provides invalid city name "<City>" in the Search bar
    Then User can see the weather report of the given city "<City>"

    Examples: 
      | City   |
      | Mumbai |
