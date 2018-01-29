//Vivian Nguyen
//Assignment 5: Trivia Game


//class Questions
//the class contains the variables for the Trivia.question()
// and Trivia.display() method
//Questions contains an array of questions, options, answers, a display,
//and images
var Questions=[{
	"question": "What is this major player at the Austin Farmer's Market?",
	"option1": "Jason's Backyard Garden",
	"option2": "Home Slice",
	"option3": "Whole Foods",
	"answer": "1",
	"display" :"Jason's Backyard Garden",
	"image": "assets/images/jasons.png"
},

{
	"question": "Which one was one of the first vegetarian resturant?",
	"option1": "Taco Deli",
	"option2": "Franklin's",
	"option3": "Mr. Natural",
	"answer": "3",
	"display" :"Mr. Natural",
	"image": "assets/images/mrntl.png"
},

{
	"question": "Which Rodeo the largest Rodeo in Austin?",
	"option1": "Houston Rodeo",
	"option2": "Rodeo Austin",
	"option3": "Texas State Fair",
	"answer": "2",
	"display" :"Rodeo Austin",
	"image": "assets/images/rodeoaustin.png"
},

{
	"question": "I am a new and up and coming area, I am so cool, the Thinkery decided to follow me?",
	"option1": "The Drag",
	"option2": "Muller Park",
	"option3": "Arboredum",
	"answer": "2",
	"display" :"Muller Park",
	"image": "assets/images/muller.png"
},

{
	"question": "What bleeds burnt orange?",
	"option1": "The University of Texas at Austin",
	"option2": "Texas State",
	"option3": "Baylor University",
	"answer": "1",
	"display" :"The University of Texas at Austin",
	"image": "assets/images/ut.png"
},

{
	"question": "If you are into the BBQ and food truck scene, LeRoy & Luis shares my space?",
	"option1": "Joe's Coffee",
	"option2": "The Infinite Monkey Theorem",
	"option3": "Cosmic Coffee + Beer Garden",
	"answer": "3",
	"display" :"Cosmic Coffee + Beer Garden",
	"image": "assets/images/cosmic.png"
},

{
	"question": "It takes about 8 miles to complete the Hike in the Barton Creek area, who am I?",
	"option1": "Town Lake",
	"option2": "Wild Basin Wilderness Preserve",
	"option3": "The Greenbelt",
	"answer": "3",
	"display" :"The Greenbelt",
	"image": "assets/images/greenbelt.png"
},

{
	"question": "You come for the Great view, the Tex-mex is average, I am a typical tourist trap?",
	"option1": "The Oasis",
	"option2": "Mozart's Roasters",
	"option3": "The Trail of Lights",
	"answer": "1",
	"display" :"The Oasis",
	"image": "assets/images/oasis.png"
},

{
	"question": "Where do you go to see the bats in Austin?",
	"option1": "Town Lake Austin",
	"option2": "Domain Austin",
	"option3": "Rainey Street",
	"answer": "1",
	"display" :"Town Lake Austin",
	"image": "assets/images/townlake.png"
},

{
	"question": "I might not be an Austin Original, but everyone loves my shoes (& maybe coffee), who am I?",
	"option1": "Town Lake Austin",
	"option2": "TOMS Roasting Co",
	"option3": "LAZARUS BREWING",
	"answer": "2",
	"display" :"TOMS Roasting Co",
	"image": "assets/images/toms.png"
},
];

