import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Question } from './../entities/question';

import { environment } from './../config/environment';

@Injectable()
export class QuestionService {
  		
  	public ref;
  	
	constructor(){		
		this.ref = new Firebase(environment.refFireBase);
	}
		
	getQuestionsByCategory(catKey: number): Promise<Question[]> {
	    //var servQuestionList:any[];
  		//var servQuestionList;
		var servQuestionList = new Array();
	    
	    var group_questions = this.ref.child('questions/cat0');
	    //debugger
		group_questions.once("value", function(snapshot) {	    	    	
	    	snapshot.forEach(function(childSnapshot) {
			    var key = childSnapshot.key();
			    var childData = childSnapshot.val();
			    servQuestionList.push(childData);
			});		
	    }); 
    	return Promise.resolve(servQuestionList); 
	}
	getQuestionByCategoryPosition(catKey: number, order: number): Promise<Question[]> {
	    //var servQuestionList:any[];
  		//var servQuestionList;
		var servQuestionList = new Array();
	    
		var filterChild = 'questions/cat';
		filterChild += catKey;

	    var group_questions = this.ref.child(filterChild);
	   
		group_questions.orderByChild("order").equalTo(order).
		once("value", function(snapshot) {	 
	    	snapshot.forEach(function(childSnapshot) {
			    var key = childSnapshot.key();
			    var childData = childSnapshot.val();
			    servQuestionList.push(childData);
			});		
	    }); 
    	return Promise.resolve(servQuestionList); 
	}
}