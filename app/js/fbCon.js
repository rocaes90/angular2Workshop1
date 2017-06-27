var ref = new Firebase('https://recruitment-1b951.firebaseio.com/');

var index = 0
function RunConnection(){
    var config = {
        apiKey: "AIzaSyCrHT_AW_V5vGQ5TdU7bTnuvMRYotvQZGw",
        authDomain: "recruitment-1b951.firebaseapp.com",
        databaseURL: "https://recruitment-1b951.firebaseio.com",
        storageBucket: "recruitment-1b951.appspot.com",
    };
    console.log('init');
    firebase.initializeApp(config);
}

function setValue() {  
    ref.set({
      title: "Hello World!",
      author: "Firebase",
      location: {
        city: "San Francisco",
        state: "California",
        zip: 94103
      }
    });
}
function getValue() {
    // Get a database reference to our posts
    //var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");
    //var ref = new Firebase("https://recruitment-1b951.firebaseio.com/");
    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function(snapshot) {
      console.log(snapshot.val()); 
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
}

function sendAlert() {
    alert('message');
}
