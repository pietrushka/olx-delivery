export enum OlxSelectors {
	titleInput = "#title",
	descriptionInput = "#description",
	priceInput = "#parameters\\.price\\.price",
	itemUsedRadioButton = 'div[data-cy="parameters.state_used"] button',
	autoProlongationButton = "label.switch__container span.switch__toggle",
	emailInput = 'input[type="email"]',
	passwordInput = 'input[type="password"]',
	submitButton = 'button[type="submit"]',
	sSizeToggle = "#Band-S__toggle",
	inpostSSizeInput = 'input[aria-label="INPOST package size S"]',
	cityInput = 'input[name="city_id"]',
	createAdSubmit = 'button[type="submit"]',
	privateSellOption = 'label[data-sopid="payU-private"]',
	sellerPayUFirstName = 'input[aria-labelledby="firstName-label"]',
	sellerPayULastName = 'input[aria-labelledby="lastName-label"]',
	payUTermsIframe = "#payuRegulationsAcceptance iframe",
	payUTermsCheckbox = "input",
	locationSuggestionOption = 'li[data-testid="location-list-item"]',
	notFinishedAdModal = ".ReactModalPortal",
}

export enum OlxXPathExpressions {
	textNo = "//span[contains(., 'Nie')]",
}
