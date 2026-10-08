import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}
  isLoggedin: boolean = false;
  logIn() {
    this.isLoggedin = true;
  }
  logOut() {
    this.isLoggedin = false;
  }
}
