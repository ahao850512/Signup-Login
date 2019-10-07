// 請求連線
var xhr = new XMLHttpRequest();

//註冊
var signupBtn = document.getElementById('signupBtn');

function signup() {
    var signupAcc = document.getElementById('signupAcc');
    var signupPw = document.getElementById('signupPw');
    if (signupAcc.value === '' || signupPw.value === '') return alert('請輸入帳號或密碼!');
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup' ,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    // console.log('email='+ signupAcc + '&password=' + signupPw);
    xhr.send('email='+ signupAcc.value + '&password=' + signupPw.value);
    // load
    xhr.onload=function(){
        var response='';
        var signupStatus= document.querySelector('.signupStatus');
        response = JSON.parse(xhr.responseText);
        signupStatus.textContent=(response.message);
    };

};

signupBtn.addEventListener('click', signup, false);


// 登入
var logInBtn = document.getElementById('logInBtn');

function logIn() {
    var logInAcc = document.getElementById('logInAcc');
    var logInPw = document.getElementById('logInPw');
    if (logInAcc.value === '' || logInPw.value === '') return alert('請輸入帳號或密碼!');
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin' ,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    // console.log('email='+ signupAcc + '&password=' + signupPw);
    xhr.send('email='+ logInAcc.value + '&password=' + logInPw.value);
    // load
    xhr.onload=function(){
        var response='';
        var logInStatus= document.querySelector('.logInStatus');
        response = JSON.parse(xhr.responseText);
        logInStatus.textContent=(response.message);
    };
    
};

logInBtn.addEventListener('click', logIn, false);






















// var xhr= new XMLHttpRequest();

// var signupBtn = document.querySelector('.signupBtn');
// var loginBtn = document.querySelector('.loginBtn');





// function signup(){
//     //取得要註冊的帳號密碼
//     var signupAcc = document.querySelector('.signupAcc').value;
//     var signupPw = document.querySelector('.signupPw').value;

//     //檢查帳號密碼是否有內容
//     if(signupAcc == '' || signupPw == '')
//         alert('帳號或密碼不得為空');
//     //執行註冊
//     else{     
//         xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup' ,true);
//         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//         xhr.send('email=$'+ signupAcc + '&password=$' + signupPw);

//         //要確定onload否則資料為空白,卡了好久orz
//         xhr.onload = function(){
//             message = JSON.parse(xhr.responseText);
//             alert(message.message);
//     }
// }

// }

// function loginup(){
//     var loginupAcc = document.querySelector('.loginAcc').value;
//     var loginPw = document.querySelector('.loginPw').value;

//     xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin' ,true);
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xhr.send('email=$'+ loginupAcc + '&password=$' + loginPw);

//     xhr.onload = function(){
//     var message = JSON.parse(xhr.responseText);
//     alert(message.message);
//     }
// }




// signupBtn.addEventListener('click', signup,false);
// loginBtn.addEventListener('click', loginup, false);
