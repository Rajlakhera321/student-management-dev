let stocks ={
    Fruits: ["strawberry","Apples","Bananas","Mangos"],
    Liquid: ["water","ice"],
    Holder: ["cone","cup","sticks"],
    Toppings: ["Choclates","Penuts"]
}

// // let order = (Fruit_name,call_production) => {
// //     setTimeout(()=>{
// //         console.log(`${stocks.Fruits[Fruit_name]}`);
// //     },);
// //     call_production();
// // }

// let production = () => {
//     setTimeout(()=>{
//         console.log(`Production has Started`);

//         setTimeout(()=>{
//             console.log("Fruit has been selected");
            
//             setTimeout(() => {
//                 console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

//                 setTimeout(() => {
//                     console.log('The Machine was started');
                    
//                     setTimeout(() => {
//                         console.log(`${stocks.Holder[0]} has been selected`);

//                         setTimeout(() => {
//                             console.log(`For the Topping we have selected the ${stocks.Toppings[1]}`);

//                             setTimeout(() => {
//                                 console.log('Ice Cream has been served');
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         },4000);
//     },2000);
// };

// // order(2,production);

// let is_shop_open = true;

// let order = (time, work) =>{
//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         }
//         else{
//             reject(console.log("Sorry our shop is closed"));
//         }
//     })
// };

// order(1000,()=>console.log(`${stocks.Fruits[2]}`))
// .then(()=>{
//     return order(0, ()=>console.log('Production has started'));
// })
// .then(()=>{
//     return order(2000, ()=>console.log('Fruits has chopped'));
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} are selected`));
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`Machine has started`));
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`Ice cream placed on the ${stocks.Holder[1]}`));
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`Topping has been started with the ${stocks.Toppings[1]}`));
// })
// .then(()=>{
//     return order(1000, ()=>console.log('Ice Cream has been served'));
// })

// .catch(()=>{
//     console.log("Customer Left");
// })

// .finally(()=>{
//     console.log('Day ended, Our shop is closed');
// })

// async function order(){
//     try{
//         await abc;
//     } catch(error){
//         console.log(`abc dosen't exist`, error);
//     } finally{
//         console.log('run code anyways');
//     }
// }

// order()
// .then(()=>{
//     console.log('wofjasdlfwe');
// })

let is_shop_open=false;

// let topping_name = () =>{
//      return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//             resolve(console.log('Which topping do you like?'));   
//          }, 2000);
//      });
// };

// async function kitchen(){
//     console.log("A");
//     console.log("B");
//     console.log("C");

//     await topping_name();

//     console.log("D");
//     console.log("E");
// }

// kitchen();
// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("Taking the others orders");

// function time(ms){
//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(resolve,ms);
//         }else{
//             reject(console.log("Shop is closed"));
//         }
//     });
// }

// async function kitchen(){
//     try{
//         await time(2000);
//         console.log(`${stocks.Fruits[1]}`);

//         await time(0000);
//         console.log("Start the Production");

//         await time(3000);
//         console.log("Fruits was Chopped");

//         await time(1000);
//         console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} are added`);

//         await time(1000);
//         console.log("Machine is going to start");

//         await time(2000);
//         console.log(`${stocks.Holder[1]} is selected to make ice cream`);
        
//         await time(3000);
//         console.log(`ice cream will be topping from ${stocks.Toppings[1]}`);

//         await time(2000);
//         console.log("Ice cream has served to the customer");
//     }catch(error){
//         console.log("Customer left",error)
//     }finally{
//         console.log("day ended,Shop is closed");
//     }
// }
// kitchen();

// let completed = true;

// let learnJS = new Promise(function (resolve, reject) {
//     if (completed) {
//         resolve("I have completed learning JS.");
//     } else {
//         reject("I haven't completed learning JS yet.");
//     }
// })
// learnJS.then((message)=>{
//     console.log('this is good'+ message);
// }).catch((message)=>{
//     console.log('This is error'+message);
// })

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 1000);
// });
// p.then((result) => {
//     console.log(result);
//     return result * 3;
// }).then((result)=>{
//     console.log(result);
//     return result * 3;
// }).then((result)=>{
//     console.log(result);
// })

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get the user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'admin'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.userId} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 3 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000);
    });
}
getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);