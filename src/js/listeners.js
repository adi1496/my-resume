// const homeBtn = document.getElementById('home-btn');
// const aboutBtn = document.getElementById('about-btn');
// const portofolioBtn = document.getElementById('portofolio-btn');
// const contactBtn = document.getElementById('contact-btn');

// portofolioBtn.addEventListener('click', event => {
//     event.preventDefault();
    
// });

const initListeneres = () => {
    const navBtns = document.querySelectorAll('.navigation__item');
    
    navBtns.forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault();
    
            console.log(event.target.id);
            switch(event.target.id) {
                case 'home-btn': {
                    document.getElementById('header').scrollIntoView({behavior: "smooth"});
                    break;
                }

                case 'about-btn': {
                    document.getElementById('about-me').scrollIntoView({behavior: "smooth"});
                    break;
                }

                case 'portofolio-btn': {
                    document.getElementById('portofolio').scrollIntoView({behavior: "smooth"});
                    break;
                }

                case 'contact-btn': {
                    document.getElementById('contact').scrollIntoView({behavior: "smooth"});
                    break;
                }

                default: break;
            }

        });
    });
}

export default initListeneres;