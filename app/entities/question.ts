import { Answer } from './answer';

export class Question {	
	constructor(public category: number, 
				public correct: number, 
				public quest: string, 
				public answ: Answer[]) {
	}
}