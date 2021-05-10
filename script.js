const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click',()=>{

    navigation.classList.toggle('active')
    toggle.classList.toggle('active')

})

let spans = document.querySelectorAll('.events .single-item > span')

console.log(spans)


for(let i = 0; i < spans.length; i++){
    spans[i].addEventListener('mouseover', function(e){
        document.querySelector('.events .single-item.active').classList.remove('active')
        this.parentNode.classList.add('active')
    })
}
