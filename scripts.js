const apiKey = "76980330-8f0b-4659-a341-527364acf134"

$(".device-container").on("click", ".select-zone-button", toggleZoneDisplay)

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
        <div class="hide zone-container">
          <div class="zone-list">
            ${populateZoneList(device.zones)}
          </div>
          <div class="time-list">
            ${populateTimeList(device.zones)}
          </div>
          <div class="select-list">
            ${populateSelectList(device.zones)}
          </div>
          <div class="run-button-container">
            <button>Run Selected Zones</button>
          </div>
        </div>
      </div>`
    )
  })
}

function toggleZoneDisplay() {
  $('.zone-container').toggleClass('hide')
}

function populateZoneList(zones) {
  let zoneElements = zones.map(zone => {
    return `<p>${zone.name}</p>`
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


