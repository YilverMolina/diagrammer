import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagramComponent } from './components/diagrams-list/diagram/diagram.component';
import { DiagramsListComponent } from './components/diagrams-list/diagrams-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'diagrams', pathMatch: 'full'
  },
  {
    path: 'diagrams', children: [
      { path: '', component: DiagramsListComponent },
      {
        path: ':diagramId', component: DiagramComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
