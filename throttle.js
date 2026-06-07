    // function throttle(func,interval) {
//     let isThrottle = false

//     return function(...args){
//         if(isThrottle) return

//         func.apply(this,args)

//         isThrottle = true

//         setTimeout(() => {
//             isThrottle = false
//         },interval)
//     }
// }

// function handleScroll() {
//   console.log("Checking page position at:", new Date().toLocaleTimeString());
// }

// Wrap your function in the throttle factory
// const optimizedScroll = throttle(handleScroll, 2000);

// Attach it to the window scroll event
// window.addEventListener("scroll", optimizedScroll);
