import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { UserFormComponent} from './home/user/user-form.component';
import { CategoryFormComponent} from './home/category/category-form.component';
import { QuestionFormComponent} from './home/question/question-form.component';


@NgModule({
	imports: [
    	BrowserModule,
    	FormsModule
  	],
  	declarations: [
    	HomeComponent, 
      	UserFormComponent,
      	CategoryFormComponent,
      	QuestionFormComponent
  	],
  	bootstrap: [ 
  		//AppComponent 
    	HomeComponent
  	]
})
export class AppModule { }
