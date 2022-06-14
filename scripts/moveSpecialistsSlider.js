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
};
