//toggling script

const burgerIcon = document.querySelector("#burger");
const navlinks = document.querySelector("#links_Nav");

const challengeMax = 11;

let hiddenAccordions = document.getElementsByClassName('hide-mode');
let showMoreBtn = document.getElementById("show-more-btn");
let showMoreBtnIcon = showMoreBtn.querySelector('span.icon i');
let showMoreBtnText = showMoreBtn.querySelector('span.btn-text p');

 

// event listener on burger toggle 
burgerIcon.addEventListener('click',() => {
	burgerIcon.classList.toggle('is-active');   // Changes the Three bars to cross-symbol(X) on dropdown
 	navlinks.classList.toggle('is-active');   // Brings the Dropdown 
})

function toggleDifficulty(difficulty) {
    if (difficulty == "easy" || difficulty == "mid" || difficulty == "hard") {
        document.getElementById('btn-div-showMore').style.display = 'none';
    } else {
        document.getElementById('btn-div-showMore').style.display = 'block';

        if (showMoreBtnText.textContent == 'Show more') {
            // Set show more to show less when back to all tab
            showMoreBtnText.textContent = 'Show less';
            showMoreBtnIcon.classList.remove('fa-arrow-down');
            showMoreBtnIcon.classList.add('fa-arrow-up');
        }
    }

    // Toggle color change
    var currActiveDiffTab = document.querySelector('.diff-Class li.is-active');
    currActiveDiffTab.classList.remove('is-active');

    var clickedDiffTab = document.getElementById(`tab-${difficulty}`);
    clickedDiffTab.classList.add("is-active");

    var challenges = document.getElementsByClassName('accordion');
    var currActiveTypeTab = document.querySelector('.type-Class li.is-active');

    for (var i = 0; i < challenges.length; i++) {
        var challenge = challenges[i];
        var challengeDifficulty = challenge.id.replace('level-', '');

        if (difficulty === 'all' || challengeDifficulty === difficulty) {
            if (currActiveTypeTab.id == "type-all" || challenge.classList.contains(`${currActiveTypeTab.id}`)) {
                challenge.style.display = 'block';
            } else {
                challenge.style.display = 'none';
            }
        } else {
            challenge.style.display = 'none';
        }
    }

    // Close all accordions when changing diff
    for (let i = 1; i <= challengeMax; i++) {
        var ch = document.getElementById(`hidden-challenge-${i}`);
        ch.style.display = 'none';
    }
}

function toggleType(type) {

    var currActiveTypeTab = document.querySelector('.type-Class li.is-active');
    currActiveTypeTab.classList.remove('is-active');
    
    var clickedTypeTab = document.getElementById(type);
    clickedTypeTab.classList.add("is-active");
    
    var currActiveDiffTab = document.querySelector('.diff-Class li.is-active');
    var challenges = document.getElementsByClassName('accordion');

    for(let i=0 ;i < challenges.length; i++) {

        var chalDiff = currActiveDiffTab.id.replace('tab-','');
        if (type == "type-all") {
            if (chalDiff == 'all' || challenges[i].id == `level-${chalDiff}`){
                challenges[i].style.display = 'block';
            } 
                   
        } else {
                        
            if (challenges[i].classList.contains(`${type}`) && currActiveDiffTab.textContent == "All"){
                challenges[i].style.display = 'block';
            }
            else if (challenges[i].classList.contains(`${type}`)  && challenges[i].id == `level-${chalDiff}`) {
                challenges[i].style.display = 'block';
            } else {
                challenges[i].style.display = 'none';
            }
            
            showMoreBtn.style.display = 'none';                
        }
    }
    
     //close all accordions when changing diff    
    for(let i =1 ; i <= challengeMax; i++){
        var ch = document.getElementById(`hidden-challenge-${i}`);
        ch.style.display = 'none';
    }
}



function toggleAccordion(containerId) {
    
  var container = document.getElementById(containerId);
    
  for(let i = 1; i <= challengeMax;i++){

    var chal_id = `hidden-challenge-${i}`;
    
    if (chal_id == containerId){
        continue;
    }
    
    var hc = document.getElementById(chal_id);
    if (hc.style.display == 'block'){
        hc.style.display = 'none';
    }
  }
  
  if (container.style.display === 'none') {
    container.style.display = 'block';  
  } 
  else {    
    container.style.display = 'none';
  }
  
}


function showMore() {

    for (let i = 0; i < hiddenAccordions.length; i++) {
        var computedStyle = window.getComputedStyle(hiddenAccordions[i]);
        var displayValue = computedStyle.getPropertyValue('display');

        if (displayValue === 'none') {
            hiddenAccordions[i].style.display = 'block';
            showMoreBtnIcon.classList.remove('fa-arrow-down');
            showMoreBtnIcon.classList.add('fa-arrow-up');
            showMoreBtnText.textContent = 'Show less';
        } else {
            hiddenAccordions[i].style.display = 'none';
            showMoreBtnIcon.classList.remove('fa-arrow-up');
            showMoreBtnIcon.classList.add('fa-arrow-down');
            showMoreBtnText.textContent = 'Show more';
        }
    }
}


