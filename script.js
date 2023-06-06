`use strict`

const  username=document.querySelector(`#username`);
const  password=document.querySelector(`#password`);
const  submit=document.querySelector(`#submit`);

submit.addEventListener(`click`, (event)=>{
    event.preventDefault();

    // USERNAME VALIDATION
    if(username.value.trim()===''){
        error(username,'username can not be empty') 
    } else{
        success(username);
    }

    // PASSWORD VALIDATION
    if(password.value.trim()===``){
        error(password, `password can not be empty`)
    } else{
        success(password);
    }
    
});


function error(element, msg){
    element.style.border='3px red solid'; // it's use when we want to change color elements border
    const parent = element.parentElement;
    const p=parent.querySelector(`p`);
    p.textContent = msg;
    p.style.visibility=`visible`;  // it's use when we want to appear  above error message

}


//  when we write something in input, it's will be green and hidden error message
function success(element){
    element.style.border='3px green solid'; 
    const parent = element.parentElement;
    const p=parent.querySelector(`p`);
    p.style.visibility=`hidden`;
}