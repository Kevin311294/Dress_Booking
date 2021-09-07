package com.configuration.Helper;

import java.io.FileInputStream;
import java.util.Properties;

import org.openqa.selenium.WebDriver;

import com.dressFirstPom.org.dressPom;
import com.dressFirstPom.org.dressPom2;
import com.dressFirstPom.org.dressPom3;

public class configurationReader {

	public static Properties p;
	

	public configurationReader() throws Throwable {
	
		FileInputStream fis = new FileInputStream("C:\\Users\\Dell\\eclipse-workspace\\dress\\src\\test\\java\\com\\configuration\\Helper\\configuration.properties");

		p = new Properties();
		p.load(fis);
	}

	public String getbrowser() {
		String browser = p.getProperty("browser");
		return browser;

	}

	public String geturl() {
		String url = p.getProperty("url");
		return url;

	}
public String getUserName() {
String username = p.getProperty("username");
return username;
}

	

public String getpassword() {
	String password = p.getProperty("password");
	return password;
}
		
}
