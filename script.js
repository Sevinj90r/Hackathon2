
const container = document.querySelector('.container');

const part1 = document.createElement('div');
const part2 = document.createElement('div');

const abtn = document.createElement('div');
const bbtn = document.createElement('div');
const cbtn = document.createElement('div');

const quest = document.createElement('div');
const countQw = document.createElement('div');

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
    var_a: "images/car.png",
    var_b: "images/bike.png",
    var_c: "images/tram.png"
  },
  {
    var_a: "images/car.png",
    var_b: "images/bike.png",
    var_c: "images/tram.png"
  },
  {
    var_a: "images/car.png",
    var_b: "images/bike.png",
    var_c: "images/tram.png"
  },
]

function question(){
  container.innerHTML = '';
  fetch('http://localhost:3000/question')
  .then(page => page.json())
  .then(data => firstquestion(data))
};
 
let num = 0;

function allvariants(){
  query.textContent == 
 }



function firstquestion(data){
  container.innerHTML = '';

  quest.textContent = data[num].qw_content;
  
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

  abtn.addEventListener('click',allvariants);
  bbtn.addEventListener('click',allvariants);
  cbtn.addEventListener('click',allvariants);
  num++;
};


