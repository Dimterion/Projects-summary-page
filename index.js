// making three variables with the arrays for the message parts

const firstPartArray = [
  `A wise person once said:`,
  `A thinker once said:`,
  `Some wisdom for you:`,
  `Think about this:`,
  `Here's something to remember:`,
];
const secondPartArray = [
  `"Knowledge is the treasure of a wise man." (William Penn)`,
  `"When something is important enough, you do it even if the odds are not in your favor." (Elon Musk)`,
  `"Time plays a role in almost every decision. And some decisions define your attitude about time." (John Cale)`,
  `"Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor." (Sholom Aleichem)`,
  `"Some are born great, some achieve greatness, and some have greatness thrust upon them." (William Shakespeare)`,
  `"Experience is one thing you can't get for nothing." (Oscar Wilde)`,
  `"The secret of getting ahead is getting started." (Mark Twain)`,
  `"Quality is not an act, it is a habit." (Aristotle)`,
  `"To improve is to change; to be perfect is to change often." (Winston Churchill)`,
  `"Perfection is not attainable, but if we chase perfection we can catch excellence." (Vince Lombardi)`,
];
const thirdPartArray = [
  `Not bad, huh?`,
  `What a clever person!`,
  `That's something, isn't it?`,
  `Think about it.`,
  `You just got your portion of wisdom.`,
];

// generating a random number for each of the above arrays up to an array's length

const firstRandomNumber = Math.floor(Math.random() * firstPartArray.length);
const secondRandomNumber = Math.floor(Math.random() * secondPartArray.length);
const thirdRandomNumber = Math.floor(Math.random() * thirdPartArray.length);

/* testing the random numbers:
console.log(firstRandomNumber, secondRandomNumber, thirdRandomNumber); */

// storing final message in a variable

const givenWisdom = `${firstPartArray[firstRandomNumber]}<br></br>${secondPartArray[secondRandomNumber]}<br></br>${thirdPartArray[thirdRandomNumber]}`;

// displaying the message in the footer

const footer = document.querySelector("footer");
footer.innerHTML = givenWisdom;

// open/close notes functionality

const htmlCssNotesBtn = document.getElementById("htmlCssNotesBtn");
const jsNotesBtn = document.getElementById("jsNotesBtn");
const notesContainerHtmlCss = document.getElementById(
  "notes-container-htmlCss"
);
const notesContainerJs = document.getElementById("notes-container-js");

notesContainerHtmlCss.style.display = "none";
notesContainerJs.style.display = "none";

htmlCssNotesBtn.addEventListener("click", () => {
  if (notesContainerHtmlCss.style.display === "none") {
    notesContainerHtmlCss.style.display = "block";
    notesContainerJs.style.display = "none";
    htmlCssNotesBtn.textContent = "Close";
    jsNotesBtn.textContent = "JavaScript notes";
  } else {
    notesContainerHtmlCss.style.display = "none";
    htmlCssNotesBtn.textContent = "HTML/CSS notes";
    jsNotesBtn.textContent = "JavaScript notes";
  }
});

jsNotesBtn.addEventListener("click", () => {
  if (notesContainerJs.style.display === "none") {
    notesContainerJs.style.display = "block";
    notesContainerHtmlCss.style.display = "none";
    jsNotesBtn.textContent = "Close";
    htmlCssNotesBtn.textContent = "HTML/CSS notes";
  } else {
    notesContainerJs.style.display = "none";
    jsNotesBtn.textContent = "JavaScript notes";
    htmlCssNotesBtn.textContent = "HTML/CSS notes";
  }
});
