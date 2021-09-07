$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/featureFiles/com/featureFiles");
formatter.feature({
  "line": 1,
  "name": "User need to purchase a dress",
  "description": "",
  "id": "user-need-to-purchase-a-dress",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User is in login page",
  "description": "",
  "id": "user-need-to-purchase-a-dress;user-is-in-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user need to login with username and password",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user need to click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_login_with_username_and_password()"
});
formatter.result({
  "duration": 1641157500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d92.0.4515.159)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BAPVU6L\u0027, ip: \u0027192.168.78.89\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54557}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1abf337a5a413cb920d0877196194701\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.baseClass.com.BaseClass.getURL(BaseClass.java:114)\r\n\tat com.stepdefinitions.com.dressBookingStepdefinition.user_need_to_login_with_username_and_password(dressBookingStepdefinition.java:32)\r\n\tat ✽.Given user need to login with username and password(src/test/java/com/featureFiles/com/featureFiles:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 7,
  "name": "2",
  "description": "",
  "id": "user-need-to-purchase-a-dress;2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user need to select a dress",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user need to select dress type",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user need to select dress quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user need to select dress size",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user need to choose dress colour",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user need th add the dress to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user need to proceed checkout",
  "keyword": "And "
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_select_a_dress()"
});
formatter.result({
  "duration": 12278474600,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BAPVU6L\u0027, ip: \u0027192.168.78.89\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.baseClass.com.BaseClass.Mousehover(BaseClass.java:166)\r\n\tat com.stepdefinitions.com.dressBookingStepdefinition.user_need_to_select_a_dress(dressBookingStepdefinition.java:65)\r\n\tat ✽.Given user need to select a dress(src/test/java/com/featureFiles/com/featureFiles:8)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BAPVU6L\u0027, ip: \u0027192.168.78.89\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\t\tat com.baseClass.com.BaseClass.Mousehover(BaseClass.java:166)\r\n\t\tat com.stepdefinitions.com.dressBookingStepdefinition.user_need_to_select_a_dress(dressBookingStepdefinition.java:65)\r\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\t\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.baseClass.com.BaseClass.Mousehover(BaseClass.java:166)\r\n\tat com.stepdefinitions.com.dressBookingStepdefinition.user_need_to_select_a_dress(dressBookingStepdefinition.java:65)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d92.0.4515.159)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BAPVU6L\u0027, ip: \u0027192.168.78.89\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54557}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1abf337a5a413cb920d0877196194701\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027block_top_menu\u0027]/ul/li[2]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\r\n\t... 67 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_select_dress_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_select_dress_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_select_dress_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_choose_dress_colour()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_th_add_the_dress_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_proceed_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "3",
  "description": "",
  "id": "user-need-to-purchase-a-dress;3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User need to get order summary",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user need to enter the address",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user need to tick the check box",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User have to start the  shipping process",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user need to pay for the purchased product",
  "keyword": "Then "
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_get_order_summary()"
});
formatter.result({
  "duration": 12216981400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d92.0.4515.159)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BAPVU6L\u0027, ip: \u0027192.168.78.89\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54557}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1abf337a5a413cb920d0877196194701\n*** Element info: {Using\u003dxpath, value\u003d//h1[@id\u003d\u0027cart_title\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat com.baseClass.com.BaseClass.scroll_down(BaseClass.java:418)\r\n\tat com.stepdefinitions.com.dressBookingStepdefinition.user_need_to_get_order_summary(dressBookingStepdefinition.java:131)\r\n\tat ✽.Given User need to get order summary(src/test/java/com/featureFiles/com/featureFiles:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_enter_the_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_tick_the_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_have_to_start_the_shipping_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dressBookingStepdefinition.user_need_to_pay_for_the_purchased_product()"
});
formatter.result({
  "status": "skipped"
});
});