const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookie = document.querySelector('#cookie')
const again = document.querySelector('#again')


cookie.addEventListener('click', handleClick)
again.addEventListener('click', reset)
document.addEventListener('keydown', enterSubmit)

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

const fortune = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

function randomText() {
  listlength = fortune.length
  number = Math.floor(Math.random() * fortune.length)
  text = fortune[number]
  screen2.querySelector('p').innerText = text
}


function handleClick() {
  toggleScreen()
  randomText()
}

function reset() {
  toggleScreen()
}

function enterSubmit(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    toggleScreen()
  } else if(e.key == 'Enter' && screen2.classList.contains('hide')) {
    handleClick()
  }
}
