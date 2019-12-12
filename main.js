document.querySelector('#make').addEventListener('click', function(){

    var answers = [];

    answers[0] = document.querySelector('.inputOne').value;
    answers[1] = document.querySelector('.inputTwo').value;
    answers[2] = document.querySelector('.inputThree').value;
    answers[3] = document.querySelector('.inputFour').value;
    answers[4] = document.querySelector('.inputFive').value;

    var info = 'Czuwaj! <br> w sobote odbedzie się kolejna zbiórka zastępu. Tym razem spotykamy się o godzinie' +  answers[0] + ' w  ' + answers[2] + 'a kończymy o  ' + answers[1] + '  w ' + answers[3] + ' Napisz czy bedziesz. <br>  ' + answers[4];

    var readyText = document.querySelector('.readyText');
    readyText.innerHTML = info;

    info.copyfull();
    
   
})

document.querySelector('#copy').addEventListener('click', function(){
    document.querySelector('.readyText').select();
})