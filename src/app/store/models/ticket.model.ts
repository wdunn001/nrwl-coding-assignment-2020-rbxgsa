export class Ticket {
  constructor(json: Partial<Ticket>){
    Object.assign(this, json);
  }
}