import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { HeaderComponent } from './header/header.component';
import { PerformanceComponent } from './performance/performance.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { StatusBtnComponent } from './status-btn/status-btn.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ActionsComponent } from './actions/actions.component';
import { AgentsStatusComponent } from './agents-status/agents-status.component';
import { AvatarComponent } from './avatar/avatar.component';
import { PerfectScrollbarComponent } from './perfect-scrollbar/perfect-scrollbar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    PageTitleComponent,
    HeaderComponent,
    PerformanceComponent,
    SearchBoxComponent,
    MenuBurgerComponent,
    UserBoxComponent,
    StatusBtnComponent,
    AchievementComponent,
    ActionsComponent,
    AgentsStatusComponent,
    AvatarComponent,
    PerfectScrollbarComponent,
    TasksListComponent,
    SalesReportComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
