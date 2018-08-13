import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getHome().subscribe(
      data => this.home$ = data
    )
  }

}
