// create question variables
var question = [
        'What band plays all the small things ?',
        'Who is the captain of the Chicago Blackhawks ?',
        'Who scored the stanley cup winning goal for the Blackhawks in 2010 ?',
        'Who is the drummer for Blink-182 ?',
        'What movie is this quote from ? "Tonight we are the greatest hockey team in the world',
        'Name this song by the lyrics. "when I was a young boy my father took me into the city"'
        ];

var answer =
[
    ['sum 41','green day','all american rejects','blink-182'],          
    ['jonathon quick','jonathon tavares','jonathon toews','johnny bravo'],
    ['patrick kane','brent seabrook','duncan keith','dustin byfuglien'],
    ['dave grohl','neil peart','travis barker','tre cool'],
    ['slap shot','miracle', 'mighty ducks','goon'],
    ['helena', 'under and over it', 'teenagers', 'welcome to the black parade']
];

var correctAnswers = 
[
    'd',
    'c',
    'a',
    'c',
    'b',
    'd'
];
               


//counter variables
var isCorrect = false;
var questionCnt = 0;
var timeLeft = 0;
var numberCorrect = 0;
var numberWrong = 0;

//functions l= label
function gameStart() {
    //hide start button
    $('#startButton').hide();
    var q= question[0];
    $('#questions').html(q);
    var a= answer [0];
    var p=""
    for (var i = 0;i<a.length;i++){
        switch(i){
            case 0:
                l="a: ";
                id="a";
                break;
            case 1: 
                l="b: ";
                id="b";
                break;
            case 2:
                l="c: ";
                id="c";
                break;
            case 3:
                l="d: ";
                id="d";
                break;

        }
         radiobutton="<input id="+id+" onclick='checkAnswer(this,0);' type=radio name=answer/>";
         p+= "<div>"+ radiobutton + l +a[i]+ "</div>";
    }
    $('#answers').html(p);

    //execute run function
   run();

}

var number = 10;

//  Variable that will hold our interval ID when we execute
//  the "run" function


//  When the start button gets clicked, run the clock.
window.onload = function() {
    $("#startButton").on("click", run);
};

var intervalId;

function checkAnswer(rb,question) {
    console.log(rb.id);
    console.log(question);
    if(rb.id===correctAnswers[question]) {
        alert("Correct");
    } else {
        alert("Wrong.");
    }
}

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #timeLeft tag.
  $("#timeLeft").html("<h2>" + number + "</h2>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}
