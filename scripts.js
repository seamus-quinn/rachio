
function getDevices() {
  const apiKey = "76980330-8f0b-4659-a341-527364acf134"
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
        <h1 class="device-name">${device.name}</h1>
        <p class="device-status">${device.status}</p>
        <div class="zone-container">
          <div class="zones">
            <h1 class="title">Zones</h1>
            <div class="zone-list">
              ${populateZoneList(device.zones)}
            </div>
          </div>
          <div class="time">
            <h1 class="title">Duration (s)</h1>
            <div class="time-list">
              ${populateTimeList(device.zones)}
            </div>
          </div>
          <div class="selects">
            <h1 class="title">Run</h1>
            <div class="select-list">
              ${populateSelectList(device.zones)}
            </div>
          </div>
          <div class="run-button-container">
            <button class="run-selected-button">Run Selected Zones
            </button>
          </div>
        </div>
      </div>`
    )
  })
}

function populateZoneList(zones) {
  let zoneElements = zones.map(zone => {
    return `<p class="zone">${zone.name}</p>`
  })
  return zoneElements.join('')
}

function populateTimeList(zones) {
  let timeElements = zones.map(zone => {
    return `<input type="text" value="${zone.runtime}"/>`
  })
  return timeElements.join('')
}

function populateSelectList(zones) {
  let selects = []
  for(var i = 0; i < zones.length; i++) {
    selects.push(`<input type="checkbox" checked/>`)
  }
  return selects.join('')
}

getDevices();


