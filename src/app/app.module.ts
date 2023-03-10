import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { EmployeesComponent } from './employees/employees.component';
import { NumtonamePipe } from 'src/shared/numtoname.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    TopMenuComponent,
    HomeComponent,
    InfoComponent,
    EmployeesComponent,
    NumtonamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
