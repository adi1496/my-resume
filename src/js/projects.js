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

const createProject = ({projectName, image, tools, summary}) => {
    const toolsList = createTools(tools);
    
    const photo = `<figure class="portofolio__photo">
    <img src="${image}" alt="img" class="portofolio__img">
    <h4 class="heading-4 portofolio__project-title">${projectName}</h4>
    </figure>`;
    
    const toolsContainer = `<div class="portofolio__tools">
    <div class="portofolio__tools--title">Built with:</div>
    <ul class="portofolio__tools--list">${toolsList}</ul>
    </div>`;
    
    const summaryDiv = `<div class="portofolio__project-summary">${summary}</div>`;

    let projectBox = `<div class="portofolio__box">
                        ${photo}
                        ${toolsContainer}
                        ${summaryDiv}
                    </div>`;
    
    portofolioContainer.insertAdjacentHTML('beforeend', projectBox);
}


const showProjects = () => {
    const projects = [
        {
            projectName: 'CRMag-Client',
            image: 'img/crmag-client-cover.png',
            tools: ['React', 'React Router DOM', 'JSX', 'CSS', 'Sass', 'CRMag API'],
            summary: 'This is an online store that consumes an API that I created',
        },
    
        {
            projectName: 'CRMag API',
            image: 'img/crmag-client-cover.png',
            tools: ['Node.js', 'Express', 'Mongoose', 'Json Web Token', 'BcryptJS', 'Nodemailer'],
            summary: 'This is an online store that consumes an API that I created'
        }
    ];


    projects.forEach(el => {
        createProject(el);
    });
}

export default showProjects;