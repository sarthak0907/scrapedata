
// Copyright 2012 Google Inc. All rights reserved.
(function(){



const sarthakmyNav = document.querySelector('#page-home > div.contain-page > header > div.relative.bg-white.cc-header.border-bottom.border-gray-light > nav > div.margin-right-small.large-up-margin-right-medium > nav');
const sarthakmyButton = document.querySelector('#page-home > div.contain-page > header > div.relative.bg-white.cc-header.border-bottom.border-gray-light > nav > div.margin-right-small.large-up-margin-right-medium > button.hidden.weight-semi.large-up-block.text-1.color-charcoal.padding-right-small');

sarthakmyButton.addEventListener('mouseover',function(event){
  sarthakmyNav.classList.add('is-open');
})

sarthakmyNav.addEventListener('mouseover',function(event){
  sarthakmyNav.classList.add('has-visibile-subsection');
})

sarthakmyNav.addEventListener('mouseleave',function(event){
  sarthakmyNav.classList.remove('is-open');
  sarthakmyNav.classList.remove('has-visibile-subsection');
})


const rankings = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.rankings");

const rankingsHover = document.querySelector('.main-nav-dropdown__item.rankings');

rankingsHover.addEventListener('mouseover',function(){
  addHidden();
  rankings.removeAttribute('hidden');
})

const collections = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.collections");

const collectionsHover = document.querySelector('.main-nav-dropdown__item.collections');

collectionsHover.addEventListener('mouseover',function(){
  addHidden();
  collections.removeAttribute('hidden');
})

const subjectcs = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-cs");

const subjectcsHover = document.querySelector('.main-nav-dropdown__item.subject-cs');

subjectcsHover.addEventListener('mouseover',function(){
  addHidden();
  subjectcs.removeAttribute('hidden');
})

const subjecthealth = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-health");

const subjecthealthHover = document.querySelector('.main-nav-dropdown__item.subject-health');

subjecthealthHover.addEventListener('mouseover',function(){
  addHidden();
  subjecthealth.removeAttribute('hidden');
})


const subjectmath = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-maths");

const subjectmathHover = document.querySelector('.main-nav-dropdown__item.subject-maths');

subjectmathHover.addEventListener('mouseover',function(){
  addHidden();
  subjectmath.removeAttribute('hidden');
})



const subjectbusiness = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-business");

const subjectbusinessHover = document.querySelector('.main-nav-dropdown__item.subject-business');

subjectbusinessHover.addEventListener('mouseover',function(){
  addHidden();
  subjectbusiness.removeAttribute('hidden');
})



const subjecthumanities = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-humanities");

const subjecthumanitiesHover = document.querySelector('.main-nav-dropdown__item.subject-humanities');

subjecthumanitiesHover.addEventListener('mouseover',function(){
  addHidden();
  subjecthumanities.removeAttribute('hidden');
})




const subjectengineering = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-engineering");

const subjectengineeringHover = document.querySelector('.main-nav-dropdown__item.subject-engineering');

subjectengineeringHover.addEventListener('mouseover',function(){
  addHidden();
  subjectengineering.removeAttribute('hidden');
})


const subjectscience = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-science");

const subjectscienceHover = document.querySelector('.main-nav-dropdown__item.subject-science');

subjectscienceHover.addEventListener('mouseover',function(){
  addHidden();
  subjectscience.removeAttribute('hidden');
})




const subjecteducation = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-education");

const subjecteducationHover = document.querySelector('.main-nav-dropdown__item.subject-education');

subjecteducationHover.addEventListener('mouseover',function(){
  addHidden();
  subjecteducation.removeAttribute('hidden');
})



const subjectsocialsciences = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-social-sciences");

const subjectsocialsciencesHover = document.querySelector('.main-nav-dropdown__item.subject-social-sciences');

subjectsocialsciencesHover.addEventListener('mouseover',function(){
  addHidden();
  subjectsocialsciences.removeAttribute('hidden');
})







const subjectartanddesign = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-art-and-design");

const subjectartanddesignHover = document.querySelector('.main-nav-dropdown__item.subject-art-and-design');

subjectartanddesignHover.addEventListener('mouseover',function(){
  addHidden();
  subjectartanddesign.removeAttribute('hidden');
})




const subjectdatascience = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-data-science");

const subjectdatascienceHover = document.querySelector('.main-nav-dropdown__item.subject-data-science');

subjectdatascienceHover.addEventListener('mouseover',function(){
  addHidden();
  subjectdatascience.removeAttribute('hidden');
})






const subjectprogrammingandsoftwaredevelopment = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-programming-and-software-development");

const subjectprogrammingandsoftwaredevelopmentHover = document.querySelector('.main-nav-dropdown__item.subject-programming-and-software-development');

subjectprogrammingandsoftwaredevelopmentHover.addEventListener('mouseover',function(){
  addHidden();
  subjectprogrammingandsoftwaredevelopment.removeAttribute('hidden');
})



const subjectpersonaldevelopment = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-personal-development");

const subjectpersonaldevelopmentHover = document.querySelector('.main-nav-dropdown__item.subject-personal-development');

subjectpersonaldevelopmentHover.addEventListener('mouseover',function(){
  addHidden();
  subjectpersonaldevelopment.removeAttribute('hidden');
})


const subjectinfosec = document.querySelector(".main-nav-dropdown__subsection.js-main-nav-subsection.subject-infosec");

const subjectinfosecHover = document.querySelector('.main-nav-dropdown__item.subject-infosec');

subjectinfosecHover.addEventListener('mouseover',function(){
  addHidden();
  subjectinfosec.removeAttribute('hidden');
})

function addHidden(){
  subjectinfosec.setAttribute('hidden',"");
  subjectpersonaldevelopment.setAttribute('hidden',"");
  subjectprogrammingandsoftwaredevelopment.setAttribute('hidden',"");
  subjectdatascience.setAttribute('hidden',"");
  subjectartanddesign.setAttribute('hidden',"");
  subjectsocialsciences.setAttribute('hidden',"");
  subjecteducation.setAttribute('hidden',"");
  subjectscience.setAttribute('hidden',"");
  subjectengineering.setAttribute('hidden',"");
  subjecthumanities.setAttribute('hidden',"");
  subjectbusiness.setAttribute('hidden',"");
  subjectmath.setAttribute('hidden',"");
  subjecthealth.setAttribute('hidden',"");
  subjectcs.setAttribute('hidden',"");
  collections.setAttribute('hidden',"");
  rankings.setAttribute('hidden',"");
}






























































console.log("rankings",rankings)

// sarthakmyButton.addEventListener('mouseleave',function(event){
//   setTimeout(function(){
//     sarthakmyNav.classList.remove('is-open')
//   },2500)
// })

})()
