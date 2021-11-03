import { MongoClient } from "mongodb";
import Trip from "../core/entities/Trip";
import TripRepository from "../core/repositories/trip.repository";

class TripMongo implements TripRepository{
    private async getCollection(){
        const url    = "mongodb://localhost:27017";
        const client = await MongoClient.connect(url,{useUnifiedTopology: true});
        const db     = client.db("ticketing");
        
        return db.collection("trips");
    }

    public async getById(id: string): Promise<Trip>{
        const collection = await this.getCollection();
        const trip: Trip = await collection.findOne({id});
        return trip; 
    }
}
export default TripMongo;