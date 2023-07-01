const inputBox = document.getElementById('inputList');
const submitButton = document.getElementById('submitButton');
const ulList = document.getElementById('ulList');
const stringArray=[];
submitButton.addEventListener('click', () => {
    
    const stringValue = inputBox.value;
    const liItem = document.createElement('li');
    // const delBtn = document.createElement('button');
    stringArray.push(stringValue);
    liItem.innerHTML = stringArray;
    ulList.appendChild(liItem);
    inputBox.value= "";
    console.log(stringArray);
});

