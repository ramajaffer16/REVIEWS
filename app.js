// local reviews data

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const btns = document.querySelectorAll('button');
const image = document.querySelector('img');
const author = document.querySelector('#author');
const info = document.querySelector('#info');
const job = document.querySelector('#job');
const display = document.querySelector('article');
// const Randombtn = document.querySelector('.random-btn');


let currentIndex = 0;

btns.forEach(function(btn){
btn.addEventListener('click',function(e){
  if (e.currentTarget.classList.contains('prev-btn')){
 
    // display.textContent = reviews[(currentIndex - 1 + items.length) % items.length]
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length
}else if (e.currentTarget.classList.contains('next-btn')){
  // display.textcontent = reviews[(currentIndex + 1) % items.length]
  currentIndex = (currentIndex + 1) % reviews.length
} else if  (e.currentTarget.classList.contains('random-btn')){
  let RandomNumber = function(){
    return Math.floor(Math.random()*reviews.length);
    
  }
  currentIndex = RandomNumber();
}
image.src = reviews[currentIndex].img;
author.textContent = reviews[currentIndex].name;
info.textContent = reviews[currentIndex].text;
job.textContent = reviews[currentIndex].job;
});
});

image.src = reviews[currentIndex].img;
author.textContent = reviews[currentIndex].name;
info.textContent = reviews[currentIndex].text;
job.textContent = reviews[currentIndex].job;

// function RandomNumber() {
//   return Math.floor(Math.random() * reviews.length);
// }



