$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('pruAssignment\FindCityWeatherValidation.feature');
formatter.feature({
  "line": 1,
  "name": "FindCityWeatherValidation",
  "description": "",
  "id": "findcityweathervalidation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Validate weather report of correct city is displayed when a valid City name is provided in the Search nbar",
  "description": "",
  "id": "findcityweathervalidation;validate-weather-report-of-correct-city-is-displayed-when-a-valid-city-name-is-provided-in-the-search-nbar;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to the OpenWeather home page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to validate the website title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User provides invalid city name \"Mumbai\" in the Search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User can see the weather report of the given city \"Mumbai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.User_opens_the_browser()"
});
formatter.result({
  "duration": 5598198956,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_navigates_to_the_OpenWeather_home_page()"
});
formatter.result({
  "duration": 3358194041,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_should_be_able_to_validate_the_elements_in_home_page()"
});
formatter.result({
  "duration": 15448733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 33
    }
  ],
  "location": "StepDefinition.User_provides_invalid_city_name_in_the_Search_bar(String)"
});
formatter.result({
  "duration": 4018858650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 51
    }
  ],
  "location": "StepDefinition.User_can_see_the_weather_report_of_the_given_city(String)"
});
formatter.result({
  "duration": 39737566,
  "status": "passed"
});
formatter.uri('pruAssignment\HomePageValidation.feature');
formatter.feature({
  "line": 1,
  "name": "HomePageValidation",
  "description": "",
  "id": "homepagevalidation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate elemets in the home page",
  "description": "",
  "id": "homepagevalidation;validate-elemets-in-the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User opens the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to the OpenWeather home page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to validate the website title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User should be able to validate the elements present in the home page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.User_opens_the_browser()"
});
formatter.result({
  "duration": 4385420045,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_navigates_to_the_OpenWeather_home_page()"
});
formatter.result({
  "duration": 3699307350,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_should_be_able_to_validate_the_elements_in_home_page()"
});
formatter.result({
  "duration": 186167308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_should_be_able_to_validate_the_elements_present_in_the_home_page()"
});
formatter.result({
  "duration": 361334306,
  "status": "passed"
});
formatter.uri('pruAssignment\InvalidCityWeatherValidation.feature');
formatter.feature({
  "line": 1,
  "name": "InvalidCityWeatherValidation",
  "description": "",
  "id": "invalidcityweathervalidation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Validate Not Found message is displayed when a invalid City name is provided in the Search nbar",
  "description": "",
  "id": "invalidcityweathervalidation;validate-not-found-message-is-displayed-when-a-invalid-city-name-is-provided-in-the-search-nbar;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to the OpenWeather home page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to validate the website title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User provides invalid city name \"Namrata\" in the Search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Not Found message is displayed in the UI",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.User_opens_the_browser()"
});
formatter.result({
  "duration": 4356610682,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_navigates_to_the_OpenWeather_home_page()"
});
formatter.result({
  "duration": 4393212678,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_should_be_able_to_validate_the_elements_in_home_page()"
});
formatter.result({
  "duration": 9805218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Namrata",
      "offset": 33
    }
  ],
  "location": "StepDefinition.User_provides_invalid_city_name_in_the_Search_bar(String)"
});
formatter.result({
  "duration": 3400660566,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Not_Found_message_is_displayed_in_the_UI()"
});
formatter.result({
  "duration": 66161863,
  "status": "passed"
});
});