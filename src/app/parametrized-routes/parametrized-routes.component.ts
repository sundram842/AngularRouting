// import axctive route for peraetrized rout
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametrized-routes',
  templateUrl: './parametrized-routes.component.html',
  styleUrls: ['./parametrized-routes.component.scss']
})
export class ParametrizedRoutesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((pram)=>
    {
      console.log(pram)
    })
  }

  ngOnInit(): void {

  }

}
