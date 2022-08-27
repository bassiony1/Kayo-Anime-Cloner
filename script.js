const collapsable = document.getElementById('collapsenav');
const btn = document.querySelector('.btncollapse');

const custom_collapse = [...document.querySelectorAll('.custom-collapse')]


btn.addEventListener('click', () => {
    collapsable.classList.toggle('d-none');
})

custom_collapse.forEach((c)=> {
        c.addEventListener('click' , ()=> {

                c.closest('.custom-collapse-parent').querySelector('.custom-collapse-down-arrow').classList.toggle('d-none');
                c.closest('.custom-collapse-parent').querySelector('.custom-collapse-up-arrow').classList.toggle('d-none');
                c.closest('.custom-collapse-parent').querySelector('.custom-collapse-content').classList.toggle('d-none')



        })

})

