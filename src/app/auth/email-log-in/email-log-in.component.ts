import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/model/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {MyMessageService} from "../../shared/my-message.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-email-log-in',
  templateUrl: './email-log-in.component.html',
  styleUrls: ['./email-log-in.component.css']
})
export class EmailLogInComponent implements OnInit {

  user: User | undefined | null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private myMessageService: MyMessageService
  ) { }

  ngOnInit(): void {
  }

  onLogIn(form: NgForm): void{
    let isError = false;
    this.authService.emailLogin(form.value.email, form.value.password).catch(error => {
      isError = true;
      this.myMessageService.addMessage({severity: 'error', summary: 'Error:', detail: error.message});
    }).then(() => {
      if (!isError){
        this.route.queryParams.subscribe(params => {
          if (params.returnUrl !== undefined) {
            this.router.navigate(['/'  + params.returnUrl]);
          } else {
            this.router.navigate(['/home-page']);
          }
        }).unsubscribe();
      }
    });
  }
}
