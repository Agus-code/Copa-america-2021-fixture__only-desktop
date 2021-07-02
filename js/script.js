let teams = [
    { team: "Argentina", index: "Arg", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Bolivia", index: "Bol", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Brasil", index: "Bra", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Chile", index: "Chi", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Colombia", index: "Col", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Ecuador", index: "Ecu", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Paraguay", index: "Par", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Peru", index: "Per", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Uruguay", index: "Uru", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] },
    { team: "Venezuela", index: "Ven", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, df: 0, groupMatches: [] }
]

const groups = [
    [teams[0], teams[1], teams[8], teams[3], teams[6]],
    [teams[2], teams[4], teams[9], teams[5], teams[7]]
];

const groupsMatches = [
    [
        [[teams[0], teams[3]], [teams[6], teams[1]]],
        [[teams[3], teams[1]], [teams[0], teams[8]]],
        [[teams[8], teams[3]], [teams[0], teams[6]]],
        [[teams[1], teams[8]], [teams[3], teams[6]]],
        [[teams[8], teams[6]], [teams[1], teams[0]]]
    ],
    [
        [[teams[2], teams[9]], [teams[4], teams[5]]],
        [[teams[4], teams[9]], [teams[2], teams[7]]],
        [[teams[9], teams[5]], [teams[4], teams[7]]],
        [[teams[5], teams[7]], [teams[2], teams[4]]],
        [[teams[2], teams[5]], [teams[9], teams[7]]]
    ]
];

let quarters = [
    { local: undefined, posLocal: "B1", visitant: undefined, posVisitant: "A4" },
    { local: undefined, posLocal: "B2", visitant: undefined, posVisitant: "A3" },
    { local: undefined, posLocal: "A1", visitant: undefined, posVisitant: "B4" },
    { local: undefined, posLocal: "A2", visitant: undefined, posVisitant: "B3" },
]
let semi = [
    { local: undefined, posLocal: "C1", visitant: undefined, posVisitant: "C2" },
    { local: undefined, posLocal: "C3", visitant: undefined, posVisitant: "C4" }
]
let tplace = [
    { local: undefined, posLocal: "P S1", visitant: undefined, posVisitant: "P S2" }
]
let finalMatch = [
    { local: undefined, posLocal: "G S1", visitant: undefined, posVisitant: "G S2" }
]

//create final when createThreePlace happens
const final = (active = false) => {
    const finalContainer = document.querySelector('.final');
    finalContainer.innerHTML = "";
    finalContainer.innerHTML += `
        <header class="final__header">
            <h3>
                FINAL
            </h3>
        </header>
        <div class="final__box">

        </div>
    `
    for (i = 0; i < finalMatch.length; i++) {
        const finalContainer = document.querySelector('.final__box');
        const structure = `
        <div class="final__box-item s-${i + 1}">
            <div class="final__box-item-team">
                ${finalMatch[i].local !== undefined
                ?
                `
                <img src="./assets/Flag-${finalMatch[i].local.index}.png">
                ${finalMatch[i].local.team}
                `
                :

                `<div class="noTeam">
                    ${finalMatch[i].posLocal}
                </div>`
            }
            </div>
            <div class="result-final-fase">
                <input type="number" class="final__box-item-result ${finalMatch[i].local !== undefined ? `result-${finalMatch[i].local.index}` : ''}" ${active ? "" : "disabled"}>
                <input type="number" class="final__box-item-result ${finalMatch[i].visitant !== undefined ? `result-${finalMatch[i].visitant.index}` : ''}" ${active ? "" : "disabled"}>
            </div>
            <div class="final__box-item-team">
                ${finalMatch[i].visitant !== undefined
                ?
                `
                    ${finalMatch[i].visitant.team}
                    <img src="./assets/Flag-${finalMatch[i].visitant.index}.png">
                `
                :
                `<div class="noTeam">
                    ${finalMatch[i].posVisitant}
                </div>`
            }
            </div>
        </div>
        `
        finalContainer.innerHTML += structure;
    }
}

