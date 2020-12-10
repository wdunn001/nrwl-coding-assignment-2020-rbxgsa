import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.store";
import { Guid } from "../../store/models/guid.model";
import { TicketAddOne } from "../../store/ticket.store";
import { CreateTicketComponent } from "../create-ticket/create-ticket.component";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  constructor(private store: Store<AppState>, private dialog: MatDialog) {}

  ngOnInit() {}

  addTicket() {
    this.dialog.open(CreateTicketComponent, {
      width: "400px",
      panelClass: "custom-dialog"
    });
  }
}
