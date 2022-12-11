//callback method defined here

function greeting(heading) {
    return (showHead.innerHTML=heading);
      }
      function userData(callback) {
          heading='My creative skills and experience';
          callback(heading);
      }
      userData(greeting);