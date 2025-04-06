const { Client } = require('minecraft-launcher-core');
const path = require('path');
const os = require('os');
const fs = require('fs');

async function minecraftLauncher(username, version) {
    const launcher = new Client();

    if (username.length === 0) {
        try {
            const jsonString = fs.readFileSync('config/data.json', 'utf8');
            const data = JSON.parse(jsonString);
            username = data.name;
        } catch (err) {
            console.error("Ошибка при чтении или парсинге файла:", err);
            return;
        }
    }

    const options = {
        authorization: {
            name: username,
            uuid: "00000000-0000-0000-0000-000000000000",
        },
        root: path.join(os.homedir(), ".minecraft"),
        version: {
            number: version,
            type: "release"
        },
        memory: {
            max: 8192,  
            min: 1024   
        }
    };

    launcher.launch(options);

    launcher.on('data', (e) => console.log(`Minecraft: ${e}`));
    launcher.on('error', (err) => console.error(`Launcher Error: ${err}`));
    launcher.on('close', () => console.log(`Minecraft process has closed`)); 
}

module.exports = { minecraftLauncher };
