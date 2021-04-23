import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';




import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DiagnosticComponent } from './views/patient/diagnostic/diagnostic.component';



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

//! Import routing module
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';  //!
import { FormsModule } from '@angular/forms'; //!

//! Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';

import { DetalleDiagnosticoComponent } from './views/patient/detalles-diagnosticos/detalle-diagnostico/detalle-diagnostico.component';
import { DetallediagnosticocllComponent } from './views/patient/detalles-diagnosticos/detallediagnosticocll/detallediagnosticocll.component';
import { DetallediagnosticocmlComponent } from './views/patient/detalles-diagnosticos/detallediagnosticocml/detallediagnosticocml.component';
import { DetallediagnosticoallComponent } from './views/patient/detalles-diagnosticos/detallediagnosticoall/detallediagnosticoall.component';

import { DetallediagnosticoamlfalseComponent } from './views/patient/detalles-diagnosticos/detallediagnosticoamlfalse/detallediagnosticoamlfalse.component';
import { DetallediagnosticocllfalseComponent } from './views/patient/detalles-diagnosticos/detallediagnosticocllfalse/detallediagnosticocllfalse.component';
import { DetallediagnosticoallfalseComponent } from './views/patient/detalles-diagnosticos/detallediagnosticoallfalse/detallediagnosticoallfalse.component';
import { DetallediagnosticocmlfalseComponent } from './views/patient/detalles-diagnosticos/detallediagnosticocmlfalse/detallediagnosticocmlfalse.component';

import{DetalletratamientoallComponent} from "./views/patient/detalles-tratamientos/detalletratamientoall/detalletratamientoall.component";
import{DetalletratamientoamlComponent} from "./views/patient/detalles-tratamientos/detalletratamientoaml/detalletratamientoaml.component";
import{DetalletratamientocllComponent} from "./views/patient/detalles-tratamientos/detalletratamientocll/detalletratamientocll.component";
import{DetalletratamientocmlComponent} from "./views/patient/detalles-tratamientos/detalletratamientocml/detalletratamientocml.component";



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    DiagnosticComponent,
    LoginComponent,
    DetalleDiagnosticoComponent,//AML
    
    DetallediagnosticoamlfalseComponent,
    DetallediagnosticocllfalseComponent,
    DetallediagnosticocmlfalseComponent,
    DetallediagnosticoallfalseComponent,

    DetallediagnosticocllComponent, //CLL
    DetallediagnosticocmlComponent,//CML
    DetallediagnosticoallComponent,//ALLL
    RegisterComponent,

    DetalletratamientoallComponent,
    DetalletratamientoamlComponent,
    DetalletratamientocmlComponent,
    DetalletratamientocllComponent
  
   
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
