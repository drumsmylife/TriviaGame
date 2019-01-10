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
               


//counter variables
var isCorrect = false;
var questionCnt = 0;
var time = 0;
var numberCorrect = 0;
var numberWrong = 0;

//used to reset time
var interval;


//functions
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
                break;
            case 1: 
                l="b: ";
                break;
            case 2:
                l="c: ";
                break;
            case 3:
                l="d: ";
                break;

        }
        
         p+= "<div>"+ l +a[i]+ "</div>";
    }
    $('#answers').html(p);

}
