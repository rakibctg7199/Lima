function copyNumber() {
  const paymentInput = document.getElementById("paymentNumber");
  paymentInput.select();
  paymentInput.setSelectionRange(0, 99999); // for mobile
  document.execCommand("copy");
  alert("নাম্বার কপি হয়েছে: " + paymentInput.value);
}

function submitDeposit() {
  alert("✅ আপনার ডিপোজিট ফর্ম সাবমিট হয়েছে! যাচাই করার পর অ্যাকাউন্টে ব্যালেন্স যোগ হবে।");
}
