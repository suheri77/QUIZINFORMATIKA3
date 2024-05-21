let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 31;
let countdown;
let restartAttempts = 0; // Counter for restart attempts

const firstPasswords = ["md", "jd", "py"];
const secondPasswords = ["345", "107", "157"];

let selectedFirstPassword, selectedSecondPassword;

function getRandomPasswordSet() {
  // Pilih kata sandi secara acak dari daftar
  return {
    first: firstPasswords[Math.floor(Math.random() * firstPasswords.length)],
    second: secondPasswords[Math.floor(Math.random() * secondPasswords.length)],
  };
}

// Initial password selection
selectedFirstPassword = getRandomPasswordSet().first;
selectedSecondPassword = getRandomPasswordSet().second;

const quizArray = [
  {
    id: "0",
    question: " Apa yang dimaksud dengan hak kekayaan intelektual (HKI) dalam konteks produk informatika?",
    options: [
    "Hak untuk mengakses internet gratis", 
    "Hak untuk mengekspor perangkat lunak", 
    "Hak untuk mengklaim kepemilikan atas karya kreatif",
    "Hak untuk menghapus data pribadi dari internet", 
    "Hak untuk menyalin dan mendistribusikan konten tanpa izin"
  ],

    correct: "Hak untuk mengklaim kepemilikan atas karya kreatif",
  },


  {
    id: "1",
    question: "Bagaimana produk informatika berkontribusi terhadap pertumbuhan ekonomi?",
    options: [
      "Dengan membatasi akses informasi", 
      "Dengan meningkatkan biaya produksi", 
      "Dengan menciptakan lapangan kerja baru",
      "Dengan mengurangi investasi dalam teknologi", 
      "Dengan meningkatkan kebutuhan akan bahan bakar fosil"
    ],
    correct: "Dengan menciptakan lapangan kerja baru",
  },
  {
    id: "2",
    question: "Apa yang dimaksud dengan perangkat lunak sumber terbuka (open source software) dalam konteks ekonomi produk informatika?",
    options: [
      "Perangkat lunak yang hanya bisa diakses oleh pembeli berlangganan", 
      "Perangkat lunak yang hanya tersedia untuk perusahaan besar", 
      "Perangkat lunak yang dapat dimodifikasi dan didistribusikan secara bebas",
      "Perangkat lunak yang tidak dapat diakses secara online", 
      "Perangkat lunak yang hanya bisa diinstal pada satu perangkat saja"
    ],
    correct: "Perangkat lunak yang dapat dimodifikasi dan didistribusikan secara bebas",
  },

  {
    id: "3",
    question: "Mengapa perlindungan data pribadi merupakan isu penting dalam hukum produk informatika?",
    options: [
      "Untuk membatasi akses pengguna internet", 
      "Untuk mempromosikan pelanggaran privasi", 
      "Untuk melindungi informasi pribadi pengguna",
      "Untuk meningkatkan risiko keamanan siber", 
      "Untuk membatasi inovasi teknologi"
    ],
    correct: "Untuk melindungi informasi pribadi pengguna",
  },

  {
    id: "4",
    question: "Apa peran hukum dalam mengatur keamanan produk informatika?",
    options: [
      "Menetapkan standar untuk perlindungan data dan privasi", 
      "Memperketat kontrol atas konten internet", 
      "Meningkatkan biaya produksi perangkat lunak",
      "Mengurangi inovasi dalam teknologi digital", 
      "Meniadakan akses internet di wilayah tertentu"
    ],
    correct: "Menetapkan standar untuk perlindungan data dan privasi",
  },

  {
    id: "5",
    question: "Apa yang dimaksud dengan Internet of Things (IoT) dalam konteks Informatika untuk masa depan?",
    options: [
      "Koneksi perangkat elektronik ke internet untuk berbagi data dan kontrol", 
      "Jaringan sosial untuk komunikasi antarplanet", 
      "Konsep tentang kehidupan setelah kematian",
      "Keterlibatan manusia dalam komputasi berbasis pikiran", 
      "Pengembangan kecerdasan buatan untuk menggantikan manusia dalam pekerjaan"
    ],
    correct: "Koneksi perangkat elektronik ke internet untuk berbagi data dan kontrol",
  },

  {
    id: "6",
    question: "Apa yang dimaksud dengan kecerdasan buatan (Artificial Intelligence/AI) dan perannya dalam Informatika untuk masa depan?",
    options: [
      "Manusia yang telah diubah secara genetik untuk memiliki kemampuan super", 
      "Kombinasi antara biologi dan teknologi untuk menciptakan organisme baru", 
      "Pengembangan komputer dan sistem untuk melakukan tugas yang biasanya memerlukan kecerdasan manusia",
      "Penggunaan energi alternatif untuk menggerakkan perangkat elektronik", 
      "Pemanfaatan robot untuk menggantikan pekerja manusia secara keseluruhan"
    ],
    correct: "Pengembangan komputer dan sistem untuk melakukan tugas yang biasanya memerlukan kecerdasan manusia",
  },

  {
    id: "7",
    question: "Apa yang dimaksud dengan komputasi kuantum dan bagaimana potensi penggunaannya dalam Informatika untuk masa depan?",
    options: [
      "Komputer yang memanfaatkan energi gelombang sebagai sumber daya", 
      "Pengembangan perangkat lunak yang berfokus pada memori dan emosi", 
      "Penggunaan partikel subatom untuk menghitung informasi dengan sangat cepat",
      "Pemanfaatan energi surya untuk mengoperasikan perangkat komputer", 
      "Penggunaan logika kabur dalam pemrosesan data untuk kecerdasan buatan"
    ],
    correct: "Penggunaan partikel subatom untuk menghitung informasi dengan sangat cepat",
  },

  {
    id: "8",
    question: "Apa manfaat yang didapat dari menyelesaikan gelar Master dalam bidang Informatika?",
    options: [
      "Kemampuan untuk memperoleh gaji yang lebih tinggi secara langsung", 
      "Koneksi dengan profesional dan mentor di industri", 
      "Keterampilan teknis yang diperdalam dan dipertajam",
      "Peluang untuk mempublikasikan penelitian dalam jurnal ilmiah", 
      "Semua jawaban di atas benar"
    ],
    correct: "Semua jawaban di atas benar",
  },

  {
    id: "9",
    question: "Apa peran utama seorang ilmuwan data dalam industri teknologi?",
    options: [
      "Menganalisis data untuk mendukung pengambilan keputusan bisnis", 
      "Mengembangkan perangkat lunak untuk keperluan perusahaan", 
      "Menjalankan tes keamanan sistem untuk menemukan kerentanan",
      "Membuat kampanye pemasaran digital yang efektif", 
      "Mengelola infrastruktur jaringan perusahaan"
    ],
    correct: "Menganalisis data untuk mendukung pengambilan keputusan bisnis",
  },

  

  
];

