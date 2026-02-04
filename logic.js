let facts = {};

async function loadFacts() {
  const res = await fetch("facts.json");
  facts = await res.json();
}

function think(question) {
  question = question.toLowerCase();
  let response = [];

  if (question.includes("what") && question.includes("geometry dash")) {
    response.push(
      `${facts.game.name} is a ${facts.game.genre} created by ${facts.game.creator} and released in ${facts.game.release_year}.`
    );
  }

  if (question.includes("hard") || question.includes("difficult")) {
    response.push(
      `The game is difficult because ${facts.mechanics[1].toLowerCase()} and ${facts.mechanics[2].toLowerCase()}.`
    );
  }

  if (question.includes("wave")) {
    response.push(
      `The wave mode is considered difficult because it uses ${facts.modes.wave.toLowerCase()}, making mistakes very punishing.`
    );
  }

  if (question.includes("community")) {
    response.push(
      `The Geometry Dash community is important because ${facts.community.join(", ").toLowerCase()}.`
    );
  }

  if (response.length === 0) {
    return "I don't have enough information to answer that yet.";
  }

  return response.join(" ");
}
