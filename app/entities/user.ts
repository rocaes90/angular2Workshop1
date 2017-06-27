import { CategoryByUser } from './categorybyuser';

export class User {	
	constructor (
		public id: string,
		public name: string,
		public position: number,
		public score: number,
		public categories?: CategoryByUser[]
	) {}
}