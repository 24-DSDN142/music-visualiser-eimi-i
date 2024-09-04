let BubbleArrayX = [50, 90, 270, 600, 100, 150, 800];
let BubbleArrayY = [150, 120, 160, 90, 900, 1000, 1000];
let BubbleArraySize = [100, 50, 20, 60, 200, 100, 100];
let ShineArrayX = [500, 300, 800, 1500, 1700, 100];
let ShineArrayY = [130, 1000, 300, 100, 400, 700];
let StarArray = [];
let coralArrayX = [60, 210, 300, 50, 250, 400, 500, 530, 1400, 1750, 1450, 1600, 1900, 1740];
let coralArrayY = [750, 610, 900, 950, 1000, 700, 800, 950, 900, 550, 650, 700, 700, 850];
let fishX = 1;
let fishY = 0;
let Ymove = 1080
let Ymove2 = 120
// let
let img; //pink fish
let img2; //blue fish
let img3; //Background elements
let img4; //bw background
let img5; //water
let firstRun = true
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  rectMode(CENTER)
  if (firstRun) { //images
    img = loadImage('Pink_Fish.png'); //pink fish
    img2 = loadImage('Blue_Fish.png'); //blue fish
    img3 = loadImage('RockCoral.png');
    img4 = loadImage('BWRockCoral.png');
    img5 = loadImage('Water.png')
    firstRun = false
  }
  background(img5);


  let fillSize = map(other, 0, 100, 4, 30);
  let bubbleSize = map(bass, 0, 100, 50, 90);
  let shineSize = map(vocal, 0, 100, 5, 100);
  let spinAmount = map(drum, 0, 100, 0, 150);
  let fishY = map(other, 0, 100, 450, 530);

  //scene changes!!
  //start and end
  if ((counter > -5 && counter < 901) || (counter > 14700 && counter < 15801)) {
    image(img3, 0, 0)
    DrawCoral([229, 130, 180]);
    image(img2, 800, fishY) //change to blue fishy


  }


  //build up
  if ((counter > 900 && counter < 2721) || (counter > 6500 && counter < 7401) || (counter > 10100 && counter < 12001)) {
    image(img3, 0, 0)
    //swirls 
    DrawCoral([229, 130, 180]);
    image(img, 800, fishY); // pink fish

  }


  //magic
  if ((counter > 2720 && counter < 5601) || (counter > 7400 && counter < 9201) || (counter > 12000 && counter < 14700)) {
    background(83, 60, 122);
    image(img, 800, fishY); // fish
    //swirls 
    //the shines and stars should be glowing and changing size
    for (let j = 0; j <= 20; j++) { //shines
      fill(253, 252, 208); //light yellow
      stroke(253, 252, 208);
      strokeWeight(4);
      ellipse(ShineArrayX[j], ShineArrayY[j], shineSize, 5);
      ellipse(ShineArrayX[j], ShineArrayY[j], 5, shineSize);
    }
  }


  //still
  if ((counter > 5600 && counter < 6501) || (counter > 9200 && counter < 10101)) {
    background(36, 36, 36);
    image(img4, 0, 0)
    stroke('white');
    DrawCoral(['grey']);

  }


  //background
  for (let i = 0; i <= 7; i++) { //DUPLICATE
    fill(208, 243, 240);
    noFill();
    stroke(255, 255, 255); //light blue
    strokeWeight(9);
    ellipse(BubbleArrayX[i], Ymove + BubbleArrayY[i], BubbleArraySize[i]);
    ellipse(BubbleArrayX[i] * 5, Ymove + BubbleArrayY[i] * 2, BubbleArraySize[i] * 1.3);
    ellipse(BubbleArrayX[i + 2] + 1090, Ymove + BubbleArrayY[i], BubbleArraySize[i] * 1);
    ellipse(BubbleArrayX[i] + 500, Ymove + BubbleArrayY[i] / 2, BubbleArraySize[i] / 2);
    if (BubbleArraySize[i] > 60) { //failed attempt at an if statement
      fill(208, 243, 240);
    } else {
      noFill(); // No fill
    }
  }
  for (let e = 0; e <= 7; e++) { //DUPLICATE
    fill(208, 243, 240);
    noFill();
    stroke(255, 255, 255); //light blue
    strokeWeight(9);
    ellipse(BubbleArrayX[e], Ymove2 + BubbleArrayY[e], BubbleArraySize[e]);
    ellipse(BubbleArrayX[e] * 5, Ymove2 + BubbleArrayY[e] * 2, BubbleArraySize[e] * 1.3);
    ellipse(BubbleArrayX[e + 2] + 1090, Ymove2 + BubbleArrayY[e], BubbleArraySize[e] * 1);
    ellipse(BubbleArrayX[e] + 500, Ymove2 + BubbleArrayY[e] / 2, BubbleArraySize[e] / 2);
    if (BubbleArraySize[e] > 60) { //failed attempt at an if statement
      fill(208, 243, 240);
    } else {
      noFill(); // No fill
    }
  }

  Ymove = Ymove - 1.5; //speed
  if (Ymove < -1200) { //if it goes past this value
    Ymove = 1480; //where it resets to?
  }

  Ymove2 = Ymove2 - 1;
  if (Ymove2 < -1200) {
    Ymove2 = 1480;
  }

  let seconds = counter //the timer at the bottom left 
  if (seconds > 0) {
    textSize(60);
    text(nf(seconds, 3, 2), 20, height - 20);
  }

  function DrawCoral(coralColour) { //scenery
    //some sort of round coral changing SIZE to bass or drum
    //blue semicircles some sort of aquatic plant?
    // star shaped coral rotating to vocals

    for (let k = 0; k <= 20; k++) {
      stroke(coralColour);
      push();
      translate(coralArrayX[k], coralArrayY[k]);
      rotate(spinAmount);
      strokeWeight(14);
      ellipse(0, 0, 5, 130);
      ellipse(0, 0, 130, 5);
      rotate(45)
      ellipse(0, 0, 5, 130);
      ellipse(0, 0, 130, 5);
      pop();
    }

  }
}