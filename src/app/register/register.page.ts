import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  zones = [
    'jaffna',
    'colombo',
    'abcd',
    'dasdad',
    'jyujyu',
    ';op;o',
  ]
  ngOnInit() {
  }

  submittedForm(form:NgForm)
  {
    if(!form.valid)
    {
      return ;
    }

    console.log(form);
    

  }

}
