import { Component, OnInit } from '@angular/core';
import { randomBytes } from 'crypto';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:address;
  hobbies:string[];
  posts:Post[]
  isEdit:boolean = false;

  constructor(private dataservice:DataService) { 
    console.log('constructor ran..');
  
  }

  ngOnInit() {
    console.log('ngOnInit randomBytes...')

    this.name = 'Jeric San Jose' ;
    this.age = 18;
    this.email = 'jericsj@gmail.com'
    this.address = {
      street:'50 main street',
      city: 'San Diego',
      state: 'CAL'
        }
        this.hobbies = ['Play Games', 'Eat food', 'listen to Music'];

        this.dataservice.getPosts().subscribe((posts) => {
          //console.log(posts);
          this.posts = posts;
        });
  }

  onclick(){
    this.hobbies.push('New Hobby');
  }

  addhobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;

  }

  deleteHobby(hobby){
    for(let i = 0; i <this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}


  


interface address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title: string,
  body:string
  userid: number,
}