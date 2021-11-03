import Passenger from "../entities/Passenger";
import Ticket from "../entities/Ticket";
import Trip from "../entities/Trip";
import NotifierRepository from "../repositories/notifier.repository";
import TripRepository from "../repositories/trip.repository";

const saveBooking = (tripRepository: TripRepository, notifierRepository: NotifierRepository) => async(passenger: Passenger, tripId: string): Promise<Ticket> => {
    //Get trip by id
    const trip: Trip = await tripRepository.getById(tripId);

    //Create Trip
    const ticket: Ticket = {
        tripId:trip.id,
        tripName: trip.name,
        arrivalTime: trip.arrivalTime,
        departureTime: trip.departureTime,
        passengerName: passenger.name,
        passengerLastname: passenger.lastname,
    };

    //Notify passenger
    notifierRepository.notify(ticket, passenger.email);

    //Return Ticket
    return ticket;
}