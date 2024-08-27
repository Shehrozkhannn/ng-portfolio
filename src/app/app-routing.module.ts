import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortfolioSectionComponent } from './main-portfolio-section/main-portfolio-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'projects', component: MainPortfolioSectionComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
