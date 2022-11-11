
// Buttons
let sucksBtn = document.getElementById('sucksSwitch');
let greatBtn = document.getElementById('greatSwitch');
let mehBtn = document.getElementById('MehSwitch');
let emailBtn = document.getElementById('Email-Btn')
//Modal
let modalContainer = document.getElementById('modal-container');
let secondModalContainer = document.getElementById('modal-container2');
let thirdModalContainer = document.getElementById('modal-container3');
let fourthModalContainer = document.getElementById('modal-container4');
let emailModalContainer = document.getElementById('modal-Email');
// Close Buttons
let closeBtn = document.getElementById('close-btn');
let closeBtn2 = document.getElementById('close-btn2');
let closeBtn3 = document.getElementById('close-btn3');
let closeBtn4= document.getElementById('close-btn4');
let closeBtnEmail= document.getElementById('close-btn-email');


//Event for "How do you like my Website" Switches

sucksBtn.addEventListener('click',function(){
   
  
});
closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none'
    
    
   
});
closeBtn2.addEventListener('click', function(){
    secondModalContainer.style.display = 'none'
});
closeBtn3.addEventListener('click', function(){
    thirdModalContainer.style.display = 'none'
});
closeBtn4.addEventListener('click', function(){
     fourthModalContainer.style.display = 'none'
    });

closeBtnEmail.addEventListener('click', function(){
    emailModalContainer.style.display = 'none'
       });
var clickCount = 0;

window.addEventListener('click', function(e){
    
    if (e.target === modalContainer){
        modalContainer.style.display = 'none';
        secondModalContainer.style.display = 'none';
        thirdModalContainer.style.display = 'none';
    }
    if (e.target === secondModalContainer){
       
        secondModalContainer.style.display = 'none';
      
    }
    if (e.target === thirdModalContainer){
       
        thirdModalContainer.style.display = 'none';
    }if (e.target === fourthModalContainer){
       
        fourthModalContainer.style.display = 'none';
    }
    if (e.target === emailModalContainer){
       
        emailModalContainer.style.display = 'none';
    }
    
});
sucksBtn.addEventListener('click',function(){
    clickCount++;
    if(clickCount === 1){
    modalContainer.style.display = 'block'
    sucksBtn.checked =false;
    }
    if(clickCount === 2){
        secondModalContainer.style.display = 'block';
        sucksBtn.checked =false;

    }if (clickCount ===3){
        
      
        thirdModalContainer.style.display = 'block';
        sucksBtn.checked =false;

    }if(clickCount ===4){
        sucksBtn.checked =false;
        
        clickCount = 0;
    }
})

mehBtn.addEventListener('click',function(){
    greatBtn.checked =true;
    mehBtn.checked =false;
    fourthModalContainer.style.display = 'block'
});

emailBtn.addEventListener('click',function(){
    emailModalContainer.style.display = 'block';
})