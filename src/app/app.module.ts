import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BackendService } from "./backend.service";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer, metaReducers } from "./store/app.store";
import { LayoutComponent } from './components/layout/layout.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, TicketListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducer, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
