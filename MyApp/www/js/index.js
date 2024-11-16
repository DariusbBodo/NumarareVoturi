/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
// Lista candidaților
const candidates = [
    "SIMION GEORGE-NICOLAE",
    "LASCONI ELENA-VALERICA",
    "GEORGESCU CĂLIN",
    "CIUCĂ NICOLAE-IONEL",
    "KELEMEN HUNOR",
    "GEOANĂ MIRCEA-DAN",
    "DIACONESCU CRISTIAN",
    "TERHEȘ CRISTIAN-VASILE ",
    "BIRCHALL ANA",
    "CIOLACU ION-MARCEL",
    "PREDOIU SILVIU",
    "ORBAN LUDOVIC",
    "POPESCU SEBASTIAN-CONSTANTIN", 
    "BERTALAN-PĂCURARU ALEXANDRA-BEATRICE"

];

// Obiect pentru a păstra voturile
const votes = {};
let totalVotes = 0;

// Inițializare voturi pentru fiecare candidat
candidates.forEach(candidate => {
    votes[candidate] = 0;
});

// Generarea interfeței pentru candidați
const candidatesContainer = document.getElementById('candidates');
const totalVotesDisplay = document.getElementById('totalVotes');

candidates.forEach(candidate => {
    // Crearea containerului pentru fiecare candidat
    const candidateDiv = document.createElement('div');
    candidateDiv.className = 'candidate';

    // Numele candidatului
     const candidateName = document.createElement('p');
    candidateName.textContent = `${candidate}: ${votes[candidate]}`;
    candidateName.id = `votes-${candidate}`;

    // Butonul de votare
    const voteButton = document.createElement('button');
    voteButton.textContent = '+';
    voteButton.addEventListener('click', () => {
        votes[candidate]++; // Incrementare voturi pentru candidat
        totalVotes++; // Incrementare voturi totale
        document.getElementById(`votes-${candidate}`).textContent = `${candidate}: ${votes[candidate]}`; // Actualizare text candidat
        totalVotesDisplay.textContent = `Total voturi: ${totalVotes}`; // Actualizare voturi totale
    });

    // Adăugare elemente în containerul candidatului
    candidateDiv.appendChild(candidateName);
    candidateDiv.appendChild(voteButton);

    // Adăugare candidat în containerul principal
    candidatesContainer.appendChild(candidateDiv);
});