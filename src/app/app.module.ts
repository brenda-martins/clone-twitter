import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './profile/main/main.component';
import { MenuBarComponent } from './profile/menu-bar/menu-bar.component';
import { SidebarComponent } from './profile/sidebar/sidebar.component';
import { ListComponent } from './profile/list/list.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './index/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuBarComponent,
    SidebarComponent,
    ListComponent,
    IndexComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
