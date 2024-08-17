import {
  INFO_FIELDS,
  INFO_SOURCE,
  SERVICE_OF_INTEREST,
  TYPE_OF_ASSOCIATION,
} from "../fixtures/contant";
import { openApp } from "../support/basePage";
import {
  assertTextOfDropdownMenu,
  clickSubmitButton,
  inputInfo,
  selectInfoSource,
  selectServiceOfInterest,
  selectTypeOfAssociation,
  waitNotifycationDisplay,
} from "../support/formPage";

describe("Test recruit qa engineer work sample", () => {
  beforeEach(() => {
    openApp();
  });
  it("Verify error is displayed when user input invalid email", () => {
    ["123", "123tr", "123tr@", "123tr@gmail", "123tr@gmail.com"].forEach(
      (email) => {
        inputInfo(INFO_FIELDS.EMAIL, email);
        waitNotifycationDisplay(`'email' is not a valid email`);
      }
    );
    inputInfo(INFO_FIELDS.EMAIL, "");
    waitNotifycationDisplay(`'email' is required`);
  });
  it("Verify error is displayed when user dont input lastname", () => {
    inputInfo(INFO_FIELDS.LASTNAME, "Tester");
    inputInfo(INFO_FIELDS.LASTNAME, "");
    waitNotifycationDisplay(`'lastName' is required`);
  });
  it("Verify error is displayed when user dont input firstname", () => {
    inputInfo(INFO_FIELDS.FIRSTNAME, "Testing");
    inputInfo(INFO_FIELDS.FIRSTNAME, "");
    waitNotifycationDisplay(`'firstName' is required`);
  });
  it("Verify user can select all option in dropdown menu", () => {
    for (const infoSource of Object.values(INFO_SOURCE)) {
      selectInfoSource(infoSource);
      assertTextOfDropdownMenu(infoSource);
    }
  });

  it("Veiry user can register successfully", () => {
    inputInfo(INFO_FIELDS.EMAIL, "tester123@gmail.com");
    inputInfo(INFO_FIELDS.LASTNAME, "Lastname");
    inputInfo(INFO_FIELDS.FIRSTNAME, "Firstname");
    selectInfoSource(INFO_SOURCE.SEARCH_ENGINES);
    selectServiceOfInterest([
      SERVICE_OF_INTEREST.PRINTING,
      SERVICE_OF_INTEREST.ADVERTISEMENT,
    ]);
    selectTypeOfAssociation(TYPE_OF_ASSOCIATION.OTHER);
    clickSubmitButton();
    waitNotifycationDisplay("Your inquiry has been submitted successfully!");
  });
});
