package helper;
import edu.emory.mathcs.backport.java.util.Collections;

import java.util.HashMap;
import java.util.Map;
public class QueryParamBuilder {
	private Map<String, String> result = new HashMap<String,String>();

	public QueryParamBuilder(String place) {
	    result.put("query", place);
	}

	public Map<String, String> build() {
	    result = Collections.unmodifiableMap(result);
	    return result;
	}
}
