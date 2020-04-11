package step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.TeachersPayTeachersPage;
import pages.TeachersPayTeachersRegisterPage;
import utilities.Config;
import utilities.Driver;

public class TeachersPayTeachers_StepDefs {
    TeachersPayTeachersPage teachersPayTeachersPage = new TeachersPayTeachersPage();
    TeachersPayTeachersRegisterPage registerPage = new TeachersPayTeachersRegisterPage();

    @Given("A user is on Teachers Pays Teachers home page")
    public void a_user_is_on_Teachers_Pays_Teachers_home_page() {
        Driver.getDriver().get(Config.getProperty("teachersPayTeachersEnv"));
    }

    @Then("The title contains {string}")
    public void the_title_contains(String title) {
        String actualTitle = Driver.getDriver().getTitle();
        Assert.assertTrue(title + " doesn't appear in the title", actualTitle.contains(title));
    }

    @When("User clicks on Browse dropdown menu")
    public void user_clicks_on_Browse_dropdown_menu() {
        teachersPayTeachersPage.browseDropDownBtn.click();
    }

    @When("User clicks on {string} menu")
    public void user_clicks_on_dropdown_menu(String menu) {
        for (WebElement element : teachersPayTeachersPage.listOfBrowseOptions){
            if(element.getText().equals(menu)){
                element.click();
                break;
            }
        }
    }

    @Then("Selected {string} menu is highlighted")
    public void selected_resource_Type_option_is_highlighted(String menu) {
        String actualHighlightedSubMenuInBrowse = teachersPayTeachersPage.highlightedSubMenuInBrowse.getText();
        Assert.assertEquals(menu + " is not selected",menu, actualHighlightedSubMenuInBrowse);
    }

    @Then("User clicks on {string} sub menu")
    public void userClicksOnSubMenu(String subMenu) {
        for(WebElement element : teachersPayTeachersPage.listOfSubMenuOptions){
            if(element.getText().equals(subMenu)){
                element.click();
                break;
            }
        }

    }

    @And("User is able to see {string} in the You Selected bar")
    public void userIsAbleToSeeInTheYouSelectedBar(String expectedSubMenu) {
        String actualSelectedType = teachersPayTeachersPage.selectedType.getText();
        Assert.assertEquals(expectedSubMenu + " is not appeared", expectedSubMenu, actualSelectedType);
    }

    @And("Number in showing results should match with the count of listed products")
    public void numberInShowingResultsShouldMatchWithTheCountOfListedProducts() {
        // We're getting the text of result(Ex: showing 1-24 of)
        String textOfResult = teachersPayTeachersPage.result.getText();

        // I use split method with space to get the first index of string(1-24) in result
        String firstIndexOfResult = textOfResult.split(" ")[1];

        // I use second split method to get the number(24)
        int numberOfProductInResult = Integer.parseInt(firstIndexOfResult.split("-")[1]);

        Assert.assertTrue("Number of product doesn't match with the number in the result",numberOfProductInResult == teachersPayTeachersPage.listOfProductsTitle.size());
    }

    @And("{string} should be displayed in the product list")
    public void shouldBeDisplayedInTheProductList(String product) {
        boolean check = false;
        for(WebElement element: teachersPayTeachersPage.listOfProductsTitle){
            System.out.println(element.getText());
            if(element.getText().contains(product)){
                check = true;
                break;
            }
        }
        Assert.assertTrue(product + " is not in the product list", check);
    }

    @When("User clicks on Log in button")
    public void userClicksOnLogInButton() {
        teachersPayTeachersPage.loginBtn.click();
    }

    @Then("User clicks on Register button")
    public void userClicksOnRegisterButton() {
        registerPage.registerBtn.click();
    }

    @Then("User provides required data {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
    public void userProvidesRequiredData(String firstName, String lastName, String email, String confirmEmail, String password, String gradeLevel, String subject, String location, String state) {

        registerPage.firstName.sendKeys(firstName);
        registerPage.lastName.sendKeys(lastName);
        registerPage.email.sendKeys(email);
        registerPage.confirmEmail.sendKeys(confirmEmail);
        registerPage.password.sendKeys(password);

        Select gradeLevelDropDown = new Select(registerPage.gradeLevel);
        gradeLevelDropDown.selectByVisibleText(gradeLevel);

        Select subjectDropDown = new Select(registerPage.subject);
        subjectDropDown.selectByVisibleText(subject);

        Select locationDropDown = new Select(registerPage.location);
        locationDropDown.selectByVisibleText(location);

        Select stateDropDown = new Select(registerPage.state);
        stateDropDown.selectByVisibleText(state);

        registerPage.joinNowBtn.click();

    }

    @And("User should see error message")
    public void userShouldSeeErrorMessage() {
        System.out.println(registerPage.errorMessage.getText());
        Assert.assertTrue(registerPage.errorMessage.isDisplayed());
    }
}
