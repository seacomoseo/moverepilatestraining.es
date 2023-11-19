// google spreadsheets

scrollShot(
  '600px 0%',
  '#horarios-iframe',
  e => e.classList.add('lazyload'),
  e => {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQli2HOn7NN_zXn3ajHB-gXKDp9Q7X-QkekdrOrlluH8HQ6tRjhmgV1IX_m_3Om5McrNgxN6cFZ230C/pubhtml?gid=1861644079&single=true&chrome=false&widget=false&headers=false'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = () => {
      // display response
      e.innerHTML = xhr.responseText
        .replace(/\n/ig, '')
        .replace(/<!DOCTYPE .*<link .*?>|style> .*?<body .*?>|<script .*?<\/script>|<style>.*?<\/style>|html \{.*?\.dash \{.*?\}|(font-family|padding):.*?;|display:none;|<thead>.*?<\/thead>|<\/body><\/html>/ig, '')
      document.querySelectorAll('.row-header-shim').forEach(e => e.style.display = 'none')
    }
    xhr.send()
    e.classList.remove('lazyload')
  },
  undefined
)