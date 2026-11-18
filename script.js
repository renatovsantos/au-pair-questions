// Perguntas e respostas extraídas do arquivo .pptx
const QUESTIONS = [
  {
    "n": 1,
    "q": "Where are you going to?",
    "answers": [
      "I will be an Au Pair, I am going to a Host family who lives in [...]."
    ],
    "tip": null
  },
  {
    "n": 2,
    "q": "Tell me about your host Family.",
    "answers": [
      "They have two children, the boy is 2 years old and the babygirl will be almost 1 year old when I arrive. My Host Mother is called [...] and my Host Father is called [...]."
    ],
    "tip": null
  },
  {
    "n": 3,
    "q": "What do they do for a living?",
    "answers": [
      "She is a Nurse and he works as a businessman."
    ],
    "tip": null
  },
  {
    "n": 4,
    "q": "What do you do here in Brazil? Do you study? Do you work?",
    "answers": [
      "I have Bachelor´s Degree in Biomedical Sciences as well as a Postgraduate Certificate in Clinical Microbiology and I have worked as a Biomedical for the past years, I work at a lab for over 4 years."
    ],
    "tip": null
  },
  {
    "n": 5,
    "q": "What do you intend to do when you get back to Brazil?",
    "answers": [
      "With the fluency in English, I can apply to start a Master’s Degree in my field, I want to be a researcher. I even have a Scientific Article published and I want to keep growing as a professional in the lab and diagnosis area."
    ],
    "tip": null
  },
  {
    "n": 6,
    "q": "Why did you decide to pause your career to become an Au Pair?",
    "answers": [
      "Honestly, I don't truly see it as a pause, I see it as an upgrade, as I am sure this experience will help me in my professional career once I get back to Brazil and actually, that's one of the reasons I have decided to become an Au Pair."
    ],
    "tip": null
  },
  {
    "n": 7,
    "q": "What is the link between the Au Pair Program and your area of training?",
    "answers": [
      "Being in touch daily with my host family and having an immersive English learning will equip me with the fluency in English that I need to keep growing as a professional here in Brazil."
    ],
    "tip": null
  },
  {
    "n": 8,
    "q": "What do your parents do?",
    "answers": [
      "My father is retired; he used to be an occupational safety technician. My mom is housewife."
    ],
    "tip": null
  },
  {
    "n": 9,
    "q": "With whom do you live?",
    "answers": [
      "I live with my parents."
    ],
    "tip": null
  },
  {
    "n": 10,
    "q": "Did you study English here in Brazil? Why?",
    "answers": [
      "Yes, I have studied English and the main reason is because the fluency in English is very important for my professional career, if I want to build a good career for myself, I must speak English."
    ],
    "tip": "(não falar que estudou Inglês por causa do Au Pair ou por causa do desejo de morar fora, falar que o foco principal de querer aprender inglês é e sempre foi a sua carreira)"
  },
  {
    "n": 11,
    "q": "What are the reasons would you get back to Brazil after your year as an Au Pair?",
    "answers": [
      "I am extremely attached to my family and I can't even think about building my life away from them and especially because of my career here in Brazil, I would like to pursue a good Career for myself, to have a better quality of life and that’s actually the main reason I want to live abroad to become fluent in English and building a good career for me will only be possible in my home country."
    ],
    "tip": null
  },
  {
    "n": 12,
    "q": "Where and how did you learn English?",
    "answers": [
      "I have taken English Classes but I also have studied a lot by myself, with material I get online, and movies, music and TV series."
    ],
    "tip": null
  },
  {
    "n": 13,
    "q": "Why do you want to be an Au Pair?",
    "answers": [
      "Dealing with kids has always been something very natural for me, I don’t only like children, but I am also very natural dealing with them, so I feel confident to be part of this program. Also, I have always had the desire of becoming fluent in English and during this year abroad, I believe I will be able to achieve that. Finally, I am happy about the chance of having a cultural immersion and being able to travel to different places and getting to know new people. I am sure it will not only be a wonderful personal experience that will make me leave my comfort zone, but it will also equip me with the fluency in English that I need for my professional career."
    ],
    "tip": null
  },
  {
    "n": 14,
    "q": "Why did you choose the United States?",
    "answers": [
      "Because the Au Pair Program in the United States is a very big program, recognized by the American Government, so I felt very confident and comfortable deciding for this country. I think it is the safest country to be an Au Pair."
    ],
    "tip": null
  },
  {
    "n": 15,
    "q": "How long will you stay?",
    "answers": [
      "The contract with the agency is that I will stay working as an Au Pair for a year."
    ],
    "tip": null
  },
  {
    "n": 16,
    "q": "Why being fluent in English will help you in your future career?",
    "answers": [
      "Because the English is the business language and if I want to find a good position and build a good career when I get back to Brazil, I must be fluent in English."
    ],
    "tip": null
  },
  {
    "n": 17,
    "q": "Who is paying for your program?",
    "answers": [
      "The Host Family is responsible for paying the biggest part of the program to the agency, but the Au Pair also pays a smaller value and some fees as well, so I am paying for my part of the program to the agency here in Brazil and [...] is also helping me with other spends I am having with this trip."
    ],
    "tip": null
  },
  {
    "n": 18,
    "q": "Where would you like to go in the United States?",
    "answers": [
      "I want to go to the Disney World because I love the movies from Disney, they were part of my childhood and also of my life!"
    ],
    "tip": null
  },
  {
    "n": 19,
    "q": "Do you want to study there? Will you study there? What do want to study? Where will you study?",
    "answers": [
      "As an Au Pair, I must complete 6 credits of study until the end of my Au Pair Year, so I will study there, and I am very excited about that. I know that I want to study English because I need to improve my English but I don’t know where or when I will study, because that depends on my Host Family and not only on me. My LCC already sent me an email with the closest schools but I will check this once I get there, I need to talk to my host family, so we can see my study schedule and also because in the Au Pair Program, the Host Family is responsible for paying $500 of the course price, so I need them to see the course with me.",
      "Yes, I want to study English and as an Au Pair, I must complete 6 credits of study until the end of my Au Pair Year. I don’t know where or when I will study, because that depends on my Host Family and not only on me."
    ],
    "tip": null
  },
  {
    "n": 20,
    "q": "What would you do in an Emergency Situation?",
    "answers": [
      "It would depend on the situation, but I would keep calm to be able to think straight and ask for help, call 911 and follow all their directions and if it's impossible, I would ask other to help me, as neighbors if I am at home or the adults around if I am in a public place and as soon as possible I would call my Host Parents to tell them what has happened."
    ],
    "tip": null
  },
  {
    "n": 21,
    "q": "Do you intend to extend you contract as an Au Pair?",
    "answers": [
      "I am not sure if I would like to do that, but to be honest, I wouldn't like to stay long time away from the Brazilian Labor Market as I am doing this exchange program to help me in my career here in Brazil."
    ],
    "tip": null
  },
  {
    "n": 22,
    "q": "Do you own a house or any other propriety?",
    "answers": [
      "No, I do not. I am still very young to do such commitment."
    ],
    "tip": null
  },
  {
    "n": 23,
    "q": "Have you ever been to the United States before or any other country?",
    "answers": [
      "It will be my first time traveling abroad."
    ],
    "tip": null
  },
  {
    "n": 24,
    "q": "How will be your schedule as an Au Pair? What will be your responsibilities with the kids?",
    "answers": [],
    "tip": "Nesta resposta, não é necessário posicionamento estratégico de informações, para responder basta ser honesta e responder com detalhes de conteúdo. Veja qual foi a rotina que a Hot Family te passou, veja quais serão as atribuições que você terá, que foi acordada entre você e a Host Family."
  },
  {
    "n": 25,
    "q": "What are/were your experiences with kids?",
    "answers": [
      "I worked as a babysitter for my neighbour and also took care of children at my church."
    ],
    "tip": "Nesta resposta, não é necessário posicionamento estratégico de informações, para responder basta ser honesta. Pode responder de maneira genérica, mas é essencial demonstrar muita confiança para o cônsul ver que você está preparada para cuidar de crianças em outro país."
  },
  {
    "n": 26,
    "q": "Do you have siblings? (Você tem irmãos?)",
    "answers": [],
    "tip": "Nesta resposta, não é necessário posicionamento estratégico de informações, para responder basta ser honesta. Pode responder de maneira genérica."
  },
  {
    "n": 27,
    "q": "Do you know your rights?",
    "answers": [
      "Yes, I do! Be paid fairly; Be free from discrimination; Be free from sexual harassment and sexual exploitation; Have a healthy and safe workplace; Request help from union, immigrant, and labor rights groups; Leave an abusive employment situation."
    ],
    "tip": null
  },
  {
    "n": 28,
    "q": "How many times did you talk to your Host Family?",
    "answers": [
      "I talked to them a few times before the Match so I could get to know them, their kids and their needs and expectations. Nowadays I talk to them almost every day, we try to keep in touch quite often, so I can get already used to them and the routine. I see we are already building bonds, which is amazing."
    ],
    "tip": null
  },
  {
    "n": 29,
    "q": "Why did you choose this Host Family?",
    "answers": [
      "We have a lot in common, we have the same interests and enjoy doing the same things. We also seem to share the same principles and values and that's something very important to me."
    ],
    "tip": null
  }
];

