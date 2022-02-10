const questionarre = [
    {
        question: "CSS Stands for ? ",
        answer: {
            a: "Cascading style sheets",
            b: "Cascade styling sheets",
            c: "Cascading sheet styles",
            d: "Cascade style sheet"

        },
        correctAnswer: "a"
    },
    {
        question: "Function to insert an new element in an array ? ",
        answer: {
            a: "push",
            b: "join",
            c: "pop",
            d: "map"

        },
        correctAnswer: "a"

    },
    {
        question: "Method to represent string representation of a number's value? ",
        answer: {
            a: "toValue()",
            b: "toNumber()",
            c: "toString()",
            d: "toBoolean()"

        },
        correctAnswer: "c"

    },
    {
        question: "What does 'this' keyword points to? ",
        answer: {
            a: "Current object",
            b: "Global object",
            c: "Variable",
            d: "None of above"

        },
        correctAnswer: "a"

    },
    {
        question: "Math.round( -20.51 )=? ",
        answer: {
            a: "20",
            b: "-21",
            c: "19",
            d: "-19"

        },
        correctAnswer: "b"

    }
]
var i, id;
var score = 0;
var userans = [];
var shuffle = [];
var selectedId = '';

$(".start").click(function () {
    $(".intro").addClass("hide");
    displayques();

});
$(".next").click(function () {

    displayques();

});

$(".width").click(function () {
    userans[i] = $(this).attr("id");
    animatePress($(this).attr("id"));
});


function displayques() {
    if (selectedId)
        $("#" + selectedId).removeClass("selected");
    if (shuffle.length < questionarre.length) {
        i = Math.floor(Math.random() * questionarre.length);
        if (shuffle.includes(i)) {
            displayques();

        }
        else {

            clearInterval(id);
            settimer();
            shuffle.push(i);
            $(".QuizContainer").removeClass("hide");
            $(".Question").text(questionarre[i].question);
            $("#a").text(questionarre[i].answer.a);
            $("#b").text(questionarre[i].answer.b);
            $("#c").text(questionarre[i].answer.c);
            $("#d").text(questionarre[i].answer.d);
        }
    }
    else {
        $(".QuizContainer").addClass("hide");
        EvaluateResult();


    }

}
function EvaluateResult() {
    score = 0;
    for (i = 0; i < questionarre.length; i++) {
        if (userans[i] == questionarre[i].correctAnswer) {
            score = score + 1;
        }
    }
    printscore();
};

function printscore() {
    $(".score").removeClass("hide");
    total = "Congrats on Completing this small quiz. Your total Score is " + score + "/" + questionarre.length;
    $("p").text(total);
    $(".start-again").removeClass("hide");
    $(".start-again").click(start_over);
};
function start_over() {

    i = 0;
    score = 0;
    userans = [];
    shuffle = [];
    $(".score").addClass("hide");
    clearInterval(id);
    $('#clock').text(10)
    displayques();

};
function animatePress(idd) {
    console.log(idd)
    if (selectedId) {
        console.log(selectedId)
        console.log("yess")
        $("#" + selectedId).removeClass("selected");
    }

    $("#" + idd).addClass("selected");
    selectedId = idd;
}
function settimer() {
    var timeleft = 10;

    if (shuffle.length <= 1) {
        timeleft = 9;
    }
    id = setInterval(function () {

        if (timeleft > 0)
            $('#clock').text(timeleft--);


        else {
            clearInterval(id);
            displayques();

        }

    }, 1000);



}