
      document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('emailSubmit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var payload = {input:null};
        
          payload.input = document.getElementById('input').value;
          console.log(payload.input);


          req.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', false);
          req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
              var response = JSON.parse(req.responseText);
              document.getElementById('emailString').textContent = JSON.stringify(response);
            }
            else{
              console.log("Error in network request: " + req.statusText);
            }});

          req.send(JSON.stringify(payload));

          event.preventDefault();
        });
      }
