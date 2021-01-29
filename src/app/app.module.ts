import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EducationComponent } from './education/education.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ConfirmDetailsComponent } from './confirm-details/confirm-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    
    AppComponent,
    RegisterComponent,
    EducationComponent,
    DocumentsUploadComponent,
    AdminViewComponent,
    WorkExperienceComponent,
    ConfirmDetailsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
