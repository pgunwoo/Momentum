const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// querySelector는 가장 첫번째 요소만을 선택 = 첫번째 input(text)의 값을 .value로 가져올 수 있다.

const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// string만 포함된 변수는 대문자로 저장하여 string만을 저장하는 용도로 쓰는 관습
// 동일한 string을 여러번 사용할 때 대문자 변수로 지정해 사용하면 오타로 인한 실수를 줄일 수 있음

loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(event){
    event.preventDefault(); 
    // argument에 event를 할당하고(관행) preventDefalt()함수를 사용
    // 해당 함수는 브라우저에서 이벤트 발생 시 기본으로 동작하는(ex-submit시 기본으로 페이지를 새로고침 함) 기능들을 수행하지 않게 함
    // argument를 배정하지 않으면 자동으로 실행되지만, argument에 event라는 공간을 배정함으로서 브라우저는 해당 정보를 받아 기본 동작을 멈추는 기능 수행
    // 추후에 브라우저는 onLoginSubmit();으로 argument없이 호출해도 event라는 해당 오브젝트와 정보를 담은 채로 funtcion을 호출 
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // classList: className은 해당 요소의 class명을 변경하지만 List는 추가(add) 혹은 지우기(remove) 가능
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // 브라우저의 logcalStorage 내에 정보를 저장하여 기억(setItem)하거나 불러낼(getItem) 수 있도록 하는 객체, 기본 제공되는 내장 함수 
    
    paintGreetings(username);
     // 유저 정보가 submit된 input으로부터 오기 때문에 username이 인자가 됨
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //함수가 실행되는 위치에 따라 argument에 들어갈 유저의 정보를 다르게 받는다.
  // 로컬 스토리지에 유저 정보가 있을 경우 savedUserName
  // 유저 정보가 없을 경우 onLoginSunmit 함수를 대기, 로그인 폼에 유저 정보가 submit될 경우, input으로부터 유저 정보를 받는다.
}

const SavedUsername = localStorage.getItem(USERNAME_KEY);

if(SavedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(SavedUsername);
}