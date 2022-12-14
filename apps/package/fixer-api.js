const SYMBOLS = {
  AED: 'United Arab Emirates Dirham',
  AFN: 'Afghan Afghani',
  ALL: 'Albanian Lek',
  AMD: 'Armenian Dram',
  ANG: 'Netherlands Antillean Guilder',
  AOA: 'Angolan Kwanza',
  ARS: 'Argentine Peso',
  AUD: 'Australian Dollar',
  AWG: 'Aruban Florin',
  AZN: 'Azerbaijani Manat',
  BAM: 'Bosnia-Herzegovina Convertible Mark',
  BBD: 'Barbadian Dollar',
  BDT: 'Bangladeshi Taka',
  BGN: 'Bulgarian Lev',
  BHD: 'Bahraini Dinar',
  BIF: 'Burundian Franc',
  BMD: 'Bermudan Dollar',
  BND: 'Brunei Dollar',
  BOB: 'Bolivian Boliviano',
  BRL: 'Brazilian Real',
  BSD: 'Bahamian Dollar',
  BTC: 'Bitcoin',
  BTN: 'Bhutanese Ngultrum',
  BWP: 'Botswanan Pula',
  BYN: 'New Belarusian Ruble',
  BYR: 'Belarusian Ruble',
  BZD: 'Belize Dollar',
  CAD: 'Canadian Dollar',
  CDF: 'Congolese Franc',
  CHF: 'Swiss Franc',
  CLF: 'Chilean Unit of Account (UF)',
  CLP: 'Chilean Peso',
  CNY: 'Chinese Yuan',
  COP: 'Colombian Peso',
  CRC: 'Costa Rican Col\u00f3n',
  CUC: 'Cuban Convertible Peso',
  CUP: 'Cuban Peso',
  CVE: 'Cape Verdean Escudo',
  CZK: 'Czech Republic Koruna',
  DJF: 'Djiboutian Franc',
  DKK: 'Danish Krone',
  DOP: 'Dominican Peso',
  DZD: 'Algerian Dinar',
  EGP: 'Egyptian Pound',
  ERN: 'Eritrean Nakfa',
  ETB: 'Ethiopian Birr',
  EUR: 'Euro',
  FJD: 'Fijian Dollar',
  FKP: 'Falkland Islands Pound',
  GBP: 'British Pound Sterling',
  GEL: 'Georgian Lari',
  GGP: 'Guernsey Pound',
  GHS: 'Ghanaian Cedi',
  GIP: 'Gibraltar Pound',
  GMD: 'Gambian Dalasi',
  GNF: 'Guinean Franc',
  GTQ: 'Guatemalan Quetzal',
  GYD: 'Guyanaese Dollar',
  HKD: 'Hong Kong Dollar',
  HNL: 'Honduran Lempira',
  HRK: 'Croatian Kuna',
  HTG: 'Haitian Gourde',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  IMP: 'Manx pound',
  INR: 'Indian Rupee',
  IQD: 'Iraqi Dinar',
  IRR: 'Iranian Rial',
  ISK: 'Icelandic Kr\u00f3na',
  JEP: 'Jersey Pound',
  JMD: 'Jamaican Dollar',
  JOD: 'Jordanian Dinar',
  JPY: 'Japanese Yen',
  KES: 'Kenyan Shilling',
  KGS: 'Kyrgystani Som',
  KHR: 'Cambodian Riel',
  KMF: 'Comorian Franc',
  KPW: 'North Korean Won',
  KRW: 'South Korean Won',
  KWD: 'Kuwaiti Dinar',
  KYD: 'Cayman Islands Dollar',
  KZT: 'Kazakhstani Tenge',
  LAK: 'Laotian Kip',
  LBP: 'Lebanese Pound',
  LKR: 'Sri Lankan Rupee',
  LRD: 'Liberian Dollar',
  LSL: 'Lesotho Loti',
  LTL: 'Lithuanian Litas',
  LVL: 'Latvian Lats',
  LYD: 'Libyan Dinar',
  MAD: 'Moroccan Dirham',
  MDL: 'Moldovan Leu',
  MGA: 'Malagasy Ariary',
  MKD: 'Macedonian Denar',
  MMK: 'Myanma Kyat',
  MNT: 'Mongolian Tugrik',
  MOP: 'Macanese Pataca',
  MRO: 'Mauritanian Ouguiya',
  MUR: 'Mauritian Rupee',
  MVR: 'Maldivian Rufiyaa',
  MWK: 'Malawian Kwacha',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  MZN: 'Mozambican Metical',
  NAD: 'Namibian Dollar',
  NGN: 'Nigerian Naira',
  NIO: 'Nicaraguan C\u00f3rdoba',
  NOK: 'Norwegian Krone',
  NPR: 'Nepalese Rupee',
  NZD: 'New Zealand Dollar',
  OMR: 'Omani Rial',
  PAB: 'Panamanian Balboa',
  PEN: 'Peruvian Nuevo Sol',
  PGK: 'Papua New Guinean Kina',
  PHP: 'Philippine Peso',
  PKR: 'Pakistani Rupee',
  PLN: 'Polish Zloty',
  PYG: 'Paraguayan Guarani',
  QAR: 'Qatari Rial',
  RON: 'Romanian Leu',
  RSD: 'Serbian Dinar',
  RUB: 'Russian Ruble',
  RWF: 'Rwandan Franc',
  SAR: 'Saudi Riyal',
  SBD: 'Solomon Islands Dollar',
  SCR: 'Seychellois Rupee',
  SDG: 'Sudanese Pound',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  SHP: 'Saint Helena Pound',
  SLE: 'Sierra Leonean Leone',
  SLL: 'Sierra Leonean Leone',
  SOS: 'Somali Shilling',
  SRD: 'Surinamese Dollar',
  STD: 'S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra',
  SVC: 'Salvadoran Col\u00f3n',
  SYP: 'Syrian Pound',
  SZL: 'Swazi Lilangeni',
  THB: 'Thai Baht',
  TJS: 'Tajikistani Somoni',
  TMT: 'Turkmenistani Manat',
  TND: 'Tunisian Dinar',
  TOP: 'Tongan Pa\u02bbanga',
  TRY: 'Turkish Lira',
  TTD: 'Trinidad and Tobago Dollar',
  TWD: 'New Taiwan Dollar',
  TZS: 'Tanzanian Shilling',
  UAH: 'Ukrainian Hryvnia',
  UGX: 'Ugandan Shilling',
  USD: 'United States Dollar',
  UYU: 'Uruguayan Peso',
  UZS: 'Uzbekistan Som',
  VEF: 'Venezuelan Bol\u00edvar Fuerte',
  VND: 'Vietnamese Dong',
  VUV: 'Vanuatu Vatu',
  WST: 'Samoan Tala',
  XAF: 'CFA Franc BEAC',
  XAG: 'Silver (troy ounce)',
  XAU: 'Gold (troy ounce)',
  XCD: 'East Caribbean Dollar',
  XDR: 'Special Drawing Rights',
  XOF: 'CFA Franc BCEAO',
  XPF: 'CFP Franc',
  YER: 'Yemeni Rial',
  ZAR: 'South African Rand',
  ZMK: 'Zambian Kwacha (pre-2013)',
  ZMW: 'Zambian Kwacha',
  ZWL: 'Zimbabwean Dollar',
};

