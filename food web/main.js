let b1=document.querySelector("#b-1"),
    b2=document.querySelector("#b-2"),
    b3=document.querySelector("#b-3"),
    b4=document.querySelector("#b-4"),
    cl=document.querySelector(".close"),
    pl=document.querySelector(".plus"),
    mn=document.querySelector(".min"),
    n=1,
    body = document.body;

const buy=document.querySelector('.buy')


//darkmode
function darkMode() {
    console.log('dark mode di klik');
    body.classList.toggle("dark");
}

//buy

b1.addEventListener('click',function(){
    buy.classList.add('show')
});
b2.addEventListener('click',function(){
    buy.classList.add('show')
});
b3.addEventListener('click',function(){
    buy.classList.add('show')
});
b4.addEventListener('click',function(){
    buy.classList.add('show')
});

cl.addEventListener('click',function(){
    buy.classList.remove("show")
})

