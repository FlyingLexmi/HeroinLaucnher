const fs = require('fs');
const path = 'config/data.json';

function createPLayer(username) {
  let players = {};

  if (fs.existsSync(path)) {
    players = JSON.parse(fs.readFileSync(path, 'utf8'));
    if (Object.values(players).includes(username)) return;
  } else {
    fs.mkdirSync('config', { recursive: true });
  }

  const key = `name${Object.keys(players).length + 1}`;
  players[key] = username;

  fs.writeFileSync(path, JSON.stringify(players, null, 2));
  console.log(`Добавлен ${key}: ${username}`);
}

module.exports = { createPLayer };
