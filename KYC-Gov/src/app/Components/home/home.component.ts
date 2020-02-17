import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  option: any = null;

  constructor() { }
  ngOnInit() {
  }
choose = async() =>{
  console.log('TCL: HomeComponent -> choose -> this.option', this.option)
}
}
