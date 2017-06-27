import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../entities/user';
import { CategoryByUser } from './../../entities/categorybyuser';
import { Position } from './../../entities/position';
import { Question } from './../../entities/question';

import { UserService } from './../../services/user.service';

@Component({
  	selector: 'user-form',
  	styleUrls: ['./app/css/styles.css'],
  	//styleUrls: ['./app/css/user-form.component.css'],    
  	//templateUrl: './app/templates.js',
  	templateUrl: './app/home/user/user-form.component.html',
   providers: [UserService]  
})
export class UserFormComponent {
    //variables  
    model = new User('1234', 'test', 0, 0);
    submitted = false;
    positionName = '';
    active = true;
      
    g_correctQuestions = 0;
    g_incorrectQuestions = 0;

    //g_details = "<h5> ola <br>  Hola Mundo 2 </h5>";
    g_details_start = "<h5>  ";
    g_details_content = "ola";
    g_details_final = "</h5>";
    //constructor
    constructor (private userService: UserService) {}
    //input/out
    @Output() outUserInfo: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() outPosition: EventEmitter<number> = new EventEmitter<number>();
    @Input() inpPositions: Position[];
    inputPositions(pPositions): void {
      this.inpPositions = pPositions;
    }
    @Input() inpCorrectQuestions: number;
    @Input() inpIncorrectQuestions: number;
    //@Input() inpSelectedQuestion: Question;
    @Input() inpSelectedQuestion: string;
    //functions
    onSubmit() { 
      //debugger
        for (var x = 0; x <= this.inpPositions.length - 1; x++) {
          if (x == this.model.position){             
            this.positionName = this.inpPositions[x].name; 
            break
          }
        }
        this.submitted = true; 
        this.outUserInfo.emit(true);    
        this.outPosition.emit(this.model.position);
  	}
  	newUser() {
  		this.model = new User('', '', 0, 0);
	  }
    exit () {
      this.submitted = false
      this.outUserInfo.emit(false);
    }
    send() {
      //debugger
      var totalOfQuestions: number;
      var score: number;

      totalOfQuestions = this.inpCorrectQuestions + this.inpIncorrectQuestions;
      score = ((100 / totalOfQuestions) * this.inpCorrectQuestions);

      this.model.score = score;
      this.userService.insertUser(this.model);
      
      this.submitted = false
      this.outUserInfo.emit(false);

      //alert('TEST FINISHED, THANKS FOR YOUR TIME!!!')
  
      this.sendEmail(score);
      
    }

    sendEmail(pScore: number) {

      this.g_details_content = '<table style="width:100%"><tr><th style="background-color:#f79622; color: white; height: 40px;	font-size: 20px;">Question</th><th style="background-color:#f79622; color: white; height: 40px;	font-size: 20px;">Answer</th><th style="background-color:#f79622; color: white; height: 40px;	font-size: 20px;">Status</th></tr>@' + this.inpSelectedQuestion + ' </table>'
      //debugger
      emailjs.send("gmail","recruitmentmail",
      {
        score: parseFloat(pScore.toString()).toFixed(2), 
        id: this.model.id,
        name: this.model.name,
        category : this.model.categories,
        position: this.positionName,
        details: this.g_details_content
      });
      
    }
  	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }
}
