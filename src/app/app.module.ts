import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CvComponent } from './cv/cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { ColorWordsDirective } from './color-words.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    ColorChangeComponent,
    ColorWordsDirective,
    RouterSimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
