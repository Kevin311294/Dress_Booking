package com.baseClass.com;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.lang.StackWalker.Option;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.aventstack.extentreports.utils.FileUtil;

public class BaseClass {

	public static WebDriver driver;

	// 1. browserConfig
	// --> string

	public static WebDriver browserlaunch(String browserName) {

		if (browserName.equalsIgnoreCase("Chrome")) {

			System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\Dell\\eclipse-workspace\\dress\\Driver\\chromedriver.exe");
			driver = new ChromeDriver();

		} else if (browserName.equalsIgnoreCase("Firefox")) {

			System.setProperty("webdriver.gecko.driver",
					"C:\\Users\\Dell\\eclipse-workspace\\com.adactinhotel.org\\Driver\\chromedriver.exe");
			driver = new FirefoxDriver();

		} else {
			System.out.println("Invalid Value");
		}

		driver.manage().window().maximize();

		return driver;

	}

	// 2.Close

	public static void close() {

		driver.close();

	}

	// 3.Quit

	public static void quit() {

		driver.quit();

	}

	// 4.NavigateTo
	// --> string

	public static void navigateTo(String url) {

		driver.navigate().to(url);

	}

	// 5.NavigateBack

	public static void navigateBack() {

		driver.navigate().back();

	}

	// 6.NavigateForward

	public static void navigateForward() {

		driver.navigate().forward();
	}

	// 7.NavigateRefresh

	public static void navigateRefresh() {

		driver.navigate().refresh();

	}

	// 8.Get
	// String

	public static void getURL(String url) {

		driver.get(url);

	}

	// 9.Alert

	public static void alertAccept() {

		driver.switchTo().alert().accept();

	}

	public static void alertDismiss() {

		driver.switchTo().alert().dismiss();

	}

	public static void alertGetText(String str) throws Throwable {

		Alert promt = driver.switchTo().alert();
		String text = promt.getText();
		System.out.println(text);
		Thread.sleep(3000);
		promt.sendKeys(str);
		promt.accept();

	}

	// 10.Action

	// --> movetoelement

	public static void moveMouseTo(WebElement Element) {

		Actions act = new Actions(driver);
		act.moveToElement(Element).build().perform();

	}

	// --> clickOnMouse

	public static void clickOnMouse(WebElement Element) {

		Actions act = new Actions(driver);
		act.click(Element).build().perform();

	}
	
	public static void Mousehover(WebElement Mousehover_ele, List<WebElement> ele, String selected_from_lists) {
		Actions act = new Actions(driver);

		act.moveToElement(Mousehover_ele).build().perform();

		List<WebElement> li = ele;
		for (int i = 0; i < li.size(); i++) {
			WebElement li_ele = li.get(i);
			String text = li_ele.getText();

			if (text.equalsIgnoreCase(selected_from_lists)) {
				li_ele.click();

			}
		}
	}


	// --> rightClick

	public static void rightClick(WebElement Element) {

		Actions act = new Actions(driver);
		act.contextClick(Element).build().perform();

	}

	// 11.Frames

	public static void frame() {

		driver.switchTo().frame(0);

	}

	// --> defaultFrame

	public static void defaultFrame() {

		driver.switchTo().defaultContent();

	}

	// 12.Robot
	// WebElement String

	public static void keyboardAction(WebElement element, String option) throws Throwable {

		Robot r = new Robot();

		if (option.equalsIgnoreCase("down")) {

			r.keyPress(KeyEvent.VK_DOWN);
			r.keyRelease(KeyEvent.VK_DOWN);

		} else if (option.equalsIgnoreCase("up")) {

			r.keyPress(KeyEvent.VK_UP);
			r.keyRelease(KeyEvent.VK_UP);

		} else if (option.equalsIgnoreCase("enter")) {

			r.keyPress(KeyEvent.VK_ENTER);
			r.keyRelease(KeyEvent.VK_ENTER);

		}

	}

	// 13.Window Handle
	// String, destination

	public static void windowHandles(String type, String destination) {

		if (type.equalsIgnoreCase("singlewindow")) {

			String windowHandle = driver.getWindowHandle();

			System.out.println(windowHandle);

		} else if (type.equalsIgnoreCase("multiplewindows")) {

			Set<String> windowHandles = driver.getWindowHandles();

			for (String all : windowHandles) {

				System.out.println(all);

				String title1 = driver.switchTo().window(all).getTitle();

				System.out.println(title1);

			}
			String actualTitle = destination;
			for (String all : windowHandles) {
				if (driver.switchTo().window(all).getTitle().equals(actualTitle)) {
					break;

				}

			}

		}

	}

	// 14.Dropdown

	// 15.Check Box

	// 16.Is enable

