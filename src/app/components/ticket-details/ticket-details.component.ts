import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../../store/app.store";
import { Ticket } from "../../store/models/ticket.model";
import { getTicketById } from "../../store/ticket.store";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"]
})
export class TicketDetailsComponent implements OnInit {
  ticket$: Observable<Ticket>;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ticket$ = this.store.select(getTicketById(params["id"]));
    });
  }
}
