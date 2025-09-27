async function fetchCoupons() {
  const res = await fetch('/api/coupons');
  const data = await res.json();
  const container = document.getElementById('couponList');
  container.innerHTML = data.map(c => `
    <div>
      <h3>${c.title}</h3>
      <p>${c.details}</p>
      <small>Expires: ${c.expiration}</small>
    </div>
  `).join('');
}
