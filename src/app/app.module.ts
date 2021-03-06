import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { ChildComponent } from './child/child.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth.interceptor';
import { FooterComponent } from './footer/footer.component';
// import { MyHttpInterceptor } from './http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