//create threePlace when createSemis happens
const createThreePlace = (active = false) => {
    const t3Container = document.querySelector('.tplace');
    t3Container.innerHTML = "";
    t3Container.innerHTML += `
        <header class="tplace__header">
            <h3>
                3er Lugar
            </h3>
        </header>
        <div class="tplace__box">

        </div>
    `
    for (i = 0; i < tplace.length; i++) {
        const threePlaceMatchContainer = document.querySelector('.tplace__box');
        const structure = `
        <div class="tplace__box-item s-${i + 1}">
            <div class="tplace__box-item-team">
                ${tplace[i].local !== undefined
                ?
                `
                <img src="./assets/Flag-${tplace[i].local.index}.png">
                ${tplace[i].local.team}
                `
                :

                `<div class="noTeam">
                    ${tplace[i].posLocal}
                </div>`
            }
            </div>
            <div class="result-final-fase">
                <input type="number" class="tplace__box-item-result ${tplace[i].local !== undefined ? `result-${tplace[i].local.index}` : ''}" ${active ? "" : "disabled"}>
                <input type="number" class="tplace__box-item-result ${tplace[i].visitant !== undefined ? `result-${tplace[i].visitant.index}` : ''}" ${active ? "" : "disabled"}>
            </div>
            <div class="tplace__box-item-team">
                ${tplace[i].visitant !== undefined
                ?
                `
                    ${tplace[i].visitant.team}
                    <img src="./assets/Flag-${tplace[i].visitant.index}.png">
                `
                :
                `<div class="noTeam">
                    ${tplace[i].posVisitant}
                </div>`
            }
            </div>
        </div>
        `
        threePlaceMatchContainer.innerHTML += structure;
    }
}

//create the semifinals when createQuarters happens
const createSemis = (active) => {
    const semiContainer = document.querySelector('.semifinal');
    semiContainer.innerHTML = "";
    semiContainer.innerHTML += `
        <header class="semifinal__header">
            <h3>
                Semifinal
            </h3>
        </header>
        <div class="semifinal__box">

        </div>
    `
    for (i = 0; i < semi.length; i++) {
        const semisMatchContainer = document.querySelector('.semifinal__box');
        const structure = `
        <div class="semifinal__box-item s-${i + 1}">
            <div class="semifinal__box-item-value">
                S${i + 1}
            </div>
            <div class="semifinal__box-item-team">
                ${semi[i].local !== undefined
                ?
                `
                <img src="./assets/Flag-${semi[i].local.index}.png">
                ${semi[i].local.team}
                `
                :

                `<div class="noTeam">
                    ${semi[i].posLocal}
                </div>`
            }
            </div>
            <div class="result-final-fase">
                <input 
                    type="number" 
                    class="semifinal__box-item-result ${semi[i].local !== undefined ? `result-${semi[i].local.index}` : ''}"
                    onchange="getResultsSemis('s-${i + 1}')"
                    ${active ? "" : "disabled"}
                >
                <input 
                    type="number" 
                    class="semifinal__box-item-result ${semi[i].visitant !== undefined ? `result-${semi[i].visitant.index}` : ''}"
                    onchange="getResultsSemis('s-${i + 1}')"
                    ${active ? "" : "disabled"}
                >
            </div>
            <div class="semifinal__box-item-team">
                ${semi[i].visitant !== undefined
                ?
                `
                    ${semi[i].visitant.team}
                    <img src="./assets/Flag-${semi[i].visitant.index}.png">
                `
                :
                `<div class="noTeam">
                    ${semi[i].posVisitant}
                </div>`
            }
            </div>
        </div>
        `
        semisMatchContainer.innerHTML += structure;
    }
}

const getResultsSemis = (matchId) => {
    const semiMatch = document.querySelector(`.${matchId}`);
    const teamLocal = semiMatch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList[1].slice(7);
    const resultLocal = semiMatch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value;
    const resultVisitant = semiMatch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
    const teamVisitant = semiMatch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.classList[1].slice(7);

    if (resultLocal === '' || resultVisitant === '') return

    let whichPos;
    switch (parseInt(matchId.slice(2))) {
        case 1: whichPos = 0; break;
        case 2: whichPos = 1; break;
    }
    let localTeam;
    let visitantTeam;
    for (i = 0; i < teams.length; i++) {
        if (teams[i].index == teamLocal) localTeam = teams[i];
        if (teams[i].index == teamVisitant) visitantTeam = teams[i];
    }
    if (resultLocal > resultVisitant) {
        if (whichPos == 0) {
            tplace[0].local = visitantTeam;
            finalMatch[0].local = localTeam;
        }
        if (whichPos == 1) {
            tplace[0].visitant = visitantTeam;
            finalMatch[0].visitant = localTeam;

        }
    }
    if (resultLocal < resultVisitant) {
        if (whichPos == 0) {
            tplace[0].local = localTeam;
            finalMatch[0].local = visitantTeam;
        }
        if (whichPos == 1) {
            tplace[0].visitant = localTeam;
            finalMatch[0].visitant = visitantTeam;

        }
    }

    if (resultLocal == resultVisitant) {
        const wonLocal = confirm(`Gano por penales ${localTeam.team}?`);
        if (wonLocal) {
            if (whichPos == 0) {
                tplace[0].local = visitantTeam;
                finalMatch[0].local = localTeam;
            }
            if (whichPos == 1) {
                tplace[0].visitant = visitantTeam;
                finalMatch[0].visitant = localTeam;

            }
        }
        else {
            if (whichPos == 0) {
                tplace[0].local = localTeam;
                finalMatch[0].local = visitantTeam;
            }
            if (whichPos == 1) {
                tplace[0].visitant = localTeam;
                finalMatch[0].visitant = visitantTeam;

            }
        }
    }

    if (tplace[0].local !== undefined && tplace[0].visitant !== undefined) createThreePlace(true);
    else createThreePlace();

    if (finalMatch[0].local !== undefined && finalMatch[0].visitant !== undefined) final(true);
    else final();
}

