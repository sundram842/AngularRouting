import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingChildRoutingModule } from './lazyloading-child-routing.module';
import { LazyloadingChildComponent } from './lazyloading-child.component';
import { LazyLoadingChildComponent } from './lazy-loading-child/lazy-loading-child.component';


@NgModule({
  declarations: [
    LazyloadingChildComponent,
    LazyLoadingChildComponent
  ],
  imports: [
    CommonModule,
    LazyloadingChildRoutingModule
  ]
})
export class LazyloadingChildModule { }
