// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      mobileMenu.classList.add("hidden");
    }
  });
});

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Highlight active navigation item
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

const images = [
  {
    src: "./picture/DSCF7279.JPG",
    caption: "หน้าบันพระอุโบสถ ประดับด้วยลายปูนปั้นและกระเบื้องเคลือบ",
  },
  {
    src: "./picture/DSCF7323.JPG",
    caption: "หน้าบันพระอุโบสถ มองจากหน้าต่างวิหารพระพุทธไสยาสน์",
  },
  {
    src: "./picture/DSCF7119.JPG",
    caption: "พระพุทธอนันตคุณอดุลยญาณบพิตร พระประธานในพระอุโบสถ",
  },
  {
    src: "./picture/DSCF7140.JPG",
    caption:
      "ตราพระราชลัญจกรประจำรัชกาลที่ 3 บนผ้าทิพย์ของพระประธาน ภายในประดิษฐานพระบรมราชสรีรางคารของรัชกาลที่ 3",
  },
  {
    src: "./picture/DSCF7133.JPG",
    caption:
      "กระจกสะท้อนแสง 3 บานประดับบนกรอบหน้าต่างและบานประตูทุกบานของพระอุโบสถ เมื่อจุดเทียนจะสะท้อนแสงสว่างไปทั่วพระอุโบสถ",
  },
  {
    src: "./picture/DSCF7224.JPG",
    caption:
      "พุทธลักษณะของพระประธานในพระอุโบสถ เป็นปางขัดสมาธิ ใบหน้าดั่งชายวัยหนุ่ม",
  },
  {
    src: "./picture/DSCF7241.JPG",
    caption: "เบื้องหลังพระประธานในพระอุโบสถ บริเวณฐานชุกชี (ไม่เปิดให้เข้าชม)",
  },
  {
    src: "./picture/DSCF7249.JPG",
    caption:
      "ภาพจิตรกรรมฝาผนังภายในพระอุโบสถ บริเวณหลังพระประธานเป็นรูปเทพเจ้าจีน (ไม่เปิดให้เข้าชม)",
  },
  {
    src: "./picture/DSCF7250.JPG",
    caption: "ภาพจิตรกรรมฝาผนังเทพเจ้า ฮก ลก ซิ่ว",
  },
  {
    src: "./picture/DSCF7122.JPG",
    caption: "บานประตูไม้พระอุโบสถแกะสลักเป็นรูปมังกร",
  },
  {
    src: "./picture/DSCF7257.JPG",
    caption: "รูปปั้นทวารบาลแบบจีนยืนเฝ้าประตูพระอุโบสถ",
  },
  {
    src: "./picture/DSCF7236.JPG",
    caption: "ภาพจิตรกรรมโต๊ะเครื่องใช้แบบจีน",
  },
  {
    src: "./picture/DSCF7246.JPG",
    caption: "ภาพจิตรกรรมรูปแจกันลายแมวสีขาว ในพระอุโบสถ",
  },
  {
    src: "./picture/DSCF7261.JPG",
    caption: "ซุ้มใบเสมาคู่ทรงเกี้ยวตตั้งแท่นรอบพระอุโบสถ",
  },
  {
    src: "./picture/DSCF7255.JPG",
    caption:
      "แท่นที่ประทับรัชกาลที่ 3 บริเวณหน้าพระอุโบสถ เมื่อครั้งเสด็จมาทรงควบคุมการสร้างวัด",
  },
  {
    src: "./picture/DSCF7282.JPG",
    caption:
      "สุสานพระธรรม แท่นสำหรับเผาพระคัมภีร์ที่ชำรุดเสียหาย แทนการตั้งกองไฟเผาที่พื้น",
  },
  {
    src: "./picture/DSCF7372.JPG",
    caption:
      "หน้าบันวิหารพระพุทธไสยาสน์ ลวดลายปูนปั้นทาสีเหลืองตรงกลางมีรูปไก้เป็นสัญลักษณ์ประจำปีเกิดของรัชกาลที่ 3",
  },
  {
    src: "./picture/DSCF7325.JPG",
    caption:
      "พระพุทธรูปไสยาสน์ขนาดใหญ่นามพระพุทธไสยาสน์นารถชนินทร์ ชินสากยบรมสมเด็จสรรเพชญพุทธบพิตร",
  },
  {
    src: "./picture/DSCF7068.JPG",
    caption: "พระเกศของพระพุทธไสยาสน์ที่ยาวปักไปที่เสาของพระวิหาร",
  },
  {
    src: "./picture/DSCF7332.JPG",
    caption:
      "ลายรดน้ำมงคล 108 ประการ ที่พระบาทของพระพุทธไสยาสน์ เป็นต้นแบบของวัดพระเชตุรัตนวิมลมังคลาราม",
  },
  {
    src: "./picture/DSCF7331.JPG",
    caption:
      "พระพุทธไสยาสน์นารถชนินทร์ ชินสากยบรมสมเด็จสรรเพชญพุทธบพิตร องค์จำลอง",
  },
  {
    src: "./picture/DSCF7330.JPG",
    caption: "ประตูไม้พระวิหารสลักรูปทวารบาลพร้อมโต๊ะเครื่องใช้แบบจีน",
  },
  {
    src: "./picture/DSCF7076.JPG",
    caption:
      "รูปผลทับทิมปอกเปลือกเห็นเมล็ดสลักบนประตูไม้พระวิหาร แสดงความละเอียดประณีต",
  },
  {
    src: "./picture/DSCF7077.JPG",
    caption: "รูปผลทับทิมแบบไม่ปอกเปลือกเห็นเมล็ดสลักบนประตูไม้พระวิหาร",
  },
  {
    src: "./picture/DSCF7079.JPG",
    caption:
      "ภาพเขียนสีลายนกยูงบนอีกด้านหนึ่งของบานประตูไม้พระวิหาร(เมื่อปิดประตู) แสดงให้เห็นบริเวณบานแผละที่เป็นลายกำมะลอรูปบัว",
  },
  {
    src: "./picture/DSCF7329.JPG",
    caption: "บานหน้าต่างไม้รอบพระวิหารสลักรูปทวารบาลมีทั้งหมด 23 บาน",
  },
  {
    src: "./picture/DSCF7107.JPG",
    caption:
      "พระพุทธรูปปางห้ามแก่นจันทร์(พุทธลักษณะมือขวาแนบลำตัวมือซ้ายยกขึ้นห้าม) ทรงจีวรลายดอกพิกุล",
  },
  {
    src: "./picture/DSCF7317.JPG",
    caption: "โต๊ะวางพานพุ่มสักการะพระพุทธไสยาสน์",
  },
  {
    src: "./picture/DSCF7321.JPG",
    caption:
      "ลายหยินหยางจุดเดียวบนเพดานวิหาร จะอยู่ตำแหน่งเหนือโต๊ะวางพานพุ่มสักการะพอดี",
  },
  {
    src: "./picture/DSCF7326.JPG",
    caption:
      "พระพุทธไสยาสน์นารถชนินทร์ ชินสากยบรมสมเด็จสรรเพชญพุทธบพิตร สังเกตที่มุมซ้ายล่างจะเห็นพุทธศาสนิกชนนำหมอนมาถวายด้วยที่ท่านเป็นพระนอน",
  },
  {
    src: "./picture/DSCF7308.JPG",
    caption:
      "เจดีย์รอบพระวิหารพระพุทธไสยาสน์ มีทั้งหมด 32 องค์ แทนพระพุทธเจ้า 32 พระองค์ในอดีต",
  },
  {
    src: "./picture/DSCF7302.JPG",
    caption:
      "เจดีย์รอบพระวิหารพระพุทธไสยาสน์ ซึ่งบางเจดีย์จะมีอัฐิของผู้วายชนม์บรรจุอยู่ด้วย",
  },
  {
    src: "./picture/DSCF7292.JPG",
    caption:
      "แผ่นจารึกหินรอบระเบียงคตของพระวิหารพระพุทธไสยาสน์ บันทึกตำรับยาโบราณ",
  },
  {
    src: "./picture/DSCF7366.JPG",
    caption: "รูปปั้นแบบศิลปะจีนรอบพระวิหารพระพุทธไสยาสน์ที่เกิดความเสียหาย",
  },
  {
    src: "./picture/DSCF7275.JPG",
    caption: "เจดีย์ทรงแปดเหลี่ยมแบบจีน สูง 5 ชั้นยอดรูปน้ำเต้า",
  },
  {
    src: "./picture/DSCF7065.JPG",
    caption: "ประตูทางเข้าผ่านระเบียงคตรูปวงกลมแบบจีนของพระวิหารพระพุทธไสยาสน์",
  },
  {
    src: "./picture/DSCF7259.JPG",
    caption: "ซุ้มประตูทางเข้าพระอุโบสถแบบจีนมีประตูกลางและประตูข้างซ้ายขวา",
  },
  {
    src: "./picture/DSCF7263.JPG",
    caption: "ประติมากรรมรูปหินแกะสลักรูปสิงห์ขากวางยืนเฝ้าประตู",
  },
  {
    src: "./picture/DSCF7270.JPG",
    caption: "ลวดลายปูนปั้นประดับกระเบื้องรูปนกยูงบนซุ้มประตูทางเข้าพระอุโบสถ",
  },
  {
    src: "./picture/DSCF7496.JPG",
    caption:
      "ภายนอกของวิหารพระยืนขนาบข้างฝั่งขวาของพระอุโบสถ เชื่อว่าเดิมเป็นพระอุโบสถเก่าของอดีตวัดจอมทอง ซึ่งถูกบูรณะใหม่เป็นศิลปะแบบจีน",
  },
  {
    src: "./picture/DSCF7463.JPG",
    caption:
      "หน้าบันวิหารพระยืน ซึ่งจะเป็นรูปแบบเดียวกันกับศาลาการเปรียญ(วิหารพระนั่ง)",
  },
  {
    src: "./picture/DSCF7468.JPG",
    caption:
      "พระพุทธรูปยืนปางประธานอภัยขนาดใหญ่สมัยอยุธยาตอนกลาง หลวงพ่ออู่ทอง",
  },
  {
    src: "./picture/DSCF7476.JPG",
    caption:
      "หมู่พระพุทธรูปเก่าแก่แบบสมัยอยุธยาตอนกลาง อยู่หลังฉากกั้นพระยืนในวิหาร",
  },
  {
    src: "./picture/DSCF7478.JPG",
    caption:
      "หมู่พระพุทธรูปเก่าแก่แบบสมัยอยุธยาตอนกลาง อยู่หลังฉากกั้นพระยืนในวิหาร",
  },
  {
    src: "./picture/DSCF7426.JPG",
    caption:
      "แท่นบรรจุอัฐิของอดีตเจ้าอาวาสวัดราชโอรส ตั้งอยู่หน้าศาลาการเปรียญ(วิหารพระนั่ง)",
  },
  {
    src: "./picture/DSCF7167.JPG",
    caption:
      "พระพุทธชัยสิทธธรรมนาถ พระพุทธรูปประธานปางมารวิชัยมือซ้ายถือตาลปัตร",
  },
  {
    src: "./picture/DSCF7382.JPG",
    caption: "รอยพระพุทธบาทจำลองตั้งแท่น",
  },
  {
    src: "./picture/DSCF7395.JPG",
    caption: "พระพุทธชัยสิทธธรรมนาถ ในศาลาการเปรียญ(วิหารพระนั่ง)",
  },
  {
    src: "./picture/DSCF7429.JPG",
    caption:
      "พระปรางค์ 4 องค์รอบพระอุโบสถซึ่งเป็นศูนย์กลางของจักรวาล ส่วนพระปรางค์เป็นตัวแทนของ 4 ทวีป",
  },
  {
    src: "./picture/DSCF7269.JPG",
    caption:
      "เจดีย์ทรงถะยอดรูปน้ำเต้าแบบจีน มีทั้งหมด 4 องค์บริเวณด้านหน้าของวัด",
  },
  {
    src: "./picture/DSCF7416.JPG",
    caption:
      "บนสันหลังคาวิหารพระยืนและวิหารพระนั่งมีรูปปั้นมังกรจีน 2 ตัวขนาบข้างเจดีย์ทรงถะ",
  },
  {
    src: "./picture/DSCF7300.JPG",
    caption: "เสาหัวบัวพบเห็นได้โดยรอบบริเวณวัด",
  },
  {
    src: "./picture/DSCF7445.JPG",
    caption: "สิงห์ลายเกล็ดยืนเฝ้าซุ้มประตูทางเข้าพระอุโบสถ",
  },
  {
    src: "./picture/DSCF7442.JPG",
    caption: "ศาลาเปลื้องเครื่องอยู่ริมคลองด่าน(คลองสนามชัย) บริเวณด้านหน้าวัด",
  },
  {
    src: "./picture/DSCF7513.JPG",
    caption:
      "อาคารริมคลองด่าน(คลองสนามชัย) ด้านหน้าวัด ประดิษฐานพระพุทธรูปภายใน",
  },
  {
    src: "./picture/DSCF7518.JPG",
    caption:
      "พระพุทธรูปภายในอาคารริมคลองด่าน(คลองสนามชัย) ด้านหน้าวัด ซึ่งถูกกระจกปิดไว้",
  },
];

const galleryGrid = document.getElementById("galleryGrid");

images.forEach((img) => {
  const div = document.createElement("div");
  div.className =
    "gallery-item relative overflow-hidden rounded-lg shadow-md cursor-pointer";
  div.onclick = () => openModal(img.src, img.caption);

  div.innerHTML = `
          <img
            src="${img.src}"
            alt="${img.caption}"
            class="w-full h-48 object-cover transition duration-500 hover:scale-110"
          />
          <div class="gallery-overlay absolute inset-0 bg-red-800 bg-opacity-0 flex items-center justify-center opacity-0 transition duration-300">
            <i class="fas fa-search-plus text-white text-2xl"></i>
          </div>
        `;

  galleryGrid.appendChild(div);
});

function openModal(src, caption) {
  document.getElementById("modalImage").src = src;
  document.getElementById("modalCaption").textContent = caption;
  document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}
