import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { PlayersService } from './services/players.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GameComponent } from './game/game.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { ProfilComponent } from './profil/profil.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    LandingPageComponent,
    GameComponent,
    ProfilComponent,
    FooterComponent,
    MatchmakingComponent,

  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    AngularFirestoreModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [AuthService, PlayersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
