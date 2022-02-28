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



// Get, set and remove data attributes
// Get the `data-message` attribute of the `ele` element
const message = ele.getAttribute('data-message');
// Or
const message = ele.dataset.message;
// Set
ele.setAttribute('data-message', 'Hello World');
// Or
ele.dataset.message = 'Hello World';
// Delete/remove
ele.removeAttribute('data-message');
// Or
delete ele.dataset.message;




// Get the previous sibling
const prev = ele.previousSibling;
// Get the next sibling
const next = ele.nextSibling;

// Get all siblings

// Get the parent node
const parent = ele.parentNode;
// Filter the children, exclude the element
const siblings = [].slice.call(parent.children).filter(function (child) {
    return child !== ele;
});





// Get the closest element by given selector
// 1: using closest() method 
const result = ele.closest(selector);
// 2: using traverse up till finds the match
const matches = function (ele, selector) {
    return (
        ele.matches ||
        ele.matchesSelector ||
        ele.msMatchesSelector ||
        ele.mozMatchesSelector ||
        ele.webkitMatchesSelector ||
        ele.oMatchesSelector
    ).call(ele, selector);
};
// Find the closest element to `ele` and matches the `selector`
const closest = function (ele, selector) {
    while (ele) {
        if (matches(ele, selector)) {
            break;
        }
        ele = ele.parentNode;
    }
    return ele;
}; 



// Scroll to the element 
ele.scrollIntoView();
ele.scrollIntoView({ behavior: 'smooth' });



// scroll to the top
// to an element in the top
window.scrollTo(pageX, pageY);
// to the absolute top 
window.scrollTo(0, 0);
// use this to every page of react
React.useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);




//Select an element or list of elements
// by id 
document.getElementById('element-id'); 
// by class name 
document.getElementsByClassName('poem'); // return list of elements in array format. 
// by tag name 
document.getElementsByTagName('span') // return list of elements in array format.
// by css selector 
document.querySelectorAll('div.class-name') //return list of elements in array format.
document.querySelector('div.class-name') //return the first elements 




// Select the children of an element
const childNodes = ele.childNodes; // Get the children nodes of the ele element:

// By looping over the chidren, you can get the first or last child:
const first = childNodes[0];
const last = childNodes[childNodes.length - 1];

// There are properties to access the first and last child directly:
const first = ele.firstChild;
const last = ele.lastChild;

