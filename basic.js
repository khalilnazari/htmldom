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


