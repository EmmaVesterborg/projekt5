'use strict';

// Opsætning af min progress-bar.
const progressBar = document.getElementById('progress-bar');
const totalSteps = 6;
let currentStep = parseInt(localStorage.getItem('currentStep')) || 0;
updateProgressBar();

// Sørger for at starte forfa i progress-baren, når siden loader på ny, og man starter ved sp. 1.
window.addEventListener('load', () => {
    const isStart = document.querySelector('#start')?.classList.contains('hidden') === false;
    if (isStart) {
      localStorage.removeItem('currentStep');
      currentStep = 1;
      updateProgressBar();
    }
  });

  //Sørger for at opdatere progress-baren med 1, hver gang brugeren når videre til et nyt spørgsmål, og også at visualiere fremgangen med tekst. 

function updateProgressBar() {
    const percent = Math.round(((currentStep + 1) / totalSteps) * 100);
    progressBar.style.width = `${percent}%`;
    const progressText = document.getElementById('progress-text');
    if (currentStep >= totalSteps) {
        progressText.textContent = `Færdig 100%`;
      } else {
        progressText.textContent = `${currentStep + 1} af ${totalSteps} (${percent}%)`;
      }
    localStorage.setItem('currentStep', currentStep);
  }

  //Switch-funktionen mellem mine scener.

const btns = document.querySelectorAll('.scenes button');
const divs = document.querySelectorAll('.scenes div');

const checkAnswer = (e) => { 
    
    divs.forEach(div => {
        div.classList.add('hidden'); //Skjuler mine scener indtil de skal bruges. 
    })

   switch(e.target.id) {
        case 'startbtn': 
        localStorage.removeItem('currentStep');
        currentStep = 0; //localStorage bliver tømt/resetet, hver gang startsiden vises. 
        updateProgressBar();
        document.querySelector('#instrukser').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '0.5') //Gennemsigtighed over det baggrundsbillede der bliver vist.
        break;

        case 'startbtn2': 
        currentStep = 0; 
        updateProgressBar();
        document.querySelector('#sp1').classList.remove('hidden'); 
        document.body.style.setProperty('--bg-opacity', '20%')
        document.getElementById('progress-container').style.display = 'block';
        break;

        case 'svar1.1': 
        document.querySelector('#sp1korrekt').classList.remove('hidden'); 
        break;

        case 'svar1.2': 
        document.querySelector('#sp1forkert1').classList.remove('hidden'); 
        break;

        case 'svar1.3': 
        document.querySelector('#sp1forkert2').classList.remove('hidden');   
        break;

        case 'restartsp1': 
        document.querySelector('#sp1').classList.remove('hidden');
        break;

        case 'restartsp1.1': 
        document.querySelector('#sp1').classList.remove('hidden');
        break;

        case 'c4': 
        document.querySelector('#sp2').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        if (currentStep < totalSteps) { //Progress-baren øges med +1, hver gang et nyt spørgsmål bliver tilgengængeligt. 
            currentStep++;
            updateProgressBar();
          }
        break;

        case 'svar2.1': 
        document.querySelector('#sp2forkert2').classList.remove('hidden'); 
        break;

        case 'svar2.2': 
        document.querySelector('#sp2forkert1').classList.remove('hidden'); 
        break;

        case 'svar2.3': 
        document.querySelector('#sp2korrekt').classList.remove('hidden');  
        break;

        case 'restartsp2': 
        document.querySelector('#sp2').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'restartsp2.1': 
        document.querySelector('#sp2').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'c5': 
        document.querySelector('#sp3').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        if (currentStep < totalSteps) {
            currentStep++;
            updateProgressBar();
          }
        break;

        case 'svar3.1': 
        document.querySelector('#sp3forkert1').classList.remove('hidden'); 
        break;

        case 'svar3.2': 
        document.querySelector('#sp3korrekt').classList.remove('hidden'); 
        break;

        case 'svar3.3': 
        document.querySelector('#sp3forkert2').classList.remove('hidden');   
        break;

        case 'restartsp3': 
        document.querySelector('#sp3').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'restartsp3.1': 
        document.querySelector('#sp3').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'c6': 
        document.querySelector('#sp4').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        if (currentStep < totalSteps) {
            currentStep++;
            updateProgressBar();
          }
        break;

        case 'svar4.1': 
        document.querySelector('#sp4forkert1').classList.remove('hidden'); 
        break;

        case 'svar4.2': 
        document.querySelector('#sp4korrekt').classList.remove('hidden'); 
        break;

        case 'svar4.3': 
        document.querySelector('#sp4forkert2').classList.remove('hidden');   
        break;

        case 'restartsp4': 
        document.querySelector('#sp4').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'restartsp4.1': 
        document.querySelector('#sp4').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'c7': 
        document.querySelector('#sp5').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        if (currentStep < totalSteps) {
            currentStep++;
            updateProgressBar();
          }
        break;

        case 'svar5.1': 
        document.querySelector('#sp5forkert1').classList.remove('hidden'); 
        break;

        case 'svar5.2': 
        document.querySelector('#sp5forkert2').classList.remove('hidden'); 
        break;

        case 'svar5.3': 
        document.querySelector('#sp5korrekt').classList.remove('hidden');  
        break;

        case 'restartsp5': 
        document.querySelector('#sp5').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'restartsp5.1': 
        document.querySelector('#sp5').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'c8': 
        document.querySelector('#sp6').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        if (currentStep < totalSteps) {
            currentStep++;
            updateProgressBar();
          }
        break;

        case 'svar6.1': 
        document.querySelector('#sp6korrekt').classList.remove('hidden'); 
        break;

        case 'svar6.2': 
        document.querySelector('#sp6forkert1').classList.remove('hidden'); 
        break;

        case 'svar6.3': 
        document.querySelector('#sp6forkert2').classList.remove('hidden');   
        break;

        case 'restartsp6': 
        document.querySelector('#sp6').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'restartsp6.1': 
        document.querySelector('#sp6').classList.remove('hidden');
        document.body.style.setProperty('--bg-opacity', '20%')
        break;

        case 'c9': 
        document.querySelector('#afslutning').classList.remove('hidden');
        if (currentStep < totalSteps) {
            currentStep++;
            updateProgressBar();
          }
        break;

        case 'forfra': 
        document.querySelector('#start').classList.remove('hidden'); //knappen #start fører til startsiden, hvor vi starter forfra igen. 
        localStorage.removeItem('currentStep');
        currentStep = 0;
        updateProgressBar();
        document.getElementById('progress-container').style.display = 'none';
        break;
    }
}
btns.forEach(btn => {
    btn.addEventListener('click', checkAnswer); //Sikrer at siden reagerer, når der bliver trykket på svarmulighederne med musen.
})