// Restart Quiz
restart.addEventListener("click", () => {
  if (restartAttempts < 1) {
    restartAttempts++;
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
  } else {
    alert("Anda telah mencapai batas maksimum restart. Harap lakukan otentikasi ulang.");
    authenticateNewPassword();
  }
});

// Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;
    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      quizDisplay(questionCount);
      count = 31;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

// Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

// Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

// Quiz Creation
function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[4]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

// Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question = document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}

// Initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 31;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

// When user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

// Hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

function authenticate() {
  let passwordAttempts = 5;
  const delayTime = 3000;
  let firstPasswordEntered = false;
  let secondPasswordEntered = false;
  const { first: firstPassword, second: secondPassword } = getRandomPasswordSet();

  while (passwordAttempts > 0) {
    if (!firstPasswordEntered) {
      const inputPassword = prompt("Masukkan kata sandi pertama:");

      if (inputPassword === firstPassword) {
        firstPasswordEntered = true;
        alert("Kata sandi pertama benar. Masukkan kata sandi kedua.");
      } else {
        passwordAttempts--;
        alert("Kata sandi pertama salah. Sisa percobaan: " + passwordAttempts);

        if (passwordAttempts === 0) {
          alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
          setTimeout(authenticate, delayTime);
          return;
        }
      }
    } else if (!secondPasswordEntered) {
      const inputPassword = prompt("Masukkan kata sandi kedua:");

      if (inputPassword === secondPassword) {
        secondPasswordEntered = true;
        unlockWebsite();
        return;
      } else {
        passwordAttempts--;
        alert("Kata sandi kedua salah. Sisa percobaan: " + passwordAttempts);

        if (passwordAttempts === 0) {
          alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
          setTimeout(authenticate, delayTime);
          return;
        }
      }
    }
  }
}

function authenticateNewPassword() {
  let passwordAttempts = 3;
  const delayTime = 3000;
  let firstPasswordEntered = false;
  let secondPasswordEntered = false;
  let thirdPasswordEntered = false;

  const newPasswords = [
    { 
      first: "newPassword1", 
      second: "newPassword2", 
      third: "newPassword3" 
    },
    // Add more password sets as needed
  ];

  const { first: firstPassword, second: secondPassword, third: thirdPassword } = newPasswords[0];

  while (passwordAttempts > 0) {
    if (!firstPasswordEntered) {
      const inputPassword = prompt("Masukkan kata sandi baru pertama:");

      if (inputPassword === firstPassword) {
        firstPasswordEntered = true;
        alert("Kata sandi pertama benar. Masukkan kata sandi kedua.");
      } else {
        passwordAttempts--;
        alert("Kata sandi pertama salah. Sisa percobaan: " + passwordAttempts);

        if (passwordAttempts === 0) {
          alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
          setTimeout(authenticateNewPassword, delayTime);
          return;
        }
      }
    } else if (!secondPasswordEntered) {
      const inputPassword = prompt("Masukkan kata sandi baru kedua:");

      if (inputPassword === secondPassword) {
        secondPasswordEntered = true;
        alert("Kata sandi kedua benar. Masukkan kata sandi ketiga.");
      } else {
        passwordAttempts--;
        alert("Kata sandi kedua salah. Sisa percobaan: " + passwordAttempts);

        if (passwordAttempts === 0) {
          alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
          setTimeout(authenticateNewPassword, delayTime);
          return;
        }
      }
    } else if (!thirdPasswordEntered) {
      const inputPassword = prompt("Masukkan kata sandi baru ketiga:");

      if (inputPassword === thirdPassword) {
        thirdPasswordEntered = true;
        unlockWebsite();
        return;
      } else {
        passwordAttempts--;
        alert("Kata sandi ketiga salah. Sisa percobaan: " + passwordAttempts);

        if (passwordAttempts === 0) {
          alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
          setTimeout(authenticateNewPassword, delayTime);
          return;
        }
      }
    }
  }
}

function unlockWebsite() {
  document.body.classList.remove("locked");
  restartAttempts = 0;
}

document.addEventListener("DOMContentLoaded", function() {
  authenticate();
});
