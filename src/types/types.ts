interface Currency {
    amount: string;
    currency: string;
    currencyCode: string;
}

interface PassengerType {
    uid: string;
    caption: string;
}

interface PassengerPrice {
    total: Currency;
    passengerType: PassengerType;
    singlePassengerTotal: Currency;
    passengerCount: number;
    tariff: Currency;
    feeAndTaxes: Currency;
}

interface Airport {
    uid: string;
    caption: string;
}

export interface Airline {
    uid: string;
    caption: string;
    airlineCode: string;
}

interface FlightSegment {
    classOfServiceCode: string;
    classOfService: { uid: string; caption: string };
    departureAirport: Airport;
    departureCity: { uid: string; caption: string };
    aircraft: { uid: string; caption: string };
    travelDuration: number;
    arrivalCity: { uid: string; caption: string };
    arrivalDate: string;
    flightNumber: string;
    techStopInfos: any[];
    departureDate: string;
    stops: number;
    servicesDetails: any;
    airline: Airline;
    starting: boolean;
    arrivalAirport: Airport;
    operatingAirline?: Airline;
}

export interface FlightLeg {
    duration: number;
    segments: FlightSegment[];
}

export interface Flight {
    hasExtendedFare: boolean;
    flight: {
        carrier: Airline;
        price: {
            total: Currency;
            totalFeeAndTaxes: Currency;
            rates: { totalUsd: Currency; totalEur: Currency };
            passengerPrices: PassengerPrice[];
        };
        servicesStatuses: any;
        legs: FlightLeg[];
        exchange: any;
        isTripartiteContractDiscountApplied: boolean;
        international: boolean;
        seats: { count: number; type: PassengerType }[];
        refund: any;
    };
    flightToken: string;
}

