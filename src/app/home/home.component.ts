import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private imageAll = [];
  env = this.service.env;

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getItem().subscribe(res => this.imageAll = res.json());
  }
}
