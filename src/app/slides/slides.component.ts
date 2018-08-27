import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slides$: Object;


  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.data.getSlides().subscribe(
      data => this.slides$ = data
    );
  }


}
