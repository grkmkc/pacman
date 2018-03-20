var pad_one, pad_two;
var p0v, p1v;   //paddles velocity
var pong, pongv;
var p1score, p2score;

function setup() {
    createCanvas(800,600);
    pad_one = height/2-60;
    pad_two = height/2-60;

    p0v =0;
    p1v =0;

    p1score = p2score = 0;

    pong = createVector(width/2, height/2);
    pongv = createVector(random(5), random (5));

    textAlign(CENTER);
    textSize(30);
    fill(0, 200 , 150);


  }

function draw() {
    background(25);
    
    /*draw padlle one and two  */

    rect(20, pad_one, 10, 100);
    rect(width- 40, pad_two, 10, 100);
    
    /*draw ball */
    ellipse(pong.x, pong.y, 20);



  /*draw scoreboard */

    text(p1score + " | " + p2score, width/2, 50);

   
    /*for keyboard inputs */

    handlePads();

    handlePong();
  }
  function handlePong() { 
      /*top-bottom collision */
    if (pong.y > height || pong.y < 0)
      pongv.y *= -1;
    
      /*paddle collision */
      if (pong.x < 30) {  //right side 

        if (pong.x <= 10){
          p2score++;
          reset();

        }

      if (pong.y >= pad_one && pong.y <= pad_one + 100)
          pongv.x *= -1;

      } else if (pong.x > width - 30) { // left side 

        if(pong.x >= width - 20){
          p1score++;
          reset();
          return;
        }

        if (pong.y >= pad_two && pong.y <= pad_two + 100)
          pongv.x *= -1;

      
}
    pong.x += pongv.x;
    pong.y += pongv.y;


   }

  function reset() {  
    pong = createVector (width / 2, height / 2);
  } 

  function handlePads() {  

     /*player one  */
    /*moveup  W*/
     if (keyIsDown(83)){
    /*movedown  S*/

      p0v += 10;
    } else if (keyIsDown(87)){
      p0v -= 10 ;
    }
  
/*player two */

/*moveup  Arrows*/
  if (keyIsDown(DOWN_ARROW)){
/*movedown */
    p1v += 10;

  } else if (keyIsDown(UP_ARROW)){
    p1v -= 10;
  }
      /*for movement reality */
      p0v *= 0.4;
      p1v *= 0.4;

      pad_one += p0v;
      pad_two += p1v;


    /* now the boundaries */
    pad_one = constrain(pad_one, 0, height - 100);
    pad_two = constrain(pad_two, 0, height - 100);

}