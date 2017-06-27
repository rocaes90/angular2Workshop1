import { Injectable } from '@angular/core';

import { User } from './../entities/user';

import { environment } from './../config/environment';

@Injectable()
export class UserService {  

	public ref;
	constructor(){		
		this.ref = new Firebase(environment.refFireBase);  		
	}

	//insertUser(pUser: User) {
		//var ref = new Firebase(environment.refFireBase+'user.json');
  		//var ref;

	    //var group_user = ref.child('user/');	
	    //var localId = pUser.id;    

	    //debugger
	    //var txt = JSON.stringify(pUser)
	    //group_user.setValue(txt);
	    //Map<string, string> userMap= new HashMap<string,string>();
		//JSONObject tempObject = new JSONObject();
		//tempObject.put("birthday","1992");
		//tempObject.put("fullName","Emin AYAR");
		//userMap.put("myUser", txt);

		//group_user.setValue(userMap);
		//group_user.set(txt);
	    //console.log(txt);
		//ref.push().set({
		//	txt
		//});
		//	id: pUser.id,
		//    name: pUser.name,
		//	position: pUser.position,
		//    score: pUser.score		    			
		//});		
	//}

	insertUser(pUser: User) {
	    var group_user = this.ref.child('user/');	
	    var localId = pUser.id;    

	    //debugger
		group_user.push().set({
			id: pUser.id,
		    name: pUser.name,
			position: pUser.position,
		    score: pUser.score		    			
		});		
	}
}