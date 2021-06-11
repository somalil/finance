import PaymentsPage from "../support/pajeobject/payments.page";
const paymentsPage = new PaymentsPage();

context("Payments", () => {
  beforeEach(() => {
    cy.visit("https://finance.dev.fabrique.studio/");
    cy.login('business@business.com', '123123');
  });

  it("Elements exists", () => {
    paymentsPage.rowSource().should("be.visible");
    paymentsPage.rowCategory().should("be.visible");
    paymentsPage.rowAmountFact().should("be.visible");
    paymentsPage.rowStatus().should("be.visible");
    paymentsPage.rowDescription().should("be.visible");
    paymentsPage.rowDateFact().should("be.visible");
  });

  it("should create a payment by filling in the required fields", () => {
    paymentsPage.btnCreatePayment().click();
    paymentsPage.fieldDescription().type("Описание");
    paymentsPage.fieldSumFact().type("100");
    paymentsPage.btnSubmit().click();
    paymentsPage.popUpSuccess().should("contain.text", "Платеж успешно сохранен");
  });

  it("shouldn't create a payment if required fields are not filling in", () => {
    paymentsPage.btnCreatePayment().click();
    paymentsPage.fieldSumFact().type("100");
    paymentsPage.btnSubmit().click();
    cy.wait(100)
    paymentsPage.popUpSuccess().should("not.contain.text", "Платеж успешно сохранен");
  });

  it("shouldn't create a payment if required fields are not filling in", () => {
    paymentsPage.btnCreatePayment().click();
    paymentsPage.fieldDescription().type("Описание");
    paymentsPage.btnSubmit().click();
    cy.wait(100)
    paymentsPage.popUpSuccess().should("not.contain.text", "Платеж успешно сохранен");
  });

  it("should create payment with filling all fields", () => {
    paymentsPage.btnCreatePayment().click();
    paymentsPage.radioBtnOperationIncome().click();
    paymentsPage.fieldDescription().type("Description");
    paymentsPage.checkboxStatusActive().click();
    paymentsPage.fieldSumPlan().type("999");
    paymentsPage.fieldSumFact().type("111");
    paymentsPage.radioBtnPayStatusPaid().click();
    paymentsPage.fieldDatePlan().click();
    paymentsPage.btnCalendarToday().click();
    paymentsPage.fieldDateFact().click();
    paymentsPage.btnCalendarToday().click();
    paymentsPage.fieldSource().type("Source").type("{enter}");
    paymentsPage.fieldSourceAdditional().type("Source, clarification");
    paymentsPage.fieldSourceStatus().type("Счет выставлен").type("{enter}");
    paymentsPage.fieldCompanyOwn().type("Entity").type("{enter}");
    paymentsPage.fieldCompanyClient().type("Counterparty").type("{enter}");
    paymentsPage.fieldAccountSender().type("12345").type("{enter}");
    paymentsPage.fieldAccountRecipient().type("123456").type("{enter}");
    paymentsPage.fieldTags().type("test").type("{enter}");
    paymentsPage.btnSubmit().click();
    paymentsPage.popUpSuccess().should("have.text", "Платеж успешно сохранен");
  });
});
