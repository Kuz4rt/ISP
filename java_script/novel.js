function Menu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

let stepNow = "";

let ArrayQuest = {
    1: {
        name: "",
        text: "При пробуждении я обнаружил, что в классе почти никого нет, ключевое слово 'почти'.",
        img: ['../image/novell/klass.jpg'],
        next: ['2', 'Далее'],
    },

    2: {
        name: "Староста",
        text: "Ты чего тут разлёгся? А ну, марш домой, школа уже скоро закроется.",
        img: ['../image/novell/klass_sl.png'],
        next: ['2.1', 'Отвали, дай поспать', '3', 'Да, да, конечно, уже иду'],
    },

    2.1: {
        name: "",
        text: "Темнота, я уснул на школьной парте во время урока.",
        img: ['../image/novell/BLACK.jpeg'],
        next: ['1', 'Далее'],
    },

    3: {
        name: "",
        text: "Пришлось повиноваться требованиям старосты и покинуть уютную парту. В коридоре было совсем пусто, оно и понятно, кажется, я проспал до самого вечера.",
        img: ['../image/novell/kori.jpg'],
        next: ['4', 'Пойти к лестнице'],
    },


    4: {
        name: "",
        text: "Уже подходя к лестнице, меня озарила мысль. А может сходить на крышу?",
        img: ['../image/novell/lest.jpg'],
        next: ['5', 'Спуститься вниз', '4.1', 'Подняться наверх'],
    },

    4.1: {
        name: "",
        text: "Отсюда открывался прекрасный вид на город. Вдоволь налюбовавшись им, я понял, что тут больше нечего ловить.",
        img: ['../image/novell/roof.jpg'],
        next: ['4.2', 'Спуститься обратно'],
    },

    4.2: {
        name: "",
        text: "Уже собравшись покидать это место, я увидел как на крышу поднялась какая-то компашка парней. Меня они не замечали, или не хотели замечать.",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.3', 'Послушать о чем они болтают'],
    },

    4.3: {
        name: "Парень 1",
        text: "Слышали? В столовой “чипизация” началась! В котлеты добавляют нано-ботов! Правительство все скрывает!",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.4', '...'],
    },

    4.4: {
        name: "Парень 2",
        text: "Опять ты со своей теорией заговора. Лучше бы ты ботаном был, честное слово.",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.5', '...'],
    },

    4.5: {
        name: "Парень 1",
        text: "Я вам ещё докажу! Я знаю правду! Земля плоская!",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.6', '...'],
    },

    4.6: {
        name: "Парень 1",
        text: "Я вам ещё докажу! Я знаю правду! Земля плоская!",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.61', 'Продолжать слушать', '4.7', 'Свалить отсюда'],
    },

    4.61: {
        name: "Парень 2",
        text: "Ладно, вернёмся к делу. Сегодня тот день, когда они начинают воплощать свои коварные планы!",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.62', '...'],
    },

    4.62: {
        name: "Парень 1",
        text: "Кто “они”? Рептилоиды из правительства?",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.63', '...'],
    },

    4.63: {
        name: "Парень 2",
        text: "Ну, не обязательно рептилоиды… Хотя… Никогда не знаешь наверняка. Я говорю о мировом правительстве! Они уже близки к захвату!",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.64', '...'],
    },

    4.64: {
        name: "Парень 3",
        text: "Мировом правительстве? Ты серьезно? И как они планируют это сделать? Заменят всех президентов на роботов?",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.65', '...'],
    },

    4.65: {
        name: "Парень 2",
        text: "Не роботов! Скорее, промывка мозгов! Контроль над СМИ, финансами… Вспомните, как все подорожало в последнее время! Это же они манипулируют!",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.66', '...'],
    },

    4.66: {
        name: "Парень 2",
        text: "Я знаю, они наблюдают за нами… даже здесь, на этой крыше!",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.67', '...'],
    },

    4.67: {
        name: "",
        text: "Его взгляд устремился на меня, всё это время нагло подслушивающего их разговор.",
        img: ['../image/novell/roof_guys.png'],
        next: ['4.68', '...'],
    },

    4.68: {
        name: "Парень 2",
        text: "Вот он! Это один из рептилойдов! Ловите его!",
        img: ['../image/novell/roof_guys.png'],
        next: ['2.1', 'В страхе стоять на месте'],
    },

    4.7: {
        name: "",
        text: "Не желая больше слушать их бред, я выбежал на лестницу.",
        img: ['../image/novell/lest.jpg'],
        next: ['5', '...'],
    },

    5: {
        name: "",
        text: "На первом этаже, возле одного из шкафчиков с обувью оказалась моя одноклассница. Заметив меня, она с радостным видом подбежала ко мне.",
        img: ['../image/novell/1_floor.jpg'],
        next: ['6', '...'],
    },

    6: {
        name: "Катя",
        text: "Ой, привет привет, я вчера все-таки поиграла в ту новеллу, что ты мне говорил, она мне так понравилась, хотя обычно я не очень люблю такой жанр, там же куча текста, статичные картинки и весь геймплей сводится к нажиманию левой кнопки мыши или выбора какого-нибудь варината раз в десять часов.",
        img: ['../image/novell/odnokl.png'],
        next: ['7', 'Ответить ей'],
    },

    7: {
        name: "Я",
        text: "Так в этом и смысл. Визуальные новеллы – это не просто картинки и диалоги, это интерактивное кино, где ты сам выбираешь, что происходит.",
        img: ['../image/novell/odnokl.png'],
        next: ['8', 'Ждать ответа'],
    },

    8: {
        name: "Катя",
        text: "Это, конечно, классно, но я слышала о таких новеллах, в которых довольно много всяких странных вещей.",
        img: ['../image/novell/odnokl.png'],
        next: ['9', 'Тактично слиться'],
    },

    9: {
        name: "Я",
        text: "Ну, это, мне пора, увидимся завтра.",
        img: ['../image/novell/odnokl.png'],
        next: ['10', 'Покинуть школу'],
    },

    10: {
        name: "",
        text: "Фух, ну вроде отвалила. Отправляемся домой.",
        img: ['../image/novell/ylic.jpg'],
        next: ['2.1', '...'],
    },

};

