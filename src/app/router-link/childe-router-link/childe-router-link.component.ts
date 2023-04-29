import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-childe-router-link',
  templateUrl: './childe-router-link.component.html',
  styleUrls: ['./childe-router-link.component.scss']
})
export class ChildeRouterLinkComponent implements OnInit {
  itemId?:any
  constructor(private activatedRout:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.activatedRout.params.subscribe((parm) => {
      console.log(parm)
      this.itemId = parm['id']
    })
  }

}
