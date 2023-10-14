import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { HeaderComponent } from './header/header.component';
import { PerformanceComponent } from './performance/performance.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { StatusBtnComponent } from './status-btn/status-btn.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ActionsComponent } from './actions/actions.component';
import { AgentsStatusComponent } from './agents-status/agents-status.component';
import { AvatarComponent } from './avatar/avatar.component';
import { PerfectScrollbarComponent } from './side-menu-content/perfect-scrollbar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewBtnComponent } from './view-btn/view-btn.component';
import { DropDownMenuComponent } from './drop-down-menu/drop-down-menu.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BtnViewComponent } from './btn-view/btn-view.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginBoxedComponent } from './login-boxed/login-boxed.component';
import { StandardButtonsComponent } from './standard-buttons/standard-buttons.component';



@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    PageTitleComponent,
    HeaderComponent,
    PerformanceComponent,
    SearchBoxComponent,
  
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
    ViewBtnComponent,
    DropDownMenuComponent,
    AnalyticsComponent,
    BtnViewComponent,
    TechnicalSupportComponent,
    TimelineComponent,
    LoginBoxedComponent,
    StandardButtonsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