//create the quartes when updateposition functions happens
const createQuarters = (active = false) => {
    const quartersContainer = document.querySelector('.quarters');
    quartersContainer.innerHTML = ""
    quartersContainer.innerHTML += `
        <header class="quarters__header">
            <h3>
                Cuartos de Final
            </h3>
        </header>
        <div class="quarters__box">
        </div>
    `
    for (i = 0; i < quarters.length; i++) {
        const quartersMatchContainer = document.querySelector('.quarters__box');
        const structure = `
        <div class="quarters__box-item c-${i + 1}">
            <div class="quarters__box-item-value">
                C${i + 1}
            </div>
            <div class="quarters__box-item-team">
                ${quarters[i].local !== undefined
                ?
                `
                <img src="./assets/Flag-${quarters[i].local.index}.png">
                ${quarters[i].local.team}
                `
                :

                `<div class="noTeam">
                    ${quarters[i].posLocal}
                </div>`
            }
            </div>
            <div class="result-final-fase">
                <input 
                    type="number" 
                    class="quarters__box-item-result ${quarters[i].local !== undefined ? `result-${quarters[i].local.index}` : ''}"
                    onchange="getResultsQuarters('c-${i + 1}')"
                    ${active ? "" : "disabled"}
                >
                <input 
                    type="number" 
                    class="quarters__box-item-result ${quarters[i].visitant !== undefined ? `result-${quarters[i].visitant.index}` : ''}"
                    onchange="getResultsQuarters('c-${i + 1}')"
                    ${active ? "" : "disabled"}
                >
            </div>
            <div class="quarters__box-item-team">
                ${quarters[i].visitant !== undefined
                ?
                `
                    ${quarters[i].visitant.team}
                    <img src="./assets/Flag-${quarters[i].visitant.index}.png">
                `
                :
                `<div class="noTeam">
                    ${quarters[i].posVisitant}
                </div>`
            }
            </div>
        </div>
        `
        quartersMatchContainer.innerHTML += structure
    }
}

const getResultsQuarters = (matchId) => {
    const quarterMatch = document.querySelector(`.${matchId}`);
    const teamLocal = quarterMatch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList[1].slice(7);
    const resultLocal = parseInt(quarterMatch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value)
    const resultVisitant = parseInt(quarterMatch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value)
    const teamVisitant = quarterMatch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.classList[1].slice(7);

    if (resultLocal === '' || resultVisitant === '') return //if either has not a number
    let whichSemi;
    switch (parseInt(matchId.slice(2))) {
        case 1: whichSemi = 0; break; //0 = emi[0]
        case 2: whichSemi = 0; break;
        case 3: whichSemi = 1; break; //1 = emi[1]
        case 4: whichSemi = 1; break;
    }

    let won;
    if (resultLocal > resultVisitant) {
        for (i = 0; i < teams.length; i++) {
            if (teams[i].index === teamLocal) {
                won = teams[i];
            }
        }
    }
    else if (resultLocal < resultVisitant) {
        for (i = 0; i < teams.length; i++) {
            if (teams[i].index === teamVisitant) {
                won = teams[i];
            }
        }
    }
    else if (resultLocal == resultVisitant) {
        for (i = 0; i < teams.length; i++) {
            if (teams[i].index == teamLocal) {
                const wonLocal = confirm(`Gano por penales ${teams[i].team}?`);
                if (wonLocal) won = teams[i];
                else {
                    for (j = 0; j < teams.length; j++) {
                        if (teams[j].index == teamVisitant) won = teams[j];
                    }
                }
            }
        }
    }

    switch (parseInt(matchId.slice(2))) {
        case 1: semi[whichSemi].local = won; break;
        case 2: semi[whichSemi].visitant = won; break;
        case 3: semi[whichSemi].local = won; break;
        case 4: semi[whichSemi].visitant = won; break;
    }

    if (semi[0].local != undefined && semi[0].visitant != undefined && semi[1].local !== undefined && semi[1].visitant !== undefined) createSemis(true);
    else createSemis();

}

