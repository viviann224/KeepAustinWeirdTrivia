// jason.png mrntl.png rodeoaustin.png muller.png 
// ut.png cosmic.png greenbelt.png oasis.png toms.png townlake.png
//class Questions
//the class contains the variables for the Trivia.question()
// and Trivia.display() method
//Questions contains an array of questions, options, answers, and a display
var Questions=[{
	"question": "Where is the \"I LOVE YOU SO MUCH\" mural located?",
	"option1": "Joe's Coffee",
	"option2": "Home Slice",
	"option3": "Whole Foods",
	"answer": "1",
	"display" :"Joe's Coffee"
},
{
	"question": "What is Austin known for?",
	"option1": "Apple City",
	"option2": "Windy City",
	"option3": "Music Capital",
	"answer": "3",
	"display" :"Music Capital"
},

{
	"question": "Lady Bird Lake is also known as?",
	"option1": "Birdman Lake",
	"option2": "Town Lake",
	"option3": "Marathon Runner Lake",
	"answer": "2",
	"display" :"Town Lake"
},


];
//class trivia 
var Trivia=
{
	triviaq: ["q1", "q2", "q3"],
	answer: ["a1", "a2", "a3"],
	solution: ["a1", "a2", "a3"],
	x:0,
	correct:0,
	incorrect:0,
	unanswered:0,
	time: 5,
	intervalId:0,
	isNoTime:false,
	isDone:false,

//start timer
//if timer is not running, lets start the timer.
startTime: function()
{
	if(!Trivia.isNoTime)
	{
		//the interval will be counted by seconds
		Trivia.intervalId=setInterval(Trivia.count, 1000);
		//set the timer to run state.
		Trivia.isNoTime=true;
	}
},

//timeout function stops timer
timeout: function()
{
	//set the state off
	Trivia.isNoTime=false;
	//clear the time
	clearInterval(Trivia.intervalId);
},

//reset function resets the timer back to 5 seconds
reset: function()
{
	//set the timer count back to 5 seconds
	Trivia.time=5;
},
	
		
//count function
//is the count down function for each question
//if the user does not answer within 5seconds
//the method accounts for unanswered unanswered questions
//if out of time, displays user ran out of time, and goes to display() function
count: function()
{
	//count down by decreasing time
	Trivia.time--;
	//display the time
	$("#time").text("Time left: "+(Trivia.time+1)+" sec");
	//check if the user ran out of time
	if(Trivia.time==0&& Trivia.x<Trivia.triviaq.length)
	{
		//if out of time, display message
		$("#solution").html("You ran out of time!!");
		//go to display function to see see the answer
		Trivia.display();
	}
},
	
//start fx
 start: function() 
 {
 	console.log("start fx");
 	Trivia.x=0;
 	console.log(Trivia.x);
 	Trivia.correct=0;
	Trivia.incorrect=0;
	Trivia.unanswered=0;
	intervalId=0;
	//clearInterval(intervalId);
	isNoTime=false;
	Trivia.isDone=false;
	//Trivia.timeout();
	$("#start").empty();
	$("#solution").empty();
	$("#validate").empty();
	$("#answer").empty();
	$("#time").empty();
	$("#question").empty();
	$("#buttons").hide();
	$("#start").append("<button class='click'>START</button>");

	//click start button to begin
	//zero out: index x, correct, incorrect, and noans
	//clear out display
	console.log("start fx");
},


question: function()
{
	if(Trivia.x<Trivia.solution.length)
	{

		$("#buttons").show();
		var result;
	$("#validate").empty();
	$("#solution").empty();
	$("#start").empty();
	$("#answer").empty();
	console.log("inside question fx");
	Trivia.timeout();
	Trivia.reset();
	Trivia.startTime();

	var opt1=document.getElementById('opt1');
	var opt2=document.getElementById('opt2');
	var opt3=document.getElementById('opt3');

	$("#question").html("<h3>"+Questions[Trivia.x].question+"</h3>");
	$("#opt1").html(Questions[Trivia.x].option1);
	$("#opt2").html(Questions[Trivia.x].option2);
	$("#opt3").html(Questions[Trivia.x].option3);
	//question fx

	

}
else
{
	Trivia.end();
}
},

//display function
display: function()
{
	$("#buttons").hide();
	console.log(Trivia.correct);
	console.log(Trivia.incorrect);
	console.log(Trivia.unanswered);
	//if the index is less than the length of the solution

	if(Trivia.x<Trivia.solution.length)
	{
		//check if the user still has time
		if(Trivia.time<=0)
		{
			//if time ran out, display message and update unanswered counter
			console.log("you ran out of time");
			Trivia.unanswered++;
		}
		//stop timer
		Trivia.timeout();
	//clear the display, questions, and answer
	$("#display").empty();
	$("#question").empty();
	$("#answer").empty();
	$("#start").empty();
	console.log("display fx");

	//display the solution
	$("#answer").html("The ANSWER IS: "+Questions[Trivia.x].display);
	//update the counter index
	Trivia.x++;
	//show the solution for 2 seconds and go to the next question
	console.log("waiting 1 s then go to next q");
	setTimeout(Trivia.question,  1000*2);
	console.log("waiting on 1s");
	}
	else
	{
		//if the index is greater than the length of the solution.
		//run the end function to finish the game 
		Trivia.end();
	}

	console.log(Trivia.correct);
	console.log(Trivia.incorrect);
	console.log(Trivia.unanswered);
},

//end function clears out the answer and solution, stops and resets the timer,
//display the game is over, shows the results, and has a button to restart the game 
end: function() 
{
;
	//clear the answer and solution
	$("#answer").empty();
	$("#solution").empty();
	$("#time").empty();
	$("#start").empty();
	$("#question").empty();
	//stop the timer
	Trivia.timeout();
	//reset the timer
	Trivia.reset();
	//display finish game msg
	//and display correct, incorrect, unanswered
	$("#validate").html("<h3>YOU ARE DONE PLAYING</h3>"+"<br>Correct: "
		+Trivia.correct+"<br>Incorrect: "+Trivia.incorrect
		+"<br>Unanswered: "+Trivia.unanswered+"<br><br>");
	Trivia.isDone=true;
	//button to start option
	//Trivia.start();
	$("#validate").append("<br><button class='click'>RESTART</button>");
	//click startover button
	console.log("end fx");
	console.log("click on button to play again");

},



};

