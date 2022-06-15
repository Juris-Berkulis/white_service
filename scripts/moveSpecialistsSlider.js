const getParams = () => {
    const specialists__sliderCardsFocus = document.querySelector('.specialists__sliderCardsFocus');
    const sliderCardsFocusWidth = specialists__sliderCardsFocus.clientWidth;

    const specialists__sliderCardsWrapper = document.querySelector('.specialists__sliderCardsWrapper');
    const countChildrenInSpecialistsCardsWrapper = specialists__sliderCardsWrapper.children.length;
    const offsetSpecialistsCardsWrapper = +window.getComputedStyle(specialists__sliderCardsWrapper).transform.split(', ')[4];

    const specialists__sliderCard = document.querySelector('.specialists__sliderCard');
    const specialistsCardsWidth = specialists__sliderCard.clientWidth;
    const specialistCardsMarginRight = parseFloat(window.getComputedStyle(specialists__sliderCard, null).marginRight);

    return {
        sliderCardsFocusWidth: sliderCardsFocusWidth,
        countChildrenInSpecialistsCardsWrapper: countChildrenInSpecialistsCardsWrapper,
        offsetSpecialistsCardsWrapper: Math.round(offsetSpecialistsCardsWrapper / (specialistsCardsWidth + specialistCardsMarginRight)) * (specialistsCardsWidth + specialistCardsMarginRight),
        specialistsCardsWidth: specialistsCardsWidth,
        specialistCardsMarginRight: specialistCardsMarginRight,
        specialists__sliderCardsWrapper: specialists__sliderCardsWrapper,
    }
};

const getSliderActivePageNumber = (direction=0) => {
    const {
        sliderCardsFocusWidth,
        countChildrenInSpecialistsCardsWrapper,
        offsetSpecialistsCardsWrapper,
        specialistsCardsWidth,
        specialistCardsMarginRight
    } = getParams();

    const sliderActivePageNumber = -offsetSpecialistsCardsWrapper / (specialistsCardsWidth + specialistCardsMarginRight) + 1;

    const sliderPagesCount = countChildrenInSpecialistsCardsWrapper - (((sliderCardsFocusWidth + specialistCardsMarginRight) - (sliderCardsFocusWidth + specialistCardsMarginRight) % (specialistsCardsWidth + specialistCardsMarginRight)) / (specialistsCardsWidth + specialistCardsMarginRight)) + 1;

    if (sliderActivePageNumber + direction > sliderPagesCount) {
        return 1
    } else if (sliderActivePageNumber + direction < 1) {
        return sliderPagesCount
    } else {
        return sliderActivePageNumber + direction
    }
};

const setSliderActivPage = (direction=0) => {
    const specialists__sliderPagesWrapper = document.querySelector('.specialists__sliderPagesWrapper');
    const specialists__sliderPage_active = specialists__sliderPagesWrapper.querySelector('.specialists__sliderPage_active');
    if (specialists__sliderPage_active) {
        specialists__sliderPage_active.classList.remove('specialists__sliderPage_active');
    }

    const sliderActivePageIndex = getSliderActivePageNumber(direction) - 1;

    if (specialists__sliderPagesWrapper.querySelectorAll('.specialists__sliderPage')[sliderActivePageIndex]) {
        specialists__sliderPagesWrapper.querySelectorAll('.specialists__sliderPage')[sliderActivePageIndex].classList.add('specialists__sliderPage_active');
    }
};

const previousSpecialist = () => {
    const {
        sliderCardsFocusWidth,
        countChildrenInSpecialistsCardsWrapper,
        offsetSpecialistsCardsWrapper,
        specialistsCardsWidth,
        specialistCardsMarginRight,
        specialists__sliderCardsWrapper
    } = getParams();

    if (-offsetSpecialistsCardsWrapper - (specialistsCardsWidth + specialistCardsMarginRight) < 0) {
        specialists__sliderCardsWrapper.style.transform = `translateX(-${(countChildrenInSpecialistsCardsWrapper - (((sliderCardsFocusWidth + specialistCardsMarginRight) - (sliderCardsFocusWidth + specialistCardsMarginRight) % (specialistsCardsWidth + specialistCardsMarginRight)) / (specialistsCardsWidth + specialistCardsMarginRight))) * (specialistsCardsWidth + specialistCardsMarginRight)}px)`;
    } else {
        specialists__sliderCardsWrapper.style.transform = `translateX(-${-offsetSpecialistsCardsWrapper - (specialistsCardsWidth + specialistCardsMarginRight)}px)`;
    }

    setSliderActivPage(-1);
};

