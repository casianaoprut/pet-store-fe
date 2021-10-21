import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import { Observable } from 'rxjs';
import {map, take, tap} from "rxjs/operators";

import {AuthService} from "../../auth/auth.service";
import {MyMessageService} from "../my-message.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private myMessageService: MyMessageService,
              private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn){
          this.router.navigate(['/auth'], {queryParams: {returnUrl: state.url}}).then(() => {
            this.myMessageService.addMessage({severity: 'info', summary: 'Info', detail: 'You need to login first!'});
          });
        }
      })
    );
  }

}
