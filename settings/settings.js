function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    "method": document.querySelector("#method").value,
    "hourStart": document.querySelector("#hourStart").value,
    "hourEnd": document.querySelector("#hourEnd").value,
    "accentColorForDark": document.querySelector("#accentColorForDark").value,
    "accentColorForLight": document.querySelector("#accentColorForLight").value,
    "apiKey": document.querySelector("#apiKey").value,
    "lat": document.querySelector("#lat").value,
    "long": document.querySelector("#long").value
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
    browser.runtime.sendMessage('update');
    console.log('message sent');
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#method").value = result["method"] || 'manual';
    document.querySelector("#hourStart").value = result["hourStart"];
    document.querySelector("#hourEnd").value = result["hourEnd"];
    document.querySelector("#accentColorForDark").value = result["accentColorForDark"] || '#2aa198';
    document.querySelector("#accentColorForLight").value = result["accentColorForLight"] || '#d33682';
    document.querySelector("#apiKey").value = result["apiKey"];
    document.querySelector("#lat").value = result["lat"];
    document.querySelector("#long").value = result["long"]
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get();
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);