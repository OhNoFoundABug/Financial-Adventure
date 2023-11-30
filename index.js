document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("introduction").style.display = "none";
  document.getElementById("gameContainer").style.display = "block";
});

let currentQuestionIndex = 0;
let currentStage = 1;
const maxStages = 2; // Assuming two stages for demonstration

const stageQuestions = {
  1: [
    {
      question:
        "Age: 18\n You've just graduated from high school. What's your next step?",
      options: [
        "Attend a university to pursue a degree.",
        "Start working immediately to gain experience.",
        "Take a gap year to explore different options.",
        "Enroll in a vocational training program."
      ]
    },
    {
      question:
        "Age: 20\nYou have started collecting some of your own money. How do you plan to manage it?",
      options: [
        "Save most of it for future needs or investments.",
        "Spend on necessities and a few leisure activities.",
        "Mostly spend it on enjoying life with friends and hobbies.",
        "Invest a portion in stocks or a small business."
      ]
    },
    {
      question:
        "Age: 20\nWhere will you live after moving out of your parents' house?",
      options: [
        "Rent an apartment close to work or college.",
        "Share a rental with friends to save money.",
        "Stay with reatives and save on rent.",
        "Buy a small house or apartment through a loan."
      ]
    },
    {
      question:
        "Age: 20\nYou need a reliable way to commute now that your parents won't drive you anymore. What's your choice of transportation?",
      options: [
        "Buy a new car on a finance plan.",
        "Use Public Transport",
        "Purchase a used car to save money.",
        "Use a bicycle or walk, and save on transportation costs."
      ]
    },
    {
      question:
        "Age: 22\nYou're close to graduating college! How do you prioritize your lifestyle and hobbies this point?",
      options: [
        "Spend conservatively, focusing more on saving.",
        "Balance between hobbies and saving.",
        "Spend freely on travel, dining, and hobbies.",
        "Invest in learning new skills or hobbies that could generate income."
      ]
    },
    {
      question:
        "Age: 24 - start of working life\nYou've been working in your current job for a while. What's your next career move?",
      options: [
        "Pursue a higher position in the same field.",
        "Go back to school to learn more",
        "Consider switching careers to follow a passion.",
        "Start a side business or freelance for additional income."
      ]
    },
    {
      question:
        "Age: 26\n With your savings accumulating, what investment strategy do you choose?",
      options: [
        "Keep Savings in a bank for liquidity and safety",
        "Put money into a retirement savings plan.",
        "Invest in real estate.",
        "Invest in stocks and bonds for long-term growth.."
      ]
    },
    {
      question: "Age: 28\n How do you manage work-life balance?",
      options: [
        "Often work overtime to achieve career goals.",
        "Balance work with personal time and hobbies.",
        "Prioritize family and personal life over work.",
        "Take regular sabbaticals to travel or pursue personal projects."
      ]
    },
    {
      question: "Age: 32\nWhat is your long-term plan regarding your career?",
      options: [
        "Aim for the top positions in your current field.",
        "Transition into a role that offers more flexibility and freedom.",
        "Build skills to start your own business.",
        "Focus on stable employment, not necessarily upward mobility."
      ]
    },
    {
      question:
        "Age: 35\n How would you handle an unexpected large financial expense?",
      options: [
        "Use your emergency savings fund.",
        "Take out a loan or use credit.",
        "Ask family or friends for help.",
        "Adjust your budget and cut back on non-essential expenses."
      ]
    },
    {
      question:
        "Age: 40 - Mid to End Career\nYou have the opportunity for professional growth. What do you choose?",
      options: [
        "Pursue a leadership role in your current company.",
        "Investing heavily in a retirement fund.",
        "Change your career path to something more fulfilling.",
        "Start your own business in your field of expertise."
      ]
    },
    {
      question: "Age: 43\nHow are you planning for retirement?",
      options: [
        "Planning to work as long as possible.",
        "Investing heavily in a retirement fund.",
        "Saving moderately while enjoying some pleasures of life.",
        "Relying on government pension and minimal savings."
      ]
    },
    {
      question:
        "Age: 46\nAs you age, how do you prioritize health and wellness?",
      options: [
        "Regular exercise and maintaining an active lifestyle.",
        "Investing in a comprehensive health insurance plan.",
        "Not overly concerned, dealing with issues as they arise.",
        "Focusing on holistic and alternative health practices."
      ]
    },
    {
      question: "Age: 48\n Have you considered estate planning?",
      options: [
        "I have a will and some plans for my assets.",
        "Yes, all my assets are already in a trust.",
        "I haven’t thought much about it yet.",
        "I prefer to distribute my wealth while I am alive."
      ]
    },
    {
      question:
        "Age: 51\nHow do you manage work-life balance in your later career?",
      options: [
        "Maintaining the same pace as always.",
        "Cutting down on work hours to focus on personal life.",
        "Fully retired from work to focus on hobbies and interests.",
        "Shifting to consultative or part-time roles."
      ]
    },
    {
      question: "Age: 54\n Do you engage in lifelong learning?",
      options: [
        "Regularly taking courses related to my field.",
        "Occasionally attending workshops or seminars.",
        "Learning is not a current priority for me.",
        "Exploring completely new subjects outside my field."
      ]
    },
    {
      question: "Age: 57\nWhat’s your approach to legacy and mentorship?",
      options: [
        "Actively mentoring younger professionals in my field.",
        "Focused more on personal achievements than mentorship.",
        "Interested in leaving a financial legacy.",
        "Engaged in community service and social causes."
      ]
    }
  ],
  2: [
    // ... Define questions and options for Stage 2
  ]
};

