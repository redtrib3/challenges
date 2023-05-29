// Script to Toggle Burger Menu (Mobile)

const burgerIcon = document.querySelector("#burger");
const navlinks = document.querySelector("#links_Nav");


// event listener on Menu click 

burgerIcon.addEventListener('click',() => {
	burgerIcon.classList.toggle('is-active');   // Changes the Three bars to cross-symbol(X) on dropdown
 	navlinks.classList.toggle('is-active');   // Brings the Dropdown 
})


function toggleDifficulty(difficulty)
{
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
