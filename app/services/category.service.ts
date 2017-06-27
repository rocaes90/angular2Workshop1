import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


import { Category } from './../entities/category';

import { environment } from './../config/environment';

@Injectable()
export class CategoryService {  
	public ref;

	constructor(){		
		this.ref = new Firebase(environment.refFireBase);
	}

	// Observable navItem source
	private _navItemSource = new BehaviorSubject<number>(0);
	private _obsQuestQuantitySource = new BehaviorSubject<number>(0);
	
	// Observable navItem stream
	navItem$ = this._navItemSource.asObservable();
	//obsQuestQuantity$ = this._obsQuestQuantitySource.asObservable();
	g_catKey: number;

	obsQuestQuantity$ = new Observable(observer => {
			//debugger
			//let timeout = setTimeout(() => {
			let quantity = this.getTotalOfQuestionsByCategory2(this.g_catKey); 			
			//	observer.next(quantity);
			//}, 1000);

	});//this._obsQuestQuantitySource.asObservable();

	obsQuestQuantity2$ = new Observable(observer => {
		let count = 0;
		let interval = setInterval(() => {
			observer.next(count++);
		}, 1000);

		return () => {
			clearTimeout(interval);
		}
	});

	test2() {
		this.obsQuestQuantity2$.subscribe(value => console.log('mueca ' + value));
	}

	source = Observable.create(observer => {
		observer.onNext(50);
	});

	// service command
	changeNav(num_p: number) {
		console.log('service ' + num_p);
	  	this._navItemSource.next(num_p);
	}

	//getTotalOfQuestionsByCategory(catKey: number) {
	//	console.log('catkey queantity ' + catKey);
	//	this._obsQuestQuantitySource.next(catKey);
	//}

	getTotalOfQuestionsByCategory2(catKey: number) : number{
		console.log('get total in, cat  ' + catKey);
	    //var servQuestionList[];
	    //var servQuestionList;
		var servQuestionList = new Array();
		

	    var g_quantity = 0;
		var filterChild = 'questions/cat';
		filterChild += catKey;
	    
	    var group_questions = this.ref.child(filterChild);


		var _obsQuestQuantitySource2 = new BehaviorSubject<number>(0);	
		this.obsQuestQuantity$ = _obsQuestQuantitySource2.asObservable();
	
	    //debugger
		group_questions.once("value", function(snapshot) {	    	    	
	    	snapshot.forEach(function(childSnapshot) {
			    var key = childSnapshot.key();
			    var childData = childSnapshot.val();
			    servQuestionList.push(childData);
			    //debugger
			    g_quantity = g_quantity + 1;
			    console.log('NUMBER ' + g_quantity);
    			//this._obsQuestQuantitySource.next(g_quantity);
			});	
	    });    	

	    return g_quantity;
	}

	public test: number;
	
	getAllCategories(): Promise<Category[]> {
	    
	    //var servCategoryList[];
	    //var servCategoryList;
		var servCategoryList = new Array();
		

	    var group_categories = this.ref.child('category/');
	    var newcat;

	    group_categories.once('value', function(snapshot){  
	        var cat_val = snapshot.val();
	        for (var i = 0; i <= cat_val.length -1; i++) {
	        	newcat = new Category(i, cat_val[i]['name'], cat_val[i]['position']);
	        	servCategoryList.push(newcat);
	        }	
	    }); 
    	return Promise.resolve(servCategoryList);
	}

	getCategoriesByPosition(posKey: number): Promise<Category[]> {		
	    //var servCategoryList[];
	    //var servCategoryList;
		var servCategoryList = new Array();

	    var group_categories = this.ref.child('category/');
	    var intPosKey = parseInt(posKey.toString());

	    group_categories.once('value', function(snapshot){  
	        //debugger
	        snapshot.forEach(function(childSnapshot) {
	    		var localCategory = childSnapshot.val();
	    		localCategory.position.forEach(function(positionSnapshot){
	    			if(positionSnapshot == posKey){
	    				servCategoryList.push(localCategory);
	    			}
	    		});
			});					
	    }); 
    	return Promise.resolve(servCategoryList);
	}

	getTotalOfQuestionsByCategory(catKey: number): Promise<number> {
	    var g_quantity;
		var filterChild = 'questions/cat';
		filterChild += catKey;
	    
	    var group_questions = this.ref.child(filterChild);

		return group_questions.once('value').then(snapshot => {
			return snapshot.numChildren();
		});
	}

	getHeroesSlowly(): Promise<Category[]> {
	  return new Promise<Category[]>(resolve =>
	    setTimeout(resolve, 2000)) // delay 2 seconds
	    .then(() => this.getAllCategories());
	}
}