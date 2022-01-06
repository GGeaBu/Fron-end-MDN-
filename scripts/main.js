let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
myHeading.onclick = function(){
    alert('hello');
}

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/metamong.jpg'){
        myImage.setAttribute('src', 'images/fire.gif');
    }else{
        myImage.setAttribute('src', 'images/metamong.jpg');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'MDN is cool, ' + myName;
    }
  }


if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'MDN is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
  