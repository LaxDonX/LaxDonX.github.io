let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image-1.png") {
    myImage.setAttribute("src", "images/image-1.png");
  } else {
    myImage.setAttribute("src", "images/image-1.png");
  }
};

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7);

/*document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});*/

//箭头函数写法
/*document.querySelector("html").addEventListener("click",  ()=> {
    alert("别戳我，我怕疼。");
})*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }      