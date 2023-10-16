import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './Layout/side-menu/side-menu.component';
import { PageTitleComponent } from './Layout/page-title/page-title.component';
import { HeaderComponent } from './Layout/header/header.component';
import { PerformanceComponent } from './performance/performance.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { StatusBtnComponent } from './status-btn/status-btn.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ActionsComponent } from './actions/actions.component';
import { AgentsStatusComponent } from './agents-status/agents-status.component';
import { AvatarComponent } from './avatar/avatar.component';
import { PerfectScrollbarComponent } from './Layout/side-menu-content/perfect-scrollbar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewBtnComponent } from './view-btn/view-btn.component';
import { DropDownMenuComponent } from './drop-down-menu/drop-down-menu.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BtnViewComponent } from './btn-view/btn-view.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginBoxedComponent } from './UserPages/login-boxed/login-boxed.component';
import { StandardButtonsComponent } from './standard-buttons/standard-buttons.component';
import { RegisterBoxedComponent } from './UserPages/register-boxed/register-boxed.component';
import { ForgotPasswordBoxedComponent } from './UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { DropDownBtnComponent } from './drop-down-btn/drop-down-btn.component';


const routes : Routes = [
  { path: '' , component : AnalyticsComponent},
  { path: 'loginBoxed' , component : LoginBoxedComponent},
  { path: 'registerBoxed' , component : RegisterBoxedComponent},
  { path: 'forgetPassword' , component : ForgotPasswordBoxedComponent}
]


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
    RegisterBoxedComponent,
    StandardButtonsComponent,
    StandardButtonsComponent,
    RegisterBoxedComponent,
    ButtonsComponent,
    DropDownBtnComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
