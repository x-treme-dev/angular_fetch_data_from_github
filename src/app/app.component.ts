import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common'
import {NgIf} from "@angular/common";
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

 
export class AppComponent  {
  title = 'Get data from github';
  name: string = 'Ivanov';
  url: string = '';
  user:any = null;
   
  showData(){
  console.log(this.name);
  this.url = 'https://api.github.com/users/' + this.name;
  console.log(this.url);
  fetch(this.url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    this.user = data; 
   });
  }
}

/**
 * Создать компонент, в котором будет поле для ввода имени пользователя на Гитхабе, 
 * при вводе если имя введено правильно ниже должна показываться карточка пользователя 
 * (имя, аватар, еще 5 доп. полей). 
 * Пример: https://api.github.com/users/dilan. Использовать шаблон и стили в отдельных файлах. 
 * Выводить число активных репозиториев, если оно есть, если нет - фразу что репозиториев нет 
 * (Проверять через ngIf)
 * 
 */
