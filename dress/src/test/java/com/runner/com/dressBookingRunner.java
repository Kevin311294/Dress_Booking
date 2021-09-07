package com.runner.com;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.baseClass.com.BaseClass;
import com.configuration.Helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src//test//java//com//featureFiles//com//featureFiles", 
glue = "com.stepdefinitions.com",  
plugin = {"pretty","html:report","com.cucumber.listener.ExtentCucumberFormatter:report/File.html"})

public class dressBookingRunner {

	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws Throwable {

		String browser = FileReaderManager.getinstanceFR().getinstanceCR().getbrowser();

		driver = BaseClass.browserlaunch(browser);

	}

}
