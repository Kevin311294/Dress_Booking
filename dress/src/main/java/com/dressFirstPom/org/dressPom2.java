package com.dressFirstPom.org;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class dressPom2 {
	public static WebDriver driver;

//dress	 
	@FindBy(xpath = "//div[@id='block_top_menu']/ul/li[2]/a")
	private WebElement Dresses;

//summer dress
	@FindBy(xpath = "//div[@id='block_top_menu']/ul/li[2]/ul/li")
	private List<WebElement> Dresses_list;

//Printed_Summer_Dress
	@FindBy(xpath = "(//a[@class=\"product-name\"])[2]")
	private WebElement Printed_Summer_Dress;

// options in Printed_Summer_Dress then dress zooming
	@FindBy(xpath = "//img[@id='thumb_13']")
	private WebElement options_in_Printed_Summer_Dress;

	// close image after Zoom_dress_quality
	@FindBy(xpath = "//a[@title='Close']")
	private WebElement Close_after_dress_zooming;

	// no_dress_quantity
	@FindBy(xpath = "//input[@id='quantity_wanted']")
	private WebElement Dress_quantity;

	// dress_Size
	@FindBy(xpath = "//select[@id='group_1']")
	private WebElement Dress_size;

	// dress_colour
	@FindBy(xpath = "//a[@id='color_14']")
	private WebElement Dress_colour;

	// Add_to_cart
	@FindBy(xpath = "//p[@id='add_to_cart']//button[@type='submit']")
	private WebElement Add_to_cart;
	
	//Proceedto_checkout
	@FindBy(xpath = "//*[@id=\'layer_cart\']/div[1]/div[2]/div[4]/a/span")
	private WebElement Proceedto_checkout;
	
//	//Proceedto_checkout
//		@FindBy(xpath = "//a[@class='btn btn-default button button-medium']")
//		private WebElement Proceedto_checkout;
	
	

	

	public dressPom2(WebDriver driver2) {
this.driver=driver2;
PageFactory.initElements(driver2, this);
	
	}

	public WebElement getDresses() {
		return Dresses;
	}

	public List<WebElement> getDresses_list() {
		return Dresses_list;
	}

	public WebElement getPrinted_Summer_Dress() {
		return Printed_Summer_Dress;
	}

	public WebElement getOptions_in_Printed_Summer_Dress() {
		return options_in_Printed_Summer_Dress;
	}

	public WebElement getClose_after_dress_zooming() {
		return Close_after_dress_zooming;
	}
	
//	public void setDress_quantity(WebElement dress_quantity) {
//		Dress_quantity = dress_quantity;
//	}


	public WebElement getDress_quantity() {
		return Dress_quantity;
	}

	
	
	public WebElement getDress_size() {
		return Dress_size;
	}

	public WebElement getDress_colour() {
		return Dress_colour;
	}

	public WebElement getAdd_to_cart() {
		return Add_to_cart;
	}

	public WebElement getProceedto_checkout() {
		return Proceedto_checkout;
	}

	
}
