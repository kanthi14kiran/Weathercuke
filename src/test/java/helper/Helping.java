package helper;

import java.net.URI;
import java.net.URLDecoder;
import java.util.Map;
import java.util.Map.Entry;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import helper.HttpResponse;

public class Helping {

	public static HttpResponse getResponse(String url) throws Exception
	  {
		  TrustManager[] trustAllCerts = new TrustManager[]{
				    new X509TrustManager() {
				        public java.security.cert.X509Certificate[] getAcceptedIssuers() {
				            return null;
				        }
				        public void checkClientTrusted(
				            java.security.cert.X509Certificate[] certs, String authType) {
				        }
				        public void checkServerTrusted(
				            java.security.cert.X509Certificate[] certs, String authType) {
				        }
				    }
				};

				// Install the all-trusting trust manager
				
				    SSLContext sc = SSLContext.getInstance("SSL");
				    sc.init(null, trustAllCerts, new java.security.SecureRandom());
//				    HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
				    CloseableHttpClient httpClient = HttpClients.custom().setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE).setSslcontext(sc).build();
			
				
			  	HttpGet request = new HttpGet(url);
			  	System.out.println("url is" +url);
			  	CloseableHttpResponse response = httpClient.execute(request);
			  	int statusCode= response.getStatusLine().getStatusCode();
			  	String responseBody=EntityUtils.toString(response.getEntity());
				 return new HttpResponse(statusCode,responseBody);
			    	 
	  }
	  
	  
	  public static HttpResponse makeRequestWithQueryParams(String Hostname,String path,Map<String,String> queryParam) throws Exception{
	  	String url = urlConstructWithQueryParams("https", Hostname, path, queryParam);
	  	HttpResponse response=getResponse(url);
	  	Thread.sleep(10000);
	  	return response;
	  }
	  
	  public static String urlConstructWithQueryParams(String protocol,String host,String path,Map<String,String> queryParam) throws Exception
	  {
	  	URIBuilder builder =new URIBuilder();
	  	builder.setScheme(protocol).setHost(host).setPath(path);
	  	for (Entry<String, String> entry : queryParam.entrySet()) {
	          builder.setParameter(entry.getKey(), entry.getValue());
	      }

	      URI uri = builder.build();
	      HttpGet httpget = new HttpGet(uri);
	      return URLDecoder.decode(httpget.getURI().toString(), "UTF-8");	
	  }
	  
	  public static HttpResponse makeRequestNoQueryParams(String Hostname,String path) throws Exception{
		  	String url = urlConstructNoQueryParams("https", Hostname, path);
		  	HttpResponse response=getResponse(url);
		  	Thread.sleep(10000);
		  	return response;
		  }
		  
		  public static String urlConstructNoQueryParams(String protocol,String host,String path) throws Exception
		  {
		  	URIBuilder builder =new URIBuilder();
		  	builder.setScheme(protocol).setHost(host).setPath(path);
		  	URI uri = builder.build();
		    HttpGet httpget = new HttpGet(uri);
		    return URLDecoder.decode(httpget.getURI().toString(), "UTF-8");	
		  }
	  
	  
}
