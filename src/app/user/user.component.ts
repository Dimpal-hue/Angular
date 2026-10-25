import { Component, Input,input,Output, computed, EventEmitter } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  @Output() select= new EventEmitter();
  // avatar=input.required<string>();
  // name=input.required<string>();

  get imagePath(){
    return 'assets/users/users/' + this.avatar;
  }
  // imagePath=computed(()=> {
  //   return 'assets/users/users/'+ this.avatar();
  // });
  onSelectUser(){
    this.select.emit(this.id);
  }
}
