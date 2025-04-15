let homeScore = 0
let homeFoulCount = 0
let guestScore = 0
let guestFoulCount = 0

let homeScoreEl = document.getElementById("home-score-count")
let homeFoulEl = document.getElementById("home-foul-count")
let guestScoreEl = document.getElementById("guest-score-count")
let guestFoulEl = document.getElementById("guest-foul-count")

guestFoulEl.textContent = guestFoulCount;
homeFoulEl.textContent = homeFoulCount;

// Home 

function homeAddOnePoint() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeAddTwoPoints() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeAddThreePoints() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function homeAddFoul() {
    homeFoulCount++
    homeFoulEl.textContent = homeFoulCount
}

// Guest 

function guestAddOnePoint() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestAddTwoPoints() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestAddThreePoints() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function guestAddFoul() {
    guestFoulCount++
    guestFoulEl.textContent = guestFoulCount
}

// RESET

function resetScores() {
    let homeScore = 0
    let homeFoulCount = 0
    let guestScore = 0
    let guestFoulCount = 0
    
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    guestFoulEl.textContent = guestFoulCount;
    homeFoulEl.textContent = homeFoulCount;
}