const RATES = {
  AED: 0.000238,
  AFN: 0.00568,
  ALL: 0.007304,
  AMD: 0.025423,
  ANG: 0.000116,
  AOA: 0.031952,
  ARS: 0.010374,
  AUD: 9.6482327e-5,
  AWG: 0.000117,
  AZN: 0.00011,
  BAM: 0.000122,
  BBD: 0.00013,
  BDT: 0.006561,
  BGN: 0.000122,
  BHD: 2.434387e-5,
  BIF: 0.132805,
  BMD: 6.4712144e-5,
  BND: 8.8416535e-5,
  BOB: 0.000444,
  BRL: 0.000345,
  BSD: 6.4197442e-5,
  BTC: 4.002e-9,
  BTN: 0.005189,
  BWP: 0.000832,
  BYN: 0.000162,
  BYR: 1.268358,
  BZD: 0.000129,
  CAD: 8.5714465e-5,
  CDF: 0.132272,
  CHF: 6.1013192e-5,
  CLF: 2.089509e-6,
  CLP: 0.057656,
  CNY: 0.00046,
  COP: 0.311013,
  CRC: 0.039122,
  CUC: 6.4712144e-5,
  CUP: 0.001715,
  CVE: 0.006879,
  CZK: 0.001519,
  DJF: 0.011429,
  DKK: 0.000465,
  DOP: 0.003492,
  DZD: 0.008992,
  EGP: 0.00158,
  ERN: 0.000971,
  ETB: 0.003428,
  EUR: 6.2553671e-5,
  FJD: 0.000144,
  FKP: 5.4674927e-5,
  GBP: 5.4772682e-5,
  GEL: 0.000175,
  GGP: 5.4674927e-5,
  GHS: 0.000931,
  GIP: 5.4674927e-5,
  GMD: 0.003965,
  GNF: 0.553077,
  GTQ: 0.000502,
  GYD: 0.013429,
  HKD: 0.000507,
  HNL: 0.001587,
  HRK: 0.000472,
  HTG: 0.008699,
  HUF: 0.025378,
  IDR: 1,
  ILS: 0.000221,
  IMP: 5.4674927e-5,
  INR: 0.005214,
  IQD: 0.0937,
  IRR: 2.737324,
  ISK: 0.009352,
  JEP: 5.4674927e-5,
  JMD: 0.009874,
  JOD: 4.5882564e-5,
  JPY: 0.008995,
  KES: 0.007889,
  KGS: 0.005455,
  KHR: 0.265917,
  KMF: 0.031275,
  KPW: 0.058241,
  KRW: 0.08483,
  KWD: 1.985563e-5,
  KYD: 5.3497868e-5,
  KZT: 0.029555,
  LAK: 1.111839,
  LBP: 0.097082,
  LKR: 0.023593,
  LRD: 0.009953,
  LSL: 0.001125,
  LTL: 0.000191,
  LVL: 3.9143718e-5,
  LYD: 0.00032,
  MAD: 0.00069,
  MDL: 0.001233,
  MGA: 0.275416,
  MKD: 0.003844,
  MMK: 0.134819,
  MNT: 0.220652,
  MOP: 0.000518,
  MRO: 0.023102,
  MUR: 0.002835,
  MVR: 0.000997,
  MWK: 0.065897,
  MXN: 0.001262,
  MYR: 0.000298,
  MZN: 0.004131,
  NAD: 0.001125,
  NGN: 0.028535,
  NIO: 0.002311,
  NOK: 0.000641,
  NPR: 0.008302,
  NZD: 0.000106,
  OMR: 2.4869178e-5,
  PAB: 6.4197442e-5,
  PEN: 0.000248,
  PGK: 0.000226,
  PHP: 0.003706,
  PKR: 0.01422,
  PLN: 0.000292,
  PYG: 0.458023,
  QAR: 0.000236,
  RON: 0.000306,
  RSD: 0.007327,
  RUB: 0.003883,
  RWF: 0.068648,
  SAR: 0.000243,
  SBD: 0.000533,
  SCR: 0.00085,
  SDG: 0.036789,
  SEK: 0.000672,
  SGD: 8.8707453e-5,
  SHP: 8.9134722e-5,
  SLE: 0.001161,
  SLL: 1.15317,
  SOS: 0.036757,
  SRD: 0.001945,
  STD: 1.339411,
  SVC: 0.000562,
  SYP: 0.162591,
  SZL: 0.001108,
  THB: 0.002317,
  TJS: 0.000645,
  TMT: 0.000227,
  TND: 0.000205,
  TOP: 0.000155,
  TRY: 0.001202,
  TTD: 0.000436,
  TWD: 0.002018,
  TZS: 0.150909,
  UAH: 0.002371,
  UGX: 0.241711,
  USD: 6.4712144e-5,
  UYU: 0.002576,
  UZS: 0.719479,
  VEF: 59.980354,
  VND: 1.605832,
  VUV: 0.007745,
  WST: 0.00018,
  XAF: 0.040924,
  XAG: 2.993646e-6,
  XAU: 3.6651e-8,
  XCD: 0.000175,
  XDR: 4.9966697e-5,
  XOF: 0.040924,
  XPF: 0.007607,
  YER: 0.016194,
  ZAR: 0.001115,
  ZMK: 0.582487,
  ZMW: 0.001052,
  ZWL: 0.020837,
};

export function getAllSymbolsCountry() {
  return Object.keys(SYMBOLS);
}

export function getNameCountry(symbol) {
  return SYMBOLS[symbol];
}

export function convertMoney(fromSymbols = 'IDR', toSymbols = 'USD', data = 1) {
  let total = 0;
  if (fromSymbols == 'IDR') {
    // If convert from IDR = amount money * amount money ${toSymbols}
    total = data * RATES[toSymbols];
  } else {
    // If convert from other IDR = amount money / amount money ${fromSymbols} * amount money ${toSymbols}
    total = (data / RATES[fromSymbols]) * RATES[toSymbols];
  }
  // Return total money and get 2 decimal and remove 0 last number
  return parseFloat(total.toFixed(2));
}
