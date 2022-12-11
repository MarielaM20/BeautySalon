import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {

  }

  registerHandler(form: NgForm): void {

    if (form.invalid) {
      return;
    }
  
    if (form.value.password != form.value.repass) {
      return;
    } else {

      // this.authService.user = {
      //   firstName: 'Mariela'
      // } as any;

      const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

      this.router.navigate([returnUrl]);
    }

  }


}
