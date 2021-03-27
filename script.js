const progress = document.getElementById('progress')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

const update = () => {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    if(currentActive === 1) {
        prevBtn.disabled = true
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
    const actives = document.querySelectorAll('.active')
    console.log(actives)
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100) + '%'
}
nextBtn.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prevBtn.addEventListener('click', () => {
    currentActive--
    console.log('prev', currentActive)
    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})