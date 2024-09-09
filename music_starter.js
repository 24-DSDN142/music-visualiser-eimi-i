let BubbleArrayX = [50, 90, 270, 600, 100, 150, 800, 1200, 1600, 1800, 1600, 600, 200, 300, 330, 500, 900];
let BubbleArrayY = [150, 120, 160, 90, 600, 650, 600, 600, 900, 100, 400, 500, 900, 450, 460, 700, 1040];
let BubbleArraySize = [50, 30, 30, 50, 60, 40, 55, 30, 40, 50, 60, 40, 54, 40, 20, 30, 50];
let ShineArrayX = [500, 300, 800, 1500, 1700, 100];
let ShineArrayY = [130, 1000, 300, 100, 400, 700];
let bubbles = [];
let coralArrayX = [60, 170, 300, 50, 250, 400, 500, 530, 1400, 1750, 1450, 1600, 1900, 1740];
let coralArrayY = [750, 900, 900, 1000, 1000, 700, 800, 950, 900, 550, 650, 700, 700, 850];
let fishX = 1;
let fishY = 0;
let Ymove = 250 //where the bubbles start 250
let Ymove2 = 1380
let Ymove3 = 1480
let img; //pink fish
let img2; //blue fish
let img3; //Background elements
let img4; //bw background
let img5; //water
let firstRun = true
let bubblesInitialized = false;
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

  class Bubble {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }

    move() {
      this.y = this.y + Ymove3 + random(5)
    }

    show() {
      stroke(255, 255, 255); //light blue
      strokeWeight(5);
      fill(255, 80)
      ellipse(this.x, this.y, this.r);
    }
  }

  let bubbles = new Bubble(200, 0, 500);
  let fillSize = map(other, 0, 100, 4, 30);
  let bubbleSize = map(bass, 0, 100, 50, 90);
  let shineSize = map(vocal, 0, 100, 5, 100);
  let shineAuraSize = map(vocal, 0, 100, 30, 150);
  let spinAmount = map(drum, 0, 100, 0, 150);
  let fishY = map(other, 0, 100, 430, 530);

  //scene changes!!
  //start and end
  if ((counter > -5 && counter < 901) || (counter > 14700 && counter < 15801)) {
    image(img3, 0, 0)
    DrawCoral([211, 95, 212]);
    DrawSeaweed();
    image(img2, 800, fishY) //change to blue fishy


  }


  //build up
  if ((counter > 900 && counter < 2721) || (counter > 6500 && counter < 7401) || (counter > 10100 && counter < 12001)) {
    image(img3, 0, 0)
    //swirls 
    DrawCoral([211, 95, 212]);
    DrawSeaweed();
    image(img, 800, fishY); // pink fish

  }


  //magic
  if ((counter > 2720 && counter < 5601) || (counter > 7400 && counter < 9201) || (counter > 12000 && counter < 14700)) {
    background(83, 60, 122);
    image(img, 800, fishY); // fish
    //swirls 

    //the shines and stars should be glowing and changing size
    for (let j = 0; j <= 20; j++) { //shines
      // //shine aura
      // fill(172, 140, 155);
      // strokeWeight(0);
      // ellipse(ShineArrayX[j], ShineArrayY[j], shineAuraSize);

      fill(253, 252, 208); //light yellow
      stroke(253, 252, 208);
      strokeWeight(4);

      ellipse(ShineArrayX[j], ShineArrayY[j], shineSize, 5);
      ellipse(ShineArrayX[j], ShineArrayY[j], 5, shineSize); //shine shape

    }
    // for (let h = 0; h <= 20; h++) { //stars
    // }
  }


  //still
  if ((counter > 5600 && counter < 6501) || (counter > 9200 && counter < 10101)) {
    background(36, 36, 36);
    image(img4, 0, 0)
    stroke('white');
    DrawCoral(['grey']);
    DrawSeaweed();

  }

  //bubbles 
  // bubblecut yo
  // if ((counter > 2650 && counter < 2700) || (counter > 5550 && counter < 5650) || (counter > 6450 && counter < 6550)) { //needs 150 counts
  //   for (let b = 0; b < 340; b++) {
  //     let x = random(width);
  //     let y = random(height);
  //     let r = random(10, 70);
  //     bubbles[b] = new Bubble(x, y, r)
  //     bubblesInitialized = true;
  //   }

  //   for (let b = 0; b < 240; b++) {
  //     bubbles[b].move();
  //     bubbles[b].show();
  //   }

  // }
  for (let i = 0; i <= 20; i++) { //DUPLICATE
    fill(208, 243, 240);
    noFill();
    stroke(255, 170); //light blue
    strokeWeight(5);
    ellipse(BubbleArrayX[i], Ymove + BubbleArrayY[i], BubbleArraySize[i]);
    ellipse(BubbleArrayX[i] * 5, Ymove + BubbleArrayY[i] * 1.5, BubbleArraySize[i] / 2);
    ellipse(BubbleArrayX[i + 2] + 1090, Ymove + BubbleArrayY[i] + 300, BubbleArraySize[i] * 1);
    ellipse(BubbleArrayX[i] + 500, Ymove + BubbleArrayY[i] / 2, BubbleArraySize[i] / 2);
  }
  for (let e = 0; e <= 20; e++) { //DUPLICATE
    fill(208, 243, 240);
    noFill();
    stroke(255, 170); //light blue
    strokeWeight(5);
    ellipse(BubbleArrayX[e], Ymove2 + BubbleArrayY[e], BubbleArraySize[e]);
    ellipse(BubbleArrayX[e] * 5, Ymove2 + BubbleArrayY[e] * 1.5, BubbleArraySize[e] / 2);
    ellipse(BubbleArrayX[e + 2] + 1090, Ymove2 + BubbleArrayY[e] + 300, BubbleArraySize[e] * 1);
    ellipse(BubbleArrayX[e] + 500, Ymove2 + BubbleArrayY[e] / 2, BubbleArraySize[e] / 2);
  }

  Ymove = Ymove - 1; //speed
  if (Ymove < -1000) { //if it goes past this value
    Ymove = 1480; //where it resets to?
  }
  Ymove2 = Ymove2 - 1;
  if (Ymove2 < -1200) {
    Ymove2 = 1480;
  }
  Ymove3 = Ymove3 - 13;
  if (Ymove3 < -1000) {
    Ymove3 = 1480;
  }

  let seconds = counter //the timer at the bottom left 
  if (seconds > 0) {
    textSize(60);
    text(nf(seconds, 3, 2), 20, height - 20);
  }

  function DrawCoral(coralColour, roundColour) { //scenery
    //some sort of round coral changing SIZE to bass or drum
    //blue semicircles some sort of aquatic plant?
    // star shaped coral rotating to vocals
    for (let c = 0; c <= 13; c++) {
      stroke(185, 100, 233);
      strokeWeight(7);
      fill(185, 100, 233); //purple





    }

    for (let k = 0; k <= 13; k++) { //pink star shaped corals
      push();
      stroke(coralColour);
      fill(coralColour);
      translate(coralArrayX[k], coralArrayY[k]);
      rotate(spinAmount);
      strokeWeight(8);

      ellipse(0, 0, 5, 90);
      ellipse(0, 0, 90, 5);
      rotate(45)
      ellipse(0, 0, 5, 90);
      ellipse(0, 0, 90, 5);
      pop();
    }

  }

  //from the snail video include some moving seaweed
  function DrawSeaweed(seaweedColour) {

  }
}