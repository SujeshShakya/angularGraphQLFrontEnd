import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { FindComponent } from "./find/find.component";
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LeftmenuComponent } from './dashboard/leftmenu/leftmenu.component';
import { ContentComponent } from './dashboard/content/content.component';
import { SafePipe } from 'src/app/pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, FindComponent, ListComponent, DashboardComponent, LeftmenuComponent, ContentComponent,SafePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
