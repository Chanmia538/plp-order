function copyTextToClipboard() {
  const text = "01776333538";
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard');
  });
}

function send_handle() {
  const method = document.getElementById('payment-method')?.value;
  const transactionID = document.getElementById('transaction-id')?.value;
  const fileLink = document.getElementById('file-link')?.value;

  if (!method || !transactionID) {
    alert('Please select a payment method and enter the transaction ID.');
    return;
  }

  const message = `Payment Method: ${method}\nTransaction ID: ${transactionID}\nDownload File: ${fileLink}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=+8801776333538&text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}
