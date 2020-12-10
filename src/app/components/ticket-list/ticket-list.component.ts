import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../../store/app.store";
import { Ticket } from "../../store/models/ticket.model";
import { getAllTickets, TicketRemoveOne } from "../../store/ticket.store";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"]
})
export class TicketListComponent implements OnInit {
  tickets: Observable<Ticket[]> = this.store.select(getAllTickets);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  removeTicket(guid: string) {
    this.store.dispatch(new TicketRemoveOne(guid));
  }
}
