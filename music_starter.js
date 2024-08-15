
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  

  let fillSize = map(other,0,100,4,30);
  let bubbleSize = map(bass,50,100,10,30);
  let shineSize = map(vocal, 0, 100, 5, 100);

  for(let i = 1; i < 6; i++){
    let bubbleX = i*12;
    let bubbleY = i*30;
    noFill(); 
    stroke(245, 203, 245);
    strokeWeight(1.4);
    ellipse(bubbleX + 80, bubbleY + 10, fillSize, fillSize);  
  }


 
  // ellipse(140, 19, fillSize, fillSize); 
  // ellipse(30, 155, fillSize, fillSize); 
  // ellipse(75, 183, fillSize, fillSize);
  // ellipse(90, 20, fillSize, fillSize); 
  // ellipse(14, 130, fillSize, fillSize); 

  // noFill(); 
  // stroke(245, 203, 245);
  // strokeWeight(1.4);

  // ellipse(116, 37, bubbleSize, bubbleSize); 
  // ellipse(165, 47, bubbleSize, bubbleSize); 
  // ellipse(100, 80, bubbleSize, bubbleSize);
  // ellipse(30, 130, bubbleSize, bubbleSize);


  // fill(245, 203, 245);
  // stroke(245, 203, 245);
  // ellipse(80, 130, shineSize, 2);
  // ellipse(80, 130, 2, shineSize);
  // ellipse(150, 160, shineSize, 2);
  // ellipse(150, 160, 2, shineSize);
  // ellipse(50, 40, shineSize, 2);
  // ellipse(50, 40, 2, shineSize);
}

