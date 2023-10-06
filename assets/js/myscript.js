const sliders = document.querySelectorAll('.slider-content') // دسترسی به figure ها
const nextControll = document.querySelector('.next') // دسترسی به دکمه Next
const prevControll = document.querySelector('.prev') // دسترسی به دکمه Prev
const _indicators = document.querySelector('.indicators') //دسترسی به indicators
let index = 0; //مقدار اولیه index

// =============== دسترسی و تغییر تصاویر داخل اسلاید ===============
function changeSlide() {
    for(let i = 0 ; i < sliders.length ; i++)
    {
        sliders[i].classList.remove('active')
    }
    sliders[index].classList.add('active')
}

// =============== ایجاد تابع Next =======================
function nextSlide() {
    if(index == sliders.length-1)
    {
        index = 0
    }
    else
    {
        index++
    }
    changeSlide()
}

// =============== کلیک دکمه Next =======================
nextControll.addEventListener('click', function() {
    nextSlide()
    updateIndicator()
})

// =============== ایجاد تابع Prev =======================
function prevSlide() {
    if(index == 0)
    {
        index = sliders.length-1
    }
    else
    {
        index--
    }
    changeSlide()
}

// =============== کلیک دکمه Prev =======================
prevControll.addEventListener('click', function() {
    prevSlide()
    updateIndicator()
})

// =============== ایجاد indicator =======================
function createIndicator() {
    for(let i = 0; i < sliders.length ; i++)
    {
        let div = document.createElement('div')
        div.classList.add('indicator')
        div.setAttribute('onclick','indicatorSlide(this)')
        document.querySelector('.indicators').appendChild(div)
        div.id =i
        _indicators.appendChild(div)
    }
}

// =============== لود پیشفرض indicator =======================
createIndicator()
_indicators.children[0].classList.add('active')

// =============== آپدیت تغییر indicator همزمان با عکس =======================
function updateIndicator() {
    for(let i = 0; i < _indicators.children.length ; i++)
    {
        _indicators.children[i].classList.remove('active')
    }
    _indicators.children[index].classList.add('active')
}

// =============== کلیک و تغییر indicator همزمان با عکس =======================
function indicatorSlide(s){
    index = s.id;
    changeSlide();
    updateIndicator();
}