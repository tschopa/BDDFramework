@teachersPaysTeachers
Feature: Teachers Pays Teachers website testing

  Background:
    Given A user is on Teachers Pays Teachers home page

  Scenario: Teachers Pays Teachers title verification
    Then The title contains "Teachers Pay Teachers"

  Scenario Outline: Negative scenario for registration
    When User clicks on Log in button
    Then User clicks on Register button
    Then User provides required data "<firstName>", "<lastName>", "<email>", "<confirmEmail>", "<password>", "<gradeLevel>", "<subject>", "<location>", "<state>"
    And User should see error message
    Examples:
      | firstName | lastName | email                   | confirmEmail            | password  | gradeLevel    | subject | location      | state    |
      | James     | Bond     | fakeJamesBond@gmail.com | fakeJamesBond@gmail.com | abcd.1234 | Middle School | Science | United States | Illinois |


  Scenario: Validating highlighted option in dropdown menu
    When User clicks on Browse dropdown menu
    When User clicks on "Price" menu
    Then Selected "Price" menu is highlighted

  Scenario: Asserting selected sub menu
    When User clicks on Browse dropdown menu
    When User clicks on "Resource Type" menu
    Then User clicks on "Activities" sub menu
    And User is able to see "Activities" in the You Selected bar

  Scenario: Asserting searched product and number of listed products
    When User clicks on Browse dropdown menu
    When User clicks on "Subject" menu
    Then User clicks on "Math" sub menu
    And Number in showing results should match with the count of listed products
    And "Money Games for 2nd Grade" should be displayed in the product list






