let BubbleArrayX = [50, 90, 270, 600, 100, 150, 800, 1200, 1600, 1800, 1600, 600, 200, 300, 330, 500, 900]; //bubble array x, y and size for all scenes
let BubbleArrayY = [150, 120, 160, 90, 600, 650, 600, 600, 850, 100, 400, 500, 900, 450, 460, 700, 850];
let BubbleArraySize = [50, 30, 30, 50, 60, 40, 55, 30, 40, 50, 60, 40, 54, 40, 20, 30, 50];
let ShineArrayX = [900, 100, 300, 1200, 1500, 1550]; //shine array for magic scene
let ShineArrayY = [130, 850, 1000, 300, 340, 690];
let CircleArrayX = [500, 700, 100, 60, 220, 50, 500, 1000, 860, 600, 1200, 1400, 1170, 1400, 1600, 1870, 1640]; //star circle for magic scene array
let CircleArrayY = [50, 60, 160, 650, 840, 1000, 1040, 1020, 340, 250, 120, 50, 450, 540, 800, 300, 200];
let bubbles = []; //array for class of bubbles
let coralArrayX = [10, 5, 60, 70, 130, 150, 150, 20, 1590, 1660, 1680, 1600, 1670, 1750, 210, 1860, 1800, 1770, 1870, 1840, 1720, 1700]; //pink spinning coral array
let coralArrayY = [950, 1040, 1000, 900, 960, 890, 1040, 870, 530, 560, 500, 470, 420, 460, 970, 850, 900, 990, 950, 1030, 910, 1030];
let fishY;
let swirlY;

let Ymove = 250 //where the bubbles start
let Ymove2 = 1380
let Ymove3 = 1040 //bubble transition
let PinkFish; //pink fish 
let BlueFish; //blue fish
let BackgroundRocks; //rocks
let BWBackgroundRocks; //bw rocks w coral
let Water; //water background
let PurpleCoralL; //purple coral left
let PurpleCoralR; //purple coral right
let BWPurpleCoralL; //bw purple coral
let BWPurpleCoralR; //bw purplecoral right
let Swirl; //swirl for magic
let MagicBackground; //magic background
let Seaweed = []; //regular seaweed
let MSeaweed = []; //magic seaweed
let BWSeaweed = []; //black and white seaweed

