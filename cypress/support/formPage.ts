import {
  INFO_FIELDS,
  INFO_SOURCE,
  SERVICE_OF_INTEREST,
  TYPE_OF_ASSOCIATION,
} from "../fixtures/contant";
import {
  checkElement,
  clickElement,
  getElement,
  inputText,
  waitElementVisible,
} from "./basePage";

const formItem = (field: INFO_FIELDS): string => `#form_item_${field}`;
const dropDownSelection = `#form_item_infoSource`;
const selectionList = `div.rc-virtual-list`;
const serviceOfInterest = `.ant-checkbox-input`;
const typeOfAssociation = `.ant-radio-input`;
const dropdownText = `.ant-select-selection-item`;
const submitButton = `button[type="Submit"]`;

export const inputInfo = (field: INFO_FIELDS, text: string) => {
  inputText(getElement(formItem(field)), text);
};

export const waitNotifycationDisplay = (text: string): void => {
  waitElementVisible(getElement(text, true));
};

export const selectInfoSource = (option: INFO_SOURCE): void => {
  clickElement(getElement(dropDownSelection), true);
  clickElement(getElement(selectionList).contains(option), true);
};

export const selectServiceOfInterest = (
  service: SERVICE_OF_INTEREST | SERVICE_OF_INTEREST[]
) => {
  checkElement(getElement(serviceOfInterest), service);
};

export const selectTypeOfAssociation = (
  associationType: TYPE_OF_ASSOCIATION
) => {
  checkElement(getElement(typeOfAssociation), associationType);
};

export const assertTextOfDropdownMenu = (text: string) => {
  getElement(dropdownText).should("have.text", text);
};

export const clickSubmitButton = () => {
  clickElement(getElement(submitButton));
};
