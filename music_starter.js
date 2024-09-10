let BubbleArrayX = [50, 90, 270, 600, 100, 150, 800, 1200, 1600, 1800, 1600, 600, 200, 300, 330, 500, 900];
let BubbleArrayY = [150, 120, 160, 90, 600, 650, 600, 600, 900, 100, 400, 500, 900, 450, 460, 700, 1040];
let BubbleArraySize = [50, 30, 30, 50, 60, 40, 55, 30, 40, 50, 60, 40, 54, 40, 20, 30, 50];
let ShineArrayX = [900, 100, 300, 1200, 1500, 1550];
let ShineArrayY = [130, 850, 1000, 300, 340, 690];
let CircleArrayX = [500, 700, 100, 60, 220, 50, 500, 1000, 860, 600, 1200, 1400, 1170, 1400, 1600, 1870, 1640];
let CircleArrayY = [50, 60, 160, 650, 840, 1000, 1040, 1020, 340, 250, 120, 50, 450, 540, 800, 300, 200];
let bubbles = [];
let coralArrayX = [10, 5, 60, 70, 130, 150, 150, 20, 1590, 1660, 1680, 1600, 1670, 1750, 210];
let coralArrayY = [950, 1040, 1000, 900, 960, 890, 1040, 870, 530, 560, 500, 470, 420, 460, 970];
let fishX = 1;
let fishY = 0;
let Ymove = 250 //where the bubbles start 250
let Ymove2 = 1380
let Ymove3 = 1480
let img; //pink fish
let img2; //blue fish
let img3; //rocks
let img4; //bw rocks w coral
let img5; //water background
let img6; //bw purple coral
let img7; //purple coral
let img8; //purple coral
let img9; //swirl
let img10; //magic background
let img11; //bw purplecoral(2)
let firstRun = true
let bubblesInitialized = false;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) { //images
    img = loadImage('Pink_Fish.png'); //pink fish
    img2 = loadImage('Blue_Fish.png'); //blue fish
    img3 = loadImage('RockCoral.png');
    img4 = loadImage('BWRockCoral.png');
    img5 = loadImage('Water.png');
    img6 = loadImage('BWPurpleCoral.png')
    img7 = loadImage('PurpleCoral.png');
    img8 = loadImage('PurpleCoral2.png');
    img9 = loadImage('Swirl.png');
    img10 = loadImage('magicbackground.png');
    img11 = loadImage('BWPurpleCoral2')
    firstRun = false
  }
  rectMode(CENTER)
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
  let coralSize = map(bass, 0, 100, 260, 320);
  let coralLength = map(vocal, 0, 100, 20, 70);
  let spinAmount = map(drum, 0, 100, 0, 140);
  let fishY = map(other, 0, 100, 430, 530);
  //magic variables
  let shineSize = map(vocal, 0, 100, 40, 100);
  let circleSize = map(bass, 0, 100, 3, 30);

  //scene changes!!
  //start and end
  if ((counter > -5 && counter < 901) || (counter > 14700 && counter < 15801)) {
    image(img3, 0, 0); //rocks
    image(img7, 430, 550, coralSize, coralSize); //purple corals 
    image(img8, 1400, 550, coralSize, coralSize);
    DrawCoral([211, 95, 212], [226, 182, 244]); //spinning coral
    DrawCoral([211, 95, 212], [226, 182, 244], 1150, -140);
    DrawCoral([211, 95, 212], [226, 182, 244], 50, 100, 0.5);
    DrawSeaweed();
    image(img2, 800, fishY); //change to blue fishy

  }


  //build up
  if ((counter > 900 && counter < 2721) || (counter > 6500 && counter < 7401) || (counter > 10100 && counter < 12001)) {
    image(img3, 0, 0); //rocks
    image(img7, 430, 550, coralSize, coralSize); //purple corals 
    image(img8, 1400, 550, coralSize, coralSize);
    DrawCoral([211, 95, 212], [226, 182, 244]);
    DrawCoral([211, 95, 212], [226, 182, 244], 1150, -140);
    DrawCoral([211, 95, 212], [226, 182, 244], 50, 100, 0.5);
    DrawSeaweed();
    image(img, 800, fishY); // pink fish
  }


  //magic
  if ((counter > 2720 && counter < 5601) || (counter > 7400 && counter < 9201) || (counter > 12000 && counter < 14700)) {
    image(img10, 0, 0);
    background
    image(img9, 0, 0); //swirls :O
    image(img, 800, fishY); // fish
    //circles
    for (let s = 0; s <= 17; s++) {
      fill(247, 237, 213);
      stroke(247, 237, 213);
      strokeWeight(2);
      ellipse(CircleArrayX[s], CircleArrayY[s], circleSize)
    }



    for (let j = 0; j <= 20; j++) { //shines
      //shines
      fill(249, 227, 178); //light yellow
      stroke(249, 227, 178);
      strokeWeight(8);

      ellipse(ShineArrayX[j], ShineArrayY[j], shineSize, 5);
      ellipse(ShineArrayX[j], ShineArrayY[j], 5, shineSize); //shine shape


      // for (let h = 0; h <= 20; h++) { //stars
      // }
    }
  }


  //still
  if ((counter > 5600 && counter < 6501) || (counter > 9200 && counter < 10101)) {
    background(36, 36, 36);
    image(img4, 0, 0)
    image(img6, 430, 550, coralSize, coralSize); //purple corals 
    image(img11, 1400, 550, coralSize, coralSize);
    stroke('white');
    DrawCoral([143, 143, 143], [210, 210, 210]);
    DrawCoral([143, 143, 143], [210, 210, 210], 1150, -140);
    DrawCoral([143, 143, 143], [210, 210, 210], 50, 100, 0.5);
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
  if (Ymove < -1100) { //if it goes past this value
    Ymove = 1480; //where it resets to?
  }
  Ymove2 = Ymove2 - 1;
  if (Ymove2 < -1100) {
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

  function DrawCoral(coralColour, spikeColour, offsetX = 0, offsetY = 0, size = 1) { //corals
    for (let n = 0; n <= 2; n++) { //for whiteish tree corals
      stroke(spikeColour);
      fill(spikeColour);
      strokeWeight(13);
      push();
      translate(offsetX, offsetY)
      scale(size)
      line(160, 730, 300, 650 + coralLength);
      line(230, 665 + coralLength, 200, 600 + coralLength);
      line(230, 665 + coralLength, 270, 590 + coralLength);
      line(160, 730, 100, 600 + coralLength);
      line(100, 600 + coralLength, 120, 570 + coralLength);
      line(100, 600 + coralLength, 60, 590 + coralLength);
      line(160, 730, 150, 600 + coralLength);
      line(160, 730, 180, 629 + coralLength)
      line(160, 730, 150, 760 + coralLength);
      line(150, 740 + coralLength, 120, 760 + coralLength);
      line(160, 720 + coralLength, 190, 770 + coralLength);
      line(160, 730, 290, 710 + coralLength);
      line(200, 700 + coralLength, 250, 740 + coralLength)
      line(160, 730, 100, 690 + coralLength);
      line(120, 690 + coralLength, 90, 650 + coralLength);
      pop();

    }

    for (let k = 0; k <= 14; k++) { //pink star shaped corals
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