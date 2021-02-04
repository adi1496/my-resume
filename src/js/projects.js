{/* <div class="portofolio__box">
    <figure class="portofolio__photo">
        <img src="img/crmag-client-cover.png" alt="img" class="portofolio__img">
        <h4 class="heading-4 portofolio__project-title">CRMag - Client</h4>
    </figure>

    <div class="portofolio__tools">
        <div class="portofolio__tools--title">Built with:</div>
        <ul class="portofolio__tools--list">
            <li class="portofolio__tools--item">React</li>
            <li class="portofolio__tools--item">React Router DOM</li>
            <li class="portofolio__tools--item">JSX</li>
            <li class="portofolio__tools--item">CSS</li>
            <li class="portofolio__tools--item">Sass</li>
            <li class="portofolio__tools--item">CRMag API</li>
        </ul>
    </div>


    <div class="portofolio__project-summary">This is an online store that consumes an API that I created</div>

</div> */}

const portofolioContainer = document.querySelector('.portofolio__container');

const createTools = (tools) => {
    let result = '';
    tools.forEach(el => {
        result += `<li class="portofolio__tools--item">${el}</li>`;
    });

    return result;
}

const createProject = ({projectName, image, tools, summary, liveLink, gitLink}) => {
    const toolsList = createTools(tools);

    const photo = `
    <figure class="portofolio__photo">
        <img src="${image}" alt="img" class="portofolio__img">
        <h4 class="heading-4 portofolio__project-title">${projectName}</h4>
    </figure>`;

    const toolsContainer = `
    <div class="portofolio__tools">
        <div class="portofolio__tools--title">Built with:</div>
        <ul class="portofolio__tools--list">${toolsList}</ul>
    </div>`;

    const summaryDiv = `<div class="portofolio__project-summary">${summary}</div>`;

    const buttons = `
    <div class="portofolio__project-buttons">
        <!-- <button class="portofolio__btn-primary">View Live</button>
        <button class="portofolio__btn-secondary">View Source Code</button> -->
        <a target="_blank" rel="noopener noreferrer" href="${liveLink}" class="portofolio__btn-primary">View Live</a>
        <a target="_blank" rel="noopener noreferrer" href="${gitLink}" class="portofolio__btn-secondary">View Source Code</a>
    </div>`;

    let projectBox = `
    <div class="portofolio__box">
        ${photo}
        ${toolsContainer}
        ${summaryDiv}
        ${buttons}
    </div>`;
    
    portofolioContainer.insertAdjacentHTML('beforeend', projectBox);
}


const showProjects = () => {
    const projects = [
        {
            projectName: 'CRMag-Client',
            image: 'img/crmag-client.png',
            tools: ['React', 'React Router DOM', 'JSX', 'CSS', 'Sass', 'CRMag API'],
            summary: 'This is an online store that consumes an API that I created',
            liveLink: 'https://adi1496.github.io/crmag-app/',
            gitLink: 'https://github.com/adi1496/crmag-app'
        },

        {
            projectName: 'CRMag API',
            image: 'img/crmag-client-cover.png',
            tools: ['Node.js', 'Express', 'Mongoose', 'Json Web Token', 'BcryptJS', 'Nodemailer'],
            summary: 'This is an online store that consumes an API that I created',
            liveLink: '',
            gitLink: 'https://github.com/adi1496/crmag'
        },
        {
            projectName: 'AssistCar',
            image: 'img/assistcar.png',
            tools: ['Node.js', 'Express', 'Mongoose', 'Json Web Token', 'BcryptJS', 'Nodemailer'],
            summary: 'This is an online store that consumes an API that I created',
            liveLink: 'http://assistcar.herokuapp.com/',
            gitLink: 'https://github.com/adi1496/AssistCar'
        },
        {
            projectName: 'BudgetApp',
            image: 'img/budgetapp.png',
            tools: ['Vanilla JS', 'Firebase', 'Firestore', 'HTML', 'CSS', 'PWA'],
            summary: 'This is an online store that consumes an API that I created',
            liveLink: 'https://adi1496.github.io/budget-app/',
            gitLink: 'https://github.com/adi1496/budget-app'
        },
        {
            projectName: 'Fooders',
            image: 'img/fooders.png',
            tools: ['Vanilla JS', 'HTML', 'CSS', 'API', 'SCSS'],
            summary: 'This is an online store that consumes an API that I created',
            liveLink: 'https://foodersapp.herokuapp.com/',
            gitLink: 'https://github.com/adi1496/Fooders'
        }
    ];


    projects.forEach(el => {
        createProject(el);
    });
}

export default showProjects;