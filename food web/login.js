const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");

let body = document.body;


function darkMode() {
    console.log('dark mode di klik');
    body.classList.toggle("dark");
}

//   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";
                    
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";
                    
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })
    
    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
    
    


    //login
    
    function Login(){
        const elogin=document.getElementById("elogin").value;
        const pwlogin=document.getElementById("pwlogin").value;
        
        var username = "kv";
        var password = "kv123";
        
        if((elogin == username) && (pwlogin == password)){
            alert("login accepted")
        }else{
            alert ("username or password don't correct")
        }
    }