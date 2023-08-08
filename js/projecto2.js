const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(item){
    item.addEventListener('click', function(e){
        const activeItem = document.querySelector(".active");
        activeItem.classList.remove("active");
        e.target.classList.add("active");
    });
});