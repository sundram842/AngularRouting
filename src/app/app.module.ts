import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentRoutingComponent } from './component-routing/component-routing.component';
import { ParametrizedRoutesComponent } from './parametrized-routes/parametrized-routes.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { ChildeRouterLinkComponent } from './router-link/childe-router-link/childe-router-link.component';
import { QueryParamsComponent } from './query-prams/query-params-child/query-params.component';
import { QueryPramsComponent } from './query-prams/query-prams.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentRoutingComponent,
    ParametrizedRoutesComponent,
    RouterLinkComponent,
    ChildeRouterLinkComponent,
    QueryParamsComponent,
    QueryPramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
