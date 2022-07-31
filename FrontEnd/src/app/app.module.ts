import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SocialLogoComponent } from './components/social-logo/social-logo.component';
import { CercaDeComponent } from './components/cerca-de/cerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; 
import { interceptProvider } from './service/iter-service';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component'; 





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SocialLogoComponent,
    CercaDeComponent,
    EducacionComponent,
    SkillComponent,
    ProyectComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    ExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
