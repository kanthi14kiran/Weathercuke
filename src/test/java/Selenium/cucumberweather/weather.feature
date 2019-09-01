Feature: weather forecast
checking weather forcast 

@smoke
Scenario: Verify success response code
When I make a request to weather forecast api endpoint
Then I recieve a "200" status code

@smoke
Scenario Outline: Verify success response code for different location
When I make request to weather api endpoint for location "<locations>" to fetch status code
Then I recieve a "200" status code

	Examples: 
      | locations |
      | london    |
      | manchester|
      
@smoke
Scenario Outline: Verify titles for different location
When I make request to weather api endpoint for location "<locations>" to fetch "title" from response body
Then The response for location "<locations>" has value "<title>"

	Examples: 
      | locations |title				|
      | london    |london				|
      | manchester|manchester		    |
      
@Manual
Scenario: Querying the location endpoint
Given  I query the location search endpoint
When I query the weather status for "Lon" location
Then I recieve a "200" Response Code
And the response has only the locations containing "Lon" 

@Manual
Scenario Outline: Verify weather data for location
Given  I query the location date endpoint
When I request weather status for "44418" location
Then I recieve a "200" Response Code
And we see the <response content> in the body
Examples:
|response content|
|title|
|location_type|
|woeid|

@Manual
Scenario: Verify Weather for the Location Date 	
Given  I query the location date endpoint
When I request weather status for "44418" on "2019/09/02/"
Then we see the correct weather report for the date

@Manual
Scenario: Verify Weather for future Location Date 	
Given  Given  I query the location date endpoint
When i request weather status for "44418" for the next 10 days
Then we see the correct weather report for the date range

@Manual
Scenario: Verify weather data for invalid locationid
Given  I query the location endpoint
When i request weather status for "rty56u" location
Then I recieve a "404" Response Code

@Manual
Scenario: Verify weather data for blank locationid
Given  I query the location endpoint
When i request weather status for "" location
Then I recieve a "404" Response Code

@Manual
Scenario: Verify Weather for invalid Location Date 	
Given  I query the location date endpoint
When i request weather status for "*&#%&^*^*" on "2019/09/02" date
Then I recieve a "404" Response Code

@Manual
Scenario: Verify Weather for blank Location Date 	
Given  I query the location date endpoint
When I request weather status for "44418" on "" date
Then I recieve a "404" Response Code