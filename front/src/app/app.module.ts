import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CirqueComponent } from './cirque/cirque.component';
import { SpectacleComponent } from './spectacle/spectacle.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ContactComponent } from './contact/contact.component';
import { ArtistComponent } from './artist/artist.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: 'cirque',
    component: CirqueComponent
  },
  {
    path: 'spectacles',
    component: SpectacleComponent
  },
  {
    path: 'artistes',
    component: ArtistComponent
  },
  {
    path: 'galerie-photo',
    component: GalerieComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    redirectTo: '/cirque',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CirqueComponent,
    SpectacleComponent,
    GalerieComponent,
    ContactComponent,
    ArtistComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
