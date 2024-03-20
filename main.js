let submit =document.querySelector("#submit");
let s=document.querySelector("#pass");
s.onkeyup =function(){
    let pass1 = Array.from(s.value).length;
    document.querySelector("#mssg").innerHtml=`your pass is ${pass1} character`
}
submit.onclick = function(){
    let pass1=document.querySelector("#pass").value;
    let passConfirm=document.querySelector("#confirmpass").value;
    if (pass1==0){
        document.querySelector("#mssg2").innerHTML=`password is reguired !`;

    }
    else if (pass1!==passConfirm){
        document.querySelector("#mssg2").innerHTML=`your pass its false please confirm`

    }
    else{
        let pass1=Array.from(s.value).length;
        document.querySelector("#mssg2").innerHtml =`its submited true and your pass i`
    }
}