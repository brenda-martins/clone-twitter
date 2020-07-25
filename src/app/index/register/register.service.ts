import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }


  getMonths(){
  	return [
  		{ value: 'Janeiro' },
  		{ value: 'Fevereiro' },
  		{ value: 'Março' },
  		{ value: 'Abril' },
  		{ value: 'Maio' },
  		{ value: 'Junho' },
  		{ value: 'Julho' },
  		{ value: 'Agosto' },
  		{ value: 'Setempo' },
  		{ value: 'Outubro' },
  		{ value: 'Novembro' },
  		{ value: 'Dezembro' },
  	];
  }

  getYears(){
  	var years = [];

  	for(let i = 1900; i <= 2020; i++){
  		 years.push(i);
  	}

  	return years;
  }
}
