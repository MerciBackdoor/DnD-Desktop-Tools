// Полная база данных бестиария (Всего существ: 2874)
const bestiaryData = [
    {
        "name": "[0] Аластра",
        "url": "https://dnd.su/bestiary/7758-alastrah"
    },
    {
        "name": "[0] Альмираж",
        "url": "https://dnd.su/bestiary/1313-almiraj"
    },
    {
        "name": "[0] Арабэлль",
        "url": "https://dnd.su/bestiary/4679-arabelle"
    },
    {
        "name": "[1/8] Ааракокра симулякр",
        "url": "https://dnd.su/bestiary/7756-aarakocra-simulacrum"
    },
    {
        "name": "[1/4] Ааракокра",
        "url": "https://dnd.su/bestiary/30-aarakocra"
    },
    {
        "name": "[1/4] Анарх",
        "url": "https://dnd.su/bestiary/10542-anarch"
    },
    {
        "name": "[1/2] Агата Серебряная ложка",
        "url": "https://dnd.su/bestiary/7885-agathe-silverspoon"
    },
    {
        "name": "[1/2] Амфисбена",
        "url": "https://dnd.su/bestiary/7169-amphisbaena"
    },
    {
        "name": "[1/2] Амфисбена",
        "url": "https://dnd.su/bestiary/7498-amphisbaena"
    },
    {
        "name": "[1] Аазон Талиери",
        "url": "https://dnd.su/bestiary/6047-aazon-talieri"
    },
    {
        "name": "[1] Алдани (Лобстеролюд)",
        "url": "https://dnd.su/bestiary/1314-aldani-lobsterfolk"
    },
    {
        "name": "[1] Альсеида",
        "url": "https://dnd.su/bestiary/7159-alseid"
    },
    {
        "name": "[1] Архелон",
        "url": "https://dnd.su/bestiary/5962-archelon"
    },
    {
        "name": "[1] Архелон зомби",
        "url": "https://dnd.su/bestiary/5980-archelon-zombie"
    },
    {
        "name": "[1] Астральная зараза",
        "url": "https://dnd.su/bestiary/9251-astral-blight"
    },
    {
        "name": "[2] Аартук звездный ужас",
        "url": "https://dnd.su/bestiary/8700-aartuk-starhorror"
    },
    {
        "name": "[2] Аартук травянник",
        "url": "https://dnd.su/bestiary/8701-aartuk-weedling"
    },
    {
        "name": "[2] Ави",
        "url": "https://dnd.su/bestiary/5103-avi"
    },
    {
        "name": "[2] Автогном",
        "url": "https://dnd.su/bestiary/8707-autognome"
    },
    {
        "name": "[2] Агдон Длинный шарф",
        "url": "https://dnd.su/bestiary/8432-agdon-longscarf"
    },
    {
        "name": "[2] Акулотелое отродье",
        "url": "https://dnd.su/bestiary/7443-sharkbody-abomination"
    },
    {
        "name": "[2] Аллозавр",
        "url": "https://dnd.su/bestiary/88-allosaurus"
    },
    {
        "name": "[2] Аллозавр зомби",
        "url": "https://dnd.su/bestiary/5979-allosaurus-zombie"
    },
    {
        "name": "[2] Алоизия Телфан",
        "url": "https://dnd.su/bestiary/7887-aloysia-telfan"
    },
    {
        "name": "[2] Андер",
        "url": "https://dnd.su/bestiary/12562-ander"
    },
    {
        "name": "[2] Аниматронный аллозавр",
        "url": "https://dnd.su/bestiary/12689-animatronic-allosaurus"
    },
    {
        "name": "[2] Анхег",
        "url": "https://dnd.su/bestiary/38-ankheg"
    },
    {
        "name": "[2] Ардра Желчь",
        "url": "https://dnd.su/bestiary/9256-fel-ardra"
    },
    {
        "name": "[2] Арло Киттлтоу (1-4 уровня)",
        "url": "https://dnd.su/bestiary/12714-arlo-kettletoe-levels-1-4"
    },
    {
        "name": "[2] Архонт-светоч",
        "url": "https://dnd.su/bestiary/13039-lantern-archon"
    },
    {
        "name": "[2] Ауспиция Дран",
        "url": "https://dnd.su/bestiary/7478-auspicia-dran"
    },
    {
        "name": "[2] Ашара",
        "url": "https://dnd.su/bestiary/6024-asharra"
    },
    {
        "name": "[3] Аартук-старейшина",
        "url": "https://dnd.su/bestiary/8699-aartuk-elder"
    },
    {
        "name": "[3] Адепт боевых искусств",
        "url": "https://dnd.su/bestiary/6829-martial-arts-adept"
    },
    {
        "name": "[3] Адепт боевых искусств Жентарима",
        "url": "https://dnd.su/bestiary/5185-zhent-martial-arts-adept"
    },
    {
        "name": "[3] Адская гончая",
        "url": "https://dnd.su/bestiary/197-hell-hound"
    },
    {
        "name": "[3] Айо Джабе (1-го уровня)",
        "url": "https://dnd.su/bestiary/7790-ayo-jabe-tier-1"
    },
    {
        "name": "[3] Акросский гоплит",
        "url": "https://dnd.su/bestiary/7122-akroan-hoplite"
    },
    {
        "name": "[3] Алагартхас",
        "url": "https://dnd.su/bestiary/8426-alagarthas"
    },
    {
        "name": "[3] Алйанор Кинблэйд",
        "url": "https://dnd.su/bestiary/5821-aljanor-keenblade"
    },
    {
        "name": "[3] Амарит Коппервейн",
        "url": "https://dnd.su/bestiary/5823-amarith-coppervein"
    },
    {
        "name": "[3] Амрик Вантампур",
        "url": "https://dnd.su/bestiary/6404-amrik-vanthampur"
    },
    {
        "name": "[3] Анкилозавр",
        "url": "https://dnd.su/bestiary/89-ankylosaurus"
    },
    {
        "name": "[3] Анкилозавр зомби",
        "url": "https://dnd.su/bestiary/6015-ankylosaurus-zombie"
    },
    {
        "name": "[3] Арло Киттлтоу (5-8 уровня)",
        "url": "https://dnd.su/bestiary/12715-arlo-kettletoe-levels-5-8"
    },
    {
        "name": "[3] Арук Громовержец Туунлакалага",
        "url": "https://dnd.su/bestiary/5800-aruk-thundercaller-thuunlakalaga"
    },
    {
        "name": "[3] Астральный эльф воитель",
        "url": "https://dnd.su/bestiary/8706-astral-elf-warrior"
    },
    {
        "name": "[4] Агония",
        "url": "https://dnd.su/bestiary/9263-agony"
    },
    {
        "name": "[4] Азака Буреклык",
        "url": "https://dnd.su/bestiary/6025-azaka-stormfang"
    },
    {
        "name": "[4] Азбара Джос",
        "url": "https://dnd.su/bestiary/3328-azbara-jos"
    },
    {
        "name": "[4] Аномалия пылающего нароста",
        "url": "https://dnd.su/bestiary/17268-blistercoil-weird"
    },
    {
        "name": "[4] Архонт-гончая",
        "url": "https://dnd.su/bestiary/13038-hound-archon"
    },
    {
        "name": "[5] Адская оса",
        "url": "https://dnd.su/bestiary/6401-hellwasp"
    },
    {
        "name": "[5] Айзек Стражни",
        "url": "https://dnd.su/bestiary/946-izek-strazni"
    },
    {
        "name": "[5] Айо Джабе (2-го уровня)",
        "url": "https://dnd.su/bestiary/7791-ayo-jabe-tier-2"
    },
    {
        "name": "[5] Аллип",
        "url": "https://dnd.su/bestiary/6460-allip"
    },
    {
        "name": "[5] Амбициозный наёмный убийца",
        "url": "https://dnd.su/bestiary/13234-ambitious-assassin"
    },
    {
        "name": "[5] Амелия Кассалантер",
        "url": "https://dnd.su/bestiary/5101-ammalia-cassalanter"
    },
    {
        "name": "[5] Анастасия Карелова",
        "url": "https://dnd.su/bestiary/4678-anastrasya-karelova"
    },
    {
        "name": "[5] Андавир",
        "url": "https://dnd.su/bestiary/9269-andavier"
    },
    {
        "name": "[5] Андроид",
        "url": "https://dnd.su/bestiary/17197-android"
    },
    {
        "name": "[5] Астральный эльф звёздный жрец",
        "url": "https://dnd.su/bestiary/8705-astral-elf-star-priest"
    },
    {
        "name": "[5] Астральный эльф почетный караульный",
        "url": "https://dnd.su/bestiary/8704-astral-elf-honor-guard"
    },
    {
        "name": "[5] Афемия",
        "url": "https://dnd.su/bestiary/7192-aphemia"
    },
    {
        "name": "[6] Ааракокра рулевой",
        "url": "https://dnd.su/bestiary/9270-aarakocra-spelljammer"
    },
    {
        "name": "[6] Арло Киттлтоу (9-11 уровня)",
        "url": "https://dnd.su/bestiary/12716-arlo-kettletoe-levels-9-11"
    },
    {
        "name": "[6] Ашанн",
        "url": "https://dnd.su/bestiary/7889-ashann"
    },
    {
        "name": "[7] Аериси Калинос",
        "url": "https://dnd.su/bestiary/3658-aerisi-kalinoth"
    },
    {
        "name": "[7] Алчность",
        "url": "https://dnd.su/bestiary/5731-avarice"
    },
    {
        "name": "[7] Альфа грик",
        "url": "https://dnd.su/bestiary/189-grick-alpha"
    },
    {
        "name": "[7] Арманит",
        "url": "https://dnd.su/bestiary/6465-armanite"
    },
    {
        "name": "[7] Артус Симбер",
        "url": "https://dnd.su/bestiary/6006-artus-cimber"
    },
    {
        "name": "[7] Астральный эльф командир",
        "url": "https://dnd.su/bestiary/8703-astral-elf-commander"
    },
    {
        "name": "[8] Аберрантный зилот",
        "url": "https://dnd.su/bestiary/12494-aberrant-zealot"
    },
    {
        "name": "[8] Айо Джабе (3-го уровня)",
        "url": "https://dnd.su/bestiary/7792-ayo-jabe-tier-3"
    },
    {
        "name": "[8] Айсар Кроненстром",
        "url": "https://dnd.su/bestiary/5765-isarr-kronenstrom"
    },
    {
        "name": "[8] Ал’хайя",
        "url": "https://dnd.su/bestiary/5631-alchaia"
    },
    {
        "name": "[8] Арадрина Сова",
        "url": "https://dnd.su/bestiary/7888-aradrine-the-owl"
    },
    {
        "name": "[8] Арригал",
        "url": "https://dnd.su/bestiary/4680-arrigal"
    },
    {
        "name": "[8] Архонт-страж",
        "url": "https://dnd.su/bestiary/13041-warden-archon"
    },
    {
        "name": "[8] Астральный эльф аристократ",
        "url": "https://dnd.su/bestiary/8702-astral-elf-aristocrat"
    },
    {
        "name": "[9] Амерго",
        "url": "https://dnd.su/bestiary/5100-ahmaergo"
    },
    {
        "name": "[9] Анхолокс",
        "url": "https://dnd.su/bestiary/10566-anhkolox"
    },
    {
        "name": "[10] Аббат",
        "url": "https://dnd.su/bestiary/4671-the-abbot"
    },
    {
        "name": "[10] Аболет",
        "url": "https://dnd.su/bestiary/31-aboleth"
    },
    {
        "name": "[10] Алая погибель",
        "url": "https://dnd.su/bestiary/10605-red-ruin"
    },
    {
        "name": "[10] Аликсиан Охотник",
        "url": "https://dnd.su/bestiary/7820-alyxian-the-hunter"
    },
    {
        "name": "[10] Алхун",
        "url": "https://dnd.su/bestiary/6458-alhoon"
    },
    {
        "name": "[10] Аэрозавр",
        "url": "https://dnd.su/bestiary/12092-aerosaur"
    },
    {
        "name": "[11] Аликсиан Истерзанный",
        "url": "https://dnd.su/bestiary/7821-alyxian-the-tormented"
    },
    {
        "name": "[11] Алкилит",
        "url": "https://dnd.su/bestiary/6459-alkilith"
    },
    {
        "name": "[11] Аррант Квилл",
        "url": "https://dnd.su/bestiary/5012-arrant-quill"
    },
    {
        "name": "[12] Аболет Аликсиан",
        "url": "https://dnd.su/bestiary/7813-alyxian-aboleth"
    },
    {
        "name": "[12] Аликсиан Бессердечный",
        "url": "https://dnd.su/bestiary/7816-alyxian-the-callous"
    },
    {
        "name": "[12] Арканалот",
        "url": "https://dnd.su/bestiary/320-arcanaloth"
    },
    {
        "name": "[12] Архидруид",
        "url": "https://dnd.su/bestiary/6463-archdruid"
    },
    {
        "name": "[12] Архимаг",
        "url": "https://dnd.su/bestiary/419-archmage"
    },
    {
        "name": "[12] Архонт падающих звёзд",
        "url": "https://dnd.su/bestiary/7170-archon-of-falling-stars"
    },
    {
        "name": "[12] Афсун Горбани",
        "url": "https://dnd.su/bestiary/8533-afsoun-ghorbani"
    },
    {
        "name": "[13] Аликсиан Обездоленный",
        "url": "https://dnd.su/bestiary/7818-alyxian-the-dispossessed"
    },
    {
        "name": "[13] Алтизавр",
        "url": "https://dnd.su/bestiary/12093-altisaur"
    },
    {
        "name": "[13] Атропал",
        "url": "https://dnd.su/bestiary/2633-atropal"
    },
    {
        "name": "[14] Аликсиан Прощённый",
        "url": "https://dnd.su/bestiary/7814-alyxian-the-absolved"
    },
    {
        "name": "[14] Ангел пакта смерти",
        "url": "https://dnd.su/bestiary/6919-deathpact-angel"
    },
    {
        "name": "[14] Архонт Триумвирата",
        "url": "https://dnd.su/bestiary/8289-archon-of-the-triumvirate"
    },
    {
        "name": "[15] Архонт границ",
        "url": "https://dnd.su/bestiary/17330-archon-of-boundaries"
    },
    {
        "name": "[16] Адское орудие",
        "url": "https://dnd.su/bestiary/6794-hellfire-engine"
    },
    {
        "name": "[16] Архан Жестокий",
        "url": "https://dnd.su/bestiary/4257-arkhan-the-cruel"
    },
    {
        "name": "[17] Акаанваэрд",
        "url": "https://dnd.su/bestiary/11835-akaanvaerd"
    },
    {
        "name": "[17] Андросфинкс",
        "url": "https://dnd.su/bestiary/295-androsphinx"
    },
    {
        "name": "[17] Ауринакс",
        "url": "https://dnd.su/bestiary/5102-aurinax"
    },
    {
        "name": "[17] Аштиррантора",
        "url": "https://dnd.su/bestiary/6137-ashtyrranthor"
    },
    {
        "name": "[18] Амнизу",
        "url": "https://dnd.su/bestiary/6461-amnizu"
    },
    {
        "name": "[18] Астерия",
        "url": "https://dnd.su/bestiary/13301-asteria"
    },
    {
        "name": "[21] Алустриэль Сильверхенд",
        "url": "https://dnd.su/bestiary/15724-alustriel-silverhand"
    },
    {
        "name": "[21] Араста",
        "url": "https://dnd.su/bestiary/7213-arasta"
    },
    {
        "name": "[21] Арктурия",
        "url": "https://dnd.su/bestiary/6125-arcturia"
    },
    {
        "name": "[21] Астральный Дредноут",
        "url": "https://dnd.su/bestiary/6466-astral-dreadnought"
    },
    {
        "name": "[22] Аурнозчи",
        "url": "https://dnd.su/bestiary/13260-aurnozci"
    },
    {
        "name": "[23] Аурелия",
        "url": "https://dnd.su/bestiary/17292-aurelia"
    },
    {
        "name": "[23] Ацерерак",
        "url": "https://dnd.su/bestiary/1232-acererak"
    },
    {
        "name": "[30] Аспект Багамута",
        "url": "https://dnd.su/bestiary/5524-aspect-of-bahamut"
    },
    {
        "name": "[30] Аспект Тиамат",
        "url": "https://dnd.su/bestiary/5519-aspect-of-tiamat"
    },
    {
        "name": "[0] Бабуин",
        "url": "https://dnd.su/bestiary/326-baboon"
    },
    {
        "name": "[0] Бабуин химера",
        "url": "https://dnd.su/bestiary/5801-chimeric-baboon"
    },
    {
        "name": "[0] Барсук",
        "url": "https://dnd.su/bestiary/327-badger"
    },
    {
        "name": "[0] Безумная Мэри",
        "url": "https://dnd.su/bestiary/4767-mad-mary"
    },
    {
        "name": "[0] Белдора",
        "url": "https://dnd.su/bestiary/7769-beldora"
    },
    {
        "name": "[0] Бепис Медовар",
        "url": "https://dnd.su/bestiary/5106-bepis-honeymaker"
    },
    {
        "name": "[0] Блуто Крогаров",
        "url": "https://dnd.su/bestiary/4687-bluto-krogarov"
    },
    {
        "name": "[0] Бормотун",
        "url": "https://dnd.su/bestiary/17206-gibberling"
    },
    {
        "name": "[0] Бумажная птица",
        "url": "https://dnd.su/bestiary/8391-paper-bird"
    },
    {
        "name": "[1/8] Барон Варгас Валлакович",
        "url": "https://dnd.su/bestiary/4681-baron-vargas-vallakovich"
    },
    {
        "name": "[1/8] Белый Нефритовый император",
        "url": "https://dnd.su/bestiary/8545-white-jade-emperor"
    },
    {
        "name": "[1/8] Боггл",
        "url": "https://dnd.su/bestiary/6482-boggle"
    },
    {
        "name": "[1/8] Больная гигантская крыса",
        "url": "https://dnd.su/bestiary/5642-diseased-giant-rat"
    },
    {
        "name": "[1/8] Бригганок",
        "url": "https://dnd.su/bestiary/8364-brigganock"
    },
    {
        "name": "[1/8] Бродяга",
        "url": "https://dnd.su/bestiary/7689-gadabout"
    },
    {
        "name": "[1/8] Бурт",
        "url": "https://dnd.su/bestiary/7437-boerth"
    },
    {
        "name": "[1/4] Баппидо",
        "url": "https://dnd.su/bestiary/5875-buppido"
    },
    {
        "name": "[1/2] Баровийская ведьма",
        "url": "https://dnd.su/bestiary/4660-barovian-witch"
    },
    {
        "name": "[1/2] Боевой конь",
        "url": "https://dnd.su/bestiary/329-warhorse"
    },
    {
        "name": "[1/2] Боско Даггерхэнд",
        "url": "https://dnd.su/bestiary/6042-bosco-daggerhand"
    },
    {
        "name": "[1] Багбир",
        "url": "https://dnd.su/bestiary/13-bugbear"
    },
    {
        "name": "[1] Беното Кралазар",
        "url": "https://dnd.su/bestiary/9254-benoto-kralazar"
    },
    {
        "name": "[1] Бес",
        "url": "https://dnd.su/bestiary/84-imp"
    },
    {
        "name": "[1] Бескостный",
        "url": "https://dnd.su/bestiary/6853-boneless"
    },
    {
        "name": "[1] Болотник",
        "url": "https://dnd.su/bestiary/5264-moorbounder"
    },
    {
        "name": "[1] Босс гоблинов",
        "url": "https://dnd.su/bestiary/182-goblin-boss"
    },
    {
        "name": "[1] Бритвеннолозая зараза",
        "url": "https://dnd.su/bestiary/13120-razorvine-blight"
    },
    {
        "name": "[1] Бронзовый соболь",
        "url": "https://dnd.su/bestiary/7166-bronze-sable"
    },
    {
        "name": "[1] Бурый медведь",
        "url": "https://dnd.su/bestiary/330-brown-bear"
    },
    {
        "name": "[2] Баран Сахарок",
        "url": "https://dnd.su/bestiary/5063-ram-sugar"
    },
    {
        "name": "[2] Бард",
        "url": "https://dnd.su/bestiary/6476-bard"
    },
    {
        "name": "[2] Барнибус Бластвинд",
        "url": "https://dnd.su/bestiary/5105-barnibus-blastwind"
    },
    {
        "name": "[2] Белый медведь",
        "url": "https://dnd.su/bestiary/328-polar-bear"
    },
    {
        "name": "[2] Белый сторожевой дрейк",
        "url": "https://dnd.su/bestiary/6788-white-guard-drake"
    },
    {
        "name": "[2] Бербаланг",
        "url": "https://dnd.su/bestiary/6478-berbalang"
    },
    {
        "name": "[2] Берсерк",
        "url": "https://dnd.su/bestiary/420-berserker"
    },
    {
        "name": "[2] Бессмертный солдат",
        "url": "https://dnd.su/bestiary/4996-undying-soldier"
    },
    {
        "name": "[2] Блайндхейм",
        "url": "https://dnd.su/bestiary/13626-blindheim"
    },
    {
        "name": "[2] Бларг",
        "url": "https://dnd.su/bestiary/5869-blurg"
    },
    {
        "name": "[2] Близнецы Селенелион",
        "url": "https://dnd.su/bestiary/8376-selenelion-twin"
    },
    {
        "name": "[2] Блуждающий огонёк",
        "url": "https://dnd.su/bestiary/311-will-o-wisp"
    },
    {
        "name": "[2] Большой мимик",
        "url": "https://dnd.su/bestiary/6235-large-mimic"
    },
    {
        "name": "[2] Бормочущий ротовик",
        "url": "https://dnd.su/bestiary/173-gibbering-mouther"
    },
    {
        "name": "[2] Брахма Лутьер",
        "url": "https://dnd.su/bestiary/7473-brahma-lutier"
    },
    {
        "name": "[3] Бариаур-странник",
        "url": "https://dnd.su/bestiary/13075-bariaur-wanderer"
    },
    {
        "name": "[3] Билли Бобёр",
        "url": "https://dnd.su/bestiary/8041-billy-beaver"
    },
    {
        "name": "[3] Бол'бара",
        "url": "https://dnd.su/bestiary/7452-bolbara"
    },
    {
        "name": "[3] Большой мимик",
        "url": "https://dnd.su/bestiary/8050-large-mimic"
    },
    {
        "name": "[3] Бородатый дьявол (Барбазу)",
        "url": "https://dnd.su/bestiary/78-bearded-devil"
    },
    {
        "name": "[3] Бронированный саблезубый тигр",
        "url": "https://dnd.su/bestiary/4672-armored-saber-toothed-tiger"
    },
    {
        "name": "[3] Брусифа",
        "url": "https://dnd.su/bestiary/13254-brusipha"
    },
    {
        "name": "[3] Булезау",
        "url": "https://dnd.su/bestiary/6484-bulezau"
    },
    {
        "name": "[3] Буцефал",
        "url": "https://dnd.su/bestiary/4686-beucephalus"
    },
    {
        "name": "[4] Бабау",
        "url": "https://dnd.su/bestiary/6467-babau"
    },
    {
        "name": "[4] Баньши",
        "url": "https://dnd.su/bestiary/40-banshee"
    },
    {
        "name": "[4] Баньши Глухолесья",
        "url": "https://dnd.su/bestiary/5795-lonelywood-banshee"
    },
    {
        "name": "[4] Баргест",
        "url": "https://dnd.su/bestiary/6477-barghest"
    },
    {
        "name": "[4] Боевой вождь орков",
        "url": "https://dnd.su/bestiary/258-orc-war-chief"
    },
    {
        "name": "[4] Бонни",
        "url": "https://dnd.su/bestiary/5109-bonnie"
    },
    {
        "name": "[5] Бандерхобб",
        "url": "https://dnd.su/bestiary/6470-banderhobb"
    },
    {
        "name": "[5] Барлгура",
        "url": "https://dnd.su/bestiary/64-barlgura"
    },
    {
        "name": "[5] Барон сахуагинов",
        "url": "https://dnd.su/bestiary/278-sahuagin-baron"
    },
    {
        "name": "[5] Безоружный холмовой великан",
        "url": "https://dnd.su/bestiary/7711-unarmed-hill-giant"
    },
    {
        "name": "[5] Безумная Мэгги",
        "url": "https://dnd.su/bestiary/6424-mad-maggie"
    },
    {
        "name": "[5] Бессмертный всадник",
        "url": "https://dnd.su/bestiary/17334-deathless-rider"
    },
    {
        "name": "[5] Бехолдер зомби",
        "url": "https://dnd.su/bestiary/325-beholder-zombie"
    },
    {
        "name": "[5] Благословлённый драконом",
        "url": "https://dnd.su/bestiary/6313-dragon-blessed"
    },
    {
        "name": "[5] Боевой ангел",
        "url": "https://dnd.su/bestiary/1897-battleforce-angel"
    },
    {
        "name": "[5] Бронтозавр",
        "url": "https://dnd.su/bestiary/6602-brontosaurus"
    },
    {
        "name": "[5] Бронтозавр зомби",
        "url": "https://dnd.su/bestiary/5982-brontosaurus-zombie"
    },
    {
        "name": "[5] Бурый увалень",
        "url": "https://dnd.su/bestiary/305-umber-hulk"
    },
    {
        "name": "[5] Бьёрнхильда Солвигсдоттир",
        "url": "https://dnd.su/bestiary/5768-bjornhild-solvigsdottir"
    },
    {
        "name": "[6] Б'рог",
        "url": "https://dnd.su/bestiary/8717-brogh"
    },
    {
        "name": "[6] Баер",
        "url": "https://dnd.su/bestiary/7427-buyer"
    },
    {
        "name": "[6] Барбатос",
        "url": "https://dnd.su/bestiary/7679-barbatos"
    },
    {
        "name": "[6] Белый абишай",
        "url": "https://dnd.su/bestiary/6457-white-abishai"
    },
    {
        "name": "[6] Бодак",
        "url": "https://dnd.su/bestiary/6481-bodak"
    },
    {
        "name": "[6] Боевой робот",
        "url": "https://dnd.su/bestiary/17231-combat-robot"
    },
    {
        "name": "[6] Брахиозавр",
        "url": "https://dnd.su/bestiary/5963-brachiosaurus"
    },
    {
        "name": "[6] Брахиозавр зомби",
        "url": "https://dnd.su/bestiary/5981-brachiosaurus-zombie"
    },
    {
        "name": "[7] Бавлорна Гнилая солома",
        "url": "https://dnd.su/bestiary/8412-bavlorna-blightstraw"
    },
    {
        "name": "[8] Бастиан Термандар",
        "url": "https://dnd.su/bestiary/4921-bastian-thermandar"
    },
    {
        "name": "[8] Безжалостный рубака",
        "url": "https://dnd.su/bestiary/6884-relentless-slasher"
    },
    {
        "name": "[8] Бозорг-машина",
        "url": "https://dnd.su/bestiary/17198-maschin-i-bozorg"
    },
    {
        "name": "[8] Большой зорн",
        "url": "https://dnd.su/bestiary/6224-big-xorn"
    },
    {
        "name": "[9] Благоткас",
        "url": "https://dnd.su/bestiary/3330-blagothkus"
    },
    {
        "name": "[9] Блюститель закона Братства порядка",
        "url": "https://dnd.su/bestiary/13200-fraternity-of-order-law-bender"
    },
    {
        "name": "[9] Боевой священник",
        "url": "https://dnd.su/bestiary/7063-war-priest"
    },
    {
        "name": "[9] Босс Август",
        "url": "https://dnd.su/bestiary/13241-boss-augustus"
    },
    {
        "name": "[9] Босс Делюр",
        "url": "https://dnd.su/bestiary/13242-boss-delour"
    },
    {
        "name": "[9] Браксат",
        "url": "https://dnd.su/bestiary/8716-braxat"
    },
    {
        "name": "[9] Бримскарда",
        "url": "https://dnd.su/bestiary/7755-brimskarda"
    },
    {
        "name": "[10] Безглавый железный голем",
        "url": "https://dnd.su/bestiary/5809-headless-iron-golem"
    },
    {
        "name": "[10] Бессмертный советник",
        "url": "https://dnd.su/bestiary/4995-undying-councilor"
    },
    {
        "name": "[10] Биомант",
        "url": "https://dnd.su/bestiary/17297-biomancer"
    },
    {
        "name": "[11] Баба Лысага",
        "url": "https://dnd.su/bestiary/947-baba-lysaga"
    },
    {
        "name": "[11] Балханнот",
        "url": "https://dnd.su/bestiary/6469-balhannoth"
    },
    {
        "name": "[11] Бехир",
        "url": "https://dnd.su/bestiary/42-behir"
    },
    {
        "name": "[12] Бакунава",
        "url": "https://dnd.su/bestiary/8407-bakunawa"
    },
    {
        "name": "[12] Безжалостный джаггернаут",
        "url": "https://dnd.su/bestiary/6886-relentless-juggernaut"
    },
    {
        "name": "[12] Безумный голем",
        "url": "https://dnd.su/bestiary/6157-mad-golem"
    },
    {
        "name": "[12] Безумный маг с горы Бараток",
        "url": "https://dnd.su/bestiary/4799-the-mad-mage-of-mount-baratok"
    },
    {
        "name": "[12] Берлейн Сумеречная тень",
        "url": "https://dnd.su/bestiary/6142-berlain-shadowdusk"
    },
    {
        "name": "[13] Бак Мэй",
        "url": "https://dnd.su/bestiary/5013-bak-mei"
    },
    {
        "name": "[13] Бармаглот",
        "url": "https://dnd.su/bestiary/8372-jabberwock"
    },
    {
        "name": "[13] Бехолдер",
        "url": "https://dnd.su/bestiary/43-beholder"
    },
    {
        "name": "[13] Бронзифьюм",
        "url": "https://dnd.su/bestiary/4940-bronzefume"
    },
    {
        "name": "[15] Безжалостный колосажатель",
        "url": "https://dnd.su/bestiary/15711-relentless-impaler"
    },
    {
        "name": "[15] Бортак",
        "url": "https://dnd.su/bestiary/15692-borthak"
    },
    {
        "name": "[16] Буровой червь",
        "url": "https://dnd.su/bestiary/6182-bore-worm"
    },
    {
        "name": "[17] Баэрналот",
        "url": "https://dnd.su/bestiary/13071-baernaloth"
    },
    {
        "name": "[18] Бобовый вурм",
        "url": "https://dnd.su/bestiary/17331-beanstalk-wurm"
    },
    {
        "name": "[18] Борборигмос",
        "url": "https://dnd.su/bestiary/17296-borborygmos"
    },
    {
        "name": "[19] Балор",
        "url": "https://dnd.su/bestiary/63-balor"
    },
    {
        "name": "[19] Баэль",
        "url": "https://dnd.su/bestiary/6468-bael"
    },
    {
        "name": "[22] Белаширра",
        "url": "https://dnd.su/bestiary/4818-belashyrra"
    },
    {
        "name": "[23] Бафомет",
        "url": "https://dnd.su/bestiary/5861-baphomet"
    },
    {
        "name": "[23] Бафомет",
        "url": "https://dnd.su/bestiary/6475-baphomet"
    },
    {
        "name": "[24] Беледрос Визерблум",
        "url": "https://dnd.su/bestiary/8056-beledros-witherbloom"
    },
    {
        "name": "[25] Бел",
        "url": "https://dnd.su/bestiary/6435-bel"
    },
    {
        "name": "[0] Баллиста",
        "url": "https://dnd.su/bestiary/3316-ballista"
    },
    {
        "name": "[0] Боец",
        "url": "https://dnd.su/bestiary/8017-warrior"
    },
    {
        "name": "[0] Боец",
        "url": "https://dnd.su/bestiary/8023-warrior"
    },
    {
        "name": "[0] Визгун",
        "url": "https://dnd.su/bestiary/156-shrieker"
    },
    {
        "name": "[0] Вири Флигол",
        "url": "https://dnd.su/bestiary/7750-wiri-fleagol"
    },
    {
        "name": "[0] Ворон",
        "url": "https://dnd.su/bestiary/333-raven"
    },
    {
        "name": "[0] Ворона",
        "url": "https://dnd.su/bestiary/6231-crow"
    },
    {
        "name": "[1/8] Валенарский ястреб",
        "url": "https://dnd.su/bestiary/4971-valenar-hawk"
    },
    {
        "name": "[1/8] Варнир",
        "url": "https://dnd.su/bestiary/5073-varnyr"
    },
    {
        "name": "[1/8] Верблюд",
        "url": "https://dnd.su/bestiary/331-camel"
    },
    {
        "name": "[1/8] Ветвистая зараза",
        "url": "https://dnd.su/bestiary/1-twig-blight"
    },
    {
        "name": "[1/8] Вистани страж",
        "url": "https://dnd.su/bestiary/4808-vistana-guard"
    },
    {
        "name": "[1/8] Воитель Мадаруа",
        "url": "https://dnd.su/bestiary/17213-warrior-of-madarua"
    },
    {
        "name": "[1/8] Воитель племени",
        "url": "https://dnd.su/bestiary/422-tribal-warrior"
    },
    {
        "name": "[1/8] Воитель племени споровый слуга",
        "url": "https://dnd.su/bestiary/5794-tribal-warrior-spore-servant"
    },
    {
        "name": "[1/4] Вегепигмей",
        "url": "https://dnd.su/bestiary/7060-vegepygmy"
    },
    {
        "name": "[1/4] Вегепигмей падальщик",
        "url": "https://dnd.su/bestiary/17209-vegepygmy-scavenger"
    },
    {
        "name": "[1/4] Велоцираптор",
        "url": "https://dnd.su/bestiary/6607-velociraptor"
    },
    {
        "name": "[1/4] Велоцираптор зомби",
        "url": "https://dnd.su/bestiary/5983-velociraptor-zombie"
    },
    {
        "name": "[1/4] Вернувшийся-скиталец",
        "url": "https://dnd.su/bestiary/7202-returned-drifter"
    },
    {
        "name": "[1/4] Вол",
        "url": "https://dnd.su/bestiary/6490-ox"
    },
    {
        "name": "[1/4] Волк",
        "url": "https://dnd.su/bestiary/2-wolf"
    },
    {
        "name": "[1/4] Волк Верхнего мира",
        "url": "https://dnd.su/bestiary/11851-wolf-of-the-overworld"
    },
    {
        "name": "[1/4] Волотамп «Воло» Геддарм",
        "url": "https://dnd.su/bestiary/6007-volothamp-volo-geddarm"
    },
    {
        "name": "[1/4] Волшебник «Паноптикуса»",
        "url": "https://dnd.su/bestiary/5178-panopticus-wizard"
    },
    {
        "name": "[1/2] Вайя трёхсоцветная",
        "url": "https://dnd.su/bestiary/1399-tri-flower-frond"
    },
    {
        "name": "[1/2] Валенарская гончая",
        "url": "https://dnd.su/bestiary/4970-valenar-hound"
    },
    {
        "name": "[1/2] Валенарский скакун",
        "url": "https://dnd.su/bestiary/1649-valenar-steed"
    },
    {
        "name": "[1/2] Вейлас",
        "url": "https://dnd.su/bestiary/7534-valas"
    },
    {
        "name": "[1/2] Взрослый миконид",
        "url": "https://dnd.su/bestiary/246-myconid-adult"
    },
    {
        "name": "[1/2] Взрослый миконид Заггтмой",
        "url": "https://dnd.su/bestiary/5836-myconid-adult-of-zuggtmoy"
    },
    {
        "name": "[1/2] Винлинг",
        "url": "https://dnd.su/bestiary/8398-wynling"
    },
    {
        "name": "[1/2] Воитель краулов",
        "url": "https://dnd.su/bestiary/17272-kraul-warrior"
    },
    {
        "name": "[1/2] Ворг",
        "url": "https://dnd.su/bestiary/332-worg"
    },
    {
        "name": "[1/2] Вордана Жезрал",
        "url": "https://dnd.su/bestiary/7715-vordana-jezral"
    },
    {
        "name": "[1/2] Выплодок",
        "url": "https://dnd.su/bestiary/6852-podling"
    },
    {
        "name": "[1/2] Вьющаяся зараза",
        "url": "https://dnd.su/bestiary/46-vine-blight"
    },
    {
        "name": "[1] Варгулья",
        "url": "https://dnd.su/bestiary/7059-vargouille"
    },
    {
        "name": "[1] Вегепигмей колючка",
        "url": "https://dnd.su/bestiary/7062-thorny-vegepygmy"
    },
    {
        "name": "[1] Вернувшийся-страж",
        "url": "https://dnd.su/bestiary/7205-returned-sentry"
    },
    {
        "name": "[1] Взрывающийся иссохшийся зомби",
        "url": "https://dnd.su/bestiary/7404-husk-zombie-bursters"
    },
    {
        "name": "[1] Вирмлинг глубинного дракона",
        "url": "https://dnd.su/bestiary/6265-deep-dragon-wyrmling"
    },
    {
        "name": "[1] Вирмлинг латунного дракона",
        "url": "https://dnd.su/bestiary/118-brass-dragon-wyrmling"
    },
    {
        "name": "[1] Вирмлинг медного дракона",
        "url": "https://dnd.su/bestiary/126-copper-dragon-wyrmling"
    },
    {
        "name": "[1] Водяной упырь",
        "url": "https://dnd.su/bestiary/4939-aquatic-ghoul"
    },
    {
        "name": "[1] Воитель ужаса",
        "url": "https://dnd.su/bestiary/4654-dread-warrior"
    },
    {
        "name": "[1] Волшебный дракончик",
        "url": "https://dnd.su/bestiary/152-faerie-dragon"
    },
    {
        "name": "[1] Волшебный дракончик (Жёлтый)",
        "url": "https://dnd.su/bestiary/5637-faerie-dragon-yellow"
    },
    {
        "name": "[1] Волшебный дракончик (Красный)",
        "url": "https://dnd.su/bestiary/5635-faerie-dragon-red"
    },
    {
        "name": "[1] Волшебный дракончик (Оранжевый)",
        "url": "https://dnd.su/bestiary/5636-faerie-dragon-orange"
    },
    {
        "name": "[2] Валетта",
        "url": "https://dnd.su/bestiary/5372-valetta"
    },
    {
        "name": "[2] Вампират",
        "url": "https://dnd.su/bestiary/8884-vampirate"
    },
    {
        "name": "[2] Вдохновлённый",
        "url": "https://dnd.su/bestiary/4977-inspired"
    },
    {
        "name": "[2] Вегепигмей вождь",
        "url": "https://dnd.su/bestiary/7061-vegepygmy-chief"
    },
    {
        "name": "[2] Вегепигмей колючка-охотник",
        "url": "https://dnd.su/bestiary/17210-vegepygmy-thorny-hunter"
    },
    {
        "name": "[2] Великий вождь Халрик Костолом",
        "url": "https://dnd.su/bestiary/7721-great-chief-halric-bonesnapper"
    },
    {
        "name": "[2] Верворон",
        "url": "https://dnd.su/bestiary/949-wereraven"
    },
    {
        "name": "[2] Верворон",
        "url": "https://dnd.su/bestiary/6905-wereraven"
    },
    {
        "name": "[2] Веркрыса",
        "url": "https://dnd.su/bestiary/222-wererat"
    },
    {
        "name": "[2] Верховный миконид",
        "url": "https://dnd.su/bestiary/247-myconid-sovereign"
    },
    {
        "name": "[2] Верховный миконид Заггтмой",
        "url": "https://dnd.su/bestiary/5837-myconid-sovereign-of-zuggtmoy"
    },
    {
        "name": "[2] Взрослый крутик",
        "url": "https://dnd.su/bestiary/6824-adult-kruthik"
    },
    {
        "name": "[2] Вигган Неттлби",
        "url": "https://dnd.su/bestiary/4930-wiggan-nettlebee"
    },
    {
        "name": "[2] Вирмлинг белого дракона",
        "url": "https://dnd.su/bestiary/114-white-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг бронзового дракона",
        "url": "https://dnd.su/bestiary/122-bronze-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг зеленого дракона",
        "url": "https://dnd.su/bestiary/104-green-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг изумрудного дракона",
        "url": "https://dnd.su/bestiary/6271-emerald-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг кристаллического дракона",
        "url": "https://dnd.su/bestiary/6254-crystal-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг лунного дракона",
        "url": "https://dnd.su/bestiary/8773-lunar-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг луннокаменного дракона",
        "url": "https://dnd.su/bestiary/6276-moonstone-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг серебряного дракона",
        "url": "https://dnd.su/bestiary/134-silver-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг топазного дракона",
        "url": "https://dnd.su/bestiary/6286-topaz-dragon-wyrmling"
    },
    {
        "name": "[2] Вирмлинг чёрного дракона",
        "url": "https://dnd.su/bestiary/98-black-dragon-wyrmling"
    },
    {
        "name": "[2] Вожак стаи гноллов",
        "url": "https://dnd.su/bestiary/179-gnoll-pack-lord"
    },
    {
        "name": "[2] Волшебный дракончик (Голубой)",
        "url": "https://dnd.su/bestiary/5639-faerie-dragon-blue"
    },
    {
        "name": "[2] Волшебный дракончик (Зелёный)",
        "url": "https://dnd.su/bestiary/5638-faerie-dragon-green"
    },
    {
        "name": "[2] Волшебный дракончик (Синий)",
        "url": "https://dnd.su/bestiary/5640-faerie-dragon-indigo"
    },
    {
        "name": "[2] Волшебный дракончик (Фиолетовый)",
        "url": "https://dnd.su/bestiary/5641-faerie-dragon-violet"
    },
    {
        "name": "[2] Всадник кавалерии грифонов",
        "url": "https://dnd.su/bestiary/5122-griffon-cavalry-rider"
    },
    {
        "name": "[2] Вурдалак",
        "url": "https://dnd.su/bestiary/165-ghast"
    },
    {
        "name": "[3] Вампирический туман",
        "url": "https://dnd.su/bestiary/7058-vampiric-mist"
    },
    {
        "name": "[3] Василиск",
        "url": "https://dnd.su/bestiary/41-basilisk"
    },
    {
        "name": "[3] Вегепигмей плеснеплет",
        "url": "https://dnd.su/bestiary/17208-vegepygmy-moldmaker"
    },
    {
        "name": "[3] Велдискар",
        "url": "https://dnd.su/bestiary/5926-veldyskar"
    },
    {
        "name": "[3] Вервольф",
        "url": "https://dnd.su/bestiary/224-werewolf"
    },
    {
        "name": "[3] Верлис Краснозубья",
        "url": "https://dnd.su/bestiary/17353-redtooth-werefox"
    },
    {
        "name": "[3] Ветеран",
        "url": "https://dnd.su/bestiary/421-veteran"
    },
    {
        "name": "[3] Ветеран Перчатки",
        "url": "https://dnd.su/bestiary/5897-veteran-of-the-gauntlet"
    },
    {
        "name": "[3] Виллифорт Кровелл",
        "url": "https://dnd.su/bestiary/5375-willifort-crowelle"
    },
    {
        "name": "[3] Виндхарроу",
        "url": "https://dnd.su/bestiary/3657-windharrow"
    },
    {
        "name": "[3] Винная аномалия",
        "url": "https://dnd.su/bestiary/6073-wine-weird"
    },
    {
        "name": "[3] Вирмлинг золотого дракона",
        "url": "https://dnd.su/bestiary/130-gold-dragon-wyrmling"
    },
    {
        "name": "[3] Вирмлинг сапфирового дракона",
        "url": "https://dnd.su/bestiary/6280-sapphire-dragon-wyrmling"
    },
    {
        "name": "[3] Вирмлинг синего дракона",
        "url": "https://dnd.su/bestiary/106-blue-dragon-wyrmling"
    },
    {
        "name": "[3] Вирмлинг солнечного дракона",
        "url": "https://dnd.su/bestiary/8872-solar-dragon-wyrmling"
    },
    {
        "name": "[3] Водная аномалия",
        "url": "https://dnd.su/bestiary/309-water-weird"
    },
    {
        "name": "[3] Военачальник Норкер",
        "url": "https://dnd.su/bestiary/13712-norker-war-leader"
    },
    {
        "name": "[3] Вождь багбиров",
        "url": "https://dnd.su/bestiary/47-bugbear-chief"
    },
    {
        "name": "[3] Воин Секиры Мирабара",
        "url": "https://dnd.su/bestiary/7722-axe-of-mirabar-soldier"
    },
    {
        "name": "[3] Воин призраков меча",
        "url": "https://dnd.su/bestiary/7043-sword-wraith-warrior"
    },
    {
        "name": "[3] Воин яколюдей",
        "url": "https://dnd.su/bestiary/5613-yakfolk-warrior"
    },
    {
        "name": "[3] Волшебник школы Иллюзии",
        "url": "https://dnd.su/bestiary/6571-illusionist-wizard"
    },
    {
        "name": "[3] Восторженный дельфин",
        "url": "https://dnd.su/bestiary/6609-dolphin-delighter"
    },
    {
        "name": "[3] Восточный ветер",
        "url": "https://dnd.su/bestiary/17373-east-wind"
    },
    {
        "name": "[4] Валин Харпел",
        "url": "https://dnd.su/bestiary/5732-vellynne-harpell"
    },
    {
        "name": "[4] Вампир пьющий разум",
        "url": "https://dnd.su/bestiary/17289-mind-drinker-vampire"
    },
    {
        "name": "[4] Ваятель камня",
        "url": "https://dnd.su/bestiary/4911-stonemelder"
    },
    {
        "name": "[4] Вербиг мародёр",
        "url": "https://dnd.su/bestiary/5729-verbeeg-marauder"
    },
    {
        "name": "[4] Вербовщик Орика",
        "url": "https://dnd.su/bestiary/8312-oriq-recruiter"
    },
    {
        "name": "[4] Вервепрь",
        "url": "https://dnd.su/bestiary/221-wereboar"
    },
    {
        "name": "[4] Вернувшийся-какомант",
        "url": "https://dnd.su/bestiary/7203-returned-kakomantis"
    },
    {
        "name": "[4] Вернувшийся-паламнит",
        "url": "https://dnd.su/bestiary/7204-returned-palamnite"
    },
    {
        "name": "[4] Верстервятник",
        "url": "https://dnd.su/bestiary/13300-werevulture"
    },
    {
        "name": "[4] Вертигр",
        "url": "https://dnd.su/bestiary/223-weretiger"
    },
    {
        "name": "[4] Вирмлинг аметистового дракона",
        "url": "https://dnd.su/bestiary/5657-amethyst-dragon-wyrmling"
    },
    {
        "name": "[4] Вирмлинг дракочерепахи",
        "url": "https://dnd.su/bestiary/6290-dragon-turtle-wyrmling"
    },
    {
        "name": "[4] Вирмлинг красного дракона",
        "url": "https://dnd.su/bestiary/110-red-dragon-wyrmling"
    },
    {
        "name": "[4] Витерс",
        "url": "https://dnd.su/bestiary/6074-withers"
    },
    {
        "name": "[4] Вождь Карта-Кая",
        "url": "https://dnd.su/bestiary/7749-chief-kartha-kaya"
    },
    {
        "name": "[4] Волк-хранитель",
        "url": "https://dnd.su/bestiary/3609-guardian-wolf"
    },
    {
        "name": "[4] Воспламенитель Подручный хаоса",
        "url": "https://dnd.su/bestiary/13201-hands-of-havoc-fire-starter"
    },
    {
        "name": "[5] Валентина Попофски",
        "url": "https://dnd.su/bestiary/4811-volenta-popofsky"
    },
    {
        "name": "[5] Вампират-маг",
        "url": "https://dnd.su/bestiary/8886-vampirate-mage"
    },
    {
        "name": "[5] Вампирический свежеватель разума",
        "url": "https://dnd.su/bestiary/6904-vampiric-mind-flayer"
    },
    {
        "name": "[5] Вардюк",
        "url": "https://dnd.su/bestiary/8414-warduke"
    },
    {
        "name": "[5] Василика",
        "url": "https://dnd.su/bestiary/4800-vasilka"
    },
    {
        "name": "[5] Ведьма Данбарроу",
        "url": "https://dnd.su/bestiary/17335-dunbarrow-witch"
    },
    {
        "name": "[5] Вербиг скороход",
        "url": "https://dnd.su/bestiary/5730-verbeeg-longstrider"
    },
    {
        "name": "[5] Веревочник перевёртыш",
        "url": "https://dnd.su/bestiary/6211-shapechanged-roper"
    },
    {
        "name": "[5] Верин Телисс",
        "url": "https://dnd.su/bestiary/7870-verin-thelyss"
    },
    {
        "name": "[5] Вермедведь",
        "url": "https://dnd.su/bestiary/220-werebear"
    },
    {
        "name": "[5] Верховная жрица сахуагинов",
        "url": "https://dnd.su/bestiary/7550-sahuagin-high-priestess"
    },
    {
        "name": "[5] Верёвочник",
        "url": "https://dnd.su/bestiary/274-roper"
    },
    {
        "name": "[5] Взрослый охотник за яйцами",
        "url": "https://dnd.su/bestiary/6339-egg-hunter-adult"
    },
    {
        "name": "[5] Виари",
        "url": "https://dnd.su/bestiary/7463-viari"
    },
    {
        "name": "[5] Видение звёздного света",
        "url": "https://dnd.su/bestiary/8880-starlight-apparition"
    },
    {
        "name": "[5] Видение кислотного тумана",
        "url": "https://dnd.su/bestiary/11837-acidic-mist-apparition"
    },
    {
        "name": "[5] Вилн Тирин",
        "url": "https://dnd.su/bestiary/5901-viln-tirin"
    },
    {
        "name": "[5] Вирмлинг дракона времени",
        "url": "https://dnd.su/bestiary/13136-time-dragon-wyrmling"
    },
    {
        "name": "[5] Водяной элементаль",
        "url": "https://dnd.su/bestiary/144-water-elemental"
    },
    {
        "name": "[5] Воздушный элементаль",
        "url": "https://dnd.su/bestiary/141-air-elemental"
    },
    {
        "name": "[5] Вокат",
        "url": "https://dnd.su/bestiary/9266-vocath"
    },
    {
        "name": "[5] Волшебник школы Очарования",
        "url": "https://dnd.su/bestiary/6569-enchanter-wizard"
    },
    {
        "name": "[5] Волшебник школы Преобразования",
        "url": "https://dnd.su/bestiary/6573-transmuter-wizard"
    },
    {
        "name": "[5] Выкованный из золота страж",
        "url": "https://dnd.su/bestiary/7168-gold-forged-sentinel"
    },
    {
        "name": "[6] Ваканга О’таму",
        "url": "https://dnd.su/bestiary/6045-wakanga-otamu"
    },
    {
        "name": "[6] Ведьмолов",
        "url": "https://dnd.su/bestiary/17361-witchstalker"
    },
    {
        "name": "[6] Великан Орзов",
        "url": "https://dnd.su/bestiary/17261-orzhov-giant"
    },
    {
        "name": "[6] Великан кровобой",
        "url": "https://dnd.su/bestiary/17258-bloodfray-giant"
    },
    {
        "name": "[6] Верховный жрец Куо-тоа",
        "url": "https://dnd.su/bestiary/213-kuo-toa-archpriest"
    },
    {
        "name": "[6] Виверна",
        "url": "https://dnd.su/bestiary/313-wyvern"
    },
    {
        "name": "[6] Виктор Валлакович",
        "url": "https://dnd.su/bestiary/4802-victor-vallakovich"
    },
    {
        "name": "[6] Вильнюс",
        "url": "https://dnd.su/bestiary/4803-vilnius"
    },
    {
        "name": "[6] Волшебник школы Вызова",
        "url": "https://dnd.su/bestiary/6565-conjurer-wizard"
    },
    {
        "name": "[6] Врок",
        "url": "https://dnd.su/bestiary/75-vrock"
    },
    {
        "name": "[7] Василиск Свавейна",
        "url": "https://dnd.su/bestiary/7411-swavain-basilisk"
    },
    {
        "name": "[7] Великан Расщелины Мёртвого Камня",
        "url": "https://dnd.su/bestiary/7742-deadstone-cleft-stone-giant"
    },
    {
        "name": "[7] Весельчак-осквернитель",
        "url": "https://dnd.su/bestiary/6444-smiler-the-defiler"
    },
    {
        "name": "[7] Владимир Хорнгаард",
        "url": "https://dnd.su/bestiary/4661-vladimir-horngaard"
    },
    {
        "name": "[7] Водный элементальный мирмидон",
        "url": "https://dnd.su/bestiary/6746-water-elemental-myrmidon"
    },
    {
        "name": "[7] Воздушный элементальный мирмидон",
        "url": "https://dnd.su/bestiary/6743-air-elemental-myrmidon"
    },
    {
        "name": "[7] Волк-в-овечьей-шкуре",
        "url": "https://dnd.su/bestiary/17214-wolf-in-sheeps-clothing"
    },
    {
        "name": "[7] Волшебник лесной эльф",
        "url": "https://dnd.su/bestiary/5075-wood-elf-wizard"
    },
    {
        "name": "[8] Вампир пьющий кровь",
        "url": "https://dnd.su/bestiary/17288-blood-drinker-vampire"
    },
    {
        "name": "[8] Великан-хранитель",
        "url": "https://dnd.su/bestiary/17260-guardian-giant"
    },
    {
        "name": "[8] Веномфанг",
        "url": "https://dnd.su/bestiary/8035-venomfang"
    },
    {
        "name": "[8] Волшебник школы Прорицания",
        "url": "https://dnd.su/bestiary/6568-diviner-wizard"
    },
    {
        "name": "[9] Вейнифер",
        "url": "https://dnd.su/bestiary/4922-vanifer"
    },
    {
        "name": "[9] Великий мастер монастыря Страдающего тела",
        "url": "https://dnd.su/bestiary/17369-monastery-of-the-distressed-body-grand-master"
    },
    {
        "name": "[9] Волшебник школы Воплощения",
        "url": "https://dnd.su/bestiary/6570-evoker-wizard"
    },
    {
        "name": "[9] Волшебник школы Некромантии",
        "url": "https://dnd.su/bestiary/6572-necromancer-wizard"
    },
    {
        "name": "[9] Волшебник школы Ограждения",
        "url": "https://dnd.su/bestiary/6566-abjurer-wizard"
    },
    {
        "name": "[10] Верховный куратор монастыря",
        "url": "https://dnd.su/bestiary/7850-monastic-high-curator"
    },
    {
        "name": "[10] Весенний эладрин",
        "url": "https://dnd.su/bestiary/6726-spring-eladrin"
    },
    {
        "name": "[10] Викторо Кассалантер",
        "url": "https://dnd.su/bestiary/5373-victoro-cassalanter"
    },
    {
        "name": "[11] Великан надвигающегося рока",
        "url": "https://dnd.su/bestiary/7188-doomwake-giant"
    },
    {
        "name": "[11] Взрослый глубинный дракон",
        "url": "https://dnd.su/bestiary/6263-adult-deep-dragon"
    },
    {
        "name": "[11] Влазок",
        "url": "https://dnd.su/bestiary/15718-vlazok"
    },
    {
        "name": "[12] Валтагар Стальная тень",
        "url": "https://dnd.su/bestiary/6151-valtagar-steelshadow"
    },
    {
        "name": "[12] Вертран Сумеречная тень",
        "url": "https://dnd.su/bestiary/6143-vertrand-shadowdusk"
    },
    {
        "name": "[12] Взрослый кристаллический дракон",
        "url": "https://dnd.su/bestiary/6247-adult-crystal-dragon"
    },
    {
        "name": "[12] Визеран ДеВир",
        "url": "https://dnd.su/bestiary/5927-vizeran-devir"
    },
    {
        "name": "[12] Властитель судьбы Стражей судьбы",
        "url": "https://dnd.su/bestiary/13194-doomguard-doom-lord"
    },
    {
        "name": "[12] Военачальник",
        "url": "https://dnd.su/bestiary/7064-warlord"
    },
    {
        "name": "[13] Ваджра Сафар",
        "url": "https://dnd.su/bestiary/5211-vajra-safahr"
    },
    {
        "name": "[13] Вампир",
        "url": "https://dnd.su/bestiary/307-vampire"
    },
    {
        "name": "[13] Вампир Ктенмиир",
        "url": "https://dnd.su/bestiary/17381-ctenmiir-the-vampire"
    },
    {
        "name": "[13] Вастрилит",
        "url": "https://dnd.su/bestiary/7068-wastrilith"
    },
    {
        "name": "[13] Велима Шанглия",
        "url": "https://dnd.su/bestiary/7479-velima-shanglia"
    },
    {
        "name": "[13] Взрослый белый дракон",
        "url": "https://dnd.su/bestiary/112-adult-white-dragon"
    },
    {
        "name": "[13] Взрослый латунный дракон",
        "url": "https://dnd.su/bestiary/116-adult-brass-dragon"
    },
    {
        "name": "[13] Взрослый лунный дракон",
        "url": "https://dnd.su/bestiary/8771-adult-lunar-dragon"
    },
    {
        "name": "[13] Взрослый топазный дракон",
        "url": "https://dnd.su/bestiary/6284-adult-topaz-dragon"
    },
    {
        "name": "[13] Винсент Тренч",
        "url": "https://dnd.su/bestiary/5374-vincent-trench"
    },
    {
        "name": "[14] Верстен Керн",
        "url": "https://dnd.su/bestiary/10607-wersten-kern"
    },
    {
        "name": "[14] Взрослый изумрудный дракон",
        "url": "https://dnd.su/bestiary/6269-adult-emerald-dragon"
    },
    {
        "name": "[14] Взрослый медный дракон",
        "url": "https://dnd.su/bestiary/124-adult-copper-dragon"
    },
    {
        "name": "[14] Взрослый солнечный дракон",
        "url": "https://dnd.su/bestiary/8870-adult-solar-dragon"
    },
    {
        "name": "[14] Взрослый чёрный дракон",
        "url": "https://dnd.su/bestiary/96-adult-black-dragon"
    },
    {
        "name": "[14] Вурм",
        "url": "https://dnd.su/bestiary/17290-wurm"
    },
    {
        "name": "[14] Высший дракон смерти",
        "url": "https://dnd.su/bestiary/10578-greater-death-dragon"
    },
    {
        "name": "[15] Валин Сарнастер",
        "url": "https://dnd.su/bestiary/5072-valin-sarnaster"
    },
    {
        "name": "[15] Вампир воитель",
        "url": "https://dnd.su/bestiary/5633-vampire-warrior"
    },
    {
        "name": "[15] Вампир заклинатель",
        "url": "https://dnd.su/bestiary/5634-vampire-spellcaster"
    },
    {
        "name": "[15] Взрослый бронзовый дракон",
        "url": "https://dnd.su/bestiary/120-adult-bronze-dragon"
    },
    {
        "name": "[15] Взрослый зеленый дракон",
        "url": "https://dnd.su/bestiary/101-adult-green-dragon"
    },
    {
        "name": "[15] Взрослый луннокаменный дракон",
        "url": "https://dnd.su/bestiary/6274-adult-moonstone-dragon"
    },
    {
        "name": "[15] Взрослый сапфировый дракон",
        "url": "https://dnd.su/bestiary/6278-adult-sapphire-dragon"
    },
    {
        "name": "[16] Взрослый аметистовый дракон",
        "url": "https://dnd.su/bestiary/6240-adult-amethyst-dragon"
    },
    {
        "name": "[16] Взрослый серебряный дракон",
        "url": "https://dnd.su/bestiary/132-adult-silver-dragon"
    },
    {
        "name": "[16] Взрослый синий дракон",
        "url": "https://dnd.su/bestiary/102-adult-blue-dragon"
    },
    {
        "name": "[17] Верминаард",
        "url": "https://dnd.su/bestiary/10300-verminaard"
    },
    {
        "name": "[17] Верховный жрец Угольной смерти",
        "url": "https://dnd.su/bestiary/8030-archpriest-of-ebondeath"
    },
    {
        "name": "[17] Вестник бури",
        "url": "https://dnd.su/bestiary/12267-storm-herald"
    },
    {
        "name": "[17] Взрослый золотой дракон",
        "url": "https://dnd.su/bestiary/128-adult-gold-dragon"
    },
    {
        "name": "[17] Взрослый красный дракон",
        "url": "https://dnd.su/bestiary/108-adult-red-dragon"
    },
    {
        "name": "[17] Взрослый синий драколич",
        "url": "https://dnd.su/bestiary/4859-adult-blue-dracolich"
    },
    {
        "name": "[18] Взрослый дракон времени",
        "url": "https://dnd.su/bestiary/13134-adult-time-dragon"
    },
    {
        "name": "[21] Валиндра Теневая Мантия",
        "url": "https://dnd.su/bestiary/6071-valindra-shadowmantle"
    },
    {
        "name": "[21] Высший эмиссар звёздных порождений",
        "url": "https://dnd.su/bestiary/6889-greater-star-spawn-emissary"
    },
    {
        "name": "[25] Веломахус Лорхолд",
        "url": "https://dnd.su/bestiary/8347-velomachus-lorehold"
    },
    {
        "name": "[26] Векна, архилич",
        "url": "https://dnd.su/bestiary/7943-vecna-the-archlich"
    },
    {
        "name": "[26] Великий аметистовый вирм",
        "url": "https://dnd.su/bestiary/6239-amethyst-greatwyrm"
    },
    {
        "name": "[26] Великий изумрудный вирм",
        "url": "https://dnd.su/bestiary/6272-emerald-greatwyrm"
    },
    {
        "name": "[26] Великий кристаллический вирм",
        "url": "https://dnd.su/bestiary/6255-crystal-greatwyrm"
    },
    {
        "name": "[26] Великий сапфировый вирм",
        "url": "https://dnd.su/bestiary/6281-sapphire-greatwyrm"
    },
    {
        "name": "[26] Великий топазный вирм",
        "url": "https://dnd.su/bestiary/6287-topaz-greatwyrm"
    },
    {
        "name": "[27] Великий белый вирм",
        "url": "https://dnd.su/bestiary/6297-white-greatwyrm"
    },
    {
        "name": "[27] Великий зелёный вирм",
        "url": "https://dnd.su/bestiary/6296-green-greatwyrm"
    },
    {
        "name": "[27] Великий красный вирм",
        "url": "https://dnd.su/bestiary/5541-red-greatwyrm"
    },
    {
        "name": "[27] Великий синий вирм",
        "url": "https://dnd.su/bestiary/6295-blue-greatwyrm"
    },
    {
        "name": "[27] Великий чёрный вирм",
        "url": "https://dnd.su/bestiary/6294-black-greatwyrm"
    },
    {
        "name": "[28] Великий бронзовый вирм",
        "url": "https://dnd.su/bestiary/6299-bronze-greatwyrm"
    },
    {
        "name": "[28] Великий золотой вирм",
        "url": "https://dnd.su/bestiary/6301-gold-greatwyrm"
    },
    {
        "name": "[28] Великий латунный вирм",
        "url": "https://dnd.su/bestiary/6298-brass-greatwyrm"
    },
    {
        "name": "[28] Великий медный вирм",
        "url": "https://dnd.su/bestiary/6300-copper-greatwyrm"
    },
    {
        "name": "[28] Великий серебряный вирм",
        "url": "https://dnd.su/bestiary/6302-silver-greatwyrm"
    },
    {
        "name": "[0] Гадоф Блинский",
        "url": "https://dnd.su/bestiary/4700-gadof-blinsky"
    },
    {
        "name": "[0] Гаммон Зангун",
        "url": "https://dnd.su/bestiary/8549-gammon-xungoon"
    },
    {
        "name": "[0] Гелрин Фоухаммер",
        "url": "https://dnd.su/bestiary/7770-ghelryn-foehammer"
    },
    {
        "name": "[0] Гертруда",
        "url": "https://dnd.su/bestiary/4701-gertruda"
    },
    {
        "name": "[0] Гигантская муха",
        "url": "https://dnd.su/bestiary/1102-giant-fly"
    },
    {
        "name": "[0] Гигантский огненный жук",
        "url": "https://dnd.su/bestiary/355-giant-fire-beetle"
    },
    {
        "name": "[0] Гиена",
        "url": "https://dnd.su/bestiary/361-hyena"
    },
    {
        "name": "[0] Гомункул",
        "url": "https://dnd.su/bestiary/202-homunculus"
    },
    {
        "name": "[0] Гриф",
        "url": "https://dnd.su/bestiary/362-vulture"
    },
    {
        "name": "[1/8] Гарпия кровавой дани",
        "url": "https://dnd.su/bestiary/7193-blood-toll-harpy"
    },
    {
        "name": "[1/8] Гигантская крыса",
        "url": "https://dnd.su/bestiary/336-giant-rat"
    },
    {
        "name": "[1/8] Гигантская куница",
        "url": "https://dnd.su/bestiary/338-giant-weasel"
    },
    {
        "name": "[1/8] Гигантский краб",
        "url": "https://dnd.su/bestiary/351-giant-crab"
    },
    {
        "name": "[1/8] Горный козёл",
        "url": "https://dnd.su/bestiary/5743-mountain-goat"
    },
    {
        "name": "[1/8] Грегир Фендельсон (1-4 уровня)",
        "url": "https://dnd.su/bestiary/12720-gregir-fendelsohn-levels-1-4"
    },
    {
        "name": "[1/8] Гремишка",
        "url": "https://dnd.su/bestiary/6865-gremishka"
    },
    {
        "name": "[1/8] Гремлин",
        "url": "https://dnd.su/bestiary/17364-jermlaine"
    },
    {
        "name": "[1/4] Гадрозавр",
        "url": "https://dnd.su/bestiary/6604-hadrosaurus"
    },
    {
        "name": "[1/4] Гадрозавр зомби",
        "url": "https://dnd.su/bestiary/5989-hadrosaurus-zombie"
    },
    {
        "name": "[1/4] Гигантская ездовая ящерица",
        "url": "https://dnd.su/bestiary/5900-giant-riding-lizard"
    },
    {
        "name": "[1/4] Гигантская летучая мышь",
        "url": "https://dnd.su/bestiary/339-giant-bat"
    },
    {
        "name": "[1/4] Гигантская лягушка",
        "url": "https://dnd.su/bestiary/340-giant-frog"
    },
    {
        "name": "[1/4] Гигантская многоножка",
        "url": "https://dnd.su/bestiary/341-giant-centipede"
    },
    {
        "name": "[1/4] Гигантская сова",
        "url": "https://dnd.su/bestiary/343-giant-owl"
    },
    {
        "name": "[1/4] Гигантская улитка",
        "url": "https://dnd.su/bestiary/8368-giant-snail"
    },
    {
        "name": "[1/4] Гигантская ядовитая змея",
        "url": "https://dnd.su/bestiary/345-giant-poisonous-snake"
    },
    {
        "name": "[1/4] Гигантская ящерица",
        "url": "https://dnd.su/bestiary/346-giant-lizard"
    },
    {
        "name": "[1/4] Гигантский барсук",
        "url": "https://dnd.su/bestiary/347-giant-badger"
    },
    {
        "name": "[1/4] Гигантский космический хомяк",
        "url": "https://dnd.su/bestiary/8692-giant-space-hamster"
    },
    {
        "name": "[1/4] Гигантский паук-волк",
        "url": "https://dnd.su/bestiary/358-giant-wolf-spider"
    },
    {
        "name": "[1/4] Гильда Дун",
        "url": "https://dnd.su/bestiary/8507-gildha-duhn"
    },
    {
        "name": "[1/4] Глубинный роф",
        "url": "https://dnd.su/bestiary/6489-deep-rothe"
    },
    {
        "name": "[1/4] Гоблин",
        "url": "https://dnd.su/bestiary/4-goblin"
    },
    {
        "name": "[1/4] Гримлок",
        "url": "https://dnd.su/bestiary/191-grimlock"
    },
    {
        "name": "[1/4] Гриппли воитель",
        "url": "https://dnd.su/bestiary/5043-grippli-warrior"
    },
    {
        "name": "[1/4] Грум’шар",
        "url": "https://dnd.su/bestiary/5187-grumshar"
    },
    {
        "name": "[1/4] Грунг",
        "url": "https://dnd.su/bestiary/6783-grung"
    },
    {
        "name": "[1/4] Грязевой мефит",
        "url": "https://dnd.su/bestiary/231-mud-mephit"
    },
    {
        "name": "[1/2] Газовая спора",
        "url": "https://dnd.su/bestiary/155-gas-spore"
    },
    {
        "name": "[1/2] Гаш",
        "url": "https://dnd.su/bestiary/5905-gash"
    },
    {
        "name": "[1/2] Гибрид-шпион",
        "url": "https://dnd.su/bestiary/17281-hybrid-spy"
    },
    {
        "name": "[1/2] Гигантская канарейка",
        "url": "https://dnd.su/bestiary/5034-giant-canary"
    },
    {
        "name": "[1/2] Гигантская оса",
        "url": "https://dnd.su/bestiary/342-giant-wasp"
    },
    {
        "name": "[1/2] Гигантская рысь",
        "url": "https://dnd.su/bestiary/12166-giant-lynx"
    },
    {
        "name": "[1/2] Гигантская стрекоза",
        "url": "https://dnd.su/bestiary/8367-giant-dragonfly"
    },
    {
        "name": "[1/2] Гигантский козел",
        "url": "https://dnd.su/bestiary/350-giant-goat"
    },
    {
        "name": "[1/2] Гигантский морской конек",
        "url": "https://dnd.su/bestiary/354-giant-sea-horse"
    },
    {
        "name": "[1/2] Гигантский морской угорь",
        "url": "https://dnd.su/bestiary/7510-giant-sea-eel"
    },
    {
        "name": "[1/2] Гиппокамп",
        "url": "https://dnd.su/bestiary/7194-hippocamp"
    },
    {
        "name": "[1/2] Глубинный гном (Свирфнеблин)",
        "url": "https://dnd.su/bestiary/181-gnome-deep-svirfneblin"
    },
    {
        "name": "[1/2] Гнолл",
        "url": "https://dnd.su/bestiary/178-gnoll"
    },
    {
        "name": "[1/2] Гнолл охотник",
        "url": "https://dnd.su/bestiary/6779-gnoll-hunter"
    },
    {
        "name": "[1/2] Головорез",
        "url": "https://dnd.su/bestiary/424-thug"
    },
    {
        "name": "[1/2] Головорез Вистани",
        "url": "https://dnd.su/bestiary/4810-vistana-thug"
    },
    {
        "name": "[1/2] Головорез Жентарима",
        "url": "https://dnd.su/bestiary/4478-zhentarim-thug"
    },
    {
        "name": "[1/2] Гондоло",
        "url": "https://dnd.su/bestiary/6034-gondolo"
    },
    {
        "name": "[1/2] Грегир Фендельсон (5-8 уровня)",
        "url": "https://dnd.su/bestiary/12721-gregir-fendelsohn-levels-5-8"
    },
    {
        "name": "[1/2] Грунка",
        "url": "https://dnd.su/bestiary/8508-grunka"
    },
    {
        "name": "[1] Гальваническая аномалия",
        "url": "https://dnd.su/bestiary/3615-galvanice-weird"
    },
    {
        "name": "[1] Гарпия",
        "url": "https://dnd.su/bestiary/196-harpy"
    },
    {
        "name": "[1] Генератор репортажей",
        "url": "https://dnd.su/bestiary/6168-play-by-play-generator"
    },
    {
        "name": "[1] Гибрид-отравитель",
        "url": "https://dnd.su/bestiary/17279-hybrid-poisoner"
    },
    {
        "name": "[1] Гибрид-шокер",
        "url": "https://dnd.su/bestiary/17280-hybrid-shocker"
    },
    {
        "name": "[1] Гигантская гиена",
        "url": "https://dnd.su/bestiary/335-giant-hyena"
    },
    {
        "name": "[1] Гигантская двухголовая крыса",
        "url": "https://dnd.su/bestiary/6176-giant-two-headed-rat"
    },
    {
        "name": "[1] Гигантская жаба",
        "url": "https://dnd.su/bestiary/337-giant-toad"
    },
    {
        "name": "[1] Гигантский баран",
        "url": "https://dnd.su/bestiary/12168-giant-ram"
    },
    {
        "name": "[1] Гигантский ворон",
        "url": "https://dnd.su/bestiary/7713-giant-raven"
    },
    {
        "name": "[1] Гигантский гриф",
        "url": "https://dnd.su/bestiary/348-giant-vulture"
    },
    {
        "name": "[1] Гигантский камнеминог",
        "url": "https://dnd.su/bestiary/5867-giant-rocktopus"
    },
    {
        "name": "[1] Гигантский летающий паук",
        "url": "https://dnd.su/bestiary/6197-giant-flying-spider"
    },
    {
        "name": "[1] Гигантский орёл",
        "url": "https://dnd.su/bestiary/356-giant-eagle"
    },
    {
        "name": "[1] Гигантский осьминог",
        "url": "https://dnd.su/bestiary/357-giant-octopus"
    },
    {
        "name": "[1] Гигантский паук",
        "url": "https://dnd.su/bestiary/3-giant-spider"
    },
    {
        "name": "[1] Гигантский ходун",
        "url": "https://dnd.su/bestiary/6750-giant-strider"
    },
    {
        "name": "[1] Гипнос маген",
        "url": "https://dnd.su/bestiary/3620-hypnos-magen"
    },
    {
        "name": "[1] Гиппогриф",
        "url": "https://dnd.su/bestiary/199-hippogriff"
    },
    {
        "name": "[1] Гнолл глодатель",
        "url": "https://dnd.su/bestiary/6778-gnoll-flesh-gnawer"
    },
    {
        "name": "[1] Гончая дурного знамения",
        "url": "https://dnd.su/bestiary/2017-hound-of-ill-omen"
    },
    {
        "name": "[1] Грабстеб",
        "url": "https://dnd.su/bestiary/6064-grabstab"
    },
    {
        "name": "[1] Грузоподъёмный механизм",
        "url": "https://dnd.su/bestiary/17329-loading-rig"
    },
    {
        "name": "[2] Гардинал мюстеваль",
        "url": "https://dnd.su/bestiary/13102-musteval-guardinal"
    },
    {
        "name": "[2] Гаррет Левистуссон",
        "url": "https://dnd.su/bestiary/17382-garret-levistusson"
    },
    {
        "name": "[2] Гибрид-громила",
        "url": "https://dnd.su/bestiary/17278-hybrid-brute"
    },
    {
        "name": "[2] Гигантская белая мурена",
        "url": "https://dnd.su/bestiary/7511-giant-white-moray-eel"
    },
    {
        "name": "[2] Гигантский кабан",
        "url": "https://dnd.su/bestiary/349-giant-boar"
    },
    {
        "name": "[2] Гигантский клещ",
        "url": "https://dnd.su/bestiary/12169-giant-tick"
    },
    {
        "name": "[2] Гигантский лось",
        "url": "https://dnd.su/bestiary/353-giant-elk"
    },
    {
        "name": "[2] Гигантский рак",
        "url": "https://dnd.su/bestiary/17411-giant-crayfish"
    },
    {
        "name": "[2] Гигантский студенистый куб",
        "url": "https://dnd.su/bestiary/6226-giant-gelatinous-cube"
    },
    {
        "name": "[2] Гигантский удав",
        "url": "https://dnd.su/bestiary/360-giant-constrictor-snake"
    },
    {
        "name": "[2] Гингватзим",
        "url": "https://dnd.su/bestiary/5042-gingwatzim"
    },
    {
        "name": "[2] Гитцерай монах",
        "url": "https://dnd.su/bestiary/176-githzerai-monk"
    },
    {
        "name": "[2] Глаббагул",
        "url": "https://dnd.su/bestiary/5919-glabbagool"
    },
    {
        "name": "[2] Глубинник",
        "url": "https://dnd.su/bestiary/4927-fathomer"
    },
    {
        "name": "[2] Гном-Изобретатель из Небеспокойсь",
        "url": "https://dnd.su/bestiary/10289-nevermind-gnome-inventor"
    },
    {
        "name": "[2] Гоблин пси-драчун",
        "url": "https://dnd.su/bestiary/12552-goblin-psi-brawler"
    },
    {
        "name": "[2] Говорящий с драконом",
        "url": "https://dnd.su/bestiary/6315-dragon-speaker"
    },
    {
        "name": "[2] Гомункул Мэдгота",
        "url": "https://dnd.su/bestiary/6214-maddgoths-homunculus"
    },
    {
        "name": "[2] Горгулья",
        "url": "https://dnd.su/bestiary/159-gargoyle"
    },
    {
        "name": "[2] Готад Мискал",
        "url": "https://dnd.su/bestiary/7416-gothad-miskal"
    },
    {
        "name": "[2] Грандолфа Музгардт",
        "url": "https://dnd.su/bestiary/5808-grandolpha-muzgardt"
    },
    {
        "name": "[2] Грик",
        "url": "https://dnd.su/bestiary/5-grick"
    },
    {
        "name": "[2] Грифон",
        "url": "https://dnd.su/bestiary/190-griffon"
    },
    {
        "name": "[2] Гриша",
        "url": "https://dnd.su/bestiary/5851-grisha"
    },
    {
        "name": "[3] Галсариад Ардит (1-го уровня)",
        "url": "https://dnd.su/bestiary/7804-galsariad-ardyth-tier-1"
    },
    {
        "name": "[3] Гальван маген",
        "url": "https://dnd.su/bestiary/3619-galvan-magen"
    },
    {
        "name": "[3] Геммул энцефалона",
        "url": "https://dnd.su/bestiary/12499-encephalon-gemmule"
    },
    {
        "name": "[3] Гигантская гусыня",
        "url": "https://dnd.su/bestiary/12158-giant-goose"
    },
    {
        "name": "[3] Гигантская ледяная жаба",
        "url": "https://dnd.su/bestiary/17422-giant-ice-toad"
    },
    {
        "name": "[3] Гигантская щёлкающая черепаха",
        "url": "https://dnd.su/bestiary/1730-giant-snapping-turtle"
    },
    {
        "name": "[3] Гигантский вол",
        "url": "https://dnd.su/bestiary/12167-giant-ox"
    },
    {
        "name": "[3] Гигантский скорпион",
        "url": "https://dnd.su/bestiary/359-giant-scorpion"
    },
    {
        "name": "[3] Гигантский электрический угорь",
        "url": "https://dnd.su/bestiary/17412-giant-lightning-eel"
    },
    {
        "name": "[3] Гитцерай путешественник",
        "url": "https://dnd.su/bestiary/13099-githzerai-traveler"
    },
    {
        "name": "[3] Гитъянки воитель",
        "url": "https://dnd.su/bestiary/174-githyanki-warrior"
    },
    {
        "name": "[3] Гитъянки-буканьер",
        "url": "https://dnd.su/bestiary/8838-githyanki-buccaneer"
    },
    {
        "name": "[3] Гифф",
        "url": "https://dnd.su/bestiary/6762-giff"
    },
    {
        "name": "[3] Гифф-сослуживец",
        "url": "https://dnd.su/bestiary/8835-giff-shipmate"
    },
    {
        "name": "[3] Глубинный Король Хоргар Стилшэдоу V",
        "url": "https://dnd.su/bestiary/5885-deepking-horgar-steelshadow-v"
    },
    {
        "name": "[3] Голиаф потомок великана",
        "url": "https://dnd.su/bestiary/12171-goliath-giant-kin"
    },
    {
        "name": "[3] Голиаф-воин",
        "url": "https://dnd.su/bestiary/5741-goliath-warrior"
    },
    {
        "name": "[3] Гончая разоритель",
        "url": "https://dnd.su/bestiary/13259-harrow-hound"
    },
    {
        "name": "[3] Господин Свет",
        "url": "https://dnd.su/bestiary/8424-mister-light"
    },
    {
        "name": "[3] Господин Сумрак",
        "url": "https://dnd.su/bestiary/8423-mister-witch"
    },
    {
        "name": "[3] Грегир Фендельсон (9-11 уровня)",
        "url": "https://dnd.su/bestiary/12722-gregir-fendelsohn-levels-9-11"
    },
    {
        "name": "[3] Грелл",
        "url": "https://dnd.su/bestiary/188-grell"
    },
    {
        "name": "[3] Грецкорех Мокротрав",
        "url": "https://dnd.su/bestiary/7472-walnut-dankgrass"
    },
    {
        "name": "[3] Грязевой скиталец",
        "url": "https://dnd.su/bestiary/12250-mud-hulk"
    },
    {
        "name": "[4] Гадж",
        "url": "https://dnd.su/bestiary/8834-gaj"
    },
    {
        "name": "[4] Герцогиня Таламра Вантампур",
        "url": "https://dnd.su/bestiary/6414-duke-thalamra-vanthampur"
    },
    {
        "name": "[4] Гигантская коралловая змея",
        "url": "https://dnd.su/bestiary/7506-giant-coral-snake"
    },
    {
        "name": "[4] Гигантский морж",
        "url": "https://dnd.su/bestiary/5760-giant-walrus"
    },
    {
        "name": "[4] Гираллон",
        "url": "https://dnd.su/bestiary/6763-girallon"
    },
    {
        "name": "[4] Гираллон зомби",
        "url": "https://dnd.su/bestiary/6016-girallon-zombie"
    },
    {
        "name": "[4] Гнолл клык Йеногу",
        "url": "https://dnd.su/bestiary/180-gnoll-fang-of-yeenoghu"
    },
    {
        "name": "[4] Гоблин–пси-командир",
        "url": "https://dnd.su/bestiary/12553-goblin-psi-commander"
    },
    {
        "name": "[4] Гончая йет",
        "url": "https://dnd.su/bestiary/7074-yeth-hound"
    },
    {
        "name": "[4] Грофф",
        "url": "https://dnd.su/bestiary/8066-groff"
    },
    {
        "name": "[5] Галсариад Ардит (2-го уровня)",
        "url": "https://dnd.su/bestiary/7805-galsariad-ardyth-tier-2"
    },
    {
        "name": "[5] Гальванический взрывоискатель",
        "url": "https://dnd.su/bestiary/17305-galvanic-blastseeker"
    },
    {
        "name": "[5] Гарпия матриарх",
        "url": "https://dnd.su/bestiary/7512-harpy-matriarch"
    },
    {
        "name": "[5] Гигантская акула",
        "url": "https://dnd.su/bestiary/334-giant-shark"
    },
    {
        "name": "[5] Гигантский крокодил",
        "url": "https://dnd.su/bestiary/352-giant-crocodile"
    },
    {
        "name": "[5] Гладиатор",
        "url": "https://dnd.su/bestiary/423-gladiator"
    },
    {
        "name": "[5] Глиняный гладиатор",
        "url": "https://dnd.su/bestiary/6043-clay-gladiator"
    },
    {
        "name": "[5] Гном-создатель из Небеспокойсь",
        "url": "https://dnd.su/bestiary/10290-nevermind-gnome-mastermind"
    },
    {
        "name": "[5] Гном-цереморф",
        "url": "https://dnd.su/bestiary/5769-gnome-ceremorph"
    },
    {
        "name": "[5] Горгона",
        "url": "https://dnd.su/bestiary/187-gorgon"
    },
    {
        "name": "[5] Гриз Алакритос",
        "url": "https://dnd.su/bestiary/7892-gryz-alakritos"
    },
    {
        "name": "[5] Гунвальд Халрагсон",
        "url": "https://dnd.su/bestiary/5767-gunvald-halraggson"
    },
    {
        "name": "[5] Гух",
        "url": "https://dnd.su/bestiary/7739-guh"
    },
    {
        "name": "[6] Галеб дур",
        "url": "https://dnd.su/bestiary/158-galeb-duhr"
    },
    {
        "name": "[6] Галеокаэрда",
        "url": "https://dnd.su/bestiary/7882-galeokaerda"
    },
    {
        "name": "[6] Гардинал эквинал",
        "url": "https://dnd.su/bestiary/13101-equinal-guardinal"
    },
    {
        "name": "[6] Гаут",
        "url": "https://dnd.su/bestiary/6758-gauth"
    },
    {
        "name": "[6] Гидеон Лайтвард",
        "url": "https://dnd.su/bestiary/6421-gideon-lightward"
    },
    {
        "name": "[6] Гитцерай зерт",
        "url": "https://dnd.su/bestiary/177-githzerai-zerth"
    },
    {
        "name": "[6] Гифф-штурмовик",
        "url": "https://dnd.su/bestiary/8836-giff-shock-trooper"
    },
    {
        "name": "[6] Глонья Нахэр-Нахэр",
        "url": "https://dnd.su/bestiary/16067-gloine-nathair-nathair"
    },
    {
        "name": "[6] Горток, Громовой кабан",
        "url": "https://dnd.su/bestiary/8012-gorthok-the-thunder-boar"
    },
    {
        "name": "[6] Гринда Гарлот",
        "url": "https://dnd.su/bestiary/5186-grinda-garloth"
    },
    {
        "name": "[7] Гальд",
        "url": "https://dnd.su/bestiary/4931-ghald"
    },
    {
        "name": "[7] Гигантская человекообразная обезьяна",
        "url": "https://dnd.su/bestiary/344-giant-ape"
    },
    {
        "name": "[7] Гитцерай объединитель",
        "url": "https://dnd.su/bestiary/13098-githzerai-uniter"
    },
    {
        "name": "[7] Гитъянки звездный провидец",
        "url": "https://dnd.su/bestiary/8839-githyanki-star-seer"
    },
    {
        "name": "[7] Горемыка",
        "url": "https://dnd.su/bestiary/7212-woe-strider"
    },
    {
        "name": "[7] Грэйзилакс",
        "url": "https://dnd.su/bestiary/5870-grazilaxx"
    },
    {
        "name": "[8] Галсариад Ардит (3-го уровня)",
        "url": "https://dnd.su/bestiary/7806-galsariad-ardyth-tier-3"
    },
    {
        "name": "[8] Гидра",
        "url": "https://dnd.su/bestiary/204-hydra"
    },
    {
        "name": "[8] Гитъянки-рыцарь",
        "url": "https://dnd.su/bestiary/175-githyanki-knight"
    },
    {
        "name": "[8] Глазодрейк",
        "url": "https://dnd.su/bestiary/6342-eyedrake"
    },
    {
        "name": "[8] Гнолл-вампир",
        "url": "https://dnd.su/bestiary/5740-gnoll-vampire"
    },
    {
        "name": "[8] Голиаф-вермедведь",
        "url": "https://dnd.su/bestiary/5742-goliath-werebear"
    },
    {
        "name": "[8] Груминк Ренегат",
        "url": "https://dnd.su/bestiary/4932-grumink-the-renegade"
    },
    {
        "name": "[9] Гар Шаттеркил",
        "url": "https://dnd.su/bestiary/4929-gar-shatterkeel"
    },
    {
        "name": "[9] Гардинал аворал",
        "url": "https://dnd.su/bestiary/13100-avoral-guardinal"
    },
    {
        "name": "[9] Герцог Залто",
        "url": "https://dnd.su/bestiary/7753-duke-zalto"
    },
    {
        "name": "[9] Гигантская тень",
        "url": "https://dnd.su/bestiary/10580-hulking-shadow"
    },
    {
        "name": "[9] Гидролот",
        "url": "https://dnd.su/bestiary/6799-hydroloth"
    },
    {
        "name": "[9] Гитцерай футурист",
        "url": "https://dnd.su/bestiary/13097-githzerai-futurist"
    },
    {
        "name": "[9] Гитъянки-ксеномант",
        "url": "https://dnd.su/bestiary/8840-githyanki-xenomancer"
    },
    {
        "name": "[9] Глабрезу",
        "url": "https://dnd.su/bestiary/67-glabrezu"
    },
    {
        "name": "[9] Глаз Страха и Пламени",
        "url": "https://dnd.su/bestiary/13670-eye-of-fear-and-flame"
    },
    {
        "name": "[9] Глазосфера",
        "url": "https://dnd.su/bestiary/12551-oculorb"
    },
    {
        "name": "[9] Глиняный голем",
        "url": "https://dnd.su/bestiary/183-clay-golem"
    },
    {
        "name": "[9] Глубинный ворон",
        "url": "https://dnd.su/bestiary/7485-deep-crow"
    },
    {
        "name": "[9] Гнилой тролль",
        "url": "https://dnd.su/bestiary/7054-rot-troll"
    },
    {
        "name": "[9] Гнусный владыка",
        "url": "https://dnd.su/bestiary/7120-abhorrent-overlord"
    },
    {
        "name": "[10] Гиганотозавр",
        "url": "https://dnd.su/bestiary/5966-giganotosaurus"
    },
    {
        "name": "[10] Гиганотозавр зомби",
        "url": "https://dnd.su/bestiary/5990-giganotosaurus-zombie"
    },
    {
        "name": "[10] Гигантская четырёхрукая горгулья",
        "url": "https://dnd.su/bestiary/2634-giant-fourarmed-gargoyle"
    },
    {
        "name": "[10] Гитцерай просвещённый",
        "url": "https://dnd.su/bestiary/6777-githzerai-enlightened"
    },
    {
        "name": "[10] Гитъянки Гиш",
        "url": "https://dnd.su/bestiary/6767-githyanki-gish"
    },
    {
        "name": "[10] Гифф-военачальник",
        "url": "https://dnd.su/bestiary/8837-giff-warlord"
    },
    {
        "name": "[10] Граф Туллен",
        "url": "https://dnd.su/bestiary/7760-count-thullen"
    },
    {
        "name": "[10] Громила звёздных порождений",
        "url": "https://dnd.su/bestiary/7031-star-spawn-hulk"
    },
    {
        "name": "[11] Гиносфинкс",
        "url": "https://dnd.su/bestiary/296-gynosphinx"
    },
    {
        "name": "[11] Глефа",
        "url": "https://dnd.su/bestiary/15728-glaive"
    },
    {
        "name": "[11] Голем из драконьих костей",
        "url": "https://dnd.su/bestiary/6332-dragonbone-golem"
    },
    {
        "name": "[11] Голодный угнетённый",
        "url": "https://dnd.su/bestiary/7025-hungry-sorrowsworn"
    },
    {
        "name": "[11] Горькое Дыхание",
        "url": "https://dnd.su/bestiary/6428-bitter-breath"
    },
    {
        "name": "[11] Графиня Сансури",
        "url": "https://dnd.su/bestiary/5618-countess-sansuri"
    },
    {
        "name": "[12] Гитъянки Кит'рак",
        "url": "https://dnd.su/bestiary/6775-githyanki-kithrak"
    },
    {
        "name": "[12] Гранитный джаггернаут",
        "url": "https://dnd.su/bestiary/15699-granite-juggernaut"
    },
    {
        "name": "[13] Гекатон",
        "url": "https://dnd.su/bestiary/7768-hekaton"
    },
    {
        "name": "[14] Гитъянки главнокомандующий",
        "url": "https://dnd.su/bestiary/8259-githyanki-supreme-commander"
    },
    {
        "name": "[15] Глистер",
        "url": "https://dnd.su/bestiary/6232-glyster"
    },
    {
        "name": "[15] Горка Тарн",
        "url": "https://dnd.su/bestiary/6155-gorka-tharn"
    },
    {
        "name": "[15] Грибной слуга",
        "url": "https://dnd.su/bestiary/5041-fungal-servant"
    },
    {
        "name": "[16] Гитцерай Анарх",
        "url": "https://dnd.su/bestiary/6776-githzerai-anarch"
    },
    {
        "name": "[17] Гертилод",
        "url": "https://dnd.su/bestiary/15701-hertilod"
    },
    {
        "name": "[17] Гитония",
        "url": "https://dnd.su/bestiary/7215-hythonia"
    },
    {
        "name": "[17] Гористро",
        "url": "https://dnd.su/bestiary/68-goristro"
    },
    {
        "name": "[20] Гигант",
        "url": "https://dnd.su/bestiary/12170-gigant"
    },
    {
        "name": "[22] Герион",
        "url": "https://dnd.su/bestiary/6760-geryon"
    },
    {
        "name": "[23] Галазет Призмари",
        "url": "https://dnd.su/bestiary/8062-galazeth-prismari"
    },
    {
        "name": "[24] Граз'зт",
        "url": "https://dnd.su/bestiary/5863-grazzt"
    },
    {
        "name": "[24] Граз'зт",
        "url": "https://dnd.su/bestiary/6782-grazzt"
    },
    {
        "name": "[0] Гномомёт",
        "url": "https://dnd.su/bestiary/10610-gnomeflinge"
    },
    {
        "name": "[0] Даратра Шендрел",
        "url": "https://dnd.su/bestiary/7771-darathra-shendrel"
    },
    {
        "name": "[0] Дарз Хелгар",
        "url": "https://dnd.su/bestiary/7772-darz-helgar"
    },
    {
        "name": "[0] Детёныш василиска",
        "url": "https://dnd.su/bestiary/5910-infant-basilisk"
    },
    {
        "name": "[0] Детёныш крюкастого ужаса",
        "url": "https://dnd.su/bestiary/5916-infant-hook-horror"
    },
    {
        "name": "[0] Дженкс",
        "url": "https://dnd.su/bestiary/5360-jenks"
    },
    {
        "name": "[0] Дикая собака",
        "url": "https://dnd.su/bestiary/6072-wild-dog"
    },
    {
        "name": "[0] Довар",
        "url": "https://dnd.su/bestiary/8822-dohwar"
    },
    {
        "name": "[0] Доктор Дэннелл",
        "url": "https://dnd.su/bestiary/12734-dr-dannell"
    },
    {
        "name": "[0] Дроу карманник",
        "url": "https://dnd.su/bestiary/5889-drow-pickpocket"
    },
    {
        "name": "[0] Дроу обыватель",
        "url": "https://dnd.su/bestiary/5888-drow-commoner"
    },
    {
        "name": "[0] Дух жнеца",
        "url": "https://dnd.su/bestiary/8401-reaper-spirit"
    },
    {
        "name": "[0] Дювесса Шейн",
        "url": "https://dnd.su/bestiary/7773-duvessa-shane"
    },
    {
        "name": "[1/8] Дварф Фелбарра",
        "url": "https://dnd.su/bestiary/7717-felbarren-dwarf"
    },
    {
        "name": "[1/8] Дворянин",
        "url": "https://dnd.su/bestiary/425-noble"
    },
    {
        "name": "[1/8] Дворянин дроу",
        "url": "https://dnd.su/bestiary/4606-drow-noble"
    },
    {
        "name": "[1/8] Дельфин",
        "url": "https://dnd.su/bestiary/6608-dolphin"
    },
    {
        "name": "[1/8] Деревянный ослик",
        "url": "https://dnd.su/bestiary/6218-wooden-donkey"
    },
    {
        "name": "[1/8] Детёныш ускользающего зверя",
        "url": "https://dnd.su/bestiary/8388-displacer-beast-kitten"
    },
    {
        "name": "[1/8] Джонси",
        "url": "https://dnd.su/bestiary/6046-zhanthi"
    },
    {
        "name": "[1/8] Диллю",
        "url": "https://dnd.su/bestiary/7438-dillyu"
    },
    {
        "name": "[1/8] Дроу культист",
        "url": "https://dnd.su/bestiary/5892-drow-cultist"
    },
    {
        "name": "[1/8] Дроу разбойник",
        "url": "https://dnd.su/bestiary/5891-drow-bandit"
    },
    {
        "name": "[1/8] Дроу споровый слуга",
        "url": "https://dnd.su/bestiary/5840-drow-spore-servant"
    },
    {
        "name": "[1/8] Дроу страж",
        "url": "https://dnd.su/bestiary/5893-drow-guard"
    },
    {
        "name": "[1/4] Дварф-альбинос воин",
        "url": "https://dnd.su/bestiary/1732-albino-dwarf-warrior"
    },
    {
        "name": "[1/4] Дерро",
        "url": "https://dnd.su/bestiary/5839-derro"
    },
    {
        "name": "[1/4] Дерро",
        "url": "https://dnd.su/bestiary/6587-derro"
    },
    {
        "name": "[1/4] Дерро налетчик",
        "url": "https://dnd.su/bestiary/17216-derro-raider"
    },
    {
        "name": "[1/4] Джелейн",
        "url": "https://dnd.su/bestiary/8509-jelayne"
    },
    {
        "name": "[1/4] Диатрима",
        "url": "https://dnd.su/bestiary/5111-diatryma"
    },
    {
        "name": "[1/4] Диметродон",
        "url": "https://dnd.su/bestiary/6601-dimetrodon"
    },
    {
        "name": "[1/4] Диметродон зомби",
        "url": "https://dnd.su/bestiary/5987-dimetrodon-zombie"
    },
    {
        "name": "[1/4] Донавич",
        "url": "https://dnd.su/bestiary/4695-donavich"
    },
    {
        "name": "[1/4] Дретч",
        "url": "https://dnd.su/bestiary/66-dretch"
    },
    {
        "name": "[1/4] Дроу",
        "url": "https://dnd.su/bestiary/145-drow"
    },
    {
        "name": "[1/4] Дроу прислужник",
        "url": "https://dnd.su/bestiary/5890-drow-acolyte"
    },
    {
        "name": "[1/4] Дуодрон",
        "url": "https://dnd.su/bestiary/239-duodrone"
    },
    {
        "name": "[1/4] Дымовой мефит",
        "url": "https://dnd.su/bestiary/232-smoke-mephit"
    },
    {
        "name": "[1/4] Дьявольский пёс",
        "url": "https://dnd.su/bestiary/8505-devil-dog"
    },
    {
        "name": "[1/2] Дарклинг",
        "url": "https://dnd.su/bestiary/6579-darkling"
    },
    {
        "name": "[1/2] Дварфы Клана Боевого молота",
        "url": "https://dnd.su/bestiary/5792-battlehammer-dwarf"
    },
    {
        "name": "[1/2] Демонические гигантский паук",
        "url": "https://dnd.su/bestiary/5826-fiendish-giant-spider"
    },
    {
        "name": "[1/2] Джакули",
        "url": "https://dnd.su/bestiary/2635-jaculi"
    },
    {
        "name": "[1/2] Джобал",
        "url": "https://dnd.su/bestiary/6048-jobal"
    },
    {
        "name": "[1/2] Дива",
        "url": "https://dnd.su/bestiary/8530-diva"
    },
    {
        "name": "[1/2] Дольгрим",
        "url": "https://dnd.su/bestiary/4975-dolgrim"
    },
    {
        "name": "[1/2] Дон-Джон Раскин",
        "url": "https://dnd.su/bestiary/7907-don-jon-raskin"
    },
    {
        "name": "[1/2] Драконид бааз",
        "url": "https://dnd.su/bestiary/10568-baaz-draconian"
    },
    {
        "name": "[1/2] Драконид пехотинец",
        "url": "https://dnd.su/bestiary/6306-draconian-foot-soldier"
    },
    {
        "name": "[1/2] Дуэргар споровый слуга",
        "url": "https://dnd.su/bestiary/5841-duergar-spore-servant"
    },
    {
        "name": "[1] Два сухих плаща",
        "url": "https://dnd.su/bestiary/8518-two-dry-cloaks"
    },
    {
        "name": "[1] Дварф-альбинос духовный воин",
        "url": "https://dnd.su/bestiary/6008-albino-dwarf-spirit-warrior"
    },
    {
        "name": "[1] Дейноних",
        "url": "https://dnd.su/bestiary/6603-deinonychus"
    },
    {
        "name": "[1] Дейноних зомби",
        "url": "https://dnd.su/bestiary/5985-deinonychus-zombie"
    },
    {
        "name": "[1] Дерро подмастерье",
        "url": "https://dnd.su/bestiary/17215-derro-apprentice"
    },
    {
        "name": "[1] Джимджар",
        "url": "https://dnd.su/bestiary/5878-jimjar"
    },
    {
        "name": "[1] Джэмна Глимсилвер",
        "url": "https://dnd.su/bestiary/3333-jamna-gleamsilver"
    },
    {
        "name": "[1] Дикий грунг",
        "url": "https://dnd.su/bestiary/6785-grung-wildling"
    },
    {
        "name": "[1] Дилофозавр",
        "url": "https://dnd.su/bestiary/5965-dilophosaurus"
    },
    {
        "name": "[1] Дилофозавр зомби",
        "url": "https://dnd.su/bestiary/5988-dilophosaurus-zombie"
    },
    {
        "name": "[1] Драконий коготь",
        "url": "https://dnd.su/bestiary/482-dragonclaw"
    },
    {
        "name": "[1] Дриада",
        "url": "https://dnd.su/bestiary/139-dryad"
    },
    {
        "name": "[1] Дроу шпион",
        "url": "https://dnd.su/bestiary/4604-drow-spy"
    },
    {
        "name": "[1] Душитель",
        "url": "https://dnd.su/bestiary/6495-choker"
    },
    {
        "name": "[1] Душитель",
        "url": "https://dnd.su/bestiary/17390-choker"
    },
    {
        "name": "[1] Дуэргар",
        "url": "https://dnd.su/bestiary/140-duergar"
    },
    {
        "name": "[1] Дуэргар алхимик",
        "url": "https://dnd.su/bestiary/5896-duergar-alchemist"
    },
    {
        "name": "[1] Дуэргар клинок души",
        "url": "https://dnd.su/bestiary/6712-duergar-soulblade"
    },
    {
        "name": "[2] Дабус",
        "url": "https://dnd.su/bestiary/13079-dabus"
    },
    {
        "name": "[2] Дагдра Глубинная кузня",
        "url": "https://dnd.su/bestiary/8504-dagdra-deepforge"
    },
    {
        "name": "[2] Даджаркал",
        "url": "https://dnd.su/bestiary/7440-dajarkal"
    },
    {
        "name": "[2] Двуглавый цербер",
        "url": "https://dnd.su/bestiary/7178-two-headed-cerberus"
    },
    {
        "name": "[2] Дедуля Зетембей",
        "url": "https://dnd.su/bestiary/6065-grandfather-zitembe"
    },
    {
        "name": "[2] Демос маген",
        "url": "https://dnd.su/bestiary/3618-demos-magen"
    },
    {
        "name": "[2] Детеныш потустороннего ужаса",
        "url": "https://dnd.su/bestiary/12710-eldritch-horror-hatchling"
    },
    {
        "name": "[2] Детёныш лилового червя",
        "url": "https://dnd.su/bestiary/1018-purple-wormling"
    },
    {
        "name": "[2] Джандар Чергоба",
        "url": "https://dnd.su/bestiary/5297-jandar-chergoba"
    },
    {
        "name": "[2] Долгоносик",
        "url": "https://dnd.su/bestiary/7729-weevil"
    },
    {
        "name": "[2] Драконид бозак",
        "url": "https://dnd.su/bestiary/10569-bozak-draconian"
    },
    {
        "name": "[2] Драконид маг",
        "url": "https://dnd.su/bestiary/6309-draconian-mage"
    },
    {
        "name": "[2] Драконнель",
        "url": "https://dnd.su/bestiary/6338-dragonnel"
    },
    {
        "name": "[2] Драконье крыло",
        "url": "https://dnd.su/bestiary/483-dragonwing"
    },
    {
        "name": "[2] Дроки",
        "url": "https://dnd.su/bestiary/5852-droki"
    },
    {
        "name": "[2] Дроу младшая жрица Лолс",
        "url": "https://dnd.su/bestiary/6198-junior-drow-priestess-of-lolth"
    },
    {
        "name": "[2] Друид",
        "url": "https://dnd.su/bestiary/431-druid"
    },
    {
        "name": "[2] Дуб Меткобьющий",
        "url": "https://dnd.su/bestiary/7474-oak-truestrike"
    },
    {
        "name": "[2] Дуэргар Хранитель Пламени",
        "url": "https://dnd.su/bestiary/5835-duergar-keeper-of-the-flame"
    },
    {
        "name": "[2] Дуэргар даркхафт",
        "url": "https://dnd.su/bestiary/5834-duergar-darkhaft"
    },
    {
        "name": "[2] Дуэргар кавалрахни",
        "url": "https://dnd.su/bestiary/6090-duergar-kavalrachni"
    },
    {
        "name": "[2] Дуэргар кавалрахни",
        "url": "https://dnd.su/bestiary/6707-duergar-kavalrachni"
    },
    {
        "name": "[2] Дуэргар каменный страж",
        "url": "https://dnd.su/bestiary/7107-duergar-stone-guard"
    },
    {
        "name": "[2] Дуэргар ксаррорн",
        "url": "https://dnd.su/bestiary/6714-duergar-xarrorn"
    },
    {
        "name": "[2] Дуэргар повелитель разума",
        "url": "https://dnd.su/bestiary/6710-duergar-mind-master"
    },
    {
        "name": "[2] Дуэргар шпион",
        "url": "https://dnd.su/bestiary/17410-duergar-spy"
    },
    {
        "name": "[2] Дуэргарский молотобоец",
        "url": "https://dnd.su/bestiary/6706-duergar-hammerer"
    },
    {
        "name": "[2] Дэвиан Мартиков",
        "url": "https://dnd.su/bestiary/4693-davian-martikov"
    },
    {
        "name": "[3] Дварф гробницы",
        "url": "https://dnd.su/bestiary/6069-tomb-dwarf"
    },
    {
        "name": "[3] Дермот Вурдер (1-го уровня)",
        "url": "https://dnd.su/bestiary/7793-dermot-wurder-tier-1"
    },
    {
        "name": "[3] Дерро савант",
        "url": "https://dnd.su/bestiary/5828-derro-savant"
    },
    {
        "name": "[3] Дерро савант",
        "url": "https://dnd.su/bestiary/6596-derro-savant"
    },
    {
        "name": "[3] Джаспер Диммерчазм",
        "url": "https://dnd.su/bestiary/7754-jasper-dimmerchasm"
    },
    {
        "name": "[3] Дитя лавы",
        "url": "https://dnd.su/bestiary/5383-lava-child"
    },
    {
        "name": "[3] Долгаунт",
        "url": "https://dnd.su/bestiary/4974-dolgaunt"
    },
    {
        "name": "[3] Донаар Блит'зен",
        "url": "https://dnd.su/bestiary/7467-donaar-blitzen"
    },
    {
        "name": "[3] Доппельгангер",
        "url": "https://dnd.su/bestiary/6-doppelganger"
    },
    {
        "name": "[3] Драконид капак",
        "url": "https://dnd.su/bestiary/10570-kapak-draconian"
    },
    {
        "name": "[3] Драконид лазутчик",
        "url": "https://dnd.su/bestiary/6308-draconian-infiltrator"
    },
    {
        "name": "[3] Драконнель Драконьей армии",
        "url": "https://dnd.su/bestiary/10575-dragon-army-dragonnel"
    },
    {
        "name": "[3] Дралморрер Серорожденный",
        "url": "https://dnd.su/bestiary/3331-dralmorrer-borngray"
    },
    {
        "name": "[3] Дуэргарский крикун",
        "url": "https://dnd.su/bestiary/6711-duergar-screamer"
    },
    {
        "name": "[3] Дэтлок умертвие",
        "url": "https://dnd.su/bestiary/17391-deathlock-wight"
    },
    {
        "name": "[4] Дазон",
        "url": "https://dnd.su/bestiary/5736-dzaan"
    },
    {
        "name": "[4] Демогоргон",
        "url": "https://dnd.su/bestiary/8033-demogorgon"
    },
    {
        "name": "[4] Джалестр Сильвермейн",
        "url": "https://dnd.su/bestiary/5296-jalester-silvermane"
    },
    {
        "name": "[4] Диббук",
        "url": "https://dnd.su/bestiary/6717-dybbuk"
    },
    {
        "name": "[4] Драконид дредноут",
        "url": "https://dnd.su/bestiary/6305-draconian-dreadnought"
    },
    {
        "name": "[4] Драконид сивак",
        "url": "https://dnd.su/bestiary/10571-sivak-draconian"
    },
    {
        "name": "[4] Дроу стрелок",
        "url": "https://dnd.su/bestiary/5113-drow-gunslinger"
    },
    {
        "name": "[4] Дух Эйгерона",
        "url": "https://dnd.su/bestiary/7738-eigerons-ghost"
    },
    {
        "name": "[4] Дух дриады",
        "url": "https://dnd.su/bestiary/6432-dryad-spirit"
    },
    {
        "name": "[4] Дэтлок",
        "url": "https://dnd.su/bestiary/6582-deathlock"
    },
    {
        "name": "[5] Девятипалая Кин",
        "url": "https://dnd.su/bestiary/6445-nine-fingers-keene"
    },
    {
        "name": "[5] Дермот Вурдер (2-го уровня)",
        "url": "https://dnd.su/bestiary/7794-dermot-wurder-tier-2"
    },
    {
        "name": "[5] Джеймс Крайон",
        "url": "https://dnd.su/bestiary/7893-james-cryon"
    },
    {
        "name": "[5] Джим Темномаг",
        "url": "https://dnd.su/bestiary/7462-jim-darkmagic"
    },
    {
        "name": "[5] Дикий пепельник",
        "url": "https://dnd.su/bestiary/12495-feral-ashenwight"
    },
    {
        "name": "[5] Дождь",
        "url": "https://dnd.su/bestiary/11063-rain"
    },
    {
        "name": "[5] Дорик",
        "url": "https://dnd.su/bestiary/10402-doric"
    },
    {
        "name": "[5] Дору",
        "url": "https://dnd.su/bestiary/4696-doru"
    },
    {
        "name": "[5] Драконий клык",
        "url": "https://dnd.su/bestiary/481-dragonfang"
    },
    {
        "name": "[5] Дрэгонбэйт",
        "url": "https://dnd.su/bestiary/6009-dragonbait"
    },
    {
        "name": "[5] Дьявольский шнек",
        "url": "https://dnd.su/bestiary/12500-fiendish-auger"
    },
    {
        "name": "[6] Давил Старсонг",
        "url": "https://dnd.su/bestiary/5110-davil-starsong"
    },
    {
        "name": "[6] Даррибет Мелтимер",
        "url": "https://dnd.su/bestiary/6221-darribeth-meltimer"
    },
    {
        "name": "[6] Диолет Мондс",
        "url": "https://dnd.su/bestiary/7418-dyolet-mounds"
    },
    {
        "name": "[6] Драконид аурак",
        "url": "https://dnd.su/bestiary/10567-aurak-draconian"
    },
    {
        "name": "[6] Драконид манипулятор",
        "url": "https://dnd.su/bestiary/6310-draconian-mastermind"
    },
    {
        "name": "[6] Драконорождённый Сардиора",
        "url": "https://dnd.su/bestiary/6334-dragonborn-of-sardior"
    },
    {
        "name": "[6] Драук",
        "url": "https://dnd.su/bestiary/138-drider"
    },
    {
        "name": "[6] Дуэргар военачальник",
        "url": "https://dnd.su/bestiary/6713-duergar-warlord"
    },
    {
        "name": "[7] Дерголот",
        "url": "https://dnd.su/bestiary/6600-dhergoloth"
    },
    {
        "name": "[7] Драколев",
        "url": "https://dnd.su/bestiary/6349-liondrake"
    },
    {
        "name": "[7] Драконорождённый Тиамат",
        "url": "https://dnd.su/bestiary/6335-dragonborn-of-tiamat"
    },
    {
        "name": "[7] Драннин Сплитхельм",
        "url": "https://dnd.su/bestiary/4933-drannin-splithelm"
    },
    {
        "name": "[7] Древесная зараза",
        "url": "https://dnd.su/bestiary/950-tree-blight"
    },
    {
        "name": "[7] Друид Старины",
        "url": "https://dnd.su/bestiary/10543-druid-of-the-old-ways"
    },
    {
        "name": "[7] Дрэглот",
        "url": "https://dnd.su/bestiary/6610-draegloth"
    },
    {
        "name": "[7] Душа дракона",
        "url": "https://dnd.su/bestiary/484-dragonsoul"
    },
    {
        "name": "[8] Дагаз",
        "url": "https://dnd.su/bestiary/9268-dagaz"
    },
    {
        "name": "[8] «Демогоргон»",
        "url": "https://dnd.su/bestiary/8520-the-demogorgon"
    },
    {
        "name": "[8] Дермот Вурдер (3-го уровня)",
        "url": "https://dnd.su/bestiary/7795-dermot-wurder-tier-3"
    },
    {
        "name": "[8] Драконорождённый Багамута",
        "url": "https://dnd.su/bestiary/6333-dragonborn-of-bahamut"
    },
    {
        "name": "[8] Дроу жрица Лолс",
        "url": "https://dnd.su/bestiary/148-drow-priestess-of-lolth"
    },
    {
        "name": "[8] Друфи",
        "url": "https://dnd.su/bestiary/6044-drufi"
    },
    {
        "name": "[8] Духовная нага",
        "url": "https://dnd.su/bestiary/250-spirit-naga"
    },
    {
        "name": "[8] Дьявол цепей (Китон)",
        "url": "https://dnd.su/bestiary/80-chain-devil"
    },
    {
        "name": "[8] Дэтлок манипулятор",
        "url": "https://dnd.su/bestiary/6583-deathlock-mastermind"
    },
    {
        "name": "[9] Деррион Сумеречная тень",
        "url": "https://dnd.su/bestiary/6147-derrion-shadowdusk"
    },
    {
        "name": "[9] Дриада Конклава",
        "url": "https://dnd.su/bestiary/8291-conclave-dryad"
    },
    {
        "name": "[9] Дроу капитан дома",
        "url": "https://dnd.su/bestiary/6641-drow-house-captain"
    },
    {
        "name": "[9] Дюрнан",
        "url": "https://dnd.su/bestiary/5114-durnan"
    },
    {
        "name": "[10] Демогот",
        "url": "https://dnd.su/bestiary/8059-daemogoth"
    },
    {
        "name": "[10] Деформированный кракен",
        "url": "https://dnd.su/bestiary/17439-malformed-kraken"
    },
    {
        "name": "[10] Джамиль А'алития",
        "url": "https://dnd.su/bestiary/7894-jamil-aalithiya"
    },
    {
        "name": "[10] Древний облекс",
        "url": "https://dnd.su/bestiary/6900-elder-oblex"
    },
    {
        "name": "[10] Дуллахан",
        "url": "https://dnd.su/bestiary/6863-dullahan"
    },
    {
        "name": "[10] Дурноглаз",
        "url": "https://dnd.su/bestiary/8832-eye-monger"
    },
    {
        "name": "[10] Дэв",
        "url": "https://dnd.su/bestiary/32-deva"
    },
    {
        "name": "[11] Дао",
        "url": "https://dnd.su/bestiary/160-dao"
    },
    {
        "name": "[11] Демоданд фарасту",
        "url": "https://dnd.su/bestiary/13087-farastu-demodand"
    },
    {
        "name": "[11] Джинн",
        "url": "https://dnd.su/bestiary/161-djinni"
    },
    {
        "name": "[11] Дракогидра",
        "url": "https://dnd.su/bestiary/6304-dracohydra"
    },
    {
        "name": "[11] Дроу клинок теней",
        "url": "https://dnd.su/bestiary/6704-drow-shadowblade"
    },
    {
        "name": "[11] Дэглот",
        "url": "https://dnd.su/bestiary/15697-degloth"
    },
    {
        "name": "[12] Добрый страж высших фей",
        "url": "https://dnd.su/bestiary/17347-high-fae-kindguard"
    },
    {
        "name": "[12] Дриввин Фрет",
        "url": "https://dnd.su/bestiary/6184-drivvin-freth"
    },
    {
        "name": "[12] Дуговой Феникс",
        "url": "https://dnd.su/bestiary/8290-arclight-phoenix"
    },
    {
        "name": "[12] Дуэргар деспот",
        "url": "https://dnd.su/bestiary/6705-duergar-despot"
    },
    {
        "name": "[13] Дворянин высших фей",
        "url": "https://dnd.su/bestiary/17349-high-fae-noble"
    },
    {
        "name": "[13] Демоданд келубар",
        "url": "https://dnd.su/bestiary/13094-kelubar-demodand"
    },
    {
        "name": "[13] Джандер Санстар",
        "url": "https://dnd.su/bestiary/6431-jander-sunstar"
    },
    {
        "name": "[13] Джиджибиша Маниварши",
        "url": "https://dnd.su/bestiary/8490-jijibisha-manivarshi"
    },
    {
        "name": "[13] Дроу арахномант",
        "url": "https://dnd.su/bestiary/6611-drow-arachnomancer"
    },
    {
        "name": "[14] Древний морской змей",
        "url": "https://dnd.su/bestiary/6291-ancient-sea-serpent"
    },
    {
        "name": "[14] Дредноут огненный великан",
        "url": "https://dnd.su/bestiary/6747-fire-giant-dreadnought"
    },
    {
        "name": "[14] Дроу инквизитор",
        "url": "https://dnd.su/bestiary/6642-drow-inquisitor"
    },
    {
        "name": "[15] Дворянин фомор",
        "url": "https://dnd.su/bestiary/12125-fomorian-noble"
    },
    {
        "name": "[15] Джарлаксл Баэнр",
        "url": "https://dnd.su/bestiary/5298-jarlaxle-baenre"
    },
    {
        "name": "[15] Древний глубинный ворон",
        "url": "https://dnd.su/bestiary/7486-ancient-deep-crow"
    },
    {
        "name": "[15] Древний лягемот",
        "url": "https://dnd.su/bestiary/17217-froghemoth-elder"
    },
    {
        "name": "[15] Дрелнза",
        "url": "https://dnd.su/bestiary/17218-drelnza"
    },
    {
        "name": "[15] Дух Бури",
        "url": "https://dnd.su/bestiary/12268-tempest-spirit"
    },
    {
        "name": "[16] Демогот-титан",
        "url": "https://dnd.su/bestiary/8060-daemogoth-titan"
    },
    {
        "name": "[16] Демоданд шатор",
        "url": "https://dnd.su/bestiary/13095-shator-demodand"
    },
    {
        "name": "[17] Дезмир Сумеречная тень",
        "url": "https://dnd.su/bestiary/6145-dezmyr-shadowdusk"
    },
    {
        "name": "[17] Драколич (шаблон)",
        "url": "https://dnd.su/bestiary/135-dracolich"
    },
    {
        "name": "[17] Драконий осколок",
        "url": "https://dnd.su/bestiary/6312-draconic-shard"
    },
    {
        "name": "[17] Дракочерепаха",
        "url": "https://dnd.su/bestiary/137-dragon-turtle"
    },
    {
        "name": "[18] Демилич",
        "url": "https://dnd.su/bestiary/62-demilich"
    },
    {
        "name": "[18] Древний",
        "url": "https://dnd.su/bestiary/8055-archaic"
    },
    {
        "name": "[18] Древний глубинный дракон",
        "url": "https://dnd.su/bestiary/6262-ancient-deep-dragon"
    },
    {
        "name": "[18] Дроу любимый консорт",
        "url": "https://dnd.su/bestiary/6613-drow-favored-consort"
    },
    {
        "name": "[19] Дракон Края",
        "url": "https://dnd.su/bestiary/11849-ender-dragon"
    },
    {
        "name": "[19] Древний кристаллический дракон",
        "url": "https://dnd.su/bestiary/6248-ancient-crystal-dragon"
    },
    {
        "name": "[19] Древний лунный дракон",
        "url": "https://dnd.su/bestiary/8770-ancient-lunar-dragon"
    },
    {
        "name": "[20] Древний белый дракон",
        "url": "https://dnd.su/bestiary/111-ancient-white-dragon"
    },
    {
        "name": "[20] Древний латунный дракон",
        "url": "https://dnd.su/bestiary/115-ancient-brass-dragon"
    },
    {
        "name": "[20] Древний топазный дракон",
        "url": "https://dnd.su/bestiary/6283-ancient-topaz-dragon"
    },
    {
        "name": "[20] Дроу верховная мать",
        "url": "https://dnd.su/bestiary/6703-drow-matron-mother"
    },
    {
        "name": "[21] Древний изумрудный дракон",
        "url": "https://dnd.su/bestiary/6266-ancient-emerald-dragon"
    },
    {
        "name": "[21] Древний луннокаменный дракон",
        "url": "https://dnd.su/bestiary/6273-ancient-moonstone-dragon"
    },
    {
        "name": "[21] Древний медный дракон",
        "url": "https://dnd.su/bestiary/123-ancient-copper-dragon"
    },
    {
        "name": "[21] Древний солнечный дракон",
        "url": "https://dnd.su/bestiary/8774-ancient-solar-dragon"
    },
    {
        "name": "[21] Древний чёрный дракон",
        "url": "https://dnd.su/bestiary/95-ancient-black-dragon"
    },
    {
        "name": "[22] Джарад Вод Саво",
        "url": "https://dnd.su/bestiary/17323-jarad-vod-savo"
    },
    {
        "name": "[22] Дракон старшего мозга",
        "url": "https://dnd.su/bestiary/6341-elder-brain-dragon"
    },
    {
        "name": "[22] Древний бронзовый дракон",
        "url": "https://dnd.su/bestiary/119-ancient-bronze-dragon"
    },
    {
        "name": "[22] Древний зеленый дракон",
        "url": "https://dnd.su/bestiary/100-ancient-green-dragon"
    },
    {
        "name": "[22] Древний сапфировый дракон",
        "url": "https://dnd.su/bestiary/6277-ancient-sapphire-dragon"
    },
    {
        "name": "[23] Джуиблекс",
        "url": "https://dnd.su/bestiary/6595-juiblex"
    },
    {
        "name": "[23] Древний аметистовый дракон",
        "url": "https://dnd.su/bestiary/6245-ancient-amethyst-dragon"
    },
    {
        "name": "[23] Древний серебряный дракон",
        "url": "https://dnd.su/bestiary/131-ancient-silver-dragon"
    },
    {
        "name": "[23] Древний синий дракон",
        "url": "https://dnd.su/bestiary/99-ancient-blue-dragon"
    },
    {
        "name": "[23] Древний шторм",
        "url": "https://dnd.su/bestiary/6742-elder-tempest"
    },
    {
        "name": "[24] Диррн",
        "url": "https://dnd.su/bestiary/4969-dyrrn"
    },
    {
        "name": "[24] Древний золотой дракон",
        "url": "https://dnd.su/bestiary/127-ancient-gold-dragon"
    },
    {
        "name": "[24] Древний красный дракон",
        "url": "https://dnd.su/bestiary/107-ancient-red-dragon"
    },
    {
        "name": "[24] Древняя дракочерепаха",
        "url": "https://dnd.su/bestiary/6288-ancient-dragon-turtle"
    },
    {
        "name": "[26] Демогоргон",
        "url": "https://dnd.su/bestiary/5864-demogorgon"
    },
    {
        "name": "[26] Демогоргон",
        "url": "https://dnd.su/bestiary/6586-demogorgon"
    },
    {
        "name": "[26] Древний дракон времени",
        "url": "https://dnd.su/bestiary/13133-ancient-time-dragon"
    },
    {
        "name": "[?] Дрейк-компаньон",
        "url": "https://dnd.su/bestiary/4842-drake-companion"
    },
    {
        "name": "[?] Дрейк-компаньон",
        "url": "https://dnd.su/bestiary/14130-drake-companion"
    },
    {
        "name": "[?] Дрейк-компаньон",
        "url": "https://dnd.su/bestiary/14131-drake-companion"
    },
    {
        "name": "[?] Дух аберрации",
        "url": "https://dnd.su/bestiary/3105-aberrant-spirit"
    },
    {
        "name": "[?] Дух дикого огня",
        "url": "https://dnd.su/bestiary/4235-wildfire-spirit"
    },
    {
        "name": "[?] Дух дракона",
        "url": "https://dnd.su/bestiary/5037-draconic-spirit"
    },
    {
        "name": "[?] Дух зверя",
        "url": "https://dnd.su/bestiary/3140-bestial-spirit"
    },
    {
        "name": "[?] Дух исчадия",
        "url": "https://dnd.su/bestiary/3145-fiendish-spirit"
    },
    {
        "name": "[?] Дух конструкта",
        "url": "https://dnd.su/bestiary/3142-construct-spirit"
    },
    {
        "name": "[?] Дух небожителя",
        "url": "https://dnd.su/bestiary/3141-celestial-spirit"
    },
    {
        "name": "[?] Дух нежити",
        "url": "https://dnd.su/bestiary/3147-undead-spirit"
    },
    {
        "name": "[?] Дух стихии",
        "url": "https://dnd.su/bestiary/3143-elemental-spirit"
    },
    {
        "name": "[?] Дух тени",
        "url": "https://dnd.su/bestiary/3146-shadow-spirit"
    },
    {
        "name": "[?] Дух феи",
        "url": "https://dnd.su/bestiary/3144-fey-spirit"
    },
    {
        "name": "[1/4] Ездовая лошадь",
        "url": "https://dnd.su/bestiary/363-riding-horse"
    },
    {
        "name": "[1/4] Ездовая собака",
        "url": "https://dnd.su/bestiary/5265-sled-dog"
    },
    {
        "name": "[1/2] Евгений Крушкин",
        "url": "https://dnd.su/bestiary/4798-yevgeni-krushkin"
    },
    {
        "name": "[2] Елистер",
        "url": "https://dnd.su/bestiary/7747-elister"
    },
    {
        "name": "[5] Единорог",
        "url": "https://dnd.su/bestiary/306-unicorn"
    },
    {
        "name": "[0] Железный паук",
        "url": "https://dnd.su/bestiary/6186-iron-spider"
    },
    {
        "name": "[1/4] Жаболюд",
        "url": "https://dnd.su/bestiary/49-bullywug"
    },
    {
        "name": "[1/4] Жёлтый мускусный зомби",
        "url": "https://dnd.su/bestiary/6010-yellow-musk-zombie"
    },
    {
        "name": "[1] Железный защитник",
        "url": "https://dnd.su/bestiary/1683-iron-defender"
    },
    {
        "name": "[2] Жаболюд квакун",
        "url": "https://dnd.su/bestiary/7499-bullywug-croaker"
    },
    {
        "name": "[2] Железный консул",
        "url": "https://dnd.su/bestiary/6376-iron-consul"
    },
    {
        "name": "[2] Живая кукла",
        "url": "https://dnd.su/bestiary/8375-living-doll"
    },
    {
        "name": "[2] Жнец Баала",
        "url": "https://dnd.su/bestiary/6378-reaper-of-bhaal"
    },
    {
        "name": "[2] Жрец Воющей Ненависти",
        "url": "https://dnd.su/bestiary/3651-howling-hatred-priest"
    },
    {
        "name": "[2] Жрец Сокрушительной Волны",
        "url": "https://dnd.su/bestiary/4923-crushing-wave-priest"
    },
    {
        "name": "[2] Жрица сахуагинов",
        "url": "https://dnd.su/bestiary/277-sahuagin-priestess"
    },
    {
        "name": "[2] Жёлтая мускусная лиана",
        "url": "https://dnd.su/bestiary/6012-yellow-musk-creeper"
    },
    {
        "name": "[3] Жаболюд-рыцарь",
        "url": "https://dnd.su/bestiary/8365-bullywug-knight"
    },
    {
        "name": "[3] Живое знамение",
        "url": "https://dnd.su/bestiary/13294-living-portent"
    },
    {
        "name": "[3] Жрец Вечного Пламени",
        "url": "https://dnd.su/bestiary/3679-eternal-flame-priest"
    },
    {
        "name": "[3] Жрец Чёрной Земли",
        "url": "https://dnd.su/bestiary/4912-black-earth-priest"
    },
    {
        "name": "[3] Жук Ассасин",
        "url": "https://dnd.su/bestiary/13620-assasin-bug"
    },
    {
        "name": "[4] Жрец смерти краулов",
        "url": "https://dnd.su/bestiary/17273-kraul-death-priest"
    },
    {
        "name": "[4] Жрец яколюдов",
        "url": "https://dnd.su/bestiary/5614-yakfolk-priest"
    },
    {
        "name": "[5] Жрец Кракена",
        "url": "https://dnd.su/bestiary/6821-kraken-priest"
    },
    {
        "name": "[6] Жрец Осибуса",
        "url": "https://dnd.su/bestiary/6882-priest-of-osybus"
    },
    {
        "name": "[8] Жасмин",
        "url": "https://dnd.su/bestiary/6049-jessamine"
    },
    {
        "name": "[12] Железнокожая гидра",
        "url": "https://dnd.su/bestiary/7195-ironscale-hydra"
    },
    {
        "name": "[12] Жнец великан смерти",
        "url": "https://dnd.su/bestiary/12090-death-giant-reaper"
    },
    {
        "name": "[16] Железный голем",
        "url": "https://dnd.su/bestiary/185-iron-golem"
    },
    {
        "name": "[0] Заводной наблюдатель",
        "url": "https://dnd.su/bestiary/12690-clockwork-observer"
    },
    {
        "name": "[0] Защитник колоды",
        "url": "https://dnd.su/bestiary/13238-deck-defender"
    },
    {
        "name": "[0] Заяц",
        "url": "https://dnd.su/bestiary/5749-hare"
    },
    {
        "name": "[0] Заяц химера",
        "url": "https://dnd.su/bestiary/5803-chimeric-hare"
    },
    {
        "name": "[1/8] Заводной мул",
        "url": "https://dnd.su/bestiary/7748-clockwork-mule"
    },
    {
        "name": "[1/8] Зайцегон-разбойник",
        "url": "https://dnd.su/bestiary/8370-harengon-brigand"
    },
    {
        "name": "[1/4] Зайцегон-стрелок",
        "url": "https://dnd.su/bestiary/8371-harengon-sniper"
    },
    {
        "name": "[1/4] Зебра",
        "url": "https://dnd.su/bestiary/6078-zebra"
    },
    {
        "name": "[1/4] Зигфрек Белвью",
        "url": "https://dnd.su/bestiary/4813-zygfrek-belview"
    },
    {
        "name": "[1/4] Золотой олень",
        "url": "https://dnd.su/bestiary/8040-golden-stag"
    },
    {
        "name": "[1/4] Зомби",
        "url": "https://dnd.su/bestiary/9-zombie"
    },
    {
        "name": "[1/4] Зудень",
        "url": "https://dnd.su/bestiary/17366-mite"
    },
    {
        "name": "[1/2] Зловонный бык",
        "url": "https://dnd.su/bestiary/6491-stench-kow"
    },
    {
        "name": "[1/2] Зорбо",
        "url": "https://dnd.su/bestiary/2637-zorbo"
    },
    {
        "name": "[1/2] Зубоскал",
        "url": "https://dnd.su/bestiary/3616-cackler"
    },
    {
        "name": "[1] Заводной бронзовый скаут",
        "url": "https://dnd.su/bestiary/6539-clockwork-bronze-scout"
    },
    {
        "name": "[1] Заводной дракон",
        "url": "https://dnd.su/bestiary/7483-clockwork-dragon"
    },
    {
        "name": "[1] Заводной защитник",
        "url": "https://dnd.su/bestiary/12691-clockwork-defender"
    },
    {
        "name": "[1] Заключённый 237",
        "url": "https://dnd.su/bestiary/5791-prisoner-237"
    },
    {
        "name": "[1] Залтэмбер",
        "url": "https://dnd.su/bestiary/7751-zaltember"
    },
    {
        "name": "[1] Звезднорунный овен",
        "url": "https://dnd.su/bestiary/7199-nyx-fleece-ram"
    },
    {
        "name": "[1] Злой маг",
        "url": "https://dnd.su/bestiary/7-evil-mage"
    },
    {
        "name": "[1] Зомби Страда",
        "url": "https://dnd.su/bestiary/951-strahd-zombie"
    },
    {
        "name": "[2] Зарак",
        "url": "https://dnd.su/bestiary/8427-zarak"
    },
    {
        "name": "[2] Зарум Аль-Саряк",
        "url": "https://dnd.su/bestiary/6054-zaroum-al-saryak"
    },
    {
        "name": "[2] Заточённый",
        "url": "https://dnd.su/bestiary/17375-immured-one"
    },
    {
        "name": "[2] Звёздный копьеносец",
        "url": "https://dnd.su/bestiary/7693-star-lancer"
    },
    {
        "name": "[2] Зеалораптор",
        "url": "https://dnd.su/bestiary/5967-zealoraptor"
    },
    {
        "name": "[2] Зеалораптор зомби",
        "url": "https://dnd.su/bestiary/5991-zealoraptor-zombie"
    },
    {
        "name": "[2] Зелёный сторожевой дрейк",
        "url": "https://dnd.su/bestiary/6789-green-guard-drake"
    },
    {
        "name": "[2] Златожор",
        "url": "https://dnd.su/bestiary/8402-aurumvorax"
    },
    {
        "name": "[2] Золотистый студень",
        "url": "https://dnd.su/bestiary/8-ochre-jelly"
    },
    {
        "name": "[3] Западный ветер",
        "url": "https://dnd.su/bestiary/17374-west-wind"
    },
    {
        "name": "[3] Заргаш",
        "url": "https://dnd.su/bestiary/8420-zargash"
    },
    {
        "name": "[3] Зелёная карга",
        "url": "https://dnd.su/bestiary/192-green-hag"
    },
    {
        "name": "[3] Зот",
        "url": "https://dnd.su/bestiary/7877-xot"
    },
    {
        "name": "[3] Зуб-Коготь",
        "url": "https://dnd.su/bestiary/8021-tooth-n-claw"
    },
    {
        "name": "[3] Зулейка Торанеску",
        "url": "https://dnd.su/bestiary/4812-zuleika-toranescu"
    },
    {
        "name": "[4] Заводная железная кобра",
        "url": "https://dnd.su/bestiary/6540-clockwork-iron-cobra"
    },
    {
        "name": "[4] Заводной каменный защитник",
        "url": "https://dnd.su/bestiary/6542-clockwork-stone-defender"
    },
    {
        "name": "[4] Златожор-вожак",
        "url": "https://dnd.su/bestiary/8403-aurumvorax-den-leader"
    },
    {
        "name": "[4] Зомби-разносчик чумы",
        "url": "https://dnd.su/bestiary/6909-zombie-plague-spreader"
    },
    {
        "name": "[5] Зависть",
        "url": "https://dnd.su/bestiary/8418-envy"
    },
    {
        "name": "[5] Заводной дубовый стрелок",
        "url": "https://dnd.su/bestiary/6541-clockwork-oaken-bolter"
    },
    {
        "name": "[5] Закия Ракшас",
        "url": "https://dnd.su/bestiary/4994-zakya-rakshasa"
    },
    {
        "name": "[5] Зардорок Санблайт",
        "url": "https://dnd.su/bestiary/5744-xardorok-sunblight"
    },
    {
        "name": "[5] Земляной элементаль",
        "url": "https://dnd.su/bestiary/142-earth-elemental"
    },
    {
        "name": "[5] Зорн",
        "url": "https://dnd.su/bestiary/314-xorn"
    },
    {
        "name": "[5] Зрелый облекс",
        "url": "https://dnd.su/bestiary/6892-adult-oblex"
    },
    {
        "name": "[6] Заклинатель Арфистов",
        "url": "https://dnd.su/bestiary/7731-harper-spellcaster"
    },
    {
        "name": "[6] Залкора",
        "url": "https://dnd.su/bestiary/6077-zalkore"
    },
    {
        "name": "[6] Зеркальный голем",
        "url": "https://dnd.su/bestiary/20454-mirror-golem"
    },
    {
        "name": "[7] Заблудший угнетённый",
        "url": "https://dnd.su/bestiary/7027-lost-sorrowsworn"
    },
    {
        "name": "[7] Зандала",
        "url": "https://dnd.su/bestiary/6013-xandala"
    },
    {
        "name": "[7] Земляной элементальный мирмидон",
        "url": "https://dnd.su/bestiary/6744-earth-elemental-myrmidon"
    },
    {
        "name": "[7] Зильчин К’Лептин",
        "url": "https://dnd.su/bestiary/5907-zilchyn-qleptin"
    },
    {
        "name": "[8] Заранн А'Дарагон",
        "url": "https://dnd.su/bestiary/6200-xarann-adaragon"
    },
    {
        "name": "[8] Звёздный удильщик",
        "url": "https://dnd.su/bestiary/15717-star-angler"
    },
    {
        "name": "[8] Зеленый слаад",
        "url": "https://dnd.su/bestiary/291-green-slaad"
    },
    {
        "name": "[8] Зиндар",
        "url": "https://dnd.su/bestiary/6014-zindar"
    },
    {
        "name": "[8] Зираж-охотник",
        "url": "https://dnd.su/bestiary/5295-ziraj-the-hunter"
    },
    {
        "name": "[9] Звездодрев",
        "url": "https://dnd.su/bestiary/9258-starbough"
    },
    {
        "name": "[9] Зресс Орлеззир",
        "url": "https://dnd.su/bestiary/6202-zress-orlezziir"
    },
    {
        "name": "[10] Зенк Йендар",
        "url": "https://dnd.su/bestiary/10437-xenk-yendar"
    },
    {
        "name": "[10] Зеркальная тень",
        "url": "https://dnd.su/bestiary/15702-mirror-shade"
    },
    {
        "name": "[10] Зимний эладрин",
        "url": "https://dnd.su/bestiary/6728-winter-eladrin"
    },
    {
        "name": "[11] Заводной бехир",
        "url": "https://dnd.su/bestiary/8503-clockwork-behir"
    },
    {
        "name": "[11] Заражённые паразитами бехир",
        "url": "https://dnd.su/bestiary/5061-parasite-infested-behir"
    },
    {
        "name": "[12] Зикран",
        "url": "https://dnd.su/bestiary/5077-zikran"
    },
    {
        "name": "[12] Зокс Кламмершам",
        "url": "https://dnd.su/bestiary/6179-zox-clammersham"
    },
    {
        "name": "[13] Занатар",
        "url": "https://dnd.su/bestiary/5376-xanathar"
    },
    {
        "name": "[13] Зефирос",
        "url": "https://dnd.su/bestiary/5599-zephyros"
    },
    {
        "name": "[13] Злой угнетённый",
        "url": "https://dnd.su/bestiary/7024-angry-sorrowsworn"
    },
    {
        "name": "[14] Зорак Пьюсвет",
        "url": "https://dnd.su/bestiary/6171-zorak-lightdrinker"
    },
    {
        "name": "[15] Зелёный абишай",
        "url": "https://dnd.su/bestiary/6455-green-abishai"
    },
    {
        "name": "[15] Зловещий чемпион мора",
        "url": "https://dnd.su/bestiary/13258-grim-champion-of-pestilence"
    },
    {
        "name": "[16] Зегана",
        "url": "https://dnd.su/bestiary/942-zegana"
    },
    {
        "name": "[16] Зодар",
        "url": "https://dnd.su/bestiary/8887-zodar"
    },
    {
        "name": "[17] Залтар Сумеречная тень",
        "url": "https://dnd.su/bestiary/6146-zalthar-shadowdusk"
    },
    {
        "name": "[17] Заргон, вечный",
        "url": "https://dnd.su/bestiary/17219-zargon-the-returner"
    },
    {
        "name": "[17] Зикзокришка",
        "url": "https://dnd.su/bestiary/5078-zikzokrishka"
    },
    {
        "name": "[20] Зловещий чемпион кровопролития",
        "url": "https://dnd.su/bestiary/13256-grim-champion-of-bloodshed"
    },
    {
        "name": "[22] Заратан",
        "url": "https://dnd.su/bestiary/7085-zaratan"
    },
    {
        "name": "[23] Заггтмой",
        "url": "https://dnd.su/bestiary/6594-zuggtmoy"
    },
    {
        "name": "[25] Зловещий чемпион опустошения",
        "url": "https://dnd.su/bestiary/13257-grim-champion-of-desolation"
    },
    {
        "name": "[26] Зариэль",
        "url": "https://dnd.su/bestiary/7086-zariel"
    },
    {
        "name": "[0] Заклинатель (Маг)",
        "url": "https://dnd.su/bestiary/8022-spellcaster-mage"
    },
    {
        "name": "[0] Заклинатель (Маг)",
        "url": "https://dnd.su/bestiary/8027-spellcaster-mage"
    },
    {
        "name": "[0] Заклинатель (Целитель)",
        "url": "https://dnd.su/bestiary/8014-spellcaster-healer"
    },
    {
        "name": "[0] Заклинатель (Целитель)",
        "url": "https://dnd.su/bestiary/8025-spellcaster-healer"
    },
    {
        "name": "[?] Земной зверь",
        "url": "https://dnd.su/bestiary/4311-beast-of-the-land"
    },
    {
        "name": "[1/8] Ирина Коляна",
        "url": "https://dnd.su/bestiary/4717-ireena-kolyana"
    },
    {
        "name": "[1/8] Искатель голоса",
        "url": "https://dnd.su/bestiary/3610-vox-seeker"
    },
    {
        "name": "[1/8] Ифан Талро’a",
        "url": "https://dnd.su/bestiary/6050-ifan-talroa"
    },
    {
        "name": "[1/4] Игольчатая зараза",
        "url": "https://dnd.su/bestiary/45-needle-blight"
    },
    {
        "name": "[1/4] Икситксачитл",
        "url": "https://dnd.su/bestiary/5829-ixitxachitl"
    },
    {
        "name": "[1/4] Икситксачитл клирик",
        "url": "https://dnd.su/bestiary/5831-ixitxachitl-cleric"
    },
    {
        "name": "[1/4] Инженер",
        "url": "https://dnd.su/bestiary/5117-engineer"
    },
    {
        "name": "[1/4] Иссохший гнолл",
        "url": "https://dnd.su/bestiary/6780-gnoll-witherling"
    },
    {
        "name": "[1/2] Игольчатое отродье",
        "url": "https://dnd.su/bestiary/17367-needle-spawn"
    },
    {
        "name": "[1/2] Изодранное пугало",
        "url": "https://dnd.su/bestiary/8436-clapperclaw-the-scarecrow"
    },
    {
        "name": "[1/2] Ишель",
        "url": "https://dnd.su/bestiary/7455-ishel"
    },
    {
        "name": "[1] Изуродованный дуэргар",
        "url": "https://dnd.su/bestiary/6178-deformed-duergar"
    },
    {
        "name": "[1] Искатель Ирд",
        "url": "https://dnd.su/bestiary/10283-irda-seeker"
    },
    {
        "name": "[1] Иссохшийся зомби",
        "url": "https://dnd.su/bestiary/3234-husk-zombie"
    },
    {
        "name": "[2] Игольчатый дьявол (Спинагон)",
        "url": "https://dnd.su/bestiary/87-spined-devil"
    },
    {
        "name": "[2] Икситксачитл вампир",
        "url": "https://dnd.su/bestiary/5830-vampiric-ixitxachitl"
    },
    {
        "name": "[2] Икситксачитл вампир",
        "url": "https://dnd.su/bestiary/5832-vampiric-ixitxachitl"
    },
    {
        "name": "[2] Икситксачитл вампир клирик",
        "url": "https://dnd.su/bestiary/5833-vampiric-ixitxachitl-cleric"
    },
    {
        "name": "[2] Инфицированный житель",
        "url": "https://dnd.su/bestiary/12563-infected-townsfolk"
    },
    {
        "name": "[3] Избранный драконом",
        "url": "https://dnd.su/bestiary/6314-dragon-chosen"
    },
    {
        "name": "[3] Ирван (1-го уровня)",
        "url": "https://dnd.su/bestiary/7807-irvan-wastewalker-tier-1"
    },
    {
        "name": "[3] Исмарк Колянович",
        "url": "https://dnd.su/bestiary/4718-ismark-kolyanovich"
    },
    {
        "name": "[3] Истерзанный",
        "url": "https://dnd.su/bestiary/13671-forlarren"
    },
    {
        "name": "[3] Исчадие драконьей плоти",
        "url": "https://dnd.su/bestiary/6337-dragonflesh-grafter"
    },
    {
        "name": "[3] Исчезающий паук",
        "url": "https://dnd.su/bestiary/364-phase-spider"
    },
    {
        "name": "[4] Ику",
        "url": "https://dnd.su/bestiary/6026-eku"
    },
    {
        "name": "[5] Инейный скиталец",
        "url": "https://dnd.su/bestiary/12251-rime-hulk"
    },
    {
        "name": "[5] Ирван (2-го уровня)",
        "url": "https://dnd.su/bestiary/7808-irvan-wastewalker-tier-2"
    },
    {
        "name": "[5] Истиратель руин",
        "url": "https://dnd.su/bestiary/8340-ruin-grinder"
    },
    {
        "name": "[5] Ифрит",
        "url": "https://dnd.su/bestiary/11847-blaze"
    },
    {
        "name": "[6] Истарианский дрон",
        "url": "https://dnd.su/bestiary/10582-istarian-drone"
    },
    {
        "name": "[7] Иггдрасти",
        "url": "https://dnd.su/bestiary/7694-yggdrasti"
    },
    {
        "name": "[7] Ищейка Убийц милосердия",
        "url": "https://dnd.su/bestiary/13206-mercykiller-bloodhound"
    },
    {
        "name": "[8] Изумрудная статуя вампира",
        "url": "https://dnd.su/bestiary/7558-vampiric-jade-statue"
    },
    {
        "name": "[8] Ильвара Миззрим",
        "url": "https://dnd.su/bestiary/5920-ilvara-mizzrym"
    },
    {
        "name": "[8] Инквизитор меча",
        "url": "https://dnd.su/bestiary/6899-inquisitor-of-the-sword"
    },
    {
        "name": "[8] Инквизитор огня разума",
        "url": "https://dnd.su/bestiary/6898-inquisitor-of-the-mind-fire"
    },
    {
        "name": "[8] Инквизитор тома",
        "url": "https://dnd.su/bestiary/6901-inquisitor-of-the-tome"
    },
    {
        "name": "[8] Ирван (3-го уровня)",
        "url": "https://dnd.su/bestiary/7809-irvan-wastewalker-tier-3"
    },
    {
        "name": "[8] Истрид Хорн",
        "url": "https://dnd.su/bestiary/5292-istrid-horn"
    },
    {
        "name": "[11] Иерофант Кометы",
        "url": "https://dnd.su/bestiary/13247-hierophant-of-the-comet"
    },
    {
        "name": "[11] Избушка на курьих ножках",
        "url": "https://dnd.su/bestiary/954-baba-lysagas-creeping-hut"
    },
    {
        "name": "[11] Ифрит",
        "url": "https://dnd.su/bestiary/162-efreeti"
    },
    {
        "name": "[12] Ива",
        "url": "https://dnd.su/bestiary/6220-wyllow"
    },
    {
        "name": "[12] Извечный ледяной великан",
        "url": "https://dnd.su/bestiary/6755-frost-giant-everlasting-one"
    },
    {
        "name": "[19] Имикс",
        "url": "https://dnd.su/bestiary/4935-imix"
    },
    {
        "name": "[20] Иггвилв «Королева ведьм»",
        "url": "https://dnd.su/bestiary/8396-iggwilv-the-witch-queen"
    },
    {
        "name": "[20] Исчадие преисподней",
        "url": "https://dnd.su/bestiary/86-pit-fiend"
    },
    {
        "name": "[21] Исперия",
        "url": "https://dnd.su/bestiary/17321-isperia"
    },
    {
        "name": "[21] Исполин",
        "url": "https://dnd.su/bestiary/12157-gargantua"
    },
    {
        "name": "[22] Иллитилич",
        "url": "https://dnd.su/bestiary/5666-illithilich"
    },
    {
        "name": "[1/2] Йинра Эмбервинд",
        "url": "https://dnd.su/bestiary/7446-yinra-emberwind"
    },
    {
        "name": "[1/2] Йорн",
        "url": "https://dnd.su/bestiary/5379-yorn"
    },
    {
        "name": "[2] Йорб",
        "url": "https://dnd.su/bestiary/6075-yorb"
    },
    {
        "name": "[3] Йети",
        "url": "https://dnd.su/bestiary/315-yeti"
    },
    {
        "name": "[3] Йети Алловак",
        "url": "https://dnd.su/bestiary/7422-allowak-yeti"
    },
    {
        "name": "[4] Йестаброд",
        "url": "https://dnd.su/bestiary/5853-yestabrod"
    },
    {
        "name": "[5] Йспуг",
        "url": "https://dnd.su/bestiary/8833-feyr"
    },
    {
        "name": "[9] Й'деми",
        "url": "https://dnd.su/bestiary/8354-ydemi"
    },
    {
        "name": "[10] Йоклол",
        "url": "https://dnd.su/bestiary/76-yochlol"
    },
    {
        "name": "[23] Йгорл, Лорд разрушения",
        "url": "https://dnd.su/bestiary/13729-ygorl-lord-of-entropy"
    },
    {
        "name": "[23] Йимрит",
        "url": "https://dnd.su/bestiary/5601-iymrith"
    },
    {
        "name": "[24] Йеногу",
        "url": "https://dnd.su/bestiary/5865-yeenoghu"
    },
    {
        "name": "[24] Йеногу",
        "url": "https://dnd.su/bestiary/6938-yeenoghu"
    },
    {
        "name": "[0] Каалтар",
        "url": "https://dnd.su/bestiary/7759-kaaltar"
    },
    {
        "name": "[0] Квиппер",
        "url": "https://dnd.su/bestiary/366-quipper"
    },
    {
        "name": "[0] Кильмулис",
        "url": "https://dnd.su/bestiary/17365-killmoulis"
    },
    {
        "name": "[0] Кингспорт",
        "url": "https://dnd.su/bestiary/5813-kingsport"
    },
    {
        "name": "[0] Козёл",
        "url": "https://dnd.su/bestiary/367-goat"
    },
    {
        "name": "[0] Космическая гуппи",
        "url": "https://dnd.su/bestiary/8875-space-guppy"
    },
    {
        "name": "[0] Космический альбатрос",
        "url": "https://dnd.su/bestiary/8876-space-mollymawk"
    },
    {
        "name": "[0] Космический хомяк",
        "url": "https://dnd.su/bestiary/6159-space-hamster"
    },
    {
        "name": "[0] Кошка",
        "url": "https://dnd.su/bestiary/369-cat"
    },
    {
        "name": "[0] Кошка химера",
        "url": "https://dnd.su/bestiary/5804-chimeric-cat"
    },
    {
        "name": "[0] Краб",
        "url": "https://dnd.su/bestiary/370-crab"
    },
    {
        "name": "[0] Кроликоголовый",
        "url": "https://dnd.su/bestiary/6237-rabbithead"
    },
    {
        "name": "[0] Крошечный слуга",
        "url": "https://dnd.su/bestiary/501-tiny-servant"
    },
    {
        "name": "[0] Крыса",
        "url": "https://dnd.su/bestiary/373-rat"
    },
    {
        "name": "[0] Крыса химера",
        "url": "https://dnd.su/bestiary/5805-chimeric-rat"
    },
    {
        "name": "[0] Кукла Халастера",
        "url": "https://dnd.su/bestiary/6229-halaster-puppet"
    },
    {
        "name": "[0] Куница",
        "url": "https://dnd.su/bestiary/374-weasel"
    },
    {
        "name": "[0] Куница химера",
        "url": "https://dnd.su/bestiary/5802-chimeric-weasel"
    },
    {
        "name": "[1/8] Кардорн Брентахилл",
        "url": "https://dnd.su/bestiary/7415-cardorn-brentahill"
    },
    {
        "name": "[1/8] Квана Селедо",
        "url": "https://dnd.su/bestiary/7417-quana-seledo"
    },
    {
        "name": "[1/8] Киджори",
        "url": "https://dnd.su/bestiary/7439-kijori"
    },
    {
        "name": "[1/8] Клим Джассо",
        "url": "https://dnd.su/bestiary/6406-klim-jhasso"
    },
    {
        "name": "[1/8] Кобольд",
        "url": "https://dnd.su/bestiary/210-kobold"
    },
    {
        "name": "[1/8] Кобольд долины Ледяного Ветра",
        "url": "https://dnd.su/bestiary/5734-icewind-kobold"
    },
    {
        "name": "[1/8] Кобольд подчиненный",
        "url": "https://dnd.su/bestiary/7445-kobold-underling"
    },
    {
        "name": "[1/8] Кобольд-зомби долины Ледяного Ветра",
        "url": "https://dnd.su/bestiary/5752-icewind-kobold-zombie"
    },
    {
        "name": "[1/8] Копия монодрона",
        "url": "https://dnd.su/bestiary/8513-replica-monodrone"
    },
    {
        "name": "[1/8] Кровавый ястреб",
        "url": "https://dnd.su/bestiary/371-blood-hawk"
    },
    {
        "name": "[1/8] Кровопийца",
        "url": "https://dnd.su/bestiary/11-stirge"
    },
    {
        "name": "[1/8] Ксварт",
        "url": "https://dnd.su/bestiary/7071-xvart"
    },
    {
        "name": "[1/8] Ксварт спикер",
        "url": "https://dnd.su/bestiary/5667-xvart-speaker"
    },
    {
        "name": "[1/8] Культист",
        "url": "https://dnd.su/bestiary/12-cultist"
    },
    {
        "name": "[1/8] Куса Сюнгун",
        "url": "https://dnd.su/bestiary/8548-kusa-xungoon"
    },
    {
        "name": "[1/4] Кабан",
        "url": "https://dnd.su/bestiary/365-boar"
    },
    {
        "name": "[1/4] Калаштар",
        "url": "https://dnd.su/bestiary/5002-kalashtar"
    },
    {
        "name": "[1/4] Кендер-застрельщик",
        "url": "https://dnd.su/bestiary/10588-kender-skirmisher"
    },
    {
        "name": "[1/4] Кенку",
        "url": "https://dnd.su/bestiary/208-kenku"
    },
    {
        "name": "[1/4] Кловин Бельвью",
        "url": "https://dnd.su/bestiary/4688-clovin-belview"
    },
    {
        "name": "[1/4] Клонк",
        "url": "https://dnd.su/bestiary/6426-clonk"
    },
    {
        "name": "[1/4] Кобольд изобретатель",
        "url": "https://dnd.su/bestiary/6818-kobold-inventor"
    },
    {
        "name": "[1/4] Кол'даан",
        "url": "https://dnd.su/bestiary/6233-koldaan"
    },
    {
        "name": "[1/4] Копия дуодрона",
        "url": "https://dnd.su/bestiary/8512-replica-duodrone"
    },
    {
        "name": "[1/4] Корова",
        "url": "https://dnd.su/bestiary/623-cow"
    },
    {
        "name": "[1/4] Космический хомяк",
        "url": "https://dnd.su/bestiary/8691-space-hamster"
    },
    {
        "name": "[1/4] Космический хряк",
        "url": "https://dnd.su/bestiary/8877-space-swine"
    },
    {
        "name": "[1/4] Костяной слизень",
        "url": "https://dnd.su/bestiary/6436-bone-whelk"
    },
    {
        "name": "[1/4] Кристаллический боевой топор",
        "url": "https://dnd.su/bestiary/6217-crystal-battleaxe"
    },
    {
        "name": "[1/4] Крылатый кобольд",
        "url": "https://dnd.su/bestiary/209-winged-kobold"
    },
    {
        "name": "[1/4] Куо-тоа",
        "url": "https://dnd.su/bestiary/212-kuo-toa"
    },
    {
        "name": "[1/4] Купалуа",
        "url": "https://dnd.su/bestiary/6028-kupalue"
    },
    {
        "name": "[1/4] Курица Бездны",
        "url": "https://dnd.su/bestiary/4852-abyssal-chicken"
    },
    {
        "name": "[1/2] Каламанский солдат",
        "url": "https://dnd.su/bestiary/10583-kalaman-soldier"
    },
    {
        "name": "[1/2] Кальмароголовый гном",
        "url": "https://dnd.su/bestiary/5770-gnome-squidling"
    },
    {
        "name": "[1/2] Кандидат в Комету",
        "url": "https://dnd.su/bestiary/13246-aspirant-of-the-comet"
    },
    {
        "name": "[1/2] Коалинт",
        "url": "https://dnd.su/bestiary/7514-koalinth"
    },
    {
        "name": "[1/2] Кованая птица",
        "url": "https://dnd.su/bestiary/7165-anvilwrought-raptor"
    },
    {
        "name": "[1/2] Колючий пращник",
        "url": "https://dnd.su/bestiary/17415-thorn-slinger"
    },
    {
        "name": "[1/2] Копия тридрона",
        "url": "https://dnd.su/bestiary/8516-replica-tridrone"
    },
    {
        "name": "[1/2] Коппер Штормгорн",
        "url": "https://dnd.su/bestiary/6230-copper-stormforge"
    },
    {
        "name": "[1/2] Космический угорь",
        "url": "https://dnd.su/bestiary/8874-space-eel"
    },
    {
        "name": "[1/2] Красноклейменный головорез",
        "url": "https://dnd.su/bestiary/10-red-ruffian"
    },
    {
        "name": "[1/2] Красноклейменный головорез",
        "url": "https://dnd.su/bestiary/12554-red-ruffian"
    },
    {
        "name": "[1/2] Креветка Кои",
        "url": "https://dnd.su/bestiary/8531-koi-prawn"
    },
    {
        "name": "[1/2] Крипер",
        "url": "https://dnd.su/bestiary/11848-creeper"
    },
    {
        "name": "[1/2] Крокодил",
        "url": "https://dnd.su/bestiary/372-crocodile"
    },
    {
        "name": "[1/2] Крылатый трулл",
        "url": "https://dnd.su/bestiary/3614-winged-thrull"
    },
    {
        "name": "[1/2] Кулак Бэйна",
        "url": "https://dnd.su/bestiary/4477-fist-of-bane"
    },
    {
        "name": "[1/2] Куролиск",
        "url": "https://dnd.su/bestiary/56-cockatrice"
    },
    {
        "name": "[1] Капкан",
        "url": "https://dnd.su/bestiary/2639-mantrap"
    },
    {
        "name": "[1] Кваггот споровый слуга",
        "url": "https://dnd.su/bestiary/248-quaggoth-spore-servant"
    },
    {
        "name": "[1] Квадрон",
        "url": "https://dnd.su/bestiary/241-quadrone"
    },
    {
        "name": "[1] Квазит",
        "url": "https://dnd.su/bestiary/73-quasit"
    },
    {
        "name": "[1] Квиклинг",
        "url": "https://dnd.su/bestiary/6926-quickling"
    },
    {
        "name": "[1] Келла Даркхоуп",
        "url": "https://dnd.su/bestiary/7696-kella-darkhope"
    },
    {
        "name": "[1] Кенку Парочайник",
        "url": "https://dnd.su/bestiary/8435-kettlesteam-the-kenku"
    },
    {
        "name": "[1] Киш",
        "url": "https://dnd.su/bestiary/7562-kysh"
    },
    {
        "name": "[1] Кобольд драконий щит",
        "url": "https://dnd.su/bestiary/6807-kobold-dragonshield"
    },
    {
        "name": "[1] Кобольд чешуйчатый чародей",
        "url": "https://dnd.su/bestiary/6819-kobold-scale-sorcerer"
    },
    {
        "name": "[1] Кованый воитель",
        "url": "https://dnd.su/bestiary/15719-warforged-warrior"
    },
    {
        "name": "[1] Кованый солдат",
        "url": "https://dnd.su/bestiary/5007-warforged-soldier"
    },
    {
        "name": "[1] Когтелап",
        "url": "https://dnd.su/bestiary/4972-clawfoot"
    },
    {
        "name": "[1] Копия квадрона",
        "url": "https://dnd.su/bestiary/8515-replica-quadrone"
    },
    {
        "name": "[1] Корабельная пиявка",
        "url": "https://dnd.su/bestiary/8844-jammer-leech"
    },
    {
        "name": "[1] Король пауков",
        "url": "https://dnd.su/bestiary/5895-spider-king"
    },
    {
        "name": "[1] Красис 1-й категории",
        "url": "https://dnd.su/bestiary/3617-category-1-krasis"
    },
    {
        "name": "[1] Кренко",
        "url": "https://dnd.su/bestiary/17328-krenko"
    },
    {
        "name": "[1] Кричащий дьяволёнок",
        "url": "https://dnd.su/bestiary/13728-screaming-devilkin"
    },
    {
        "name": "[1] Ксварт колдун Раксиворта",
        "url": "https://dnd.su/bestiary/7072-xvart-warlock-of-raxivort"
    },
    {
        "name": "[1] Куо-тоа кнут",
        "url": "https://dnd.su/bestiary/214-kuo-toa-whip"
    },
    {
        "name": "[1] Кхалесса Драга",
        "url": "https://dnd.su/bestiary/5822-khalessa-draga"
    },
    {
        "name": "[2] Каваша",
        "url": "https://dnd.su/bestiary/6027-qawasha"
    },
    {
        "name": "[2] Кадрот",
        "url": "https://dnd.su/bestiary/5798-kadroth"
    },
    {
        "name": "[2] Калейн",
        "url": "https://dnd.su/bestiary/5307-kalain"
    },
    {
        "name": "[2] Камергер Заггтмой",
        "url": "https://dnd.su/bestiary/5845-chamberlain-of-zuggtmoy"
    },
    {
        "name": "[2] Капитан Ксендрос",
        "url": "https://dnd.su/bestiary/7560-captain-xendros"
    },
    {
        "name": "[2] Капитан пиратов",
        "url": "https://dnd.su/bestiary/7541-pirate-captain"
    },
    {
        "name": "[2] Капитан разбойников",
        "url": "https://dnd.su/bestiary/433-bandit-captain"
    },
    {
        "name": "[2] Капитан разбойников Вистани",
        "url": "https://dnd.su/bestiary/4806-vistana-bandit-captain"
    },
    {
        "name": "[2] Кваггот",
        "url": "https://dnd.su/bestiary/268-quaggoth"
    },
    {
        "name": "[2] Квайот",
        "url": "https://dnd.su/bestiary/6051-kwayothe"
    },
    {
        "name": "[2] Кентавр",
        "url": "https://dnd.su/bestiary/52-centaur"
    },
    {
        "name": "[2] Керилла Гемстар",
        "url": "https://dnd.su/bestiary/7718-kerrilla-gemstar"
    },
    {
        "name": "[2] Кетцалькоатль",
        "url": "https://dnd.su/bestiary/6605-quetzalcoatlus"
    },
    {
        "name": "[2] Коалинт сержант",
        "url": "https://dnd.su/bestiary/7516-koalinth-sergeant"
    },
    {
        "name": "[2] Ковёр удушения",
        "url": "https://dnd.su/bestiary/37-rug-of-smothering"
    },
    {
        "name": "[2] Колодезный огонёк",
        "url": "https://dnd.su/bestiary/8394-will-o-wells"
    },
    {
        "name": "[2] Копия пентадрона",
        "url": "https://dnd.su/bestiary/8514-replica-pentadrone"
    },
    {
        "name": "[2] Королева ледяных пауков",
        "url": "https://dnd.su/bestiary/7736-ice-spider-queen"
    },
    {
        "name": "[2] Король канализации",
        "url": "https://dnd.su/bestiary/17354-sewer-king"
    },
    {
        "name": "[2] Космический клоун",
        "url": "https://dnd.su/bestiary/8873-space-clown"
    },
    {
        "name": "[2] Красная челюсть",
        "url": "https://dnd.su/bestiary/7430-redjaw"
    },
    {
        "name": "[2] Красный сторожевой дрейк",
        "url": "https://dnd.su/bestiary/6790-red-guard-drake"
    },
    {
        "name": "[2] Крелл Гролг",
        "url": "https://dnd.su/bestiary/7561-krell-grohlg"
    },
    {
        "name": "[2] Ксолкин Алассандар",
        "url": "https://dnd.su/bestiary/7697-xolkin-alassandar"
    },
    {
        "name": "[2] К’Тулах",
        "url": "https://dnd.su/bestiary/5047-ktulah"
    },
    {
        "name": "[3] К'трисс Дроу'б",
        "url": "https://dnd.su/bestiary/7469-kthriss-drowb"
    },
    {
        "name": "[3] Калка-Килла",
        "url": "https://dnd.su/bestiary/17413-kalka-kylla"
    },
    {
        "name": "[3] Капитан хобгоблинов",
        "url": "https://dnd.su/bestiary/200-hobgoblin-captain"
    },
    {
        "name": "[3] Каррнатский зомби",
        "url": "https://dnd.su/bestiary/4978-karrnathi-undead-soldier"
    },
    {
        "name": "[3] Кваггот тонот",
        "url": "https://dnd.su/bestiary/5647-quaggoth-thonot"
    },
    {
        "name": "[3] Кетцалькоатль зомби",
        "url": "https://dnd.su/bestiary/5992-quetzalcoatlus-zombie"
    },
    {
        "name": "[3] Кирилл Стоянович",
        "url": "https://dnd.su/bestiary/4719-kiril-stoyanovich"
    },
    {
        "name": "[3] Кобольд-порождение вампира",
        "url": "https://dnd.su/bestiary/5753-kobold-vampire-spawn"
    },
    {
        "name": "[3] Коммодор Крукс",
        "url": "https://dnd.su/bestiary/9255-commodore-krux"
    },
    {
        "name": "[3] Королевский жаболюд",
        "url": "https://dnd.su/bestiary/7500-bullywug-royal"
    },
    {
        "name": "[3] Короусец",
        "url": "https://dnd.su/bestiary/17220-barkburr"
    },
    {
        "name": "[3] Косатка",
        "url": "https://dnd.su/bestiary/368-killer-whale"
    },
    {
        "name": "[3] Кошмар",
        "url": "https://dnd.su/bestiary/252-nightmare"
    },
    {
        "name": "[3] Краболюд",
        "url": "https://dnd.su/bestiary/13630-crab-folk"
    },
    {
        "name": "[3] Красный колпак",
        "url": "https://dnd.su/bestiary/6927-redcap"
    },
    {
        "name": "[3] Крюкастый ужас",
        "url": "https://dnd.su/bestiary/203-hook-horror"
    },
    {
        "name": "[3] Крюкастый ужас споровый слуга",
        "url": "https://dnd.su/bestiary/5842-hook-horror-spore-servant"
    },
    {
        "name": "[3] Ксилл",
        "url": "https://dnd.su/bestiary/13731-xill"
    },
    {
        "name": "[3] Куо-тоа надзиратель",
        "url": "https://dnd.su/bestiary/5656-kuo-toa-monitor"
    },
    {
        "name": "[4] Камадан",
        "url": "https://dnd.su/bestiary/2636-kamadan"
    },
    {
        "name": "[4] Карга судьбы",
        "url": "https://dnd.su/bestiary/13284-fate-hag"
    },
    {
        "name": "[4] Квадропод хаоса",
        "url": "https://dnd.su/bestiary/7482-chaos-quadrapod"
    },
    {
        "name": "[4] Келпи",
        "url": "https://dnd.su/bestiary/17414-kelpie"
    },
    {
        "name": "[4] Коатль",
        "url": "https://dnd.su/bestiary/57-couatl"
    },
    {
        "name": "[4] Колдун Архифеи",
        "url": "https://dnd.su/bestiary/7065-warlock-of-the-archfey"
    },
    {
        "name": "[4] Коричневый поглотитель",
        "url": "https://dnd.su/bestiary/8866-brown-scavver"
    },
    {
        "name": "[4] Король Пудингов",
        "url": "https://dnd.su/bestiary/5858-the-pudding-king"
    },
    {
        "name": "[4] Король/Королева ящеров",
        "url": "https://dnd.su/bestiary/219-lizard-kingqueen"
    },
    {
        "name": "[4] Космотронный взрывоискатель",
        "url": "https://dnd.su/bestiary/17299-cosmotronic-blastseeker"
    },
    {
        "name": "[4] Костяная нага",
        "url": "https://dnd.su/bestiary/249-bone-naga"
    },
    {
        "name": "[4] Креббиг Маск’иль’ир",
        "url": "https://dnd.su/bestiary/5357-krebbyg-masqilyr"
    },
    {
        "name": "[4] Крылатый бык",
        "url": "https://dnd.su/bestiary/7175-winged-bull"
    },
    {
        "name": "[4] Крылатый лев",
        "url": "https://dnd.su/bestiary/7176-winged-lion"
    },
    {
        "name": "[4] Кузнец материи Ока разума",
        "url": "https://dnd.su/bestiary/13207-minds-eye-matter-smith"
    },
    {
        "name": "[4] Курр",
        "url": "https://dnd.su/bestiary/5904-kurr"
    },
    {
        "name": "[5] Камбион",
        "url": "https://dnd.su/bestiary/50-cambion"
    },
    {
        "name": "[5] Капитан Отельстан",
        "url": "https://dnd.su/bestiary/3329-captain-othelstan"
    },
    {
        "name": "[5] Карга Мерзкого Взора",
        "url": "https://dnd.su/bestiary/5044-hag-of-the-fetid-gaze"
    },
    {
        "name": "[5] Катоблепас",
        "url": "https://dnd.su/bestiary/6487-catoblepas"
    },
    {
        "name": "[5] Келек",
        "url": "https://dnd.su/bestiary/8417-kelek"
    },
    {
        "name": "[5] Комета-убийца",
        "url": "https://dnd.su/bestiary/8849-murder-comet"
    },
    {
        "name": "[5] Костяной рыцарь",
        "url": "https://dnd.su/bestiary/5000-bone-knight"
    },
    {
        "name": "[5] Красный полудракон ветеран (шаблон)",
        "url": "https://dnd.su/bestiary/195-half-dragon-template"
    },
    {
        "name": "[5] Красный слаад",
        "url": "https://dnd.su/bestiary/288-red-slaad"
    },
    {
        "name": "[5] Кровавый охотник",
        "url": "https://dnd.su/bestiary/7267-blood-hunter"
    },
    {
        "name": "[5] Кромсатель звёздных порождений",
        "url": "https://dnd.su/bestiary/7034-star-spawn-mangler"
    },
    {
        "name": "[5] Крутик Лорд улья",
        "url": "https://dnd.su/bestiary/6825-kruthik-hive-lord"
    },
    {
        "name": "[5] Кслорп",
        "url": "https://dnd.su/bestiary/6196-xlorp"
    },
    {
        "name": "[6] Кавил Мерчантер",
        "url": "https://dnd.su/bestiary/6169-kavil-mereshanter"
    },
    {
        "name": "[6] Казимир Великов",
        "url": "https://dnd.su/bestiary/4663-kasimir-velikov"
    },
    {
        "name": "[6] Капитан вампиратов",
        "url": "https://dnd.su/bestiary/8885-vampirate-captain"
    },
    {
        "name": "[6] Карга аннис",
        "url": "https://dnd.su/bestiary/6462-annis-hag"
    },
    {
        "name": "[6] Кейвья Синаверн",
        "url": "https://dnd.su/bestiary/5306-kaevja-cynavern"
    },
    {
        "name": "[6] Кентавр-мумия",
        "url": "https://dnd.su/bestiary/8552-centaur-mummy"
    },
    {
        "name": "[6] Клинок разложения Стражей судьбы",
        "url": "https://dnd.su/bestiary/13197-doomguard-rot-blade"
    },
    {
        "name": "[6] Колдун Великого Древнего",
        "url": "https://dnd.su/bestiary/7067-warlock-of-the-great-old-one"
    },
    {
        "name": "[6] Корберта Хорсвелл",
        "url": "https://dnd.su/bestiary/7424-korberta-horswell"
    },
    {
        "name": "[6] Красис 2-й категории",
        "url": "https://dnd.su/bestiary/17270-category-2-krasis"
    },
    {
        "name": "[6] Крулл",
        "url": "https://dnd.su/bestiary/6433-krull"
    },
    {
        "name": "[7] Каменный великан",
        "url": "https://dnd.su/bestiary/171-stone-giant"
    },
    {
        "name": "[7] Карга бьёр",
        "url": "https://dnd.su/bestiary/6479-bheur-hag"
    },
    {
        "name": "[7] Каялитика",
        "url": "https://dnd.su/bestiary/7744-kayalithica"
    },
    {
        "name": "[7] Киндори",
        "url": "https://dnd.su/bestiary/8845-kindori"
    },
    {
        "name": "[7] Когтистый зверь",
        "url": "https://dnd.su/bestiary/13299-talon-beast"
    },
    {
        "name": "[7] Колдун Исчадия",
        "url": "https://dnd.su/bestiary/7066-warlock-of-the-fiend"
    },
    {
        "name": "[7] Корред",
        "url": "https://dnd.su/bestiary/6820-korred"
    },
    {
        "name": "[7] Кровавая Ведьма",
        "url": "https://dnd.su/bestiary/17298-blood-witch"
    },
    {
        "name": "[7] Курганный вурдалак",
        "url": "https://dnd.su/bestiary/12064-barrowghast"
    },
    {
        "name": "[8] Канолот",
        "url": "https://dnd.su/bestiary/6486-canoloth"
    },
    {
        "name": "[8] Капитан Гармониума",
        "url": "https://dnd.su/bestiary/13203-harmonium-captain"
    },
    {
        "name": "[8] Капитан Н'Гатрод",
        "url": "https://dnd.su/bestiary/6160-captain-nghathrod"
    },
    {
        "name": "[8] Карадок",
        "url": "https://dnd.su/bestiary/10601-caradoc"
    },
    {
        "name": "[8] Кашалот",
        "url": "https://dnd.su/bestiary/5751-sperm-whale"
    },
    {
        "name": "[8] Кинайел Драа’гиир",
        "url": "https://dnd.su/bestiary/5921-kinyel-druugiir"
    },
    {
        "name": "[8] Кованый титан",
        "url": "https://dnd.su/bestiary/4999-warforged-titan"
    },
    {
        "name": "[8] Корис",
        "url": "https://dnd.su/bestiary/7895-koris"
    },
    {
        "name": "[8] Король Перьев",
        "url": "https://dnd.su/bestiary/6056-king-of-feathers"
    },
    {
        "name": "[8] Костяной рух",
        "url": "https://dnd.su/bestiary/15691-bone-roc"
    },
    {
        "name": "[9] Каменный великан Злой земли",
        "url": "https://dnd.su/bestiary/12259-stone-giant-of-evil-earth"
    },
    {
        "name": "[9] Корал",
        "url": "https://dnd.su/bestiary/11057-coral"
    },
    {
        "name": "[9] Король Джейрос",
        "url": "https://dnd.su/bestiary/12752-king-jhaeros"
    },
    {
        "name": "[9] Костяной дьявол (Осилут)",
        "url": "https://dnd.su/bestiary/79-bone-devil"
    },
    {
        "name": "[9] Крессаро",
        "url": "https://dnd.su/bestiary/7757-cressaro"
    },
    {
        "name": "[9] Кунбраксель",
        "url": "https://dnd.su/bestiary/12559-qunbraxel"
    },
    {
        "name": "[10] Каменный великан сноходец",
        "url": "https://dnd.su/bestiary/7038-stone-giant-dreamwalker"
    },
    {
        "name": "[10] Каменный голем",
        "url": "https://dnd.su/bestiary/186-stone-golem"
    },
    {
        "name": "[10] Каменный плащ",
        "url": "https://dnd.su/bestiary/6158-stonecloak"
    },
    {
        "name": "[10] Конструкт хранитель снаряжения",
        "url": "https://dnd.su/bestiary/7283-gearkeeper-construct"
    },
    {
        "name": "[10] Кристаллический голем",
        "url": "https://dnd.su/bestiary/6138-crystal-golem"
    },
    {
        "name": "[11] Кансалди Огнеглазая",
        "url": "https://dnd.su/bestiary/10602-kansaldi-fire-eyes"
    },
    {
        "name": "[11] Кусачая гидра",
        "url": "https://dnd.su/bestiary/17355-snapping-hydra"
    },
    {
        "name": "[12] Каменный джаггернаут",
        "url": "https://dnd.su/bestiary/2638-stone-juggernaut"
    },
    {
        "name": "[12] Кассиок Сумеречная тень",
        "url": "https://dnd.su/bestiary/6144-cassiok-shadowdusk"
    },
    {
        "name": "[12] Ки-рин",
        "url": "https://dnd.su/bestiary/6800-ki-rin"
    },
    {
        "name": "[12] Костелап",
        "url": "https://dnd.su/bestiary/6483-boneclaw"
    },
    {
        "name": "[12] Кроуен Вэлхарроу",
        "url": "https://dnd.su/bestiary/7719-krowen-valharrow"
    },
    {
        "name": "[13] Канопа голем",
        "url": "https://dnd.su/bestiary/5014-canopic-golem"
    },
    {
        "name": "[13] Кереста Грызущая камни",
        "url": "https://dnd.su/bestiary/6167-keresta-delvingstone"
    },
    {
        "name": "[14] Крокек’тоик",
        "url": "https://dnd.su/bestiary/6372-crokektoeck"
    },
    {
        "name": "[15] Колдовской дракон",
        "url": "https://dnd.su/bestiary/17360-witchkite"
    },
    {
        "name": "[16] Каменный великан говорящий с камнями",
        "url": "https://dnd.su/bestiary/12263-stone-giant-rockspeaker"
    },
    {
        "name": "[16] Кошмарная бестия",
        "url": "https://dnd.su/bestiary/7691-nightmare-beast"
    },
    {
        "name": "[16] Красис 3-й категории",
        "url": "https://dnd.su/bestiary/17271-category-3-krasis"
    },
    {
        "name": "[18] Космический ужас",
        "url": "https://dnd.su/bestiary/8821-cosmic-horror"
    },
    {
        "name": "[18] Космический ужас",
        "url": "https://dnd.su/bestiary/15694-cosmic-horror"
    },
    {
        "name": "[19] Каларак куори",
        "url": "https://dnd.su/bestiary/4991-kalaraq-quori"
    },
    {
        "name": "[19] Красный абишай",
        "url": "https://dnd.su/bestiary/6456-red-abishai"
    },
    {
        "name": "[19] Кэмлэш",
        "url": "https://dnd.su/bestiary/15729-camlash"
    },
    {
        "name": "[20] Колярут",
        "url": "https://dnd.su/bestiary/13103-kolyarut"
    },
    {
        "name": "[22] Квентл Бэнр",
        "url": "https://dnd.su/bestiary/5902-quenthel-baenre"
    },
    {
        "name": "[22] Колыбель холмового отпрыска",
        "url": "https://dnd.su/bestiary/12282-cradle-of-the-hill-scion"
    },
    {
        "name": "[23] Каркетцеретцерус, Чёрный расхититель",
        "url": "https://dnd.su/bestiary/7456-karkethzerethzerus-the-sable-despoiler"
    },
    {
        "name": "[23] Кас, предатель",
        "url": "https://dnd.su/bestiary/15722-kas-the-betrayer"
    },
    {
        "name": "[23] Клаугийльяматар",
        "url": "https://dnd.su/bestiary/5607-claugiyliamatar"
    },
    {
        "name": "[23] Колосс Акросский",
        "url": "https://dnd.su/bestiary/7181-colossus-of-akros"
    },
    {
        "name": "[23] Колыбель каменного отпрыска",
        "url": "https://dnd.su/bestiary/12286-cradle-of-the-stone-scion"
    },
    {
        "name": "[23] Кракен",
        "url": "https://dnd.su/bestiary/211-kraken"
    },
    {
        "name": "[24] Колыбель ледяного отпрыска",
        "url": "https://dnd.su/bestiary/12295-cradle-of-the-frost-scion"
    },
    {
        "name": "[25] Клаут",
        "url": "https://dnd.su/bestiary/5604-klauth"
    },
    {
        "name": "[25] Кованый колосс",
        "url": "https://dnd.su/bestiary/4997-warforged-colossus"
    },
    {
        "name": "[25] Колыбель огненного отпрыска",
        "url": "https://dnd.su/bestiary/12293-cradle-of-the-fire-scion"
    },
    {
        "name": "[25] Костччи",
        "url": "https://dnd.su/bestiary/4256-kostchtchie"
    },
    {
        "name": "[26] Колыбель облачного отпрыска",
        "url": "https://dnd.su/bestiary/12284-cradle-of-the-cloud-scion"
    },
    {
        "name": "[27] Колыбель штормового отпрыска",
        "url": "https://dnd.su/bestiary/12289-cradle-of-the-storm-scion"
    },
    {
        "name": "[0] Ларва",
        "url": "https://dnd.su/bestiary/1261-larva"
    },
    {
        "name": "[0] Лемур",
        "url": "https://dnd.su/bestiary/85-lemure"
    },
    {
        "name": "[0] Летающая обезьяна",
        "url": "https://dnd.su/bestiary/2640-flying-monkey"
    },
    {
        "name": "[0] Летучая мышь",
        "url": "https://dnd.su/bestiary/377-bat"
    },
    {
        "name": "[0] Лидия Петровна",
        "url": "https://dnd.su/bestiary/4763-lydia-petrovna"
    },
    {
        "name": "[0] Лиса",
        "url": "https://dnd.su/bestiary/5755-fox"
    },
    {
        "name": "[0] Лиса химера",
        "url": "https://dnd.su/bestiary/5806-chimeric-fox"
    },
    {
        "name": "[0] Лиф Липсидж",
        "url": "https://dnd.su/bestiary/4764-lief-lipsiege"
    },
    {
        "name": "[0] Лягушка",
        "url": "https://dnd.su/bestiary/380-frog"
    },
    {
        "name": "[1/8] Летающая змея",
        "url": "https://dnd.su/bestiary/376-flying-snake"
    },
    {
        "name": "[1/8] Летающий кинжал",
        "url": "https://dnd.su/bestiary/6405-flying-dagger"
    },
    {
        "name": "[1/8] Лиготти",
        "url": "https://dnd.su/bestiary/7470-ligotti"
    },
    {
        "name": "[1/8] Ликантропурец",
        "url": "https://dnd.su/bestiary/8047-lycanthropickle"
    },
    {
        "name": "[1/8] Личинка неоги",
        "url": "https://dnd.su/bestiary/6877-neogi-hatchling"
    },
    {
        "name": "[1/8] Лорд Драйлунд",
        "url": "https://dnd.su/bestiary/7766-lord-drylund"
    },
    {
        "name": "[1/4] Летающая волшебная палочка",
        "url": "https://dnd.su/bestiary/6213-flying-wand"
    },
    {
        "name": "[1/4] Летающая рукавица",
        "url": "https://dnd.su/bestiary/6407-flying-gauntlet"
    },
    {
        "name": "[1/4] Летающий меч",
        "url": "https://dnd.su/bestiary/36-flying-sword"
    },
    {
        "name": "[1/4] Летающий посох",
        "url": "https://dnd.su/bestiary/5121-flying-staff"
    },
    {
        "name": "[1/4] Летающий трезубец",
        "url": "https://dnd.su/bestiary/6212-flying-trident"
    },
    {
        "name": "[1/4] Лиловый гриб",
        "url": "https://dnd.su/bestiary/157-violet-fungus"
    },
    {
        "name": "[1/4] Личинка Адской осы",
        "url": "https://dnd.su/bestiary/6448-hellwasp-grub"
    },
    {
        "name": "[1/4] Лось",
        "url": "https://dnd.su/bestiary/378-elk"
    },
    {
        "name": "[1/4] Людоящер обыватель",
        "url": "https://dnd.su/bestiary/7518-lizardfolk-commoner"
    },
    {
        "name": "[1/2] Ладонь башни",
        "url": "https://dnd.su/bestiary/17225-tower-hand"
    },
    {
        "name": "[1/2] Лали Горбани",
        "url": "https://dnd.su/bestiary/8547-laleh-ghorbani"
    },
    {
        "name": "[1/2] Ледяной мефит",
        "url": "https://dnd.su/bestiary/229-ice-mephit"
    },
    {
        "name": "[1/2] Ледяной пронзатель",
        "url": "https://dnd.su/bestiary/5812-ice-piercer"
    },
    {
        "name": "[1/2] Лесной эльф",
        "url": "https://dnd.su/bestiary/7698-wood-elf"
    },
    {
        "name": "[1/2] Летающий череп",
        "url": "https://dnd.su/bestiary/8019-skull-flier"
    },
    {
        "name": "[1/2] Локата",
        "url": "https://dnd.su/bestiary/7524-locathah"
    },
    {
        "name": "[1/2] Людоящер",
        "url": "https://dnd.su/bestiary/217-lizardfolk"
    },
    {
        "name": "[1] Лев",
        "url": "https://dnd.su/bestiary/375-lion"
    },
    {
        "name": "[1] Ледяная жаба",
        "url": "https://dnd.su/bestiary/487-ice-toad"
    },
    {
        "name": "[1] Ледяной паук",
        "url": "https://dnd.su/bestiary/7734-ice-spider"
    },
    {
        "name": "[1] Людоящер чешуйчатый щит",
        "url": "https://dnd.su/bestiary/7520-lizardfolk-scaleshield"
    },
    {
        "name": "[1] Лютый волк",
        "url": "https://dnd.su/bestiary/297-dire-wolf"
    },
    {
        "name": "[2] Ласкилар",
        "url": "https://dnd.su/bestiary/6055-laskilar"
    },
    {
        "name": "[2] Лаурин Офидас",
        "url": "https://dnd.su/bestiary/7896-laurin-ophidas"
    },
    {
        "name": "[2] Леди Гондафрей",
        "url": "https://dnd.su/bestiary/5325-lady-gondafrey"
    },
    {
        "name": "[2] Леди Фиона Вахтер",
        "url": "https://dnd.su/bestiary/4762-lady-fiona-wachter"
    },
    {
        "name": "[2] Лейба Россе (Няня)",
        "url": "https://dnd.su/bestiary/5327-laiba-rosse-nana"
    },
    {
        "name": "[2] Летающий гибрид",
        "url": "https://dnd.su/bestiary/17277-hybrid-flier"
    },
    {
        "name": "[2] Летучая вермышь",
        "url": "https://dnd.su/bestiary/5386-werebat"
    },
    {
        "name": "[2] Лидер варваров Утгардтцев",
        "url": "https://dnd.su/bestiary/7720-uthgardt-barbarian-leader"
    },
    {
        "name": "[2] Личинка охотника за яйцами",
        "url": "https://dnd.su/bestiary/6340-egg-hunter-hatchling"
    },
    {
        "name": "[2] Локата охотник",
        "url": "https://dnd.su/bestiary/7525-locathah-hunter"
    },
    {
        "name": "[2] Луваш",
        "url": "https://dnd.su/bestiary/4766-luvash"
    },
    {
        "name": "[2] Людоящер шаман",
        "url": "https://dnd.su/bestiary/218-lizardfolk-shaman"
    },
    {
        "name": "[3] Лампада",
        "url": "https://dnd.su/bestiary/7162-lampad"
    },
    {
        "name": "[3] Лекротта",
        "url": "https://dnd.su/bestiary/6827-leucrotta"
    },
    {
        "name": "[3] Летающий ужас",
        "url": "https://dnd.su/bestiary/11859-flying-horror"
    },
    {
        "name": "[3] Ловчий падальщик",
        "url": "https://dnd.su/bestiary/6855-carrion-stalker"
    },
    {
        "name": "[3] Лоза-убийца",
        "url": "https://dnd.su/bestiary/2641-assassin-vine"
    },
    {
        "name": "[3] Лорд игл",
        "url": "https://dnd.su/bestiary/13709-needle-lord"
    },
    {
        "name": "[3] Лучник",
        "url": "https://dnd.su/bestiary/6464-archer"
    },
    {
        "name": "[3] Людоящер заместитель вождя",
        "url": "https://dnd.su/bestiary/7521-lizardfolk-subchief"
    },
    {
        "name": "[4] Ламия",
        "url": "https://dnd.su/bestiary/215-lamia"
    },
    {
        "name": "[4] Лангдедроса Цианврас",
        "url": "https://dnd.su/bestiary/3725-langdedrosa-cyanwrath"
    },
    {
        "name": "[4] Лепрекон",
        "url": "https://dnd.su/bestiary/17221-leprechaun"
    },
    {
        "name": "[4] Лиара Портир",
        "url": "https://dnd.su/bestiary/6018-liara-portyr"
    },
    {
        "name": "[5] Леонинский безбожник",
        "url": "https://dnd.su/bestiary/7197-leonin-iconoclast"
    },
    {
        "name": "[5] Лесная Вайда",
        "url": "https://dnd.su/bestiary/7069-wood-woad"
    },
    {
        "name": "[5] Линкс Креатлах",
        "url": "https://dnd.su/bestiary/8521-lynx-creatlach"
    },
    {
        "name": "[5] Лулу",
        "url": "https://dnd.su/bestiary/6420-lulu"
    },
    {
        "name": "[5] Лунная акула",
        "url": "https://dnd.su/bestiary/7869-moonshark"
    },
    {
        "name": "[5] Людмила Вилисевич",
        "url": "https://dnd.su/bestiary/4765-ludmilla-vilisevic"
    },
    {
        "name": "[6] Лев-одуванчик",
        "url": "https://dnd.su/bestiary/11059-dandylion"
    },
    {
        "name": "[6] Лоссер Мирклав",
        "url": "https://dnd.su/bestiary/5331-losser-mirklav"
    },
    {
        "name": "[6] Луносветный защитник",
        "url": "https://dnd.su/bestiary/15703-moonlight-guardian"
    },
    {
        "name": "[8] Ледяной великан",
        "url": "https://dnd.su/bestiary/169-frost-giant"
    },
    {
        "name": "[8] Ледяной тролль",
        "url": "https://dnd.su/bestiary/5754-ice-troll"
    },
    {
        "name": "[8] Ловушка интеллекта",
        "url": "https://dnd.su/bestiary/12509-intellect-snare"
    },
    {
        "name": "[8] Ломовик",
        "url": "https://dnd.su/bestiary/11068-scrapper"
    },
    {
        "name": "[8] Люстра вращения",
        "url": "https://dnd.su/bestiary/15720-whirling-chandelier"
    },
    {
        "name": "[9] Ледяной великан — зомби",
        "url": "https://dnd.su/bestiary/7277-frost-giant-zombie"
    },
    {
        "name": "[9] Лейтенант клинков",
        "url": "https://dnd.su/bestiary/15688-blade-lieutenant"
    },
    {
        "name": "[9] Лортуун",
        "url": "https://dnd.su/bestiary/5922-lorthuun"
    },
    {
        "name": "[10] Летний эладрин",
        "url": "https://dnd.su/bestiary/6727-summer-eladrin"
    },
    {
        "name": "[10] Лягемот",
        "url": "https://dnd.su/bestiary/6754-froghemoth"
    },
    {
        "name": "[11] Ледяной великан Злой воды",
        "url": "https://dnd.su/bestiary/12132-frost-giant-of-evil-water"
    },
    {
        "name": "[11] Лесовик",
        "url": "https://dnd.su/bestiary/17359-treefolk"
    },
    {
        "name": "[12] Лавиноподобный холмовой великан",
        "url": "https://dnd.su/bestiary/12173-hill-giant-avalancher"
    },
    {
        "name": "[12] Левая рука Маншуна",
        "url": "https://dnd.su/bestiary/6208-left-hand-of-manshoon"
    },
    {
        "name": "[12] Лоужет",
        "url": "https://dnd.su/bestiary/10603-lohezet"
    },
    {
        "name": "[13] Лугару",
        "url": "https://dnd.su/bestiary/6868-loup-garou"
    },
    {
        "name": "[13] Лютый тролль",
        "url": "https://dnd.su/bestiary/7051-dire-troll"
    },
    {
        "name": "[14] Ледяной дьявол (Гелюгон)",
        "url": "https://dnd.su/bestiary/83-ice-devil"
    },
    {
        "name": "[14] Лич-Девкарин",
        "url": "https://dnd.su/bestiary/9394-devkarin-lich"
    },
    {
        "name": "[14] Ловчий",
        "url": "https://dnd.su/bestiary/6928-retriever"
    },
    {
        "name": "[15] Лиловый червь",
        "url": "https://dnd.su/bestiary/267-purple-worm"
    },
    {
        "name": "[15] Лорд черепов",
        "url": "https://dnd.su/bestiary/6980-skull-lord"
    },
    {
        "name": "[15] Лорд-мумия",
        "url": "https://dnd.su/bestiary/244-mummy-lord"
    },
    {
        "name": "[16] Личиночный маг звёздных порождений",
        "url": "https://dnd.su/bestiary/7032-star-spawn-larva-mage"
    },
    {
        "name": "[16] Лхаммарунтош",
        "url": "https://dnd.su/bestiary/8029-lhammaruntosz"
    },
    {
        "name": "[17] Лазав",
        "url": "https://dnd.su/bestiary/17322-lazav"
    },
    {
        "name": "[17] Лаэраль Сильверхенд",
        "url": "https://dnd.su/bestiary/5326-laeral-silverhand"
    },
    {
        "name": "[17] Ледяной великан ваятель льда",
        "url": "https://dnd.su/bestiary/12130-frost-giant-ice-shaper"
    },
    {
        "name": "[17] Ледяной червь",
        "url": "https://dnd.su/bestiary/7278-frost-worm"
    },
    {
        "name": "[18] Лишайниковый лич",
        "url": "https://dnd.su/bestiary/5051-lichen-lich"
    },
    {
        "name": "[18] Лорд Лезвий",
        "url": "https://dnd.su/bestiary/4986-the-lord-of-blades"
    },
    {
        "name": "[19] Лорд Сот",
        "url": "https://dnd.su/bestiary/10604-lord-soth"
    },
    {
        "name": "[20] Левиафан",
        "url": "https://dnd.su/bestiary/6828-leviathan"
    },
    {
        "name": "[21] Лич",
        "url": "https://dnd.su/bestiary/216-lich"
    },
    {
        "name": "[21] Ложный лич",
        "url": "https://dnd.su/bestiary/15698-false-lich"
    },
    {
        "name": "[22] Леди Илмерроу",
        "url": "https://dnd.su/bestiary/4980-lady-illmarrow"
    },
    {
        "name": "[0] Лифферлас",
        "url": "https://dnd.su/bestiary/7774-lifferlas"
    },
    {
        "name": "[0] Маг-техник",
        "url": "https://dnd.su/bestiary/5003-magewright"
    },
    {
        "name": "[0] Маркхэм Саутвелл",
        "url": "https://dnd.su/bestiary/7775-markham-southwell"
    },
    {
        "name": "[0] Медоносная пчела Полленелла",
        "url": "https://dnd.su/bestiary/8440-pollenella-the-honeybee"
    },
    {
        "name": "[0] Меркоть",
        "url": "https://dnd.su/bestiary/8441-gloam"
    },
    {
        "name": "[0] Механическая птица",
        "url": "https://dnd.su/bestiary/5123-mechanical-bird"
    },
    {
        "name": "[0] Миливой",
        "url": "https://dnd.su/bestiary/4770-milivoj"
    },
    {
        "name": "[0] Мира Рахир",
        "url": "https://dnd.su/bestiary/12713-meera-raheer"
    },
    {
        "name": "[0] Мирош Кселбрин",
        "url": "https://dnd.su/bestiary/7776-miros-xelbrin"
    },
    {
        "name": "[0] Мисикс",
        "url": "https://dnd.su/bestiary/8048-meeseeks"
    },
    {
        "name": "[0] Могучий слуга Леук-о",
        "url": "https://dnd.su/bestiary/3762-mighty-servant-of-leuk-o"
    },
    {
        "name": "[0] Молодой грифон (Крошечный)",
        "url": "https://dnd.su/bestiary/5815-young-griffon-tiny"
    },
    {
        "name": "[0] Молодой мимик",
        "url": "https://dnd.su/bestiary/4315-juvenile-mimic"
    },
    {
        "name": "[0] Морак Ур’грей",
        "url": "https://dnd.su/bestiary/7699-morak-urgray"
    },
    {
        "name": "[0] Морской конёк",
        "url": "https://dnd.su/bestiary/384-sea-horse"
    },
    {
        "name": "[1/8] Маг Усамигараса",
        "url": "https://dnd.su/bestiary/17223-mage-of-usamigaras"
    },
    {
        "name": "[1/8] Малыш йети",
        "url": "https://dnd.su/bestiary/5750-yeti-tyke"
    },
    {
        "name": "[1/8] Мастиф",
        "url": "https://dnd.su/bestiary/382-mastiff"
    },
    {
        "name": "[1/8] Мваксанаре",
        "url": "https://dnd.su/bestiary/6019-mwaxanare"
    },
    {
        "name": "[1/8] Мерфолк",
        "url": "https://dnd.su/bestiary/234-merfolk"
    },
    {
        "name": "[1/8] Мерфолк Симиков",
        "url": "https://dnd.su/bestiary/17326-simic-merfolk"
    },
    {
        "name": "[1/8] Молодой крутик",
        "url": "https://dnd.su/bestiary/6826-young-kruthik"
    },
    {
        "name": "[1/8] Монах монастыря Страдающего тела",
        "url": "https://dnd.su/bestiary/17376-monastery-of-the-distressed-body-monk"
    },
    {
        "name": "[1/8] Монодрон",
        "url": "https://dnd.su/bestiary/238-monodrone"
    },
    {
        "name": "[1/8] Морской эльф",
        "url": "https://dnd.su/bestiary/7714-sea-elf"
    },
    {
        "name": "[1/8] Моряк",
        "url": "https://dnd.su/bestiary/7436-sailor"
    },
    {
        "name": "[1/8] Мул",
        "url": "https://dnd.su/bestiary/385-mule"
    },
    {
        "name": "[1/8] Мэйн",
        "url": "https://dnd.su/bestiary/70-manes"
    },
    {
        "name": "[1/4] Максин",
        "url": "https://dnd.su/bestiary/5363-maxeene"
    },
    {
        "name": "[1/4] Маленький жёлтый мускусный зомби",
        "url": "https://dnd.su/bestiary/6011-small-yellow-musk-zombie"
    },
    {
        "name": "[1/4] Марзена Белвью",
        "url": "https://dnd.su/bestiary/4769-marzena-belview"
    },
    {
        "name": "[1/4] Маслёнка Выскочка",
        "url": "https://dnd.su/bestiary/8438-squirt-the-oilcan"
    },
    {
        "name": "[1/4] Мерзкий угнетённый",
        "url": "https://dnd.su/bestiary/7028-wretched-sorrowsworn"
    },
    {
        "name": "[1/4] Мерцающий пёс",
        "url": "https://dnd.su/bestiary/383-blink-dog"
    },
    {
        "name": "[1/4] Металлическая славка",
        "url": "https://dnd.su/bestiary/6351-metallic-warbler"
    },
    {
        "name": "[1/4] Минотавр археолог",
        "url": "https://dnd.su/bestiary/13252-minotaur-archaeologist"
    },
    {
        "name": "[1/4] Мишка Белвью",
        "url": "https://dnd.su/bestiary/4771-mishka-belview"
    },
    {
        "name": "[1/4] Молодой грифон (Маленький)",
        "url": "https://dnd.su/bestiary/5816-young-griffon-small"
    },
    {
        "name": "[1/4] Молодой крюкастый ужас",
        "url": "https://dnd.su/bestiary/5917-young-hook-horror"
    },
    {
        "name": "[1/4] Морж",
        "url": "https://dnd.su/bestiary/5759-walrus"
    },
    {
        "name": "[1/4] Морте",
        "url": "https://dnd.su/bestiary/13231-morte"
    },
    {
        "name": "[1/2] Магмин",
        "url": "https://dnd.su/bestiary/225-magmin"
    },
    {
        "name": "[1/2] Магмовый мефит",
        "url": "https://dnd.su/bestiary/230-magma-mephit"
    },
    {
        "name": "[1/2] Мерфолк разведчик",
        "url": "https://dnd.su/bestiary/7532-merfolk-scout"
    },
    {
        "name": "[1/2] Металлическая оса",
        "url": "https://dnd.su/bestiary/6181-metal-wasp"
    },
    {
        "name": "[1/2] Монах Священного Камня",
        "url": "https://dnd.su/bestiary/4913-sacred-stone-monk"
    },
    {
        "name": "[1/2] Морской эльф разведчик",
        "url": "https://dnd.su/bestiary/10597-sea-elf-scout"
    },
    {
        "name": "[1/2] Мудрец",
        "url": "https://dnd.su/bestiary/5064-sage"
    },
    {
        "name": "[1/2] Мёртвая голова",
        "url": "https://dnd.su/bestiary/6862-deaths-head"
    },
    {
        "name": "[1/2] Мёртвый куролиск",
        "url": "https://dnd.su/bestiary/8519-undead-cockatrice"
    },
    {
        "name": "[1] Маджесто",
        "url": "https://dnd.su/bestiary/4768-majesto"
    },
    {
        "name": "[1] Мертвионетка",
        "url": "https://dnd.su/bestiary/6856-carrionnete"
    },
    {
        "name": "[1] Мерфолк добытчик",
        "url": "https://dnd.su/bestiary/7531-merfolk-salvager"
    },
    {
        "name": "[1] Мизел",
        "url": "https://dnd.su/bestiary/6834-meazel"
    },
    {
        "name": "[1] Мистер Иглонитка",
        "url": "https://dnd.su/bestiary/6057-mister-threadneedle"
    },
    {
        "name": "[1] Мишка Бастер",
        "url": "https://dnd.su/bestiary/8042-buster-the-bear"
    },
    {
        "name": "[1] Молодой василиск",
        "url": "https://dnd.su/bestiary/5911-young-basilisk"
    },
    {
        "name": "[1] Молодой грифон (Средний)",
        "url": "https://dnd.su/bestiary/5817-young-griffon-medium"
    },
    {
        "name": "[1] Морское отродье",
        "url": "https://dnd.su/bestiary/6930-sea-spawn"
    },
    {
        "name": "[1] Мудрец башни",
        "url": "https://dnd.su/bestiary/17226-tower-sage"
    },
    {
        "name": "[1] Мушариб",
        "url": "https://dnd.su/bestiary/6029-musharib"
    },
    {
        "name": "[2] Малютка",
        "url": "https://dnd.su/bestiary/6419-little-one"
    },
    {
        "name": "[2] Мастер Рефрум",
        "url": "https://dnd.su/bestiary/7563-master-refrum"
    },
    {
        "name": "[2] Мейенир",
        "url": "https://dnd.su/bestiary/5810-mjenir"
    },
    {
        "name": "[2] Меланнор Фелбранч",
        "url": "https://dnd.su/bestiary/5335-melannor-fellbranch"
    },
    {
        "name": "[2] Мерроу",
        "url": "https://dnd.su/bestiary/235-merrow"
    },
    {
        "name": "[2] Метатель гоблинов",
        "url": "https://dnd.su/bestiary/7712-goblin-hucker"
    },
    {
        "name": "[2] Механический ужас",
        "url": "https://dnd.su/bestiary/7686-clockwork-horror"
    },
    {
        "name": "[2] Мимик",
        "url": "https://dnd.su/bestiary/236-mimic"
    },
    {
        "name": "[2] Мимик шлюпка",
        "url": "https://dnd.su/bestiary/6236-rowboat-mimic"
    },
    {
        "name": "[2] Минлок",
        "url": "https://dnd.su/bestiary/6835-meenlock"
    },
    {
        "name": "[2] Минлок",
        "url": "https://dnd.su/bestiary/8895-meenlock"
    },
    {
        "name": "[2] Минотавр лазутчик",
        "url": "https://dnd.su/bestiary/13253-minotaur-infiltrator"
    },
    {
        "name": "[2] Мобар",
        "url": "https://dnd.su/bestiary/6219-mobar"
    },
    {
        "name": "[2] Морская карга",
        "url": "https://dnd.su/bestiary/194-sea-hag"
    },
    {
        "name": "[2] Мэри Греймалкин",
        "url": "https://dnd.su/bestiary/17384-mary-greymalkin"
    },
    {
        "name": "[3] Маг предсказатель",
        "url": "https://dnd.su/bestiary/17310-precognitive-mage"
    },
    {
        "name": "[3] Маку",
        "url": "https://dnd.su/bestiary/6187-maku"
    },
    {
        "name": "[3] Мантикора",
        "url": "https://dnd.su/bestiary/226-manticore"
    },
    {
        "name": "[3] Мелетский гоплит",
        "url": "https://dnd.su/bestiary/7156-meletian-hoplite"
    },
    {
        "name": "[3] Мерренолот",
        "url": "https://dnd.su/bestiary/6837-merrenoloth"
    },
    {
        "name": "[3] Мерсион",
        "url": "https://dnd.su/bestiary/8425-mercion"
    },
    {
        "name": "[3] Мимик обеденный стол",
        "url": "https://dnd.su/bestiary/5112-dining-table-mimic"
    },
    {
        "name": "[3] Минотавр",
        "url": "https://dnd.su/bestiary/435-minotaur"
    },
    {
        "name": "[3] Миротворец Гармониума",
        "url": "https://dnd.su/bestiary/13204-harmonium-peacekeeper"
    },
    {
        "name": "[3] Мозг в банке",
        "url": "https://dnd.su/bestiary/5758-brain-in-a-jar"
    },
    {
        "name": "[3] Мозг в банке",
        "url": "https://dnd.su/bestiary/6854-brain-in-a-jar"
    },
    {
        "name": "[3] Молливер",
        "url": "https://dnd.su/bestiary/8421-molliver"
    },
    {
        "name": "[3] Молодая небосклонная черепаха",
        "url": "https://dnd.su/bestiary/7867-young-horizonback-tortoise"
    },
    {
        "name": "[3] Мортлок Вантампур",
        "url": "https://dnd.su/bestiary/6411-mortlock-vanthampur"
    },
    {
        "name": "[3] Муза Общества восприятия",
        "url": "https://dnd.su/bestiary/13208-society-of-sensation-muse"
    },
    {
        "name": "[3] Мумия",
        "url": "https://dnd.su/bestiary/243-mummy"
    },
    {
        "name": "[3] Мэгги Кинайс (1-го уровня)",
        "url": "https://dnd.su/bestiary/7810-maggie-keeneyes-tier-1"
    },
    {
        "name": "[4] Маг клятвы с Визерблума",
        "url": "https://dnd.su/bestiary/8351-witherbloom-pledgemage"
    },
    {
        "name": "[4] Маг клятвы с Квандрикса",
        "url": "https://dnd.su/bestiary/8322-quandrix-pledgemage"
    },
    {
        "name": "[4] Маг клятвы с Лорхолда",
        "url": "https://dnd.su/bestiary/8068-lorehold-pledgemage"
    },
    {
        "name": "[4] Маг клятвы с Призмари",
        "url": "https://dnd.su/bestiary/8314-prismari-pledgemage"
    },
    {
        "name": "[4] Маг клятвы с Сильверквилла",
        "url": "https://dnd.su/bestiary/8343-silverquill-pledgemage"
    },
    {
        "name": "[4] Мариса",
        "url": "https://dnd.su/bestiary/7897-marisa"
    },
    {
        "name": "[4] Мастер душ",
        "url": "https://dnd.su/bestiary/6382-master-of-souls"
    },
    {
        "name": "[4] Мерзкая поросль",
        "url": "https://dnd.su/bestiary/17224-horrid-plant"
    },
    {
        "name": "[4] Меррегон",
        "url": "https://dnd.su/bestiary/6836-merregon"
    },
    {
        "name": "[4] Мерроу мелководный жрец",
        "url": "https://dnd.su/bestiary/7405-merrow-shallowpriest"
    },
    {
        "name": "[4] Металлический миротворец",
        "url": "https://dnd.su/bestiary/6350-metallic-peacekeeper"
    },
    {
        "name": "[4] Механический архивариус",
        "url": "https://dnd.su/bestiary/8058-cogwork-archivist"
    },
    {
        "name": "[4] Моургаэн",
        "url": "https://dnd.su/bestiary/7464-morgaen"
    },
    {
        "name": "[4] Мутирующий Гуманоид",
        "url": "https://dnd.su/bestiary/12549-humanoid-mutate"
    },
    {
        "name": "[4] Мэри",
        "url": "https://dnd.su/bestiary/7898-meri"
    },
    {
        "name": "[5] Маг разума",
        "url": "https://dnd.su/bestiary/17309-mind-mage"
    },
    {
        "name": "[5] Мастер-вор",
        "url": "https://dnd.su/bestiary/6831-master-thief"
    },
    {
        "name": "[5] Меззолот",
        "url": "https://dnd.su/bestiary/321-mezzoloth"
    },
    {
        "name": "[5] Меркан",
        "url": "https://dnd.su/bestiary/8848-mercane"
    },
    {
        "name": "[5] Молодой глубинный дракон",
        "url": "https://dnd.su/bestiary/6264-young-deep-dragon"
    },
    {
        "name": "[5] Молодой кристаллический дракон",
        "url": "https://dnd.su/bestiary/6253-young-crystal-dragon"
    },
    {
        "name": "[5] Молодой облачный великан",
        "url": "https://dnd.su/bestiary/7728-young-cloud-giant"
    },
    {
        "name": "[5] Молодой ремораз",
        "url": "https://dnd.su/bestiary/270-young-remorhaz"
    },
    {
        "name": "[5] Монах Бессмертного Лотоса",
        "url": "https://dnd.su/bestiary/5045-immortal-lotus-monk"
    },
    {
        "name": "[5] Монах оперативник",
        "url": "https://dnd.su/bestiary/7852-monastic-operative"
    },
    {
        "name": "[5] Морганта",
        "url": "https://dnd.su/bestiary/4772-morgantha"
    },
    {
        "name": "[5] Морго Делвур",
        "url": "https://dnd.su/bestiary/7428-morgo-delwur"
    },
    {
        "name": "[5] Морозный друид",
        "url": "https://dnd.su/bestiary/5761-frost-druid"
    },
    {
        "name": "[5] Морской лев",
        "url": "https://dnd.su/bestiary/9492-sea-lion"
    },
    {
        "name": "[5] Мэгги Кинайс (2-го уровня)",
        "url": "https://dnd.su/bestiary/7811-maggie-keeneyes-tier-2"
    },
    {
        "name": "[5] Мясной голем",
        "url": "https://dnd.su/bestiary/184-flesh-golem"
    },
    {
        "name": "[6] Маг",
        "url": "https://dnd.su/bestiary/434-mage"
    },
    {
        "name": "[6] Маг-Законник",
        "url": "https://dnd.su/bestiary/17308-lawmage"
    },
    {
        "name": "[6] Мамонт",
        "url": "https://dnd.su/bestiary/381-mammoth"
    },
    {
        "name": "[6] Манафрет Черрипорт",
        "url": "https://dnd.su/bestiary/5333-manafret-cherryport"
    },
    {
        "name": "[6] Марта Лунная тень",
        "url": "https://dnd.su/bestiary/6225-marta-moonshadow"
    },
    {
        "name": "[6] Медуза",
        "url": "https://dnd.su/bestiary/227-medusa"
    },
    {
        "name": "[6] Медуза горгона",
        "url": "https://dnd.su/bestiary/7262-medusa-gorgon"
    },
    {
        "name": "[6] Мехахимера",
        "url": "https://dnd.su/bestiary/8510-mechachimera"
    },
    {
        "name": "[6] Мирадж Визанн",
        "url": "https://dnd.su/bestiary/4917-miraj-vizann"
    },
    {
        "name": "[6] Мозг в банке (Неосновной)",
        "url": "https://dnd.su/bestiary/17380-brain-in-a-jar-noncore"
    },
    {
        "name": "[6] Молодой белый дракон",
        "url": "https://dnd.su/bestiary/113-young-white-dragon"
    },
    {
        "name": "[6] Молодой латунный дракон",
        "url": "https://dnd.su/bestiary/117-young-brass-dragon"
    },
    {
        "name": "[6] Монах лазутчик",
        "url": "https://dnd.su/bestiary/7851-monastic-infiltrator"
    },
    {
        "name": "[6] Мрачнод Гаргенхейл",
        "url": "https://dnd.su/bestiary/9262-grimzod-gargenhale"
    },
    {
        "name": "[6] Мутирующий отидж",
        "url": "https://dnd.su/bestiary/12550-otyugh-mutate"
    },
    {
        "name": "[7] Маг дроу",
        "url": "https://dnd.su/bestiary/147-drow-mage"
    },
    {
        "name": "[7] Матушка Гусыня",
        "url": "https://dnd.su/bestiary/17343-goose-mother"
    },
    {
        "name": "[7] Маурежи",
        "url": "https://dnd.su/bestiary/6832-maurezhi"
    },
    {
        "name": "[7] Молодой лунный дракон",
        "url": "https://dnd.su/bestiary/8772-young-lunar-dragon"
    },
    {
        "name": "[7] Молодой медный дракон",
        "url": "https://dnd.su/bestiary/125-young-copper-dragon"
    },
    {
        "name": "[7] Молодой топазный дракон",
        "url": "https://dnd.su/bestiary/6285-young-topaz-dragon"
    },
    {
        "name": "[7] Молодой чёрный дракон",
        "url": "https://dnd.su/bestiary/97-young-black-dragon"
    },
    {
        "name": "[7] Мутировавший тролль",
        "url": "https://dnd.su/bestiary/12271-troll-mutate"
    },
    {
        "name": "[8] Марлос Урнрейл",
        "url": "https://dnd.su/bestiary/4918-marlos-urnrayle"
    },
    {
        "name": "[8] Мешок Гвоздей",
        "url": "https://dnd.su/bestiary/6037-bag-of-nails"
    },
    {
        "name": "[8] Мимик-сокровище",
        "url": "https://dnd.su/bestiary/6345-hoard-mimic"
    },
    {
        "name": "[8] Модрон декатон",
        "url": "https://dnd.su/bestiary/13111-decaton-modron"
    },
    {
        "name": "[8] Мозазавр",
        "url": "https://dnd.su/bestiary/5970-mosasaurus"
    },
    {
        "name": "[8] Мозазавр зомби",
        "url": "https://dnd.su/bestiary/5993-mosasaurus-zombie"
    },
    {
        "name": "[8] Молодой бронзовый дракон",
        "url": "https://dnd.su/bestiary/121-young-bronze-dragon"
    },
    {
        "name": "[8] Молодой зеленый дракон",
        "url": "https://dnd.su/bestiary/14-young-green-dragon"
    },
    {
        "name": "[8] Молодой изумрудный дракон",
        "url": "https://dnd.su/bestiary/6270-young-emerald-dragon"
    },
    {
        "name": "[8] Молодой луннокаменный дракон",
        "url": "https://dnd.su/bestiary/6275-young-moonstone-dragon"
    },
    {
        "name": "[8] Молодой морской змей",
        "url": "https://dnd.su/bestiary/6292-young-sea-serpent"
    },
    {
        "name": "[8] Мохоспин-Стюард",
        "url": "https://dnd.su/bestiary/7451-mossback-steward"
    },
    {
        "name": "[8] Мэгги Кинайс (3-го уровня)",
        "url": "https://dnd.su/bestiary/7812-maggie-keeneyes-tier-3"
    },
    {
        "name": "[8] Мясной голем исчадий",
        "url": "https://dnd.su/bestiary/6383-fiendish-flesh-golem"
    },
    {
        "name": "[9] Маг крови Орика",
        "url": "https://dnd.su/bestiary/8292-oriq-blood-mage"
    },
    {
        "name": "[9] Мастер жестокости",
        "url": "https://dnd.su/bestiary/8932-master-of-cruelties"
    },
    {
        "name": "[9] Мейлун Вардрагон",
        "url": "https://dnd.su/bestiary/5339-meloon-wardragon"
    },
    {
        "name": "[9] Мирт",
        "url": "https://dnd.su/bestiary/5340-mirt"
    },
    {
        "name": "[9] Молниевый скиталец",
        "url": "https://dnd.su/bestiary/12247-lightning-hulk"
    },
    {
        "name": "[9] Молодой аметистовый дракон",
        "url": "https://dnd.su/bestiary/6244-young-amethyst-dragon"
    },
    {
        "name": "[9] Молодой сапфировый дракон",
        "url": "https://dnd.su/bestiary/6279-young-sapphire-dragon"
    },
    {
        "name": "[9] Молодой серебряный дракон",
        "url": "https://dnd.su/bestiary/133-young-silver-dragon"
    },
    {
        "name": "[9] Молодой синий дракон",
        "url": "https://dnd.su/bestiary/105-young-blue-dragon"
    },
    {
        "name": "[9] Молодой солнечный дракон",
        "url": "https://dnd.su/bestiary/8871-young-solar-dragon"
    },
    {
        "name": "[9] Морозная саламандра",
        "url": "https://dnd.su/bestiary/6757-frost-salamander"
    },
    {
        "name": "[9] Мургаксор",
        "url": "https://dnd.su/bestiary/8355-murgaxor"
    },
    {
        "name": "[9] Мутировавший дроу великан",
        "url": "https://dnd.su/bestiary/6201-giant-mutated-drow"
    },
    {
        "name": "[10] Мадам Ева",
        "url": "https://dnd.su/bestiary/952-madam-eva"
    },
    {
        "name": "[10] Малый дракон смерти",
        "url": "https://dnd.su/bestiary/10579-lesser-death-dragon"
    },
    {
        "name": "[10] Маэлефант",
        "url": "https://dnd.su/bestiary/13106-maelephant"
    },
    {
        "name": "[10] Механический кракен",
        "url": "https://dnd.su/bestiary/17378-clockwork-kraken"
    },
    {
        "name": "[10] Мистер Дори",
        "url": "https://dnd.su/bestiary/7565-mr-dory"
    },
    {
        "name": "[10] Могильный бурильщик",
        "url": "https://dnd.su/bestiary/5757-tomb-tapper"
    },
    {
        "name": "[10] Модрон нонатон",
        "url": "https://dnd.su/bestiary/13114-nonaton-modron"
    },
    {
        "name": "[10] Молодая дракочерепаха",
        "url": "https://dnd.su/bestiary/6289-young-dragon-turtle"
    },
    {
        "name": "[10] Молодой золотой дракон",
        "url": "https://dnd.su/bestiary/129-young-gold-dragon"
    },
    {
        "name": "[10] Молодой красный дракон",
        "url": "https://dnd.su/bestiary/109-young-red-dragon"
    },
    {
        "name": "[10] Молоторукий голем",
        "url": "https://dnd.su/bestiary/6153-hammer-handed-golem"
    },
    {
        "name": "[10] Морозная скорбь",
        "url": "https://dnd.su/bestiary/12133-frostmourn"
    },
    {
        "name": "[10] Мутировавший плащевик",
        "url": "https://dnd.su/bestiary/12548-cloaker-mutate"
    },
    {
        "name": "[11] Мамаша",
        "url": "https://dnd.su/bestiary/9261-big-momma"
    },
    {
        "name": "[11] Марид",
        "url": "https://dnd.su/bestiary/163-marid"
    },
    {
        "name": "[11] Меганожка",
        "url": "https://dnd.su/bestiary/8846-megapede"
    },
    {
        "name": "[11] Модрон октон",
        "url": "https://dnd.su/bestiary/13116-octon-modron"
    },
    {
        "name": "[11] Молодой дракон времени",
        "url": "https://dnd.su/bestiary/13135-young-time-dragon"
    },
    {
        "name": "[11] Молодой потустороний ужас",
        "url": "https://dnd.su/bestiary/12711-juvenile-eldritch-horror"
    },
    {
        "name": "[11] Моркот",
        "url": "https://dnd.su/bestiary/6844-morkoth"
    },
    {
        "name": "[12] Маг высших фей",
        "url": "https://dnd.su/bestiary/17348-high-fae-mage"
    },
    {
        "name": "[12] Медвезарево",
        "url": "https://dnd.su/bestiary/15690-blazebear"
    },
    {
        "name": "[12] Мелиссара Сумеречная Тень",
        "url": "https://dnd.su/bestiary/6148-melissara-shadowdusk"
    },
    {
        "name": "[12] Могхадам",
        "url": "https://dnd.su/bestiary/8522-moghadam"
    },
    {
        "name": "[12] Модрон септон",
        "url": "https://dnd.su/bestiary/13117-septon-modron"
    },
    {
        "name": "[12] Морская фурия",
        "url": "https://dnd.su/bestiary/7409-sea-fury"
    },
    {
        "name": "[13] Маншун",
        "url": "https://dnd.su/bestiary/5334-manshoon"
    },
    {
        "name": "[13] Мирран",
        "url": "https://dnd.su/bestiary/7762-mirran"
    },
    {
        "name": "[13] Модрон гекстон",
        "url": "https://dnd.su/bestiary/13113-hexton-modron"
    },
    {
        "name": "[13] Молодой красный теневой дракон",
        "url": "https://dnd.su/bestiary/4858-young-red-shadow-dragon"
    },
    {
        "name": "[13] Молодой лиловый червь",
        "url": "https://dnd.su/bestiary/4941-young-purple-worm"
    },
    {
        "name": "[13] Муирал",
        "url": "https://dnd.su/bestiary/5387-muiral"
    },
    {
        "name": "[14] Молодой кракен",
        "url": "https://dnd.su/bestiary/7513-juvenile-kraken"
    },
    {
        "name": "[15] Мордакеш",
        "url": "https://dnd.su/bestiary/4987-mordakhesh"
    },
    {
        "name": "[16] Марилит",
        "url": "https://dnd.su/bestiary/71-marilith"
    },
    {
        "name": "[17] Медуза иерофант",
        "url": "https://dnd.su/bestiary/13289-hierophant-medusa"
    },
    {
        "name": "[18] Малаксикс",
        "url": "https://dnd.su/bestiary/13283-malaxxix"
    },
    {
        "name": "[19] Младший эмиссар звёздных порождений",
        "url": "https://dnd.su/bestiary/6888-lesser-star-spawn-emissary"
    },
    {
        "name": "[20] Мясной колосс",
        "url": "https://dnd.su/bestiary/12123-flesh-colossus"
    },
    {
        "name": "[21] Молидей",
        "url": "https://dnd.su/bestiary/6842-molydeus"
    },
    {
        "name": "[21] Молох",
        "url": "https://dnd.su/bestiary/6841-moloch"
    },
    {
        "name": "[22] Миирим",
        "url": "https://dnd.su/bestiary/5058-miirym"
    },
    {
        "name": "[23] Маэгера, Титан Рассвета",
        "url": "https://dnd.su/bestiary/5605-maegera-the-dawn-titan"
    },
    {
        "name": "[25] Марут",
        "url": "https://dnd.su/bestiary/6830-marut"
    },
    {
        "name": "[0] Мангонель",
        "url": "https://dnd.su/bestiary/8973-mangonel"
    },
    {
        "name": "[?] Морской зверь",
        "url": "https://dnd.su/bestiary/4312-beast-of-the-sea"
    },
    {
        "name": "[0] На",
        "url": "https://dnd.su/bestiary/6020-na"
    },
    {
        "name": "[0] Наксин Драткала",
        "url": "https://dnd.su/bestiary/7777-naxene-drathkala"
    },
    {
        "name": "[0] Нарт Тезрин",
        "url": "https://dnd.su/bestiary/7778-narth-tezrin"
    },
    {
        "name": "[0] Немиколоптер",
        "url": "https://dnd.su/bestiary/5971-nemicolopterus"
    },
    {
        "name": "[0] Немиколоптер зомби",
        "url": "https://dnd.su/bestiary/5995-nemicolopterus-zombie"
    },
    {
        "name": "[0] Нене",
        "url": "https://dnd.su/bestiary/8539-nene"
    },
    {
        "name": "[0] Нэт",
        "url": "https://dnd.su/bestiary/5361-nat"
    },
    {
        "name": "[1/8] Николай Вахтер",
        "url": "https://dnd.su/bestiary/4774-nikolai-wachter"
    },
    {
        "name": "[1/4] Ночной клинок",
        "url": "https://dnd.su/bestiary/6377-night-blade"
    },
    {
        "name": "[1/2] Некромайт Миркула",
        "url": "https://dnd.su/bestiary/6380-necromite-of-myrkul"
    },
    {
        "name": "[1/2] Норкер",
        "url": "https://dnd.su/bestiary/13711-norker"
    },
    {
        "name": "[1/2] Носка Ур’грей",
        "url": "https://dnd.su/bestiary/5170-noska-urgray"
    },
    {
        "name": "[1/2] Нупперибо",
        "url": "https://dnd.su/bestiary/6885-nupperibo"
    },
    {
        "name": "[1] Научный агент",
        "url": "https://dnd.su/bestiary/7862-scholarly-agent"
    },
    {
        "name": "[1] Нилбог",
        "url": "https://dnd.su/bestiary/6883-nilbog"
    },
    {
        "name": "[1] Нюкторождённая рысь",
        "url": "https://dnd.su/bestiary/3636-nyxborn-lynx"
    },
    {
        "name": "[2] Наррак",
        "url": "https://dnd.su/bestiary/5859-narrak"
    },
    {
        "name": "[2] Натроу Арпл",
        "url": "https://dnd.su/bestiary/7425-nathrow-arple"
    },
    {
        "name": "[2] Наяда",
        "url": "https://dnd.su/bestiary/7160-naiad"
    },
    {
        "name": "[2] Неззнар Черный Паук",
        "url": "https://dnd.su/bestiary/16-the-black-spider"
    },
    {
        "name": "[2] Неззнар Черный Паук",
        "url": "https://dnd.su/bestiary/12556-nezznar-the-black-spider"
    },
    {
        "name": "[2] Нереида",
        "url": "https://dnd.su/bestiary/17416-nereid"
    },
    {
        "name": "[2] Ноори",
        "url": "https://dnd.su/bestiary/7735-noori"
    },
    {
        "name": "[2] Норка Брайттуск",
        "url": "https://dnd.su/bestiary/7432-norca-brighttusk"
    },
    {
        "name": "[2] Носорог",
        "url": "https://dnd.su/bestiary/386-rhinoceros"
    },
    {
        "name": "[2] Нотик",
        "url": "https://dnd.su/bestiary/17-nothic"
    },
    {
        "name": "[3] Наблюдатель",
        "url": "https://dnd.su/bestiary/15-spectator"
    },
    {
        "name": "[3] Нанни Пупу",
        "url": "https://dnd.su/bestiary/6058-nanny-pupu"
    },
    {
        "name": "[3] Небесный ткач",
        "url": "https://dnd.su/bestiary/3652-skyweaver"
    },
    {
        "name": "[3] Неоги",
        "url": "https://dnd.su/bestiary/6876-neogi"
    },
    {
        "name": "[3] Неоги-пират",
        "url": "https://dnd.su/bestiary/8852-neogi-pirate"
    },
    {
        "name": "[3] Нергалиид (Дьявольская жаба)",
        "url": "https://dnd.su/bestiary/7407-nergaliid-devil-toad"
    },
    {
        "name": "[3] Носитель драковируса",
        "url": "https://dnd.su/bestiary/10572-dracophage-subject"
    },
    {
        "name": "[4] Неоги охотник пустоты",
        "url": "https://dnd.su/bestiary/8853-neogi-void-hunter"
    },
    {
        "name": "[4] Неоги повелитель",
        "url": "https://dnd.su/bestiary/6878-neogi-master"
    },
    {
        "name": "[4] Непартак",
        "url": "https://dnd.su/bestiary/6059-nepartak"
    },
    {
        "name": "[4] Неполный драконий скелет",
        "url": "https://dnd.su/bestiary/10581-incomplete-dragon-skeleton"
    },
    {
        "name": "[4] Нимблрайт",
        "url": "https://dnd.su/bestiary/5169-nimblewright"
    },
    {
        "name": "[4] Нье-тальггу",
        "url": "https://dnd.su/bestiary/8850-neh-thalggu"
    },
    {
        "name": "[5] Нерозар Побежденный",
        "url": "https://dnd.su/bestiary/6223-nerozar-the-defeated"
    },
    {
        "name": "[5] Ночная карга",
        "url": "https://dnd.su/bestiary/193-night-hag"
    },
    {
        "name": "[5] Ночной поглотитель",
        "url": "https://dnd.su/bestiary/8868-night-scavver"
    },
    {
        "name": "[6] Нафик",
        "url": "https://dnd.su/bestiary/17228-nafik"
    },
    {
        "name": "[6] Невидимый охотник",
        "url": "https://dnd.su/bestiary/206-invisible-stalker"
    },
    {
        "name": "[6] Несущий чёрную розу",
        "url": "https://dnd.su/bestiary/15679-black-rose-bearer"
    },
    {
        "name": "[7] Найхилюр",
        "url": "https://dnd.su/bestiary/5342-nihiloor"
    },
    {
        "name": "[7] Нар’ль Зебриндас",
        "url": "https://dnd.su/bestiary/5341-narl-xibrindas"
    },
    {
        "name": "[7] Некрихор",
        "url": "https://dnd.su/bestiary/6869-necrichor"
    },
    {
        "name": "[7] Некрихор",
        "url": "https://dnd.su/bestiary/13216-necrichor"
    },
    {
        "name": "[8] Наёмный убийца",
        "url": "https://dnd.su/bestiary/436-assassin"
    },
    {
        "name": "[8] Небосклонная черепаха",
        "url": "https://dnd.su/bestiary/7403-horizonback-tortoise"
    },
    {
        "name": "[8] Невыразимый ужас",
        "url": "https://dnd.su/bestiary/6903-unspeakable-horror"
    },
    {
        "name": "[8] Нефритовая тигрица",
        "url": "https://dnd.su/bestiary/5046-jade-tigress"
    },
    {
        "name": "[8] Носферату",
        "url": "https://dnd.su/bestiary/6870-nosferatu"
    },
    {
        "name": "[9] Надгробное умертвие",
        "url": "https://dnd.su/bestiary/12065-cairnwight"
    },
    {
        "name": "[9] Никалот",
        "url": "https://dnd.su/bestiary/322-nycaloth"
    },
    {
        "name": "[9] Носящий пурпур Неронвейн",
        "url": "https://dnd.su/bestiary/485-neronvain"
    },
    {
        "name": "[10] Нефритовый паук",
        "url": "https://dnd.su/bestiary/5887-jade-spider"
    },
    {
        "name": "[11] Навид",
        "url": "https://dnd.su/bestiary/8538-navid"
    },
    {
        "name": "[11] Некротическая многоножка",
        "url": "https://dnd.su/bestiary/6437-necrotic-centipede"
    },
    {
        "name": "[11] Носящий пурпур Северин",
        "url": "https://dnd.su/bestiary/486-severin"
    },
    {
        "name": "[11] Нэйргот лорд Клинков",
        "url": "https://dnd.su/bestiary/488-naergoth-bladelord"
    },
    {
        "name": "[12] Нестер",
        "url": "https://dnd.su/bestiary/6204-nester"
    },
    {
        "name": "[13] Нальфешни",
        "url": "https://dnd.su/bestiary/72-nalfeshnee"
    },
    {
        "name": "[13] Нарзугон",
        "url": "https://dnd.su/bestiary/6875-narzugon"
    },
    {
        "name": "[13] Небесный пловец",
        "url": "https://dnd.su/bestiary/17283-skyswimmer"
    },
    {
        "name": "[13] Неотелид",
        "url": "https://dnd.su/bestiary/6879-neothelid"
    },
    {
        "name": "[13] Ним",
        "url": "https://dnd.su/bestiary/7763-nym"
    },
    {
        "name": "[15] Набассу",
        "url": "https://dnd.su/bestiary/6847-nabassu"
    },
    {
        "name": "[16] Нинтра Сиотта",
        "url": "https://dnd.su/bestiary/5060-nintra-siotta"
    },
    {
        "name": "[17] Нагпа",
        "url": "https://dnd.su/bestiary/6848-nagpa"
    },
    {
        "name": "[20] Ночной ходок",
        "url": "https://dnd.su/bestiary/6880-nightwalker"
    },
    {
        "name": "[21] Незримо присутствующий",
        "url": "https://dnd.su/bestiary/13237-veiled-presence"
    },
    {
        "name": "[23] Нафаз",
        "url": "https://dnd.su/bestiary/17227-nafas"
    },
    {
        "name": "[23] Неожиданность",
        "url": "https://dnd.su/bestiary/15730-windfall"
    },
    {
        "name": "[26] Нив-Миззет",
        "url": "https://dnd.su/bestiary/8150-niv-mizzet"
    },
    {
        "name": "[?] Небесный зверь",
        "url": "https://dnd.su/bestiary/4313-beast-of-the-sky"
    },
    {
        "name": "[0] Образ смерти",
        "url": "https://dnd.su/bestiary/867-avatar-of-death"
    },
    {
        "name": "[0] Обыватель",
        "url": "https://dnd.su/bestiary/18-commoner"
    },
    {
        "name": "[0] Обыватель Баровии",
        "url": "https://dnd.su/bestiary/4684-barovian-commoner"
    },
    {
        "name": "[0] Обыватель Вистани",
        "url": "https://dnd.su/bestiary/4807-vistana-commoner"
    },
    {
        "name": "[0] Обыватель конструкт",
        "url": "https://dnd.su/bestiary/5016-constructed-commoner"
    },
    {
        "name": "[0] Овца",
        "url": "https://dnd.su/bestiary/7740-sheep"
    },
    {
        "name": "[0] Огрек Брайтхелм",
        "url": "https://dnd.su/bestiary/7780-augrek-brighthelm"
    },
    {
        "name": "[0] Оживлённая волшебная палочка",
        "url": "https://dnd.su/bestiary/6123-animated-wand"
    },
    {
        "name": "[0] Оживлённый демиплан",
        "url": "https://dnd.su/bestiary/5748-living-demiplane"
    },
    {
        "name": "[0] Оживлённый посох",
        "url": "https://dnd.su/bestiary/6119-animated-staff"
    },
    {
        "name": "[0] Оживший невидимый слуга",
        "url": "https://dnd.su/bestiary/5384-living-unseen-servant"
    },
    {
        "name": "[0] Олень",
        "url": "https://dnd.su/bestiary/387-deer"
    },
    {
        "name": "[0] Оникс",
        "url": "https://dnd.su/bestiary/8511-onyx"
    },
    {
        "name": "[0] Орен Йогильви",
        "url": "https://dnd.su/bestiary/7781-oren-yogilvy"
    },
    {
        "name": "[0] Орёл",
        "url": "https://dnd.su/bestiary/388-eagle"
    },
    {
        "name": "[0] Осьминог",
        "url": "https://dnd.su/bestiary/389-octopus"
    },
    {
        "name": "[0] Отовир",
        "url": "https://dnd.su/bestiary/7782-othovir"
    },
    {
        "name": "[1/8] Орок",
        "url": "https://dnd.su/bestiary/7730-orok"
    },
    {
        "name": "[1/8] Оронд Гролхунд",
        "url": "https://dnd.su/bestiary/5347-orond-gralhund"
    },
    {
        "name": "[1/8] Отт Стилтоз",
        "url": "https://dnd.su/bestiary/5349-ott-steeltoes"
    },
    {
        "name": "[1/8] Охотник на акул",
        "url": "https://dnd.su/bestiary/7435-shark-hunter"
    },
    {
        "name": "[1/4] Оживлённая алебарда",
        "url": "https://dnd.su/bestiary/4677-animated-halberd"
    },
    {
        "name": "[1/4] Оживлённая метла",
        "url": "https://dnd.su/bestiary/5010-animated-broom"
    },
    {
        "name": "[1/4] Оживлённая метла атаки",
        "url": "https://dnd.su/bestiary/953-broom-of-animated-attack"
    },
    {
        "name": "[1/4] Оживлённый нож",
        "url": "https://dnd.su/bestiary/7447-animated-knife"
    },
    {
        "name": "[1/4] Отто Белвью",
        "url": "https://dnd.su/bestiary/4775-otto-belview"
    },
    {
        "name": "[1/2] Огненный страж",
        "url": "https://dnd.su/bestiary/17317-scorchbringer-guard"
    },
    {
        "name": "[1/2] Огненный тритон воин",
        "url": "https://dnd.su/bestiary/6749-firenewt-warrior"
    },
    {
        "name": "[1/2] Одуванчик Амидор",
        "url": "https://dnd.su/bestiary/8437-amidor-the-dandelion"
    },
    {
        "name": "[1/2] Океанус",
        "url": "https://dnd.su/bestiary/7566-oceanus"
    },
    {
        "name": "[1/2] Олара",
        "url": "https://dnd.su/bestiary/7879-olara"
    },
    {
        "name": "[1/2] Орк",
        "url": "https://dnd.su/bestiary/20-orc"
    },
    {
        "name": "[1/2] Орк вскормленный Юртруса",
        "url": "https://dnd.su/bestiary/569-orc-nurtured-one-of-yurtrus"
    },
    {
        "name": "[1/2] Отсечённая тень",
        "url": "https://dnd.su/bestiary/8387-detached-shadow"
    },
    {
        "name": "[1/2] Охотничий дрейк",
        "url": "https://dnd.su/bestiary/1257-ambush-drake"
    },
    {
        "name": "[1] Огненная змея",
        "url": "https://dnd.su/bestiary/279-fire-snake"
    },
    {
        "name": "[1] Огненный тритон колдун Имикса",
        "url": "https://dnd.su/bestiary/6748-firenewt-warlock-of-imix"
    },
    {
        "name": "[1] Оживлённая окованная библиотека",
        "url": "https://dnd.su/bestiary/5011-animated-chained-library"
    },
    {
        "name": "[1] Оживлённая статуя дроу",
        "url": "https://dnd.su/bestiary/5824-animated-drow-statue"
    },
    {
        "name": "[1] Оживлённая стеклянная статуя",
        "url": "https://dnd.su/bestiary/7874-animated-glass-statue"
    },
    {
        "name": "[1] Оживлённый доспех",
        "url": "https://dnd.su/bestiary/35-animated-armor"
    },
    {
        "name": "[1] Ожившие огненные ладони",
        "url": "https://dnd.su/bestiary/4982-living-burning-hands"
    },
    {
        "name": "[1] Окаменевший (Камнеклятый)",
        "url": "https://dnd.su/bestiary/7037-stone-cursed"
    },
    {
        "name": "[1] Оловянный солдатик",
        "url": "https://dnd.su/bestiary/8392-tin-soldier"
    },
    {
        "name": "[1] Орвекс Окраммус",
        "url": "https://dnd.su/bestiary/6061-orvex-ocrammas"
    },
    {
        "name": "[1] Отражающая варгулья",
        "url": "https://dnd.su/bestiary/13138-vargouille-reflection"
    },
    {
        "name": "[2] Обайя Удэй",
        "url": "https://dnd.su/bestiary/5345-obaya-uday"
    },
    {
        "name": "[2] Огр",
        "url": "https://dnd.su/bestiary/19-ogre"
    },
    {
        "name": "[2] Огр болтомёт",
        "url": "https://dnd.su/bestiary/6913-ogre-bolt-launcher"
    },
    {
        "name": "[2] Огр зомби",
        "url": "https://dnd.su/bestiary/324-ogre-zombie"
    },
    {
        "name": "[2] Огр паланкин",
        "url": "https://dnd.su/bestiary/6915-ogre-howdah"
    },
    {
        "name": "[2] Огр-падальщик",
        "url": "https://dnd.su/bestiary/6175-carrion-ogre"
    },
    {
        "name": "[2] Огромное щупальце",
        "url": "https://dnd.su/bestiary/8506-enormous-tentacle"
    },
    {
        "name": "[2] Оддлвин",
        "url": "https://dnd.su/bestiary/13249-oddlewin"
    },
    {
        "name": "[2] Оживлённая баллиста",
        "url": "https://dnd.su/bestiary/5472-animated-ballista"
    },
    {
        "name": "[2] Оживлённый стол",
        "url": "https://dnd.su/bestiary/8550-animated-table"
    },
    {
        "name": "[2] Оккультист послушник",
        "url": "https://dnd.su/bestiary/7859-occult-initiate"
    },
    {
        "name": "[2] Оллин",
        "url": "https://dnd.su/bestiary/8540-ollin"
    },
    {
        "name": "[2] Орейот",
        "url": "https://dnd.su/bestiary/4934-oreioth"
    },
    {
        "name": "[2] Орк коготь Лутик",
        "url": "https://dnd.su/bestiary/571-orc-claw-of-luthic"
    },
    {
        "name": "[2] Орк око Груумша",
        "url": "https://dnd.su/bestiary/259-orc-eye-of-gruumsh"
    },
    {
        "name": "[2] Орк рука Юртруса",
        "url": "https://dnd.su/bestiary/573-orc-hand-of-yurtrus"
    },
    {
        "name": "[2] Орог",
        "url": "https://dnd.su/bestiary/260-orog"
    },
    {
        "name": "[2] Ортемей Быстрая и Тёмная",
        "url": "https://dnd.su/bestiary/6060-ortimay-swift-and-dark"
    },
    {
        "name": "[2] Охотничья акула",
        "url": "https://dnd.su/bestiary/390-hunter-shark"
    },
    {
        "name": "[3] Огр повелитель крыс",
        "url": "https://dnd.su/bestiary/17352-ogre-chitterlord"
    },
    {
        "name": "[3] Огр цепной громила",
        "url": "https://dnd.su/bestiary/6914-ogre-chain-brute"
    },
    {
        "name": "[3] Одноглазый содрогатель",
        "url": "https://dnd.su/bestiary/4924-one-eyed-shiver"
    },
    {
        "name": "[3] Оживленный гроб",
        "url": "https://dnd.su/bestiary/13213-animated-coffin"
    },
    {
        "name": "[3] Оживлённая печь",
        "url": "https://dnd.su/bestiary/6122-animated-stove"
    },
    {
        "name": "[3] Орк красный клык Шаргааса",
        "url": "https://dnd.su/bestiary/572-orc-red-fang-of-shargaas"
    },
    {
        "name": "[3] Отпрыск глубин",
        "url": "https://dnd.su/bestiary/6585-deep-scion"
    },
    {
        "name": "[3] Отто",
        "url": "https://dnd.su/bestiary/6215-otto"
    },
    {
        "name": "[3] Отшельник Талоса",
        "url": "https://dnd.su/bestiary/7908-anchorite-of-talos"
    },
    {
        "name": "[3] Офицер Драконьей армии",
        "url": "https://dnd.su/bestiary/10576-dragon-army-officer"
    },
    {
        "name": "[3] Охотник на дракона",
        "url": "https://dnd.su/bestiary/8491-dragon-hunter"
    },
    {
        "name": "[4] Огр таран",
        "url": "https://dnd.su/bestiary/6902-ogre-battering-ram"
    },
    {
        "name": "[4] Оживлённая длань Бигби",
        "url": "https://dnd.su/bestiary/5745-living-bigbys-hand"
    },
    {
        "name": "[4] Оракул",
        "url": "https://dnd.su/bestiary/7200-oracle"
    },
    {
        "name": "[4] Ореада",
        "url": "https://dnd.su/bestiary/7163-oread"
    },
    {
        "name": "[4] Орк исчадие",
        "url": "https://dnd.su/bestiary/7872-fiendish-orc"
    },
    {
        "name": "[4] Орк клинок Илневала",
        "url": "https://dnd.su/bestiary/570-orc-blade-of-ilneval"
    },
    {
        "name": "[4] Ослеплённый тролль",
        "url": "https://dnd.su/bestiary/5108-blinded-troll"
    },
    {
        "name": "[4] Оттокент",
        "url": "https://dnd.su/bestiary/7567-othokent"
    },
    {
        "name": "[5] Облитерос",
        "url": "https://dnd.su/bestiary/5346-obliteros"
    },
    {
        "name": "[5] Обречённый сотрясатель",
        "url": "https://dnd.su/bestiary/13199-fated-shaker"
    },
    {
        "name": "[5] Огненный элементаль",
        "url": "https://dnd.su/bestiary/143-fire-elemental"
    },
    {
        "name": "[5] Оживлённая железная статуя",
        "url": "https://dnd.su/bestiary/7517-living-iron-statue"
    },
    {
        "name": "[5] Ожившая молния",
        "url": "https://dnd.su/bestiary/4983-living-lightning-bolt"
    },
    {
        "name": "[5] Омин Дран",
        "url": "https://dnd.su/bestiary/7461-omin-dran"
    },
    {
        "name": "[5] Отидж",
        "url": "https://dnd.su/bestiary/261-otyugh"
    },
    {
        "name": "[5] Отродье Кьюсса",
        "url": "https://dnd.su/bestiary/7029-spawn-of-kyuss"
    },
    {
        "name": "[5] Охотник на магов",
        "url": "https://dnd.su/bestiary/8083-mage-hunter"
    },
    {
        "name": "[6] Оживлённая броня Страда",
        "url": "https://dnd.su/bestiary/955-strahds-animated-armor"
    },
    {
        "name": "[6] Оживлённая хрустальная статуя минотавра",
        "url": "https://dnd.su/bestiary/7535-minotaur-living-crystal-statue"
    },
    {
        "name": "[6] Оживлённое дыхание",
        "url": "https://dnd.su/bestiary/6293-animated-breath"
    },
    {
        "name": "[6] Отверженный",
        "url": "https://dnd.su/bestiary/10162-foresworn"
    },
    {
        "name": "[6] Отголосок Демогоргона",
        "url": "https://dnd.su/bestiary/12097-echo-of-demogorgon"
    },
    {
        "name": "[6] Отродье драконьей плоти",
        "url": "https://dnd.su/bestiary/6336-dragonflesh-abomination"
    },
    {
        "name": "[7] Огненный кулак",
        "url": "https://dnd.su/bestiary/17302-firefist"
    },
    {
        "name": "[7] Огненный элементальный мирмидон",
        "url": "https://dnd.su/bestiary/6745-fire-elemental-myrmidon"
    },
    {
        "name": "[7] Ожившее облако смерти",
        "url": "https://dnd.su/bestiary/4984-living-cloudkill"
    },
    {
        "name": "[7] Они",
        "url": "https://dnd.su/bestiary/254-oni"
    },
    {
        "name": "[7] Отродье юань-ти",
        "url": "https://dnd.su/bestiary/317-yuan-ti-abomination"
    },
    {
        "name": "[8] Огромная серая слизь",
        "url": "https://dnd.su/bestiary/6163-huge-gray-ooze"
    },
    {
        "name": "[8] Оживлённый клинок разрушения",
        "url": "https://dnd.su/bestiary/5746-living-blade-of-disaster"
    },
    {
        "name": "[8] Оккультист златоуст",
        "url": "https://dnd.su/bestiary/7860-occult-silvertongue"
    },
    {
        "name": "[8] Освальдо Кассалантер",
        "url": "https://dnd.su/bestiary/5348-osvaldo-cassalanter"
    },
    {
        "name": "[8] Осквернённый аватар Лару",
        "url": "https://dnd.su/bestiary/5017-corrupted-avatar-of-lurue"
    },
    {
        "name": "[9] Облачный великан",
        "url": "https://dnd.su/bestiary/167-cloud-giant"
    },
    {
        "name": "[9] Огненный великан",
        "url": "https://dnd.su/bestiary/168-fire-giant"
    },
    {
        "name": "[9] Одинокий угнетённый",
        "url": "https://dnd.su/bestiary/7026-lonely-sorrowsworn"
    },
    {
        "name": "[9] Оживлённое дерево",
        "url": "https://dnd.su/bestiary/7429-animated-tree"
    },
    {
        "name": "[9] Ориль (Первая форма)",
        "url": "https://dnd.su/bestiary/5724-auril-first-form"
    },
    {
        "name": "[9] Осквернённая гигантская акула",
        "url": "https://dnd.su/bestiary/7824-corrupted-giant-shark"
    },
    {
        "name": "[9] Отвратительный йети",
        "url": "https://dnd.su/bestiary/316-abominable-yeti"
    },
    {
        "name": "[9] Отвратительный йети Алловака",
        "url": "https://dnd.su/bestiary/7421-allowak-abominable-yeti"
    },
    {
        "name": "[10] Огненный великан Злого огня",
        "url": "https://dnd.su/bestiary/11833-fire-giant-of-evil-fire"
    },
    {
        "name": "[10] Ориль (Вторая форма)",
        "url": "https://dnd.su/bestiary/5726-auril-second-form"
    },
    {
        "name": "[10] Ортон",
        "url": "https://dnd.su/bestiary/6924-orthon"
    },
    {
        "name": "[10] Осенний эладрин",
        "url": "https://dnd.su/bestiary/6725-autumn-eladrin"
    },
    {
        "name": "[10] Охранная нага",
        "url": "https://dnd.su/bestiary/251-guardian-naga"
    },
    {
        "name": "[11] Объятия смерти",
        "url": "https://dnd.su/bestiary/7827-death-embrace"
    },
    {
        "name": "[11] Огненные живые мощи",
        "url": "https://dnd.su/bestiary/12116-firegaunt"
    },
    {
        "name": "[11] Огненный геллион",
        "url": "https://dnd.su/bestiary/12122-fire-hellion"
    },
    {
        "name": "[11] Оживлённая статуя Лолс",
        "url": "https://dnd.su/bestiary/6120-animated-statue-of-lolth"
    },
    {
        "name": "[11] Ориль (Третья форма)",
        "url": "https://dnd.su/bestiary/5728-auril-third-form"
    },
    {
        "name": "[11] Очаровательный лазутчик",
        "url": "https://dnd.su/bestiary/13235-enchanting-infiltrator"
    },
    {
        "name": "[12] Облачный великан Злого воздуха",
        "url": "https://dnd.su/bestiary/12067-cloud-giant-of-evil-air"
    },
    {
        "name": "[12] Огнегривый ангел",
        "url": "https://dnd.su/bestiary/1898-firemane-angel"
    },
    {
        "name": "[12] Ожившая статуя архимага",
        "url": "https://dnd.su/bestiary/6207-animated-archmage-statue"
    },
    {
        "name": "[12] Ойнолот",
        "url": "https://dnd.su/bestiary/6916-oinoloth"
    },
    {
        "name": "[12] Охотник Бафомета",
        "url": "https://dnd.su/bestiary/12257-stalker-of-baphomet"
    },
    {
        "name": "[15] Окутанный великан смерти",
        "url": "https://dnd.su/bestiary/12091-death-giant-shrouded-one"
    },
    {
        "name": "[15] Оракул Стриксхейвена",
        "url": "https://dnd.su/bestiary/8113-oracle-of-strixhaven"
    },
    {
        "name": "[15] Отражение Илвааша",
        "url": "https://dnd.su/bestiary/13955-refraction-of-ilvaash"
    },
    {
        "name": "[18] Огненный великан Вестник кузни",
        "url": "https://dnd.su/bestiary/11832-fire-giant-forgecaller"
    },
    {
        "name": "[18] Ольгидра",
        "url": "https://dnd.su/bestiary/4937-olhydra"
    },
    {
        "name": "[18] Осадный паук",
        "url": "https://dnd.su/bestiary/15693-citadel-spider"
    },
    {
        "name": "[19] Облачный великан играющий с судьбой",
        "url": "https://dnd.su/bestiary/12066-cloud-giant-destiny-gambler"
    },
    {
        "name": "[20] Огремох",
        "url": "https://dnd.su/bestiary/4936-ogremoch"
    },
    {
        "name": "[21] Орак Стойкий",
        "url": "https://dnd.su/bestiary/7433-oracs-the-enduring"
    },
    {
        "name": "[22] Отпрыск Гролантора",
        "url": "https://dnd.su/bestiary/12283-scion-of-grolantor"
    },
    {
        "name": "[23] Отпрыск Скорауса",
        "url": "https://dnd.su/bestiary/12287-scion-of-skoraeus"
    },
    {
        "name": "[24] Отпрыск Трима",
        "url": "https://dnd.su/bestiary/12297-scion-of-thrym"
    },
    {
        "name": "[25] Отпрыск Суртура",
        "url": "https://dnd.su/bestiary/12294-scion-of-surtur"
    },
    {
        "name": "[26] Оркус",
        "url": "https://dnd.su/bestiary/6917-orcus"
    },
    {
        "name": "[26] Отпрыск Мемнора",
        "url": "https://dnd.su/bestiary/12285-scion-of-memnor"
    },
    {
        "name": "[27] Отпрыск Стронмауса",
        "url": "https://dnd.su/bestiary/12290-scion-of-stronmaus"
    },
    {
        "name": "[0] Осадная башня",
        "url": "https://dnd.su/bestiary/8974-siege-tower"
    },
    {
        "name": "[0] Павлин",
        "url": "https://dnd.su/bestiary/6449-peacock"
    },
    {
        "name": "[0] Паук",
        "url": "https://dnd.su/bestiary/392-spider"
    },
    {
        "name": "[0] Петух",
        "url": "https://dnd.su/bestiary/8532-rooster"
    },
    {
        "name": "[0] Пикколо",
        "url": "https://dnd.su/bestiary/4673-piccolo"
    },
    {
        "name": "[0] Полевик",
        "url": "https://dnd.su/bestiary/8366-campestri"
    },
    {
        "name": "[0] Ползающая рука",
        "url": "https://dnd.su/bestiary/58-crawling-claw"
    },
    {
        "name": "[0] Поющие вместе",
        "url": "https://dnd.su/bestiary/6199-sing-along"
    },
    {
        "name": "[0] Пробужденный куст",
        "url": "https://dnd.su/bestiary/397-awakened-shrub"
    },
    {
        "name": "[0] Пробуждённая крыса",
        "url": "https://dnd.su/bestiary/5104-awakened-rat"
    },
    {
        "name": "[1/8] Подружка невесты Заггтмой",
        "url": "https://dnd.su/bestiary/5846-bridesmaid-of-zuggtmoy"
    },
    {
        "name": "[1/8] Подручный Сумеречного света (Маленький)",
        "url": "https://dnd.su/bestiary/8428-witchlight-hand-small"
    },
    {
        "name": "[1/8] Подручный Сумеречного света (Средний)",
        "url": "https://dnd.su/bestiary/8395-witchlight-hand-medium"
    },
    {
        "name": "[1/8] Пони",
        "url": "https://dnd.su/bestiary/395-pony"
    },
    {
        "name": "[1/8] Послушник Воющей Ненависти",
        "url": "https://dnd.su/bestiary/3653-howling-hatred-initiate"
    },
    {
        "name": "[1/8] Проворный посыльный",
        "url": "https://dnd.su/bestiary/1682-expeditious-messenger"
    },
    {
        "name": "[1/4] Пантера",
        "url": "https://dnd.su/bestiary/391-panther"
    },
    {
        "name": "[1/4] Паровой мефит",
        "url": "https://dnd.su/bestiary/233-steam-mephit"
    },
    {
        "name": "[1/4] Пепельный зомби",
        "url": "https://dnd.su/bestiary/8034-ash-zombie"
    },
    {
        "name": "[1/4] Пепельный летающий меч",
        "url": "https://dnd.su/bestiary/12704-ashen-flying-sword"
    },
    {
        "name": "[1/4] Пещерный барсук",
        "url": "https://dnd.su/bestiary/5825-cave-badger"
    },
    {
        "name": "[1/4] Пидлуик II",
        "url": "https://dnd.su/bestiary/957-pidlwick-ii"
    },
    {
        "name": "[1/4] Пикси",
        "url": "https://dnd.su/bestiary/265-pixie"
    },
    {
        "name": "[1/4] Плазмоид-исследователь",
        "url": "https://dnd.su/bestiary/8855-plasmoid-explorer"
    },
    {
        "name": "[1/4] Побрякушка Джангл",
        "url": "https://dnd.su/bestiary/8439-jingle-jangle"
    },
    {
        "name": "[1/4] Полевой медик",
        "url": "https://dnd.su/bestiary/17304-frontline-medic"
    },
    {
        "name": "[1/4] Полукровка",
        "url": "https://dnd.su/bestiary/958-mongrelfolk"
    },
    {
        "name": "[1/4] Порождение облекса",
        "url": "https://dnd.su/bestiary/6887-oblex-spawn"
    },
    {
        "name": "[1/4] Прислужник",
        "url": "https://dnd.su/bestiary/438-acolyte"
    },
    {
        "name": "[1/4] Пробуждённый лось",
        "url": "https://dnd.su/bestiary/6140-awakened-elk"
    },
    {
        "name": "[1/4] Псевдодракон",
        "url": "https://dnd.su/bestiary/266-pseudodragon"
    },
    {
        "name": "[1/4] Птеранодон",
        "url": "https://dnd.su/bestiary/92-pteranodon"
    },
    {
        "name": "[1/4] Птеранодон зомби",
        "url": "https://dnd.su/bestiary/5998-pteranodon-zombie"
    },
    {
        "name": "[1/2] Пепельный боевой конь",
        "url": "https://dnd.su/bestiary/12705-ashen-warhorse"
    },
    {
        "name": "[1/2] Первокурсник",
        "url": "https://dnd.su/bestiary/8061-first-year-student"
    },
    {
        "name": "[1/2] Пиратский боцман",
        "url": "https://dnd.su/bestiary/7538-pirate-bosun"
    },
    {
        "name": "[1/2] Поросёнок трясущий задом",
        "url": "https://dnd.su/bestiary/8044-piggy-wiggle-butt"
    },
    {
        "name": "[1/2] Преследователь с Кольца руин",
        "url": "https://dnd.su/bestiary/10546-rubblebelt-stalker"
    },
    {
        "name": "[1/2] Принц Ливид",
        "url": "https://dnd.su/bestiary/5914-prince-livid"
    },
    {
        "name": "[1/2] Пробуждённая гигантская оса",
        "url": "https://dnd.su/bestiary/6141-awakened-giant-wasp"
    },
    {
        "name": "[1/2] Пронзатель",
        "url": "https://dnd.su/bestiary/264-piercer"
    },
    {
        "name": "[1/2] Пряничный человечек",
        "url": "https://dnd.su/bestiary/17341-gingerbrute"
    },
    {
        "name": "[1/2] Психическая серая слизь",
        "url": "https://dnd.su/bestiary/5913-psychic-gray-ooze"
    },
    {
        "name": "[1/2] Пылевой мефит",
        "url": "https://dnd.su/bestiary/228-dust-mephit"
    },
    {
        "name": "[1] Падальщик порождений ядра",
        "url": "https://dnd.su/bestiary/7268-core-spawn-crawler"
    },
    {
        "name": "[1] Палубный пират волшебник",
        "url": "https://dnd.su/bestiary/7542-pirate-deck-wizard"
    },
    {
        "name": "[1] Пепельный наследник анархист",
        "url": "https://dnd.su/bestiary/8529-ashen-heir-anarchist"
    },
    {
        "name": "[1] Пепельный оживленный доспех",
        "url": "https://dnd.su/bestiary/12706-ashen-animated-armor"
    },
    {
        "name": "[1] Первый помощник пират",
        "url": "https://dnd.su/bestiary/7543-pirate-first-mate"
    },
    {
        "name": "[1] Пиблз",
        "url": "https://dnd.su/bestiary/5908-peebles"
    },
    {
        "name": "[1] Повреждённый мясной голем",
        "url": "https://dnd.su/bestiary/7448-damaged-flesh-golem"
    },
    {
        "name": "[1] Подобие Дазона",
        "url": "https://dnd.su/bestiary/5735-dzaans-simulacrum"
    },
    {
        "name": "[1] Полуогр (Огриллон)",
        "url": "https://dnd.su/bestiary/253-half-ogre-ogrillon"
    },
    {
        "name": "[1] Портрет - страж",
        "url": "https://dnd.su/bestiary/956-guardian-portrait"
    },
    {
        "name": "[1] Пробуждённый бурый медведь",
        "url": "https://dnd.su/bestiary/6139-awakened-brown-bear"
    },
    {
        "name": "[1] Проводник по кампусу Стриксхейвена",
        "url": "https://dnd.su/bestiary/8346-strixhaven-campus-guide"
    },
    {
        "name": "[1] Проклятый холмовой великан",
        "url": "https://dnd.su/bestiary/14170-cursed-hill-giant"
    },
    {
        "name": "[1] Проликс Юсаф",
        "url": "https://dnd.su/bestiary/7886-prolix-yusaf"
    },
    {
        "name": "[1] Псурлон-притворщик",
        "url": "https://dnd.su/bestiary/8859-psurlon-ringer"
    },
    {
        "name": "[1] Птералюд",
        "url": "https://dnd.su/bestiary/997-pterafolk"
    },
    {
        "name": "[1] Пугало",
        "url": "https://dnd.su/bestiary/282-scarecrow"
    },
    {
        "name": "[1] Пёс смерти",
        "url": "https://dnd.su/bestiary/393-death-dog"
    },
    {
        "name": "[2] Панцирная акула",
        "url": "https://dnd.su/bestiary/7552-shell-shark"
    },
    {
        "name": "[2] Парсон Пеллиност",
        "url": "https://dnd.su/bestiary/7458-parson-pellinost"
    },
    {
        "name": "[2] Пахицефалозавр",
        "url": "https://dnd.su/bestiary/5973-pachycephalosaurus"
    },
    {
        "name": "[2] Пахицефалозавр зомби",
        "url": "https://dnd.su/bestiary/5997-pachycephalosaurus-zombie"
    },
    {
        "name": "[2] Пегас",
        "url": "https://dnd.su/bestiary/262-pegasus"
    },
    {
        "name": "[2] Пендрагон Пчелиное жало",
        "url": "https://dnd.su/bestiary/7475-pendragon-beestinger"
    },
    {
        "name": "[2] Пентадрон",
        "url": "https://dnd.su/bestiary/242-pentadrone"
    },
    {
        "name": "[2] Перитон",
        "url": "https://dnd.su/bestiary/263-peryton"
    },
    {
        "name": "[2] Пещерный медведь",
        "url": "https://dnd.su/bestiary/5632-cave-bear"
    },
    {
        "name": "[2] Плезиозавр",
        "url": "https://dnd.su/bestiary/90-plesiosaurus"
    },
    {
        "name": "[2] Плезиозавр зомби",
        "url": "https://dnd.su/bestiary/5999-plesiosaurus-zombie"
    },
    {
        "name": "[2] Повелитель огров Бухфал II",
        "url": "https://dnd.su/bestiary/7449-ogre-lord-buhfal-ii"
    },
    {
        "name": "[2] Пожиратель интеллекта",
        "url": "https://dnd.su/bestiary/205-intellect-devourer"
    },
    {
        "name": "[2] Ползающий падальщик",
        "url": "https://dnd.su/bestiary/51-carrion-crawler"
    },
    {
        "name": "[2] Полтергейст",
        "url": "https://dnd.su/bestiary/5650-poltergeist"
    },
    {
        "name": "[2] Принц Дерендил",
        "url": "https://dnd.su/bestiary/5876-prince-derendil"
    },
    {
        "name": "[2] Пробудившийся зархвуд",
        "url": "https://dnd.su/bestiary/5847-awakened-zurkhwood"
    },
    {
        "name": "[2] Пробужденное дерево",
        "url": "https://dnd.su/bestiary/396-awakened-tree"
    },
    {
        "name": "[2] Пророчица Дран",
        "url": "https://dnd.su/bestiary/7480-prophetess-dran"
    },
    {
        "name": "[2] Противоточный взрывоискатель",
        "url": "https://dnd.su/bestiary/17300-counterflux-blastseeker"
    },
    {
        "name": "[2] Псурлон",
        "url": "https://dnd.su/bestiary/8857-psurlon"
    },
    {
        "name": "[3] Паразит-кукловод",
        "url": "https://dnd.su/bestiary/7692-puppeteer-parasite"
    },
    {
        "name": "[3] Пепельный ветеран",
        "url": "https://dnd.su/bestiary/12708-ashen-veteran"
    },
    {
        "name": "[3] Пепельный наследник ветеран",
        "url": "https://dnd.su/bestiary/8526-ashen-heir-veteran"
    },
    {
        "name": "[3] Пепельный рыцарь",
        "url": "https://dnd.su/bestiary/12707-ashen-knight"
    },
    {
        "name": "[3] Пещерный удильщик",
        "url": "https://dnd.su/bestiary/6492-cave-fisher"
    },
    {
        "name": "[3] Плазмоид-воитель",
        "url": "https://dnd.su/bestiary/8856-plasmoid-warrior"
    },
    {
        "name": "[3] Погибельник умертвие",
        "url": "https://dnd.su/bestiary/6584-deathlock-wight"
    },
    {
        "name": "[3] Полярный волк",
        "url": "https://dnd.su/bestiary/394-winter-wolf"
    },
    {
        "name": "[3] Портентия Дран",
        "url": "https://dnd.su/bestiary/7477-portentia-dran"
    },
    {
        "name": "[3] Превращённый людоящер",
        "url": "https://dnd.su/bestiary/7519-lizardfolk-render"
    },
    {
        "name": "[3] Призрак Мормеска",
        "url": "https://dnd.su/bestiary/21-mormesk-the-wraith"
    },
    {
        "name": "[3] Призрачный воин",
        "url": "https://dnd.su/bestiary/959-phantom-warrior"
    },
    {
        "name": "[3] Пробуждённый белый лось",
        "url": "https://dnd.su/bestiary/5789-awakened-white-moose"
    },
    {
        "name": "[3] Пустотелый Мрачной Клики",
        "url": "https://dnd.su/bestiary/13191-bleak-cabal-void-soother"
    },
    {
        "name": "[3] Пустошная драконнель",
        "url": "https://dnd.su/bestiary/10600-wasteland-dragonnel"
    },
    {
        "name": "[3] Пятнистый лев",
        "url": "https://dnd.su/bestiary/12256-spotted-lion"
    },
    {
        "name": "[4] Паутина памяти",
        "url": "https://dnd.su/bestiary/17229-memory-web"
    },
    {
        "name": "[4] Пич",
        "url": "https://dnd.su/bestiary/15252-pech"
    },
    {
        "name": "[4] Пич",
        "url": "https://dnd.su/bestiary/17230-pech"
    },
    {
        "name": "[4] Подземная акула",
        "url": "https://dnd.su/bestiary/4914-burrowshark"
    },
    {
        "name": "[4] Посвящённый в Комету",
        "url": "https://dnd.su/bestiary/13248-initiate-of-the-comet"
    },
    {
        "name": "[4] Привидение",
        "url": "https://dnd.su/bestiary/164-ghost"
    },
    {
        "name": "[4] Привидение Фиделио",
        "url": "https://dnd.su/bestiary/6173-ghost-of-fidelio"
    },
    {
        "name": "[4] Принцесса Эбонмир",
        "url": "https://dnd.su/bestiary/5912-princess-ebonmire"
    },
    {
        "name": "[4] Проповедник Вестников праха",
        "url": "https://dnd.su/bestiary/13205-heralds-of-dust-remnant"
    },
    {
        "name": "[4] Пылающий череп",
        "url": "https://dnd.su/bestiary/22-flameskull"
    },
    {
        "name": "[5] Панцирница",
        "url": "https://dnd.su/bestiary/48-bulette"
    },
    {
        "name": "[5] Панцирница нежить",
        "url": "https://dnd.su/bestiary/6216-undead-bulette"
    },
    {
        "name": "[5] Парривимпл",
        "url": "https://dnd.su/bestiary/4776-parriwimple"
    },
    {
        "name": "[5] Паук разрушитель",
        "url": "https://dnd.su/bestiary/13297-ruin-spider"
    },
    {
        "name": "[5] Паукодемон каккуу",
        "url": "https://dnd.su/bestiary/15713-kakkuu-spyder-fiend"
    },
    {
        "name": "[5] Пепельная ползающая насыпь",
        "url": "https://dnd.su/bestiary/12709-ashen-shambling-mound"
    },
    {
        "name": "[5] Плюющийся мимик",
        "url": "https://dnd.su/bestiary/5756-spitting-mimic"
    },
    {
        "name": "[5] Ползающая насыпь",
        "url": "https://dnd.su/bestiary/284-shambling-mound"
    },
    {
        "name": "[5] Ползающая насыпь зомби",
        "url": "https://dnd.su/bestiary/6121-undead-shambling-mound"
    },
    {
        "name": "[5] Порождение аболета",
        "url": "https://dnd.su/bestiary/7883-aboleth-spawn"
    },
    {
        "name": "[5] Порождение вампира",
        "url": "https://dnd.su/bestiary/308-vampire-spawn"
    },
    {
        "name": "[5] Поточный взрывоискатель",
        "url": "https://dnd.su/bestiary/17303-flux-blastseeker"
    },
    {
        "name": "[5] Призрак",
        "url": "https://dnd.su/bestiary/312-wraith"
    },
    {
        "name": "[5] Призрак кошмаров",
        "url": "https://dnd.su/bestiary/17351-nightmare-haunt"
    },
    {
        "name": "[5] Проницательная Акура",
        "url": "https://dnd.su/bestiary/7875-insight-acuere"
    },
    {
        "name": "[5] Пустой Атар",
        "url": "https://dnd.su/bestiary/13190-athar-null"
    },
    {
        "name": "[5] Пылевой скиталец",
        "url": "https://dnd.su/bestiary/12096-dust-hulk"
    },
    {
        "name": "[5] Пыльный дьявол",
        "url": "https://dnd.su/bestiary/5696-dust-devil"
    },
    {
        "name": "[6] Пасть Гролантора",
        "url": "https://dnd.su/bestiary/6845-mouth-of-grolantor"
    },
    {
        "name": "[6] Пау Минь",
        "url": "https://dnd.su/bestiary/7767-pow-ming"
    },
    {
        "name": "[6] Пепельный наследник маг",
        "url": "https://dnd.su/bestiary/8527-ashen-heir-mage"
    },
    {
        "name": "[6] Подземная медуза",
        "url": "https://dnd.su/bestiary/17287-undercity-medusa"
    },
    {
        "name": "[6] Пожиратель знаний",
        "url": "https://dnd.su/bestiary/13096-eater-of-knowledge"
    },
    {
        "name": "[6] Пожиратель надежды",
        "url": "https://dnd.su/bestiary/7182-eater-of-hope"
    },
    {
        "name": "[6] Пожиратель света",
        "url": "https://dnd.su/bestiary/7828-light-devourer"
    },
    {
        "name": "[6] Предвестник гибели",
        "url": "https://dnd.su/bestiary/6864-gallows-speaker"
    },
    {
        "name": "[6] Привидение Нэсс Лантомир",
        "url": "https://dnd.su/bestiary/5737-nass-lantomirs-ghost"
    },
    {
        "name": "[6] Прита Крипа",
        "url": "https://dnd.su/bestiary/6222-preeta-kreepa"
    },
    {
        "name": "[6] Псурлон-лидер",
        "url": "https://dnd.su/bestiary/8858-psurlon-leader"
    },
    {
        "name": "[7] Пасть Секолы",
        "url": "https://dnd.su/bestiary/7564-maw-of-sekolah"
    },
    {
        "name": "[7] Пепельный скиталец",
        "url": "https://dnd.su/bestiary/11830-cinder-hulk"
    },
    {
        "name": "[7] Пожиратель снов",
        "url": "https://dnd.su/bestiary/10287-dream-eater"
    },
    {
        "name": "[7] Потоконагнетатель",
        "url": "https://dnd.su/bestiary/17269-fluxcharger"
    },
    {
        "name": "[7] Профессор порядка Лорхолда",
        "url": "https://dnd.su/bestiary/8077-lorehold-professor-of-order"
    },
    {
        "name": "[7] Профессор роста Визерблума",
        "url": "https://dnd.su/bestiary/8353-witherbloom-professor-of-growth"
    },
    {
        "name": "[7] Профессор сияния Сильверквилла",
        "url": "https://dnd.su/bestiary/8344-silverquill-professor-of-radiance"
    },
    {
        "name": "[7] Профессор совершенства Призмари",
        "url": "https://dnd.su/bestiary/8316-prismari-professor-of-perfection"
    },
    {
        "name": "[7] Профессор сущности Квандрикса",
        "url": "https://dnd.su/bestiary/8323-quandrix-professor-of-substance"
    },
    {
        "name": "[7] Профессор теней Сильверквилла",
        "url": "https://dnd.su/bestiary/8345-silverquill-professor-of-shadow"
    },
    {
        "name": "[7] Профессор теории Квандрикса",
        "url": "https://dnd.su/bestiary/8324-quandrix-professor-of-theory"
    },
    {
        "name": "[7] Профессор увядания Визерблума",
        "url": "https://dnd.su/bestiary/8352-witherbloom-professor-of-decay"
    },
    {
        "name": "[7] Профессор хаоса Лорхолда",
        "url": "https://dnd.su/bestiary/8082-lorehold-professor-of-chaos"
    },
    {
        "name": "[7] Профессор экспрессии Призмари",
        "url": "https://dnd.su/bestiary/8315-prismari-professor-of-expression"
    },
    {
        "name": "[7] Псионический пепельник",
        "url": "https://dnd.su/bestiary/12496-psionic-ashenwight"
    },
    {
        "name": "[8] Палома",
        "url": "https://dnd.su/bestiary/8541-paloma"
    },
    {
        "name": "[8] Пепельный наследник наёмный убийца",
        "url": "https://dnd.su/bestiary/8528-ashen-heir-assassin"
    },
    {
        "name": "[8] Плащевик",
        "url": "https://dnd.su/bestiary/55-cloaker"
    },
    {
        "name": "[8] Плащевик Апотеона",
        "url": "https://dnd.su/bestiary/7884-apotheons-cloaker"
    },
    {
        "name": "[8] Полководец призраков меча",
        "url": "https://dnd.su/bestiary/7042-sword-wraith-commander"
    },
    {
        "name": "[8] Призрак Обзедат",
        "url": "https://dnd.su/bestiary/17324-obzedat-ghost"
    },
    {
        "name": "[8] Принц Зелет",
        "url": "https://dnd.su/bestiary/9267-prince-xeleth"
    },
    {
        "name": "[8] Принцепс Ковик",
        "url": "https://dnd.su/bestiary/6429-princeps-kovik"
    },
    {
        "name": "[8] Принцесса Зедалли",
        "url": "https://dnd.su/bestiary/9264-princess-xedalli"
    },
    {
        "name": "[8] Проводник Совершенного ордена",
        "url": "https://dnd.su/bestiary/13210-transcendent-order-conduit"
    },
    {
        "name": "[8] Пятирукий тролль",
        "url": "https://dnd.su/bestiary/6195-five-armed-troll"
    },
    {
        "name": "[9] Портия Дзут",
        "url": "https://dnd.su/bestiary/6164-portia-dzuth"
    },
    {
        "name": "[9] Привидение Греморли",
        "url": "https://dnd.su/bestiary/13251-gremorlys-ghost"
    },
    {
        "name": "[9] Привидение облачного великана",
        "url": "https://dnd.su/bestiary/5015-cloud-giant-ghost"
    },
    {
        "name": "[10] Пасть Йеногу",
        "url": "https://dnd.su/bestiary/12248-maw-of-yeenoghu"
    },
    {
        "name": "[10] Перигей",
        "url": "https://dnd.su/bestiary/7899-perigee"
    },
    {
        "name": "[10] Повелитель слизи",
        "url": "https://dnd.su/bestiary/17440-ooze-master"
    },
    {
        "name": "[10] Поцелуй смерти",
        "url": "https://dnd.su/bestiary/6581-death-kiss"
    },
    {
        "name": "[11] Пастырь кошмаров",
        "url": "https://dnd.su/bestiary/7183-nightmare-shepherd"
    },
    {
        "name": "[11] Паукодракон",
        "url": "https://dnd.su/bestiary/15712-spiderdragon"
    },
    {
        "name": "[11] Пустотный поглотитель",
        "url": "https://dnd.su/bestiary/8869-void-scavver"
    },
    {
        "name": "[12] Патрина Великовна",
        "url": "https://dnd.su/bestiary/4777-patrina-velikovna"
    },
    {
        "name": "[12] Породитель безумия",
        "url": "https://dnd.su/bestiary/8935-sire-of-insanity"
    },
    {
        "name": "[12] Призрак ночи",
        "url": "https://dnd.su/bestiary/17356-specter-of-night"
    },
    {
        "name": "[13] Паукодемон фисаразу",
        "url": "https://dnd.su/bestiary/15714-phisarazu-spyder-fiend"
    },
    {
        "name": "[13] Пери",
        "url": "https://dnd.su/bestiary/8408-pari"
    },
    {
        "name": "[13] Пиллия Равеноса",
        "url": "https://dnd.su/bestiary/7414-pillia-ravenosa"
    },
    {
        "name": "[13] Пожиратель",
        "url": "https://dnd.su/bestiary/6597-devourer"
    },
    {
        "name": "[13] Призрачное облако",
        "url": "https://dnd.su/bestiary/12254-spectral-cloud"
    },
    {
        "name": "[13] Провидец звёздных порождений",
        "url": "https://dnd.su/bestiary/7035-star-spawn-seer"
    },
    {
        "name": "[13] Провидец порождений ядра",
        "url": "https://dnd.su/bestiary/7270-core-spawn-seer"
    },
    {
        "name": "[14] Поглотитель дыхания",
        "url": "https://dnd.su/bestiary/13255-breath-drinker"
    },
    {
        "name": "[15] Паук-астероид",
        "url": "https://dnd.su/bestiary/7685-asteroid-spider"
    },
    {
        "name": "[15] Потусторонний лич",
        "url": "https://dnd.su/bestiary/7687-eldritch-lich"
    },
    {
        "name": "[16] Пепельная наездница",
        "url": "https://dnd.su/bestiary/7173-ashen-rider"
    },
    {
        "name": "[16] Планетар",
        "url": "https://dnd.su/bestiary/33-planetar"
    },
    {
        "name": "[17] Паукодемон каувилитку",
        "url": "https://dnd.su/bestiary/15715-quavilithku-spyder-fiend"
    },
    {
        "name": "[17] Потусторонний развратитель",
        "url": "https://dnd.su/bestiary/13236-otherworldly-corrupter"
    },
    {
        "name": "[17] Призрачный дракон",
        "url": "https://dnd.su/bestiary/6344-ghost-dragon"
    },
    {
        "name": "[18] Полый дракон",
        "url": "https://dnd.su/bestiary/6348-hollow-dragon"
    },
    {
        "name": "[19] Паукодемон раклюпис",
        "url": "https://dnd.su/bestiary/15716-raklupis-spyder-fiend"
    },
    {
        "name": "[19] Поликран",
        "url": "https://dnd.su/bestiary/7196-polukranos"
    },
    {
        "name": "[21] Пазродин",
        "url": "https://dnd.su/bestiary/13250-pazrodine"
    },
    {
        "name": "[22] Планарное воплощение",
        "url": "https://dnd.su/bestiary/13119-planar-incarnate"
    },
    {
        "name": "[24] Паук-волк Миска",
        "url": "https://dnd.su/bestiary/15726-miska-the-wolf-spider"
    },
    {
        "name": "[0] Пародрак",
        "url": "https://dnd.su/bestiary/10619-boilerdrak"
    },
    {
        "name": "[0] Подвешенный котёл",
        "url": "https://dnd.su/bestiary/8972-suspended-cauldron"
    },
    {
        "name": "[0] Пушка",
        "url": "https://dnd.su/bestiary/3315-cannon"
    },
    {
        "name": "[0] Раздутый труп",
        "url": "https://dnd.su/bestiary/4694-distended-corpse"
    },
    {
        "name": "[0] Росток миконида",
        "url": "https://dnd.su/bestiary/245-myconid-sprout"
    },
    {
        "name": "[0] Рыба",
        "url": "https://dnd.su/bestiary/7505-fish"
    },
    {
        "name": "[0] Рыба-печаль",
        "url": "https://dnd.su/bestiary/7865-sorrowfish"
    },
    {
        "name": "[1/8] Разбойник",
        "url": "https://dnd.su/bestiary/437-bandit"
    },
    {
        "name": "[1/8] Разбойник Вистани",
        "url": "https://dnd.su/bestiary/4805-vistana-bandit"
    },
    {
        "name": "[1/8] Регхедский воитель",
        "url": "https://dnd.su/bestiary/5762-reghed-warrior"
    },
    {
        "name": "[1/8] Редуктор",
        "url": "https://dnd.su/bestiary/17385-gearbox"
    },
    {
        "name": "[1/8] Рейгрин Мау",
        "url": "https://dnd.su/bestiary/7459-raegrin-mau"
    },
    {
        "name": "[1/8] Рыцарь Чёрного меча (культист)",
        "url": "https://dnd.su/bestiary/5796-knight-of-the-black-sword-cultist"
    },
    {
        "name": "[1/4] Рой Немиколоптеров",
        "url": "https://dnd.su/bestiary/5972-swarm-of-nemicolopterus"
    },
    {
        "name": "[1/4] Рой Немиколоптеров зомби",
        "url": "https://dnd.su/bestiary/5996-swarm-of-nemicolopterus-zombies"
    },
    {
        "name": "[1/4] Рой воронов",
        "url": "https://dnd.su/bestiary/399-swarm-of-ravens"
    },
    {
        "name": "[1/4] Рой книг",
        "url": "https://dnd.su/bestiary/5182-swarm-of-books"
    },
    {
        "name": "[1/4] Рой крыс",
        "url": "https://dnd.su/bestiary/401-swarm-of-rats"
    },
    {
        "name": "[1/4] Рой летучих мышей",
        "url": "https://dnd.su/bestiary/402-swarm-of-bats"
    },
    {
        "name": "[1/4] Рой оживлённых книг",
        "url": "https://dnd.su/bestiary/5070-swarm-of-animated-books"
    },
    {
        "name": "[1/4] Рой ползучих монет",
        "url": "https://dnd.su/bestiary/20456-swarm-of-sreeping-soins"
    },
    {
        "name": "[1/4] Рой чёрных чаек",
        "url": "https://dnd.su/bestiary/7434-swarms-of-black-gulls"
    },
    {
        "name": "[1/4] Роф",
        "url": "https://dnd.su/bestiary/647-rothe"
    },
    {
        "name": "[1/2] Разбойник Сокрушительной Волны",
        "url": "https://dnd.su/bestiary/4925-crushing-wave-reaver"
    },
    {
        "name": "[1/2] Разведчик",
        "url": "https://dnd.su/bestiary/439-scout"
    },
    {
        "name": "[1/2] Разведчик Баровии",
        "url": "https://dnd.su/bestiary/4685-barovian-scout"
    },
    {
        "name": "[1/2] Разведчик Изумрудного Анклава",
        "url": "https://dnd.su/bestiary/5898-emerald-enclave-scout"
    },
    {
        "name": "[1/2] Разведчик дроу",
        "url": "https://dnd.su/bestiary/5894-drow-scout"
    },
    {
        "name": "[1/2] Ржавник",
        "url": "https://dnd.su/bestiary/275-rust-monster"
    },
    {
        "name": "[1/2] Рифовая акула",
        "url": "https://dnd.su/bestiary/398-reef-shark"
    },
    {
        "name": "[1/2] Рой механических пауков",
        "url": "https://dnd.su/bestiary/5183-swarm-of-mechanical-spiders"
    },
    {
        "name": "[1/2] Рой насекомых",
        "url": "https://dnd.su/bestiary/403-swarm-of-insects"
    },
    {
        "name": "[1/2] Рой пауков",
        "url": "https://dnd.su/bestiary/7214-swarm-of-spiders"
    },
    {
        "name": "[1/2] Рой проклятых гоблинов",
        "url": "https://dnd.su/bestiary/14171-swarm-of-cursed-goblins"
    },
    {
        "name": "[1/2] Рой трупных личинок",
        "url": "https://dnd.su/bestiary/6817-swarm-of-rot-grubs"
    },
    {
        "name": "[1/2] Ронт",
        "url": "https://dnd.su/bestiary/5879-ront"
    },
    {
        "name": "[1] Ракдос-исполнитель, жонглер клинками",
        "url": "https://dnd.su/bestiary/17313-rakdos-lampooner-blade-juggler"
    },
    {
        "name": "[1] Ракдос-исполнитель, канатоходец",
        "url": "https://dnd.su/bestiary/17315-rakdos-performer-high-wire-acrobat"
    },
    {
        "name": "[1] Ракдос-исполнитель, пожиратель огня",
        "url": "https://dnd.su/bestiary/17314-rakdos-performer-fire-eater"
    },
    {
        "name": "[1] Регин Кавла",
        "url": "https://dnd.su/bestiary/7420-regin-kavla"
    },
    {
        "name": "[1] Рой квипперов",
        "url": "https://dnd.su/bestiary/400-swarm-of-quippers"
    },
    {
        "name": "[1] Рой конечностей зомби",
        "url": "https://dnd.su/bestiary/6907-swarm-of-zombie-limbs"
    },
    {
        "name": "[1] Рой полевиков",
        "url": "https://dnd.su/bestiary/8369-swarm-of-campestris"
    },
    {
        "name": "[1] Рой солнцекрылов",
        "url": "https://dnd.su/bestiary/13131-swarm-of-sunflies"
    },
    {
        "name": "[1] Рыцарь Бури Перьев",
        "url": "https://dnd.su/bestiary/3654-feathergale-knight"
    },
    {
        "name": "[1] Рэйзил",
        "url": "https://dnd.su/bestiary/8434-raezil"
    },
    {
        "name": "[2] Ракдос-памфлетист",
        "url": "https://dnd.su/bestiary/17312-rakdos-lampooner"
    },
    {
        "name": "[2] Регхедский шаман",
        "url": "https://dnd.su/bestiary/5763-reghed-shaman"
    },
    {
        "name": "[2] Реликтовый ленивец",
        "url": "https://dnd.su/bestiary/8339-relic-sloth"
    },
    {
        "name": "[2] Робот-бочонок",
        "url": "https://dnd.su/bestiary/7487-keg-robot"
    },
    {
        "name": "[2] Рой гремишек",
        "url": "https://dnd.su/bestiary/6866-swarm-of-gremishkas"
    },
    {
        "name": "[2] Рой личинок",
        "url": "https://dnd.su/bestiary/6894-swarm-of-maggots"
    },
    {
        "name": "[2] Рой мёртвых змей",
        "url": "https://dnd.su/bestiary/7460-swarm-of-undead-snakes"
    },
    {
        "name": "[2] Рой скелетов",
        "url": "https://dnd.su/bestiary/7555-skeletal-swarm"
    },
    {
        "name": "[2] Рой сокровищных скарабеев",
        "url": "https://dnd.su/bestiary/6352-swarm-of-hoard-scarabs"
    },
    {
        "name": "[2] Рой ядовитых змей",
        "url": "https://dnd.su/bestiary/404-swarm-of-poisonous-snakes"
    },
    {
        "name": "[2] Росток трента",
        "url": "https://dnd.su/bestiary/8393-treant-sapling"
    },
    {
        "name": "[2] Руттеркин",
        "url": "https://dnd.su/bestiary/6929-rutterkin"
    },
    {
        "name": "[2] Рыцарь Чёрного меча (фанатик культа)",
        "url": "https://dnd.su/bestiary/5797-knight-of-the-black-sword-cult-fanatic"
    },
    {
        "name": "[3] Рабочий робот",
        "url": "https://dnd.su/bestiary/17232-worker-robot"
    },
    {
        "name": "[3] Ренейр Неверембер",
        "url": "https://dnd.su/bestiary/5352-renaer-neverember"
    },
    {
        "name": "[3] Рея Ментелморн",
        "url": "https://dnd.su/bestiary/6412-reya-mantlemorn"
    },
    {
        "name": "[3] Рильса Раэль",
        "url": "https://dnd.su/bestiary/6446-rilsa-rael"
    },
    {
        "name": "[3] Розавальда",
        "url": "https://dnd.su/bestiary/4778-rosavalda"
    },
    {
        "name": "[3] Рози Пчелиное жало",
        "url": "https://dnd.su/bestiary/7471-rosie-beestinger"
    },
    {
        "name": "[3] Рой бормотунов",
        "url": "https://dnd.su/bestiary/17207-swarm-of-gibberling"
    },
    {
        "name": "[3] Рой детенышей неоги",
        "url": "https://dnd.su/bestiary/8851-neogi-hatchling-swarm"
    },
    {
        "name": "[3] Рой детёнышей сахуагинов",
        "url": "https://dnd.su/bestiary/7549-sahuagin-hatchling-swarm"
    },
    {
        "name": "[3] Рой скарабеев",
        "url": "https://dnd.su/bestiary/6896-swarm-of-scarabs"
    },
    {
        "name": "[3] Руногривый лев",
        "url": "https://dnd.su/bestiary/7187-fleecemane-lion"
    },
    {
        "name": "[3] Рыцарь",
        "url": "https://dnd.su/bestiary/440-knight"
    },
    {
        "name": "[3] Рыцарь Мифрилового щита",
        "url": "https://dnd.su/bestiary/7716-knight-of-the-mithral-shield"
    },
    {
        "name": "[3] Рыцарь Тёмного Прилива",
        "url": "https://dnd.su/bestiary/4926-dark-tide-knight"
    },
    {
        "name": "[3] Рыцарь Элдраина",
        "url": "https://dnd.su/bestiary/17350-knight-of-eldraine"
    },
    {
        "name": "[4] Раггадрагга",
        "url": "https://dnd.su/bestiary/6427-raggadragga"
    },
    {
        "name": "[4] Разумная чёрная слизь",
        "url": "https://dnd.su/bestiary/6162-intelligent-black-pudding"
    },
    {
        "name": "[5] Разербласт",
        "url": "https://dnd.su/bestiary/4919-razerblast"
    },
    {
        "name": "[5] Ревенант",
        "url": "https://dnd.su/bestiary/4720-revenant"
    },
    {
        "name": "[5] Регенерирующая чёрная слизь",
        "url": "https://dnd.su/bestiary/5923-regenerating-black-pudding"
    },
    {
        "name": "[5] Регхедский вождь клана/великий воин",
        "url": "https://dnd.su/bestiary/5764-reghed-chieftaingreat-warrior"
    },
    {
        "name": "[5] Риктавио",
        "url": "https://dnd.su/bestiary/4667-rictavio"
    },
    {
        "name": "[5] Рилне Фрет",
        "url": "https://dnd.su/bestiary/6185-riina-freth"
    },
    {
        "name": "[5] Ринглерун",
        "url": "https://dnd.su/bestiary/8416-ringlerun"
    },
    {
        "name": "[5] Риффлер",
        "url": "https://dnd.su/bestiary/13295-riffler"
    },
    {
        "name": "[5] Рукситид Избранный",
        "url": "https://dnd.su/bestiary/12557-ruxithid-the-chosen"
    },
    {
        "name": "[5] Рыцарь Ордена",
        "url": "https://dnd.su/bestiary/272-knight-of-the-order"
    },
    {
        "name": "[6] Распространитель оккультизма",
        "url": "https://dnd.su/bestiary/7857-occult-extollant"
    },
    {
        "name": "[6] Рат Модар",
        "url": "https://dnd.su/bestiary/489-rath-modar"
    },
    {
        "name": "[6] Ришаал Хранитель Страниц",
        "url": "https://dnd.su/bestiary/5353-rishaal-the-page-turner"
    },
    {
        "name": "[6] Рогатая сестра",
        "url": "https://dnd.su/bestiary/6209-horned-sister"
    },
    {
        "name": "[6] Рой рыб-печалей",
        "url": "https://dnd.su/bestiary/7866-swarm-of-sorrowfish"
    },
    {
        "name": "[7] Разведчик клинков",
        "url": "https://dnd.su/bestiary/15689-blade-scout"
    },
    {
        "name": "[7] Рас Нси",
        "url": "https://dnd.su/bestiary/1625-ras-nsi"
    },
    {
        "name": "[7] Резмир",
        "url": "https://dnd.su/bestiary/3339-rezmir"
    },
    {
        "name": "[7] Рыцарь-скелет",
        "url": "https://dnd.su/bestiary/10598-skeletal-knight"
    },
    {
        "name": "[8] Ревун",
        "url": "https://dnd.su/bestiary/6797-howler"
    },
    {
        "name": "[8] Рейгар",
        "url": "https://dnd.su/bestiary/8860-reigar"
    },
    {
        "name": "[8] Руидиевый слон",
        "url": "https://dnd.su/bestiary/7873-ruidium-elephant"
    },
    {
        "name": "[9] Ремолия Хевентри",
        "url": "https://dnd.su/bestiary/5351-remallia-haventree"
    },
    {
        "name": "[9] Рилмани феррумах",
        "url": "https://dnd.su/bestiary/13126-ferrumach-rilmani"
    },
    {
        "name": "[9] Рыцарь Солнечного бастиона",
        "url": "https://dnd.su/bestiary/13239-solar-bastion-knight"
    },
    {
        "name": "[10] Рахадин",
        "url": "https://dnd.su/bestiary/4668-rahadin"
    },
    {
        "name": "[11] Ремораз",
        "url": "https://dnd.su/bestiary/271-remorhaz"
    },
    {
        "name": "[11] Рогатый дьявол (Мальбранш)",
        "url": "https://dnd.su/bestiary/82-horned-devil"
    },
    {
        "name": "[11] Рунный бехир",
        "url": "https://dnd.su/bestiary/6194-runed-behir"
    },
    {
        "name": "[11] Рух",
        "url": "https://dnd.su/bestiary/273-roc"
    },
    {
        "name": "[12] Речник",
        "url": "https://dnd.su/bestiary/8406-riverine"
    },
    {
        "name": "[12] Рилмани куприлах",
        "url": "https://dnd.su/bestiary/13125-cuprilach-rilmani"
    },
    {
        "name": "[13] Ракшас",
        "url": "https://dnd.su/bestiary/269-rakshasa"
    },
    {
        "name": "[14] Ракшас Махади",
        "url": "https://dnd.su/bestiary/6441-mahadi-the-rakshasa"
    },
    {
        "name": "[14] Регизавр",
        "url": "https://dnd.su/bestiary/12095-regisaur"
    },
    {
        "name": "[17] Рилмани аурумах",
        "url": "https://dnd.su/bestiary/13124-aurumach-rilmani"
    },
    {
        "name": "[17] Рыцарь смерти",
        "url": "https://dnd.su/bestiary/61-death-knight"
    },
    {
        "name": "[21] Рунический колосс",
        "url": "https://dnd.su/bestiary/12252-runic-colossus"
    },
    {
        "name": "[24] Ракдос",
        "url": "https://dnd.su/bestiary/17294-rakdos"
    },
    {
        "name": "[28] Рак Тулкеш",
        "url": "https://dnd.su/bestiary/4988-rak-tulkhesh"
    },
    {
        "name": "[0] Свинья",
        "url": "https://dnd.su/bestiary/7741-pig"
    },
    {
        "name": "[0] Священная статуя",
        "url": "https://dnd.su/bestiary/6720-sacred-statue"
    },
    {
        "name": "[0] Силгар",
        "url": "https://dnd.su/bestiary/5362-sylgar"
    },
    {
        "name": "[0] Сирак из Сюзейла",
        "url": "https://dnd.su/bestiary/7783-sirac-of-suzail"
    },
    {
        "name": "[0] Сквиддли",
        "url": "https://dnd.su/bestiary/5359-squiddly"
    },
    {
        "name": "[0] Скорпион",
        "url": "https://dnd.su/bestiary/406-scorpion"
    },
    {
        "name": "[0] Слепой художник",
        "url": "https://dnd.su/bestiary/6038-blind-artist"
    },
    {
        "name": "[0] Сова",
        "url": "https://dnd.su/bestiary/408-owl"
    },
    {
        "name": "[0] Сокол",
        "url": "https://dnd.su/bestiary/5120-falcon"
    },
    {
        "name": "[0] Солнцекрыл",
        "url": "https://dnd.su/bestiary/13130-sunfly"
    },
    {
        "name": "[0] Статуя каменного великана",
        "url": "https://dnd.su/bestiary/7733-stone-giant-statue"
    },
    {
        "name": "[0] Стелла Вахтер",
        "url": "https://dnd.su/bestiary/4796-stella-wachter"
    },
    {
        "name": "[0] Стул",
        "url": "https://dnd.su/bestiary/5882-stool"
    },
    {
        "name": "[0] Судья Умберо Застро",
        "url": "https://dnd.su/bestiary/5332-magister-umbero-zastro"
    },
    {
        "name": "[0] Сэр Барик Нилеф",
        "url": "https://dnd.su/bestiary/7784-sir-baric-nylef"
    },
    {
        "name": "[1/8] Сабрина “Убей еще” Килгор (1-4 уровня)",
        "url": "https://dnd.su/bestiary/12723-sabrina-kill-more-kilgore-levels-1-4"
    },
    {
        "name": "[1/8] Саурив",
        "url": "https://dnd.su/bestiary/7569-sauriv"
    },
    {
        "name": "[1/8] Сержант",
        "url": "https://dnd.su/bestiary/5179-sergeant"
    },
    {
        "name": "[1/8] Слаад головастик",
        "url": "https://dnd.su/bestiary/289-slaad-tadpole"
    },
    {
        "name": "[1/8] Сокровищный скарабей",
        "url": "https://dnd.su/bestiary/6346-hoard-scarab"
    },
    {
        "name": "[1/8] Старый троглодит",
        "url": "https://dnd.su/bestiary/6234-old-troglodyte"
    },
    {
        "name": "[1/8] Страж",
        "url": "https://dnd.su/bestiary/442-guard"
    },
    {
        "name": "[1/8] Страж Горма",
        "url": "https://dnd.su/bestiary/17236-guardian-of-gorm"
    },
    {
        "name": "[1/8] Студент консерватории",
        "url": "https://dnd.su/bestiary/12703-conservatory-student"
    },
    {
        "name": "[1/4] Сайрус Белвью",
        "url": "https://dnd.su/bestiary/4689-cyrus-belview"
    },
    {
        "name": "[1/4] Самец стидера",
        "url": "https://dnd.su/bestiary/5848-male-steeder"
    },
    {
        "name": "[1/4] Самец стидера",
        "url": "https://dnd.su/bestiary/6709-male-steeder"
    },
    {
        "name": "[1/4] Сарит Кзекарит",
        "url": "https://dnd.su/bestiary/5880-sarith-kzekarit"
    },
    {
        "name": "[1/4] Северный олень",
        "url": "https://dnd.su/bestiary/5771-reindeer"
    },
    {
        "name": "[1/4] Серый поглотитель",
        "url": "https://dnd.su/bestiary/8867-gray-scavver"
    },
    {
        "name": "[1/4] Скальный гном затворник",
        "url": "https://dnd.su/bestiary/7904-rock-gnome-recluse"
    },
    {
        "name": "[1/4] Скелет",
        "url": "https://dnd.su/bestiary/24-skeleton"
    },
    {
        "name": "[1/4] Скелетный ключ",
        "url": "https://dnd.su/bestiary/6063-skeleton-key"
    },
    {
        "name": "[1/4] Скелеты крыс",
        "url": "https://dnd.su/bestiary/6450-skeletal-rats"
    },
    {
        "name": "[1/4] Скрисс",
        "url": "https://dnd.su/bestiary/5871-skriss"
    },
    {
        "name": "[1/4] Слуга трулл",
        "url": "https://dnd.su/bestiary/17285-servitor-thrull"
    },
    {
        "name": "[1/4] Спайдербэйт",
        "url": "https://dnd.su/bestiary/5874-spiderbait"
    },
    {
        "name": "[1/4] Спрайт",
        "url": "https://dnd.su/bestiary/298-sprite"
    },
    {
        "name": "[1/4] Страж Альянса Лордов",
        "url": "https://dnd.su/bestiary/5899-lords-alliance-guard"
    },
    {
        "name": "[1/2] Сабрина “Убей еще” Килгор (5-8 уровня)",
        "url": "https://dnd.su/bestiary/12725-sabrina-kill-more-kilgore-levels-5-8"
    },
    {
        "name": "[1/2] Савид",
        "url": "https://dnd.su/bestiary/4780-savid"
    },
    {
        "name": "[1/2] Сатир",
        "url": "https://dnd.su/bestiary/281-satyr"
    },
    {
        "name": "[1/2] Сахуагин",
        "url": "https://dnd.su/bestiary/276-sahuagin"
    },
    {
        "name": "[1/2] Свирепый корби",
        "url": "https://dnd.su/bestiary/17362-dire-corby"
    },
    {
        "name": "[1/2] Семя жадности",
        "url": "https://dnd.su/bestiary/14172-greed-mote"
    },
    {
        "name": "[1/2] Серая слизь",
        "url": "https://dnd.su/bestiary/257-gray-ooze"
    },
    {
        "name": "[1/2] Скаллк",
        "url": "https://dnd.su/bestiary/6977-skulk"
    },
    {
        "name": "[1/2] Скелет алхимика",
        "url": "https://dnd.su/bestiary/7553-skeletal-alchemist"
    },
    {
        "name": "[1/2] Скелет боевого коня",
        "url": "https://dnd.su/bestiary/287-warhorse-skeleton"
    },
    {
        "name": "[1/2] Скелет дварфа",
        "url": "https://dnd.su/bestiary/12558-dwarf-skeleton"
    },
    {
        "name": "[1/2] Слизелюд",
        "url": "https://dnd.su/bestiary/17379-ooze-folk"
    },
    {
        "name": "[1/2] Смотрящий",
        "url": "https://dnd.su/bestiary/6759-gazer"
    },
    {
        "name": "[1/2] Солдат",
        "url": "https://dnd.su/bestiary/17318-soldier"
    },
    {
        "name": "[1/2] Спелликс Ромвуд",
        "url": "https://dnd.su/bestiary/5793-spellix-romwod"
    },
    {
        "name": "[1/2] Ссуран-отравитель",
        "url": "https://dnd.su/bestiary/8879-ssurran-poisoner"
    },
    {
        "name": "[1/2] Сэр Брэфорд",
        "url": "https://dnd.su/bestiary/17442-sir-braford"
    },
    {
        "name": "[1] Салида",
        "url": "https://dnd.su/bestiary/6030-salida"
    },
    {
        "name": "[1] Самара Крепкокость",
        "url": "https://dnd.su/bestiary/5355-samara-strongbones"
    },
    {
        "name": "[1] Самира Эра",
        "url": "https://dnd.su/bestiary/8542-samira-arah"
    },
    {
        "name": "[1] Самка стидера",
        "url": "https://dnd.su/bestiary/5850-female-steeder"
    },
    {
        "name": "[1] Самка стидера",
        "url": "https://dnd.su/bestiary/6708-female-steeder"
    },
    {
        "name": "[1] Санбалет",
        "url": "https://dnd.su/bestiary/7568-sanbalet"
    },
    {
        "name": "[1] Сангзор Кровавый Рог",
        "url": "https://dnd.su/bestiary/4675-sangzor-bloodhorn"
    },
    {
        "name": "[1] Сатир гуляка",
        "url": "https://dnd.su/bestiary/7206-satyr-reveler"
    },
    {
        "name": "[1] Сахуагин коралловый крушитель",
        "url": "https://dnd.su/bestiary/7547-sahuagin-coral-smasher"
    },
    {
        "name": "[1] Связанный договором дух",
        "url": "https://dnd.su/bestiary/6939-indentured-spirit"
    },
    {
        "name": "[1] Сильдар Холлвинтер",
        "url": "https://dnd.su/bestiary/23-sildar-hallwinter"
    },
    {
        "name": "[1] Скальная кошка",
        "url": "https://dnd.su/bestiary/5477-crag-cat"
    },
    {
        "name": "[1] Скен Забрисс",
        "url": "https://dnd.su/bestiary/7444-sken-zabriss"
    },
    {
        "name": "[1] Скриббл",
        "url": "https://dnd.su/bestiary/7876-scribble"
    },
    {
        "name": "[1] Снежная дева",
        "url": "https://dnd.su/bestiary/4782-snow-maiden"
    },
    {
        "name": "[1] Солдат Драконьей армии",
        "url": "https://dnd.su/bestiary/10577-dragon-army-soldier"
    },
    {
        "name": "[1] Спектр",
        "url": "https://dnd.su/bestiary/294-specter"
    },
    {
        "name": "[1] Старый Квакун",
        "url": "https://dnd.su/bestiary/7457-old-croaker"
    },
    {
        "name": "[1] Страж отражений",
        "url": "https://dnd.su/bestiary/20482-reflection-guardian"
    },
    {
        "name": "[1] Су-монстр",
        "url": "https://dnd.su/bestiary/1219-su-monster"
    },
    {
        "name": "[1] Сумочный студень",
        "url": "https://dnd.su/bestiary/12015-bag-jelly"
    },
    {
        "name": "[2] Саблезубый тигр",
        "url": "https://dnd.su/bestiary/405-saber-toothed-tiger"
    },
    {
        "name": "[2] Сатир шипоносец",
        "url": "https://dnd.su/bestiary/7207-satyr-thornbearer"
    },
    {
        "name": "[2] Сверкающий олень",
        "url": "https://dnd.su/bestiary/7167-burnished-hart"
    },
    {
        "name": "[2] Свирфнеблины веркрысы",
        "url": "https://dnd.su/bestiary/5827-svirfneblin-wererats"
    },
    {
        "name": "[2] Священник",
        "url": "https://dnd.su/bestiary/441-priest"
    },
    {
        "name": "[2] Священник бурных вод",
        "url": "https://dnd.su/bestiary/7544-rip-tide-priest"
    },
    {
        "name": "[2] Сестра Гарэль",
        "url": "https://dnd.su/bestiary/12560-sister-garaele"
    },
    {
        "name": "[2] Синдерхилд",
        "url": "https://dnd.su/bestiary/7752-cinderhild"
    },
    {
        "name": "[2] Синий сторожевой дрейк",
        "url": "https://dnd.su/bestiary/6791-blue-guard-drake"
    },
    {
        "name": "[2] Сион",
        "url": "https://dnd.su/bestiary/17234-sion"
    },
    {
        "name": "[2] Скайек Рух",
        "url": "https://dnd.su/bestiary/17282-skyjek-roc"
    },
    {
        "name": "[2] Скелет быка",
        "url": "https://dnd.su/bestiary/20481-skeletal-bull"
    },
    {
        "name": "[2] Скелет динозавра",
        "url": "https://dnd.su/bestiary/8492-dinosaur-skeleton"
    },
    {
        "name": "[2] Скелет минотавра",
        "url": "https://dnd.su/bestiary/286-minotaur-skeleton"
    },
    {
        "name": "[2] Скилла",
        "url": "https://dnd.su/bestiary/8429-skylla"
    },
    {
        "name": "[2] Скр'а С'орск",
        "url": "https://dnd.su/bestiary/7450-skra-sorsk"
    },
    {
        "name": "[2] Сладис Вадир",
        "url": "https://dnd.su/bestiary/5915-sladis-vadir"
    },
    {
        "name": "[2] Сплагот Вернувшийся",
        "url": "https://dnd.su/bestiary/7488-splugoth-the-returned"
    },
    {
        "name": "[2] Старейшина дарклингов",
        "url": "https://dnd.su/bestiary/6580-darkling-elder"
    },
    {
        "name": "[2] Старший монах монастыря Страдающего тела",
        "url": "https://dnd.su/bestiary/17377-elder-monastery-of-the-distressed-body-monk"
    },
    {
        "name": "[2] Стеклянный голем",
        "url": "https://dnd.su/bestiary/8389-glasswork-golem"
    },
    {
        "name": "[2] Стеклянный пегас",
        "url": "https://dnd.su/bestiary/8390-glass-pegasus"
    },
    {
        "name": "[2] Сторожевой дрейк",
        "url": "https://dnd.su/bestiary/6787-guard-drake"
    },
    {
        "name": "[2] Страж Чёрной Земли",
        "url": "https://dnd.su/bestiary/4915-black-earth-guard"
    },
    {
        "name": "[2] Студенистый куб",
        "url": "https://dnd.su/bestiary/256-gelatinous-cube"
    },
    {
        "name": "[2] Стул-мимик",
        "url": "https://dnd.su/bestiary/5059-mimic-chair"
    },
    {
        "name": "[2] Сэр Талавар",
        "url": "https://dnd.su/bestiary/8430-sir-talavar"
    },
    {
        "name": "[3] Сабрина “Убей еще” Килгор (9-11 уровня)",
        "url": "https://dnd.su/bestiary/12726-sabrina-kill-more-kilgore-levels-9-11"
    },
    {
        "name": "[3] Сахуагин колдун Ук'отоа",
        "url": "https://dnd.su/bestiary/7408-sahuagin-warlock-of-ukotoa"
    },
    {
        "name": "[3] Сахуагин-чемпион",
        "url": "https://dnd.su/bestiary/7546-sahuagin-champion"
    },
    {
        "name": "[3] Сейт Кромли",
        "url": "https://dnd.su/bestiary/5354-saeth-cromley"
    },
    {
        "name": "[3] Сефек Калтро",
        "url": "https://dnd.su/bestiary/5790-sephek-kaltro"
    },
    {
        "name": "[3] Сирена",
        "url": "https://dnd.su/bestiary/17417-siren"
    },
    {
        "name": "[3] Скелет громового зверя",
        "url": "https://dnd.su/bestiary/7724-thunderbeast-skeleton"
    },
    {
        "name": "[3] Склизкий преследователь",
        "url": "https://dnd.su/bestiary/7016-slithering-tracker"
    },
    {
        "name": "[3] Снежный голем",
        "url": "https://dnd.su/bestiary/5772-snow-golem"
    },
    {
        "name": "[3] Снежный совомед",
        "url": "https://dnd.su/bestiary/5774-snowy-owlbear"
    },
    {
        "name": "[3] Совомед",
        "url": "https://dnd.su/bestiary/25-owlbear"
    },
    {
        "name": "[3] Солдат-нежить",
        "url": "https://dnd.su/bestiary/10599-undead-soldier"
    },
    {
        "name": "[3] Солоноводный болотник",
        "url": "https://dnd.su/bestiary/8057-brackish-trudge"
    },
    {
        "name": "[3] Сорвиголова",
        "url": "https://dnd.su/bestiary/7040-swashbuckler"
    },
    {
        "name": "[3] Ссуран-осквернитель",
        "url": "https://dnd.su/bestiary/8878-ssurran-defiler"
    },
    {
        "name": "[3] Сэр Ланнивер",
        "url": "https://dnd.su/bestiary/7710-sir-lanniver"
    },
    {
        "name": "[4] Сахуагин глубоководный ныряльщик",
        "url": "https://dnd.su/bestiary/7548-sahuagin-deep-diver"
    },
    {
        "name": "[4] Селеста",
        "url": "https://dnd.su/bestiary/7890-celeste"
    },
    {
        "name": "[4] Сетесский гоплит",
        "url": "https://dnd.su/bestiary/7158-setessan-hoplite"
    },
    {
        "name": "[4] Сильное сердце",
        "url": "https://dnd.su/bestiary/8419-strongheart"
    },
    {
        "name": "[4] Слон",
        "url": "https://dnd.su/bestiary/407-elephant"
    },
    {
        "name": "[4] Созидатель",
        "url": "https://dnd.su/bestiary/17316-reckoner"
    },
    {
        "name": "[4] Сокол Охотник",
        "url": "https://dnd.su/bestiary/8011-falcon-the-hunter"
    },
    {
        "name": "[4] Солун Зебриндас",
        "url": "https://dnd.su/bestiary/5358-soluun-xibrindas"
    },
    {
        "name": "[4] Сотрясатель душ",
        "url": "https://dnd.su/bestiary/8399-soul-shaker"
    },
    {
        "name": "[4] Стегозавр",
        "url": "https://dnd.su/bestiary/6606-stegosaurus"
    },
    {
        "name": "[4] Стегозавр зомби",
        "url": "https://dnd.su/bestiary/6001-stegosaurus-zombie"
    },
    {
        "name": "[4] Стремительная змеиная пасть",
        "url": "https://dnd.su/bestiary/7836-scuttling-serpentmaw"
    },
    {
        "name": "[4] Стригой",
        "url": "https://dnd.su/bestiary/6891-strigoi"
    },
    {
        "name": "[4] Суккуб / Инкуб",
        "url": "https://dnd.su/bestiary/299-succubus-incubus"
    },
    {
        "name": "[5] Саймон Аумар",
        "url": "https://dnd.su/bestiary/10442-simon-aumar"
    },
    {
        "name": "[5] Саламандра",
        "url": "https://dnd.su/bestiary/280-salamander"
    },
    {
        "name": "[5] Самоцветный охотник",
        "url": "https://dnd.su/bestiary/6343-gem-stalker"
    },
    {
        "name": "[5] Сахуагин Повелитель волн",
        "url": "https://dnd.su/bestiary/7551-sahuagin-wave-shaper"
    },
    {
        "name": "[5] Свидетель разума",
        "url": "https://dnd.su/bestiary/6839-mindwitness"
    },
    {
        "name": "[5] Святослон",
        "url": "https://dnd.su/bestiary/6385-hollyphant"
    },
    {
        "name": "[5] Скам",
        "url": "https://dnd.su/bestiary/7556-skum"
    },
    {
        "name": "[5] Скелет гигантской акулы",
        "url": "https://dnd.su/bestiary/8028-giant-shark-skeleton"
    },
    {
        "name": "[5] Скелет джаггернаут",
        "url": "https://dnd.su/bestiary/7554-skeletal-juggernaut"
    },
    {
        "name": "[5] Скраг",
        "url": "https://dnd.su/bestiary/492-scrag"
    },
    {
        "name": "[5] Слизь крови дракона",
        "url": "https://dnd.su/bestiary/6331-dragonblood-ooze"
    },
    {
        "name": "[5] Старший мудрец",
        "url": "https://dnd.su/bestiary/5055-master-sage"
    },
    {
        "name": "[5] Стая черепных крыс",
        "url": "https://dnd.su/bestiary/6578-swarm-of-cranium-rats"
    },
    {
        "name": "[5] Стая черепных крыс пискуний",
        "url": "https://dnd.su/bestiary/13077-sranium-rat-squeaker-swarm"
    },
    {
        "name": "[5] Страж гробницы",
        "url": "https://dnd.su/bestiary/6070-tomb-guardian"
    },
    {
        "name": "[5] Сэр Джаред",
        "url": "https://dnd.su/bestiary/13240-sir-jared"
    },
    {
        "name": "[5] Сэр Урсас",
        "url": "https://dnd.su/bestiary/8523-sir-ursas"
    },
    {
        "name": "[6] Сахуагин-мастер клинка",
        "url": "https://dnd.su/bestiary/7545-sahuagin-blademaster"
    },
    {
        "name": "[6] Связанный страж гробницы",
        "url": "https://dnd.su/bestiary/6066-spiked-tomb-guardian"
    },
    {
        "name": "[6] Сгусток зомби",
        "url": "https://dnd.su/bestiary/6908-zombie-clot"
    },
    {
        "name": "[6] Скелет ледяного великана",
        "url": "https://dnd.su/bestiary/5773-frost-giant-skeleton"
    },
    {
        "name": "[6] Скимо Вирдботл",
        "url": "https://dnd.su/bestiary/5293-skeemo-weirdbottle"
    },
    {
        "name": "[6] Слупидуп",
        "url": "https://dnd.su/bestiary/5872-sloopidoop"
    },
    {
        "name": "[6] Станимир",
        "url": "https://dnd.su/bestiary/4795-stanimir"
    },
    {
        "name": "[6] Странник Края",
        "url": "https://dnd.su/bestiary/11850-enderman"
    },
    {
        "name": "[6] Сумеречная карга",
        "url": "https://dnd.su/bestiary/4976-dusk-hag"
    },
    {
        "name": "[6] Сумрачный охотник",
        "url": "https://dnd.su/bestiary/7290-gloomstalker"
    },
    {
        "name": "[6] Сэр Годфри Гвилим",
        "url": "https://dnd.su/bestiary/4781-sir-godfrey-gwilym"
    },
    {
        "name": "[7] Саркозух",
        "url": "https://dnd.su/bestiary/5974-sarcosuchus"
    },
    {
        "name": "[7] Саркозух зомби",
        "url": "https://dnd.su/bestiary/6000-sarcosuchus-zombie"
    },
    {
        "name": "[7] Свежеватель разума",
        "url": "https://dnd.su/bestiary/237-mind-flayer"
    },
    {
        "name": "[7] Синий слаад",
        "url": "https://dnd.su/bestiary/290-blue-slaad"
    },
    {
        "name": "[7] Ситиан Скальдеранг",
        "url": "https://dnd.su/bestiary/12693-sythian-skalderang"
    },
    {
        "name": "[7] Скелет великана",
        "url": "https://dnd.su/bestiary/17419-giant-skeleton"
    },
    {
        "name": "[8] Свежеватель разума заклинатель",
        "url": "https://dnd.su/bestiary/5648-mind-flayer-arcanist"
    },
    {
        "name": "[8] Свежеватель разума пророк",
        "url": "https://dnd.su/bestiary/14827-mind-flayer-prophet"
    },
    {
        "name": "[8] Свежеватель разума псион",
        "url": "https://dnd.su/bestiary/5649-mind-flayer-psion"
    },
    {
        "name": "[8] Скабата Пасленовая",
        "url": "https://dnd.su/bestiary/8411-skabatha-nightshade"
    },
    {
        "name": "[8] Скаладар",
        "url": "https://dnd.su/bestiary/5388-scaladar"
    },
    {
        "name": "[8] Стальной Журавль",
        "url": "https://dnd.su/bestiary/5068-steel-crane"
    },
    {
        "name": "[8] Сумракокрыл",
        "url": "https://dnd.su/bestiary/17274-gloamwing"
    },
    {
        "name": "[9] Сандет",
        "url": "https://dnd.su/bestiary/6238-sundeth"
    },
    {
        "name": "[9] Свистун",
        "url": "https://dnd.su/bestiary/8410-whistler"
    },
    {
        "name": "[9] Секелок",
        "url": "https://dnd.su/bestiary/6062-sekelok"
    },
    {
        "name": "[9] Серый слаад",
        "url": "https://dnd.su/bestiary/292-gray-slaad"
    },
    {
        "name": "[9] Скелет бладфина",
        "url": "https://dnd.su/bestiary/7901-skeletal-bloodfin"
    },
    {
        "name": "[9] Скользящий бладфин",
        "url": "https://dnd.su/bestiary/7837-slithering-bloodfin"
    },
    {
        "name": "[10] Сапфировый cтраж",
        "url": "https://dnd.su/bestiary/5065-sapphire-sentinel"
    },
    {
        "name": "[10] Сгорбленный гнолл",
        "url": "https://dnd.su/bestiary/6440-hunched-gnoll"
    },
    {
        "name": "[10] Сет — дракон-перевертыш",
        "url": "https://dnd.su/bestiary/11073-seth-the-shapeshifting-dragon"
    },
    {
        "name": "[10] Скопление энцефалона",
        "url": "https://dnd.su/bestiary/12498-encephalon-cluster"
    },
    {
        "name": "[10] Смертельный слаад",
        "url": "https://dnd.su/bestiary/293-death-slaad"
    },
    {
        "name": "[10] Спектр ночного покрова",
        "url": "https://dnd.su/bestiary/17275-nightveil-specter"
    },
    {
        "name": "[10] Статуя Вергадайна",
        "url": "https://dnd.su/bestiary/6172-statue-of-vergadain"
    },
    {
        "name": "[10] Статуя Талоса",
        "url": "https://dnd.su/bestiary/8020-statue-of-talos"
    },
    {
        "name": "[11] Самозванец высших фей",
        "url": "https://dnd.su/bestiary/17345-high-fae-impostor"
    },
    {
        "name": "[11] Сияющий идол",
        "url": "https://dnd.su/bestiary/4993-radiant-idol"
    },
    {
        "name": "[11] Сфинкс Правосудия",
        "url": "https://dnd.su/bestiary/17325-sphinx-of-judgment"
    },
    {
        "name": "[12] Садовник",
        "url": "https://dnd.su/bestiary/17233-the-gardener"
    },
    {
        "name": "[12] Серый рендер",
        "url": "https://dnd.su/bestiary/6781-gray-render"
    },
    {
        "name": "[12] Сильвира Савикас",
        "url": "https://dnd.su/bestiary/6417-sylvira-savikas"
    },
    {
        "name": "[12] Синдра Сильван",
        "url": "https://dnd.su/bestiary/6067-syndra-silvane"
    },
    {
        "name": "[13] Серисса",
        "url": "https://dnd.su/bestiary/7764-serissa"
    },
    {
        "name": "[14] Собиратель Трупов",
        "url": "https://dnd.su/bestiary/6485-cadaver-collector"
    },
    {
        "name": "[14] Старший мозг",
        "url": "https://dnd.su/bestiary/6731-elder-brain"
    },
    {
        "name": "[15] Скользящий ужас",
        "url": "https://dnd.su/bestiary/17266-skittering-horror"
    },
    {
        "name": "[15] Смертоволк",
        "url": "https://dnd.su/bestiary/15696-deathwolf"
    },
    {
        "name": "[15] Софина",
        "url": "https://dnd.su/bestiary/10443-sofina"
    },
    {
        "name": "[15] Сторукий",
        "url": "https://dnd.su/bestiary/7189-hundred-handed-one"
    },
    {
        "name": "[15] Страд фон Зарович",
        "url": "https://dnd.su/bestiary/960-strahd-von-zarovich"
    },
    {
        "name": "[15] Страд, хозяин Дома Смерти",
        "url": "https://dnd.su/bestiary/15727-strahd-von-zarovich"
    },
    {
        "name": "[16] Скелет штормового великана",
        "url": "https://dnd.su/bestiary/5069-storm-giant-skeleton"
    },
    {
        "name": "[16] Сталагма Стальная тень",
        "url": "https://dnd.su/bestiary/6150-stalagma-steelshadow"
    },
    {
        "name": "[16] Стальной хищник",
        "url": "https://dnd.su/bestiary/7036-steel-predator"
    },
    {
        "name": "[17] Синий абишай",
        "url": "https://dnd.su/bestiary/6454-blue-abishai"
    },
    {
        "name": "[17] Сплав троллей",
        "url": "https://dnd.su/bestiary/12270-troll-amalgam"
    },
    {
        "name": "[17] Сухопутная дракочерепаха",
        "url": "https://dnd.su/bestiary/5039-dragon-tortoise"
    },
    {
        "name": "[18] Сибриекс",
        "url": "https://dnd.su/bestiary/6976-sibriex"
    },
    {
        "name": "[21] Солар",
        "url": "https://dnd.su/bestiary/34-solar"
    },
    {
        "name": "[25] Сларкретел",
        "url": "https://dnd.su/bestiary/5600-slarkrethel"
    },
    {
        "name": "[28] Сул Катеш",
        "url": "https://dnd.su/bestiary/4989-sul-khatesh"
    },
    {
        "name": "[0] Сердце ледяного тролля",
        "url": "https://dnd.su/bestiary/10611-ice-troll-heart"
    },
    {
        "name": "[?] Слуга-гомункул",
        "url": "https://dnd.su/bestiary/3987-homunculus-servant"
    },
    {
        "name": "[?] Стальной защитник",
        "url": "https://dnd.su/bestiary/3988-steel-defender"
    },
    {
        "name": "[0] Талисольванар «Талли» Феллбранч",
        "url": "https://dnd.su/bestiary/5364-talisolvanar"
    },
    {
        "name": "[0] Теренцио Кассалантер",
        "url": "https://dnd.su/bestiary/5367-terenzio-cassalanter"
    },
    {
        "name": "[0] Тифлинг акробат",
        "url": "https://dnd.su/bestiary/12712-tiefling-acrobat"
    },
    {
        "name": "[0] Топающая нога",
        "url": "https://dnd.su/bestiary/8517-stomping-foot"
    },
    {
        "name": "[0] Торвин Твинберд",
        "url": "https://dnd.su/bestiary/5368-thorvin-twinbeard"
    },
    {
        "name": "[0] Трессим",
        "url": "https://dnd.su/bestiary/6402-tressym"
    },
    {
        "name": "[0] Тупоголовая форель",
        "url": "https://dnd.su/bestiary/5775-knucklehead-trout"
    },
    {
        "name": "[0] Тэлдин",
        "url": "https://dnd.su/bestiary/11838-theldin"
    },
    {
        "name": "[0] Тюлень",
        "url": "https://dnd.su/bestiary/5777-seal"
    },
    {
        "name": "[1/8] Торджа Камнедробилка (1-4 уровня)",
        "url": "https://dnd.su/bestiary/12727-torgja-stonecrusher-levels-1-4"
    },
    {
        "name": "[1/8] Тёрствелл Вантампур",
        "url": "https://dnd.su/bestiary/6413-thurstwell-vanthampur"
    },
    {
        "name": "[1/4] Табакси-менестрель",
        "url": "https://dnd.su/bestiary/6021-tabaxi-minstrel"
    },
    {
        "name": "[1/4] Талисман–вредитель",
        "url": "https://dnd.su/bestiary/5412-pest-mascot"
    },
    {
        "name": "[1/4] Талисман–статуя духа",
        "url": "https://dnd.su/bestiary/5414-spirit-statue-mascot"
    },
    {
        "name": "[1/4] Талисман–фрактал",
        "url": "https://dnd.su/bestiary/5410-fractal-mascot"
    },
    {
        "name": "[1/4] Талисман–чернильник",
        "url": "https://dnd.su/bestiary/5411-inkling-mascot"
    },
    {
        "name": "[1/4] Талисман–элементаль искусства",
        "url": "https://dnd.su/bestiary/5409-art-elemental-mascot"
    },
    {
        "name": "[1/4] Тварь Бездны",
        "url": "https://dnd.su/bestiary/4538-abyssal-wretch"
    },
    {
        "name": "[1/4] Топороклюв",
        "url": "https://dnd.su/bestiary/410-axe-beak"
    },
    {
        "name": "[1/4] Тортл",
        "url": "https://dnd.su/bestiary/7048-tortle"
    },
    {
        "name": "[1/4] Троглодит",
        "url": "https://dnd.su/bestiary/303-troglodyte"
    },
    {
        "name": "[1/4] Троглодит банды Горзила",
        "url": "https://dnd.su/bestiary/6203-gorzils-gang-troglodyte"
    },
    {
        "name": "[1/2] Талнад",
        "url": "https://dnd.su/bestiary/7533-talnad"
    },
    {
        "name": "[1/2] Тейвиус Криг",
        "url": "https://dnd.su/bestiary/6416-thavius-kreeg"
    },
    {
        "name": "[1/2] Тень",
        "url": "https://dnd.su/bestiary/283-shadow"
    },
    {
        "name": "[1/2] Торджа Камнедробилка (5-8 уровня)",
        "url": "https://dnd.su/bestiary/12728-torgja-stonecrusher-levels-5-8"
    },
    {
        "name": "[1/2] Тош Старлинг (1-4 уровня)",
        "url": "https://dnd.su/bestiary/12730-tosh-starling-levels-1-4"
    },
    {
        "name": "[1/2] Тридрон",
        "url": "https://dnd.su/bestiary/240-tridrone"
    },
    {
        "name": "[1/2] Тёмная мантия",
        "url": "https://dnd.su/bestiary/60-darkmantle"
    },
    {
        "name": "[1] Табакси-охотник",
        "url": "https://dnd.su/bestiary/6022-tabaxi-hunter"
    },
    {
        "name": "[1] Таной охотник",
        "url": "https://dnd.su/bestiary/10295-thanoi-hunter"
    },
    {
        "name": "[1] Терракотовый воин",
        "url": "https://dnd.su/bestiary/6068-terracotta-warrior"
    },
    {
        "name": "[1] Тигр",
        "url": "https://dnd.su/bestiary/409-tiger"
    },
    {
        "name": "[1] Томми «Две задницы»",
        "url": "https://dnd.su/bestiary/8049-tommy-two-butts"
    },
    {
        "name": "[1] Тош Старлинг (5-8 уровня)",
        "url": "https://dnd.su/bestiary/12732-tosh-starling-levels-5-8"
    },
    {
        "name": "[1] Три-крин",
        "url": "https://dnd.su/bestiary/301-thri-kreen"
    },
    {
        "name": "[1] Троодон",
        "url": "https://dnd.su/bestiary/5977-troodon"
    },
    {
        "name": "[1] Троодон Зомби",
        "url": "https://dnd.su/bestiary/6005-troodon"
    },
    {
        "name": "[1] Трубящий в рог",
        "url": "https://dnd.su/bestiary/17307-horncaller"
    },
    {
        "name": "[1] Туманная Река",
        "url": "https://dnd.su/bestiary/6031-river-mist"
    },
    {
        "name": "[2] Таламин Раанан",
        "url": "https://dnd.su/bestiary/7413-talamin-raanan"
    },
    {
        "name": "[2] Таркананский убийца",
        "url": "https://dnd.su/bestiary/5006-tarkanan-assassin"
    },
    {
        "name": "[2] Тау",
        "url": "https://dnd.su/bestiary/7726-tau"
    },
    {
        "name": "[2] Теневой мастиф",
        "url": "https://dnd.su/bestiary/6935-shadow-mastiff"
    },
    {
        "name": "[2] Тиссина Кайрет",
        "url": "https://dnd.su/bestiary/5370-tissina-khyret"
    },
    {
        "name": "[2] Томас Т. Жаба",
        "url": "https://dnd.su/bestiary/8045-thomas-t-toad"
    },
    {
        "name": "[2] Тоналли",
        "url": "https://dnd.su/bestiary/8543-tonalli"
    },
    {
        "name": "[2] Топси",
        "url": "https://dnd.su/bestiary/5883-topsy"
    },
    {
        "name": "[2] Тортл друид",
        "url": "https://dnd.su/bestiary/7049-tortle-druid"
    },
    {
        "name": "[2] Траккус",
        "url": "https://dnd.su/bestiary/5369-thrakkus"
    },
    {
        "name": "[2] Три Серьги",
        "url": "https://dnd.su/bestiary/7442-three-earrings"
    },
    {
        "name": "[2] Три-крин охотник",
        "url": "https://dnd.su/bestiary/8882-thri-kreen-hunter"
    },
    {
        "name": "[2] Тритон, береговой охотник",
        "url": "https://dnd.su/bestiary/7208-triton-shorestalker"
    },
    {
        "name": "[2] Тумандом",
        "url": "https://dnd.su/bestiary/7891-foghome"
    },
    {
        "name": "[2] Тур",
        "url": "https://dnd.su/bestiary/6488-aurochs"
    },
    {
        "name": "[2] Турви",
        "url": "https://dnd.su/bestiary/5884-turvy"
    },
    {
        "name": "[3] Теневой мастиф альфа",
        "url": "https://dnd.su/bestiary/6936-shadow-mastiff-alpha"
    },
    {
        "name": "[3] Торджа Камнедробилка (9-11 уровня)",
        "url": "https://dnd.su/bestiary/12729-torgja-stonecrusher-levels-9-11"
    },
    {
        "name": "[3] Тош Старлинг (9-11 уровня)",
        "url": "https://dnd.su/bestiary/12733-tosh-starling-levels-9-11"
    },
    {
        "name": "[3] Траппер",
        "url": "https://dnd.su/bestiary/7050-trapper"
    },
    {
        "name": "[3] Троглодит чемпион Лаогзеда",
        "url": "https://dnd.su/bestiary/5844-troglodyte-champion-of-laogzed"
    },
    {
        "name": "[3] Тёрл Мерросска",
        "url": "https://dnd.su/bestiary/3656-thurl-merosska"
    },
    {
        "name": "[4] Танцующее пламя",
        "url": "https://dnd.su/bestiary/7871-dancing-flame"
    },
    {
        "name": "[4] Текусистекатль",
        "url": "https://dnd.su/bestiary/17420-tecuziztecatl"
    },
    {
        "name": "[4] Теневой демон",
        "url": "https://dnd.su/bestiary/74-shadow-demon"
    },
    {
        "name": "[4] Трензия",
        "url": "https://dnd.su/bestiary/6228-trenzia"
    },
    {
        "name": "[5] Талис Белая",
        "url": "https://dnd.su/bestiary/3338-talis-the-white"
    },
    {
        "name": "[5] Танарукк",
        "url": "https://dnd.su/bestiary/7045-tanarukk"
    },
    {
        "name": "[5] Теневой вурдалак",
        "url": "https://dnd.su/bestiary/7410-shadowghast"
    },
    {
        "name": "[5] Теризинозавр",
        "url": "https://dnd.su/bestiary/5975-therizinosaurus"
    },
    {
        "name": "[5] Теризинозавр зомби",
        "url": "https://dnd.su/bestiary/6002-therizinosaurus-zombie"
    },
    {
        "name": "[5] Титанотерий",
        "url": "https://dnd.su/bestiary/12269-titanothere"
    },
    {
        "name": "[5] Тлакатеколо",
        "url": "https://dnd.su/bestiary/8400-tlacatecolo"
    },
    {
        "name": "[5] Тлинкалли",
        "url": "https://dnd.su/bestiary/7047-tlincalli"
    },
    {
        "name": "[5] Трааг Драконид",
        "url": "https://dnd.su/bestiary/10299-traag-draconian"
    },
    {
        "name": "[5] Три-крин мистик",
        "url": "https://dnd.su/bestiary/8883-thri-kreen-mystic"
    },
    {
        "name": "[5] Трицератопс",
        "url": "https://dnd.su/bestiary/93-triceratops"
    },
    {
        "name": "[5] Трицератопс зомби",
        "url": "https://dnd.su/bestiary/6004-triceratops-zombie"
    },
    {
        "name": "[5] Тролль",
        "url": "https://dnd.su/bestiary/304-troll"
    },
    {
        "name": "[6] Топола",
        "url": "https://dnd.su/bestiary/9260-topolah"
    },
    {
        "name": "[6] Туманный скиталец",
        "url": "https://dnd.su/bestiary/12249-mist-hulk"
    },
    {
        "name": "[6] Тысячезуб",
        "url": "https://dnd.su/bestiary/7570-thousand-teeth"
    },
    {
        "name": "[7] Телоглот",
        "url": "https://dnd.su/bestiary/6851-bodytaker"
    },
    {
        "name": "[7] Теросская химера",
        "url": "https://dnd.su/bestiary/7180-theran-chimera"
    },
    {
        "name": "[7] Тикси Токворт",
        "url": "https://dnd.su/bestiary/12692-tixie-tockworth"
    },
    {
        "name": "[7] Титанозавр",
        "url": "https://dnd.su/bestiary/5976-titanosaurus"
    },
    {
        "name": "[7] Титанозавр зомби",
        "url": "https://dnd.su/bestiary/6003-titanosaurus-zombie"
    },
    {
        "name": "[7] Три-крин гладиатор",
        "url": "https://dnd.su/bestiary/8881-thri-kreen-gladiator"
    },
    {
        "name": "[8] Телепатический Пентакль",
        "url": "https://dnd.su/bestiary/5814-telepathic-pentacle"
    },
    {
        "name": "[8] Тираннозавр зомби",
        "url": "https://dnd.su/bestiary/6017-tyrannosaurus-zombie"
    },
    {
        "name": "[8] Тираннозавр рекс",
        "url": "https://dnd.su/bestiary/91-tyrannosaurus-rex"
    },
    {
        "name": "[8] Торбит",
        "url": "https://dnd.su/bestiary/6210-torbit"
    },
    {
        "name": "[8] Тритон, повелитель волн",
        "url": "https://dnd.su/bestiary/7209-triton-master-of-waves"
    },
    {
        "name": "[8] Трупоцвет",
        "url": "https://dnd.su/bestiary/6576-corpse-flower"
    },
    {
        "name": "[8] Тёмный страж",
        "url": "https://dnd.su/bestiary/6480-blackguard"
    },
    {
        "name": "[9] Ташлин Яфира",
        "url": "https://dnd.su/bestiary/5294-tashlyn-yafeera"
    },
    {
        "name": "[9] Твад Подпиво",
        "url": "https://dnd.su/bestiary/6170-thwad-underbrew"
    },
    {
        "name": "[9] Теневой ужас",
        "url": "https://dnd.su/bestiary/11860-shadow-horror"
    },
    {
        "name": "[9] Тень убийца",
        "url": "https://dnd.su/bestiary/5389-shadow-assassin"
    },
    {
        "name": "[9] Трент",
        "url": "https://dnd.su/bestiary/302-treant"
    },
    {
        "name": "[9] Трент нежить",
        "url": "https://dnd.su/bestiary/6451-undead-tree"
    },
    {
        "name": "[9] Турланг",
        "url": "https://dnd.su/bestiary/5615-turlang"
    },
    {
        "name": "[10] Ткач теней",
        "url": "https://dnd.su/bestiary/13084-darkweaver"
    },
    {
        "name": "[10] Тлексолотль",
        "url": "https://dnd.su/bestiary/8404-tlexolotl"
    },
    {
        "name": "[11] Торогар Стальной Кулак",
        "url": "https://dnd.su/bestiary/6434-torogar-steelfist"
    },
    {
        "name": "[11] Тролль-дух",
        "url": "https://dnd.su/bestiary/7055-spirit-troll"
    },
    {
        "name": "[11] Туманный великан",
        "url": "https://dnd.su/bestiary/17363-giant-fog"
    },
    {
        "name": "[12] Траксигор",
        "url": "https://dnd.su/bestiary/6418-traxigor"
    },
    {
        "name": "[13] Теневой дракон (шаблон)",
        "url": "https://dnd.su/bestiary/136-shadow-dragon-template"
    },
    {
        "name": "[14] Тиран смерти",
        "url": "https://dnd.su/bestiary/44-death-tyrant"
    },
    {
        "name": "[15] Тифон",
        "url": "https://dnd.su/bestiary/7211-typhon"
    },
    {
        "name": "[16] Титивилус",
        "url": "https://dnd.su/bestiary/7046-titivilus"
    },
    {
        "name": "[18] Тростани",
        "url": "https://dnd.su/bestiary/17293-trostani"
    },
    {
        "name": "[19] Таша, ведьма",
        "url": "https://dnd.su/bestiary/15721-tasha-the-witch"
    },
    {
        "name": "[22] Тробрианд",
        "url": "https://dnd.su/bestiary/6183-trobriand"
    },
    {
        "name": "[24] Таназир Квандрикс",
        "url": "https://dnd.su/bestiary/8329-tanazir-quandrix"
    },
    {
        "name": "[26] Тромократ",
        "url": "https://dnd.su/bestiary/7216-tromokratis"
    },
    {
        "name": "[30] Тараск",
        "url": "https://dnd.su/bestiary/300-tarrasque"
    },
    {
        "name": "[30] Тиамат",
        "url": "https://dnd.su/bestiary/491-tiamat"
    },
    {
        "name": "[0] Таран",
        "url": "https://dnd.su/bestiary/8975-ram"
    },
    {
        "name": "[0] Требушет",
        "url": "https://dnd.su/bestiary/8976-trebuchet"
    },
    {
        "name": "[?] Танцующий предмет",
        "url": "https://dnd.su/bestiary/3989-dancing-item"
    },
    {
        "name": "[0] Ургала Мелтимер",
        "url": "https://dnd.su/bestiary/7785-urgala-meltimer"
    },
    {
        "name": "[1/8] Узома Батен",
        "url": "https://dnd.su/bestiary/8544-uzoma-baten"
    },
    {
        "name": "[1/8] Усоногая Бесс",
        "url": "https://dnd.su/bestiary/7559-barnacle-bess"
    },
    {
        "name": "[1/4] Удав",
        "url": "https://dnd.su/bestiary/411-constrictor-snake"
    },
    {
        "name": "[1/4] Упряжная лошадь",
        "url": "https://dnd.su/bestiary/412-draft-horse"
    },
    {
        "name": "[1/4] Ученик волшебника",
        "url": "https://dnd.su/bestiary/6563-apprentice-wizard"
    },
    {
        "name": "[1] Улыбающийся кот",
        "url": "https://dnd.su/bestiary/12172-grinning-cat"
    },
    {
        "name": "[1] Упырь",
        "url": "https://dnd.su/bestiary/166-ghoul"
    },
    {
        "name": "[1] Утончённый",
        "url": "https://dnd.su/bestiary/8433-thinnings"
    },
    {
        "name": "[1] Утробный демон",
        "url": "https://dnd.su/bestiary/6833-maw-demon"
    },
    {
        "name": "[2] Ураган",
        "url": "https://dnd.su/bestiary/3655-hurricane"
    },
    {
        "name": "[2] Утгардский шаман",
        "url": "https://dnd.su/bestiary/5606-uthgardt-shaman"
    },
    {
        "name": "[2] Утопший клинок",
        "url": "https://dnd.su/bestiary/7503-drowned-blade"
    },
    {
        "name": "[2] Ученик с Визерблума",
        "url": "https://dnd.su/bestiary/8350-witherbloom-apprentice"
    },
    {
        "name": "[2] Ученик с Квандрикса",
        "url": "https://dnd.su/bestiary/8321-quandrix-apprentice"
    },
    {
        "name": "[2] Ученик с Лорхолда",
        "url": "https://dnd.su/bestiary/8067-lorehold-apprentice"
    },
    {
        "name": "[2] Ученик с Призмари",
        "url": "https://dnd.su/bestiary/8313-prismari-apprentice"
    },
    {
        "name": "[2] Ученик с Сильверквилла",
        "url": "https://dnd.su/bestiary/8342-silverquill-apprentice"
    },
    {
        "name": "[3] Уай",
        "url": "https://dnd.su/bestiary/5868-y"
    },
    {
        "name": "[3] Умертвие",
        "url": "https://dnd.su/bestiary/310-wight"
    },
    {
        "name": "[3] Уорвик Бумстимофф",
        "url": "https://dnd.su/bestiary/9265-warwyck-blastimoff"
    },
    {
        "name": "[3] Ускользающий зверь",
        "url": "https://dnd.su/bestiary/94-displacer-beast"
    },
    {
        "name": "[3] Утопший аскет",
        "url": "https://dnd.su/bestiary/7501-drowned-ascetic"
    },
    {
        "name": "[3] Учёный-археолог",
        "url": "https://dnd.su/bestiary/7863-scholarly-excavator"
    },
    {
        "name": "[4] Угольная смерть",
        "url": "https://dnd.su/bestiary/8031-ebondeath"
    },
    {
        "name": "[4] Ужас Сладкоежек",
        "url": "https://dnd.su/bestiary/17357-sweettooth-horror"
    },
    {
        "name": "[4] Ужас Халастера",
        "url": "https://dnd.su/bestiary/6205-halaster-horror"
    },
    {
        "name": "[4] Утопший убийца",
        "url": "https://dnd.su/bestiary/7502-drowned-assassin"
    },
    {
        "name": "[5] Ульдер Рейвенгард",
        "url": "https://dnd.su/bestiary/6423-ulder-ravengard"
    },
    {
        "name": "[5] Учёный-манипулятор",
        "url": "https://dnd.su/bestiary/7864-scholarly-mastermind"
    },
    {
        "name": "[6] Уордлоу Акрон",
        "url": "https://dnd.su/bestiary/7423-wardlow-akron"
    },
    {
        "name": "[8] Убийца Вистани",
        "url": "https://dnd.su/bestiary/4804-vistana-assassin"
    },
    {
        "name": "[8] Урстул Флоксин",
        "url": "https://dnd.su/bestiary/5371-urstul-floxin"
    },
    {
        "name": "[9] Улитарид",
        "url": "https://dnd.su/bestiary/7057-ulitharid"
    },
    {
        "name": "[9] Утопший властелин",
        "url": "https://dnd.su/bestiary/7504-drowned-master"
    },
    {
        "name": "[11] Улыбающийся облачный великан",
        "url": "https://dnd.su/bestiary/6543-cloud-giant-smiling-one"
    },
    {
        "name": "[11] Усовершенствованный сфинкс",
        "url": "https://dnd.su/bestiary/17368-enhanced-sphinx"
    },
    {
        "name": "[13] Ультролот",
        "url": "https://dnd.su/bestiary/323-ultroloth"
    },
    {
        "name": "[13] Утор",
        "url": "https://dnd.su/bestiary/7765-uthor"
    },
    {
        "name": "[15] Умбраксакар",
        "url": "https://dnd.su/bestiary/4398-umbraxakar"
    },
    {
        "name": "[16] Удаак",
        "url": "https://dnd.su/bestiary/7412-udaak"
    },
    {
        "name": "[22] Уголь",
        "url": "https://dnd.su/bestiary/10286-ember"
    },
    {
        "name": "[0] Ф'йорл",
        "url": "https://dnd.su/bestiary/5807-fyorl"
    },
    {
        "name": "[1/8] Фаэрл",
        "url": "https://dnd.su/bestiary/5040-faerl"
    },
    {
        "name": "[1/8] Фламф",
        "url": "https://dnd.su/bestiary/153-flumph"
    },
    {
        "name": "[1/8] Фламф Блинчик",
        "url": "https://dnd.su/bestiary/9252-flapjack"
    },
    {
        "name": "[1/2] Фарул",
        "url": "https://dnd.su/bestiary/6033-faroul"
    },
    {
        "name": "[1/2] Фея-заемщик",
        "url": "https://dnd.su/bestiary/17336-faerie-borrower"
    },
    {
        "name": "[1] Фея-вредитель",
        "url": "https://dnd.su/bestiary/17340-faerie-pest"
    },
    {
        "name": "[1] Фляга Вина",
        "url": "https://dnd.su/bestiary/6032-flask-of-wine"
    },
    {
        "name": "[2] Фала Лефалир",
        "url": "https://dnd.su/bestiary/5118-fala-lefaliir"
    },
    {
        "name": "[2] Фанатик культа",
        "url": "https://dnd.su/bestiary/443-cult-fanatic"
    },
    {
        "name": "[2] Феникс Наковальня",
        "url": "https://dnd.su/bestiary/7476-phoenix-anvil"
    },
    {
        "name": "[2] Фея-следопыты",
        "url": "https://dnd.su/bestiary/17338-faerie-pathlighter"
    },
    {
        "name": "[2] Флинч",
        "url": "https://dnd.su/bestiary/9257-flinch"
    },
    {
        "name": "[2] Флут",
        "url": "https://dnd.su/bestiary/6156-floot"
    },
    {
        "name": "[2] Фрулам Мондат",
        "url": "https://dnd.su/bestiary/3332-frulam-mondath"
    },
    {
        "name": "[3] Фарблекс Спаттергу",
        "url": "https://dnd.su/bestiary/3337-pharblex-spattergoo"
    },
    {
        "name": "[3] Ферол Сал",
        "url": "https://dnd.su/bestiary/7453-ferol-sal"
    },
    {
        "name": "[4] Фессалгидра",
        "url": "https://dnd.su/bestiary/3632-thessalhydra"
    },
    {
        "name": "[4] Фирболг-первобытный страж",
        "url": "https://dnd.su/bestiary/12115-firbolg-primeval-warden"
    },
    {
        "name": "[4] Флаббергаст",
        "url": "https://dnd.su/bestiary/7466-flabbergast"
    },
    {
        "name": "[5] Фелидар",
        "url": "https://dnd.su/bestiary/9395-felidar"
    },
    {
        "name": "[5] Фирболг-странник",
        "url": "https://dnd.su/bestiary/11831-firbolg-wanderer"
    },
    {
        "name": "[6] Фенсир застрельщик",
        "url": "https://dnd.su/bestiary/12101-fensir-skirmisher"
    },
    {
        "name": "[8] Фенсир пожиратель",
        "url": "https://dnd.su/bestiary/12099-fensir-devourer"
    },
    {
        "name": "[8] Фомор",
        "url": "https://dnd.su/bestiary/154-fomorian"
    },
    {
        "name": "[8] Фордж Фитцвильям",
        "url": "https://dnd.su/bestiary/10408-forge-fitzwilliam"
    },
    {
        "name": "[9] Филаския",
        "url": "https://dnd.su/bestiary/7201-phylaskia"
    },
    {
        "name": "[9] Флинд",
        "url": "https://dnd.su/bestiary/6752-flind"
    },
    {
        "name": "[9] Фрактин",
        "url": "https://dnd.su/bestiary/7688-fractine"
    },
    {
        "name": "[10] Фомор глубинный падальщик",
        "url": "https://dnd.su/bestiary/12124-fomorian-deep-crawler"
    },
    {
        "name": "[12] Фарран Йост",
        "url": "https://dnd.su/bestiary/7426-farrhan-yost"
    },
    {
        "name": "[12] Феонор",
        "url": "https://dnd.su/bestiary/6430-feonor"
    },
    {
        "name": "[12] Фомор колдун Тьмы",
        "url": "https://dnd.su/bestiary/12126-fomorian-warlock-of-the-dark"
    },
    {
        "name": "[16] Фазриан",
        "url": "https://dnd.su/bestiary/6149-fazrian"
    },
    {
        "name": "[16] Феникс",
        "url": "https://dnd.su/bestiary/6925-phoenix"
    },
    {
        "name": "[17] Фактол Скалл",
        "url": "https://dnd.su/bestiary/13214-factol-skall"
    },
    {
        "name": "[23] Фраз-Урб'луу",
        "url": "https://dnd.su/bestiary/5866-fraz-urbluu"
    },
    {
        "name": "[23] Фраз-Урб'луу",
        "url": "https://dnd.su/bestiary/6753-fraz-urbluu"
    },
    {
        "name": "[0] Хангхарасск",
        "url": "https://dnd.su/bestiary/6154-haungharassk"
    },
    {
        "name": "[0] Харкина Хант",
        "url": "https://dnd.su/bestiary/6447-harkina-hunt"
    },
    {
        "name": "[0] Хенрик ван дер Вурт",
        "url": "https://dnd.su/bestiary/4716-henrik-van-der-voort"
    },
    {
        "name": "[0] Хирал Мистур",
        "url": "https://dnd.su/bestiary/7700-hirai-mystrum"
    },
    {
        "name": "[1/8] Хадози-сослуживец",
        "url": "https://dnd.su/bestiary/8842-hadozee-shipmate"
    },
    {
        "name": "[1/8] Харгра",
        "url": "https://dnd.su/bestiary/13657-khargra"
    },
    {
        "name": "[1/8] Хладный л'рен Ночного моря",
        "url": "https://dnd.su/bestiary/8483-nightsea-chil-liren"
    },
    {
        "name": "[1/8] Хурон Штальмаст",
        "url": "https://dnd.su/bestiary/29491-huron-stahlmast"
    },
    {
        "name": "[1/4] Хайди Топорнобородая",
        "url": "https://dnd.su/bestiary/7441-heidi-axebeard"
    },
    {
        "name": "[1/4] Ханне Халлен",
        "url": "https://dnd.su/bestiary/5924-hanne-hallen"
    },
    {
        "name": "[1/4] Хестер Барч",
        "url": "https://dnd.su/bestiary/5190-hester-barch"
    },
    {
        "name": "[1/2] Хадози-воитель",
        "url": "https://dnd.su/bestiary/8843-hadozee-warrior"
    },
    {
        "name": "[1/2] Хитин",
        "url": "https://dnd.su/bestiary/6494-chitine"
    },
    {
        "name": "[1/2] Хобгоблин",
        "url": "https://dnd.su/bestiary/27-hobgoblin"
    },
    {
        "name": "[2] Хадози-исследователь",
        "url": "https://dnd.su/bestiary/8841-hadozee-explorer"
    },
    {
        "name": "[2] Халия",
        "url": "https://dnd.su/bestiary/12561-halia"
    },
    {
        "name": "[2] Хобгоблин железная тень",
        "url": "https://dnd.su/bestiary/6796-hobgoblin-iron-shadow"
    },
    {
        "name": "[2] Хранитель Вечного Пламени",
        "url": "https://dnd.su/bestiary/3680-eternal-flame-guardian"
    },
    {
        "name": "[2] Хулил Лутан",
        "url": "https://dnd.su/bestiary/7454-hulil-lutan"
    },
    {
        "name": "[2] Хью Хакинстоун",
        "url": "https://dnd.su/bestiary/6035-hew-hackinstone"
    },
    {
        "name": "[3] Халлвас Деналор",
        "url": "https://dnd.su/bestiary/7431-hallwas-denalor"
    },
    {
        "name": "[3] Холдрит",
        "url": "https://dnd.su/bestiary/6496-choldrith"
    },
    {
        "name": "[4] Хобгоблин опустошитель",
        "url": "https://dnd.su/bestiary/6795-hobgoblin-devastator"
    },
    {
        "name": "[4] Хранитель завесы Ирд",
        "url": "https://dnd.su/bestiary/10288-irda-veil-keeper"
    },
    {
        "name": "[5] Хеленрей",
        "url": "https://dnd.su/bestiary/4916-hellenrae"
    },
    {
        "name": "[5] Хельга Рувак",
        "url": "https://dnd.su/bestiary/4710-helga-ruvak"
    },
    {
        "name": "[5] Хенгар Эйсенвард",
        "url": "https://dnd.su/bestiary/5811-hengar-aesnvaard"
    },
    {
        "name": "[5] Хидия Мунмаск",
        "url": "https://dnd.su/bestiary/7743-hydia-moonmusk"
    },
    {
        "name": "[5] Ходок холодного сияния",
        "url": "https://dnd.su/bestiary/5778-coldlight-walker"
    },
    {
        "name": "[5] Холмовой великан",
        "url": "https://dnd.su/bestiary/170-hill-giant"
    },
    {
        "name": "[5] Хольга Килгор",
        "url": "https://dnd.su/bestiary/10409-holga-kilgore"
    },
    {
        "name": "[5] Храббоз",
        "url": "https://dnd.su/bestiary/5291-hrabbaz"
    },
    {
        "name": "[6] Химера",
        "url": "https://dnd.su/bestiary/53-chimera"
    },
    {
        "name": "[6] Хобгоблин военачальник",
        "url": "https://dnd.su/bestiary/201-hobgoblin-warlord"
    },
    {
        "name": "[7] Хэйнт",
        "url": "https://dnd.su/bestiary/8409-haint"
    },
    {
        "name": "[8] Хастейн",
        "url": "https://dnd.su/bestiary/9259-hastain"
    },
    {
        "name": "[8] Хезроу",
        "url": "https://dnd.su/bestiary/69-hezrou"
    },
    {
        "name": "[8] Хозяйка леса",
        "url": "https://dnd.su/bestiary/10285-forest-master"
    },
    {
        "name": "[9] Харшнаг Мрачный",
        "url": "https://dnd.su/bestiary/7732-harshnag-the-grim"
    },
    {
        "name": "[9] Хашалак куори",
        "url": "https://dnd.su/bestiary/4990-hashalaq-quori"
    },
    {
        "name": "[14] Хазвонгел",
        "url": "https://dnd.su/bestiary/15700-hazvongel"
    },
    {
        "name": "[14] Хулгаз",
        "url": "https://dnd.su/bestiary/13282-hulgaz"
    },
    {
        "name": "[16] Хлэм",
        "url": "https://dnd.su/bestiary/5203-hlam"
    },
    {
        "name": "[18] Ходящая статуя Глубоководья",
        "url": "https://dnd.su/bestiary/5184-walking-statue-of-waterdeep"
    },
    {
        "name": "[21] Хутиджин",
        "url": "https://dnd.su/bestiary/6798-hutijin"
    },
    {
        "name": "[23] Халастер Чёрный плащ",
        "url": "https://dnd.su/bestiary/5382-halaster-blackcloak"
    },
    {
        "name": "[0] Цзи Лиань",
        "url": "https://dnd.su/bestiary/7786-zi-liang"
    },
    {
        "name": "[3] Цеповая улитка",
        "url": "https://dnd.su/bestiary/6751-flail-snail"
    },
    {
        "name": "[6] Цербер из Подземного царства",
        "url": "https://dnd.su/bestiary/7179-underworld-cerberus"
    },
    {
        "name": "[6] Циклоп",
        "url": "https://dnd.su/bestiary/59-cyclops"
    },
    {
        "name": "[7] Цукора куори",
        "url": "https://dnd.su/bestiary/4992-tsucora-quori"
    },
    {
        "name": "[8] Циклоп Нивикса",
        "url": "https://dnd.su/bestiary/17276-nivix-cyclops"
    },
    {
        "name": "[9] Цератопс",
        "url": "https://dnd.su/bestiary/12094-ceratops"
    },
    {
        "name": "[9] Цзянши",
        "url": "https://dnd.su/bestiary/6867-jiangshi"
    },
    {
        "name": "[21] Цирюльница Бёрни",
        "url": "https://dnd.su/bestiary/6442-burney-the-barber"
    },
    {
        "name": "[0] Чайная чашка для чашкобоя",
        "url": "https://dnd.su/bestiary/8356-scufflecup-teacup"
    },
    {
        "name": "[0] Чвинга",
        "url": "https://dnd.su/bestiary/2642-chwinga"
    },
    {
        "name": "[0] Чвинга",
        "url": "https://dnd.su/bestiary/8718-chwinga"
    },
    {
        "name": "[0] Черепная крыса",
        "url": "https://dnd.su/bestiary/6577-cranium-rat"
    },
    {
        "name": "[0] Черепная крыса пискунья",
        "url": "https://dnd.su/bestiary/13076-cranium-rat-squeaker"
    },
    {
        "name": "[1/4] Член банды гоблинов",
        "url": "https://dnd.su/bestiary/17327-goblin-gang-member"
    },
    {
        "name": "[1/4] Чудище звёздных порождений",
        "url": "https://dnd.su/bestiary/7030-star-spawn-grue"
    },
    {
        "name": "[1/4] Чукка",
        "url": "https://dnd.su/bestiary/6425-chukka"
    },
    {
        "name": "[1/2] Чейнджлинг",
        "url": "https://dnd.su/bestiary/5001-changeling"
    },
    {
        "name": "[1/2] Человекообразная обезьяна",
        "url": "https://dnd.su/bestiary/413-ape"
    },
    {
        "name": "[1/2] Чёрный медведь",
        "url": "https://dnd.su/bestiary/414-black-bear"
    },
    {
        "name": "[1] Черепобóец Миркула",
        "url": "https://dnd.su/bestiary/6381-skull-lasher-of-myrkul"
    },
    {
        "name": "[1] Чистокровная юань-ти",
        "url": "https://dnd.su/bestiary/319-yuan-ti-pureblood"
    },
    {
        "name": "[2] Чемпион Горма",
        "url": "https://dnd.su/bestiary/17235-champion-of-gorm"
    },
    {
        "name": "[2] Чемпион Мадаруа",
        "url": "https://dnd.su/bestiary/17211-champion-of-madarua"
    },
    {
        "name": "[2] Чемпион Усамигараса",
        "url": "https://dnd.su/bestiary/17222-champion-of-usamigaras"
    },
    {
        "name": "[2] Чёрный сторожевой дрейк",
        "url": "https://dnd.su/bestiary/6792-black-guard-drake"
    },
    {
        "name": "[3] Чутьё Совершенного ордена",
        "url": "https://dnd.su/bestiary/13211-transcendent-order-instinct"
    },
    {
        "name": "[4] Чардалиновый берсерк",
        "url": "https://dnd.su/bestiary/5779-chardalyn-berserker"
    },
    {
        "name": "[4] Чууль",
        "url": "https://dnd.su/bestiary/54-chuul"
    },
    {
        "name": "[4] Чууль споровый слуга",
        "url": "https://dnd.su/bestiary/5843-chuul-spore-servant"
    },
    {
        "name": "[4] Чёрная слизь",
        "url": "https://dnd.su/bestiary/255-black-pudding"
    },
    {
        "name": "[5] Череп Баала",
        "url": "https://dnd.su/bestiary/6379-deaths-head-of-bhaal"
    },
    {
        "name": "[5] Чёрная гадюка",
        "url": "https://dnd.su/bestiary/5107-black-viper"
    },
    {
        "name": "[6] Чазм",
        "url": "https://dnd.su/bestiary/65-chasme"
    },
    {
        "name": "[6] Четырехрукий тролль",
        "url": "https://dnd.su/bestiary/480-four-armed-troll"
    },
    {
        "name": "[6] Чёрная перчатка Бэйна",
        "url": "https://dnd.su/bestiary/4480-black-gauntlet-of-bane"
    },
    {
        "name": "[7] Черничный дракон Шелдон",
        "url": "https://dnd.su/bestiary/11087-sheldon-the-blueberry-dragon"
    },
    {
        "name": "[7] Чёрный абишай",
        "url": "https://dnd.su/bestiary/6453-black-abishai"
    },
    {
        "name": "[9] Чемпион",
        "url": "https://dnd.su/bestiary/6493-champion"
    },
    {
        "name": "[10] Чармейн Деймор",
        "url": "https://dnd.su/bestiary/12751-charmayne-daymore"
    },
    {
        "name": "[10] Четырёхрукая статуя",
        "url": "https://dnd.su/bestiary/5903-four-armed-statue"
    },
    {
        "name": "[11] Чардалиновый дракон",
        "url": "https://dnd.su/bestiary/5780-chardalyn-dragon"
    },
    {
        "name": "[11] Чудовищный перитон",
        "url": "https://dnd.su/bestiary/7537-monstrous-peryton"
    },
    {
        "name": "[15] Червь порождений ядра",
        "url": "https://dnd.su/bestiary/7272-core-spawn-worm"
    },
    {
        "name": "[0] Шакал",
        "url": "https://dnd.su/bestiary/415-jackal"
    },
    {
        "name": "[0] Шалвус Мартолио",
        "url": "https://dnd.su/bestiary/7787-shalvus-martholio"
    },
    {
        "name": "[0] Шира",
        "url": "https://dnd.su/bestiary/7900-shira"
    },
    {
        "name": "[1/8] Шарик-кошмарик",
        "url": "https://dnd.su/bestiary/7690-goon-balloon"
    },
    {
        "name": "[1/4] Шустрик",
        "url": "https://dnd.su/bestiary/4973-fastieth"
    },
    {
        "name": "[1/4] Шуушар Пробудившийся",
        "url": "https://dnd.su/bestiary/5881-shuushar-the-awakened"
    },
    {
        "name": "[1/2] Шакальник",
        "url": "https://dnd.su/bestiary/207-jackalwere"
    },
    {
        "name": "[1/2] Шарвин Хукрел",
        "url": "https://dnd.su/bestiary/17441-sharwyn-hucrele"
    },
    {
        "name": "[1/2] Шифтер",
        "url": "https://dnd.su/bestiary/5005-shifter"
    },
    {
        "name": "[1/2] Шольдар Шольдарович",
        "url": "https://dnd.su/bestiary/4797-szoldar-szoldarovich"
    },
    {
        "name": "[1/2] Шустрик",
        "url": "https://dnd.su/bestiary/5048-kiddywidget"
    },
    {
        "name": "[1] Шпион",
        "url": "https://dnd.su/bestiary/444-spy"
    },
    {
        "name": "[1] Шпион Альянса лордов",
        "url": "https://dnd.su/bestiary/4479-lords-alliance-spy"
    },
    {
        "name": "[1] Шпион Вистани",
        "url": "https://dnd.su/bestiary/4809-vistana-spy"
    },
    {
        "name": "[1] Шпион мысли",
        "url": "https://dnd.su/bestiary/17319-thought-spy"
    },
    {
        "name": "[2] Шард Шаннер",
        "url": "https://dnd.su/bestiary/5181-shard-shunner"
    },
    {
        "name": "[2] Шарда",
        "url": "https://dnd.su/bestiary/7727-sharda"
    },
    {
        "name": "[3] Шипболдт",
        "url": "https://dnd.su/bestiary/4779-thornboldt"
    },
    {
        "name": "[4] Шемшиме",
        "url": "https://dnd.su/bestiary/5066-shemshime"
    },
    {
        "name": "[4] Шишка плазмоидов",
        "url": "https://dnd.su/bestiary/8854-plasmoid-boss"
    },
    {
        "name": "[4] Шлемоносный ужас",
        "url": "https://dnd.su/bestiary/198-helmed-horror"
    },
    {
        "name": "[4] Шлемоносный ужас созданный на Авернусе",
        "url": "https://dnd.su/bestiary/6415-helmed-horror-fashioned-on-avernus"
    },
    {
        "name": "[4] Шоалар Куандерил",
        "url": "https://dnd.su/bestiary/4928-shoalar-quanderil"
    },
    {
        "name": "[5] Шаго",
        "url": "https://dnd.su/bestiary/6036-shago"
    },
    {
        "name": "[5] Шаман Голгари",
        "url": "https://dnd.su/bestiary/17306-golgari-shaman"
    },
    {
        "name": "[5] Шипастый дьявол (Гаматула)",
        "url": "https://dnd.su/bestiary/77-barbed-devil"
    },
    {
        "name": "[5] Шунн Шуррет",
        "url": "https://dnd.su/bestiary/6227-shunn-shurreth"
    },
    {
        "name": "[5] Шустроштука",
        "url": "https://dnd.su/bestiary/3641-skitterwidget"
    },
    {
        "name": "[6] Шедрак",
        "url": "https://dnd.su/bestiary/5925-shedrak"
    },
    {
        "name": "[7] Шадар-кай теневой танцор",
        "url": "https://dnd.su/bestiary/6931-shadar-kai-shadow-dancer"
    },
    {
        "name": "[7] Шмат плоти",
        "url": "https://dnd.su/bestiary/12501-flesh-meld"
    },
    {
        "name": "[8] Шусува",
        "url": "https://dnd.su/bestiary/6937-shoosuva"
    },
    {
        "name": "[9] Шадар-кай ткач мрака",
        "url": "https://dnd.su/bestiary/6934-shadar-kai-gloom-weaver"
    },
    {
        "name": "[10] Шаман раскола",
        "url": "https://dnd.su/bestiary/17262-sunder-shaman"
    },
    {
        "name": "[11] Шадар-кай торговец душами",
        "url": "https://dnd.su/bestiary/6932-shadar-kai-soul-monger"
    },
    {
        "name": "[11] Штормовой краб",
        "url": "https://dnd.su/bestiary/12265-storm-crab"
    },
    {
        "name": "[11] Штормовой олень",
        "url": "https://dnd.su/bestiary/17358-tempest-hart"
    },
    {
        "name": "[13] Штормовой великан",
        "url": "https://dnd.su/bestiary/172-storm-giant"
    },
    {
        "name": "[14] Шемешка",
        "url": "https://dnd.su/bestiary/13127-shemeshka"
    },
    {
        "name": "[14] Шокеротоптун",
        "url": "https://dnd.su/bestiary/6180-shockerstomper"
    },
    {
        "name": "[16] Штормовой великан квинтэссент",
        "url": "https://dnd.su/bestiary/7039-storm-giant-quintessent"
    },
    {
        "name": "[20] Штормовой великан призыватель бури",
        "url": "https://dnd.su/bestiary/12266-storm-giant-tempest-caller"
    },
    {
        "name": "[22] Шадрикс Сильверквилл",
        "url": "https://dnd.su/bestiary/8341-shadrix-silverquill"
    },
    {
        "name": "[0] Штальмастер",
        "url": "https://dnd.su/bestiary/29489-stahlmaster"
    },
    {
        "name": "[0] Щитовой дварф обыватель",
        "url": "https://dnd.su/bestiary/7709-shield-dwarf-commoner"
    },
    {
        "name": "[3] Щетинистый болотник",
        "url": "https://dnd.su/bestiary/7406-bristled-moorbounder"
    },
    {
        "name": "[3] Щитовой дварф ветеран",
        "url": "https://dnd.su/bestiary/7706-shield-dwarf-veteran"
    },
    {
        "name": "[7] Щитостраж",
        "url": "https://dnd.su/bestiary/285-shield-guardian"
    },
    {
        "name": "[0] Эльзерина Кассалантер",
        "url": "https://dnd.su/bestiary/5115-elzerina-cassalanter"
    },
    {
        "name": "[1/8] Энна “Безмолвная” Галакиир (1-4 уровня)",
        "url": "https://dnd.su/bestiary/12717-enna-the-silence-galakiir-levels-1-4"
    },
    {
        "name": "[1/2] Эльдет Фельдрун",
        "url": "https://dnd.su/bestiary/5877-eldeth-feldrun"
    },
    {
        "name": "[1] Эблис",
        "url": "https://dnd.su/bestiary/6023-eblis"
    },
    {
        "name": "[1] Энна “Безмолвная” Галакиир (5-8 уровня)",
        "url": "https://dnd.su/bestiary/12718-enna-the-silence-galakiir-levels-5-8"
    },
    {
        "name": "[2] Эйзер",
        "url": "https://dnd.su/bestiary/39-azer"
    },
    {
        "name": "[2] Элайна Сартел",
        "url": "https://dnd.su/bestiary/9253-elaina-sartell"
    },
    {
        "name": "[2] Элитный воин грунгов",
        "url": "https://dnd.su/bestiary/6784-grung-elite-warrior"
    },
    {
        "name": "[2] Элкхорн",
        "url": "https://dnd.su/bestiary/8431-elkhorn"
    },
    {
        "name": "[2] Эмбрик",
        "url": "https://dnd.su/bestiary/5116-embric"
    },
    {
        "name": "[2] Эттеркап",
        "url": "https://dnd.su/bestiary/150-ettercap"
    },
    {
        "name": "[3] Эвин Гилталл",
        "url": "https://dnd.su/bestiary/11834-evin-giltall"
    },
    {
        "name": "[3] Эйдолон летящего шага",
        "url": "https://dnd.su/bestiary/7185-flitterstep-eidolon"
    },
    {
        "name": "[3] Эмиль Торанеску",
        "url": "https://dnd.su/bestiary/4697-emil-toranescu"
    },
    {
        "name": "[4] Элок Джахарвон",
        "url": "https://dnd.su/bestiary/6053-elok-jaharwon"
    },
    {
        "name": "[4] Эттин",
        "url": "https://dnd.su/bestiary/151-ettin"
    },
    {
        "name": "[5] Эдгин Дарвис",
        "url": "https://dnd.su/bestiary/10407-edgin-darvis"
    },
    {
        "name": "[5] Эйдолон призрачных клинков",
        "url": "https://dnd.su/bestiary/7186-ghostblade-eidolon"
    },
    {
        "name": "[5] Экини-Афа",
        "url": "https://dnd.su/bestiary/6052-ekene-afa"
    },
    {
        "name": "[5] Электрический голем",
        "url": "https://dnd.su/bestiary/5052-lightning-golem"
    },
    {
        "name": "[5] Элизар Драйфлагон",
        "url": "https://dnd.su/bestiary/3681-elizar-dryflagon"
    },
    {
        "name": "[5] Элитный воитель дроу",
        "url": "https://dnd.su/bestiary/146-drow-elite-warrior"
    },
    {
        "name": "[5] Элифас Адуляре",
        "url": "https://dnd.su/bestiary/12753-eliphas-adulare"
    },
    {
        "name": "[5] Эшер",
        "url": "https://dnd.su/bestiary/4698-escher"
    },
    {
        "name": "[6] Экзорцист Вестников праха",
        "url": "https://dnd.su/bestiary/13215-heralds-of-dust-exorcist"
    },
    {
        "name": "[6] Эллиах",
        "url": "https://dnd.su/bestiary/6443-elliach"
    },
    {
        "name": "[6] Эмиссар порождений ядра",
        "url": "https://dnd.su/bestiary/7269-core-spawn-emissary"
    },
    {
        "name": "[6] Энделин Лунная погибель",
        "url": "https://dnd.su/bestiary/8413-endelyn-moongrave"
    },
    {
        "name": "[6] Эрма Шниб",
        "url": "https://dnd.su/bestiary/7419-erma-schnieb"
    },
    {
        "name": "[8] Энна “Безмолвная” Галакиир (9-11 уровня)",
        "url": "https://dnd.su/bestiary/12719-enna-the-silence-galakiir-levels-9-11"
    },
    {
        "name": "[8] Эорский обратитель",
        "url": "https://dnd.su/bestiary/7266-aeorian-reverser"
    },
    {
        "name": "[8] Эсмеральда д’Авенир",
        "url": "https://dnd.su/bestiary/4669-ezmerelda-davenir"
    },
    {
        "name": "[8] Эттин-цереморф",
        "url": "https://dnd.su/bestiary/12098-ettin-ceremorph"
    },
    {
        "name": "[9] Эмбероза",
        "url": "https://dnd.su/bestiary/6177-emberosa"
    },
    {
        "name": "[10] Экзетантер",
        "url": "https://dnd.su/bestiary/4699-exethanter"
    },
    {
        "name": "[10] Эорский поглотитель",
        "url": "https://dnd.su/bestiary/7263-aeorian-absorber"
    },
    {
        "name": "[12] Эйдолон",
        "url": "https://dnd.su/bestiary/6718-eidolon"
    },
    {
        "name": "[12] Эорский изничтожитель",
        "url": "https://dnd.su/bestiary/7265-aeorian-nullifier"
    },
    {
        "name": "[12] Эриния",
        "url": "https://dnd.su/bestiary/81-erinyes"
    },
    {
        "name": "[12] Эстетик",
        "url": "https://dnd.su/bestiary/8823-esthetic"
    },
    {
        "name": "[18] Эвриала",
        "url": "https://dnd.su/bestiary/13302-euryale"
    },
    {
        "name": "[21] Эззат",
        "url": "https://dnd.su/bestiary/6152-ezzat"
    },
    {
        "name": "[23] Эмпирей",
        "url": "https://dnd.su/bestiary/149-empyrean"
    },
    {
        "name": "[26] Эрцгерцогиня Авернуса Зариэль",
        "url": "https://dnd.su/bestiary/6371-archduke-zariel-of-avernus"
    },
    {
        "name": "[0] Эксперт",
        "url": "https://dnd.su/bestiary/8016-expert"
    },
    {
        "name": "[0] Эксперт",
        "url": "https://dnd.su/bestiary/8024-expert"
    },
    {
        "name": "[1/4] Юк Юк",
        "url": "https://dnd.su/bestiary/5873-yuk-yuk"
    },
    {
        "name": "[2] Юань-ти страж выводка",
        "url": "https://dnd.su/bestiary/7081-yuan-ti-broodguard"
    },
    {
        "name": "[2] Юный крюкастый ужас",
        "url": "https://dnd.su/bestiary/5918-juvenile-hook-horror"
    },
    {
        "name": "[3] Юань-ти проклинатель",
        "url": "https://dnd.su/bestiary/318-yuan-ti-malison"
    },
    {
        "name": "[3] Юань-ти проклинатель (Вид 1)",
        "url": "https://dnd.su/bestiary/5651-yuan-ti-malison-type-1"
    },
    {
        "name": "[3] Юань-ти проклинатель (Вид 2)",
        "url": "https://dnd.su/bestiary/5652-yuan-ti-malison-type-2"
    },
    {
        "name": "[3] Юань-ти проклинатель (Вид 3)",
        "url": "https://dnd.su/bestiary/5653-yuan-ti-malison-type-3"
    },
    {
        "name": "[3] Юань-ти проклинатель (Вид 4)",
        "url": "https://dnd.su/bestiary/5659-yuan-ti-malison-type-4"
    },
    {
        "name": "[3] Юань-ти проклинатель (Вид 5)",
        "url": "https://dnd.su/bestiary/5660-yuan-ti-malison-type-5"
    },
    {
        "name": "[3] Юань-ти священник",
        "url": "https://dnd.su/bestiary/6076-yuan-ti-priest"
    },
    {
        "name": "[4] Юань-ти говорящая в кошмарах",
        "url": "https://dnd.su/bestiary/7083-yuan-ti-nightmare-speaker"
    },
    {
        "name": "[4] Юань-ти шепчущий в мыслях",
        "url": "https://dnd.su/bestiary/7082-yuan-ti-mind-whisperer"
    },
    {
        "name": "[5] Юань-ти хозяин ямы",
        "url": "https://dnd.su/bestiary/7084-yuan-ti-pit-master"
    },
    {
        "name": "[12] Юань-ти анафема",
        "url": "https://dnd.su/bestiary/7076-yuan-ti-anathema"
    },
    {
        "name": "[0] Ястреб",
        "url": "https://dnd.su/bestiary/417-hawk"
    },
    {
        "name": "[0] Ящерица",
        "url": "https://dnd.su/bestiary/418-lizard"
    },
    {
        "name": "[1/8] Ядовитая змея",
        "url": "https://dnd.su/bestiary/416-poisonous-snake"
    },
    {
        "name": "[1/8] Яла Гролхунд",
        "url": "https://dnd.su/bestiary/5378-yalah-gralhund"
    },
    {
        "name": "[1/8] Янг-Ги",
        "url": "https://dnd.su/bestiary/8546-young-gi"
    },
    {
        "name": "[1/2] Ягра Стоунфист",
        "url": "https://dnd.su/bestiary/5377-yagra-stonefist"
    },
    {
        "name": "[1/2] Янта Увещеватель Камня",
        "url": "https://dnd.su/bestiary/5906-vantha-coaxrock"
    },
    {
        "name": "[1] Ярно \"Стеклянный посох\" Альбрек",
        "url": "https://dnd.su/bestiary/12555-iarno-glasstaff-albrek"
    },
    {
        "name": "[1] Ястреб разорителей",
        "url": "https://dnd.su/bestiary/13288-harrow-hawk"
    },
    {
        "name": "[1] Ящерица Лейла",
        "url": "https://dnd.su/bestiary/8043-layla-the-lizard"
    },
    {
        "name": "[4] Ядовитая аномалия",
        "url": "https://dnd.su/bestiary/6206-poison-weird"
    },
    {
        "name": "[5] Ярунд Элькхардт",
        "url": "https://dnd.su/bestiary/5766-jarund-elkhardt"
    },
    {
        "name": "[6] Яростное пламя",
        "url": "https://dnd.su/bestiary/4920-flamewrath"
    },
    {
        "name": "[7] Ядовитый тролль",
        "url": "https://dnd.su/bestiary/7056-venom-troll"
    },
    {
        "name": "[8] Ялага Маладвин",
        "url": "https://dnd.su/bestiary/7571-yalaga-maladwyn"
    },
    {
        "name": "[8] Ярл Сторвальд",
        "url": "https://dnd.su/bestiary/5619-jarl-storvald"
    },
    {
        "name": "[10] Янтарный голем",
        "url": "https://dnd.su/bestiary/4676-amber-golem"
    },
    {
        "name": "[11] Ягнолот",
        "url": "https://dnd.su/bestiary/7073-yagnoloth"
    },
    {
        "name": "[11] Ясновидящий свежеватель разума",
        "url": "https://dnd.su/bestiary/12510-mind-flayer-clairvoyant"
    },
    {
        "name": "[14] Ярость Костччи",
        "url": "https://dnd.su/bestiary/12156-fury-of-kostchtchie"
    },
    {
        "name": "[18] Ян-Си-Бин",
        "url": "https://dnd.su/bestiary/3659-yan-c-bin"
    }
];

let winState = {};
let zBase = 10;
let focusedId = null;

document.addEventListener('DOMContentLoaded', () => {
    setupSearch();
    loadSession();

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', stopDrag);
});

// --- Логика Поиска ------------------------------------------------
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const resultsList = document.getElementById('results-list');

    if (!searchInput || !resultsList) return;

    // Выводим количество загруженных монстров прямо в плейсхолдер
    searchInput.placeholder = `Поиск по имени (доступно ${bestiaryData.length})...`;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsList.innerHTML = '';

        if (query === '') return;

        const filtered = bestiaryData.filter(item =>
            item.name.toLowerCase().includes(query)
        );

        filtered.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;
            li.title = item.name;

            li.addEventListener('click', () => {
                const winId = btoa(encodeURIComponent(item.url)).replace(/=/g, '');
                createWindow(winId, item.name, item.url);
            });

            resultsList.appendChild(li);
        });
    });
}

// --- Управление Окнами (Desktop Environment) ----------------------
function createWindow(id, name, url, savedX = null, savedY = null) {
    if (winState[id]) {
        focusWin(id);
        return;
    };

    const workspace = document.getElementById('workspace');
    if (!workspace) return;

    const winEl = document.createElement('div');
    winEl.className = 'window';
    winEl.id = `win-${id}`;

    const defaultX = 50 + (Object.keys(winState).length * 25) % (workspace.clientWidth - 500);
    const defaultY = 50 + (Object.keys(winState).length * 25) % (workspace.clientHeight - 600);

    winEl.style.left = `${savedX !== null ? savedX : defaultX}px`;
    winEl.style.top = `${savedY !== null ? savedY : defaultY}px`;

    winEl.innerHTML = `
        <div class="window-header" onmousedown="startDrag(event, '${id}')">
            <span class="window-title">${name}</span>
            <div class="window-controls">
                <button class="close-btn" onclick="closeWin('${id}', event)">&times;</button>
            </div>
        </div>
        <div class="window-body">
            <div class="iframe-overlay"></div>
            <iframe src="${url}" loading="lazy"></iframe>
        </div>
    `;

    winEl.addEventListener('mousedown', () => focusWin(id));
    workspace.appendChild(winEl);

    winState[id] = {
        el: winEl,
        name: name,
        url: url,
        x: savedX !== null ? savedX : defaultX,
        y: savedY !== null ? savedY : defaultY
    };

    focusWin(id);
    saveSession();
}

function focusWin(id) {
    if (!winState[id]) return;
    if (focusedId === id && winState[id].el.style.zIndex == zBase) return;

    Object.values(winState).forEach(s => s.el.classList.remove('focused'));

    winState[id].el.classList.add('focused');
    winState[id].el.style.zIndex = ++zBase;

    focusedId = id;
    saveSession();
}

function closeWin(id, event) {
    if (event) event.stopPropagation();
    if (winState[id]) {
        winState[id].el.remove();
        delete winState[id];
        if (focusedId === id) focusedId = null;
        saveSession();
    }
}

// --- Реализация Перетаскивания (Drag & Drop) ----------------------
let dragInfo = { isDragging: false, id: null, startX: 0, startY: 0, startLeft: 0, startTop: 0 };

function startDrag(e, id) {
    focusWin(id);
    const win = winState[id];
    if (!win) return;

    win.el.classList.add('dragging');

    dragInfo = {
        isDragging: true,
        id: id,
        startX: e.clientX,
        startY: e.clientY,
        startLeft: parseInt(win.el.style.left, 10) || 0,
        startTop: parseInt(win.el.style.top, 10) || 0
    };

    e.preventDefault();
}

function handleDrag(e) {
    if (!dragInfo.isDragging) return;
    const win = winState[dragInfo.id];
    if (!win) return;

    const dx = e.clientX - dragInfo.startX;
    const dy = e.clientY - dragInfo.startY;

    const newLeft = dragInfo.startLeft + dx;
    const newTop = dragInfo.startTop + dy;

    win.el.style.left = `${newLeft}px`;
    win.el.style.top = `${newTop}px`;

    win.x = newLeft;
    win.y = newTop;
}

function stopDrag() {
    if (!dragInfo.isDragging) return;
    const win = winState[dragInfo.id];
    if (win) win.el.classList.remove('dragging');
    dragInfo.isDragging = false;
    dragInfo.id = null;
    saveSession();
}

// --- Сохранение сессии (Local Storage) ----------------------------
function saveSession() {
    const sessionData = {
        focusedId: focusedId,
        windows: Object.keys(winState).map(id => ({
            id: id,
            name: winState[id].name,
            url: winState[id].url,
            x: winState[id].x,
            y: winState[id].y
        }))
    };
    localStorage.setItem('bestiary_desktop_session', JSON.stringify(sessionData));
}

function loadSession() {
    try {
        const rawData = localStorage.getItem('bestiary_desktop_session');
        if (!rawData) return;

        const sessionData = JSON.parse(rawData);
        if (!sessionData || !sessionData.windows) return;

        sessionData.windows.forEach(w => {
            createWindow(w.id, w.name, w.url, w.x, w.y);
        });

        if (sessionData.focusedId) {
            focusWin(sessionData.focusedId);
        }
    } catch (e) {
        console.error("Не удалось восстановить сессию:", e);
    }
}
