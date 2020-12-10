export class Ticket {
  id!: string;
  name!: string;
  description?: string;

  constructor(json: Partial<Ticket>) {
    Object.assign(this, json);
  }
}
