const cardData = [
    {
        imageUrl: 'images/Pokedex.PNG',
        languages: ['Vue.js', 'SCSS'],
        heading: 'Pokedex',
        text: 'Mijn eerste ervaring met Vue.js en het gebruiken van een API, namelijk PokeAPI. Op de website kan je switchen tussen meerdere generaties en kan je kiezen hoeveel Pokemon je wil zien.',
        link: 'https://robertzien.github.io/Poke-dex/'
    },
    {
        imageUrl: 'images/Portfolio.PNG',
        languages: ['HTML', 'SCSS', 'JavaScript'],
        heading: 'Portfolio',
        text: 'Voor deze portfoliowebsite ben ik voor een speelse maar toch overzichtelijke stijl gegaan. Ook was het een oefening voor mij om beter te worden in Javascript en SCSS.',
    },
    {
        imageUrl: 'images/RPS.PNG',
        languages: ['HTML', 'CSS', 'JavaScript'],
        heading: 'Rock, Paper, Scissors',
        text: 'Op deze website kan je steen, papier, schaar spelen door middel van de console. De website heb ik gemaakt als een oefening voor het werken met Javascript. Vervolgens heb ik de website nog gestyled met CSS en HTML.',
        link: 'https://robertzien.github.io/practice_2/'
    },
    {
        imageUrl: 'images/Wheelz.png',
        languages: ['HTML', 'CSS'],
        heading: 'Wheelz',
        text: 'Gemaakt voor een project waarbij we deelmobiliteit op het platteland aantrekkelijker moesten maken. Daarvoor hebben we een nieuw concept bedacht: Wheelz.',
        link: 'https://robertzien.github.io/wheelz/'
    },
];

const cardContainer = document.getElementById('cardContainer');

cardData.forEach( card => {
    const cardHTML = `
      <a class="card" href="${card.link}">
        <div class="card__image">
          <picture>
            <img src="${card.imageUrl}" alt="">
          </picture>
        </div>
        <div class="card__content">
          <div class="card__languages">
            ${card.languages.map(language => `<div class="card__language">${language}</div>`).join('')}
          </div>
          <h6 class="card__heading">${card.heading}</h6>
          <div class="card__text">${card.text}</div>
        </div>
        <div class="card__button-bar">
          <div class="card__button">Bekijk dit project</div>
        </div>
      </a>
    `
    cardContainer.innerHTML += cardHTML;
});

