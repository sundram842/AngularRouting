import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ComponentRoutingComponent } from './component-routing/component-routing.component';
import { ParametrizedRoutesComponent } from './parametrized-routes/parametrized-routes.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { ChildeRouterLinkComponent } from './router-link/childe-router-link/childe-router-link.component';
import { QueryPramsComponent } from './query-prams/query-prams.component';
import { QueryParamsComponent } from './query-prams/query-params-child/query-params.component';

const routes: Routes = [
  // component routing
  {
    path : "componentRouting",
    component: ComponentRoutingComponent
  },
  // parametrized routes

  {
    path:'parametrized/:id',
    component:ParametrizedRoutesComponent
  },

  // router link
  {
    path:'routeLink',
    component:RouterLinkComponent
  },

  {
    path:'edit/:id',
    component:ChildeRouterLinkComponent
  },

  //redirect routes
  {
    path:"",
    component:ComponentRoutingComponent
    
  },

  //query params

  {
    path:"queryParams",
    component:QueryPramsComponent
  
  },
  {
    path: "queryParamschild",
    component: QueryParamsComponent
  },
  // lazy loading
  { path: 'lazyLoading', loadChildren: () => import('./lazyLoading/lazyloading-child.module').then(m => m.LazyloadingChildModule) }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