//when a match change, change the positions of both tables 
const updatePositions = () => {
    for (i = 0; i < groups.length; i++) {
        let ordenGroup = [];
        const groupContainer = document.querySelector(`.group-${i + 1}`);
        for (k = 0; k < groups[i].length; k++) { //ordenar posiciones segun  pts > df > gf
            ordenGroup.push(groups[i].sort((a, b) => {
                if (a.pts > b.pts) return b.pts - a.pts;
                else if (a.pts == b.pts) {
                    if (a.df > b.df) return b.df - a.df;
                    else if (a.df == b.df) {
                        if (a.gf > b.gf) return b.gf - a.gf;
                    }
                }
            }));
        }
        groupContainer.innerHTML = "";
        for (j = 0; j < ordenGroup[4].length; j++) {
            const structure = `
                <tr class="team_${ordenGroup[4][j].index}">
                    <th class="pos">${j + 1}</th>
                    <th class="group-team">
                        <img src="./assets/Flag-${ordenGroup[4][j].index}.png"/>
                        ${ordenGroup[4][j].team}
                    </th>
                    <th>${ordenGroup[4][j].pj}</th>
                    <th>${ordenGroup[4][j].g}</th>
                    <th>${ordenGroup[4][j].e}</th>
                    <th>${ordenGroup[4][j].p}</th>
                    <th>${ordenGroup[4][j].gf}</th>
                    <th>${ordenGroup[4][j].gc}</th>
                    <th>${ordenGroup[4][j].df}</th>
                    <th>${ordenGroup[4][j].pts}</th>
                </tr>
            `
            groupContainer.innerHTML += structure;
        }
        if (i == 0) {
            quarters[0].visitant = ordenGroup[4][3]
            quarters[1].visitant = ordenGroup[4][2]
            quarters[2].local = ordenGroup[4][0]
            quarters[3].local = ordenGroup[4][1]
        }
        if (i == 1) {
            quarters[0].local = ordenGroup[4][0]
            quarters[1].local = ordenGroup[4][1]
            quarters[2].visitant = ordenGroup[4][3]
            quarters[3].visitant = ordenGroup[4][2]
        }
    }
    for (j = 0; j < semi.length; j++) {
        semi[j].local = undefined;
        semi[j].visitant = undefined;
    }

    tplace[0].local = undefined
    tplace[0].visitant = undefined
    finalMatch[0].local = undefined
    finalMatch[0].visitant = undefined

    if (teams[0].pj > 3) createQuarters(true);//when the (teams[0]=Argentina) has pj=4
    else createQuarters();

    if (semi[0].local != undefined && semi[0].visitant != undefined && semi[1].local !== undefined && semi[1].visitant !== undefined) createSemis(true);
    else createSemis();

    if (tplace[0].local !== undefined && tplace[0].visitant !== undefined) createThreePlace(true);
    else createThreePlace();

    if (finalMatch[0].local !== undefined && finalMatch[0].visitant !== undefined) final(true);
    else final();
}

