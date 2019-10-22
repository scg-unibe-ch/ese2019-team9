import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/authService/auth.service";


@Component({
  selector: 'app-registered',
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss'],
})
export class RegisteredPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
