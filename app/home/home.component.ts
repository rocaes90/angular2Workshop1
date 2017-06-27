import { Component, Input, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Position } from './../entities/position';
import { Question } from './../entities/question';
import { User } from './../entities/user';
import { Category } from './../entities/category';

import { PositionService } from './../services/position.service';
import { QuestionService } from './../services/question.service';
import { CategoryService } from './../services/category.service';
import { UserService } from './../services/user.service';
 
import { QuestionFormComponent } from './question/question-form.component'; 
import { CategoryFormComponent } from './category/category-form.component';

import { environment } from './../config/environment';

@Component({
  	selector: 'home',
  	styleUrls: ['./app/css/styles.css'],
  	//styleUrls: ['./app/css/home.component.css'],
  	templateUrl: './app/home/home.component.html',
  	//templateUrl: './app/templates.js',
  	inputs: ['name'], 
 	providers: [PositionService, QuestionService, CategoryService, QuestionFormComponent, CategoryFormComponent]	   	
})

export class HomeComponent implements OnInit{
	//variables
	title = environment.envName;
	currentCategory = 0;
	currentPosition = 0;

	g_correctQuestions = 0;
	g_incorrectQuestions = 0;
	g_selectedQuestion = '';

	Positions: Position[];
	Questions: Question[];
	selectedPosition: Position;
	name: string;

	showContainer2 = false;
	showContainer = true;
	//constructor
	constructor(private positionService: PositionService, 
				private questionService: QuestionService) { }
				//private userService: UserService) { }
	//viewchilds
	@ViewChild(QuestionFormComponent) 
	questionFormChild:QuestionFormComponent;
	@ViewChild(CategoryFormComponent) 
	categoryFormChild:CategoryFormComponent;
	//input/out
	@Input() userInfoCorrect = false;
	inputUserInfo(pUserInfo:boolean):void {	
		this.userInfoCorrect = pUserInfo;
		if (pUserInfo == false) {
			this.showContainer2 = true;
			this.showContainer = false;
		}
	}	 
	@Input() catForHome = Category;
	inputCategory(pCategory:Category):void {		
		this.currentCategory = pCategory.id;
		//this.questionService.getQuestionsByCategory(pCategory.id).
		//	then(questions => this.Questions = questions);
		//console.log('-- ' + pCategory.id);
		this.questionFormChild.LoadQuestionByCategoryPosition(pCategory.id, pCategory.index, 0);
	}  
	@Input() catFinished:number;
	inputCategoryFinished(pCategoryFinished:number):void {		
		this.catFinished = pCategoryFinished;
		this.categoryFormChild.AddCategoryFinished(pCategoryFinished);
	}  
	inputCorrectQuestions(pCorrectQuestions:number):void {		
		this.g_correctQuestions = pCorrectQuestions;
	}  
	inputIncorrectQuestions(pIncorrectQuestions:number):void {		
		this.g_incorrectQuestions = pIncorrectQuestions;
	}  
	inputSelectedQuestion(pSelectedQuestion:string) {
		this.g_selectedQuestion = pSelectedQuestion;
		console.log(pSelectedQuestion + "in home");
	}
	@Input() showMessage:boolean;
	inputShowMessage(pShowMessage:boolean):void {		
		this.showMessage = pShowMessage;
		this.questionFormChild.showMessageFinal(pShowMessage);
	}  
	@Input() questQuantity: number;
	inputQuestQuantity(pQuestQuantity:number):void {	
		this.questQuantity = pQuestQuantity;
		console.log('Quantity of questions by Category: ' + this.questQuantity);
	} 
	@Input() posForHome: number;
	inputPosition(pPosition:number):void {	
		this.currentPosition = pPosition;	
	}
	//functions
	ngOnInit(): void {
		this.getPositions(this.Positions);
  	}

	getPositions(positions: Position[]): void {
		//debugger
		this.positionService.getPositions().then(positions => this.Positions = positions);		
	}

	onSelectPosition(position: Position): void {
		console.log('position');
	  	this.selectedPosition = position;
	}
	sendok() {
		this.showContainer2 = false;
		this.showContainer = true;
	}
	ButtonClick() {
		this.name = name;
	}
}



