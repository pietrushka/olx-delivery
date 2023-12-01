export const OLX_BASE_URL = "https://www.olx.pl"

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

const OlxPages = ["oferty", "adding"] as const

const OlxMainCategories = [
	"motoryzacja",
	"dom-ogrod",
	"elektronika",
	"moda",
	"rolnictwo",
	"zwierzeta",
	"dla-dzieci",
	"sport-hobby",
	"muzyka-edukacja",
	"zdrowie-i-uroda",
	"uslugi",
	"dla-firm",
	"outlet",
] as const

const OlxSubCategories = [
	"antyki", //antyki-i-kolekcje
	"kolekcje", //antyki-i-kolekcje
	"sztuka", //antyki-i-kolekcje
	"rekodzielo", //antyki-i-kolekcje
	"czesci-samochodowe", //motoryzacja
	"czesci-motocyklowe", //motoryzacja
	"opony-felgi", //motoryzacja
	"car-audio", //motoryzacja
	"pozostala-motoryzacja", //motoryzacja
	"car-equipment-and-accessories", //motoryzacja
	"budowa", //dom-ogrod
	"instalacje", //dom-ogrod
	"meble", //dom-ogrod
	"ogrod", //dom-ogrod
	"narzedzia", //dom-ogrod
	"ogrzewanie", //dom-ogrod
	"oswietlenie", //dom-ogrod
	"supermarket", //dom-ogrod
	"wykonczenie-wnetrz", //dom-ogrod
	"wyposazenie-wnetrz", //dom-ogrod
	"pozostale-dom-ogrod", //dom-ogrod
	"fotografia", //elektronika
	"gry-konsole", //elektronika
	"komputery", //elektronika
	"smartwatche-i-opaski", //elektronika
	"sprzet-agd", //elektronika
	"sprzet-audio", //elektronika
	"sprzet-video", //elektronika
	"telefony", //elektronika
	"tv", //elektronika
	"pozostala-elektronika", //elektronika
	"ubrania-damskie", //moda
	"ubrania-meskie", //moda
	"akcesoria", //moda
	"bielizna-damska", //moda
	"bielizna-meska", //moda
	"bizuteria", //moda
	"buty-damskie", //moda
	"buty-meskie", //moda
	"czapki-i-kapelusze", //moda
	"odziez-ciazowa", //moda
	"do-slubu", //moda
	"torby-i-torebki", //moda
	"zegarki", //moda
	"pozostala-moda", //moda
	"czesci-do-maszyn-rolniczych", //rolnictwo
	"nawozy", //rolnictwo
	"produkty-rolne", //rolnictwo
	"ryneczek", //rolnictwo
	"srodki-ochrony-roslin", //rolnictwo
	"worki", //rolnictwo
	"zbiorniki", //rolnictwo
	"pozostale-rolnicze", //rolnictwo
	"akcesoria-dla-zwierzat", //zwierzeta
	"karma-i-przysmaki", //zwierzeta
	"akwarystyka", //zwierzeta
	"terrarystyka", //zwierzeta
	"akcesoria-dla-niemowlat", //dla-dzieci
	"artykuly-szkolne", //dla-dzieci
	"buciki", //dla-dzieci
	"foteliki-nosidelka", //dla-dzieci
	"meble-dla-dzieci", //dla-dzieci
	"odziez-niemowleca", //dla-dzieci
	"ubranka-dla-chlopcow", //dla-dzieci
	"ubranka-dla-dziewczynek", //dla-dzieci
	"wozki-dzieciece", //dla-dzieci
	"zabawki", //dla-dzieci
	"pozostale-dla-dzieci", //dla-dzieci
	"akcesoria-jezdzieckie", //sport-hobby
	"bilety", //sport-hobby
	"fitness", //sport-hobby
	"gry-planszowe", //sport-hobby
	"pojazdy-elektryczne", //sport-hobby
	"rowery", //sport-hobby
	"skating", //sport-hobby
	"sporty-wodne", //sport-hobby
	"sporty-zimowe", //sport-hobby
	"turystyka", //sport-hobby
	"wedkarstwo", //sport-hobby
	"pozostaly-sport-hobby", //sport-hobby
	"zeglarstwo", //sport-hobby
	"ksiazki", //muzyka-edukacja
	"muzyka", //muzyka-edukacja
	"filmy", //muzyka-edukacja
	"instrumenty", //muzyka-edukacja
	"materialy-jezykowe", //muzyka-edukacja
	"pozostala-muzyka-edukacja", //muzyka-edukacja
	"cialo", //zdrowie-i-uroda
	"twarz", //zdrowie-i-uroda
	"paznokcie", //zdrowie-i-uroda
	"wlosy", //zdrowie-i-uroda
	"makijaz", //zdrowie-i-uroda
	"perfumy", //zdrowie-i-uroda
	"higiena-jamy-ustnej", //zdrowie-i-uroda
	"korekcja-wzroku", //zdrowie-i-uroda
	"produkty-cbd", //zdrowie-i-uroda
	"sprzet-rehabilitacyjny-i-ortopedyczny", //zdrowie-i-uroda
	"transport-i-poruszanie", //zdrowie-i-uroda
	"urzadzenia-do-masazu", //zdrowie-i-uroda
	"urzadzenia-medyczne", //zdrowie-i-uroda
	"srodki-ochrony", //zdrowie-i-uroda
	"witaminy-i-suplementy-zdrowia", //zdrowie-i-uroda
	"pozostale", //zdrowie-i-uroda
	"budowa-remont", //uslugi
	"biuro", //dla-firm
	"maszyny-i-urzadzenia", //dla-firm
	"odziez-robocza", //dla-firm
	"sklepy-i-magazyny", //dla-firm
	"outlet-gry-i-konsole", //outlet
	"outlet-komputery", //outlet
	"outlet-sprzet-agd", //outlet
	"outlet-telefony", //outlet
	"outlet-tv", //outlet
	"outlet-wyposazenie-wnetrz", //outlet
	"outlet-pozostala-elektronika", //outlet
] as const

export const olxRoutes = [...OlxPages, ...OlxMainCategories, ...OlxSubCategories] as const
export type OlxRoute = (typeof olxRoutes)[number]
