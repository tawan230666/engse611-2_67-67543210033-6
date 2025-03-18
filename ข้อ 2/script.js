// เลือกองค์ประกอบทั้งหมดที่จำเป็น
const taskInput = document.getElementById('taskInput');
const taskType = document.getElementById('taskType');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// ฟังก์ชันเพิ่มรายการ
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const type = taskType.value;

  if (taskText !== '') {
    // สร้างองค์ประกอบรายการใหม่
    const li = document.createElement('li');

    // เพิ่มรูปภาพตามประเภทงาน
    const icon = document.createElement('img');
    icon.src = getIconByType(type);
    icon.classList.add('task-icon');
    li.appendChild(icon);

    // เพิ่มข้อความรายการ
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // เพิ่มปุ่มลบ
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'ลบ';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
      if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?')) {
        taskList.removeChild(li);
      }
    });
    li.appendChild(deleteButton);

    // เพิ่ม Event Listener เพื่อขีดฆ่ารายการ
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // เพิ่มรายการใหม่ลงในรายการ
    taskList.appendChild(li);

    // เคลียร์ช่องกรอกข้อความ
    taskInput.value = '';
  }
});

// ฟังก์ชันเลือกรูปภาพตามประเภทงาน
function getIconByType(type) {
  switch (type) {
    case 'work':
      return 'https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-people-working-cartoon-png-image_4926909.png';
    case 'personal':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/180px-Noto_Emoji_KitKat_263a.svg.png';
    case 'shopping':
      return 'https://e7.pngegg.com/pngimages/932/532/png-clipart-emoji-supermarket-grocery-store-shopping-cart-shopping-bags-trolleys-emoji-angle-food.png';
  }
}
