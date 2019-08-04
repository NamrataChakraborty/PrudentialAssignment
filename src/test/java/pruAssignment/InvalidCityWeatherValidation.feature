Feature: InvalidCityWeatherValidation

  Scenario Outline: Validate Not Found message is displayed when a invalid City name is provided in the Search nbar
    Given User opens the browser
    When User navigates to the OpenWeather home page
    Then User should be able to validate the website title
    When User provides invalid city name "<City>" in the Search bar
    Then Not Found message is displayed in the UI

    Examples: 
      | City    |
      | Namrata |
