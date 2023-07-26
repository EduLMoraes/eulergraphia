function introduction() {
    let button1 = document.getElementById('option1');
    let button2 = document.getElementById('option2');
    let button3 = document.getElementById('option3');
    //let button4 = document.getElementById('option4');
    let button5 = document.getElementById('option5');

    if(button1.classList == 'option-selected'){
        return 1;
    }
    button1.classList.remove('option');
    button1.classList.add('option-selected');

    button2.classList.remove('option-selected');
    button2.classList.add('option');

    button3.classList.remove('option-selected');
    button3.classList.add('option');

    //button4.classList.remove('option-selected');
    //button4.classList.add('option');
    
    button5.classList.remove('option-selected');
    button5.classList.add('option');

    let iframe = document.getElementById('iframe');
    iframe.setAttribute('src', './views/introducao.html');
}

function bio() {
    let button1 = document.getElementById('option1');
    let button2 = document.getElementById('option2');
    let button3 = document.getElementById('option3');
    //let button4 = document.getElementById('option4');
    let button5 = document.getElementById('option5');

    if(button2.classList == 'option-selected'){
        return 1;
    }

    button2.classList.remove('option');
    button2.classList.add('option-selected');

    button1.classList.remove('option-selected');
    button1.classList.add('option');

    button3.classList.remove('option-selected');
    button3.classList.add('option');

    //button4.classList.remove('option-selected');
    //button4.classList.add('option');
    
    button5.classList.remove('option-selected');
    button5.classList.add('option');

    let iframe = document.getElementById('iframe');
    iframe.setAttribute('src', './views/leonard.html');
}

function path() {
    let button1 = document.getElementById('option1');
    let button2 = document.getElementById('option2');
    let button3 = document.getElementById('option3');
    //let button4 = document.getElementById('option4');
    let button5 = document.getElementById('option5');

    if(button3.classList == 'option-selected'){
        return 1;
    }

    button3.classList.remove('option');
    button3.classList.add('option-selected');

    button2.classList.remove('option-selected');
    button2.classList.add('option');

    button1.classList.remove('option-selected');
    button1.classList.add('option');

   // button4.classList.remove('option-selected');
   // button4.classList.add('option');
    
    button5.classList.remove('option-selected');
    button5.classList.add('option');

    let iframe = document.getElementById('iframe');
    iframe.setAttribute('src', './views/caminhos.html');
}

function formulas() {
    let button1 = document.getElementById('option1');
    let button2 = document.getElementById('option2');
    let button3 = document.getElementById('option3');
  //  let button4 = document.getElementById('option4');
    let button5 = document.getElementById('option5');

    if(button4.classList == 'option-selected'){
        return 1;
    }

  //  button4.classList.remove('option');
 //   button4.classList.add('option-selected');

    button2.classList.remove('option-selected');
    button2.classList.add('option');

    button3.classList.remove('option-selected');
    button3.classList.add('option');

    button1.classList.remove('option-selected');
    button1.classList.add('option');
    
    button5.classList.remove('option-selected');
    button5.classList.add('option');

    let iframe = document.getElementById('iframe');
    iframe.setAttribute('src', './views/formulas.html');
}

function fontes() {
    let button1 = document.getElementById('option1');
    let button2 = document.getElementById('option2');
    let button3 = document.getElementById('option3');
  //  let button4 = document.getElementById('option4');
    let button5 = document.getElementById('option5');

    if(button5.classList == 'option-selected'){
        return 1;
    }

    button5.classList.remove('option');
    button5.classList.add('option-selected');

    button2.classList.remove('option-selected');
    button2.classList.add('option');

    button3.classList.remove('option-selected');
    button3.classList.add('option');

    //button4.classList.remove('option-selected');
   // button4.classList.add('option');
    
    button1.classList.remove('option-selected');
    button1.classList.add('option');

    let iframe = document.getElementById('iframe');
    iframe.setAttribute('src', './views/fontes.html');
}
