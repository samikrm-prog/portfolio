const email = "sami.k.educ@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    const btn = document.getElementById("copyEmail");
    const old = btn.textContent;
    btn.textContent = "Copié ✅";
    setTimeout(() => (btn.textContent = old), 1200);
  } catch {
    alert("Copie impossible. Ton navigateur bloque peut-être le presse-papier.");
  }
});

document.getElementById("mailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailto;
});
