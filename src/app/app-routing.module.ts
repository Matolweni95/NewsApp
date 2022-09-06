import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportComponent } from './sport/sport.component';
const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'sports', component: SportComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'business', component: BusinessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
