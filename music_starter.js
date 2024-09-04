let BubbleArrayX = [50, 100, 300];
let BubbleArrayY = [100, 800, 200];
let ShineArrayX = [500, 300, 800];
let ShineArrayY = [130, 1000, 300];
let StarArray = [];
let fishX = 1
let fishY = 0
// let
// let
let img;
let firstRun = true
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // background(22, 23, 49);
  background(23, 31, 87);
  rectMode(CENTER)
  if (firstRun) { //need to make an if statement switching between the 2 fish
    img = loadImage('fish.png') //fish drawing i did
    firstRun = false
  }

  let fillSize = map(other, 0, 100, 4, 30);
  let bubbleSize = map(bass, 0, 100, 50, 90);
  let shineSize = map(vocal, 0, 100, 5, 100);
  let sparkleSize = map(drum, 0, 100, 5, 100);
  let fishY = map(other, 0, 100, 450, 530);

  //scene changes!!
  //start and end
  if ((counter > -5 && counter < 901) || (counter > 14700 && counter < 15801)) {
    image(img, 800, fishY) //change to blue fishy
    DrawCoral();

  }


  //build up
  if ((counter > 900 && counter < 2701) || (counter > 6500 && counter < 7301) || (counter > 10100 && counter < 12001)) {
    fill('black')
    ellipse(100, 100, 100, 100)
    //swirls 
    image(img, 800, fishY); // fish
  }


  //magic
  if ((counter > 2700 && counter < 5601) || (counter > 7300 && counter < 9201) || (counter > 12000 && counter < 14700)) {
    background(63, 52, 101);
    image(img, 800, fishY); // fish
    //swirls 
    //shines and stars //the shines and stars should be glowing and changing size
    fill(253, 252, 208); //light yellow
    stroke(253, 252, 208); //light yellow

    ellipse(ShineArrayX[1], ShineArrayY[1], shineSize, 5);
    ellipse(ShineArrayX[1], ShineArrayY[1], 5, shineSize);
    ellipse(ShineArrayX[2], ShineArrayY[2], shineSize, 5);
    ellipse(ShineArrayX[2], ShineArrayY[2], 5, shineSize);
    ellipse(ShineArrayX[3], ShineArrayY[3], shineSize, 5);
    ellipse(ShineArrayX[3], ShineArrayY[3], 5, shineSize);


  }


  //still
  if ((counter > 5600 && counter < 6501) || (counter > 9200 && counter < 10101)) {
    stroke('white');
    background('black');
    DrawCoral();

  }


  //background
  //bubbles //the bubbles should be moving up the page and changing size lol
  const distance = 2000;
  const steps = 1000; // number of steps to move
  for (let i = 0; i <= steps; i++) {
    noFill();
    stroke(208, 243, 240); //light blue
    strokeWeight(7);
    ellipse(BubbleArrayX[0], BubbleArrayY[0], bubbleSize * 2);
    ellipse(BubbleArrayX[1], BubbleArrayY[1], bubbleSize);
    ellipse(BubbleArrayX[2], BubbleArrayY[2], bubbleSize / 2);
  }

  for (let i = 1; i < 100; i++) { //for loop to make small bubbles around the page
    let bubbleX = i * 800;
    let bubbleY = i * 300;
    noFill();
    stroke(245, 203, 245);
    strokeWeight(4);
    ellipse(bubbleX + 80, bubbleY + 10, fillSize, fillSize);
  }
  //stars and shines should be glowing and changing size




  let seconds = counter //the timer at the bottom left 
  if (seconds > 0) {
    textSize(60);
    text(nf(seconds, 3, 2), 20, height - 20);
  }

}

function DrawCoral(x, y) { //ROTATE with the beat
  //rocks in background
  fill(16, 48, 68);
  stroke(16, 48, 68);
  //blue semicircles
  //make coral arrays?
  noFill();
  stroke('white');
  strokeWeight(7);

  beginShape();
  vertex(1712, 530);
  bezierVertex(1590, 754, 1824, 966, 1920, 992);
  endShape();

  beginShape();
  vertex(1578, 690);
  bezierVertex(1542, 830, 1668, 1092, 1840, 1066);
  endShape();

  beginShape();
  vertex(1842, 566);
  bezierVertex(1910, 742, 1870, 914, 1772, 1096);
  endShape();
  // star shaped coral
  stroke(241, 191, 204); //pink
  strokeWeight(20);
  line(200, 1000, 50, 1000);
}