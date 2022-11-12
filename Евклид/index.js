document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn)
{
    tabsBtn.addEventListener('click', function(e)
    {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs__btn').forEach(function(btn)
    {
    btn.classList.remove('tabs__btn-active')});
    e.currentTarget.classList.add('tabs__btn-active');
    document.querySelectorAll('.tabs__item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs__item-active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item-active');
        });
    });

document.querySelectorAll('.tabs__btn').forEach(function(TabsImg){
    TabsImg.addEventListener('click', function(k) {
        const index = k.currentTarget.dataset.index;
        document.querySelectorAll('.tabs__img').forEach(function(TabsImg) {
            TabsImg.classList.remove('tabs__img-active')
        });
        document.querySelector(`[data-prefix="${index}"]`).classList.add('tabs__img-active');
    });
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('menu__active')
    })
    document.querySelector('#close').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('menu__active')
    })
})