	public static void enable(WebElement element) {
		boolean enabled = element.isEnabled();
		System.out.println("enabled:" + enabled);

	}

	// 17.Is displayed

	public static void display(WebElement element) {

		boolean displayed = element.isDisplayed();
		System.out.println("displayed:" + displayed);

	}

	// 18.Is selected

	public static void selected(WebElement element) {
		boolean selected = element.isSelected();
		System.out.println("selected:" + selected);
	}

	// selectbyvalue
	// selectbyindex
	// selectbyvisibletext

	public static void selectValues(WebElement element, String value, int index, String select, String xpath) {

		if (select.equalsIgnoreCase("value")) {

			Select s = new Select(element);

			s.selectByValue(value);

		} else if (select.equalsIgnoreCase("index")) {

			Select s = new Select(element);

			s.selectByIndex(index);
		} else if (select.equalsIgnoreCase("visible")) {

			Select s = new Select(element);

			s.selectByVisibleText(value);

		}

	}

	// 19.Get options

	public static void getoption(WebElement element) {
		Select s = new Select(element);
		List<WebElement> options = s.getOptions();
		for (WebElement option : options) {

			String text = option.getText();
			System.out.println(text);

		}
	}

	// 20.Get title

	public static void getTitle() {

		String title = driver.getTitle();

		System.out.println(title);

	}

	// 21.Get current url

	public static void getCurrent_url() {

		String currentUrl = driver.getCurrentUrl();
		System.out.println("current url:" + currentUrl);

	}

	// 22.Get text

	public static void getValues(WebElement element) {

		System.out.println(element.getText());

	}

	// 23.Get attribute

	public static void attribute(WebElement element, String text, String text1) {

		String attribute = element.getAttribute(text);
		System.out.println("attribute:" + attribute);
		String attribute2 = element.getAttribute(text1);
		System.out.println("attribute2:" + attribute2);

	}

	// 24.Wait
	// implicit ---> int
	// explict ---->int,webelement

	public static void implicitWait(int unit) {

		driver.manage().timeouts().implicitlyWait(0, TimeUnit.SECONDS);

	}

	public static void explicitWait(int unit, WebElement element) {

		WebDriverWait wait = new WebDriverWait(driver, unit);

		wait.until(ExpectedConditions.visibilityOf(element));

	}

	// fluent wait

//	public static fluent(int val,WebElement element)
//	{
//		Wait wait=new FluentWait(input).withTimeout(val,TimeUnit.SECONDS).pollingEvery(5,TimeUnit.SECONDS).ignoring(NoSuchElementException.class);	
//	}

	
	  // 25.Takescreenshot
	  
	  public static void screenshot(String location) throws Throwable {
	  
	  TakesScreenshot ts = (TakesScreenshot) driver;
	  
	  File src = ts.getScreenshotAs(OutputType.FILE);
	  
	  File dest = new File(location);
	 
	FileUtils.copyFile(src, dest);
	  }

	// 26.Scroll up and down

	public static void scroll_down(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();", element);

	}

	public static void scroll_up(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();", element);

	}

	public static void Minus_quantity(WebElement ele, int Minus_count) {
		for (int i = 0; i < Minus_count; i++) {
			ele.click();
		}
	}	



	// 27.Sendkeys

	public static void inputValues(WebElement element, String Values) {

		element.sendKeys(Values);
	}

	// 28.Get first selected options

	public static void firstoption(WebElement element) {
		Select s = new Select(element);
		List<WebElement> options = s.getOptions();
		int size = options.size();
		System.out.println(size);
		for (int i = 0; i < size; i++) {
			if (i == 1 || i == 5 || i == 6) {
				s.selectByIndex(i);

			}
		}
		WebElement firstSelectedOption = s.getFirstSelectedOption();
		String text = firstSelectedOption.getText();
		System.out.println(text);
	}

	// 29.Get all selected options

	public static void alloption(WebElement element) {

		Select s = new Select(element);
		List<WebElement> options2 = s.getOptions();
		int size = options2.size();
		System.out.println(size);

		for (int i = 0; i < size; i++) {
			if (i == 1 || i == 3 || i == 5) {
				s.selectByIndex(i);
			}

		}
		List<WebElement> alloptions = s.getAllSelectedOptions();
		System.out.println("all selected option");
		for (WebElement alloption : alloptions) {
			String text = alloption.getText();
			System.out.println(text);
		}

	}

	// 30.Is multiple

	public static void ismultiple(WebElement element) {
		Select s = new Select(element);
		boolean multiple = s.isMultiple();
		System.out.println("multiple:" + multiple);
	}

	// 31.Click

	public static void clickOnElement(WebElement element) {

		element.click();

	}

}
