import { Component, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Question } from './../../entities/question';

import { Answer }    from './../../entities/answer';

import { QuestionService } from './../../services/question.service';

@Component({
  	selector: 'question-form',
  	styleUrls: ['./app/css/styles.css'],
  	//styleUrls: ['./app/css/question-form.component.css'],    
  	//templateUrl: './app/templates.js',
  	templateUrl: './app/home/question/question-form.component.html',
    providers: [QuestionService]
})
export class QuestionFormComponent {
  //var define
  title = 'QUESTIONS';
  QuestionList: Question[];  
  currentQuestion: Question;
  Questions: Question[];
  isActive = 99;

  cur_orderQuestion = 0;
  cur_categoryQuestion = 0;
  cur_categoryIndex = 0;

  g_showMessageFinal = false;

  g_correctQuestions = 0;
  g_incorrectQuestions = 0;
  g_isCorrect = false;

  g_actualQuestion = '';
  g_currentQuestion = '';

  g_answerSelected = false;
  g_showDivNoAnswer = false;

  valuetest:Observable<number>;
  valobs:Observable<number>;
  //constructor
  constructor(private questionService: QuestionService) { 
    this.g_currentQuestion = '';
    this.g_actualQuestion = '';
    console.log('currentQuestion CLEANED!')
  }
  //inputs/outputs
  @Input() inpCatKey;
  @Input() inpQuestQuantity;
  inputQuestQuantity(pQuestQuantity:number):void {    
    this.inpQuestQuantity = pQuestQuantity;
  }    
  
  @Output() outCategoryFinished: EventEmitter<number> = new EventEmitter<number>();
  @Output() outCorrectQuestions: EventEmitter<number> = new EventEmitter<number>();
  @Output() outIncorrectQuestions: EventEmitter<number> = new EventEmitter<number>();
  
  @Output() outSelectedQuestion: EventEmitter<string> = new EventEmitter<string>();
  
  //functions
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  private valtest: number;
  ngOnInit(): void {
  }  
  public loadQuestion() {
  }  
  onSelectAnswer(question: Question, answ: string, pIndex: number): void {
    this.g_answerSelected = true;
    this.g_showDivNoAnswer = false;

    for (var x = 0; x <= question.answ.length - 1; x++) {
      this.g_isCorrect = false;

      if (question.answ[x].toString() == answ && question.correct == x) {
        this.g_isCorrect = true;
        status = 'correct';
        this.g_actualQuestion = '<tr><td>' + question.quest + '</td><td> ' + answ + ' </td><td style="background-color:#8EC642";></td></tr>';
        break;
      }
      else {
        this.g_isCorrect = false;
        this.g_actualQuestion = '<tr><td>' + question.quest + '</td><td> ' + answ + ' </td><td style="background-color:#cc2f2f";></td></tr>';
        status = 'incorrect';        
      }
    }    

    console.log('selected: ' + answ + ' -- index: ' + pIndex );
    console.log('status: ' + status );
    this.isActive = pIndex;
    
    //this.valobs.subscribe(value => {console.log(value)});
    

    //let subscription = this.valuetest.subscribe(
    //    value => this.valtest = value,
    //    error => this.anyErrors = true,
    //    () => this.finished = true
    //);
  }
  public LoadQuestionsByCategory(pCategory:number){
    //debugger
    //alert('hello world' + pCategory );
    this.questionService.getQuestionsByCategory(pCategory).
      then(questions => this.Questions = questions);
  }
  public LoadQuestionByCategoryPosition(pCategory:number, pCategoryIndex:number, pOrderQuestion:number): void{
    //debugger
    //alert('hello world' + pCategory );
    this.cur_categoryQuestion = pCategory;
    this.cur_orderQuestion = pOrderQuestion;
    this.cur_categoryIndex = pCategoryIndex;

    this.isActive = 99;
    this.questionService.getQuestionByCategoryPosition(this.cur_categoryQuestion, pOrderQuestion).
      then(questions => this.Questions = questions);      
  }

  public nextQuestion(){
    if (this.g_answerSelected) {   
      this.g_showDivNoAnswer = false;
      this.g_answerSelected = false;

      if(this.g_isCorrect) {
        this.g_correctQuestions++;
      }
      else {
        this.g_incorrectQuestions++;
      }

      this.g_currentQuestion += this.g_actualQuestion;
      //debugger
      this.g_isCorrect = false;

      this.cur_orderQuestion += 1;
      
      this.outCorrectQuestions.emit(this.g_correctQuestions);
      this.outIncorrectQuestions.emit(this.g_incorrectQuestions);

      this.outSelectedQuestion.emit(this.g_currentQuestion);

      //console.log(this.g_currentQuestion.quest);
      //debugger
      this.LoadQuestionByCategoryPosition(this.cur_categoryQuestion, this.cur_categoryIndex, this.cur_orderQuestion);
      if(this.cur_orderQuestion >= this.inpQuestQuantity) {
        this.setCategoryFinal(this.cur_categoryIndex);
      }   
    } else {
      this.g_showDivNoAnswer = true;
    } 
  }
  public setCategoryFinal(p_categoryQuestion: number)
  {
    //alert('CATEGORY FINISHED');
    //debugger
    this.outCategoryFinished.emit(p_categoryQuestion);
    this.showMessageFinal(true);
  }
  public showMessageFinal(p_showMessage: boolean){
    this.g_showMessageFinal = p_showMessage;    
    if(p_showMessage) {
      this.LoadQuestionByCategoryPosition(99, 99, 0);
    }
  }
	// TODO: Remove this when we're done
	//get diagnostic() { return JSON.stringify(this.model); }
}
