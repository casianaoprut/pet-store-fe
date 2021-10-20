import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-google-authentication',
  templateUrl: './google-authentication.component.html',
  styleUrls: ['./google-authentication.component.css']
})
export class GoogleAuthenticationComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onGoogleSignIn(): void {
    this.authService.googleSignIn().then(() => {
        this.route.queryParams.subscribe(params => {
          if (params.returnUrl !== undefined) {
            this.router.navigate(['/'  + params.returnUrl]);
          } else {
            this.router.navigate(['/home-page']);
          }
        }).unsubscribe();
      }
    );
  }

}
