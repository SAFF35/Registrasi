fetch('https://script.google.com/macros/s/AKfycbyxyFIoOi6l4NSuWOK7byxS7zKYLnMoyVrSKnJsmGWAN1v6ymY3crEYBR3R3XhXeRfDAw/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.text())
.then(whatsappUrl => {
    alert('Registrasi Berhasil!');
    window.location.reload();
    })
.catch(error => {
    console.error('Error:', error);
});
