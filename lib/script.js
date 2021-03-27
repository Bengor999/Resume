window.onload = function () {
    const links = document.querySelectorAll('.my-visit-site');
    links.forEach(_link => {
      _link.onclick = function (_event) {
        console.log('это моя визитка и есть!')
        alert('это моя визитка и есть!')
        _event.preventDefault()
      }
    })
  }
  