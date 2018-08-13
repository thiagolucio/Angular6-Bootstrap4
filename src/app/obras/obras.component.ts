import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
export class ObrasComponent implements OnInit {
  obras$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getObras().subscribe(
      data => this.obras$ = data
    )
  }

}
