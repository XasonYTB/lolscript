const scripts = {
    script1: 'loadstring(game:HttpGet("https://example.com/script1.lua"))()',
    script2: 'loadstring(game:HttpGet("https://example.com/script2.lua"))()',
    script3: 'loadstring(game:HttpGet("https://example.com/script3.lua"))()',
};

function showScript(scriptName) {
    document.querySelector('.welcome-text').style.display = 'none';
    document.querySelector('.subtitle').style.display = 'none';
    document.querySelector('.script-buttons').style.display = 'none';
    document.getElementById('script-display').style.display = 'block';
    document.getElementById('script-content').textContent = scripts[scriptName];
}

function resetPage() {
    document.querySelector('.welcome-text').style.display = 'block';
    document.querySelector('.subtitle').style.display = 'block';
    document.querySelector('.script-buttons').style.display = 'flex';
    document.getElementById('script-display').style.display = 'none';
}
