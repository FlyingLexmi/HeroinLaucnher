
const createBtn = document.getElementById("create");
createBtn.addEventListener('click', () => {
    
    const nickname = document.getElementById("nicknameAdd").value;
    window.electronAPI.config(nickname);

    window.location.href = '../index.html';

});
