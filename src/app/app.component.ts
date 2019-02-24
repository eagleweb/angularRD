import { Component, OnInit } from '@angular/core';
import { TitleService } from './core/services/title/title.service';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( private titleService: TitleService, public auth: AuthService ) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.titleService.setTitleFromData();
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    }
  }

}

