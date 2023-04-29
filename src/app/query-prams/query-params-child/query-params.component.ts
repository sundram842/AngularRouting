import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.scss']
})
export class QueryParamsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  item?: any
  order?:any
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((pram)=>
    {
      this.item = pram['filter']
      this.order=pram['order']
    })
  }
 

}
