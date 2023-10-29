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
import { IconsComponent } from './icons/icons.component';
import { BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsPopoversComponent } from './tooltips-popovers/tooltips-popovers.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { BasicComponent } from './basic/basic.component';
import { BootstrapTablesComponent } from './bootstrap-tables/bootstrap-tables.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ModalsComponent } from './modals/modals.component';
import { FormComponent } from './form/form.component';
import { GridRowsComponent } from './grid-rows/grid-rows.component';
import { FormInlineComponent } from './form-inline/form-inline.component';
import { FormGridComponent } from './form-grid/form-grid.component';
import { ControlsComponent } from './controls/controls.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChartJSComponent } from './chart-js/chart-js.component';
import { TasksListContentComponent } from './tasks-list-content/tasks-list-content.component';
import { ListGroupContentComponent } from './list-group-content/list-group-content.component';
import { VariationsComponent } from './variations/variations.component';
import { OrderComponent } from './order/order.component';

// import { ModalDialog } from './modal-dialog/modal-dialog.module';


const routes : Routes = [
  { path: '' , component : BaseLayoutComponent,
    children : [
      { path: 'analytics' , component : AnalyticsComponent},
      { path: 'standardButtons' , component : StandardButtonsComponent},
      { path: 'dropDownbtn' , component : DropDownBtnComponent},
      { path: 'icons' , component: IconsComponent}, 
      { path: 'tooltips' , component: TooltipsPopoversComponent},
      { path: 'bootstrapTable' , component : BootstrapTablesComponent},
      { path: 'progressBar' , component: ProgressbarComponent},
      { path: 'Layouts' , component : LayoutsComponent},
      { path: 'cards' , component : CardsComponent},
      { path: 'Models' , component : ModalsComponent},
      { path: 'Controls' , component : ControlsComponent},
      { path: 'listGroup' , component : ListGroupComponent  },
      { path: 'charts' , component : ChartJSComponent},
      { path: 'timelines' , component: TimelinesComponent},
      { path: 'variations' , component: VariationsComponent}
    ]
  },
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
    DropDownBtnComponent,
    IconsComponent,
    BaseLayoutComponent,
    TimelinesComponent,
    CardsComponent,
    TabsComponent,
    TooltipsPopoversComponent,
    LayoutsComponent,
    BasicComponent,
    BootstrapTablesComponent,
    ActiveUsersComponent,
    ProgressbarComponent,
    ModalsComponent,
    FormComponent,
    GridRowsComponent,
    FormInlineComponent,
    FormGridComponent,
    ControlsComponent,
    ModalDialogComponent,
    ListGroupComponent,
    AccordionsComponent,
    CarouselComponent,
    ChartJSComponent,
    TasksListContentComponent,
    ListGroupContentComponent,
    VariationsComponent,
    OrderComponent,
 
   
  ],
  imports: [
    BrowserModule,
    // ModalDialog,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
