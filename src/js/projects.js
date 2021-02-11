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

    let buttons;
    if(liveLink === "#"){
        buttons = `
        <div class="portofolio__project-buttons">
            <a href="${liveLink}" style="pointer-events: none;" class="portofolio__btn-primary">View Live</a>
            <a target="_blank" rel="noopener noreferrer" href="${gitLink}" class="portofolio__btn-secondary">View Source Code</a>
        </div>`;
    }else {
        buttons = `
        <div class="portofolio__project-buttons">
            <a target="_blank" rel="noopener noreferrer" href="${liveLink}" class="portofolio__btn-primary">View Live</a>
            <a target="_blank" rel="noopener noreferrer" href="${gitLink}" class="portofolio__btn-secondary">View Source Code</a>
        </div>`;
    }

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
            projectName: 'CRMag-App',
            image: 'img/crmag-client.png',
            tools: ['React', 'React Router DOM', 'JSX', 'CSS', 'Sass', 'CRMag API'],
            summary: 'This is an online store that consumes the CRMag API. It was built using React JS. Unfortunately, the project is not done yet and the API is not hosted',
            liveLink: 'https://adi1496.github.io/crmag-app/',
            gitLink: 'https://github.com/adi1496/crmag-app'
        },

        {
            projectName: 'CRMag API',
            image: 'img/crmag-client-cover.png',
            tools: ['Node.js', 'Express', 'Mongoose', 'Json Web Token', 'BcryptJS', 'Nodemailer'],
            summary: `The CRMag API is the part of an online store and was built to be used by CRMag App. It was created using Node.js and Express. This API is not hosted, so the 'View Live' anchor is disabled`,
            liveLink: '#',
            gitLink: 'https://github.com/adi1496/crmag'
        },
        {
            projectName: 'AssistCar',
            image: 'img/assistcar.png',
            tools: ['Node.js', 'Express', 'Mongoose', 'Json Web Token', 'BcryptJS', 'Nodemailer'],
            summary: `AssistCar is an application that can be used for tracking the documents of normal person's car or company's car fleet. It is a server-side rendered webiste that uses the JWT in order to keep the user logged in.`,
            liveLink: 'http://assistcar.herokuapp.com/',
            gitLink: 'https://github.com/adi1496/AssistCar'
        },
        {
            projectName: 'BudgetApp',
            image: 'img/budgetapp.png',
            tools: ['Vanilla JS', 'Firebase', 'Firestore', 'HTML', 'CSS', 'PWA'],
            summary: 'BudgetApp is an application for tracking your incomes and expenses. I used firebase and firestore to store users and data. Also this application is a Progresive Web App that can be installed on devices with Android, iOS, MAC and Windows',
            liveLink: 'https://adi1496.github.io/budget-app/',
            gitLink: 'https://github.com/adi1496/budget-app'
        },
        {
            projectName: 'Fooders',
            image: 'img/fooders.png',
            tools: ['Vanilla JS', 'HTML', 'CSS', '3rd party API', 'SCSS'],
            summary: 'Fooders is an application created only with HTML, CSS and JavaScript and uses a 3rd party API to get the data',
            liveLink: 'https://foodersapp.herokuapp.com/',
            gitLink: 'https://github.com/adi1496/Fooders'
        }
    ];


    projects.forEach(el => {
        createProject(el);
    });
}

export default showProjects;