import Trip from "../entities/Trip";

export default interface TripRepository{
    getById(id:string): Promise<Trip>;
}