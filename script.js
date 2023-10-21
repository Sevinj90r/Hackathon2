
const container = document.querySelector('.container');

const part1 = document.createElement('div');
const part2 = document.createElement('div');

const abtn = document.createElement('div');
const bbtn = document.createElement('div');
const cbtn = document.createElement('div');

const quest = document.createElement('div');
const countQw = document.createElement('div');

const rightdiv = document.createElement('div');
rightdiv.className = "right";
const wrongdiv = document.createElement('div');
wrongdiv.className = "wrong";


abtn.className = 'abtn';
bbtn.className = 'bbtn';
cbtn.className = 'cbtn';
quest.className = 'quest';
countQw.className = 'countQw';

part1.className = 'part1';
part2.className = 'part2';

const aimg = document.createElement('img');
const bimg = document.createElement('img');
const cimg = document.createElement('img');

aimg.className = "aimg";
bimg.className = "bimg";
cimg.className = "cimg";


const result = document.createElement('div');
const retry = document.createElement('div');

result.className = 'result';
retry.className = 'retry';

result.textContent = 'You lost';
retry.textContent = 'Retry'


const imgArr = [
  {
    var_a: "images/car.png",
    var_b: "images/bike.png",
    var_c: "images/tram.png"
  },
  {
    var_a: "images/book.png",
    var_b: "images/crayon.png",
    var_c: "images/ruler.png"
  },
  {
    var_a: "images/computer.png",
    var_b: "images/rubber.png",
    var_c: "images/ruler.png"
  },
  {
    var_a: "images/farmer.png",
    var_b: "images/teacher.png",
    var_c: "images/cook.png"
  },
  {
    var_a: "images/cook.png",
    var_b: "images/teacher.png",
    var_c: "images/tram.png"
  },
]

function question(){
  container.innerHTML = '';
  rightdiv.style.visibility = 'hidden';
  fetch('http://localhost:3000/question')
  .then(page => page.json())
  .then(data => firstquestion(data))
};
 function again(){
  num = 0;
  question();
 }

function welldone(){
  container.innerHTML = '';
  const end = document.createElement('div');
  end.className = "end";
  end.textContent = "Well Done"
  container.appendChild(end);
}
function displayretry(){
  container.innerHTML = '';
  container.appendChild(result);
  container.appendChild(retry);
  wrongdiv.style.visibility = 'hidden';
  retry.addEventListener('click',again);
}
let num = 0;

function checkA(){
  const wordA = imgArr[num].var_a.slice(7,-4);
  const answer = quest.textContent;
  if(answer == wordA) {
    if(num < 4){
      abtn.appendChild(rightdiv);
      rightdiv.style.visibility = 'visible';
      num++;
      setTimeout(question, 1000);
    } else if(num = 4){
      welldone();
    }
  } else {
    abtn.appendChild(wrongdiv);
    wrongdiv.style.visibility = 'visible';
    displayretry();
  }
 };
 function checkB(){
  // bbtn.removeChild(rightdiv);
  const wordB = imgArr[num].var_b.slice(7,-4);
  const answer = quest.textContent;
  if(answer == wordB ) {
    if(num < 4){
      bbtn.appendChild(rightdiv);
      rightdiv.style.visibility = 'visible';
      num++;
      setTimeout(question, 1000);
    } else if(num = 4){
      welldone();
    }
  } else {
    bbtn.appendChild(wrongdiv);
    wrongdiv.style.visibility = 'visible';
    displayretry();
  }
 };

function checkC(){
  // cbtn.removeChild(rightdiv);

  const wordC = imgArr[num].var_c.slice(7,-4);
  const answer = quest.textContent;
  if(answer == wordC ) {
    if(num < 4){
      cbtn.appendChild(rightdiv);
      rightdiv.style.visibility = 'visible';
      num++;
      setTimeout(question, 1000);
    } else if(num = 4){
      welldone();
    }
  } else {
    cbtn.appendChild(wrongdiv);
    wrongdiv.style.visibility = 'visible';
    displayretry();
  }
 
 };


async function firstquestion(data){
  container.innerHTML = '';
  
  quest.textContent = data[num].qw_content;
  countQw.textContent = `${num+1}/5`
  aimg.src = imgArr[num].var_a;
  bimg.src = imgArr[num].var_b;
  cimg.src = imgArr[num].var_c;

  abtn.appendChild(aimg);
  bbtn.appendChild(bimg);
  cbtn.appendChild(cimg);

  part1.appendChild(abtn);
  part1.appendChild(bbtn);
  part1.appendChild(cbtn);
  part2.appendChild(quest);
  part2.appendChild(countQw);

  container.appendChild(part1);
  container.appendChild(part2);

  
  abtn.addEventListener('click',await checkA);
  bbtn.addEventListener('click',await checkB);
  cbtn.addEventListener('click',await checkC);


};


