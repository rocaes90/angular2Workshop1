var ref = new Firebase('https://recruitment-1b951.firebaseio.com');

function getPositionsabk() {
    
    var key, childata, data, datak;
    var parsed;
    var positions;

    var group_positions = ref.child('position/');

    group_positions.once('value', function(snapshot){
        
        HomeComponent.Positions2 = snapshot.val();
        alert(HomeComponent.Positions2);
        //return(snapshot.val());

        //data = snapshot.val();   
        //alert(JSON.stringify(data));
        //parsed = JSON.parse(JSON.stringify(data));

        //return(parsed);

    });

    //alert(positions);

    //ref.once("value", function(snapshot) {
    //    snapshot.forEach(function(childSnapshot) {
    //        key = childSnapshot.key();
    //        childata = childSnapshot.val();  
    //    }); 
    //    console.log(childSnapshot.key());
    //    console.log(key + ' ' + childata);
    //}, function (errorObject) {
    //  console.log("The read failed: " + errorObject.code); 
    //});


    //var topPositions = firebase.database().ref('position/');
    
}