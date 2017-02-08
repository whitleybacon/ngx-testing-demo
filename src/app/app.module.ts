import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroSearchService } from './hero-search.service';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { UserAuthentication } from './user-authentication.service';
import { ShellComponent } from './shell/shell.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingStatusService } from './loading-status.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600})
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents,
    LoginComponent,
    ShellComponent,
    LoadingComponent
  ],
  providers: [
    HeroService,
    HeroSearchService,
    UserAuthentication,
    LoadingStatusService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
