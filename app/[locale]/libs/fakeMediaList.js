const medias = [
    {
        id: '123',
        name: 'Babel',
        image: "https://babel.ua/static/src/svg/logo.svg",
        desc: 'Зважаючи на підтримку, яка йде з заходу. Було зрозуміло, що англійська буде дуже потрібна. Вони скидають свої броніки — і до за стіл вже сідають звичайні чоловіки. Про викладання Олени на військовій базі',
        url: 'https://babel.ua/texts/82207-nihto-ne-priyde-y-za-tebe-nichogo-ne-virishit-olena-chekrizhova-u-2014-vijihala-z-donecka-zasnuvala-vlasnu-shkolu-angliyskoji-movi-i-zaraz-navchaye-ukrajinskih-biyciv-profayl?fbclid=IwAR3RpbJJYWbVGH9JXL9w36P8PhMrVnq0hp82bIQNdRs7o5yf3GfXocBbcjU'
    },
    {
        id: '124',
        name: 'CNN',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/2048px-CNN_International_logo.svg.png',
        desc: 'English is our lingua franca uh in interacting with instructions with the military and the media from around the globe',
        url: 'https://www.youtube.com/watch?v=AV0L5dYP06A'
    },
    {
        id: '126',
        name: 'Rubryka',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logo_-rubryka_1000x1000.png/330px-Logo_-rubryka_1000x1000.png',
        desc: 'Як заняття з військовими відрізняються від стандартних занять. Усі подробиці в статті.',
        url: 'https://rubryka.com/article/english-for-military/'
    },
    {
        id: '128',
        name: 'Kyiv Post',
        image: "https://www.kyivpost.com/assets/images/Kyivpost_logo_Black.svg",
        desc: 'Ukrainian soldiers scramble to learn English so they can make the most of combat aid.',
        url: 'https://www.kyivpost.com/post/6036'
    },
    {
        id: '129',
        name: 'Voice of America',
        image: 'https://www.voanews.com/Content/responsive/VOA/en-US/img/logo-compact.svg',
        desc: 'To help topple the language barrier, Chekryzhova, has traded in her quiet life to give crash courses to the armed forces.',
        url: 'https://www.voanews.com/a/armed-with-english-ukraine-soldiers-take-language-lessons/6889881.html'
    },
    {
        id: '130',
        name: 'Agency France Press',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Agence_France-Presse_Logo.svg/330px-Agence_France-Presse_Logo.svg.png',
        desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit...',
        url: ''
    },
    {
        id: '131',
        name: 'United News',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Yedyni_novyny_%28May_2022%2C_alternative%29.svg/330px-Yedyni_novyny_%28May_2022%2C_alternative%29.svg.png',
        desc: 'Вивчаючи англійську [армійську], ми краще й глибше вивчаємо військову справу.',
        url: 'https://www.youtube.com/watch?v=GpI3x2kgBnc'
    },
    {
        id: '132',
        name: 'bahmut.in.ua',
        image: 'https://media.mssg.me/thumbnails/small/w/645a1a9f5436550011d4d90e/websites/645a1ab0464e6b0018aaf70b/_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F,_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F_(1)_1683626863740.png',
        desc: 'Військова англійська має бути доступною для всіх, й не має бути привілеєм, чи засекреченою інформацією',
        url: 'https://bahmut.in.ua/59-heroi/5527-navishcho-pikhoti-znaty-anhliisku-movu-vykladachka-z-bakhmuta-rozpovila-pro-navchannia-viiskovykh'
    },
    {
        id: '125',
        name: '062 - Site of the city of Donetsk',
        image: 'https://s.62.ua/section/logo/upload/pers/2/logo.png',
        desc: 'Я виконую тут свою освітню спецоперацію, завдання якої — пройти з бійцями курс English for the Military.',
        url: 'https://www.62.ua/news/3409562/olena-cekrizova-koli-ne-vistacae-motivacii-a-zgaduu-svij-gniv-ta-otrimuu-nejmovirnu-energiu'
    },
    {
        id: '134',
        name: 'Express & Star (Britain)',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/mna/ZAGBMBKV35FF3IVFYAO6AJJXVI.png',
        desc: 'I really believe that our efforts will change something in this war and equip and arm our soldiers...',
        url: 'https://www.expressandstar.com/news/uk-news/2023/08/24/english-is-our-intellectual-weapon-says-ukrainian-military-teacher/'
    },
    {
        id: '135',
        name: 'ShoTam',
        image: 'https://shotam.info/wp-content/uploads/2020/04/header_logo.png',
        desc: 'Наш курс використовують навіть як частину реабілітаційної програми для звільнених військовополонених.',
        url: 'https://shotam.info/anhliyska-dlia-zsu-yak-vykladachka-olena-chekryzhova-stvoryla-proiekt-z-vyvchennia-anhliyskoi-sered-viyskovykh/'
    },
    {
        id: '136',
        name: 'Vechirniy Kyiv',
        image: 'https://vechirniy.kyiv.ua/img/logo-darkblue.svg',
        desc: 'Моя задача — пояснити структуру англійської, на прикладі того ж автомата, який розбирається на частини.',
        url: 'https://vechirniy.kyiv.ua/news/85443/'
    }
]
export default medias;

