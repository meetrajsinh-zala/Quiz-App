function createCardTemplate(title, content, i) {
    return `
    
    <h3 class="card__title">${title}</h3>
    <p class="card__content">${content}</p>
    <div class="card__arrow">
    <a href="Quiz Game.html?id=${i}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
            <path fill="#fff"
                d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z">
            </path>
        </svg> </a>
    </div>`;
}

function addCard(title, content, i) {
    const cardContainer = document.getElementById("home"); // Replace with your container ID

    const cardHTML = createCardTemplate(title, content, i);
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = cardHTML;
    cardContainer.appendChild(cardElement);
}

function DisplayCards() {
    let allQuizName = JSON.parse(localStorage.getItem('allQuizName'))  || []
    let NoQuizText = document.getElementById('NoQuizText')
    let CreateQuizbtn = document.getElementById('CreateQuizbtn')
    if (allQuizName.length === 0) { 
        NoQuizText.classList.remove('hidden')
        CreateQuizbtn.classList.remove('hidden')
    }
    else {
        for (let i = 0; i < allQuizName.length; i++) {
            let noOfQuestions = JSON.parse(localStorage.getItem(allQuizName[i]))['noOfQuestions']
            addCard(`${allQuizName[i]}`, `No of questions ${noOfQuestions}`, i);
        }
    }
}