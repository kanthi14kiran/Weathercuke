package Selenium.cucumberweather;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import helper.*;

public class weatherStepDefs {

		
	@When("^I make a request to weather forecast api endpoint$")
	public int i_make_a_request_to_weather_forecast_api_endpoint() throws Throwable {
		HttpResponse resopnse= Helping.makeRequestNoQueryParams("www.metaweather.com", "/api");
		return resopnse.getStatusCode();	
	}
	
	@Then("^I recieve a \"([^\"]*)\" status code$")
	public void I_receieve_a_200_status_code(int statuscode) throws Throwable {
		if(statuscode==200)
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}
		
	}
	
	@When("^I make request to weather api endpoint for location \"([^\"]*)\" to fetch status code$")
	public int i_make_a_request_to_weather_forecast_api_endpoint_for_location_to_fetch_status_code(String location) throws Throwable {
		Map<String,String> queryParamMap= new QueryParamBuilder(location).build();
		HttpResponse resopnse= Helping.makeRequestWithQueryParams("www.metaweather.com", "/api/location/search/",queryParamMap);
		return resopnse.getStatusCode();	
	}
	
	
	@When("^I make request to weather api endpoint for location \"([^\"]*)\" to fetch \"([^\"]*)\" from response body$")
	public String i_make_a_request_to_weather_forecast_api_endpoint_for_location_to_fetch_response(String location,String key) throws Throwable {
		Map<String,String> queryParamMap= new QueryParamBuilder(location).build();
		HttpResponse resopnse= Helping.makeRequestWithQueryParams("www.metaweather.com", "/api/location/search/",queryParamMap);
		JSONObject jsonobj= new JSONObject(resopnse.getBody().replace("[", "").replace("]", ""));
		return jsonobj.getString("title");	
	}
	
	@Then("^The response for location \"([^\"]*)\" has value \"([^\"]*)\"$")
	public void the_response_has_respective_location(String location,String value) throws Throwable {
		if(location.equalsIgnoreCase(value))
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}
	}
	

}
