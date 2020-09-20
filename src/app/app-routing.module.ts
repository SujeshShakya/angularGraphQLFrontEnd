import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { ContentComponent } from "./dashboard/content/content.component";

const routes: Routes = [
  
  { path: "", component: DashboardComponent,
children: [
  {
    path: 'content/:content',
    component: ContentComponent,
  }
]
},
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