const nextSpecialist = () => {
    const {
        sliderCardsFocusWidth,
        countChildrenInSpecialistsCardsWrapper,
        offsetSpecialistsCardsWrapper,
        specialistsCardsWidth,
        specialistCardsMarginRight,
        specialists__sliderCardsWrapper
    } = getParams();

    if (-offsetSpecialistsCardsWrapper + (specialistsCardsWidth + specialistCardsMarginRight) + sliderCardsFocusWidth > countChildrenInSpecialistsCardsWrapper * (specialistsCardsWidth + specialistCardsMarginRight)) {
        specialists__sliderCardsWrapper.style.transform = 'translateX(0)';
    } else {
        specialists__sliderCardsWrapper.style.transform = `translateX(-${-offsetSpecialistsCardsWrapper + (specialistsCardsWidth + specialistCardsMarginRight)}px)`;
    }

    setSliderActivPage(1);
};

const switchSliderPage = (event, specialists__sliderPagesWrapper) => {
    const {
        specialistsCardsWidth,
        specialistCardsMarginRight,
        specialists__sliderCardsWrapper
    } = getParams();
    
    const specialists__sliderPage_active = specialists__sliderPagesWrapper.querySelector('.specialists__sliderPage_active');
    if (specialists__sliderPage_active) {
        specialists__sliderPage_active.classList.remove('specialists__sliderPage_active');
    }

    specialists__sliderCardsWrapper.style.transform = `translateX(-${event.target.attributes.pageNumber.value * (specialistsCardsWidth + specialistCardsMarginRight)}px)`;

    event.target.classList.add('specialists__sliderPage_active');
};

const addSliderPagination = () => {
    const {
        sliderCardsFocusWidth,
        countChildrenInSpecialistsCardsWrapper,
        specialistsCardsWidth,
        specialistCardsMarginRight
    } = getParams();

    const sliderPagesCount = countChildrenInSpecialistsCardsWrapper - (((sliderCardsFocusWidth + specialistCardsMarginRight) - (sliderCardsFocusWidth + specialistCardsMarginRight) % (specialistsCardsWidth + specialistCardsMarginRight)) / (specialistsCardsWidth + specialistCardsMarginRight)) + 1;

    const specialists__sliderPagesWrapper = document.querySelector('.specialists__sliderPagesWrapper');
    specialists__sliderPagesWrapper.innerHTML = '';

    for (let i=0; i < sliderPagesCount; i++) {
        const specialists__sliderPage = document.createElement('div');
        specialists__sliderPage.setAttribute('class', 'specialists__sliderPage');
        specialists__sliderPage.setAttribute('pageNumber', `${i}`);
        specialists__sliderPage.onclick = (event) => switchSliderPage(event, specialists__sliderPagesWrapper);
        
        specialists__sliderPagesWrapper.append(specialists__sliderPage);
    }

    setSliderActivPage();

    {/** Пример:
    <div class="specialists__sliderPagesWrapper">
        <div class="specialists__sliderPage specialists__sliderPage_active"></div>
        <div class="specialists__sliderPage"></div>
        <div class="specialists__sliderPage"></div>
        <div class="specialists__sliderPage"></div>
        <div class="specialists__sliderPage"></div>
    </div> 
    */}
};

addSliderPagination();

window.onresize = () => {
    const specialists__sliderCardsWrapper = document.querySelector('.specialists__sliderCardsWrapper');
    specialists__sliderCardsWrapper.style.transform = 'translateX(0)';

    const timerId = setTimeout(() => {
        addSliderPagination();

        return clearTimeout(timerId)
    }, 600);
};
