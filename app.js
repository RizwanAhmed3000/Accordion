let accordions = document.querySelectorAll('.accrodion');
// console.log(accordions);

accordions.forEach((accrodion)=>{
    let btn = accrodion.querySelector('.btn');
    btn.addEventListener('click', ()=>{
        
        accordions.forEach((answer)=>{
            if(answer !== accrodion){
                answer.classList.remove('showText')
            }
        })
        
        btn.classList.toggle('showText')
        accrodion.classList.toggle('showText')
    })
})

