{/* <a target="_blank" href="https://www.linkedin.com/in/adi-matei-9a999012a/" class="header__link">
    <svg class="header__icon header__icon--linkedin">
        <use xlink:href="img/svg/social.svg#icon-linkedin"></use>
    </svg>
</a> */}

const footerSocial = document.querySelector('.footer__social');
const headerSocial = document.querySelector('.header__social');

const createSocialLink = ({link, svgName}) => {
    const anchor = `<a target="_blank" href="${link}" class="header__link">
                        <svg class="header__icon header__icon--linkedin">
                            <use xlink:href="img/svg/social.svg#${svgName}"></use>
                        </svg>
                    </a>`;

    return anchor;
}

const showSocialLinks = () => {
    const socials = [
        {
            link: 'https://www.linkedin.com/in/adi-matei-9a999012a/',
            svgName: 'icon-linkedin'
        },
        {
            link: 'https://github.com/adi1496',
            svgName: 'icon-github'
        },
        {
            link: 'https://www.hackerrank.com/ady_matey',
            svgName: 'icon-hackerrank'
        }
    ];

    let socialList = '';
    socials.forEach(el => {
        socialList += createSocialLink(el);
    });

    headerSocial.insertAdjacentHTML('beforeend', socialList);
    footerSocial.insertAdjacentHTML('beforeend', socialList);
}

export default showSocialLinks;