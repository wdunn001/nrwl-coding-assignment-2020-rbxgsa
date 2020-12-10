import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Store } from "@ngrx/store";
import { BackendService } from "../../backend.service";
import { AppState } from "../../store/app.store";
import { Guid } from "../../store/models/guid.model";
import { TicketAddOne } from "../../store/ticket.store";

@Component({
  selector: "app-create-ticket",
  templateUrl: "./create-ticket.component.html",
  styleUrls: ["./create-ticket.component.css"]
})
export class CreateTicketComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<CreateTicketComponent>
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: [Guid.newGuid()],
      name: ["", Validators.required],
      description: ["", Validators.maxLength(144)]
    });
  }

  submit() {
    this.store.dispatch(new TicketAddOne(this.formGroup.value));
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
