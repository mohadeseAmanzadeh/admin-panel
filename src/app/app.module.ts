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

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    PageTitleComponent,
    HeaderComponent,
    PerformanceComponent,
    SearchBoxComponent,
    MenuBurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