// ---------- App logic ----------
(function () {
  const card = document.getElementById("card");
  const qNumber = document.getElementById("q-number");
  const qText = document.getElementById("q-text");
  const qTextBack = document.getElementById("q-text-back");
  const aText = document.getElementById("a-text");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const progressText = document.getElementById("progress-text");
  const progressFill = document.getElementById("progress-fill");
  const backFace = card.querySelector(".card__face--back");

  let deck = [];
  let index = 0;
  let finished = false;

  // Fisher–Yates shuffle
  function shuffle(list) {
    const arr = list.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderAnswer(item) {
    aText.innerHTML = "";
    item.answers.forEach((answer, i) => {
      const block = el("div");
      if (item.answers.length > 1) {
        block.appendChild(el("p", "answer__label", `Opção de resposta ${i + 1}`));
      }
      block.appendChild(el("p", null, answer));
      aText.appendChild(block);
    });
    if (item.tip) {
      const tip = el("div", "tip");
      tip.appendChild(el("strong", null, "💡 Dica"));
      tip.appendChild(document.createTextNode(item.tip));
      aText.appendChild(tip);
    }
  }

  function updateProgress() {
    const current = Math.min(index + 1, deck.length);
    progressText.textContent = `Pergunta ${current} de ${deck.length}`;
    const revealed = card.classList.contains("is-flipped") ? 1 : 0;
    progressFill.style.width = `${((index + revealed) / deck.length) * 100}%`;
  }

  function showCard() {
    const item = deck[index];
    card.classList.remove("is-flipped");
    backFace.setAttribute("aria-hidden", "true");
    card.setAttribute("aria-label", "Clique para ver a resposta");

    qNumber.textContent = `#${item.n}`;
    qText.textContent = item.q;
    qTextBack.textContent = item.q;
    renderAnswer(item);

    nextBtn.disabled = true;
    nextBtn.textContent = index === deck.length - 1 ? "Finalizar ✓" : "Próxima pergunta →";

    // replay entrance animation
    card.classList.remove("is-entering");
    void card.offsetWidth;
    card.classList.add("is-entering");

    updateProgress();
  }

  function reveal() {
    if (finished || card.classList.contains("is-flipped")) return;
    card.classList.remove("is-entering");
    card.classList.add("is-flipped");
    backFace.setAttribute("aria-hidden", "false");
    card.setAttribute("aria-label", "Resposta exibida");
    nextBtn.disabled = false;
    updateProgress();
    nextBtn.focus({ preventScroll: true });
  }

  function showFinished() {
    finished = true;
    card.classList.remove("is-flipped");
    qNumber.textContent = "";
    qText.textContent = "🎉 Você praticou todas as perguntas!";
    card.querySelector(".card__hint").textContent = "Clique em “Embaralhar e recomeçar” para praticar de novo.";
    progressText.textContent = `${deck.length} de ${deck.length} concluídas`;
    progressFill.style.width = "100%";
    nextBtn.disabled = true;
    nextBtn.textContent = "Concluído";
    restartBtn.focus();
  }

  function next() {
    if (!card.classList.contains("is-flipped")) return;
    if (index >= deck.length - 1) {
      showFinished();
      return;
    }
    index++;
    showCard();
  }

  function start() {
    deck = shuffle(QUESTIONS);
    index = 0;
    finished = false;
    card.querySelector(".card__hint").textContent = "Toque no card para ver a resposta";
    showCard();
  }

  card.addEventListener("click", reveal);
  nextBtn.addEventListener("click", next);
  restartBtn.addEventListener("click", start);

  // Atalhos de teclado: Espaço/Enter vira o card (botão nativo), → avança
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); reveal(); }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
  });

  start();
})();
