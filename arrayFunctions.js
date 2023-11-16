let array1 = document.getElementById('Array-1').value;
let array2 = document.getElementById('Array-2').value;
let result1 = document.getElementById('Result1');
let result2 = document.getElementById('Result2');
let arr1 = [];
let arr2 = [];
let arr3 = [];

function clearInput() {
    let arrayInput = document.getElementById('Array-1');
    let arrayInput2 = document.getElementById('Array-2');
    arrayInput.value = ''; // Clearing the value of the input field
    arrayInput2.value = '';
}
function clearResult() {
    let result1 = document.getElementById('Result1');
    let result2 = document.getElementById('Result2');
    result1.value = '';
    result2.value = '';
}
function push() {
    let array1 = document.getElementById('Array-1').value;
    // let array2 = document.getElementById('Array-2').value;
    let result1 = document.getElementById('Result1');
    // let result2 = document.getElementById('Result2');
    arr1.push(array1);
    // arr2.push(array2);
    result1.value = (`[${arr1}]`);
    // result2.value = (`[${arr2}]`);
    document.getElementById('Array-1').value = array1.value = '';
}
function pop() {
    let result1 = document.getElementById('Result1');
    // let result2 = document.getElementById('Result2');
    arr1.pop();
    // arr2.pop()
    result1.value = (`[${arr1}]`);
    // result2.value = (`[${arr2}]`);
    document.getElementById('Array-1').value = array1.value = '';
}
function shift() {
    let result1 = document.getElementById('Result1');
    arr1.shift();
    result1.value = (`[${arr1}]`);
    document.getElementById('Array-1').value = array1.value = '';
}
function unShift() {
    let array1 = document.getElementById('Array-1').value;
    let result1 = document.getElementById('Result1');
    arr1.unshift(array1);
    result1.value = (`[${arr1}]`);
    document.getElementById('Array-1').value = array1.value = '';
}
function deleteArray() {
    let index = prompt('Enter the index to delete');
    delete arr1[index];
    result1.value = (`[${arr1}]`);
    document.getElementById('Array-1').value = array1.value = '';

}
function conCat() {
    let array1 = document.getElementById('Array-1').value;
    let array2 = document.getElementById('Array-2').value;
    let result3 = document.getElementById('Result3');
    let array3 = [];
    array3 = arr1.concat(arr2);
    result3.value = (`[${array3}]`);
    document.getElementById('Array-1').value = array1.value = '';
}
// function filter() {
//     let array1 = document.getElementById('Array-1').value;
//     let result1 = document.getElementById('Result1');
//     let arr1 = [];
//     let arr3 = arr1.filter()
//     result1.value = (`[${arr3}]`);
// }


function filterArray() {
    let array1 = document.getElementById('Array-1').value;
    let result1 = document.getElementById('Result1');
    let result2 = document.getElementById('Result2');

    // Split the input string into an array of numbers
    let arr1 = array1.split(',').map(Number);

    // Filter even numbers
    let filteredArray = arr1.filter(Number => Number > 100);

    // Display the filtered array
    result1.value = `[${filteredArray}]`;
    result2.value = `[${arr1}]`;

}



function findArray() {
    let array1 = document.getElementById('Array-1').value;
    let result1 = document.getElementById('Result1');
    let arr1 = array1.split(',').map(Number);
    let foundElement = arr1.find(function (element) {
        return element >= 2;
    });

    result1.value = foundElement !== undefined ? `[${foundElement}]` : "Not found";
}

function sort() {
    let array1 = document.getElementById('Array-1').value;
    let result1 = document.getElementById('Result1');
    arr1.sort();
    result1.value = (`[${arr1}]`);
}
function reverse() {
    let array1 = document.getElementById('Array-1').value;
    let result1 = document.getElementById('Result1');
    arr1.reverse();
    result1.value = (`[${arr1}]`);
}
function sliceArray() {
    // Get the input string and result element
    let arrayInput = document.getElementById('Array-1').value;
    let resultElement = document.getElementById('Result1');

    // Get user input for indices
    let index1 = prompt('Enter the starting index:');
    let index2 = prompt('Enter the ending index:');

    // Convert user input to numbers
    index1 = parseInt(index1);
    index2 = parseInt(index2);

    // Split the input string into an array of numbers
    let inputArray = arrayInput.split(',').map(Number);

    // Use slice to get a portion of the array
    let slicedArray = inputArray.slice(index1, index2);

    // Display the sliced array
    resultElement.value = `[${slicedArray}]`;
}
function spliceArray() {
    // Get the input string and result element
    let arrayInput = document.getElementById('Array-1').value;
    let resultElement = document.getElementById('Result1');

    // Get user input for indices
    let index1 = prompt('Enter the starting index:');
    let index2 = prompt('Enter the ending index:');
    let index3 = prompt('Enter the index to add:');

    // Convert user input to numbers
    index1 = parseInt(index1);
    index2 = parseInt(index2);


    // Split the input string into an array of numbers
    let inputArray = arrayInput.split(',').map(Number);

    // Use slice to get a portion of the array
    let splicedArray = inputArray.splice(index1, index2, ...index3.split(','));

    // Display the sliced array
    resultElement.value = `Removed: [${splicedArray}], Modified: [${inputArray}]`;
}

function convertAndDisplayString() {
    let result1 = document.getElementById('Result1');

    let arrString = arr1.toString(); // Convert arr1 to a string
    result1.value = `[${arrString}]`; // Set the value of Result1 with array in string format
}
function tax() {
    let result1 = document.getElementById('Result1');
    let arr1 = [];
    let arrString = arr1.toString();
    result1.value = `[${typeof (arrString)}]`;
}
const button = document.getElementById('myButton');
let holdStart;

// Function to execute when the button is clicked
function clickHandler() {
    convertAndDisplayString(); // Function 1 executed on click
}

// Function to execute when the button is held
function holdHandler() {
    holdStart = setTimeout(tax, 500); // Function 2 executed after holding for 1 second
}

// Function to handle button release
function releaseHandler() {
    clearTimeout(holdStart);
}

// Add event listeners
button.addEventListener('click', clickHandler);
button.addEventListener('mousedown', holdHandler);
button.addEventListener('mouseup', releaseHandler);