//change the values from the Array=teams
const updateTeamsValues = (team, resultTeam, resultVisitant, teamVisitant) => {
    let result = ''
    if (resultTeam > resultVisitant) result = 'win'
    if (resultTeam == resultVisitant) result = 'tie'
    if (resultTeam < resultVisitant) result = 'lose'

    for (i = 0; i < teams.length; i++) {
        if (teams[i].index === team) {
            let hasPlayed = false;
            if (teams[i].groupMatches.length !== 0) {
                for (j = 0; j < teams[i].groupMatches.length; j++) {
                    if (teams[i].groupMatches[j].team === teamVisitant) {
                        hasPlayed = true;
                        teams[i].gf = teams[i].gf - teams[i].groupMatches[j].gf;
                        teams[i].gc = teams[i].gc - teams[i].groupMatches[j].gc;
                        teams[i].df = 0;
                        if (teams[i].groupMatches[j].result == 'win') {
                            teams[i].g = teams[i].g - 1;
                            teams[i].pts = teams[i].pts - 3;
                        }
                        if (teams[i].groupMatches[j].result === 'tie') {
                            teams[i].e = teams[i].e - 1;
                            teams[i].pts = teams[i].pts - 1;
                        }
                        if (teams[i].groupMatches[j].result === 'lose') {
                            teams[i].p = teams[i].p - 1;
                        }
                        teams[i].gf = teams[i].gf + resultTeam;
                        teams[i].gc = teams[i].gc + resultVisitant;
                        teams[i].df = teams[i].df + (teams[i].gf - teams[i].gc);
                        teams[i].groupMatches.splice(j, 1);
                        const newData = {
                            team: teamVisitant,
                            result,
                            gf: resultTeam,
                            gc: resultVisitant
                        }
                        teams[i].groupMatches.push(newData);
                        if (result === 'win') {
                            teams[i].g = teams[i].g + 1;
                            teams[i].pts = teams[i].pts + 3;
                        }
                        if (result === 'tie') {
                            teams[i].e = teams[i].e + 1;
                            teams[i].pts = teams[i].pts + 1;
                        }
                        if (result === 'lose') {
                            teams[i].p = teams[i].p + 1;
                        }
                    }
                }
            }
            if (!hasPlayed) {
                teams[i].pj = teams[i].pj + 1;
                teams[i].gf = teams[i].gf + resultTeam;
                teams[i].gc = teams[i].gc + resultVisitant;
                teams[i].df = teams[i].df + (resultTeam - resultVisitant);
                const data = {
                    team: teamVisitant,
                    result,
                    gf: resultTeam,
                    gc: resultVisitant,
                }
                teams[i].groupMatches.push(data);

                if (result === 'win') {
                    teams[i].g = teams[i].g + 1;
                    teams[i].pts = teams[i].pts + 3;
                }
                if (result === 'tie') {
                    teams[i].e = teams[i].e + 1;
                    teams[i].pts = teams[i].pts + 1;
                }
                if (result === 'lose') {
                    teams[i].p = teams[i].p + 1;
                }


            }
        }
    }
    updatePositions();
}

//if a match has changed the result and has not a number
const removeResults = (team1, team2) => {
    for (i = 0; i < teams.length; i++) {
        if (teams[i].index === team1 || teams[i].index === team2) {
            for (j = 0; j < teams[i].groupMatches.length; j++) {
                if (teams[i].groupMatches[j].team === team1 || teams[i].groupMatches[j].team === team2) {
                    teams[i].pj = teams[i].pj - 1;
                    teams[i].gf = teams[i].gf - teams[i].groupMatches[j].gf;
                    teams[i].gc = teams[i].gc - teams[i].groupMatches[j].gc;
                    teams[i].df = 0;
                    if (teams[i].groupMatches[j].result == 'win') {
                        teams[i].g = teams[i].g - 1;
                        teams[i].pts = teams[i].pts - 3;
                    }
                    if (teams[i].groupMatches[j].result === 'tie') {
                        teams[i].e = teams[i].e - 1;
                        teams[i].pts = teams[i].pts - 1;
                    }
                    if (teams[i].groupMatches[j].result === 'lose') {
                        teams[i].p = teams[i].p - 1;
                    }
                    teams[i].groupMatches.splice(j, 1);
                }
            }
        }
    }
    updatePositions();
}

//obtains the numbers of the match
const getRestultsGroups = (matchId) => {
    const matchCheckContainer = document.querySelector(`.${matchId}`)
    const teamLocal = matchCheckContainer.firstElementChild.classList[1].slice(5);
    const resultLocal = matchCheckContainer.firstElementChild.nextElementSibling.firstElementChild.value
    const resultVisitant = matchCheckContainer.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value
    const teamVisitant = matchCheckContainer.firstElementChild.nextElementSibling.nextElementSibling.classList[1].slice(5);

    if (resultLocal === '' || resultVisitant === '') return removeResults(teamLocal, teamVisitant); //if either has not a number

    updateTeamsValues(teamLocal, parseInt(resultLocal), parseInt(resultVisitant), teamVisitant);
    updateTeamsValues(teamVisitant, parseInt(resultVisitant), parseInt(resultLocal), teamLocal);

}

