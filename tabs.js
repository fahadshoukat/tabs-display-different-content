const aboutContent = document.querySelector(".about-content");
const btns = document.querySelectorAll('.btn');
const content = document.querySelectorAll('.content');

aboutContent.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    if(id) {

        btns.forEach(function(btn){

            btn.classList.remove('active');
            e.target.classList.add('active');

        });

        content.forEach(function(article){

            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

