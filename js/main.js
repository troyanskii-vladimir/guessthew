const wordTemaplte = document.querySelector('#display__word-template').content.querySelector('.display__word');
const displayContainer = document.querySelector('.display');
const audioMusic = document.querySelector('.audio');

const counterContainer = document.querySelector('.counter');
const counterNumber = counterContainer.querySelector('.counter__text-count');

const answerForm = document.querySelector('.answer-form');
const answerInputTemplate = document.querySelector('#answer__input-template').content.querySelector('.answer__input');


const EXAMPLE_TEXT = [
  {phrase: 'эту сумку мне муж купил',
  song: 'Instasamka - За деньги да',
  url: 'audio/instasamka-za-da.mp3'},
  {phrase: "я люблю разных сучек",
  song: "soda luv - ялрс",
  url: "#"}
];


const dividePhrase = (text) => text.split(' ');

const rewriteCountGoals = () => {
  counterNumber.textContent = counter;
}

const drawPhrase = (singleData) => {
  const similarListFragment = document.createDocumentFragment();
  const phrase = dividePhrase(singleData.phrase);


  for (let i = 0; i < phrase.length; i++) {
    const wordElement = wordTemaplte.cloneNode(true);
    wordElement.querySelector('.display__word-text').textContent = phrase[i];

    similarListFragment.append(wordElement);
  }

  displayContainer.append(similarListFragment);
}

const playMusic = (singleData) => {
  const audio = new Audio();
  audio.src = singleData.url;
  audio.autoplay = true;
}

let counter = 0;


const displayWordsHandler = (singleData) => {
  const words = displayContainer.querySelectorAll('.display__word-text')

  for (let i = 0; i < words.length; i++) {
    words[i].addEventListener('click', () => {
      words[i].classList.remove('display__word-text-hidden');
      counter++;
    })
  }
}


rewriteCountGoals();
drawPhrase(EXAMPLE_TEXT[0]);
displayWordsHandler(EXAMPLE_TEXT[0]);
