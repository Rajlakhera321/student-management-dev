console.log('This is Student-management branch');

//Iterators
console.log('Here we have to use Iterators.');

function fruitIterators(Values){
    let nextindex=0;
    return{
        next: function(){
            if(nextindex<Values.length){
                //we will return below objects here.
                return{
                    value: Values[nextindex++],
                    done: false
                }
            }
            else{
                //we will return below objects with only done
                return{
                    done: true
                }
            }
        }
    }
}

const fruits =['apple','orange','grapes','mango'];
// console.log(fruits);

let myfruits= fruitIterators(fruits);
// console.log(myfruits.next());
// console.log(myfruits.next());
// console.log(myfruits.next().value);
// console.log(myfruits.next().value);  // if we wanna print values so we can use the '.value' type also.
// console.log(myfruits.next());

function* generate() {
    let result = yield;
    // console.log(`result is ${result}`);
}

let g = generate();
// console.log(g.next()); 

// console.log(g.next(1000));

function* baz() {
    let arr = [yield, yield];
    console.log(arr);
}

// var z = baz();

// console.log(z.next());  
// console.log(z.next(1)); 
// console.log(z.next(2));