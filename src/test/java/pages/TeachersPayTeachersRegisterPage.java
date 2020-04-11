package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class TeachersPayTeachersRegisterPage {

    public TeachersPayTeachersRegisterPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[text()='REGISTER']")
    public WebElement registerBtn;

    @FindBy(xpath = "//input[@id='UsersProfileFirstName']")
    public WebElement firstName;

    @FindBy(xpath = "//input[@id='UsersProfileLastName']")
    public WebElement lastName;

    @FindBy(xpath = "//input[@id='UserEmail']")
    public WebElement email;

    @FindBy(xpath = "//input[@id='UserEmailConfirm']")
    public WebElement confirmEmail;

    @FindBy(xpath = "//input[@id='iField0']")
    public WebElement password;

    @FindBy(xpath = "//select[@id='UsersProfileGradeLevel']")
    public WebElement gradeLevel;

    @FindBy(xpath = "//select[@id='UsersProfileSubjectarea']")
    public WebElement subject;

    @FindBy(xpath = "//select[@id='UsersProfileCountryId']")
    public WebElement location;

    @FindBy(xpath = "//select[@id='UsersProfileState']")
    public WebElement state;

    @FindBy(xpath = "//input[@value='JOIN NOW']")
    public WebElement joinNowBtn;

    @FindBy(xpath = "//div[@id='authMessage']")
    public WebElement errorMessage;

}
