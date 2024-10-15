const scripts = {
    "Script 1": "print('This is Script 1')",
    "Script 2": "print('This is Script 2')",
    "Script 3": "print('This is Script 3')"
};

function showScript(scriptName) {
    const scriptContent = scripts[scriptName];
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('script-display').classList.remove('hidden');
    document.getElementById('script-content').textContent = scriptContent;
}

function resetDisplay() {
    document.getElementById('script-display').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
}
