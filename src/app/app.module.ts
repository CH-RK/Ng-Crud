import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { Component } from '@angular/core/src/metadata/directives';
import { UserComponent } from './user/user.component';
import { SubuserComponent } from './user/subuser/subuser.component';
import { SubComponent } from './user/subuser/sub/sub.component';
import { SComponent } from './user/subuser/sub/s/s.component';
import { TestComponent } from './test/test.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { PbComponent } from './pb/pb.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebComponent } from './styleb/styleb.component';
import { EventbComponent } from './eventb/eventb.component';
import { TwowaydatabComponent } from './twowaydatab/twowaydatab.component';
import { FormsModule } from '@angular/forms';
import { TemplaterefComponent } from './templateref/templateref.component';
import { NgfComponent } from './ngf/ngf.component';
import { KillComponent } from './kill.component';
import { KilledComponent } from './killed.component';
import { JillComponent } from './jill/jill.component';
import { JillsComponent } from './jills/jills.component';
import { HelloComponent } from './hello/hello.component';
import { HellosComponent } from './hellos/hellos.component';
import { KijComponent } from './user/kij/kij.component';

const routes:Routes=[
  {
    path:"home",
    component:UserComponent,
    children:[
      {
        path:"subuser",
        component:SubuserComponent,
        children:[{
          
            path:"sub",
            component:SubComponent,
            children:[{
                path:"s",
                component:SComponent
            }]
        }]
      },
      ]

  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    SubuserComponent,
    SubComponent,
    SComponent,
    TestComponent,
    UserOverviewComponent,
    PbComponent,
    ClassbindingComponent,
    StylebComponent,
    EventbComponent,
    TwowaydatabComponent,
    TemplaterefComponent,
    NgfComponent,
    KillComponent,
    KilledComponent,
    JillComponent,
    JillsComponent,
    HelloComponent,
    HellosComponent,
    KijComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
