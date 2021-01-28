import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagramsListComponent } from './components/diagrams-list/diagrams-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'diagrams', pathMatch: 'full'
  },
  {
    path: 'diagrams', component: DiagramsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
