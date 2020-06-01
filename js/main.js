'use strict'
var gQuests = []
var gCurrQuestIdx;

function init() {
    gCurrQuestIdx = 1;
    createQuests()
    renderQuest();
}
function createQuests() {
    gQuests = [
        { id: 1, opts: ['Charizard', 'Squirtle', 'Balbazur', 'Pikachu'], correctOptIndex: 3 },
        { id: 2, opts: ['Ekans', 'Charizard', 'Blastoise', 'Dragonite'], correctOptIndex: 1 },
        { id: 3, opts: ['Squirtle', 'Dodrio', 'Magikarp', 'Raichu'], correctOptIndex: 0 },
        { id: 4, opts: ['Meowth', 'Vaporeon', 'Evee', 'Jolteon'], correctOptIndex: 2 },
        { id: 5, opts: ['Balbasaur', 'Volpix', 'Porygon', 'Mr.mime'], correctOptIndex: 1 },
        { id: 6, opts: ['Ratata', 'Pidgey', 'Lapras', 'Magnemite'], correctOptIndex: 2 }
    ]

    return gQuests;
}
function renderQuest() {
    var currQuest = getQuestById(gCurrQuestIdx)
    var elQuestion = `<img src='img/pic${currQuest.id}.png'><img>`
    var elContent = document.querySelector(".img-container")
    var elAnswer = document.querySelector(".answers")
     elAnswer.innerHTML = ''//  
     var htmlStr = ''
    elContent.innerHTML = elQuestion
    for (var i = 0; i < currQuest.opts.length; i++) {
         elAnswer.innerHTML += `<button onclick="checkAnswer(${i})">${currQuest.opts[i]}</button>`
        htmlStr += `<button onclick="checkAnswer(${i})">${currQuest.opts[i]}</button>`//code efficency
    }
    elAnswer.innerHtml = htmlStr;

}
function getQuestById(id) {
    for (var i = 0; i < gQuests.length; i++) {
        if (gQuests[i].id === id) return gQuests[i];
    }
}
function checkAnswer(optIdx) {
    var quest = getQuestById(gCurrQuestIdx)
    if (optIdx === quest.correctOptIndex) {
        gCurrQuestIdx++;
        if (getQuestById(gCurrQuestIdx)) renderQuest()
        else alert('You Won !!')
    }
    else {
        alert('Wrong Answer')
    }
}


