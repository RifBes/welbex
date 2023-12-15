const notMobileItem = document.getElementById('item_notForMobile');

const infoTitles = [
    document.getElementById('info__list1'),
    document.getElementById('info__list2'),
    document.getElementById('info__list3'),
    document.getElementById('info__list4'),
];

const footers = [
    document.getElementById('footer-item1'),
    document.getElementById('footer-item2'),
];

const infoTitles_content = [
    ['Виджеты', 'Skype аудит'],
    ['Dashboard', '30 виджетов'],
    ['Skype Аудит', 'Dashboard'],
    ['35 дней', 'Месяц аmoCRM'],
];

const footers_contetn = [
    ['Кейсы', 'Благодарность клиентов'],
    ['Благодарственные письма', 'Кейсы'],
];

const rename = (arr, type, num) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].textContent = type[i][num];
    }
};

window.addEventListener('resize', (e) => {
    const width = document.body.clientWidth;

    if (width <= 990) {
        notMobileItem.remove();
    }

    if (width <= 700) {
        rename(infoTitles, infoTitles_content, 1);
        rename(footers, footers_contetn, 1);
    } else {
        rename(infoTitles, infoTitles_content, 0);
        rename(footers, footers_contetn, 0);
    }
});

if (window.innerWidth <= 990) {
    notMobileItem.remove();
}

if (window.innerWidth <= 700) {
    rename(infoTitles, infoTitles_content, 1);
    rename(footers, footers_contetn, 1);
}
