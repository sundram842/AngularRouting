import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-prams',
  templateUrl: './query-prams.component.html',
  styleUrls: ['./query-prams.component.scss']
})
export class QueryPramsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
