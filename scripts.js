const apiKey = "76980330-8f0b-4659-a341-527364acf134"

$('.device-container').on('click', '.submit-button', createStartObject)
$('.device-container').on('click', '.checkbox', toggleChecked)

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
      `<div class="device" id="${device.id}">
        <h1 class="device-name">${device.name}</h1>
        <p class="device-status">${device.status}</p>
        <div class="table">
          <h1 class="title">Zones</h1>
          <h1 class="title">Duration</h1>
          <h1 class="title">Run</h1>
          ${createRows(device.zones)}
        </div>
        <div class="submit-button-container">
          <button class="submit-button" id="${device.id}">Submit</button>
        </div>
      </div>`
    )
  })
}

function createRows(zones) {
  let rows = zones.map((zone, index) => {
    return `<div 
        class="row"
        data-duration="${zone.runtime}"
        data-id=${zone.id}"
        data-sortOrder="${index + 1}"
        data-checked=true
        >
      <p class="zone">${zone.name}</p>
      <input type="text" value="${zone.runtime}"/>
      <input class="checkbox" type="checkbox" checked/>
     </div>
    `
  })
  return rows.join('')
}

function toggleChecked() {
  let val = $(this).prop('checked')
  $(this).parent().attr('data-checked', val)
}

function createStartObject() {
  let foo = Array.from($(this).parent().siblings('.table').children('.row')).map(node => node.dataset)

  console.log(foo)
}



getDevices();


