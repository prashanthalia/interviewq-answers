//////normal function to get data

// function dataProducer(){
//     return "Hi Observable"
// }

// var result = dataProducer();
// console.log(result) // output -  ‘Hi Observable’




////Observables => observables are used to handle multiple asnchronous requests like (promises)


// var observable = Rx.Observable.create((observer:any) =>{

//     observer.next("Hi Observable");
 
//  })
 
//  observable.subscribe((data)=>{
//     console.log(data);    // output - ‘Hi Observable’
//  })




///From above, you can see both functions and observables show the same 
//behaviour. This may bring a question to your mind - are observables
// the same as functions? No. I'll clarify in a minute why the answer 
//is no. Have a look at an elaborate version of the above example.


// function dataProducer(){
//     return "Hi Observable";
//     return "Am I understandable?" // not a executable code.
// }



// var observable = Rx.Observable.create((observer: any) =>{

//    observer.next("Hi Observable");
//    observer.next( "Am I understandable?" );

// })

// observable.subscribe((data)=>{
//    console.log(data);    
// })

// Output :
// "Hi Observable"
// "Am I understandable?"


//I hope you can now see what difference I wanted to address. 
//From above, you can see, both functions and observables are lazy.
// We need to call (functions) or subscribe (observables) to get the
// results.Subscriptions to observables are quite similar to calling
// a function. But where observables are different is in their ability to
// return multiple values called streams (a stream is a sequence of data over time).
//Observables not only able to return a value synchronously,
// but also asynchronously.



// var observable = Rx.Observable.create((observer: any) =>{
//     observer.next("Hi Observable");
//      setTimeout(()=>{
//          observer.next("Yes, somehow understandable!")
//      }, 1000)   
 
//     observer.next( "Am I understandable?" );
//  })

// observable.subscribe((data)=>{
//    console.log(data);    
// })
 
//  output :
 
//  "Hi Observable"
//  "Am I understandable?" 
//  "Yes, somehow understandable!"


////******In short, you can say observables are simply a function that 
//are able to give multiple values over time, either synchronously 
//or asynchronously.*********








// The three types of values that an observable can deliver to the 
//subscriber are:

//1) observer.next("hii");//this can be multiple (more than one)

//2) observer.error("error occurs") // this call whenever any error occus.

//3) Observer.complete("completion of delivery of all values") // 
//this tells the subscriptions to observable is completed. 
//No delivery is going to take place after this statement.








// var observable = Rx.Observable.create((observer: any) =>{
//     try {
//        observer.next("Hi Observable");                                       
//         setTimeout(()=>{
//             observer.next("Yes, somehow understandable!")
//         }, 1000)   
    
//        observer.next( "Am I understandable?" );
       
//        observer.complete();
       
//        observer.next("lAST DELIVERY?");  
//        // above block is not going to execute as completion notification is      already sent.
//        }
//     catch(err){
//          observer.error(err);	
//       }
    
//     })     



//Last phase that comes into the market is destruction.
// After an error or a complete notification, 
//the observable is automatically unsubscribed. 
//But there are cases where we have to manually unsubscribe it.
// To manually do this task, just use:


//var subscription = observable.subscribe(x => console.log(x)); 
// Later: subscription.unsubscribe();