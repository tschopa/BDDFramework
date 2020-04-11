package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class TeachersPayTeachersPage {

    public TeachersPayTeachersPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//div[@class='CategoryMenu__buttonContent']")
    public WebElement browseDropDownBtn;

    @FindBy(xpath = "//div[@class='SubMenuPrefab']//div[@class='SubMenuPrefabLabelLayout']/span[1]")
    public List<WebElement> listOfBrowseOptions;

    @FindBy(xpath = "//div[@class='SubMenuPrefab isOpen']//div[@class='SubMenuPrefabLabelLayout']/span[1]")
    public WebElement highlightedSubMenuInBrowse;

    @FindBy(xpath = "//div[@class='SubMenuPrefab isOpen']//li[@class='MenuItem']")
    public List<WebElement> listOfSubMenuOptions;

    @FindBy(xpath = "//p[text()='Types']/following-sibling::p")
    public WebElement selectedType;

    @FindBy(xpath = "(//p[@class='SearchPage__pageRange'])[1]/span")
    public WebElement result;

    @FindBy(xpath = "//div[@class='ProductRowTitleBespoke']")
    public List<WebElement> listOfProductsTitle;

    @FindBy(xpath = "//a[@href='/Login']")
    public WebElement loginBtn;
}
