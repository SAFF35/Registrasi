document.getElementById('registrasiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const namaLengkap = document.getElementById('namaLengkap').value;
    const nomorWhatsApp = document.getElementById('nomorWhatsApp').value;
    const kotaTinggal = document.getElementById('kotaTinggal').value;
    const buatPassword = document.getElementById('buatPassword').value;
    const referral = document.getElementById('referral').value;

    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referral');

    const finalReferral = referralCode ? referralCode : referral;

    const data = {
        namaLengkap,
        nomorWhatsApp,
        kotaTinggal,
        buatPassword,
        referral: finalReferral
    };


    // Ambil kode referral dari URL
  // Jika URL berupa ?referral=HYT001, maka ambil nilai dari parameter 'referral'
  const urlParams = new URLSearchParams(window.location.search);
  let referralCode = urlParams.get('referral');

  // Jika tidak ada parameter 'referral' tetapi URL diakhiri dengan kode (misalnya: ?HYT001)
  if (!referralCode && window.location.search && window.location.search.indexOf('=') === -1) {
    referralCode = window.location.search.substring(1);
  }
  if (referralCode) {
    document.getElementById('referral').value = referralCode;
  }

  // Menangani submit form
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Ubah data form menjadi format URL-encoded
    const params = new URLSearchParams();
    for (const pair of formData.entries()) {
      params.append(pair[0], pair[1]);
    }
    

    fetch('https://script.google.com/macros/s/AKfycbyxyFIoOi6l4NSuWOK7byxS7zKYLnMoyVrSKnJsmGWAN1v6ymY3crEYBR3R3XhXeRfDAw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      alert('Registrasi Berhasil!');
      // Setelah sukses, buka WhatsApp untuk mengirim pesan "Saya sudah Regiatrasi" ke nomor Anda
      window.open('https://api.whatsapp.com/send?phone=62895386314380&text=Saya%20sudah%20Regiatrasi', '_blank');
      // Reset form (opsional)
      form.reset();
    })

    .then(response => {
        alert('Registrasi Berhasil!');
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