let firstRun = true

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  rectMode(CENTER)
  if (firstRun) { //images
    PinkFish = loadImage('Pink_Fish.png'); //pink fish
    BlueFish = loadImage('Blue_Fish.png'); //blue fish
    BackgroundRocks = loadImage('RockCoral.png'); //background images
    BWBackgroundRocks = loadImage('BWRockCoral.png');
    Water = loadImage('Water.png');
    BWPurpleCoralL = loadImage('BWPurpleCoral.png')
    PurpleCoralL = loadImage('PurpleCoral.png');
    PurpleCoralR = loadImage('PurpleCoral2.png');
    Swirl = loadImage('Swirl.png');
    MagicBackground = loadImage('magicbackground.png');
    BWPurpleCoralR = loadImage('BWPurpleCoral2.png');

    Seaweed.push(loadImage('Seaweed_1.png')); //seaweed frames
    Seaweed.push(loadImage('Seaweed_2.png'));
    Seaweed.push(loadImage('Seaweed_3.png'));

    MSeaweed.push(loadImage('MSeaweed_1.png')); //magic seaweed frames
    MSeaweed.push(loadImage('MSeaweed_2.png'));
    MSeaweed.push(loadImage('MSeaweed_3.png'));

    BWSeaweed.push(loadImage('BWSeaweed_1.png')); //black and white seaweed frames
    BWSeaweed.push(loadImage('BWSeaweed_2.png'));
    BWSeaweed.push(loadImage('BWSeaweed_3.png'));

    firstRun = false
  }

  class Bubble { //the class for transition bubb;es
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }

    move() { //moves the bubbles
      this.y = this.y + Ymove3 + random(5);
    }

    show() { // the appearance of the bubb;es
      stroke(255, 255, 255); //light blue
      strokeWeight(5);
      fill(255, 80);
      ellipse(this.x, this.y, this.r);
    }
  }

  let bubbles = new Bubble(200, 0, 500); //for bubble class
  //regular scene variables with volume channels
  let coralSize = map(bass, 0, 100, 260, 320); //makes purple coral change size
  let coralLength = map(vocal, 0, 100, 20, 70); //makes spiky coral go up and down
  let spinAmount = map(drum, 0, 100, 0, 140); //spins coral
  let fishY = map(other, 0, 100, 430, 530); //moves fish up and down
  //magic variables
  let shineSize = map(vocal, 0, 100, 40, 100); //changes size of shine 
  let circleSize = map(bass, 0, 100, 3, 30); //changes size of star circle
  let swirlY = map(bass, 0, 100, -50, 10); //makes swirls move up and down


  //start and end scene
  if ((counter > -5 && counter < 901) || (counter > 14750 && counter < 16001)) {
    image(BackgroundRocks, 0, 0); //rocks
    image(PurpleCoralL, 430, 550, coralSize, coralSize); //purple corals 
    image(PurpleCoralR, 1400, 550, coralSize, coralSize);
    DrawCoral([211, 95, 212], [226, 182, 244]); //spinning coral
    DrawCoral([211, 95, 212], [226, 182, 244], 1150, -140);
    DrawCoral([211, 95, 212], [226, 182, 244], 50, 100, 0.5);
    DrawSeaweed(Seaweed);
    image(BlueFish, 800, fishY); //change to blue fishy

  }

  //build up scene scene
  if ((counter > 900 && counter < 2721) || (counter > 6450 && counter < 7401) || (counter > 10180 && counter < 12001)) {
    image(BackgroundRocks, 0, 0); //rocks
    image(PurpleCoralL, 430, 550, coralSize, coralSize); //purple corals 
    image(PurpleCoralR, 1400, 550, coralSize, coralSize);
    DrawCoral([211, 95, 212], [226, 182, 244]);
    DrawCoral([211, 95, 212], [226, 182, 244], 1150, -140);
    DrawCoral([211, 95, 212], [226, 182, 244], 50, 100, 0.5);
    DrawSeaweed(Seaweed);
    image(PinkFish, 800, fishY); // pink fish
  }

  //magic scene
  if ((counter > 2720 && counter < 5601) || (counter > 7400 && counter < 9251) || (counter > 12000 && counter < 14751)) {
    image(MagicBackground, 0, 0);
    DrawCoral([255, 172, 255], [248, 231, 255]); //spinning coral
    DrawCoral([255, 172, 255], [248, 231, 255], 1150, -140);
    DrawCoral([255, 172, 255], [248, 231, 255], 50, 100, 0.5);
    DrawSeaweed(MSeaweed);
    push();
    scale(1.06);
    image(Swirl, 0, swirlY); //swirls :O
    pop();
    image(PinkFish, 800, fishY); // fish

    for (let s = 0; s <= 17; s++) { //circles
      fill(255, 232, 234);
      stroke(255, 232, 234);
      strokeWeight(2);
      ellipse(CircleArrayX[s], CircleArrayY[s], circleSize)
    }

    for (let j = 0; j <= 20; j++) { //shines
      fill(255, 232, 234); //light yellow
      stroke(255, 232, 234);
      strokeWeight(8);

      ellipse(ShineArrayX[j], ShineArrayY[j], shineSize, 5);
      ellipse(ShineArrayX[j], ShineArrayY[j], 5, shineSize); //shine shape
    }

  }

  //still scene
  if ((counter > 5600 && counter < 6451) || (counter > 9250 && counter < 10181)) {
    background(36, 36, 36);
    image(BWBackgroundRocks, 0, 0)
    image(BWPurpleCoralL, 430, 550, coralSize, coralSize); //purple corals 
    image(BWPurpleCoralR, 1400, 550, coralSize, coralSize);
    stroke('white');
    DrawCoral([143, 143, 143], [210, 210, 210]);
    DrawCoral([143, 143, 143], [210, 210, 210], 1150, -140);
    DrawCoral([143, 143, 143], [210, 210, 210], 50, 100, 0.5);
    DrawSeaweed(BWSeaweed);
  }

  //bubbles transition
  if ((counter > 2680 && counter < 2790) || (counter > 5560 && counter < 5680) || (counter > 6410 && counter < 6525) || (counter > 7360 && counter < 7470) || (counter > 9210 && counter < 9335) || (counter > 10140 && counter < 10257) || (counter > 11960 && counter < 12080) || (counter > 14710 && counter < 14820)) {
    for (let b = 0; b < 340; b++) { //spawns the bubble class in at different locations 340 bubbles
      let x = random(width);
      let y = random(height);
      let r = random(10, 70);
      bubbles[b] = new Bubble(x, y, r)
      bubblesInitialized = true;
    }

    for (let b = 0; b < 240; b++) {
      bubbles[b].move();
      bubbles[b].show();
    }

    Ymove3 = Ymove3 - 20; //speed
    if (Ymove3 < -1150) { //after passing this value
      Ymove3 = 1150; //resets to this value
    }
  }

  //bubble code
  for (let i = 0; i <= 20; i++) { //for loop for first wave of bubbles
    noFill();
    stroke(255, 170); //slightly transparent white
    strokeWeight(5);

    ellipse(BubbleArrayX[i], Ymove + BubbleArrayY[i], BubbleArraySize[i]); //bubbles from array
    ellipse(BubbleArrayX[i] * 5, Ymove + BubbleArrayY[i] * 1.5, BubbleArraySize[i] / 2);
    ellipse(BubbleArrayX[i + 2] + 1090, Ymove + BubbleArrayY[i] + 300, BubbleArraySize[i] * 1);
    ellipse(BubbleArrayX[i] + 500, Ymove + BubbleArrayY[i] / 2, BubbleArraySize[i] / 2);
  }
  for (let e = 0; e <= 20; e++) { //for loop for second wave of bubbles
    noFill();
    stroke(255, 170); //slightly transparent white
    strokeWeight(5);

    ellipse(BubbleArrayX[e], Ymove2 + BubbleArrayY[e], BubbleArraySize[e]); //bubbles from array
    ellipse(BubbleArrayX[e] * 5, Ymove2 + BubbleArrayY[e] * 1.5, BubbleArraySize[e] / 2);
    ellipse(BubbleArrayX[e + 2] + 1090, Ymove2 + BubbleArrayY[e] + 300, BubbleArraySize[e] * 1);
    ellipse(BubbleArrayX[e] + 500, Ymove2 + BubbleArrayY[e] / 2, BubbleArraySize[e] / 2);
  }
  //bubble movement
  Ymove = Ymove - 1; //speed of bubble 1st wave
  if (Ymove < -1200) { //if bubbles go past this value
    Ymove = 1380; //resets to this value
  }
  Ymove2 = Ymove2 - 1; //speed of 2nd wave of bubbles
  if (Ymove2 < -1200) {
    Ymove2 = 1380;
  }

  //functions to draw background elements im multiple scenes
  function DrawCoral(coralColour, spikeColour, offsetX = 0, offsetY = 0, size = 1) { //corals with customise options

    //light spike tree coraols
    stroke(spikeColour); //so i can change the colour of coral between scenes
    fill(spikeColour);
    strokeWeight(13);
    push();
    translate(offsetX, offsetY) //to change location of coral
    scale(size) //so i can change the size of different corals
    line(160, 730, 300, 650 + coralLength); //making the lines of the spiked tree coral move to the music
    line(230, 683 + coralLength / 2, 200, 600 + coralLength);
    line(230, 683 + coralLength / 2, 270, 590 + coralLength);
    line(160, 730, 100, 600 + coralLength);
    line(100, 600 + coralLength, 120, 570 + coralLength);
    line(100, 600 + coralLength, 60, 590 + coralLength);
    line(160, 730, 150, 600 + coralLength);
    line(160, 730, 180, 629 + coralLength)
    line(160, 730, 150, 760 + coralLength);
    line(150, 740 + coralLength, 120, 760 + coralLength);
    line(160, 720 + coralLength, 190, 770 + coralLength);
    line(160, 730, 290, 710 + coralLength);
    line(200, 720 + coralLength / 2, 250, 740 + coralLength)
    line(160, 730, 100, 690 + coralLength);
    line(120, 705 + coralLength / 2, 90, 650 + coralLength);
    pop();



    for (let k = 0; k <= 21; k++) { //pink star shaped corals repeats 21 times
      push();
      stroke(coralColour); //change colour between scenes
      fill(coralColour);
      translate(coralArrayX[k], coralArrayY[k]); // location from array
      rotate(spinAmount); //spins the corals to the volume channel
      strokeWeight(8);

      ellipse(0, 0, 5, 90);
      ellipse(0, 0, 90, 5);
      rotate(45)
      ellipse(0, 0, 5, 90);
      ellipse(0, 0, 90, 5);
      pop();
    }

    //seaweed

  }

  function DrawSeaweed(SeaweedType) { //seaweed can change colour
    let seaweedFrame = int(map(other, 0, 100, 0, 3));
    console.log(seaweedFrame);
    push();
    image(SeaweedType[seaweedFrame], 0, 0);
    pop();
    //animateds seaweed frame by frame with the volume channel

  }
}