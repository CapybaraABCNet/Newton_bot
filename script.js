const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

if (sendButton && userInput && chatBox) {
    sendButton.addEventListener('click', sendMessage);
}

function sendMessage() {
    const messageText = userInput.value;
    if (messageText.trim() === '') return;
    appendMessage(messageText, 'user');
    userInput.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(messageText);
        appendMessage(botResponse, 'bot');
    }, 1000);
}

function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    if (userMessage.toLowerCase().includes('привет')) {
        return 'Привет!';
    } else if (userMessage.toLowerCase().includes('как дела')) {
        return 'У меня всё хорошо, спасибо!';
    } else if (userMessage.toLowerCase().includes('капибары')) {
        return 'Капибара — крупнейший грызун в мире, обитающий в тропических и субтропических регионах Южной Америки, достигающий 1,3 метра в длину и весом 50-70 кг, живущий в социальных группах, питающийся травой и водными растениями, отличающийся хорошими плавательными навыками и размножающийся один раз в год с пометом от 2 до 8 детенышей.'; // ваш текст
    } else if (userMessage.toLowerCase().includes('коты')) {
        return 'Коты — независимые и игривые домашние животные, известные своим грациозным поведением, мурлыканьем и способностью к охоте.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('собаки')) {
        return 'Собаки — преданные и дружелюбные компаньоны, известные своей способностью к обучению и привязанности к человеку.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('бизнес')) {
        return 'Бизнес — это организация или деятельность, направленная на производство товаров или услуг с целью получения прибыли.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('Турция')) {
        return 'Турция — это страна, где Восток встречается с Западом, известная своей богатой историей, культурным наследием и потрясающими природными пейзажами.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('программирование')) {
        return 'Программирование — это процесс создания инструкций для компьютеров, позволяющий им выполнять задачи и решать проблемы.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('Россия')) {
        return 'Россия — самая большая страна в мире, обладающая богатой историей, разнообразной культурой и множеством природных ресурсов.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('ОАЭ')) {
        return 'Объединенные Арабские Эмираты — это современное государство на Ближнем Востоке, известное своими роскошными курортами, небоскребами и богатой культурой.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('интересные факты #1')) {
        return '1. Световые годы: Световой год — это не мера времени, а расстояния. Он равен примерно 9.46 триллионов километров (или 5.88 триллионов миль).'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('интересные факты #2')) {
        return ' Медузы: Некоторые медузы, такие как Turritopsis dohrnii, известны как "бессмертные медузы", так как они могут возвращаться к стадии полипа после достижения зрелости, фактически начиная свою жизнь заново.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('интересные факты #3')) {
        return 'Космическое пространство: В космосе нет звука, так как звук требует среды для распространения (например, воздуха), а в вакууме его нет.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('интересные факты #4')) {
        return 'Птицы и магнитное поле: Некоторые виды птиц могут чувствовать магнитное поле Земли и используют его для навигации во время миграций.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('интересные факты #5')) {
        return 'Кошки и их уши: У кошек 32 мышцы в каждом ухе, что позволяет им вращать уши на 180 градусов и улавливать звуки с разных направлений.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('корги')) {
        return 'Корги — это маленькие, дружелюбные и умные собаки с короткими ногами и длинным телом, известные своим игривым характером и милой внешностью.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('шпиц')) {
        return 'Шпиц — это пушистая, игривая и умная порода собак с характерной "меховой шапкой" и острыми ушами.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('чихуахуа')) {
        return 'Чихуахуа — это миниатюрная порода собак с ярким характером и преданностью своему хозяину.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('такса')) {
        return 'Такса — это порода собак с длинным телом и короткими ногами, известная своим игривым характером и храбростью.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('той пудель')) {
        return 'Той-пудель — маленькая, умная и игривая собака с густой кудрявой шерстью, требующая регулярного ухода и активности.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('рэп')) {
        return 'Рэп — это музыкальный жанр, основанный на ритмичном spoken word, который часто выражает социальные, культурные и личные темы через рифмованные тексты.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('эминем')) {
        return 'Эминем — выдающийся американский рэпер и продюсер, известный своими острыми текстами, личными темами и влиянием на хип-хоп-культуру.'; // ваш текст
    }
    else if (userMessage.toLowerCase().includes('капибары #2')) {
        return 'Капибары известны своим дружелюбным и социальным поведением, часто живя в группах и легко ладя как с другими животными, так и с людьми.'; // ваш текст
    }

    else if (userMessage.toLowerCase().includes('письмо')) {
        return 'Привет! Ты тут? Хорошо, спасибо то что пользуешься этим сайтом, хорошего дня!'; // ваш текст
    }
    return 'Извините, я не понимаю.';
}
