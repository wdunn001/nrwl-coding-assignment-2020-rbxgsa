import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.store";
import { Guid } from "../../store/models/guid.model";
import { TicketAddOne } from "../../store/ticket.store";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addTicket() {
    this.store.dispatch(
      new TicketAddOne({ id: Guid.newGuid(), name: Guid.newGuid() })
    );
  }
}