let categoryScores = {
  "Financially Prudent": 0,
  "Career-Oriented": 0,
  "Adventure Seeker": 0,
  "Entrepreneurial Spirit": 0
};

function displayQuestion() {
  const questionData = stageQuestions[currentStage][currentQuestionIndex];
  const questionTextElement = document.getElementById("questionText");
  const answerSection = document.getElementById("answerSection");

  questionTextElement.innerText = questionData.question;
  answerSection.innerHTML = "";

  questionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answerButton";
    button.innerText = option;
    button.onclick = () => selectAnswer(index);
    answerSection.appendChild(button);
  });
}

function selectAnswer(choiceIndex) {
  // Logic to handle the answer choice
  // For demonstration, we just log the choice index
  console.log("Selected option index:", choiceIndex);
  updateCategoryScores(choiceIndex);

  // Here you will update the scores based on the choice index
  // updateCategoryScores(choiceIndex); // Uncomment and define this function as needed

  currentQuestionIndex++;
  if (currentQuestionIndex < stageQuestions[currentStage].length) {
    displayQuestion();
  } else if (currentStage < maxStages) {
    generateLifeUpdate();
    goToNextStage();
  } else {
    generateLifeUpdate();
    // Handle end of the game
  }
}

function generateLifeUpdate() {
  // Logic to generate and display life update
  // For demonstration, just show a placeholder text
  const answerSection = document.getElementById("answerSection");
  const questionTextElement = document.getElementById("questionText");
  answerSection.style.display = "none";
  let sortedCategories = Object.entries(categoryScores).sort(
    (a, b) => b[1] - a[1]
  );

  // Get the category with the highest score
  let topCategory = sortedCategories[0][0];

  // Return the life update for the top category
  let q = lifeUpdates[topCategory] || "Your unique journey has yet to unfold.";

  questionTextElement.innerText = q;
}

function goToNextStage() {
  currentStage++;
  currentQuestionIndex = 0;
  // Reset for next stage if necessary
  // resetForNextStage(); // Uncomment and define this function as needed
  displayQuestion();
}

// Initialize the first question
displayQuestion();

function updateCategoryScores(choiceIndex) {
  // Example logic: Each choice index affects the categories differently
  if (choiceIndex === 0) {
    // Option A
    categoryScores["Financially Prudent"] += 2;
    categoryScores["Career-Oriented"] += 4;
    categoryScores["Adventure Seeker"] -= 2;
    categoryScores["Entrepreneurial Spirit"] += 1;
  } else if (choiceIndex === 1) {
    // Option B
    categoryScores["Financially Prudent"] += 4;
    categoryScores["Career-Oriented"] += 2;
    categoryScores["Adventure Seeker"] -= 2;
    categoryScores["Entrepreneurial Spirit"] -= 1;
  } else if (choiceIndex === 2) {
    // Option C
    categoryScores["Financially Prudent"] -= 1;
    categoryScores["Career-Oriented"] -= 2;
    categoryScores["Adventure Seeker"] += 4;
    categoryScores["Entrepreneurial Spirit"] += 2;
  } else if (choiceIndex === 3) {
    // Option D
    categoryScores["Financially Prudent"] -= 2;
    categoryScores["Career-Oriented"] += 0;
    categoryScores["Adventure Seeker"] += 2;
    categoryScores["Entrepreneurial Spirit"] += 4;
  }
  // You can continue this pattern for additional options if they exist
}

