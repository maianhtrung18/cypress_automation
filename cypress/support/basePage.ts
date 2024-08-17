export const appUrl = Cypress.config().baseUrl;
type WebElement = Cypress.Chainable<JQuery<any>>;

export const openApp = (): void => {
  cy.visit(appUrl);
};

export const getElement = (
  locator: string,
  isText: boolean = false
): WebElement => {
  if (isText) {
    return cy.contains(locator);
  }
  return cy.get(locator);
};

export const clickElement = (
  webElement: WebElement,
  force: boolean = false
): WebElement => {
  return webElement.click({ force });
};

export const inputText = (webElement: WebElement, text: string): WebElement => {
  if (text === "") {
    return clearText(webElement);
  }
  clearText(webElement);
  return webElement.type(text, { delay: 10 });
};

export const clearText = (webElement: WebElement) => {
  return webElement.clear();
};

export const waitElementVisible = (webElement: WebElement) => {
  return webElement.should("be.visible");
};

export const checkElement = (
  webElement: WebElement,
  value: string | string[]
) => {
  webElement.check(value);
};

export const unCheckElement = (webElement: WebElement, value: string[]) => {
  webElement.uncheck(value);
};
