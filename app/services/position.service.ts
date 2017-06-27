import { Injectable } from '@angular/core';

import { Position } from './../entities/position';

import { environment } from './../config/environment';

@Injectable()
export class PositionService {
	public ref;		

	constructor(){		
		this.ref = new Firebase(environment.refFireBase);
	}

	getPositions(): Promise<Position[]> {

		//var servPositionsList:any[];
		//var servPositionsList;
		var servPositionsList = new Array();

	    var group_positions = this.ref.child('position/');

	    var newpos;

	    group_positions.once('value', function(snapshot){  
	        var posit = snapshot.val();
	        for (var i = 0; i <= posit.length - 1; i++) {
	        	newpos = new Position(i, posit[i].toString());
	        	servPositionsList.push(newpos);
	        }	
	    }); 
    	return Promise.resolve(servPositionsList);
	}
}