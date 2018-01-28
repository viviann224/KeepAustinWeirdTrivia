
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
	
		
//count fx
count: function()
{
	Trivia.time--;
	$("#time").text(Trivia.time);
},
	

//start fx
 start: function() 
 {
 	x=0;
 	correct=0;
	incorrect=0;
	unanswered=0;
	intervalId=0;
	isNoTime=false;
	$("#start").empty();
	$("#solution").empty();
	$("#validate").empty();
	$("#answer").empty();
	$("#time").empty();
	$("#question").empty();
	$("#start").append("<button>START</button>");

	$("#start").on("click", function()
	{
		$("#start").empty();
		console.log("clicked!");
		Trivia.question();

	});


	
	//click start button to begin
	//zero out: index x, correct, incorrect, and noans
	//clear out display
	console.log("start fx");
},

end: function() 
{
	//end fx
	//display done msgs
	//display correct, incorrect, unanswered
	//click startover button
	console.log("end fx");
},


timeout: function()
{
	setTimeout(display, 1000 * 5);
	Triva.isNoTime=true;

},
question: function()
{
	intervalId=setInterval(Trivia.count, 1000);

	//console.log(Trivia.triviaq[0]);
	$("#question").html("<h2>Question"+(Trivia.x+1)+": "+Trivia.triviaq[0]+"</h2>");
	//question fx
	$("#answer").html(Trivia.answer[x]+"<br>"+Trivia.answer[x+1]+"<br>"+Trivia.answer[x+2])
	//timer starts
	//display question[x]
	//console.log(intervalId);
	

	

	$("#answer").on("click", function()
	{
		//console.log(answer[$(this)]);
		if(answer[$(this)]==solution[Trivia.x])
		{
			$("#solution").html("You GUESSED correct!!");
			//display correct ans
			$("#answer").html(solution[Trivia.x]);
			//update correct counter
			Trivia.correct++;
			//update index x
			Trivia.x++;
			setTimeout(function(){ question; }, 3000);
		}
		else if( answer[$(this)]!=solution[Trivia.x])
		{
			//display not correct ans
			$("#solution").html("You WRONG :( !!");
			//update incorrect counter
			$("#answer").html(solution[Trivia.x]);
			Trivia.incorrect++;
			//update index, x
			Trivia.x++;
		}
		

	});
},


display: function()
{
	//display fx
	console.log("display fx");

	//display out of time
	$("#solution").html("You ran out of time!!");
	//update unanswered counter
	$("#answer").html(solution[Trivia.x]);
	Trivia.unanswered++;
	Trivia.x++;
	setTimeout(function(){ question; }, 3000);
},

};

Trivia.start();
//Trivia.end();
//Trivia.question();
//Trivia.display();



