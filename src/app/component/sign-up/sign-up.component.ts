import { Component } from '@angular/core';
import { User } from '../../model/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login-service';
import { Credentials } from '../../model/credentials';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user!:User;
  credentials!: Credentials;
  availableRoles: any[] = ['ADMIN', 'USER'];
  
  constructor(private loginService: LoginService, private router: Router){}
  signup(form: NgForm) {
    if (form.valid) {
      
      this.loginService.signup(this.credentials).subscribe(
        (response) => {
          console.log('Usuario creado con éxito', response);
          this.router.navigate(['/']); // Redirigir a la página de inicio de sesión
        },
        (error) => {
          console.error('Error al crear el usuario', error);
        }
      );
    }
  }
}
