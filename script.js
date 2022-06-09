const sectionElement = [...document.querySelectorAll('.section-container')]
// intersection observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting)
    if(entry.isIntersecting) observer.unobserve(entry.target) //prevent from sliding out
  })
},
                                          {
  rootMargin: '0%',
  threshold: 0.3,
}
                                         )

sectionElement.forEach(section => {
  observer.observe(section)
})



// random divs
let howManyDivs = 80

const createRandomDivs = (amount) => {
  for(let i = 0; i < amount; i++){      
    newDiv = document.createElement("div")
    newDiv.classList.add('random')
    newDiv.classList.add(`star-${[i]}`)
    document.body.appendChild(newDiv);
  }
  
  const randomDivs = [...document.getElementsByClassName('random')],
    winWidth = window.innerWidth,
    winHeight = window.innerHeight
  
    randomDivs.forEach(div => {
      randomTop = getRandomNumber(0, winHeight)
      randomLeft = getRandomNumber(0, winWidth)
      divHeight = getRandomNumber(1, 5)   // size of stars

      div.style.top = randomTop + 'px'
      div.style.left = randomLeft + 'px'
      div.style.height = divHeight + 'px'
      div.style.backgroundColor = 'white'
  })
}


  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min  
  }
  
  
createRandomDivs(howManyDivs)


const confirmBtn = document.querySelector('.confirm')
// create stars on click
confirmBtn.onclick = () => {
  const starsAmount = document.querySelector('.stars-amount').value
  const stars = [...document.querySelectorAll('.random')]
    stars.forEach(star => {             //remove all currently existing
    star.parentNode.removeChild(star);
  })
  createRandomDivs(starsAmount)
}