import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   constructor(
  	private registerService: RegisterService,
  	private formBuilder: FormBuilder
 ) { }

  months: any[];
  years: any[];
  form: FormGroup;

  ngOnInit(): void {

  	this.months = this.registerService.getMonths();
  	this.years = this.registerService.getYears();

  	this.form = this.formBuilder.group({
  		name: [null],
  		email: [null],

  		dateOfBirth: this.formBuilder.group({
  			day: [null],
  			month: [null],
  			year: [null]
  		})
  	});

  }

}
