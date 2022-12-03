let myImg = document.querySelector('img');

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImg.setAttribute('src', 'images/firefox2.png');
    } else {
        myImg.setAttribute ('src','images/firefox-icon.png');
    }
};

// 获取信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 根据姓名确定标题
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}

//
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}