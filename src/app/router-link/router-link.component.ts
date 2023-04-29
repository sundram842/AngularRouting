import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.scss']
})
export class RouterLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = [
    { id: 1, name: "sundram", lastName: "kumar" },
    { id: 2, name: "sundram", lastName: "kumar" },
    { id: 3, name: "sundram", lastName: "kumar" },
    { id: 4, name: "sundram", lastName: "kumar" }
  ]

}
