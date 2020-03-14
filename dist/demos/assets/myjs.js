
function makePDF() {
   var doc = new jsPDF();
   var elementHTML = $('#j').html();
   var specialElementHandlers = {
       '#elementH': function (element, renderer) {
           return true;
       }
   };
   doc.fromHTML(elementHTML, 10, 10, {
       'width':50,
       'elementHandlers': specialElementHandlers
   });
   
   // Save the PDF
   doc.save('sample-document.pdf');}
       

   
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


 function  alert_field()
  {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:'choose all the required fields',
        } )
    
    

  }