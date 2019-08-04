/**
 * 
 */
package pruAssignment;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.annotation.After;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import junit.framework.Assert;

/**
 * @author namra
 *
 */
public class StepDefinition {

	private WebDriver driver = null;

	@After
	public void closeBrowser() {
		driver.quit();
	}

	@Given("^User opens the browser$")
	public void User_opens_the_browser() {
		System.setProperty("webdriver.chrome.driver", "resources/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@When("^User navigates to the OpenWeather home page$")
	public void User_navigates_to_the_OpenWeather_home_page() {
		driver.get("https://openweathermap.org/");
	}

	@Then("^User should be able to validate the website title$")
	public void User_should_be_able_to_validate_the_elements_in_home_page() {
		String actualTitle = driver.getTitle();
		Assert.assertTrue("Website title validation",
				actualTitle.equals("Сurrent weather and forecast - OpenWeatherMap"));
	}

	@Then("^User should be able to validate the elements present in the home page$")
	public void User_should_be_able_to_validate_the_elements_present_in_the_home_page() {
		// Validate the header texts of the webpage
		WebElement header1 = driver.findElement(By.xpath("//*[@id='main-slideshow']/div/div/div/div/div/div/h2"));
		String actualText1 = header1.getText();
		Assert.assertTrue("Validate header 1", actualText1.equals("We Deliver 2 Billion Forecasts Per Day"));

		WebElement header2 = driver.findElement(By.xpath("//*[@id='main-slideshow']/div/div/div/div/div/div/h4"));
		String actualText2 = header2.getText();
		Assert.assertTrue("Validate header 2",
				actualText2.equals("2,000 new subscribers a day | 1,700,000 customers | 20+ weather APIs"));

		WebElement header3 = driver.findElement(By.xpath("//*[@id='widget']/div/div/h2"));
		String actualText3 = header3.getText();
		Assert.assertTrue("Validate header 3", actualText3.equals("Current weather and forecasts in your city"));

		// Validate search bar
		WebElement searchBar = driver.findElement(By.xpath("(//input[@name='q'])[2]"));
		Assert.assertTrue("Validate city search bar", (searchBar.isDisplayed() && searchBar.isEnabled()));

		// Validate search button
		WebElement searchBtn = driver.findElement(By.xpath("//*[@id='searchform']/button"));
		Assert.assertTrue("Validate Search button", (searchBtn.isDisplayed() && searchBtn.isEnabled()));

		// Validate Sign In link
		WebElement signInLink = driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/a[3]"));
		Assert.assertTrue("Validate Sign In link", (signInLink.isDisplayed() && signInLink.isEnabled()));

		// Validate Sign Up link
		WebElement signUpLink = driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/a[2]"));
		Assert.assertTrue("Validate Sign Up link", (signUpLink.isDisplayed() && signUpLink.isEnabled()));
	}

	@When("^User provides invalid city name \"([^\"]*)\" in the Search bar$")
	public void User_provides_invalid_city_name_in_the_Search_bar(String cityName) {
		WebElement searchBar = driver.findElement(By.xpath("(//input[@name='q'])[2]"));
		searchBar.sendKeys(cityName);

		WebElement searchBtn = driver.findElement(By.xpath("//*[@id='searchform']/button"));
		searchBtn.click();
	}

	@Then("^Not Found message is displayed in the UI$")
	public void Not_Found_message_is_displayed_in_the_UI() {
		WebElement alertMsg = driver.findElement(By.xpath("//*[@id='forecast_list_ul']/div"));
		Assert.assertTrue("Validate alert message is displayed", alertMsg.isDisplayed());
		Assert.assertTrue("Validate alert message text", alertMsg.getText().contains("Not found"));
	}

	@Then("^User can see the weather report of the given city \"([^\"]*)\"$")
	public void User_can_see_the_weather_report_of_the_given_city(String cityName) {

		WebElement weatherCity = driver
				.findElement(By.xpath("//*[@id='forecast_list_ul']/table/tbody/tr/td[2]/b[1]/a"));
		Assert.assertTrue("Validate correct city weather is displayed", weatherCity.getText().contains(cityName));
	}

}
