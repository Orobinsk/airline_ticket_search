import {useMemo} from "react";
import {Flight} from "../../types/types";

export const useAirlines = (flights: Flight[]): string[] => {
    return useMemo(() => {
        const airlines = flights.map((flight: Flight) => flight.flight.carrier.caption);
        return Array.from(new Set(airlines));
    }, [flights])
}

export const SortedFlights = (flights: Flight[], sort: string) => {
    return useMemo(() => {
        switch (sort) {
            case 'lowerPrice':
                return [...flights].sort((a: Flight, b: Flight) => Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount))
            case 'higherPrice':
                return [...flights].sort((a: Flight, b: Flight) => Number(b.flight.price.total.amount) - Number(a.flight.price.total.amount))
            case 'duration':
                return [...flights].sort((a: Flight, b: Flight) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
            default:
                return flights;
        }
    }, [sort, flights]);
}

export const FilterTransfers = (sortedFlights: Flight[], filterTransfers: string) => {
    return useMemo(() => {
        switch (filterTransfers) {
            case '1 transfer':
                return sortedFlights.filter((flight: Flight) => flight.flight.legs[0].segments.length === 2 && flight.flight.legs[0].segments.length === 2)
            case 'non-stop':
                return sortedFlights.filter((flight: Flight) => flight.flight.legs[0].segments.length === 1 && flight.flight.legs[1].segments.length === 1)
            default:
                return sortedFlights;
        }
    }, [filterTransfers, sortedFlights]);
}

const useFilterPrice = (filterTransfersFlights: Flight[], filterPriceFrom: number, filterPriceBefore: number) => {
    return useMemo(() => {
        return filterTransfersFlights.filter(((flight: Flight) => Number(flight.flight.price.total.amount) >= filterPriceFrom && Number(flight.flight.price.total.amount) <= filterPriceBefore))
    }, [filterPriceFrom, filterTransfersFlights, filterPriceBefore]);
}

export const FilterAirlines = (filterPriceFlights: Flight[], airlines: string[]) => {
    return useMemo(() => {
        return airlines.flatMap((e: string) => {
            return filterPriceFlights.filter((flight: Flight) => flight.flight.carrier.caption === e);
        });
    }, [filterPriceFlights, airlines]);
}

export const useFlight = (flights: Flight[], sort: string, filterTransfers: string, filterPriceFrom: number, filterPriceBefore: number, filterAirlines: string[]) => {
    const sortedFlights = SortedFlights(flights, sort)
    const filterTransfersFlights = FilterTransfers(sortedFlights, filterTransfers)
    const filterPriceFlights = useFilterPrice(filterTransfersFlights, filterPriceFrom, filterPriceBefore)
    return FilterAirlines(filterPriceFlights, filterAirlines)
}

