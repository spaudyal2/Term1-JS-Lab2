document.getElementById("btnRating").addEventListener('click', function(){
    let userScore= document.getElementById("numScore").value;
    let parRating= document.getElementById("selPar").value;
    let rating = undefined;

    if ((userScore <=  0) || (userScore > 10)){
        rating = getInvalid();
    }else if (userScore == parRating){
        rating = getPar();
    }else if (userScore == ((parRating)-1)){
        rating = getBirdie();
    }else if (userScore <= ((parRating)-2) && (userScore != 0 )){
        rating = getEagle();
    }else if (userScore == ((parRating * 1 ) +1)){
        rating = getBogie();
    }else if (userScore > ((parRating)+2) || userScore == 10){
        rating = getLesson();
    }
    alert(`Your rating for this hole is: ${rating}`);

});