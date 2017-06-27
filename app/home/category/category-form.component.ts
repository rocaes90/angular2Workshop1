import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category }    from './../../entities/category';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Rx';
//import { Rx } from 'rxjs';

import { Subscription } from 'rxjs/Subscription';

import { CategoryService } from './../../services/category.service';

@Component({
  	selector: 'category-form',
  	styleUrls: ['./app/css/styles.css'],
  	//styleUrls: ['./app/css/category-form.component.css'],
  	//templateUrl: './app/templates.js',
  	templateUrl: './app/home/category/category-form.component.html',
    providers: [CategoryService]
})
export class CategoryFormComponent {
    //var define
    title = 'CATEGORIES';
    CategoryList: Category[];
    active = true;
    model = new Category(1, 'Name', 0);
    submitted = false;
    isActive = 99;

    g_catsDone = new Array();
    g_valueRef = false;

    subscription: Subscription;

    //constructor
    constructor(private categoryService: CategoryService) { }
    //inputs/outputs
    @Input() inpPosKey: number;
    @Output() outShowMessage: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() outCategory: EventEmitter<Category> = new EventEmitter<Category>();
    @Output() outQuestQuantity: EventEmitter<number> = new EventEmitter<number>();
    //functions
    item: number;
    g_questQuantity: number;

    ngOnInit(): void {
      this.getCategoriesByPosition();
    } 
    onSelectCategory(category: Category, pIndex: number): void { 
      this.isActive = pIndex;      
      category.index = pIndex;
      var isComplete = false;

      console.log('Category selected: ' + category.id);
      //debugger
      for (var x = 0; x <= this.g_catsDone.length -1; x++) {
        if(pIndex == this.g_catsDone[x]) {
          isComplete = true;  
          this.outShowMessage.emit(true);        
        }
      }

      if (!isComplete) {      
          this.outCategory.emit(category);  
          this.outShowMessage.emit(false);
          this.categoryService.getTotalOfQuestionsByCategory(pIndex)
            .then(value =>  this.outQuestQuantity.emit(value));
      }
      //this.outQuestQuantity.emit(this.g_questQuantity);
    }
    public AddCategoryFinished(pFinishedCategory:number) {      
      //debugger
      this.g_catsDone.push(pFinishedCategory);  
    }
    getCategories(): void {
      this.categoryService.getAllCategories().
        then(servCategoryList => this.CategoryList = servCategoryList);  
    }
    getCategoriesByPosition(): void {
      this.categoryService.getCategoriesByPosition(this.inpPosKey).
        then(servCategoryList => this.CategoryList = servCategoryList);  
    }
  	onSubmit() { 
  		this.submitted = true; 
      console.log(this.model);
  	}
  	newHero() {
  		this.model = new Category(42, '', 0);
  	}  
    sendMessage() {       
    }
    
    SetTotalOfQuestionsByCategory(pIndex: number)
    {

      this.subscription = this.categoryService.obsQuestQuantity$
       .subscribe((g_questQuantity: number) => this.g_questQuantity = g_questQuantity) 

      //this.categoryService.getTotalOfQuestionsByCategory2(pIndex);

      console.log('return value: ' + this.g_questQuantity)

      this.outQuestQuantity.emit(this.g_questQuantity); 
    }

    public getQuantityOfQuestions(pCategory: Category)
    {
      this.outQuestQuantity.emit(this.g_questQuantity); 
    }

    public isComplete(i:number)
    {
      //debugger
      for (var x = 0; x <= this.g_catsDone.length -1; x++) {
        console.log('cats done: ' + this.g_catsDone[x]);
        console.log('indice: ' + i);
        if(i == this.g_catsDone[x]) {
          return true;
        }
      }
      return false;
    }
  	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }
}
