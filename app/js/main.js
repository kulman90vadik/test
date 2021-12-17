
window.addEventListener('load', function(){

    let filterBtn = document.querySelector('.filters__button');
    filterBtn.addEventListener('click', function(){
        this.querySelector('.filters__icon').classList.toggle('filters__icon--active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });


    let filterOption = document.querySelectorAll('.filters__option');
    filterOption.forEach(option => {
        option.addEventListener('click', function(){
            let panel = option.closest('.filters__holder');
            panel.style.maxHeight = null;
            let select = option.closest('.filters__select');
            select.querySelector('.filters__icon').classList.toggle('filters__icon--active');
            select.querySelector('.filters__text').textContent = option.innerHTML;
            select.querySelector('.filters__button').value = option.innerHTML;
        });
        
    });
});
