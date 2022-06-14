// const getMaxHeight = (elementsList) => {
//     const elementsArr = Array.prototype.map.call(elementsList, (item) => item.clientHeight);

//     const maxHeight = Math.max(...elementsArr);

//     return maxHeight
// };

// const setHeightForAllListElements = (newHeight, elementsList) => {
//     Array.prototype.forEach.call(elementsList, (item) => item.style.height = `${newHeight}px`);
// };

// const findAllElementsByClass = (className) => {
//     const elementsList = document.getElementsByClassName(className);

//     const maxHeight = getMaxHeight(elementsList);

//     setHeightForAllListElements(maxHeight, elementsList);
// };

// findAllElementsByClass('specialists__sliderCardDescriptionWrapper');




const getMaxHeight = (elementsArray) => {
    const elementsHeightsArray = elementsArray.map((item) => item.clientHeight);

    const maxHeight = Math.max(...elementsHeightsArray);

    return maxHeight
};

const setHeightForAllListElements = (newHeight, elementsArray) => {
    elementsArray.forEach((item) => item.style.height = `${newHeight}px`);
};

const findAllElementsByClass = (className) => {
    const elementsNodeList = document.getElementsByClassName(className);
    const elementsArray = Array.prototype.slice.call(elementsNodeList);

    const maxHeight = getMaxHeight(elementsArray);

    setHeightForAllListElements(maxHeight, elementsArray);
};

findAllElementsByClass('specialists__sliderCardDescriptionWrapper');

const openMenu = () => {
    const mobileMenu = document.getElementById('header__bottom');

    mobileMenu.style.left = '0';
};

const closeMenu = () => {
    const mobileMenu = document.getElementById('header__bottom');

    mobileMenu.style.left = '-100vw';
};
