import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingSubjectsComponent } from './trending-subjects/trending-subjects.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Open Books Library',
  },
  {
    path: 'trending-subject/:name',
    component: TrendingSubjectsComponent,
    title: 'Trending Subjects',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
