
let questions = [
    {
        id: 1,
        question: "Qui a gagne le coupe du monde 2014 ?",
        answer:"Germany",
        options: [
            "Argentine",
            "Brazil",
            "France",
            "Germany"
        ]   
    },
    {
        id: 2,
        question: "Meilleur joueur du monde 2017 ?",
        answer: "Cristiano Ronaldo",
        options: [
          "Cristiano Ronaldo",
          "Luka Modric",
          "Lionel Messi",
          "Neymar"
        ]
      },
      {
        id: 3,
        question: "Le gagnant de la UEFA Champions League 2020 ?",
        answer: "Bayern Munich",
        options: [
          "Chelsea",
          "Bayern Munich",
          "Real Madrid",
          "Liverpool"
        ]
      },
      {
        id: 4,
        question: "Combien de fois le bresilien Ronaldo a gagné le ballon d'or ?",
        answer: "2",
        options: [
          "1",
          "2",
          "3",
          "4"
        ]
      },
      {
        id: 5,
        question: "Quel pays a remporte le plus de coupe du monde ?",
        answer: "Brazil",
        options: [
          "France",
          "Germany",
          "Brazil",
          "Argentine"
        ]
      },
      {
        id: 6,
        question: "Quelle est l'equipe le plus titré de Premier League ?",
        answer: "Manchester United",
        options: [
          "Arsenal",
          "Liverpool",
          "Manchester City",
          "Manchester United"
        ]
      },
      {
        id: 7,
        question: "Quelle est l'equipe le plus titré dans le monde ?",
        answer: "Real Madrid",
        options: [
          "Al Ahly",
          "Boca juniors",
          "Barcelone",
          "Real Madrid"
        ]
      },
      {
        id: 8,
        question: "Quelle est l'equipe le plus titré de la ligue de France ?",
        answer: "Saint Etienne",
        options: [
          "Olympique Lion",
          "Bordeaux",
          "Saint Etienne",
          "Olympique Marseille"
        ]
      },
      {
        id: 9,
        question: "Qui sont les deux equipes de la finale de la ligue des champions 2012 ?",
        answer: "Bayern Munich vs Chelsea",
        options: [
          "Real Madrid vs Atletico Madrid",
          "Real Madrid vs Liverpool",
          "Barcelone vs Juventus",
          "Bayern Munich vs Chelsea"
        ]
      },
      {
        id: 10,
        question: "Qui sont les deux pays de la finale de coupe du monde 2010 ?",
        answer: "Espagne vs Netherlands",
        options: [
          "Espagne vs Netherlands",
          "France vs Argentine",
          "Germany vs Argentine",
          "Beazil vs Italie"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}