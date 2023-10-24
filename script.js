const quiz = [
  {
    question:
      "Which club is the most successful in the tournament's history, having won it 13 times?",
    answer: "Real Madrid"
  },
  {
    question:
      "Three managers have won the Champions League (or European Cup) three times, can you name them?",
    answer:
      "Zinedine Zidane (2016, 2017, 2018, with Real Madrid), Bob Paisley (1977, 1978 and 1981 with Liverpool), and Carlo Ancelotti ( 2003, 2007 with Milan, and 2014 Real Madrid)"
  },
  {
    question:
      "As of 2019, Spanish clubs have 18 victories in the competition's history, but how many times have English clubs won it?",
    answer: "13 wins",
  },
  {
    question:
      "Liverpool beat Spurs 2–0 in the 2019 final in the Wanda Metropolitano, which is the home stadium of which club?",
    answer: "Atletico Madrid"
  },
  {
    question:
      "Two players have played in eight finals, Francisco Gento in the 1950s and 60s is one, can you name the more recent other?",
    answer: "Paolo Maldini (Milan)"
  },
  {
    question:
      "As of 2019, The Champions League's top scorer is Cristiano Ronaldo on 126 goals, with Lionel Messi 14 goals behind in second place, but which player is third in the all-time top scorers' list?",
    answer: "Raul (with 71 goals)",
  },
  {
    question: "Name the first British team to win the European Cup?",
    answer: "Celtic",
  },
  {
    question:
      "Who holds the record as the oldest player to play in a final when his team lost to Hamburg in 1983?",
    answer: "Dino Zoff (Juventus - 41 years and 86 days)"
  },
  {
    question:
      "Liverpool beat Milan in the 2005 final in Istanbul, what was the score at half time?",
    answer:
      "3–0 to Milan (Liverpool scored 3 goals in six minutes in the second half to draw the game, then won on penalties after extra time)"
  },
  {
    question:
      "Name the first player to play in the Champions League group stage with seven clubs? (Hint: the clubs include Barcelona and Manchester United)",
    answer: "Zlatan Ibrahimovic"
  },
  {
    question:
      "The UEFA Champions League anthem is an adaptation of which composer's 1727 anthem 'Zadok the Priest'?",
    answer: "George Frideric Handel"
  },
  {
    question:
      "In the 1970s four British clubs played in finals, Liverpool was one, can you name the other three?",
    answer:
      "Celtic (lost in 1970), Leeds Utd (lost in 1975) and Nottingham Forest (won in 1979)"
  },
  {
    question:
      "Which British football ground was the first to host a European Cup Final?",
    answer:
      "Hampden Park (glasgow) in 1960 (it also has the record highest attendance at 127,621 )"
  },
  {
    question:
      "Which player has made the most appearances in the competition? And as of August 2019, which two British players also makes the all-time top 10 appearances list?",
    answer:
      "Iker Casillas with 177 for Real Madrid and Porto. Ryan Giggs (145) and Paul Scholes (124)."
  },
  {
    question:
      "Real Madrid won the first five finals in 1956 to 1960, but which club won the next two?",
    answer: "Benfica"
  },
];

addEventListener("load", (event) => {
  initialiseQuiz();
});



function showDetails(buttonNumber) {
  const infoBoxes = document.getElementsByClassName("info");
  for (const element of infoBoxes) {
    element.style.display = "none";
  }
  document.getElementById(`info_${buttonNumber}`).style.display = "block";
}

function initialiseQuiz() {
  const question = quiz[(Math.floor(Math.random() * quiz.length))]
  document.getElementById("answer").style.display = "none";
  document.getElementById("question").innerHTML = question.question;
  document.getElementById("answer").innerHTML = question.answer;


}

function showAnswer() {
  document.getElementById("answer").style.display = "";
}