$("#start").on("click", function()
	{
		$("#start").empty();
		
		console.log("clicked start!");
		Trivia.question();

	});

$("#validate").on("click", function()
	{
		$("#validate").empty();
		
		console.log("clicked start!");
		//Trivia.isDone=false;
		if(Trivia.x<Trivia.solution.length)
		{
			Trivia.question();
		}
		else
		{
			Trivia.start();
		}
		

	});

$(".options").on("click", function()
	{
		console.log("button!");
		console.log("my val: "+ $(this).val());
		result=parseInt(Questions[Trivia.x].answer);
		console.log(result);
		if( ($(this).val())==(result))
		{
			console.log("youguessedright!");
			$("#solution").html("You GUESSED correct!!");
			//display correct ans
			
			//update correct counter
			Trivia.correct++;
			//update index x
			//Trivia.x++;
			Trivia.reset();
			
		}
		else 
		{
			//display not correct ans
			$("#solution").html("You guessed WRONG :( !!");
			//update incorrect counter
		
			Trivia.incorrect++;
			//update index, x
			//Trivia.x++;
			Trivia.reset();
		}
		$(".options").empty();
		Trivia.display();

	});



Trivia.start();
//Trivia.display();
//Trivia.end();
//Trivia.question();


console.log(typeof(Trivia.x));
console.log(Questions[0].option1);
console.log(Questions[0].option2);
console.log(Questions[0].option3);
console.log(Questions[0].answer);

console.log(Questions[1].question);
console.log(Questions[1].option1);
console.log(Questions[1].option2);
console.log(Questions[1].option3);
console.log(Questions[1].answer);

