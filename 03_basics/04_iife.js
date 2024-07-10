// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


(   (name) => {
    // unname IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("Ujjawal")
