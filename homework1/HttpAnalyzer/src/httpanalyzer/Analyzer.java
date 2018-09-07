package httpanalyzer;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;

public class Analyzer {
	private URL url;
    private HttpURLConnection connection1;
    private HttpURLConnection connection2;
    Map<String, List<String>> headerFields ;
    StringBuilder answer1,answer2,answer3,answer4,answer5,answer6;
   
	public Analyzer(URL url) throws IOException {
		 try {
	            this.url = url;
	            connection1 = (HttpURLConnection) url.openConnection();
	            connection1.setRequestProperty("Connection", "keep-alive");
	            answer1=new StringBuilder();
	            answer1.append("1:\n");
	            answer2=new StringBuilder();
	            answer2.append("2:\n");
	            answer3=new StringBuilder();
	            answer3.append("3:\n");
	            answer4=new StringBuilder();
	            answer4.append("4:\n");
	            answer5=new StringBuilder();
	            answer5.append("5:\n");
	            answer6=new StringBuilder();
	            answer6.append("6:\n");
	        } catch (IOException e) {
	        	e.printStackTrace();
	        }	
	}
	
    public StringBuilder serverInformation() {
        answer1.append("Server: " + connection1.getHeaderField("Server") + "\n");
        return answer1;
    }
    
    public StringBuilder SupportedServerMethods() throws IOException{
        connection2 = (HttpURLConnection) url.openConnection();
        connection2.setRequestMethod("OPTIONS");
        String SupportedMethods = connection2.getHeaderField("Allow");
       	answer2.append("Supported Methods: " + SupportedMethods +"\n"); 	
        return answer2;
	}
    
    public StringBuilder cookieInformation() throws IOException{
    	String cookies = connection1.getHeaderField("Set-Cookie");
    	if(cookies!=null && cookies.contains(";")) {
    	cookies=cookies.replaceAll(";", "\n");
    	answer3.append("cookies" + cookies + "\n" );
    	if(cookies.contains("secure")) {
    		//answer3.append(" is secure= true");
    	}
    	else
    		answer3.append("is secure=false");
    	}
    	else
    		answer3.append("cookie is null");
        
        return answer3;
    }
    public StringBuilder cacheInformation() throws IOException {
    	headerFields = connection1.getHeaderFields();
        answer4.append("Expires: " + headerFields.get("Expires") + "\n" + "Last-Modified: " + headerFields.get("Last-Modified") + "\n" + "Cache-Control: " + headerFields.get("Cache-Control") + "\n");
        return answer4;
    }
    public StringBuilder authenticationInformation() throws IOException {
    	headerFields = connection1.getHeaderFields();
        answer5.append("Authentication: " + headerFields.get("Proxy-Authenticate") + "\n");
        return answer5;
    }
    public StringBuilder getStatusCode()  {
        try {
        	answer6.append(+ connection1.getResponseCode() + "  " +connection1.getResponseMessage());
		} catch (IOException e) {
			e.printStackTrace();
		}
        return answer6;
    }
    
}
