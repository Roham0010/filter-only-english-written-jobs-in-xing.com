const wordsToNotContain = [' Dir ', ' vor ', ' oder ', ' mit ', ' die ', ' wir ', ' und ', ' bist ', ' ein ', ' ich ', ' einen ', ' der ', ' en ', ' als ', ' hier ', ' auch '];
const jobsListClass = 'sc-1d9waxr-3';
const eachJobClass = '.sc-1d9waxr-0';
const titleClass = '.fuivNx';
const summaryClass = 'p.b2cfx4-1';
const companyClass = 'p.clJiAB';
setInterval(() => {
    const jobListEl = document.getElementsByClassName(jobsListClass)[0];
    const jobsList = jobListEl?.children;
    if (jobsList) {
        const titleAndCompanies = [];
    
        for(i = 0; i < jobsList.length ; i++) {
            if (jobListEl.children.length < 2) continue;
            var eachJobEl = jobsList[i];
            if (eachJobEl.style.display === 'none') continue;
            const titleText = eachJobEl.querySelector(titleClass)?.textContent.toLowerCase();
            const companyText = eachJobEl.querySelectorAll(companyClass)[1]?.textContent.toLowerCase();
            const summaryText = eachJobEl.querySelector(summaryClass)?.textContent.toLowerCase();

            const titleAndCompany = titleText + companyText;
            // console.log(titleAndCompanies.includes(titleAndCompany), titleAndCompany, titleAndCompanies);
            
            if ((summaryText && 
                wordsToNotContain.some(word => summaryText.includes(word.toLowerCase()))) ||
                titleAndCompanies.includes(titleAndCompany)) {
                eachJobEl.style.display = 'none';            
                console.log('REMOVED: ', summaryText);
                console.log('___________________________________________________________________');
            }
            titleAndCompanies.push(titleAndCompany);
        }
    }
}, 1000)
