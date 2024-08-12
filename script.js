// This array called questions is holding all the objects that with hold the keys; the name of the question, answer choices and the answer. Along with the hint given once entered hint while picking a answer choice.
let questions = [
  {
    name: "Who is the main character in The Plunderer?",
    hint: "He's been in a coma for a while.",
    answerchoice1: "A)Licht",
    answerchoice2: "B)Jail",
    answerchoice3: "C)Tsukina",
    answerchoice4: "D)Suda",
    answer: "Licht"
  },
  {
    name: "What titan can Zeke and Armin turn into?",
    hint: "One of them can talk and the other can destroy an entire part of a city with their transformation.",
    answerchoice1: "A)Beast and Warhammer Titan",
    answerchoice2: "B)Cart and Colossus Titan",
    answerchoice3: "C)Attack and Female Titan",
    answerchoice4: "D)Beast and Colossus Titan",
    answer: "Beast and Colossus Titan"
  },
  {
    name: "Who is the strongest in Bofuri?",
    hint: "She has hiddens powers and a pet turtle.",
    answerchoice1: "A)Sally",
    answerchoice2: "B)Kuromu",
    answerchoice3: "C)Maple",
    answerchoice4: "D)Kanadae",
    answer: "Maple"
  },
  {
    name: "Whos is Yukio and Rin's father?",
    hint: "He's possesses a preist.",
    answerchoice1: "A)Shiro",
    answerchoice2: "B)Satan",
    answerchoice3: "C)Mephisto",
    answerchoice4: "D)Shima",
    answer: "Satan"
  },
  {
    name: "In God Eater, what are the monsters called in general?",
    hint: "There are different types but they all have a general name.",
    answerchoice1: "A)Night Hollow",
    answerchoice2: "B)Zygote",
    answerchoice3: "C)Hunters",
    answerchoice4: "D)Aragamis",
    answer: "Aragamis"
  },
  {
    name: "What is Eren Yeager's goal?",
    hint: "He's wanted this from since he was a child and watched his mother died.",
    answerchoice1: "A)Revenge on titans",
    answerchoice2: "B)Go outside the walls",
    answerchoice3: "C)Freedom",
    answerchoice4: "D)All of the above",
    answer: "All of the above"
  },
  {
    name: "Who is Ciel Phantomhive's butler",
    hint: "He's a demon and has black hair.",
    answerchoice1: "A)Agni",
    answerchoice2: "B)Sebastian",
    answerchoice3: "C)Grell",
    answerchoice4: "D)Carter",
    answer: "Sebastitian"
  },
  {
    name: "Who is the wing spiker in Haikyuu?",
    hint: "He has orange hair.",
    answerchoice1: "A)Hinata",
    answerchoice2: "B)Kageyama",
    answerchoice3: "C)Kenma",
    answerchoice4: "D)Tuskishima",
    answer: "Hinata"
  },
  {
    name: "What manwha came out to be a tv show?",
    hint: "",
    answerchoice1: "A)",
    answerchoice2: "B)",
    answerchoice3: "C)",
    answerchoice4: "D)",
    answer: ""
  },
  {
    name: "",
    hint: "",
    answerchoice: "A)",
    answerchoice2: "B)",
    answerchoice3: "C)",
    answerchoice4: "D)",
    answer: ""
  },
];

let radioButtons = document.querySelectorAll(".radio")

console.log(radioButtons)

let labels = document.querySelectorAll("label")

console.log(labels)

for(let i=0; i < radioButtons.length;i++){
  radioButtons[i].addEventListener("click",function(e){
    for(let x=0; x <radioButtons.length; x++){
      labels[x].style.color = "black"
    }
    if(radioButtons[i].classList.contains("correct")){
      labels[i].style.color = "green"
    } else {
      labels[i].style.color = "red"
    }
  })
}

let images = document.querySelector("#image1")

console.log(images)


images.addEventListener("mouseover", function(){
  images.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaaae84Dg9aJHmGjxTZ8Gn-rRq9pzb-Cg2Q&s"
})

images.addEventListener("mouseout", function(){
  images.src = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/25-most-popular-characters-in-anime-history-according-to-myanimelist.jpg"
})

