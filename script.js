'use strict';
let profileImage=document.querySelector(".profile-image");
let input=document.getElementById("input");
input.onchange=function(){
    profileImage.src=URL.createObjectURL(input.files[0]);
}