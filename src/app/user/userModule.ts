import { userRoutes } from './userRoutes';
import { ProfileComponent } from './profile.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: []
})
export class UserModule {}
