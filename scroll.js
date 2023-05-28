// document.lastScrollPosition = 0;
// document.lastCentered = 0;
// document.onWayTo = null;

// document.addEventListener('scroll',()=>{
//     const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down':'up';
//     const sections = [...document.querySelectorAll('section')];

//     if(document.onWayTo === null){
//         const destIndex = direction === 'up'? document.lastCentered - 1 : document.lastCentered + 1;
//         if(destIndex >= 0 && destIndex < sections.length){
//             document.onWayTo = destIndex;
//             window.scroll(0,sections[destIndex].offsetTop);
//             console.log("on way to"+document.onWayTo);
           

//         }
//     }

//     sections.forEach((section,index) => {
//         if(window.pageYOffset === section.offsetTop) {
//             document.lastCentered = index;
            

//             if(document.onWayTo === index){
//                 document.onWayTo = null;
//             }
        
//         }
        
//     });
//     document.lastScrollPosition = window.pageYOffset;

// })


// const sections = document.querySelectorAll('section');
// let currentSectionIndex = 0;

// window.addEventListener('scroll', function() {
//   const currentScrollPos = window.scrollY;

//   // Check if the user has scrolled to the next section
//   if (currentScrollPos >= sections[currentSectionIndex].offsetTop + sections[currentSectionIndex].offsetHeight) {
//     currentSectionIndex++;
    
//     // Ensure currentSectionIndex doesn't exceed the number of sections
//     if (currentSectionIndex >= sections.length) {
//       currentSectionIndex = sections.length - 1;
//     }

//     // Scroll to the next section
//     sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    
//   }
// });


