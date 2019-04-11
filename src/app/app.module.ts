import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { User}

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [MessageService,
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
