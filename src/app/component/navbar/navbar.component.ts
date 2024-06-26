import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(private router:Router,private logiService:LoginService){

  }
  ngOnInit(): void {
  }
  public close(){
    this.logiService.closeSession();
    this.router.navigate(['/']);
  }

}
