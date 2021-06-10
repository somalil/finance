export default class PaymentsPage {
  rowSource = () => cy.get('th[data-field="source"] span');
  rowStatus = () => cy.get('th[data-field="status"] span');
  rowAmountFact = () => cy.get('th[data-field="amount_fact"] span');
  rowDateFact = () => cy.get('th[data-field="date_fact"] span');
  rowCategory = () => cy.get('th[data-field="category"] span');
  rowDescription = () => cy.get('th[data-field="description"] span');

  btnCreatePayment = () => cy.get(".pageLayout__header button");
  btnSubmit = () => cy.get('button[type="submit"]');
  btnCalendarToday = () => cy.get("div.dp-days > button.dp-day-today");

  fieldDescription = () =>
    cy.get('div[data-field-name="description"] textarea');
  fieldSumPlan = () => cy.get('div[data-field-name="amount_plan"] input');
  fieldSumFact = () => cy.get('div[data-field-name="amount_fact"] input');
  fieldDatePlan = () => cy.get('div[data-field-name="date_plan"] .date__input');
  fieldDateFact = () => cy.get('div[data-field-name="date_fact"] .date__input');
  fieldSource = () =>
    cy.get('div[data-field-name="source"] .multiselect__tags');
  fieldSourceAdditional = () =>
    cy.get('div[data-field-name="source_additional_id"] textarea');
  fieldSourceStatus = () =>
    cy.get('div[data-field-name="source_status"] .multiselect__tags');
  fieldCompanyOwn = () =>
    cy.get('div[data-field-name="company_own"] .multiselect__tags');
  fieldCompanyClient = () =>
    cy.get('div[data-field-name="company_client"] .multiselect__tags');
  fieldAccountSender = () =>
    cy.get('div[data-field-name="account_sender"] .multiselect__tags');
  fieldAccountRecipient = () =>
    cy.get('div[data-field-name="account_recipient"] .multiselect__tags');
  fieldTags = () => cy.get('div[data-field-name="tags"] .multiselect__tags');

  radioBtnOperationIncome = () =>
    cy.get(
      'div[data-field-name="operation"] .radio-group__checkbox--first .checkbox__icon'
    );
  radioBtnPayStatusPaid = () =>
    cy.get(
      'div[data-field-name="status"] div[class="form-field radio-group__checkbox"] .checkbox__icon--radio'
    );

  checkboxStatusActive = () =>
    cy.get(
      'div[data-field-name="statuses"] .radio-group__checkbox--first .checkbox__icon'
    );

  popUpMessage = () => cy.get(".layout__content .notification__body");
}
