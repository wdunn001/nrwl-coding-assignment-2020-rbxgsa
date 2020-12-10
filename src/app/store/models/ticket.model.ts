export class Ticket {
  id!: number;
  name!: string;
  description?: string;

  constructor(json: Partial<Ticket>) {
    Object.assign(this, json);
  }
}