function getButton(event) {
    body_novel(event.target.id);
}

function Novel_buttom(step) {
    document.getElementById("Text_box").innerHTML = ArrayQuest[step]["text"];
    document.getElementById("img_novel").src = ArrayQuest[step]["img"]
    if (ArrayQuest[step]["name"].length > 0) {
        document.getElementById("Text_box_name").style.display = "block";
        document.getElementById("Text_box_name").innerHTML = ArrayQuest[step]["name"];
        if (ArrayQuest[step]["name"] == "Я") {
            document.getElementById("Text_box_name").style.color = "#19ff00";
        } else if (ArrayQuest[step]["name"] == "Парень 2") {
            document.getElementById("Text_box_name").style.color = "#ff0000";
        } else if (ArrayQuest[step]["name"] == "Староста") {
            document.getElementById("Text_box_name").style.color = "#fde910";
        } else if (ArrayQuest[step]["name"] == "Парень 1") {
            document.getElementById("Text_box_name").style.color = "#30d5c8";
        } else if (ArrayQuest[step]["name"] == "Парень 3") {
            document.getElementById("Text_box_name").style.color = "#0066ff";
        } else if (ArrayQuest[step]["name"] == "Катя") {
            document.getElementById("Text_box_name").style.color = "#c300ff";
        }
    }
    else {
        document.getElementById("Text_box_name").style.display = "none";
    }



    if (ArrayQuest[step]["next"].length == 2) {
        document.getElementById("Novel_buttom_2").style.display = "none";
        document.getElementById("Novel_buttom_1").textContent =
            ArrayQuest[step]["next"][1];
    } else {
        if (ArrayQuest[step]["next"].length == 4) {
            document.getElementById("Novel_buttom_2").style.display = "block";
            document.getElementById("Novel_buttom_1").textContent = ArrayQuest[step]["next"][1];
            document.getElementById("Novel_buttom_2").textContent = ArrayQuest[step]["next"][3];
        }
    }
}

function body_novel(idButton) {
    if (idButton == "Novel_buttom_1") {
        if (stepNow == "") {
            stepNow = "1";
        } else {
            stepNow = ArrayQuest[stepNow]["next"][0];
        }
    } else {
        if (idButton == "Novel_buttom_2") {
            stepNow = ArrayQuest[stepNow]["next"][2];
        }
    }
    Novel_buttom(stepNow);
}