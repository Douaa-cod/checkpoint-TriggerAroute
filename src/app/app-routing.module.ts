import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CvComponent } from './cv/cv.component';
import { TodoComponent } from './todo/todo.component';
import { ColorChangeComponent } from './color-change/color-change.component'


const routes: Routes = [
  {
    path: 'CVs',
    component: CvComponent
  },
  {
    path: 'Todo',
    component: TodoComponent
  },
  {
    path: 'Mini-words',
    component: ColorChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
