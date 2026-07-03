// src/js/core/engine.js

// 1. Dynamic Asset Routing
const CONTESTANT_DATA = {
    "Firey": { season: "BFDI" },
    "Gelatin": { season: "BFDIA" },
    "Liy": { season: "BFB" },
    "Winner": { season: "TPOT" }
    // ... complete this list for all characters
};

function getAssetPath(name, type = "voting icons") {
    const data = CONTESTANT_DATA[name];
    const season = data ? data.season : "BFDI"; // Default fallback
    // Types: "voting icons" or "Object Poses"
    return `contestant images/${season}/${type}/${name}.png`;
}

// 2. Refactored Phase Engine
let episodeState = {
    episodeNumber: 1,
    currentPhase: 'Morning', // Morning -> Midday -> Nighttime -> CakeAtStake
    isMerged: false
};

function advanceEpisodePhase() {
    switch(episodeState.currentPhase) {
        case 'Morning':
            triggerMorningEvents();
            episodeState.currentPhase = 'Midday';
            break;
        case 'Midday':
            triggerMainChallenge(); // Your existing challenge generation logic
            episodeState.currentPhase = 'Nighttime';
            break;
        case 'Nighttime':
            triggerNightEvents();
            episodeState.currentPhase = 'CakeAtStake';
            break;
        case 'CakeAtStake':
            runDramaticCakeAtStake(); // Your existing elimination logic, but with enhanced VFX
            episodeState.currentPhase = 'Morning';
            episodeState.episodeNumber++;
            break;
    }
}

function triggerMorningEvents() {
    // Generate random conversational arrays, alliances forming, arguments
    printLog("🌅 Morning Phase: Contestants are waking up.", "#f1c40f");
    // Insert polished UI dialogue transitions here
}

function triggerNightEvents() {
    // Generate strategy discussions, betrayals, and targeted votes
    printLog("🌙 Nighttime Phase: Strategies are forming in the dark.", "#34495e");
}
