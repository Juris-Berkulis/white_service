const specialists = [
    {
        id: '001',
        name: 'Илья',
        description: 'Мастер по ремонту, опыт 5 лет. В «Белом Сервисе» с июля 2020',
        experience: 'Более 4 800 выполненных работ',
        comment: 'Определю любую причину поломки!'
    },
    {
        id: '002',
        name: 'Александр',
        description: 'Мастер по ремонту, опыт 4,5 года. В «Белом Сервисе» с августа 2020',
        experience: 'Более 5 200 выполненных работ',
        comment: 'Верну к жизни, как самые первые модели, так и новинки смартфонов.'
    },
    {
        id: '003',
        name: 'Андрей',
        description: 'Мастер по ремонту и переклейке дисплеев, опыт 5 лет. В «Белом Сервисе» с сентября 2020',
        experience: 'Более 4 800 выполненных работ',
        comment: 'Ремонт Apple – мой конек!'
    },
    {
        id: '004',
        name: 'Дмитрий',
        description: 'Мастер по ремонту, опыт 9 лет. В «Белом Сервисе» с марта 2020',
        experience: 'Более 4 800 выполненных работ',
        comment: 'Мы даем гарантию и исполняем ее. На технику – это всегда год.'
    },
    {
        id: '005',
        name: 'Иван',
        description: 'Мастер по ремонту, опыт 5 лет. В «Белом Сервисе» с марта 2022',
        experience: 'Более 4 800 выполненных работ',
        comment: 'Собираю на коленке!'
    },
];

const addSpecialists = () => {
    const sliderCardsWrapper = document.querySelector('.specialists__sliderCardsWrapper');

    for (let i=0; i < specialists.length; i++) {
        const specialists__sliderCard = document.createElement('div');
        specialists__sliderCard.setAttribute('class', 'specialists__sliderCard');

        const specialists__sliderCardPhotoWrapper = document.createElement('div');
        specialists__sliderCardPhotoWrapper.setAttribute('class', 'specialists__sliderCardPhotoWrapper');
        const specialists__sliderCardPhoto = document.createElement('img');
        specialists__sliderCardPhoto.setAttribute('class', 'specialists__sliderCardPhoto');
        specialists__sliderCardPhoto.setAttribute('src', `./img/image/specialists/${specialists[i].id}.jpg`);
        specialists__sliderCardPhoto.setAttribute('alt', 'photo');

        const specialists__sliderCardName = document.createElement('p');
        specialists__sliderCardName.setAttribute('class', 'specialists__sliderCardName');
        specialists__sliderCardName.innerHTML = specialists[i].name;

        const specialists__sliderCardDescriptionWrapper = document.createElement('div');
        specialists__sliderCardDescriptionWrapper.setAttribute('class', 'specialists__sliderCardDescriptionWrapper');
        const specialists__sliderCardDescription = document.createElement('p');
        specialists__sliderCardDescription.setAttribute('class', 'specialists__sliderCardDescription');
        specialists__sliderCardDescription.innerHTML = specialists[i].description;

        const specialists__sliderCardExperienceWrapper = document.createElement('div');
        specialists__sliderCardExperienceWrapper.setAttribute('class', 'specialists__sliderCardExperienceWrapper');
        const specialists__sliderCardExperienceImg = document.createElement('img');
        specialists__sliderCardExperienceImg.setAttribute('class', 'specialists__sliderCardExperienceImg');
        specialists__sliderCardExperienceImg.setAttribute('src', `./img/image/icons/icon_tick.png`);
        specialists__sliderCardExperienceImg.setAttribute('alt', 'tick');
        const specialists__sliderCardExperienceText = document.createElement('p');
        specialists__sliderCardExperienceText.setAttribute('class', 'specialists__sliderCardExperienceText');
        specialists__sliderCardExperienceText.innerHTML = specialists[i].experience;

        const specialists__sliderCardCommentWrapper = document.createElement('div');
        specialists__sliderCardCommentWrapper.setAttribute('class', 'specialists__sliderCardCommentWrapper');
        const specialists__sliderCardCommentTriangle = document.createElement('div');
        specialists__sliderCardCommentTriangle.setAttribute('class', 'specialists__sliderCardCommentTriangle');
        const specialists__sliderCardComment = document.createElement('p');
        specialists__sliderCardComment.setAttribute('class', 'specialists__sliderCardComment');
        specialists__sliderCardComment.innerHTML = specialists[i].comment;

        specialists__sliderCardPhotoWrapper.append(specialists__sliderCardPhoto);

        specialists__sliderCardDescriptionWrapper.append(specialists__sliderCardDescription);

        specialists__sliderCardExperienceWrapper.append(specialists__sliderCardExperienceImg);
        specialists__sliderCardExperienceWrapper.append(specialists__sliderCardExperienceText);

        specialists__sliderCardCommentWrapper.append(specialists__sliderCardCommentTriangle);
        specialists__sliderCardCommentWrapper.append(specialists__sliderCardComment);

        specialists__sliderCard.append(specialists__sliderCardPhotoWrapper);
        specialists__sliderCard.append(specialists__sliderCardName);
        specialists__sliderCard.append(specialists__sliderCardDescriptionWrapper);
        specialists__sliderCard.append(specialists__sliderCardExperienceWrapper);
        specialists__sliderCard.append(specialists__sliderCardCommentWrapper);

        sliderCardsWrapper.append(specialists__sliderCard);
    }

    {/** Пример:
    <div class="specialists__sliderCard">
        <div class="specialists__sliderCardPhotoWrapper">
            <img class="specialists__sliderCardPhoto" src="./img/image/specialists/specialist_Iliya.jpg" alt="photo" width="223px">
        </div>
        <p class="specialists__sliderCardName">Илья</p>
        <div class="specialists__sliderCardDescriptionWrapper">
            <p class="specialists__sliderCardDescription">Мастер по ремонту, опыт 5 лет. В «Белом Сервисе» с июля 2020</p>
        </div>
        <div class="specialists__sliderCardExperienceWrapper">
            <img class="specialists__sliderCardExperienceImg" src="./img/image/icons/icon_tick.png" alt="tick" width="24px">
            <p class="specialists__sliderCardExperienceText">Более 4 800 выполненных работ</p>
        </div>
        <div class="specialists__sliderCardCommentWrapper">
            <div class="specialists__sliderCardCommentTriangle"></div>
            <p class="specialists__sliderCardComment">Определю любую причину поломки!</p>
        </div>
    </div> 
    */}
};

addSpecialists();
