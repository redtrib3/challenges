//toggling script

const burgerIcon = document.querySelector("#burger");
const navlinks = document.querySelector("#links_Nav");

var hiddenAccordions = document.getElementsByClassName('hide-mode');
var showMoreBtn = document.getElementById("show-more-btn");
var showMoreBtnIcon = showMoreBtn.querySelector('span.icon i');
var showMoreBtnText = showMoreBtn.querySelector('span.btn-text p');


// event listener on burger toggle 
burgerIcon.addEventListener('click',() => {
	burgerIcon.classList.toggle('is-active');   // Changes the Three bars to cross-symbol(X) on dropdown
 	navlinks.classList.toggle('is-active');   // Brings the Dropdown 
})


function toggleDifficulty(difficulty)
{
    if (difficulty == "easy" || difficulty == "mid" || difficulty == "hard"){
        document.getElementById('btn-div-showMore').style.display = 'none';
    } else {
        document.getElementById('btn-div-showMore').style.display = 'block';
        
        if (showMoreBtnText.textContent == 'Show more') {
            // set show more to show less when back to all tab
            showMoreBtnText.textContent = 'Show less';
            showMoreBtnIcon.classList.remove('fa-arrow-down');
            showMoreBtnIcon.classList.add('fa-arrow-up');
        } 
    }
    
    //toggle color change
    let currActiveTab = document.querySelector('.tabs li.is-active');
    currActiveTab.classList.remove('is-active');
    
    let clickedTab = document.getElementById(`tab-${difficulty}`);
    clickedTab.classList.add("is-active");
    
    
    var challenges = document.getElementsByClassName('accordion');

    for (var i = 0; i < challenges.length; i++) {
      var challenge = challenges[i];
      var challengeDifficulty = challenge.id.replace('level-', '');

      if (difficulty === 'all' || challengeDifficulty === difficulty) {
        challenge.style.display = 'block';
      } else {
        challenge.style.display = 'none';
      }
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


