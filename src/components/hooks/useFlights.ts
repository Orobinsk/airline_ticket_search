import {useMemo} from "react";

export const UseSortedFlights = (flights: any, sort: any) => {
    const sortedFlights = useMemo(() => {
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
    }, [sort, flights])
    return sortedFlights;
}

export const useFlight = (flights: any, sort: any, filter: any) => {
    const sortedFlights = UseSortedFlights(flights, sort)
    return sortedFlights
    // const sortAndFilteredFlights = useMemo(() => {
    //     return sortedFlights.filter(flight => post.title.toLowerCase().includes(query.toLowerCase()))
    // }, [query, sortedPosts])
    // return sortAndFilteredFlights;
}
