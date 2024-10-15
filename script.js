function showScript(scriptName, scriptCode) {
    // Hide buttons
    const buttons = document.querySelectorAll('.script-button');
    buttons.forEach(button => button.style.display = 'none');

    // Show script output
    const outputDiv = document.getElementById('script-output');
    outputDiv.innerHTML = `<h2>${scriptName}</h2><pre>${scriptCode}</pre>`;
    outputDiv.classList.add('show');
    outputDiv.classList.remove('hide');
}

// To go back, you can add this function if you want to re-show the buttons
function hideOutput() {
    const outputDiv = document.getElementById('script-output');
    outputDiv.classList.add('hide');
    outputDiv.classList.remove('show');

    const buttons = document.querySelectorAll('.script-button');
    buttons.forEach(button => button.style.display = 'flex'); // Show buttons again
}

// Optional back button functionality
const backButton = document.createElement('button');
backButton.innerText = "Back";
backButton.onclick = hideOutput;
backButton.style.display = 'none'; // Hidden initially
backButton.classList.add('back-button');

document.getElementById('script-output').appendChild(backButton);

const originalShowScript = showScript;
showScript = function(scriptName, scriptCode) {
    originalShowScript(scriptName, scriptCode);
    backButton.style.display = 'block'; // Show the back button
};
