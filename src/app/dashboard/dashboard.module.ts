import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ContentComponent } from './content/content.component';
import { SafePipe } from './pipe';



@NgModule({
  declarations: [DashboardComponent, LeftmenuComponent, ContentComponent, SafePipe],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