//create matches of both groups
const createGroupsMatches = () => {
    for (i = 0; i < groupsMatches.length; i++) {

        for (j = 0; j < groupsMatches[i].length; j++) {
            const matchesContainer = document.querySelector(`.groupMatches__group-${i + 1}`)
            const groupMatchesStructure = `
                <div class="groupMatches__box">
                    <header class="groupMatches__box-header">
                        <h3>
                            Fecha ${j + 1}
                        </h3>
                    </header>
                    <div class="groupMatches__box-matches matches__group-${i + 1}__day-${j + 1}">

                    </div>
                </div>
            `

            matchesContainer.innerHTML += groupMatchesStructure
            for (k = 0; k < groupsMatches[i][j].length; k++) {
                const groupMatchContainer = document.querySelector(`.matches__group-${i + 1}__day-${j + 1}`);
                const matchStructure = `
                <div class="groupMatches__box-matches-item match__group-${i + 1}__day-${j + 1}__match-${k + 1}">
                    <div class="groupMatches__box-matches-item-team team-${groupsMatches[i][j][k][0].index}">
                        <img src="./assets/Flag-${groupsMatches[i][j][k][0].index}.png"/>
                        ${groupsMatches[i][j][k][0].team}
                    </div>
                    <div class="results-match-group">
                        <input 
                            type="number"
                            min="0"
                            max="50"
                            class="groupMatches__box-matches-item-result group-${i + 1}__day-${j + 1}__match-${k + 1}__team-${groupsMatches[i][j][k][0].index}"
                            onchange="getRestultsGroups('match__group-${i + 1}__day-${j + 1}__match-${k + 1}')"
                        >
                        <input 
                            type="number"
                            min="0"
                            max="50"
                            class="groupMatches__box-matches-item-result group-${i + 1}__day-${j + 1}__match-${k + 1}__team-${groupsMatches[i][j][k][1].index}"
                            onchange="getRestultsGroups('match__group-${i + 1}__day-${j + 1}__match-${k + 1}')"
                        >
                    </div>
                    <div class="groupMatches__box-matches-item-team team-${groupsMatches[i][j][k][1].index}">
                        ${groupsMatches[i][j][k][1].team}
                        <img src="./assets/Flag-${groupsMatches[i][j][k][1].index}.png"/>
                    </div>
                </div>
                `
                groupMatchContainer.innerHTML += matchStructure
            }
        }
    }
    createQuarters();
    createSemis();
    createThreePlace();
    final();
}

//create table
const createGroups = () => {
    for (i = 0; i < groups.length; i++) {
        const groupContainer = document.querySelector(`.group-${i + 1}`)
        for (j = 0; j < groups[i].length; j++) {

            const structure = `
                <tr class="team_${groups[i][j].index}">
                    <th class="pos">${j + 1}</th>
                    <th class="group-team">
                        <img src="./assets/Flag-${groups[i][j].index}.png"/>
                        ${groups[i][j].team}
                    </th>
                    <th>${groups[i][j].pj}</th>
                    <th>${groups[i][j].g}</th>
                    <th>${groups[i][j].e}</th>
                    <th>${groups[i][j].p}</th>
                    <th>${groups[i][j].gf}</th>
                    <th>${groups[i][j].gc}</th>
                    <th>${groups[i][j].df}</th>
                    <th>${groups[i][j].pts}</th>
                </tr>
            `
            groupContainer.innerHTML += structure;
        }
    }
    createGroupsMatches();
}

//change groups <-> final
const btn = document.querySelector('.changeView__btn');
const groupView = document.querySelector('.groups-view');
const finalView = document.querySelector('.final-view');
document.querySelector('.changeView__btn').addEventListener('click', () => {

    if (btn.classList[1] === 'toFinal') {
        btn.innerHTML = 'Ver Grupos'
        btn.classList.remove('toFinal');
        btn.classList.add('toGroups');
        groupView.classList.add('groups-view--disable');
        finalView.classList.remove('final-view--disable')
    }
    else if (btn.classList[1] === 'toGroups') {
        btn.innerHTML = 'Ver Fase Final'
        btn.classList.add('toFinal');
        btn.classList.remove('toGroups')
        groupView.classList.remove('groups-view--disable');
        finalView.classList.add('final-view--disable')
        btn.classList.replace('toGroups', 'toFinal');
    }
})

createGroups();