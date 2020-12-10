import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.store";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"]
})
export class TicketDetailsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
