import Ticket from "../entities/Ticket";

export default interface NotifierRepository{
    notify(ticket: Ticket, email:string):void;
}