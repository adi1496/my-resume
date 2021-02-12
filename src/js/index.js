import firebaseConfig from './utils/firebaseConfig.js';

import initAnimationHeader from './animations.js';
import showProjects from './projects.js';
import showSocialLinks from './social.js';
import showSkills from './skills.js';
import initListeneres from './listeners.js';
import contactInit from './contact.js';
import utils from './utils/utils.js';

firebase.initializeApp(firebaseConfig);

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
});


firebase.auth().onAuthStateChanged(function(user){
    if(user){
        // console.log(user);
        // firebase.auth().signOut().then(() => console.log('logged out'))
        countVisitors(user.uid);
    }else {
        firebase.auth().signInAnonymously().then(user => {

        }).catch(err => {
            console.log(err);
        })
    }
})


// async function getIp() {
//     let response = await fetch('https://api.ipify.org?format=json');

//     if(response.status === 200) response = await response.json();
    
//     return response.ip;
// }

async function getStats(db, userId) {
    const docRef = db.collection('stats').doc(utils.getMonthYear());

    const doc = await docRef.get();
    let data;
    if(doc.exists) {
        data = await doc.data();
    }else {
        data = {
            visitors: 0,
            uniqueVisitors: 0,
            visitorsList: [userId],
        }

        await db.collection('stats').doc(utils.getMonthYear()).set(data);

        data.visitorsList.pop();
    }

    return data;
}

async function updateStats(db, data) {
    await db.collection('stats').doc(utils.getMonthYear()).update(data);
}


async function countVisitors(userId) {
    const db = firebase.firestore();

    // const ip = await getIp();
    const stats = await getStats(db, userId);

    let isNewVisitor = true;
    stats.visitorsList.forEach(visitor => {
        if(userId === visitor) isNewVisitor = false;
    });

    stats.visitors++;
    if(isNewVisitor) {
        stats.uniqueVisitors++;
        stats.visitorsList.push(userId);
    }

    await updateStats(db, stats);
    // console.log(stats);
}