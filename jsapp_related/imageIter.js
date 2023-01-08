let all=[];
function call(){
fetch("./image.json")
.then(response => {
 return response.json();
})
.then(data => 
    {
        all=data.sample;
        console.log(all[0].numb)
        console.log(all)
        print(all)
      //  document.write(`<img src=${all[0].image} alt='no image'/>`)
    }
    );
}

function print(all)
{
console.log('in print',all)
    for(let ob of all)
    {
        document.write('hi')
        document.write(`<img src=${ob.image} alt='no image'/>`)
        document.write(`<div>${ob.description}</div>`)
    }
}

// call()
function call1(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
     return response.json();
    })
    .then(data => 
        {
            all=data;
            console.log(all)
            print1(all)
          //  document.write(`<img src=${all[0].image} alt='no image'/>`)
        }
        );
    }
   // call1()
function print1(all)
{
console.log('in print',all)
    for(let ob of all)
    {
        // document.write('hi')
        // document.write(`<input value=${ob.username} readonly/>`)
        // document.write(`<div>${ob.id}</div>`)
        // document.write(`<div>${ob.name}</div>`)
        var newList=document.createElement('select')
        newList.appendChild(new Option("my label 1", "my value 1"));
        newList.appendChild(new Option("my label 2", "my value 2"));
        newList.appendChild(new Option("my label 3", "my value 3"));
       // sel.appendChild(op)
        document.getElementById('content').appendChild(newList)
    }
}