const lifeUpdates = {
  "Financially Prudent":
    "Embarking on a path of financial prudence is more than a series of monetary decisions; its a lifestyle choice that reflects a deep understanding of the value and power of money. As someone who embraces this path, you recognize that each financial decision, no matter how small, shapes your future's stability and security.\nFinancial prudence for you isnt merely about saving pennies; its a comprehensive approach to managing your finances that encompasses budgeting, saving, investing, and spending wisely. Youve learned the art of distinguishing between wants and needs, making informed choices that align with your long-term financial goals. This mindful approach has enabled you to build a solid financial foundation, free from the burdens of unchecked debt and impulsive spending.\nYour journey towards financial prudence began with setting clear goals. Whether its planning for retirement, buying a home, or securing your familys future, these goals have provided direction to your financial planning. Budgeting, often seen as a restrictive practice, has become a powerful tool in your hands, allowing you to track your expenses, identify areas for savings, and adjust your spending habits accordingly.\nInvesting is another cornerstone of your financial strategy. Youve taken the time to educate yourself about different investment options and understand the balance between risk and return. This knowledge has empowered you to make investments that not only grow your wealth but also provide financial security for the years to come.\nHowever, the path of financial prudence isnt without its challenges. It often requires making tough choices, like forgoing immediate gratifications for long-term benefits. There have been moments when youve had to decline invitations from friends or family because they didnt fit into your budget, leading to a sense of missing out. Social pressures to conform to certain spending habits have tested your resolve, but your commitment to financial well-being has always guided your decisions.\nDespite these challenges, the rewards of being financially prudent have been significant and multi-faceted. You enjoy peace of mind, knowing that youre well-prepared for unexpected financial emergencies. This foresight has given you a sense of control over your life, freeing you from the stress and anxiety that often accompany financial instability. Moreover, your financial discipline has set a positive example for those around you, inspiring them to reevaluate their financial habits.\nLooking ahead, youre confident in your ability to navigate the complexities of the financial world. Retirement doesnt seem daunting; instead, its a phase of life you look forward to, knowing that your prudent financial choices have paved the way for a comfortable and secure future.\nIn a world where financial uncertainty is a common concern, your journey as a financially prudent individual stands as a testament to the power of disciplined financial planning and the peace of mind it brings. Its a journey not just toward financial stability but also towards personal empowerment and freedom.|",

  "Career-Oriented":
    "Navigating the Highs and Lows of a Career-Oriented Life \n\n As you navigate through the intricacies of a career-centered life, it's essential to recognize that this path, while rewarding, is not without its challenges. Being career-oriented has defined much of your life's journey, a journey marked by relentless ambition and a steadfast focus on professional achievements. However, this unwavering commitment to your career can sometimes cast a shadow on other aspects of your life. \n You have always placed your career at the forefront, often at the expense of personal relationships and leisure. The long hours and unyielding dedication to your work have meant missing out on family events, social gatherings, and even much-needed personal downtime. While colleagues may see you as a pillar of professional strength, there is an underlying reality of sacrifices made, moments lost, and a lingering sense of what could have been if the scales were more balanced. \n Your pursuit of career success has indeed brought financial stability and respect in your professional circles, but it has also led to moments of self-reflection and questions about personal fulfillment. The late nights at the office and weekends spent working have yielded promotions and accolades, yet they have also resulted in a certain degree of isolation. The pursuit of the next big achievement continuously looms large, leaving little room for spontaneity or relaxation. \n Networking and maintaining professional relationships, once a source of exciting opportunities, have at times felt more like an obligation than a pleasure. The constant pressure to stay ahead, to be constantly engaged in career advancement, can be mentally and emotionally taxing. It is not just a job or a career path; its a lifestyle that demands constant vigilance and effort, often blurring the lines between personal and professional life. \n The financial rewards of your career-oriented approach have come with their own set of challenges. Your prudent investments and savings have secured a comfortable lifestyle, but the constant focus on financial planning for the future sometimes overshadows the joy of living in the present. The question of whether to spend or save, to enjoy now or secure later, is a recurring theme in your financial narrative. \n As you look ahead, the path remains filled with potential and possibilities, but its also lined with cautionary tales of burnout and missed life experiences. The realization that a successful career does not always equate to a fulfilling life has begun to seep in. The balance between professional accomplishments and personal happiness is delicate, often requiring reevaluation and adjustment.",
  "Adventure Seeker":
    "Your journey as an adventure seeker is defined by an unquenchable thirst for new experiences and a willingness to embrace the unknown. Life for you is not a set path but a series of opportunities for exploration and discovery. The very essence of your spirit is fueled by a desire to push boundaries, to see what lies beyond the horizon, both metaphorically and literally.\nAs an adventure seeker, you often find yourself taking the road less traveled. This could mean pursuing unconventional career paths, indulging in extensive travel, or engaging in thrilling activities. The routine and predictable aspects of life do not hold your attention for long. Instead, you crave variety and excitement, finding joy in the spontaneous and the unexpected.\nFinancial security, while important, takes a back seat in the grand scheme of your adventures. You prefer experiences over possessions, often investing in travel, courses for personal development, or activities that provide a rush of adrenaline. Your financial decisions are guided by the desire for freedom and flexibility rather than accumulation of wealth.\nYour approach to life is not without its risks. The pursuit of constant adventure means that stability, both in your career and personal life, can be elusive. Relationships may be challenging to maintain, especially with those who do not share or understand your restless spirit. Financially, your situation might fluctuate, reflecting the unpredictability of your lifestyle choices.\nDespite these challenges, the fulfillment you derive from your experiences is immense. You have stories that most can only dream of, and your understanding of the world is broadened with every new adventure. Your life is a rich tapestry of experiences that have shaped a unique perspective on life.\nThe professional world for you is a series of gigs or entrepreneurial ventures that provide the means to support your next adventure. You value flexibility and creativity in your work, often seeking roles that offer new challenges or opportunities to travel. Your career is not a ladder to be climbed but a landscape to be explored.\nLooking ahead, you see a life that continues to defy conventions. Retirement in the traditional sense is not a goal for you. Instead, you envisage a future where you continue to explore, learn, and experience the world in all its diversity. Your journey as an adventure seeker is about living life to the fullest, with each day presenting a new possibility for adventure.\nThe path of an adventure seeker is for those who dare to live life on their own terms. Its a testament to the belief that life's true value lies in the richness of experiences, not in material possessions or societal norms. Your journey is an inspiring reminder of the endless possibilities that life offers to those brave enough to pursue them.",
  "Entrepreneurial Spirit":
    "Embracing the entrepreneurial spirit is about much more than starting a business. It is a journey of self-discovery, resilience, and innovation. As someone with an entrepreneurial spirit, you view the world not just as it is, but as it could be. You are driven by the desire to create, to innovate, and to make a tangible impact on the world around you.\nYour path is defined by a series of bold decisions. Where others see obstacles, you see opportunities. Starting your own venture is not just a career choice for you; it is a calling. Its about bringing your unique vision to life and making a mark in your chosen field. The risks are high, but the potential rewards - both personal and financial - drive you forward.\nBeing an entrepreneur means wearing multiple hats. You are at once a visionary, a strategist, a problem solver, and a leader. You thrive in environments where you can experiment and innovate. The thrill of a startup, the chaos of growth, the challenge of scaling – these are the elements that fuel your passion.\nFinancially, the entrepreneurial path is a rollercoaster. There are moments of significant financial gain, but there are also periods of uncertainty. Your financial journey is marked by investments, both in your business and in your personal growth. You understand that every penny spent towards building your dream is an investment in your future.\nYet, this path is not without its challenges. The life of an entrepreneur can be a solitary one, with long hours and the constant pressure to succeed. The responsibility of making critical decisions, often with limited information, rests on your shoulders. There are moments of doubt, setbacks, and failures that test your resolve.\nDespite these challenges, the fulfillment you gain from seeing your ideas come to life is unparalleled. The impact of your work, whether its creating jobs, solving a problem, or bringing innovation to the market, gives you a profound sense of accomplishment. Your journey is about creating a legacy that reflects your values and vision.\nLooking forward, the future is a canvas of possibilities. Whether its expanding your current venture, exploring new markets, or even starting anew, the entrepreneurial journey is an ongoing process of creation and evolution. The lessons learned from each success and failure only serve to sharpen your skills and resolve.\nIn a world that often prioritizes conformity, the entrepreneurial spirit is a beacon of innovation and courage. It represents a deep belief in your ability to shape the future. Your journey as an entrepreneur is not just about building businesses; its about building a life that is as dynamic and evolving as you are."
  // ... (Complete the updates for each category)
};
