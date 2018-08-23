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
        <h1>${device.name}</h1>
        <p>${device.status}</p>
       </div>
      `
    )
  })
}

getDevices();


