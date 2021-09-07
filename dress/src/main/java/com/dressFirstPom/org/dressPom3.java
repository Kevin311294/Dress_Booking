package com.dressFirstPom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class dressPom3 {

	public static WebDriver driver;

	// Summary_Scrolltoview
	@FindBy(xpath = "//h1[@id='cart_title']")
	private WebElement Summary_Scroll_to_view;

	// Minus_quantity
	@FindBy(xpath = "//i[@class='icon-minus']")
	private WebElement Minus_quantity;

	// Minus_count then proceed checkout at summary stage
	// "//span[text()='Proceed to checkout']"
	@FindBy(xpath = "//p[@class='cart_navigation clearfix']//i[@class='icon-chevron-right right']")
	private WebElement summary_Proceed_to_checkout;

	// Address_Proceed_to_checkout
	@FindBy(xpath = "//p[@class='cart_navigation clearfix']//button[@type='submit']")
	private WebElement Address_Proceed_to_checkout;

	@FindBy(xpath = "//input[@type='checkbox']")
	private WebElement Tick_Checkbox_at_Shipping;

	@FindBy(xpath = "//button[@name='processCarrier']")
	private WebElement Shipping_Proceed_to_checkout;

	@FindBy(xpath = "//h1[text()='Please choose your payment method']")
	private WebElement Payment_Scroll_to_view;

	@FindBy(xpath = "//a[@class='bankwire']")
	private WebElement Pay_by_bankwire;

	@FindBy(xpath = "//p[@id='cart_navigation']//button[@type='submit']")
	private WebElement Confirm_myorder;

	@FindBy(xpath = "//div[@id='center_column']")
	private WebElement Myorder_Scroll_to_view;

	

	public dressPom3(WebDriver driver2) {
this.driver=driver2;
PageFactory.initElements(driver2, this);}

	public WebElement getSummary_Scroll_to_view() {
		return Summary_Scroll_to_view;
	}

	public WebElement getMinus_quantity() {
		return Minus_quantity;
	}

	public WebElement getSummary_Proceed_to_checkout() {
		return summary_Proceed_to_checkout;
	}

	public WebElement getAddress_Proceed_to_checkout() {
		return Address_Proceed_to_checkout;
	}

	public WebElement getTick_Checkbox_at_Shipping() {
		return Tick_Checkbox_at_Shipping;
	}

	public WebElement getShipping_Proceed_to_checkout() {
		return Shipping_Proceed_to_checkout;
	}

	public WebElement getPayment_Scroll_to_view() {
		return Payment_Scroll_to_view;
	}

	public WebElement getPay_by_bankwire() {
		return Pay_by_bankwire;
	}

	public WebElement getConfirm_myorder() {
		return Confirm_myorder;
	}

	public WebElement getMyorder_Scroll_to_view() {
		return Myorder_Scroll_to_view;
	}

}

