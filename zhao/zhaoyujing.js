/*全体ページ-------------------*/

/*全体ページ-------END------------*/

/*top.html
    正解->correct.html
    不正解->incorrect.html-------------------*/

/*top.html
    正解->correct.html
    不正解->incorrect.html---END----------------*/

//question.html---------------------------
//ヒント-----------------------------------
let hit1="ヒント1：キーボード";
let hit2="ヒント2：+: 左から、-: 右から";
let hit3="ヒント3：q+5=y";

function Hit1(){
    alert(hit1);
}
function Hit2(){
    alert(hit2);
}
function Hit3(){
    alert(hit3);
}
function Hit_all(){
    alert(hit1+"\n"+hit2+"\n"+hit3);
}
function Answer() { 
    const Message = document.querySelector("#answer"); 
    Message.value = "yume（夢）"; 
}
//question.html END---------------------------

//zhaoyujing.html(プロフィール)---------------

//zhaoyujing.html(プロフィール)---END------------
