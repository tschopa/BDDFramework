$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Teachers_Pay_Teachers.feature");
formatter.feature({
  "name": "Teachers Pays Teachers website testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@teachersPaysTeachers"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "A user is on Teachers Pays Teachers home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.a_user_is_on_Teachers_Pays_Teachers_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Teachers Pays Teachers title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@teachersPaysTeachers"
    }
  ]
});
formatter.step({
  "name": "The title contains \"Teachers Pay Teachers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.the_title_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative scenario for registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Log in button",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Register button",
  "keyword": "Then "
});
formatter.step({
  "name": "User provides required data \"\u003cfirstName\u003e\", \"\u003clastName\u003e\", \"\u003cemail\u003e\", \"\u003cconfirmEmail\u003e\", \"\u003cpassword\u003e\", \"\u003cgradeLevel\u003e\", \"\u003csubject\u003e\", \"\u003clocation\u003e\", \"\u003cstate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should see error message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "confirmEmail",
        "password",
        "gradeLevel",
        "subject",
        "location",
        "state"
      ]
    },
    {
      "cells": [
        "James",
        "Bond",
        "fakeJamesBond@gmail.com",
        "fakeJamesBond@gmail.com",
        "abcd.1234",
        "Middle School",
        "Science",
        "United States",
        "Illinois"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "A user is on Teachers Pays Teachers home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.a_user_is_on_Teachers_Pays_Teachers_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative scenario for registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teachersPaysTeachers"
    }
  ]
});
formatter.step({
  "name": "User clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.userClicksOnRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides required data \"James\", \"Bond\", \"fakeJamesBond@gmail.com\", \"fakeJamesBond@gmail.com\", \"abcd.1234\", \"Middle School\", \"Science\", \"United States\", \"Illinois\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.userProvidesRequiredData(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see error message",
  "keyword": "And "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.userShouldSeeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "A user is on Teachers Pays Teachers home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.a_user_is_on_Teachers_Pays_Teachers_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating highlighted option in dropdown menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@teachersPaysTeachers"
    }
  ]
});
formatter.step({
  "name": "User clicks on Browse dropdown menu",
  "keyword": "When "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.user_clicks_on_Browse_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Price\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.user_clicks_on_dropdown_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selected \"Price\" menu is highlighted",
  "keyword": "Then "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.selected_resource_Type_option_is_highlighted(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "A user is on Teachers Pays Teachers home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.a_user_is_on_Teachers_Pays_Teachers_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Asserting selected sub menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@teachersPaysTeachers"
    }
  ]
});
formatter.step({
  "name": "User clicks on Browse dropdown menu",
  "keyword": "When "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.user_clicks_on_Browse_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Resource Type\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.user_clicks_on_dropdown_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Activities\" sub menu",
  "keyword": "Then "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.userClicksOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see \"Activities\" in the You Selected bar",
  "keyword": "And "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.userIsAbleToSeeInTheYouSelectedBar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "A user is on Teachers Pays Teachers home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.a_user_is_on_Teachers_Pays_Teachers_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Asserting searched product and number of listed products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@teachersPaysTeachers"
    }
  ]
});
formatter.step({
  "name": "User clicks on Browse dropdown menu",
  "keyword": "When "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.user_clicks_on_Browse_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Subject\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.user_clicks_on_dropdown_menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Math\" sub menu",
  "keyword": "Then "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.userClicksOnSubMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Number in showing results should match with the count of listed products",
  "keyword": "And "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.numberInShowingResultsShouldMatchWithTheCountOfListedProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Money Games for 2nd Grade\" should be displayed in the product list",
  "keyword": "And "
});
formatter.match({
  "location": "TeachersPayTeachers_StepDefs.shouldBeDisplayedInTheProductList(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});