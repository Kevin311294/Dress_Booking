package com.dressFirstPom.org;

import org.openqa.selenium.WebDriver;

public class dressPageObjectModel {
	
	public static WebDriver driver;
	
	public static dressPom lp ;
	public static dressPom2 sd;
	public static dressPom3 sum;
	
	public  void pomMehtod() {
		
		
		lp = new dressPom(driver);
		sd = new dressPom2(driver);
		sum = new dressPom3(driver)	;
		
		
		
		
		
	}
	
	
	
	

}
