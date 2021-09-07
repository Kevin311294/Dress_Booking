package com.dressFirstPom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.PageFactoryFinder;

public class dressPom {
	
	public static WebDriver driver;
	
	
	
	@FindBy (xpath = "//a[@class='login']")
	private WebElement Signin;
	@FindBy (xpath = "//input[@id='email']")
	private WebElement Email;
	@FindBy (xpath = "//input[@id='passwd']")
	private WebElement Pass;
	@FindBy (xpath = "//button[@id='SubmitLogin']")
	private WebElement Login;
	
	
	
	
	
	
	public dressPom(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver2, this);	}
	public WebElement getSignin() {
		return Signin;
	}
	public WebElement getEmail() {
		return Email;
	}
	public WebElement getPass() {
		return Pass;
	}
	public WebElement getLogin() {
		return Login;
	}
	
	

}