function generateFooter() {
    return `
        <footer class="footer">
        <div class="footer__wave">
            <svg preserveAspectRatio="none" viewBox="0 0 1439 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 81.6862C80.0444 73.0499 205.357 59.6136 365.296 66.4179C525.235 73.2223 799.394 128.323 959.333 129.894C1119.27 131.464 1254.13 115.41 1328.08 96.9836L1379.54 84.2213L1399.03 78.0244L1422.01 69.2925L1439 62.8139V0H1359.11C1279.06 0 1119.27 0 959.333 0C799.394 0 639.605 0 479.667 0C319.728 0 159.939 0 79.8945 0H0V81.6862Z" fill="#FFD233"/>
            </svg>
        </div>
        <div class="container">
            <div class=" footer__column footer__about">
                <svg width="43" height="63" viewBox="0 0 43 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.9579 44.2286L23.3199 25.4309C21.9895 25.4309 19.8861 25.3315 17.0096 25.1327L17.0096 44.2286H11.0571L11.0571 0.448546C11.2744 0.448546 12.8169 0.373993 15.6847 0.224889C18.5526 0.0757845 20.6415 0.000821512 21.9514 0C32.4278 0 37.666 4.18396 37.666 12.5519C37.6854 15.2434 36.7935 17.8617 35.1365 19.9775C33.6824 22.0218 31.5502 23.4788 29.1227 24.0872L41.7714 44.2286H34.9579ZM17.0096 5.8274V20.0521C18.3902 20.2483 19.7827 20.3483 21.177 20.3515C24.7485 20.3515 27.3475 19.7736 28.9742 18.6177C30.6008 17.4619 31.4145 15.4001 31.4153 12.4324C31.4153 9.98137 30.5425 8.218 28.7968 7.14223C27.0511 6.06646 24.2927 5.52837 20.5216 5.52796C19.9268 5.52796 18.7563 5.62777 17.0102 5.8274" fill="#FFD233"/>
                    <path d="M9.27416 45.6342L18.516 59.7412L13.8786 62.6571L0 41.4732L1.36595 40.6132L34.0562 40.4806L24.7354 26.2587L29.3728 23.3428L43 44.1446L41.5279 45.0704L9.27416 45.6342Z" fill="#FFD233"/>
                </svg>
                <div class="footer__text">
                    Website gemaakt door Robert Ziengs ;)
                </div>
            </div>
            <div class="footer__column footer__contact">
                <div class="footer__heading">
                    Contact
                </div>
                <a href="mailto: robertziengs03@gmail.com" class="footer__mail">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <div class="footer__text">
                        robertziengs03@gmail.com
                    </div>
                </a>
                <div class="footer__socials">
                    <a href="https://github.com/Robertzien" class="footer__github">
                        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.00195312" width="27.5333" height="26" rx="3" fill="white"/>
                            <path d="M18.8166 24.9949C19.6575 24.9949 19.5374 26.002 19.5374 26.002H8.6049C8.6049 26.002 8.48476 24.9949 9.32572 24.9949C10.1066 24.9949 10.2868 24.6395 10.2868 24.284L10.2268 21.3219C5.96188 22.2698 5.06086 19.6632 5.06086 19.6632C4.34003 17.8859 3.37894 17.4712 3.37894 17.4712C1.93729 16.5233 3.43901 16.5233 3.43901 16.5233C5.00079 16.6418 5.84175 18.0636 5.84175 18.0636C7.16326 20.3741 9.38579 19.7224 10.2868 19.3669C10.407 18.3598 10.8274 17.7082 11.2479 17.2935C7.82401 16.938 4.27997 15.6347 4.27997 9.82902C4.27997 8.17025 4.88065 6.80769 5.84175 5.74134C5.66154 5.38589 5.18099 3.84561 6.02195 1.77215C6.02195 1.77215 7.28339 1.35745 10.2268 3.31243C12.7496 2.60153 15.3926 2.60153 17.9155 3.31243C20.8589 1.35745 22.1203 1.77215 22.1203 1.77215C22.9613 3.84561 22.4807 5.38589 22.3005 5.74134C23.2616 6.80769 23.8623 8.17025 23.8623 9.82902C23.8623 15.6347 20.2582 16.938 16.8343 17.2935C17.435 17.7674 17.9155 18.7153 17.9155 20.1371L17.8555 24.284C17.8555 24.6395 18.0357 24.9949 18.8166 24.9949Z" fill="#1C1E21"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/robert-z-58a1a2161/" class="footer__linkedin">
                        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_252_686)">
                                <path d="M25.0429 0.00195312H2.49084C1.11533 0.00195312 0.000228882 1.05495 0.000228882 2.35386V23.65C0.000228882 24.949 1.11533 26.002 2.49084 26.002H25.0429C26.4185 26.002 27.5336 24.949 27.5336 23.65V2.35386C27.5336 1.05495 26.4185 0.00195312 25.0429 0.00195312ZM8.52021 22.4521C8.52021 22.8301 8.19572 23.1365 7.79541 23.1365H4.71008C4.30977 23.1365 3.98528 22.8301 3.98528 22.4521V10.2388C3.98528 9.86079 4.30977 9.55437 4.71008 9.55437H7.79541C8.19572 9.55437 8.52021 9.86079 8.52021 10.2388V22.4521ZM6.25274 8.40308C4.63397 8.40308 3.32167 7.16386 3.32167 5.63524C3.32167 4.10662 4.63397 2.8674 6.25274 2.8674C7.87152 2.8674 9.18382 4.10662 9.18382 5.63524C9.18382 7.16386 7.87159 8.40308 6.25274 8.40308ZM24.644 22.5072C24.644 22.8547 24.3456 23.1365 23.9776 23.1365H20.6668C20.2988 23.1365 20.0004 22.8547 20.0004 22.5072V16.7785C20.0004 15.9239 20.2658 13.0336 17.6353 13.0336C15.5949 13.0336 15.181 15.0119 15.0979 15.8997V22.5072C15.0979 22.8547 14.7996 23.1365 14.4315 23.1365H11.2294C10.8614 23.1365 10.563 22.8547 10.563 22.5072V10.1837C10.563 9.83615 10.8614 9.55437 11.2294 9.55437H14.4315C14.7995 9.55437 15.0979 9.83615 15.0979 10.1837V11.2492C15.8545 10.177 16.9789 9.34943 19.373 9.34943C24.6743 9.34943 24.644 14.0264 24.644 16.5962V22.5072Z" fill="white"/>
                                <path d="M-23.1404 35.102H-45.6925C-47.068 35.102 -48.1831 36.155 -48.1831 37.4539V58.75C-48.1831 60.049 -47.068 61.102 -45.6925 61.102H-23.1405C-21.7649 61.102 -20.6498 60.049 -20.6498 58.75V37.4539C-20.6498 36.155 -21.7649 35.102 -23.1404 35.102ZM-39.6631 57.5521C-39.6631 57.9301 -39.9876 58.2365 -40.3879 58.2365H-43.4732C-43.8736 58.2365 -44.1981 57.9301 -44.1981 57.5521V45.3388C-44.1981 44.9608 -43.8736 44.6544 -43.4732 44.6544H-40.3879C-39.9876 44.6544 -39.6631 44.9608 -39.6631 45.3388V57.5521ZM-41.9306 43.5031C-43.5494 43.5031 -44.8617 42.2639 -44.8617 40.7352C-44.8617 39.2066 -43.5494 37.9674 -41.9306 37.9674C-40.3118 37.9674 -38.9995 39.2066 -38.9995 40.7352C-38.9995 42.2639 -40.3117 43.5031 -41.9306 43.5031ZM-23.5393 57.6072C-23.5393 57.9547 -23.8377 58.2365 -24.2058 58.2365H-27.5165C-27.8846 58.2365 -28.183 57.9547 -28.183 57.6072V51.8785C-28.183 51.0239 -27.9175 48.1336 -30.548 48.1336C-32.5884 48.1336 -33.0023 50.1119 -33.0854 50.9997V57.6072C-33.0854 57.9547 -33.3837 58.2365 -33.7518 58.2365H-36.9539C-37.3219 58.2365 -37.6203 57.9547 -37.6203 57.6072V45.2837C-37.6203 44.9361 -37.3219 44.6544 -36.9539 44.6544H-33.7518C-33.3838 44.6544 -33.0854 44.9361 -33.0854 45.2837V46.3492C-32.3288 45.277 -31.2044 44.4494 -28.8104 44.4494C-23.509 44.4494 -23.5393 49.1264 -23.5393 51.6962V57.6072Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_252_686">
                                    <rect width="27.5333" height="26" fill="white" transform="translate(0 0.00195312)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="footer__column footer__menu">
                <div class="footer__heading">
                    Menu
                </div>
                <ul class="footer__list">
                    <li class="footer__item">
                        <a class="footer__text" href="index.html">
                            Home
                        </a>
                    </li>
                    <li class="footer__item">
                        <a class="footer__text" href="work.html">
                            Mijn werk
                        </a>
                    </li>
                </ul>
            </div>
            <div id="backtotop" class="footer__column footer__back-to-top">
                <div>
                    Terug naar boven
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="7 11 12 6 17 11" />
                    <polyline points="7 17 12 12 17 17" />
                </svg>
            </div>
        </div>
    </footer>
  `;
}

function appendFooter() {
    let footerContainer = document.createElement('div');
    let footerHTML = generateFooter();
    footerContainer.innerHTML = footerHTML;
    let footerContainerElement = document.getElementById('footerContainer');
    if (footerContainerElement) {
        footerContainerElement.appendChild(footerContainer);
    }
}

appendFooter();
