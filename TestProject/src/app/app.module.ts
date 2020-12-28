import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
//import { catchError , retry } from 'rxjs/operator';
//import{
//  MatToolbarModule, 
// MatButtonModule,
// MatSidenavModule,
// MatIconModule,
// MatListModule ,
// MatStepperModule,
//  MatInputModule
//} from '@angular/material';


import { AppRoutingModule } from './app-routing-module.module';
import { AppComponent } from './app.component';
import { SearchComponent } from 'src/app/commponents/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultComponent } from './commponents/result/result.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule, 
    MatButtonModule,
    MatSelectModule,
   //MatIconModule,
   // MatListModule ,
   // MatStepperModule,
    MatInputModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule 
    
    

  ],
  exports: [    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}



