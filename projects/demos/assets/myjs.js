var firebaseConfig = {

  apiKey: "AIzaSyCpJgJfLEejNvpQkB7VGrQa_EJJTH_t0Fc",
  authDomain: "gest-ecole.firebaseapp.com",
  databaseURL: "https://gest-ecole.firebaseio.com",
  projectId: "gest-ecole",
  storageBucket: "gest-ecole.appspot.com",
  messagingSenderId: "183963081681",
  appId: "1:183963081681:web:c9148be37a97ce349adef0",
  
};
   function make_capture(field,s){

      html2canvas((document.getElementById('j'))).then(function(canvas) {
        console.log(field,s)
      saveAs(canvas.toDataURL(), 'calendar_'+field+'_'+s+'.png',field,s);
   });
};


function saveAs(uri, filename,field,s) {

   var link = document.createElement('a');

   if (typeof link.download === 'string') {

       link.href = uri;
       link.download = filename;

       document.body.appendChild(link);

       var firebaseConfig = {

        apiKey: "AIzaSyCpJgJfLEejNvpQkB7VGrQa_EJJTH_t0Fc",
        authDomain: "gest-ecole.firebaseapp.com",
        databaseURL: "https://gest-ecole.firebaseio.com",
        projectId: "gest-ecole",
        storageBucket: "gest-ecole.appspot.com",
        messagingSenderId: "183963081681",
        appId: "1:183963081681:web:c9148be37a97ce349adef0",
        
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log(field,s)
      switch(field) {
        case "GA":
            var storageRef = firebase.storage().ref('GA/'+s+'/'+filename);
            var uploadtask=storageRef.putString(uri, 'data_url');    
         break;
            
        case "GI":
        var storageRef = firebase.storage().ref('GI/'+s+'/'+filename);
        var uploadtask=storageRef.putString(uri, 'data_url');
          break;
        case "TM":
            var storageRef = firebase.storage().ref('TM/'+s+'/'+filename);
            var uploadtask=storageRef.putString(uri, 'data_url');
            break;
      }
      uploadtask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        var db= firebase.database();
         db.ref('calendar/'+field+'/'+s).set({
        link:downloadURL,
        date:    new Date().toLocaleString(),
      });
      console.log('File available at', downloadURL);
      })
      
      
      Swal.fire({
        title : 'Successfuly',
        text: 'Your calender has been updated in the database ',
        confirmButtonText: 'download it',
        showCancelButton: true,
        cancelButtonText:'No',
        cancelButtonColor: '#d33',
        preConfirm: () => {link.click()}
        } )
       
       //remove the link when done
       document.body.removeChild(link);

     } else {

       window.open(uri);

   }
}
function set(field,s){
  var im = document.getElementById("im");
  firebase.initializeApp(firebaseConfig);
  var db= firebase.database();
  var storageRef=firebase.storage().ref(field+'/'+s+'/'+'calendar_'+field+'_'+s+'.png');
  
  storageRef.getDownloadURL().then(onResolve, onReject);
  function onResolve(foundURL) {
    storageRef.getDownloadURL().then(function(downloadURL) {
      im.src= downloadURL})
  }
  
  function onReject(error) {
    console.log("error")
  }
  var ref = db.ref('calendar/'+field+'/'+s+'/date');
   ref.once("value").then(function(snapshot) { 
      if(snapshot.exists()){$( "#u" ).empty();
  $("#u").prepend('<p style="color:grey">updated :"'+snapshot.val()+'"</p>')}})
        
  
  }

 function  alert_field()
  {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:'choose all the required fields',
        } )
    
    

  }