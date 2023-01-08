let all=[];
function call(){
fetch("./image.json")
.then(response => {
 return response.json();
})
.then(data => 
    {
        all=data.sample;
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
