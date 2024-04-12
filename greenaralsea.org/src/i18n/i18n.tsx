import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector).use(initReactI18next).init({
        debug: true,
        lng: 'en',
        resources: {
            en: {
                translation: {
                        "nav": {
                          "home": "Home",
                          "faq": "FAQ",
                          "plantingSites": "Where we plant?",
                          "team": "Our team",
                          "contact": "Contact us",
                          "news": "News",
                          "termsOfUse": "Terms of use"
                        },
                        "home": {
                          "quickFacts": "Quick Facts",
                          "aralTragedy": "Aral Sea Tragedy",
                          "greeningInitiative": "Greening Initiative",
                          "joinUs": "Join us",
                          "aboutUs": "About us",
                          "contributeUSD": "Contribute in USD",
                          "contributeUZS": "Contribute in UZS",
                        },
                        "aralTragedy": {
                          "description": "Planting the drought-resistant saxaul tree on the Aral Sea’s dried seabed is the best way to turn tragedy into new opportunities for all.",
                          "totalTrees": "Total trees:",
                          "treeCount": "65983",
                          "callToAction": "Let’s make this happen!"
                        },
                        "ourMission": {
                            "title": "Our Mission",
                            "heading":"Let's unite and save the Aral Sea region",
                            "content":"We invite you to join us on this journey of regeneration and hope. Whether through advocacy, donations, or volunteer work, your support is crucial in turning the tide for the Aral Sea. Together, we can make a difference. Together, we can restore the Aral Sea to its rightful place as a jewel of Central Asia, a source of life, and a beacon of ecological restoration."
                        },
                        mostamount:"Most Amount",
                        mostRecent:"Most Recent",
                        tree:"trees",
                        "quickFacts": {
                          "title": "Quick Facts",
                            fact1:"‘Aral Sea’ translates to the Sea of Islands (of which there were once over a thousand!)",
                            fact2:"At its greatest size the Aral Sea was only slightly smaller than Ireland, fed by the Amudarya and Syrdarya rivers.",
                            fact3:"The sea has lost 60,000 km2, or 90% of its size, over half a century",
                            fact4:"Along with the Aral Sea’s waters, the marshes and wetland ecosystems of the Amudarya and Syrdarya river deltas have also disappeared",
                            fact5:"50% of Aral Sea flora and fauna has been lost, including 11 types of fish, 11 plants species, 26 species of birds, and 12 mammals",
                            fact6:"The Aral Sea was once the centre of a fishing industry that caught 40,000 tonnes of fish each year – that prosperity is now gone",
                            fact7:"Through frequent droughts and dust storms, 75 million tonnes of toxic salts and sand are spread from the seabed every year",   
                            fact8:"Cancer and tuberculosis rates in the Aral Sea region are 50% higher than in other regions",
                            fact9:"Only 50% of the population has access to clean drinking water",
                            fact10:"The region has the highest poverty rate",
                            fact11:"Saxaul is a plant native to western Uzbekistan, able to grow in harsh, saline conditions with little water and providing habitat for diverse fauna",
                            fact12:"The Aral Sea tragedy cannot be reversed, but the situation is not hopeless."
                        },
                        "donation": {
                          "urgency": "IF WE DON’T ACT NOW, TOMORROW IT’S CONSEQUENCES WILL REACH ALL OF US",
                          "callToAct": "YOU can make a difference for people living there and beyond by making the environment healthier and more suitable.",
                          "contributionImpact": "EVERY CONTRIBUTION WILL: Give people hope for a brighter future, Mitigate climate change and CO2 emissions, Prevent the further spread of toxic salts and sand across Central Asia and beyond, Help transform the empty Aral seabed into a green blanket of trees, Improve biodiversity and have a positive impact on the environment, Create and support sustainable livelihood opportunities, and improve health conditions for people in the Aral Sea region"
                        },
                        "footer": {
                          "learnMore": "Learn More",
                          "ourPartners": "Our partners",
                          "termsOfUse": "Terms of use"
                        },
                        aralSeaTragedy:"Aral Sea Tragedy",
                        conrtibutions:"Contributions",
                        whynow:"WHY IT IS TIME TO ACT NOW?",
                        news:"Aral Sea News",
                        tragedyTitle:"IF WE DON’T ACT NOW, TOMORROW IT’S CONSEQUENCES WILL REACH ALL OF US.",
                        tragedy1:"For centuries, the Aral Sea was the world’s fourth-largest inland lake, offering its treasures and sustaining many settlements, where people enjoyed prosperous lives as fishermen, farmers, herders, craftsmen, and traders.",
                        tragedy2:"However, in just the past 60 to 80 years, the sea lost 90% of its size and was transformed into the Aralkum desert. This disaster has had catastrophic impacts on biodiversity with many types of fish, animals, and plants completely disappearing from the region.",
                        tragedy3:"You can make a difference for people living there and beyond by making the environment healthier and more suitable.",
                        tragedy4:"Toxic salts and sand are picked up by winds and carried out over to hundreds and thousands of kilometers harming people’s livelihoods and well-being and impacting their identities and culture.",
                        tragedy5:"Studies show that each year, winds from the Aral Sea carry 100 million tonnes of toxic sand and salts that reach out European cities, glaciers of Iceland, forests in Norway, and even Antarctica.",
                        readmore:"Read More",
                        transformingTragedy:{
                            title:"TRANSFORMING THE TRAGEDY INTO THE NEW OPPORTUNITIES FOR ALL",
                            transform1:"There is a consensus that bringing water back to the larger South Aral Sea is unlikely to happen.",
                            transform2:"However, this does not mean that nothing can be done.",
                            transform3:"YOU can make a difference for people living there and beyond by making the environment healthier and more suitable.",
                            transform4:"We aim to plant saxaul in the Aral seabed and transform 100 hectares of desert into verdant forest.",
                            transform5:"Saxaul can help stop the spread of toxic salts and desertification – just one tree",
                            transform6:"This will be a FIRST but CRUCIAL MOVE to replacing the Aral Sea with a green blanket.",
                        },
                        contribution:{
                            title:"HOW YOU CAN CONTRIBUTE:",
                            contrubute1:"With just a few clicks, you can help us plant our 100-hectare (247 acres) plot on the Aral seabed with saxaul saplings. Every dollar you donate will plant one tree, helping our forest to grow.",
                            contrubute2:"You can also support us by learning more about the Aral Sea disaster and the saxaul tree solution, and getting the word out through blogs, social media, events, and conversations.",
                            contrubute3:"The Aral Sea disaster is a global problem that needs a global response – you can make a difference.",
                        },
                        partners:"Our Partners",
                        champions:"Our green Champions",
                        whereweplant:"Where we plant?",
                        plantTitle:"In the initial phase, we will plant saxaul in a separate land plot of 100 ha or 247 acres designated for the initiative. We plan to expand beyond this initial area as our initiative grows and finds support. You can see the location of the designated plot area below:",
                        ourTeam:"Our Team",
                        contact:{
                            title:"Contact Us",
                            heading:"If you need our help, have questions about how to use the platform or are experiencing difficulties, please do not hesitate to contact us.",
                            location:"Location",
                            bugreport:"Bug report",
                            technicalsupport:"Technical support",
                        }
                }
            },
            ru: {
                translation:{
                    "nav": {
                      "home": "Главная",
                      "faq": "Часто задаваемые вопросы",
                      "plantingSites": "Где мы сажаем?",
                      "team": "Наша команда",
                      "contact": "Свяжитесь с нами",
                        "news": "Новости",
                        "termsOfUse": "Условия использования"
                    },
                    "home": {
                      "quickFacts": "Факты",
                      "aralTragedy": "Трагедия Арала",
                      "greeningInitiative": "Озеленение Арала",
                      "joinUs": "Присоединиться",
                      "aboutUs": "О нас",
                      "contributeUSD": "Вклад в Долларах США",
                      "contributeUZS": "Вклад в Сумах"
                    },
                    "aralTragedy": {
                      "description": "Посадка засухоустойчивого саксаула на высохшем дне Аральского моря - лучший способ обратить трагедию в новые возможности для всех.",
                      "totalTrees": "Посажено деревьев:",
                      "treeCount": "65983",
                      "callToAction": "Давайте осуществим это!"
                    },
                    "ourMission": {
                        "title": "Наша миссия",
                        "heading":"Давайте объединимся и спасем регион Аральского моря",
                        "content":"Мы приглашаем вас присоединиться к нам на этом пути восстановления и надежды. Будь то путем пропаганды, пожертвований или волонтерской работы, ваша поддержка крайне важна для изменения хода событий в Аральском море. Вместе мы можем добиться перемен. Вместе мы можем вернуть Аральское море на его законное место как жемчужину Центральной Азии, источник жизни и маяк экологического восстановления."
                    },
                    conrtibutions:"Вклады",
                    mostAmount:"Самая большая сумма",
                    mostRecent:"Самые последние",
                    tree:"дерева",
                    "quickFacts": {
                      "title": "Факты",
                      "fact1": "\"Аральское море\" переводится как \"Море островов\" (численность которых когда-то была более тысячи!)",
                      "fact2": "При своих наибольших размерах, площадь Аральского моря, питаемого водами рек Амударья и Сырдарья, была лишь чуть меньше площади Ирландии.",
                      "fact3": "За полвека море потеряло 60 000 км2 или 90% своей площади.Вместе с водами Аральского моря исчезли также и болота и водно-болотные экосистемы дельт рек Амударья и Сырдарья.",
                      "fact4": "Вместе с водами Аральского моря исчезли также и болота и водно-болотные экосистемы дельт рек Амударья и Сырдарья.",
                      "fact5": "Катастрофу Аральского моря нельзя обратить вспять, однако ситуация всё же не является безнадежной.",
                      "fact6": "Когда-то Аральское море было центром рыбного промысла, когда ежегодно добывалось 40 000 тонн рыбы - цветущая отрасль, которая теперь утрачена",
                      "fact7": "Частые засухи и пыльные бури ежегодно поднимают со дна моря и распространяют 75 миллионов тонн ядовитых солей и песка.",
                      "fact8": "Уровень заболеваемости раком и туберкулёзом в Приаралье на 50% выше, чем в других регионах.",
                      "fact9": "Лишь 50% населения имеет доступ к чистой питьевой воде.",
                      "fact10": "Уровень бедности в регионе самый высокий.",
                      "fact11": "Саксаул - это растение, произрастающее на западе Узбекистана, способное расти в жестких, солоноватых условиях с небольшим количеством воды и обеспечивающее местообитание для разнообразной фауны.",
                      "fact12": "Катастрофу Аральского моря нельзя обратить вспять, однако ситуация всё же не является безнадежной."

                    },
                    "donation": {
                      "urgency": "ЕСЛИ МЫ НЕ БУДЕМ ДЕЙСТВОВАТЬ СЕГОДНЯ, ЗАВТРА МЫ ВСЕ ОЩУТИМ НА СЕБЕ ВСЕ ПОСЛЕДСТВИЯ.",
                      "callToAct": "ВЫ можете помочь изменить ситуацию для людей, живущих в регионе и за его пределами, сделав окружающую среду более здоровой и пригодной для жизни.",
                      "contributionImpact": "КАЖДЫЙ ВКЛАД НАПРАВЛЕН ДЛЯ ТОГО ЧТОБЫ: Дать людям надежду на более светлое будущее, Смягчить последствия изменения климата и выбросов CO2, Предотвратить дальнейшее распространение ядовитых солей и песка на территорию всей Центральной Азии и за её пределами, Помочь превратить высохшее дно Аральского моря в зеленое одеяло из деревьев Саксаула, Улучшить биоразнообразие и оказать положительное воздействие на окружающую среду, Помочь в создании и поддержке возможностей для устойчивых средств жизнеобеспечения, а также улучшении состояния здоровья населения в регионе Аральского моря."
                    },
                    "footer": {
                      "learnMore": "Дополнительные ресурсы",
                      "ourPartners": "Наши партнёры",
                      "termsOfUse": "Условия пользования"
                    },
                    aralSeaTragedy:"Трагедия Аральского моря",
                    whynow:"ПОЧЕМУ ПОРА ДЕЙСТВОВАТЬ НЕМЕДЛЕННО?",
                    news:"Новости Аральского моря",
                    tragedyTitle:"ЕСЛИ МЫ НЕ БУДЕМ ДЕЙСТВОВАТЬ СЕГОДНЯ, ЗАВТРА МЫ ВСЕ ОЩУТИМ НА СЕБЕ ВСЕ ПОСЛЕДСТВИЯ.",
                    tragedy1:"На протяжении веков Аральское море являлось четвёртым по величине внутриматериковым озером в мире, предоставляя свои дары и поддерживая жизнь многочисленных населённых пунктов, где люди – рыбаки, фермеры, пастухи, ремесленники и торговцы, наслаждались своей благополучной жизнью.",
                    tragedy2:"Однако, буквально за какие-то 60-80 лет море сократилось в размере на 90% и превратилось в пустыню Аралкум. Это бедствие оказало катастрофическое воздействие на биоразнообразие региона, так как множество видов рыб, животных и растений полностью исчезли в регионе.",
                    tragedy3:"Вы можете изменить положение людей, живущих там и за ее пределами, сделав окружающую среду более здоровой и подходящей.",
                    tragedy4:"Ядовитые соли и песок поднимаются ветрами и переносятся на сотни и тысячи километров, нанося вред источникам жизнеобеспечения людей, их благополучию, а также негативно влияя на их самобытность и культуру.",
                    tragedy5:"Исследования показывают, что каждый год ветра с Аральского моря разносят 100 миллионов тонн ядовитого песка и солей, которые достигают европейских городов, ледников Исландии, лесов Норвегии и даже Антарктики.",
                    readmore:"Подробнее",
                    transformingTragedy:{
                        title:"ТРАНСФОРМАЦИЯ ТРАГЕДИИ В НОВЫЕ ВОЗМОЖНОСТИ ДЛЯ ВСЕХ",
                        transform1:"Существует консенсус в том, что восстановление воды в большее Южное Аральское море маловероятно.",
                        transform2:"Однако это не означает, что ничего нельзя сделать.",
                        transform3:"Вы можете изменить положение людей, живущих там и за ее пределами, сделав окружающую среду более здоровой и подходящей.",
                        transform4:"Мы планируем посадить саксаул на дне Аральского моря и превратить 100 гектаров пустыни в зеленый лес.",
                        transform5:"Саксаул может помочь остановить распространение ядовитых солей и опустынивание - всего одно дерево",
                        transform6:"Это будет ПЕРВЫМ, но КРИТИЧЕСКИ ВАЖНЫМ ШАГОМ к замене Аральского моря зеленым одеялом."
                    } ,
                    contribution:{
                        title:"КАКИМ ОБРАЗОМ МОЖНО ВНЕСТИ СВОЙ ВКЛАД:",
                        contrubute1:"Всего лишь несколько действий на телефоне или ноутбуке, и Вы сможете помочь нам высадить саженцы саксаула на выбранном участке площадью 100 гектаров (247 акров) на высохшем дне Арала. Каждый внесенный доллар посадит одно дерево и поможет нам расширить наш лес.",
                        contrubute2:"Вы также можете поддержать нас, узнав больше о катастрофе Аральского моря и методе решения проблемы с помощью высадки саксаула, посредством социальных сетей, наших блогов, а также мероприятий и дискуссий по данной тематике.",
                        contrubute3:"Катастрофа Аральского моря является глобальной проблемой, требующей глобальных мер по реагированию, и вы можете изменить ситуацию к лучшему."
                    },
                    partners:"Наши партнеры",
                    champions:"Наши зеленые чемпионы",
                    whereweplant:"Где мы сажаем?",
                    plantTitle:"На начальном этапе мы будем высаживать саксаул на отдельном земельном участке площадью 100 га или 247 акров, выделенном для инициативы. Мы планируем расшириться за пределы этой первоначальной площади по мере того, как наша инициатива будет расширяться и находить поддержку. Ниже вы можете увидеть расположение выделенного участка:",
                    ourTeam:"Наша команда",
                    contact:{
                        title:"Свяжитесь с нами",
                        heading:"Если вам нужна наша помощь, у вас есть вопросы о том, как пользоваться платформой или возникли трудности, пожалуйста, не стесняйтесь обращаться к нам.",
                        location:"Местонахождение",
                        bugreport:"Сообщить о проблеме",
                        technicalsupport:"Техническая поддержка",
                    }
            }
                  
            },
            uz: {
                translation: {
                    "nav": {
                      "home": "Bosh sahifa",
                      "faq": "Ko'p so'raladigan savollar",
                      "plantingSites": "Daraxtlar qayerga ekiladi?",
                      "team": "Bizning jamoa",
                      "contact": "Biz bilan bog'lanish",
                      "news": "Yangiliklar",
                        "termsOfUse": "Foydalanish shartlari"
                    },
                    "home": {
                      "quickFacts": "Faktlar",
                      "aralTragedy": "Orol fojiasi",
                      "greeningInitiative": "Orolni yashil qilish tashabbusi",
                      "joinUs": "Bizga qo'shiling",
                      "aboutUs": "Biz haqimizda",
                      "contributeUSD": "Dollarda hissa qo'shing",
                      "contributeUZS": "Somda hissa qo'shing"
                    },
                    "ourMission": {
                        "title": "Bizning maqsadimiz",
                        "heading":"Birgalikda Orol dengizi hududini yashil qilaylik",
                        "content":"Sizni yangilanish va umid yo'lida bizga qo'shilishga taklif qilamiz. Targ'ibot, xayriya yoki ko'ngilli ish orqalimi, sizning yordamingiz Orol dengizi to'lqinini o'zgartirishda muhim ahamiyatga ega. Birgalikda biz farq qila olamiz. Biz birgalikda Orol dengizini Markaziy Osiyo gavhari, hayot manbai, ekologik tiklanish mayoqi sifatida o‘zining munosib joyiga qaytara olamiz."
                    },
                    conrtibutions:"Hissa qo'shganlar",
                    "aralTragedy": {
                      "description": "Qurg'oqchilikka chidamli saxaul daraxtini Orolning quruq tubiga ekish bu fojiyani barcha uchun yangi imkoniyatlarga aylantirishning eng yaxshi usulidir.",
                      "totalTrees": "Jami daraxtlar:",
                      "treeCount": "65983",
                      "callToAction": "Buni amalga oshiraylik!"
                    },
                    mostAmount:"Eng ko'p",
                    mostRecent:"Eng so'nggi",
                    tree:"daraxt",
                    "quickFacts": {
                        "title": "Faktlar",
                        fact1:"\"Orol dengizi\" so'zi Orollar dengiziga tarjima qilingan (bir vaqtlar mingdan ortiq bo'lgan!)",
                        fact2:"Orol dengizi o'zining eng katta hajmida Amudaryo va Sirdaryodan to'yingan Irlandiyadan bir oz kichikroq edi.",
                        fact3:"Dengiz yarim asr davomida 60 000 km2 yoki hajmining 90 foizini yo'qotdi",
                        fact4:"Orol dengizi suvlari bilan bir qatorda Amudaryo va Sirdaryo deltalarining botqoqliklari va botqoqlik ekotizimlari ham yo‘qolgan.",
                        fact5:"Orol dengizi flora va faunasining 50 foizi, jumladan, baliqlarning 11 turi, oʻsimliklarning 11 turi, qushlarning 26 turi, sutemizuvchilarning 12 turi yoʻqolgan.",
                        fact6:"Orol dengizi bir vaqtlar baliqchilik sanoatining markazi bo‘lib, yiliga 40 000 tonna baliq ovlanadi – bu farovonlik endi yo‘q.",
                        fact7:"Tez-tez sodir bo'ladigan qurg'oqchilik va chang bo'ronlari tufayli har yili dengiz tubidan 75 million tonna zaharli tuz va qum tarqaladi.",
                        fact8:"Orol dengizi atrofida saraton va sil kasalliklari boshqa hududlarga qaraganda 50 foizga yuqori.",
                        fact9:"Aholining atigi 50 foizi toza ichimlik suviga egadir.",
                        fact10:"Qashshoqlik darajasi mintaqadagi eng yuqori ko'rsatkichdir",
                        fact11:"(Bizning baxtimizga) Saksovul Oʻzbekistonning gʻarbiy qismida tugʻilgan oʻsimlik turi boʻlib, ogʻir, shoʻrlangan sharoitda kam suv bilan oʻsadi va turli fauna uchun joy yaratadi.",
                        fact12:"Orol fojiasini qaytarib bo'lmaydi, ammo vaziyat hali ham umidsiz emas.",
                    },
                    "donation": {
                      "urgency": "AGAR BIZ BUGUN HARAKAT QILMASAK, ERTAGA UNING OQIBATLARI HAMMAMIZGA TA'SIR QILADI.",
                      "callToAct": "SIZ atrof-muhitni sog'lomroq va yashashga yaroqliroq qilish orqali u yerda va undan tashqarida yashayotgan odamlar hayotini yaxshilashingiz mumkin.",
                      "contributionImpact": "HAR BIR HISSA: Odamlarga yorug'roq kelajak uchun umid baxsh etadi, Iqlim o'zgarishini va CO2 chiqindilarini kamaytiradi, Markaziy Osiyo va undan tashqarida toksik tuzlar va qumni tarqalishining oldini oladi, Bo'sh Orol dengizi tubini daraxtlar bilan yashil yopishga yordam beradi, Biologik xilma-xillikni yaxshilaydi va atrof-muhitga ijobiy ta'sir ko'rsatadi, Orol dengizi hududidagi odamlarning salomatligini yaxshilaydi va barqaror yashash imkoniyatlarini yaratadi va qo'llab-quvvatlaydi."
                    },
                    "footer": {
                      "learnMore": "Ko'proq bilib oling",
                      "ourPartners": "Bizning hamkorlar",
                      "termsOfUse": "Foydalanish shartlari"
                    },
                    aralSeaTragedy:"Orol fojiasi",
                    tragedyTitle:"AGAR BIZ BUGUN HARAKAT QILMASAK, ERTAGA UNING OQIBATLARI HAMMAMIZGA TA'SIR QILADI.",
                    whynow:"NEGA HARAKATNI HOZIR BOSHLASH KERAK?",
                    news:"Orol yangiliklari",
                    tragedy1:"Asrlar davomida Orol dengizi  dunyoda toʻrtinchi yirik ichki koʻl boʻlib, xazinalarini oʻzida jamlagan va koʻplab aholi punktlarini qoʻllab-quvvatlagan, bu yerda odamlar baliqchi, dehqon, chorvador, hunarmand va savdogar sifatida farovon hayot kechirgan.ng katta ichki dengizi edi, o'z maromlarini taklif qilish va ko'plab aholi yashash joylarini yashirib turardi, odamlar baliqchilar, fermerlar, o'g'itlar, ustozlar va savdo-sotiqchilar sifatida yaxshi hayot kechirganlar.",
                    tragedy2:"Biroq, so'nggi 60-80 yil ichida dengiz o'zining 90% hajmini yo'qotdi va Orolqum cho'liga aylandi. Ushbu ofat biologik xilma-xillikka halokatli ta'sir ko'rsatdi, ko'plab baliqlar, hayvonlar va o'simliklar mintaqadan butunlay yo'q bo'lib ketdi.",
                    tragedy3:"Atrof-muhitni sog'lom va mosroq qilish orqali siz u erda va undan tashqarida yashovchi odamlar uchun farq qilishingiz mumkin.",
                    tragedy4:"Zaharli tuzlar va qumlar shamol tomonidan ko'tarilib, yuzlab va minglab kilometrlarga ko'tarilib, odamlarning turmush tarzi va farovonligiga zarar etkazadi va ularning o'ziga xosligi va madaniyatiga ta'sir qiladi.",
                    tragedy5:"Tadqiqotlar shuni ko'rsatadiki, har yili Orol dengizi shamollari Yevropa shaharlari, orol muzliklari, Norvegiyadagi o'rmonlar va hatto Antarktidaga yetib boruvchi 100 million tonna zaharli qum va tuzlarni olib o'tadi.",
                    readmore:"Batafsil",
                    transformingTragedy:{
                        title:"FOJIYANI BARCHA UCHUN YANGI IMKONIYATLARGA AYLANTIRISH",
                        transform1:"Katta Janubiy Orol dengiziga suvni qaytarishning ehtimoli juda kam.",
                        transform2:"Biroq, bu hech narsa qilish mumkin emas degani emas.",
                        transform3:"SIZ atrof-muhitni yanada sog'lom va yashashga yaroqli qilish orqali mintaqada va undan tashqarida yashovchi odamlar uchun o'zgarishlar qilishda yordam bera olasiz.",
                        transform4:"Maqsadimiz Orol dengizining qurigan tubiga saksovul ekish, 100 gektar cho‘lni yashil o‘rmonga aylantirishdir.",
                        transform5:"Saksovul zaharli tuzlarning tarqalishini va chang tarqalishini oldini olishga yordam beradi. Misol uchun, bitta daraxt to'rt tonnagacha qumni sig'dira oladi",
                        transform6:"Bu birinchi lekin zarur harakat bo'ladi, Orol dengizni yashillikka o'rmonga aylantirishimiz mumkin."
                    },
                    contribution:{
                        title:"QANDAY QILIB HISSA QO'SHISH MUMKIN:",
                        contrubute1:"Telefoningiz yoki noutbukingiz orqali bir necha qadam bilan Orol dengizining qurib qolgan tubidagi tanlangan 100 gektar (247 gektar) yer maydoniga saksovul ko‘chatlarini ekishga yordam berasiz. Har bir dollar bir daraxt ekadi va o'rmonimizni kengaytirishga yordam beradi.",
                        contrubute2:"Shuningdek, Orol dengizi halokati va muammoni saksovul ekish yo‘li bilan hal qilish usullari, ijtimoiy tarmoqlar, bloglarimiz, shuningdek, ushbu mavzudagi tadbir va muhokamalar orqali bizni qo‘llab-quvvatlashingiz mumkin.",
                        contrubute3:"Orol dengizi halokati global muammo bo'lib, global javob choralarini talab qiladi va siz o'zgarishlarni amalga oshirishingiz mumkin.."
                    },
                    partners:"Bizning hamkorlar",
                    champions:"Bizning yashil Chempionlar",
                    whereweplant:"Qayerda eko bog'larni tashkil etamiz?",
                    plantTitle:"Dastlabki bosqichda tashabbus uchun ajratilgan 100 gektar yoki 247 gektar yer maydoniga saksovul ekamiz. Tashabbusimiz kuchayib, qo‘llab-quvvatlanar ekan, biz ushbu boshlang‘ich sohadan tashqarida ham kengaytirishni rejalashtirmoqdamiz. Belgilangan uchastkaning joylashuvini quyida ko'rishingiz mumkin:",
                    ourTeam:"Bizning jamoa",
                    contact:{
                        title:"Biz bilan bog'lanish",
                        heading:"Agar sizga yordam kerak bo'lsa, platformadan foydalanish haqida savollar bo'lsa yoki qiyinchiliklarga duch kelgan bo'lsangiz, biz bilan bog'laning.",
                        location:"Joylashuv",
                        bugreport:"Xato haqida xabar",
                        technicalsupport:"Texnik yordam",
                    }
                }}
        }
    });