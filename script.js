

/*  function colors(){
   
    let data = 20;
    console.log(data)
    if(true){
        console.log(data*20)
    } else{
        console.log(data/20)
    }
}

function days(){
   colors();
}


function fruits(){
   days();
}

function topFunction(){
   fruits();
}

topFunction();  */

// Head Recursion

/* function test(x){
    console.log(x)
    if(x>0){
        test(x-1)
    }
    //console.log(x)
}

let data = 5;
test(data);  */

// Tail Recursion

function test(x) {
    //console.log(x)
    if (x > 0) {
        test(x - 1)
    }
    console.log(x)
}

let data = 5;
test(data);