import { SessionListComponent } from './events/event-details/session-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { UserModule } from './user/userModule';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { ToastrService } from './common/toastr.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';

import {
  EventListResolver,
  EventRouteActivator,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  CreateSessionComponent
} from './events/index'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    UserModule,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('Do you want to cancel?')
  return true
}