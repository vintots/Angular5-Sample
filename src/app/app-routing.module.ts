import { DasboardComponent } from "./pages/dasboard/dasboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

const appRoutes: Routes = [
  { path: "dashboard", component: DasboardComponent },

  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: []
})
export class AppRoutingModule {}
