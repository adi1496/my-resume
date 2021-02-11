import initAnimationHeader from './animations.js';
import showProjects from './projects.js';
import showSocialLinks from './social.js';
import showSkills from './skills.js';
import initListeneres from './listeners.js';
import contactInit from './contact.js';

showSocialLinks();
showSkills();
showProjects();
initListeneres();
initAnimationHeader();
contactInit();

window.addEventListener('resize', event => {
    event.preventDefault();

    const headerIcons = document.querySelectorAll('.header__icon-bg');
    headerIcons.forEach(el => el.remove());

    initAnimationHeader();
})