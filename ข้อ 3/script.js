// เลือกองค์ประกอบฟอร์ม
const contactForm = document.getElementById('contactForm');

// เพิ่ม Event Listener สำหรับการส่งฟอร์ม
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

  // ตรวจสอบความถูกต้องของข้อมูล
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || phone === '' || message === '') {
    alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
    return;
  }

  if (!validateEmail(email)) {
    alert('กรุณากรอกอีเมลให้ถูกต้อง');
    return;
  }

  if (!validatePhone(phone)) {
    alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (ตัวเลขเท่านั้น)');
    return;
  }

  // แสดงข้อมูลที่กรอก
  const formData = {
    name,
    email,
    phone,
    subject,
    message
  };

  console.log('ข้อมูลที่กรอก:', formData);
  alert('ส่งข้อมูลสำเร็จ!');
  contactForm.reset(); // ล้างข้อมูลในฟอร์ม
});

// ฟังก์ชันตรวจสอบอีเมล
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// ฟังก์ชันตรวจสอบเบอร์โทรศัพท์
function validatePhone(phone) {
  const phonePattern = /^[0-9]+$/;
  return phonePattern.test(phone);
}


//car

function cat() {
  let cati = document.getElementById("catimg");
  cati.src = "https://us-fbcloud.net/hottopic/data/819/819204.u50sje1dhxab.n3.jpg";
}