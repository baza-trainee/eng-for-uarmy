 const smoothScrolling = (screenWidth) => {
    screenWidth < 1280 ? 
        window.scrollTo({
        top: 4030,
        behavior: 'smooth',
        }) :
        window.scrollTo({
        top: 5450,
        behavior: 'smooth',
        })
};
export default smoothScrolling;