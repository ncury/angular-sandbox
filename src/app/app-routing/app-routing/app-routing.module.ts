import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from 'src/app/home/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }  
    ]),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }