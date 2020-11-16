//////////// 1)asynchronous calls   Ajax calls/////////////

var xml=new XMLHttpRequest();
xml.addEventListener('readystatechange' , ()=>{
    // console.log(xml,xml.readyState);
    if(xml.readyState===4 && xml.status===200){
        console.log(xml.responseText);
    }else if(xml.readyState===4){
        console.log("couldnt fetch the data")
    }
})
xml.open('GET','https://jsonplaceholder.typicode.com/todos/')
xml.send();




////////////////2)  fetch////////////////

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(json => console.log(json))




////////////////3)call backs////////////////

var data=[{id:1,name:"venkat",age:10},{id:2,name:"shiva",age:20},{id:1,name:"ravi",age:30}];

function get(){
  setTimeout(()=>{
      var output='';
      data.forEach((ele)=>{
         output+=`<li> ${ele.name} and his age is ${ele.age} </li>`;
      });
      document.body.innerHTML=output;
  },1000)
}

function add(newRecord,callback){
  setTimeout(()=>{
       data.push(newRecord)
       callback()
  },2000)
}

add({id:4,name:"harry",age:40},get);
//get();




////////////4)promises/////////////

var data=[{id:1,name:"venkat",age:10},{id:2,name:"shiva",age:20},{id:1,name:"ravi",age:30}];

function get(){
  setTimeout(()=>{
      var output='';
      data.forEach((ele)=>{
         output+=`<li> ${ele.name} and his age is ${ele.age} </li>`;
      });
      document.body.innerHTML=output;
  },1000)
}

function add(newRecord){
  return  promise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
      data.push(newRecord)
      var isDone=false
      if(!isDone){
        resolve()
      }else{
        reject('something went wrong')
      }
 },2000)
  })
}
add({id:4,name:"harry",age:40}).then(get
).catch(err=>{
  console.log(err);
})



////////////////5)async await//////////

var data=[{id:1,name:"venkat",age:10},{id:2,name:"shiva",age:20},{id:1,name:"ravi",age:30}];

function get(){
  setTimeout(()=>{
      var output='';
      data.forEach((ele)=>{
         output+=`<li> ${ele.name} and his age is ${ele.age} </li>`;
      });
      document.body.innerHTML=output;
  },1000)
}

function add(newRecord){
  return  promise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
      data.push(newRecord)
      var isDone=false
      if(!isDone){
        resolve()
      }else{
        reject('something went wrong')
      }
 },2000)
  })
}


async function main(){
  await add({id:4,name:"harry",age:40});
  get();
}
main();
