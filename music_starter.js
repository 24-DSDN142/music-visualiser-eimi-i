var BubbleArrayX = [50, 100, 300];
var BubbleArrayY = [100, 800, 200];
var ShineArrayX = [500, 300, 800];
var ShineArrayY = [130, 1000, 300];
var StarArray = [];
var fishX = 1
var fishY = 0
// var
// var

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // background(22, 23, 49);
  background(23, 31, 87);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let fillSize = map(other, 0, 100, 4, 30);
  let bubbleSize = map(bass, 0, 100, 50, 90);
  let shineSize = map(vocal, 0, 100, 5, 100);
  let sparkleSize = map(drum, 0, 100, 5, 100);
  let fishY = map(bass, 0, 100, 5, 100);

  //scene changes!!
  // if (counter); //i need to make 4 different scenes start/end, build up, magic, still and have 9 changes between these scenes 
  if (counter > 0 && counter < 901) { //start and end
    DrawFish();
    //corals

  }

  if (counter > 900 && counter < 2701) { //build up (add swirl and keep bubbles and corals just change colour pallette to colours)
    fill('black')
    ellipse(100, 100, 100, 100)
    DrawFish();
    //swirls //should only appear at certain parts of song and should be moving around

  }

  if (counter > 2700 && counter < 5401) { //magic
    background(63, 52, 101);
    DrawFish();
    //swirls //should only appear at certain parts of song and should be moving around
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

  if (counter > 5400 && counter < 7500) { //still change colour pallette to monochrome)
    background(62, 62, 62);
    stroke('white');

  }

  //background elements!!
  //bubbles //the bubbles should be moving up the page
  noFill();
  stroke(208, 243, 240); //light blue
  strokeWeight(7);
  ellipse(BubbleArrayX[0], BubbleArrayY[0], bubbleSize * 2);
  ellipse(BubbleArrayX[1], BubbleArrayY[1], bubbleSize);
  ellipse(BubbleArrayX[2], BubbleArrayY[2], bubbleSize / 2);

  for (let i = 1; i < 100; i++) { //for loop to make small bubbles around the page
    let bubbleX = i * 800;
    let bubbleY = i * 300;
    noFill();
    stroke(245, 203, 245);
    strokeWeight(4);
    ellipse(bubbleX + 80, bubbleY + 10, fillSize, fillSize);
  }

  //make a for loop to move the bubbles up the page in an loop


  //main elements!!
  //Fish (have a png that moves up and down)
  function DrawFish(fishX, fishY) {
    stroke(208, 243, 240);
    strokeWeight(2.5);
    fill(208, 243, 240);
    beginShape();
    vertex(720, 504);
    bezierVertex(936, 444, 1071, 588, 1126, 823);
    bezierVertex(952, 622, 658, 633, 715, 510);
    vertex(720, 504)
    endShape(CLOSE);
    beginShape();
    vertex(768, 598);
    bezierVertex(806, 686, 654, 652, 806, 810);
    bezierVertex(728, 678, 892, 650, 764, 600);
    endShape();
  }

}