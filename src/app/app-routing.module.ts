import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { TalkComponent } from './talk/talk.component';

const routes: Routes = [
  {path: '', component: HomepageComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent},
  { path: 'talk', component: TalkComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
