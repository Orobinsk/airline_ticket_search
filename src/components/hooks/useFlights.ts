import {useMemo} from "react";

export const useAirlines = (flights: any) => {
    return useMemo(() => {
        let airlines: any = []
        flights.map((flight: any) => {
                airlines.push(flight.flight.carrier.caption)
            }
        )
        return Array.from(new Set(airlines))
    }, [flights])
}

export const SortedFlights = (flights: any, sort: string) => {
    return useMemo(() => {
        switch (sort) {
            case 'lowerPrice':
                return [...flights].sort((a: any, b: any) => a.flight.price.total.amount - b.flight.price.total.amount)
            case 'higherPrice':
                return [...flights].sort((a: any, b: any) => b.flight.price.total.amount - a.flight.price.total.amount)
            case 'duration':
                return [...flights].sort((a: any, b: any) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
            default:
                return flights;
        }
    }, [sort, flights]);
}

export const FilterTransfers = (sortedFlights: any, filterTransfers: any) => {
    return useMemo(() => {
        switch (filterTransfers) {
            case '1 transfer':
                return sortedFlights.filter((flight: any) => flight.flight.legs[0].segments.length === 2 && flight.flight.legs[0].segments.length === 2)
            case 'non-stop':
                return sortedFlights.filter((flight: any) => flight.flight.legs[0].segments.length === 1 && flight.flight.legs[1].segments.length === 1)
            default:
                return sortedFlights;
        }
    }, [filterTransfers, sortedFlights]);
}

const useFilterPrice = (filterTransfersFlights: any, filterPriceFrom: number, filterPriceBefore: number) => {
    return useMemo(() => {
        return filterTransfersFlights.filter(((flight: any) => flight.flight.price.total.amount >= filterPriceFrom && flight.flight.price.total.amount <= filterPriceBefore))
    }, [filterPriceFrom, filterTransfersFlights, filterPriceBefore]);
}

export const FilterAirlines = (filterPriceFlights: any, airlines: any) => {
    const testing = airlines.map((e: any) => {
        return filterPriceFlights.filter((flight: any) => flight.flight.carrier.caption === e)
    })
    return [].concat(...testing)
}

export const useFlight = (flights: any, sort: string, filterTransfers: any, filterPriceFrom: number, filterPriceBefore: number, filterAirlines: any) => {
    const sortedFlights = SortedFlights(flights, sort)
    const filterTransfersFlights = FilterTransfers(sortedFlights, filterTransfers)
    const filterPriceFlights = useFilterPrice(filterTransfersFlights, filterPriceFrom, filterPriceBefore)
    const filteredAirlinesFlights = FilterAirlines(filterPriceFlights, filterAirlines)

    return filteredAirlinesFlights

}

