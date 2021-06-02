import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  
  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  refreshToken() {
    this.authService.refreshToken();
  }

  getScopes() {
    const scopes = this.authService.getScopes();
    alert(scopes)
  }
}
