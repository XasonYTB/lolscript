function showScript(scriptName, scriptCode) {
    // Hide buttons
    const buttons = document.querySelectorAll('.script-button');
    buttons.forEach(button => button.style.display = 'none');

    // Show script output
    const outputDiv = document.getElementById('script-output');
    outputDiv.innerHTML = `<h2>${scriptName}</h2><pre>${scriptCode}</pre>`;
    outputDiv.style.display = 'block';
}
