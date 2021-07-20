import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  users:any=[]
  constructor(private ser:AuthService) { }

  getUser(){
    this.ser.getUsers().subscribe(res=>{
      console.log(res)
      this.users=res.data
    })
  }

  ngOnInit() {
    this.getUser()
  }

}
