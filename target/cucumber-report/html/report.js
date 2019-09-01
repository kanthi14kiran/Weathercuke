$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Selenium/cucumberweather/weather.feature");
formatter.feature({
  "line": 1,
  "name": "weather forecast",
  "description": "checking weather forcast",
  "id": "weather-forecast",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify success response code",
  "description": "",
  "id": "weather-forecast;verify-success-response-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I make a request to weather forecast api endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I recieve a \"200\" status code",
  "keyword": "Then "
});
formatter.match({
  "location": "weatherStepDefs.i_make_a_request_to_weather_forecast_api_endpoint()"
});
formatter.result({
  "duration": 12107323500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "weatherStepDefs.I_receieve_a_200_status_code(int)"
});
formatter.result({
  "duration": 22197200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify success response code for different location",
  "description": "",
  "id": "weather-forecast;verify-success-response-code-for-different-location",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I make request to weather api endpoint for location \"\u003clocations\u003e\" to fetch status code",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I recieve a \"200\" status code",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "weather-forecast;verify-success-response-code-for-different-location;",
  "rows": [
    {
      "cells": [
        "locations"
      ],
      "line": 15,
      "id": "weather-forecast;verify-success-response-code-for-different-location;;1"
    },
    {
      "cells": [
        "london"
      ],
      "line": 16,
      "id": "weather-forecast;verify-success-response-code-for-different-location;;2"
    },
    {
      "cells": [
        "manchester"
      ],
      "line": 17,
      "id": "weather-forecast;verify-success-response-code-for-different-location;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify success response code for different location",
  "description": "",
  "id": "weather-forecast;verify-success-response-code-for-different-location;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I make request to weather api endpoint for location \"london\" to fetch status code",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I recieve a \"200\" status code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "london",
      "offset": 53
    }
  ],
  "location": "weatherStepDefs.i_make_a_request_to_weather_forecast_api_endpoint_for_location_to_fetch_status_code(String)"
});
formatter.result({
  "duration": 10214771200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "weatherStepDefs.I_receieve_a_200_status_code(int)"
});
formatter.result({
  "duration": 323300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify success response code for different location",
  "description": "",
  "id": "weather-forecast;verify-success-response-code-for-different-location;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I make request to weather api endpoint for location \"manchester\" to fetch status code",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I recieve a \"200\" status code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "manchester",
      "offset": 53
    }
  ],
  "location": "weatherStepDefs.i_make_a_request_to_weather_forecast_api_endpoint_for_location_to_fetch_status_code(String)"
});
formatter.result({
  "duration": 10125767800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "weatherStepDefs.I_receieve_a_200_status_code(int)"
});
formatter.result({
  "duration": 226600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify titles for different location",
  "description": "",
  "id": "weather-forecast;verify-titles-for-different-location",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I make request to weather api endpoint for location \"\u003clocations\u003e\" to fetch \"title\" from response body",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response for location \"\u003clocations\u003e\" has value \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "weather-forecast;verify-titles-for-different-location;",
  "rows": [
    {
      "cells": [
        "locations",
        "title"
      ],
      "line": 25,
      "id": "weather-forecast;verify-titles-for-different-location;;1"
    },
    {
      "cells": [
        "london",
        "london"
      ],
      "line": 26,
      "id": "weather-forecast;verify-titles-for-different-location;;2"
    },
    {
      "cells": [
        "manchester",
        "manchester"
      ],
      "line": 27,
      "id": "weather-forecast;verify-titles-for-different-location;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Verify titles for different location",
  "description": "",
  "id": "weather-forecast;verify-titles-for-different-location;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I make request to weather api endpoint for location \"london\" to fetch \"title\" from response body",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response for location \"london\" has value \"london\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "london",
      "offset": 53
    },
    {
      "val": "title",
      "offset": 71
    }
  ],
  "location": "weatherStepDefs.i_make_a_request_to_weather_forecast_api_endpoint_for_location_to_fetch_response(String,String)"
});
formatter.result({
  "duration": 10149659700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london",
      "offset": 27
    },
    {
      "val": "london",
      "offset": 46
    }
  ],
  "location": "weatherStepDefs.the_response_has_respective_location(String,String)"
});
formatter.result({
  "duration": 279500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify titles for different location",
  "description": "",
  "id": "weather-forecast;verify-titles-for-different-location;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I make request to weather api endpoint for location \"manchester\" to fetch \"title\" from response body",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response for location \"manchester\" has value \"manchester\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "manchester",
      "offset": 53
    },
    {
      "val": "title",
      "offset": 75
    }
  ],
  "location": "weatherStepDefs.i_make_a_request_to_weather_forecast_api_endpoint_for_location_to_fetch_response(String,String)"
});
formatter.result({
  "duration": 10117015700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manchester",
      "offset": 27
    },
    {
      "val": "manchester",
      "offset": 50
    }
  ],
  "location": "weatherStepDefs.the_response_has_respective_location(String,String)"
});
formatter.result({
  "duration": 172900,
  "status": "passed"
});
});