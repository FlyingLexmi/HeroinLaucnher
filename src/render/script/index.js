//btns
const startMinecraftButton = document.getElementById('play');
const mods = document.getElementById("mods");
const bot = document.getElementById("bot");
const addAccount = document.getElementById("createAcc");
const settings = document.getElementById("settings");
const modsSetting = document.getElementById("modsSetting");
const addPLayerIframe = document.getElementById("add");








addAccount.addEventListener("click", () =>{
    addPLayerIframe.style.display = "flex";
});





startMinecraftButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const version = document.getElementById('version').value;
    window.electronAPI.startMinecraft(username, version);
});








document.getElementById("mods").addEventListener("click", () => {
    document.getElementById("modsSetting").style.display = "block";
});

document.getElementById("closeMod").addEventListener("click", () => {
    const wrapperTwo = document.getElementById("wrapperTwo");
    const modsSetting = document.getElementById("modsSetting");

    if (wrapperTwo) wrapperTwo.style.display = "block";
    if (modsSetting) modsSetting.style.display = "none";
});



