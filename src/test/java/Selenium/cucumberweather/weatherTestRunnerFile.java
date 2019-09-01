package Selenium.cucumberweather;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target/cucumber-report/html", "json:target/cucumber-report/Report.json"},
		features = {"src/test/java"},
		tags={"@smoke"}
		)
public class weatherTestRunnerFile {

}
