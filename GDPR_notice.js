    var GDPR_notice = {

      GDPR_content: {
        english: '<div id="GDPR_container"><p>This site uses essential cookies which are necessary for the site to function properly, and give you the best possible user experience. <a href="http://">Learn more about our GDPR policy.</a> <button id="dismiss_GDPR">Do not show again</button></p></div>',
        finnish: '<div id="GDPR_container"><p>This site uses essential cookies which are necessary for the site to function properly, and give you the best possible user experience. <a href="http://">Learn more about our GDPR policy.</a> <button id="dismiss_GDPR">Do not show again</button></p></div>',
      },

      // return the value of a specified cookie
      getCookie: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return undefined;
      },

      init: function() {

        // check if cookie exists 
        if(this.getCookie("show_GDPR") === undefined) {
          // create it 
          document.cookie = "show_GDPR=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        }
        // check if cookie exists
        if(this.getCookie("GDPR_language") === undefined) {
          // create it 
          document.cookie = "GDPR_language=english; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; 
        }
        // show or hide the GDPR notice
        if(this.getCookie("show_GDPR") === 'true') {
          document.body.innerHTML += eval('this.GDPR_content.' + this.getCookie('GDPR_language'));
          // create the event listener to dismiss the notice when the notification is visible
          document.getElementById("dismiss_GDPR").addEventListener("click", function(){
            // configure the cookie
            document.cookie = "show_GDPR=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";            
            // remove the element
            var elem = document.getElementById('GDPR_container');
            elem.parentNode.removeChild(elem);
          });
        }

      }, 

    }; 
