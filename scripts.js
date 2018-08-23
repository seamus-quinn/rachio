const apiKey = "76980330-8f0b-4659-a341-527364acf134"

function getDevices() {
  const url = "https://api.rach.io/1/public/person/2ee8a9ca-741d-4b1a-add3-8a7683e5aa28"
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    }
  })
    .then(response => response.json())
    .then(data => displayDevices(data.devices))
}

function displayDevices(devices) {
  devices.forEach(device => {
    $('.device-container').append(
      `<div class="device">
        <div class="device-card">
          <h1 class="device-name">${device.name}</h1>
          <p class="device-status">${device.status}</p>
          <button class="select-zone-button">Select Zones</button>
          <button class="run-all-zones-button">Run All Zones</button>
        </div>
        <div class="zone-container">
        </div>
       </div>
      `
    )
  })
}

function createZone(zones) {
  return zones.map(zone => {
    return `<option>${zone.name}</option>`
  })
}

getDevices();


