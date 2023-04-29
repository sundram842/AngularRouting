import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loading-child',
  templateUrl: './lazy-loading-child.component.html',
  styleUrls: ['./lazy-loading-child.component.scss']
})
export class LazyLoadingChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
