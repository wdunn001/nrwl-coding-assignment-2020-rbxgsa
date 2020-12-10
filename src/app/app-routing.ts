import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { TicketDetailsComponent } from "./components/ticket-details/ticket-details.component";
import { TicketListComponent } from "./components/ticket-list/ticket-list.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "tickets",
        pathMatch: "full"
      },
      {
        path: "tickets",
        component: TicketListComponent,
        data: { title: "ReportViewer", source: "Reporthandler.ashx" }
      },
      {
        path: "tickets/:id",
        component: TicketDetailsComponent,
        data: { title: "ReportViewer", source: "Reporthandler.ashx" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
