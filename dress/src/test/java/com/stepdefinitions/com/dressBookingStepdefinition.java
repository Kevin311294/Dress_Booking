package com.stepdefinitions.com;

import org.openqa.selenium.WebDriver;

import com.baseClass.com.BaseClass;
import com.configuration.Helper.FileReaderManager;
import com.dressFirstPom.org.dressPageObjectModel;
import com.dressFirstPom.org.dressPom;
import com.dressFirstPom.org.dressPom2;
import com.dressFirstPom.org.dressPom3;
import com.runner.com.dressBookingRunner;

import cucumber.api.java.en.*;

public class dressBookingStepdefinition extends BaseClass {
	
	public static WebDriver driver = dressBookingRunner.driver;
	
	dressPageObjectModel dr = new dressPageObjectModel();
	
	
	  public static dressPom lp = new dressPom(driver);
	  public static dressPom2 sd = new dressPom2(driver);
	   public static dressPom3 sum = new dressPom3(driver)
	  ;
	 
	@Given("^user need to login with username and password$")
	public void user_need_to_login_with_username_and_password() throws Throwable {
		
		String url = FileReaderManager.getinstanceFR().getinstanceCR().geturl();

		getURL(url);

		 

		clickOnElement(lp.getSignin());
		 String userName = FileReaderManager.getinstanceFR().getinstanceCR().getUserName();
		 inputValues(lp.getEmail(), userName);
String password = FileReaderManager.getinstanceFR().getinstanceCR().getpassword();		
inputValues(lp.getPass(), password);

		
		
		
		
		
		
		
	}

	@When("^user need to click the login button$")
	public void user_need_to_click_the_login_button() throws Throwable {
		
		
		
		clickOnElement(lp.getLogin());
	}


	
	@Given("^user need to select a dress$")
	public void user_need_to_select_a_dress() throws Throwable {
		
		
		Mousehover(sd.getDresses(), sd.getDresses_list(), "SUMMER DRESSES");
		implicitWait(10);
		clickOnElement(sd.getPrinted_Summer_Dress());
		
		implicitWait(10);
		clickOnElement(sd.getOptions_in_Printed_Summer_Dress());
		
		Thread.sleep(4000);
		clickOnElement(sd.getClose_after_dress_zooming());

		
		
	}
	
	
	
	
	

	@When("^user need to select dress type$")
	public void user_need_to_select_dress_type() throws Throwable {
		clickOnElement(sd.getOptions_in_Printed_Summer_Dress());
		
		Thread.sleep(4000);
		clickOnElement(sd.getClose_after_dress_zooming());

		
	}

	@Then("^user need to select dress quantity$")
	public void user_need_to_select_dress_quantity() throws Throwable {
		
		
		inputValues(sd.getDress_quantity(), "0");
		inputValues(sd.getDress_quantity(), "5");

	}

	@Then("^user need to select dress size$")
	public void user_need_to_select_dress_size() throws Throwable {
		
		inputValues(sd.getDress_size(), "M");
	}

	@Then("^user need to choose dress colour$")
	public void user_need_to_choose_dress_colour() throws Throwable {
		
		clickOnElement(sd.getDress_colour());
	}

	@Then("^user need th add the dress to cart$")
	public void user_need_th_add_the_dress_to_cart() throws Throwable {
		
		clickOnElement(sd.getAdd_to_cart());
	}

	@Then("^user need to proceed checkout$")
	public void user_need_to_proceed_checkout() throws Throwable {
		Thread.sleep(5000);
		clickOnElement(sd.getProceedto_checkout());
	}


	
	@Given("^User need to get order summary$")
	public void user_need_to_get_order_summary() throws Throwable {
		scroll_down(sum.getSummary_Scroll_to_view());
		Minus_quantity(sum.getMinus_quantity(), 3);
		clickOnElement(sum.getSummary_Proceed_to_checkout());

		
		
		
	}

	@When("^user need to enter the address$")
	public void user_need_to_enter_the_address() throws Throwable {
		
		clickOnElement(sum.getAddress_Proceed_to_checkout());
	}

	@Then("^user need to tick the check box$")
	public void user_need_to_tick_the_check_box() throws Throwable {
		clickOnElement(sum.getTick_Checkbox_at_Shipping());
		
		
	}

	@Then("^User have to start the  shipping process$")
	public void user_have_to_start_the_shipping_process() throws Throwable {
		
		clickOnElement(sum.getShipping_Proceed_to_checkout());
		scroll_down(sum.getPayment_Scroll_to_view());
	}

	@Then("^user need to pay for the purchased product$")
	public void user_need_to_pay_for_the_purchased_product() throws Throwable {
		clickOnElement(sum.getPay_by_bankwire());
		clickOnElement(sum.getConfirm_myorder());
		scroll_down(sum.getMyorder_Scroll_to_view());
		
		screenshot("C:\\Users\\Dell\\eclipse-workspace\\dress\\ScreenShot\\orderConformation1.png");

		System.out.println("Compeleted");
	}


	
	
}
