console.log("Hello, welcome to my new project");

const user= document.getElementById('name');
const mobile= document.getElementById('mob');
const email= document.getElementById('email'); 
const submit= document.getElementById('submit'); 
let validEmail=false;
let validMob=false;
let validName=false;
let mess=document.getElementById('alert');

user.addEventListener('blur', ()=>{
    
//validate name here
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
    let str=user.value;
    if(regex.test(str)){
        // console.log("Your name is valid");
        validName=true;
        user.classList.remove('is-invalid');
    }

    else{
        validName=false;
        // console.log("Your name is not valid");
        user.classList.add('is-invalid');
    }
})



mobile.addEventListener('blur', ()=>{


    let regex=/^([0-9]){10}$/;
    let str=mobile.value;
    if(regex.test(str)){
      validMob=true;
       mobile.classList.remove('is-invalid');
    }

    else{
        validMob=false;
        // console.log("Your number is not valid");
       mobile.classList.add('is-invalid');
 }
})


email.addEventListener('blur', ()=>{
    let regex=/^([_\-0-9a-zA-Z]+)@([_\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    console.log(regex, str);
    if(regex.test(str)){
         validEmail=true;
        email.classList.remove('is-invalid');
    }

    else{
        validEmail=false;
        // console.log("Your email is not valid");
        email.classList.add('is-invalid');
 }
})

submit.addEventListener('click', (e)=>{
e.preventDefault();

if(validEmail && validMob && validName){
mess.innerHTML=`  <div  class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Success!</strong> You have entered all the fields correctly.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
}

else{
      console.log("Your name is not valid");
mess.innerHTML=`  <div  class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Alert!</strong> You should check in on some of those fields below.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
}
})