//class trivia 
var Trivia=
{
	//represents index 
	x:0,
	//counter for correct answer
	correct:0,
	//counter for incorrect answers
	incorrect:0,
	//counter for unanswered answers
	unanswered:0,
	//time in second for each question
	time: 5,
	//inverval which the counter counts 
	intervalId:0,
	//the state of the timer (currently off)
	isNoTime:false,
	//variable to determine if game is done
	isDone:false,

//start timer function
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
//if out of time, displays user ran out of time, 
//and goes to display() function
count: function()
{
	//count down by decreasing time
	Trivia.time--;
	//display the time
	$("#time").text("Time left: "+(Trivia.time+1)+" sec");
	//check if the user ran out of time
	if(Trivia.time==0&& Trivia.x<Questions.length)
	{
		//if out of time, display message
		$("#solution").html("You ran out of time!!");
		//go to display function to see see the answer
		Trivia.display();
	}
},
	
//start fx
//start function is the initial values
 start: function() 
 {
 	//index to 0
 	Trivia.x=0;
 	//counters to 0
 	Trivia.correct=0;
	Trivia.incorrect=0;
	Trivia.unanswered=0;
	//disable the interval
	intervalId=0;
	//stop time
	isNoTime=false;
	//set to not done
	Trivia.isDone=false;
	//clear information on html
	$("#start").empty();
	$("#solution").empty();
	$("#validate").empty();
	$("#answer").empty();
	$("#time").empty();
	$("#question").empty();
	$("#buttons").hide();
	$("#images").hide();
	//add a start button to start
	$("#start").append("<button class='click'>START</button>");
},

//question function displays the class of object array
question: function()
{
	//check if there is another index, if you are at the end 
	//go to end() function
	if(Trivia.x<Questions.length)
	{
		//hide the image
		$("#images").hide();
		//display the options
		$("#buttons").show();
		//clear out other displays
		var result;
		$("#validate").empty();
		$("#solution").empty();
		$("#start").empty();
		$("#answer").empty();
		//stop, reset, then start the timer
		Trivia.timeout();
		Trivia.reset();
		Trivia.startTime();
		//set the options for each question
		var opt1=document.getElementById('opt1');
		var opt2=document.getElementById('opt2');
		var opt3=document.getElementById('opt3');
		//display the options
		$("#question").html("<h3>"+Questions[Trivia.x].question+"</h3>");
		$("#opt1").html(Questions[Trivia.x].option1);
		$("#opt2").html(Questions[Trivia.x].option2);
		$("#opt3").html(Questions[Trivia.x].option3);
}
else
{
	//if no more qustions go to the end() function
	Trivia.end();
}
},

//display function
//displays the results
//checks either if the answer is the correct, incorrect, or unanswered
//answer, then displays the correct answer with associated image
display: function()
{
	//hide the button
	$("#buttons").hide();
	//if the index is less than the length of the solution
	if(Trivia.x<Questions.length)
	{
		//check if the user still has time
		if(Trivia.time<=0)
		{
			//if time ran out, display message and update unanswered counter
			Trivia.unanswered++;
		}
		//stop timer
		Trivia.timeout();
	//clear the display, questions, and answer
	$("#display").empty();
	$("#question").empty();
	$("#answer").empty();
	$("#start").empty();
	//display the solution
	$("#answer").html("The ANSWER IS: "+Questions[Trivia.x].display);
	//display image
	$("#images").show();
	$("#images").html("<img src='"+Questions[Trivia.x].image+"' class='img'>")
	//show the solution for 2 seconds and go to the next question
	//update the counter index
	Trivia.x++;
	setTimeout(Trivia.question,  1000*2);
	}
	else
	{
		//if the index is greater than the length of the solution.
		//run the end function to finish the game 
		Trivia.end();
	}
},

//end function clears out the answer and solution, stops and resets the timer,
//display the game is over, shows the results, and has a button to restart the game 
end: function() 
{

$("#images").hide();
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
	$("#validate").append("<br><button class='click'>RESTART</button>");
},
};

//if the user clicks on the start button, then start the questions
$("#start").on("click", function()
	{
		//clear out the start button
		$("#start").empty();
		//call the question() function
		Trivia.question();
	});

//if the user clicks on the restart buttion
$("#validate").on("click", function()
	{
		//clear out the restart button
		$("#validate").empty();
		//check if all the questions are asked, 
		//if not ask another question
		if(Trivia.x<Questions.length)
		{
			Trivia.question();
		}
		//else go to the start option
		else
		{
			//calling start() function
			Trivia.start();
		}
	});

//if user click on option then check if the option matches the answer
$(".options").on("click", function()
	{
		result=parseInt(Questions[Trivia.x].answer);
		//if your answer matches 
		if( ($(this).val())==(result))
		{
			$("#solution").html("You GUESSED correct!!");
			//display correct ans
			//update correct counter
			Trivia.correct++;
			//reset the time
			Trivia.reset();
		}
		//you picked the wrong ans
		else 
		{
			//display not correct ans
			$("#solution").html("You guessed WRONG :( !!");
			//update incorrect counter
			Trivia.incorrect++;
			//reset the timer
			Trivia.reset();
		}
		//clear out the options
		$(".options").empty();
		//then call the display to show the results
		Trivia.display();
	});
//calling the start function to start the game when page loads
Trivia.start();
