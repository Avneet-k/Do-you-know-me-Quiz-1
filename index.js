var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

console.log(chalk.cyan.bgBlueBright("  Let's find out how well you know me!!! 🙈  \n"));
var userName = readlineSync.question(chalk.whiteBright("  Please enter your name:  "));

console.log("\nHi " + chalk.red.underline(userName) + " ❤️  Get ready for the quiz.");
console.log(chalk.cyanBright("Enter a/ b/ c for each question to answer. For each correct answer you will get 10 points.\n"));

// play function
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log(chalk.green("Congo!! You are right:)🎉"));
    score = score+10;
  }else{
    console.log(chalk.red("Oops!! You are wrong:("));
  }
  console.log(chalk.yellowBright("Your current score is: " +score ));
  console.log(chalk.whiteBright("\n-----------------------\n"));
};
// array of objects
var allquestions = [{
  question : "1. What is my nickname? \na.Avu \nb.Nice \nc.Avi\n ",
  answer : "b"
},{
  question : "2. What is my favorite season? \na.Winter \nb.Summer \nc.Autumn\n ",
  answer : "a"
},{
  question : "3. Which movie is my favorite one? \na.Jumanji \nb.Harry potter \nc.Anabelle\n ",
  answer : "c"
},{
  question : "4. Which food i like the most?\na.Pav bhaji\nb.Dosa \nc.Noodles\n ",
  answer : "a"
},{
  question : "5. Which is my favourite color?\na.Black \nb.Skyblue \nc.Blue \n",
  answer : "a"
},{
  question : "6. Who is my favorite singer?\na.Arijit singh \nb.justin bieber \nc.A.R rehmaan\n ",
  answer : "b"
},{
  question : "7. What would i prefer?\na.Tea \nb.Coffee \nc.Cold-Coffee\n ",
  answer : "b"
},{
  question : "8. What type of songs do i like? \na.Indie \nb.Lofi \nc.Hip-Hop\n ",
  answer : "b"
},{
  question : "9. Which best describes my style? \na.Funky \nb.elegant \nc.Simple\n ",
  answer : "b"
},{
  question : "10. Who is my favorite actor? \na.Amir Khan \nb.SRK \nc.Ranveer singh \n",
  answer : "b"
}]
var highScores=[
  {name:"Samar",   topScore:60},
  {name:"Anu",     topScore:70},
  {name:"Jasleen", topScore:60}
]

// loop
 for(var i=0; i<allquestions.length; i++){
   var currentquestion = allquestions[i];
   play(currentquestion.question, currentquestion.answer);
 }

//  final score
console.log(chalk.blueBright("YAY!! YOUR TOTAL SCORE IS: " +score));

// posting the leaderboard
console.log(chalk.keyword("orange").bold("\n*****Check out Leaderboard*****"));
printScoreBoard(highScores);

// camparing score with highscores
var scoreBeaten = false;
var indexInsert = 0;
for (var i=0;i<highScores.length;i++){
  if(score>highScores[i].topScore){
    scoreBeaten = true;
    indexInsert =i;
    highScores.splice(indexInsert,0,{name:`${userName}`, topScore :`${score}`});
    break;
  }
}

console.log('-----------------------');

// print if score is beaten
if(scoreBeaten){
  console.log(chalk.bold.keyword("pink")("Congratulations "+userName+" 🥳 , you are my best friend 😍"));
  console.log(chalk.keyword('orange').bold("\n*****Updated Leaderboard*****"));
  printScoreBoard(highScores);
  console.log("\nDo Send me the screenshot of your final score so that I can update the actual scoreboard ❤️\n\n\n\n")
}else{
  console.log(chalk.bold.keyword("pink")("Sorry "+userName+", you were so close to be my best friend 🙃"));
}

// function to print leaderboard
function printScoreBoard(highScores){
  for(var i=0;i<highScores.length;i++){
  console.log(chalk.keyword("orange")(highScores[i].name+" : "+highScores[i].topScore));
  }
}

