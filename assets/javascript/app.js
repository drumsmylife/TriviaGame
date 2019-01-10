// create question variables
var questions = 
{
    q1:  ['What band plays all the small things ?'],
    q2:  ['Who is the captain of the Chicago Blackhawks ?'],
    q3:  ['Who scored the stanley cup winning goal for the Blackhawks in 2010 ?'],
    q4:  ['Who is the drummer for Blink-182 ?'],
    q5:  ['What movie is this quote from ? "Tonight we are the greatest hockey team in the world'],
    q6:  ['Name this song by the lyrics. "when I was a young boy my father took me into the city"'],
};

var answers =
{
    answers1: [{a: 'sum 41',
                b: 'green day',
                c: 'all american rejects',
                d: 'blink-182' //correct
                }],
    
    answers2: [{a: 'jonathon quick',
                b: 'jonathon tavares',
                c: 'jonathon toews', //correct
                d: 'johnny bravo'
                }],

    answers3: [{a: 'patrick kane',//correct
                b: 'brent seabrook',
                c: 'duncan keith',
                d: 'dustin byfuglien'
                 }],

    answers4: [{
                a: 'dave grohl',
                b: 'neil peart',
                c: 'travis barker', //correct
                d: 'tre cool'
                }],

    answers5: [{
                a: 'slap shot',
                b: 'miracle',
                c: 'mighty ducks',
                d: 'goon'
                }],

    answers6: [{
                a: 'helena',
                b: 'under and over it',
                c: 'teenagers',
                d: 'welcome to the black parade' //correct
                }]
};

//counter variables
var isCorrect = false;
var questionCnt = 0;
var time = 0;
var numberCorrect = 0;
var numberWrong = 0;

//used to reset time
var interval;

//start button
var button= document.createElement(button);
button.innerHTML = "startBtn";

//functions
function gameStart()
{
    $('.startBtn').on('click',function()
    {
    //hide start button
    $('.startBtn').hide();
    
    timeCount();
    question1()
    chooseCheckAnswer();
    });

}
function timeCount()
{


}
