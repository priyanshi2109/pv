console.log("hello");

let btn = document.querySelector('button')
let body = document.querySelector('body')
isDark=true

btn.addEventListener('click', function() {
    if(isDark) {
        body.style.backgroundColor = 'pink'
    }else{
        body.style.backgroundColor = 'skyblue'
    }
    isDark=! isDark
})
