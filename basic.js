// check if an elemnet has given class
const ele = document.querySelector('.element-class-name'); 
ele.classList.contains('give-class-name')



// check and element against a selector ???????????
// return true if `ele` matches the css selector `selector`
const matches = (ele, selector) => {
    return (
        ele.matches || 
        ele.matchesSelector || 
        ele.msMatchesSelector || 
        ele.mozMatchesSelector || 
        ele.webkitMatchesSelector || 
        ele.oMatchesSelector 
    ).call(ele, selector); 
}; 



// Check if an element is focused 
const isFucused = element === document.activeElement; // return boolean



//Get CSS styles of an element
const style = windwo.getComputeStyle(ele); 
let bgColor = style.backgroundColor; // get backgournd-color value; 
//Or using getPropertyValue
bgColor = style.getPropertyValue('background-color')
bgColor = style.getPropertyValue('backgroundColor')



// Get the document title 
const getTitle = document.title;
// set tile 
document.title = "new title"; 



// Get, set and remove attributes
let id = ele.getAttribute('id'); 
ele.setAttribute('id', 'element=id'); 
ele.removeAttribute('id'); 

