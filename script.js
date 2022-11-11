// Buttons
const sucksBtn = document.getElementById('sucksSwitch');
const greatBtn = document.getElementById('greatSwitch');
const mehBtn = document.getElementById('MehSwitch');
const emailBtn = document.getElementById('Email-Btn');
const orangeDropDownBtn = document.getElementById('drop-down-orange-btn');
const redDropDownBtn = document.getElementById('drop-down-red-btn');
const bluescreenBtn = document.getElementById('red-bluescreen-btn');
//Drop down div and modal
const redBtnDiv = document.getElementById('drop-down-red-btn-div');
const dropDownModal = document.getElementById('drop-down-red-btn-div2');
//Modal
const modalContainer = document.getElementById('modal-container');
const secondModalContainer = document.getElementById('modal-container2');
const thirdModalContainer = document.getElementById('modal-container3');
const fourthModalContainer = document.getElementById('modal-container4');
const emailModalContainer = document.getElementById('modal-Email');
// Close Buttons
const closeBtn = document.getElementById('close-btn');
const closeBtn2 = document.getElementById('close-btn2');
const closeBtn3 = document.getElementById('close-btn3');
const closeBtn4 = document.getElementById('close-btn4');
const closeBtnEmail = document.getElementById('close-btn-email');
//Bluescreen

const bluescreenImg1 = document.getElementById('bluescreen-img1');
//Kris Images
const imgCountDup = document.getElementById("imgCountDup");
const countDupSolution = "./images/countDuplicatesSolution.png";
const imgHashtag = document.getElementById("imgHashtag");
const hashtagSolution = "./images/hashtagSolution.png";
const imgSortOdds = document.getElementById("imgSortOdds");
const sortOddsSolution = "./images/sortOddsSolution.png";

const bluescreen = document.getElementById('bluescreen-img1');

orangeDropDownBtn.addEventListener ('click', function(){
    redBtnDiv.style.display = 'block'
})
redDropDownBtn.addEventListener ('click', function(){
   dropDownModal.style.display = 'block'
})
bluescreenBtn.addEventListener ('click', function(){
    bluescreen.style.display = 'block'
 })
//Event for "How do you like my Website" Switches
var clickCount = 0;
bluescreenBtn.addEventListener('click',function(){
   
    bluescreenImg1.style.display = 'block';
    
    
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

function switchImg(image, source) {
    image.src = source;
};

//Dejan Script
dejanBoxFoto.addEventListener('click',function(){

})