import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingChildComponent } from './lazyloading-child.component';
import { LazyLoadingChildComponent } from './lazy-loading-child/lazy-loading-child.component';

const routes: Routes = [{ path: '', component: LazyloadingChildComponent },
{path:"lazyLoading1",component:LazyLoadingChildComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingChildRoutingModule { }
