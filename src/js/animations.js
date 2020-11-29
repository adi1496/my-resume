
const header = document.querySelector('.header');

const pallete = ['#2980b9', '#3498db', '#27ae60', '#8e44ad', '#e74c3c', '#f1c40f', '#ecf0f1', '#1abc9c'];

const createIcon = (svgName) => {
    return `<svg class="header__icon-bg header__icon-bg--1">
                <use xlink:href="img/svg/code.svg#${svgName}"></use>
            </svg>`;
}

const displayIcons = () => {
    const iconsList = ['icon-jquery', 'icon-mongodb', 'icon-html5', 'icon-css3', 'icon-sass', 'icon-node-dot-js', 'icon-react', 'icon-javascript', 'icon-free-code-camp', 'icon-document-code', 'icon-document-code1', 'icon-visualstudiocode', 'icon-embed1', 'icon-embed'];

    let svgList = '';
    iconsList.forEach(el => {
        svgList += createIcon(el);
    });

    header.insertAdjacentHTML('afterbegin', svgList);
}




const initAnimationHeader = () => {
    displayIcons();
    const getRandomNr = (maxValue) => {
        return Math.floor(Math.random() * maxValue);
    }
    
    const positionIcon = (el, bottomPos) => {
        el.style.opacity = 0.7;
        el.style.bottom = `${bottomPos}px`;
        el.style.left = `${getRandomNr(window.innerWidth - 20)}px`;
        const width = getRandomNr(6) + 2;
        el.style.width = `${width}rem`;
        el.style.height = `${width}rem`;
        el.style.fill = pallete[getRandomNr(pallete.length)];
        
        return el;
    }
    
    console.log(window.innerWidth, window.innerHeight);
    
    const moveIcon = (el, bottomPos, speed) => {
        const int = setInterval(() => {
            // console.log(bottomPos);
            if(bottomPos > 1000){
                bottomPos = 0;
                el = positionIcon(el, bottomPos);
            } 
            bottomPos += speed;
            el.style.bottom = `${bottomPos}px`;
            // console.log(el.style.bottom);
        }, 50);
    }
    
    const icons = document.querySelectorAll('.header__icon-bg');
    let i = 0;
    const x = setInterval(() => {
        let el, bottomPos = -20;
        let speed = getRandomNr(3) + 4;
        if(i < icons.length ) {
            el = positionIcon(icons[i], bottomPos);
            i++;
        }else {
            clearInterval(x);
            return;
        }
    
        moveIcon(el, bottomPos, speed);
        
    }, 1000);
    
}

export default initAnimationHeader;


// initAnimationHeader();