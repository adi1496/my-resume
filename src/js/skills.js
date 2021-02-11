{/* <li class="skills__item">
    <svg class="skills__icon">
        <use xlink:href="img/svg/brands-color.svg#icon-html5"></use>
    </svg>
    <div class="skills__name">HTML</div>
</li> */}
const frontendSkillsContainer = document.getElementById('frontend-skills');
const backendSkillsContainer = document.getElementById('backend-skills');
const otherSkillsContainer = document.getElementById('other-skills');

const createSkillImage = (skillName, skillImage, container) => {
    const skill = `<li class="skills__item">
                    <img src="${skillImage}" alt="rest-api" class="skills__icon">
                    <div class="skills__name">${skillName}</div>
                </li>`

    container.insertAdjacentHTML('beforeend', skill);
}

const createSkill = (props, container) => {
    const skillName = props[0];
    const skillIcon = props[1];

    if(skillName === 'Rest API') {
        createSkillImage(skillName, skillIcon, container);
        return;
    }

    const skill = `<li class="skills__item">
                    <svg class="skills__icon">
                        <use xlink:href="img/svg/brands-color.svg#${skillIcon}"></use>
                    </svg>
                    <div class="skills__name">${skillName}</div>
                </li>`;

    container.insertAdjacentHTML('beforeend', skill);
}

// ['Microservices', 'icon-embed']

const showSkills = () => {
    const frontendSkills = [['HTML', 'icon-html5"'], ['CSS', 'icon-css3'], ['SASS', 'icon-sass'], ['JavaScript', 'icon-javascript'], ['TypeScript', 'icon-typescript'], ['React', 'icon-react'], ['JSX', 'icon-react'], ['Light jQuery', 'icon-jquery']];

    const backendSkills = [['Node.js', 'icon-node-dot-js'], ['Express', 'icon-node-dot-js'], ['MongoDB', 'icon-mongodb'], ['Mongoose', 'icon-mongodb'], ['Rest API', 'img/restAPI.png'], ['Auth-Security', 'icon-lock-stripes']];

    const otherSkills = [['NPM', 'icon-npm'], ['Postman', 'icon-postman'], ['Git', 'icon-git'], ['GitHub', 'icon-github'], ['Parcel', 'icon-embed'], ['Webpack', 'icon-webpack'], ['Firebase', 'icon-firebase'], ['PWA', 'icon-embed']];

    frontendSkills.forEach(el => {
        createSkill(el, frontendSkillsContainer);
    });

    backendSkills.forEach(el => {
        createSkill(el, backendSkillsContainer);
    });

    otherSkills.forEach(el => {
        createSkill(el, otherSkillsContainer);
    });
}

export default showSkills;