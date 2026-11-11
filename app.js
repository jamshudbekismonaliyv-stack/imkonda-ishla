/**
 * IMKON PLATFORMASI — Ultra-modern On-Demand Helper & Gig Portal
 * Doska konsepsiyasi:
 * 1. Yordamchi: tozalaydi, necha soat ishlashi aniqlanadi
 * 2. Ish haqi: bir kunda 150 ming gacha to'lanadi
 * 3. Qayerga borish: Farg'ona viloyati ichida
 */

// 1. DATA STORE
const IMKON_DB = {
  // Real-time active orders (Ishlar / Buyurtmalar)
  tasks: [
    {
      id: 'task-1',
      title: 'Kvartira va derazalarni tozalashga yordamchi',
      category: 'tozalash',
      categoryIcon: '🧹',
      categoryName: 'Uylarni tozalash',
      employer: 'Dilnoza opa (Xonadon egasi)',
      phone: '+998 90 555-12-34',
      telegram: 'dilnoza_fargona',
      city: 'Farg‘ona',
      locationName: 'Farg‘ona sh., Sayilgoh ko‘chasi (Viloyat teatri yaqini)',
      hours: 5,
      hoursText: '5 soat (13:00 dan 18:00 gacha)',
      wage: 150000,
      wageText: '150 000 so‘m',
      payMethod: 'Ish yakunida naqd yoki kartaga',
      taskDuty: '4 xonali kvartiraning pollarini yuvish, deraza oynalarini tozalash va changlarni artish.',
      urgency: 'Bugun zudlik bilan',
      postedTime: '8 daqiqa oldin',
      isHot: true
    },
    {
      id: 'task-2',
      title: 'Hovlini xazondan tozalash va daraxtlarni oqlash',
      category: 'hovli',
      categoryIcon: '🏡',
      categoryName: 'Hovli & Bog‘',
      employer: 'Mansurbek aka',
      phone: '+998 91 120-33-44',
      telegram: 'mansur_aka',
      city: 'Marg‘ilon',
      locationName: 'Marg‘ilon sh., Yangi bozor yaqini, Mustaqillik MFY',
      hours: 6,
      hoursText: '6 soat (09:00 dan 15:00 gacha)',
      wage: 140000,
      wageText: '140 000 so‘m',
      payMethod: 'Naqd pulda, qo‘lga',
      taskDuty: 'Katta hovlidagi barglarni yig‘ish, ariqlarni tozalash va daraxt tanalarini ohak bilan oqlash.',
      urgency: 'Ertaga ertalab',
      postedTime: '20 daqiqa oldin',
      isHot: false
    },
    {
      id: 'task-3',
      title: 'Do‘konga mahsulot qutilarini tushirish va taxlash',
      category: 'yuk',
      categoryIcon: '📦',
      categoryName: 'Do‘kon & Yuk',
      employer: '«Baraka» ulgurji savdo do‘koni',
      phone: '+998 93 456-78-90',
      telegram: 'baraka_savdo',
      city: 'Qo‘qon',
      locationName: 'Qo‘qon sh., Temiryo‘l vokzali ro‘parasida',
      hours: 4,
      hoursText: '4 soat (14:00 dan 18:00 gacha)',
      wage: 120000,
      wageText: '120 000 so‘m',
      payMethod: 'Karta yoki naqd',
      taskDuty: 'Kelgan yengil maishiy mahsulotlar qutilarini mashinadan tushirish va javonlarga terib qo‘yish.',
      urgency: 'Hozir kerak',
      postedTime: '35 daqiqa oldin',
      isHot: true
    },
    {
      id: 'task-4',
      title: 'To‘yxona oshxonasida idish yuvish va ko‘maklashish',
      category: 'oshxona',
      categoryIcon: '🍽️',
      categoryName: 'Oshxona & Idish',
      employer: '«Yulduz» to‘yxonasi ma’muriyati',
      phone: '+998 73 244-99-00',
      telegram: 'yulduz_restoran',
      city: 'Farg‘ona',
      locationName: 'Farg‘ona sh., Al-Farg‘oniy ko‘chasi, 88-bino',
      hours: 8,
      hoursText: '8 soat (11:00 dan 19:00 gacha)',
      wage: 150000,
      wageText: '150 000 so‘m',
      payMethod: 'Soat 19:00 da naqd to‘lanadi',
      taskDuty: 'Idish-tovoqlarni tozalash, oshxona jihozlarini yuvish, 2 mahal bepul issiq ovqat taqdim etiladi.',
      urgency: 'Bugun',
      postedTime: '1 soat oldin',
      isHot: false
    },
    {
      id: 'task-5',
      title: 'Usta yordamchisi (Kvartira gipsokarton va remont)',
      category: 'usta',
      categoryIcon: '🔨',
      categoryName: 'Usta yordamchisi',
      employer: 'Akmal usta',
      phone: '+998 90 777-66-55',
      telegram: 'akmal_remont',
      city: 'Rishton',
      locationName: 'Rishton tumani markazi, Chinorlar MFY',
      hours: 7,
      hoursText: '7 soat (08:30 dan 16:30 gacha)',
      wage: 150000,
      wageText: '150 000 so‘m',
      payMethod: 'Naqd pulda',
      taskDuty: 'Qurilish qorishmalarini aralashtirish, asboblarni uzatib turish va qurilish chiqindilarini chiqarish.',
      urgency: 'Ertaga',
      postedTime: '2 soat oldin',
      isHot: false
    },
    {
      id: 'task-6',
      title: 'Mebel sexida qadoqlash va ortish ishlari',
      category: 'yuk',
      categoryIcon: '📦',
      categoryName: 'Do‘kon & Yuk',
      employer: '«Quvasoy Mebel Sifat»',
      phone: '+998 91 888-22-11',
      telegram: 'quvasoy_mebel',
      city: 'Quvasoy',
      locationName: 'Quvasoy sh., Sanoatchilar hududi',
      hours: 6,
      hoursText: '6 soat (13:00 dan 19:00 gacha)',
      wage: 150000,
      wageText: '150 000 so‘m',
      payMethod: 'Kun oxirida darhol',
      taskDuty: 'Mebellarni plyonka bilan qadoqlash va yuk mashinasiga joylashtirish.',
      urgency: 'Bugun',
      postedTime: '3 soat oldin',
      isHot: false
    }
  ],

  // Verified Helpers (Yordamchilar katalogi)
  helpers: [
    {
      id: 'hlp-1',
      name: 'Nodiraxon Karimova',
      role: 'Tozalash mutaxassisi (Cleaning)',
      badge: 'TOP Yordamchi',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&q=80',
      city: 'Farg‘ona',
      district: 'Farg‘ona shahar (Markaz, Kirguli)',
      rating: '5.0',
      reviewsCount: 38,
      hoursPerDay: '4 - 8 soat',
      dailyWage: '150 000 so‘mgacha',
      phone: '+998 90 123-45-01',
      telegram: 'nodira_cleaning',
      specialties: ['Uylarni tozalash', 'Deraza yuvish', 'Chang artish', 'Dazmollash'],
      bio: 'Farg‘ona shahrida 3 yildan beri xonadon va ofislarni sarishta tozalayman. Ishimni sidqidildan, tez va toza bajaraman.',
      isOnline: true
    },
    {
      id: 'hlp-2',
      name: 'Bahodir Yusupov',
      role: 'Hovli, bog‘ va yuk yordamchisi',
      badge: 'Chaqqon & Ishonchli',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&q=80',
      city: 'Marg‘ilon',
      district: 'Marg‘ilon va Farg‘ona bo‘yicha',
      rating: '4.95',
      reviewsCount: 42,
      hoursPerDay: '5 - 8 soat',
      dailyWage: '140 000 - 150 000 so‘m',
      phone: '+998 91 345-67-02',
      telegram: 'bahodir_yordam',
      specialties: ['Hovli tozalash', 'Yuk tashish', 'Daraxt oqlash', 'Remont ko‘magi'],
      bio: 'Marg‘ilon va Farg‘ona hududlarida chaqiriq bo‘yicha har qanday jismoniy yordam, hovli tartibga keltirish ishlariga boraman.',
      isOnline: true
    },
    {
      id: 'hlp-3',
      name: 'Gulnoza Mamajonova',
      role: 'Oshxona va to‘yxona yordamchisi',
      badge: 'Tajribali',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&q=80',
      city: 'Qo‘qon',
      district: 'Qo‘qon shahar bo‘yicha',
      rating: '4.9',
      reviewsCount: 29,
      hoursPerDay: '4 - 8 soat',
      dailyWage: '130 000 - 150 000 so‘m',
      phone: '+998 93 890-12-03',
      telegram: 'gulnoza_oshxona',
      specialties: ['Idish yuvish', 'Sabzavot tozalash', 'Restoran xizmati'],
      bio: 'To‘y va marosimlarda, kafelarda oshxona tozaligi va oshpazga yordamchilik qilish bo‘yicha katta tajribam bor.',
      isOnline: true
    },
    {
      id: 'hlp-4',
      name: 'Sherzodbek Oripov',
      role: 'Usta yordamchisi va duradgorlik',
      badge: 'Usta shogird',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80',
      city: 'Rishton',
      district: 'Rishton va Bag‘dod tumanlari',
      rating: '4.85',
      reviewsCount: 19,
      hoursPerDay: '6 - 8 soat',
      dailyWage: '150 000 so‘m',
      phone: '+998 90 444-11-22',
      telegram: 'sherzod_usta',
      specialties: ['Qurilish yordami', 'Bo‘yoq ishlari', 'G‘isht terishda yordam'],
      bio: 'Qurilish va ta’mirlashda ustalar bilan birga ishlayman. Mehnatsevarman, belgilangan vaqtda yetib boraman.',
      isOnline: false
    }
  ],

  // Practical guides (Qo'llanmalar)
  guides: [
    {
      id: 'guide-1',
      title: 'Uylarni tozalash (Cleaning) bo‘yicha eng muhim 5 ta sir',
      tag: 'Professional Tozalik',
      icon: '✨',
      readTime: '3 daqiqa',
      summary: 'Derazalarda iz qoldirmasdan yuvish, oshxona yog‘ dog‘larini oson ketkazish va zamonaviy tozalash vositalaridan to‘g‘ri foydalanish.',
      content: '1. Har doim yuqoridan pastga qarab tozalang.\n2. Mikrofibra matolardan foydalaning.\n3. Oyna va kafel uchun maxsus vositalarni to‘g‘ri aralashtiring.'
    },
    {
      id: 'guide-2',
      title: 'Ish beruvchi bilan muloqot va mehnat xavfsizligi',
      tag: 'Odob va Xavfsizlik',
      icon: '🤝',
      readTime: '2 daqiqa',
      summary: 'Birinchi qo‘ng‘iroqda qanday kelishish, manzilni aniqlashtirish va ish jarayonida xavfsizlikka rioya qilish qoidalari.',
      content: 'Ish boshlashdan oldin bajariladigan vazifalar doirasini, ish soatini (masalan 4 soat) va 150 000 so‘mgacha bo‘lgan haqni aniq tasdiqlang.'
    },
    {
      id: 'guide-3',
      title: 'Usta yordamchisi bo‘lish: Qurilish asboblari bilan ishlash',
      tag: 'Amaliy Hunar',
      icon: '🛠️',
      readTime: '4 daqiqa',
      summary: 'Perforator, drell va qurilish uskunalarini to‘g‘ri ushlash, ustaning vazifalarini tez ilg‘ab olish va qo‘shimcha daromad olish.',
      content: 'Usta ko‘rsatmalarini diqqat bilan eshiting, xavfsizlik ko‘zoynagi va qo‘lqop kiyishni unutmang.'
    }
  ]
};

// 2. STATE CONTROLLER
class ImkonController {
  constructor() {
    this.currentMode = 'order'; // 'order' (Menga yordamchi kerak) or 'worker' (Men ishlayman)
    this.selectedCategory = 'tozalash';
    this.selectedHours = 5;
    this.calculatedWage = 150000;
    this.selectedCity = 'Farg‘ona';
    this.filterCity = 'all';
    this.filterCategory = 'all';
    this.savedIds = JSON.parse(localStorage.getItem('imkon_v2_saved')) || ['task-1', 'task-2'];
    this.myCalls = JSON.parse(localStorage.getItem('imkon_v2_calls')) || [];
    this.user = {
      name: 'Sherzodbek',
      phone: '+998 90 765-43-21',
      role: 'Yordamchi / Buyurtmachi'
    };
  }

  save() {
    localStorage.setItem('imkon_v2_saved', JSON.stringify(this.savedIds));
    localStorage.setItem('imkon_v2_calls', JSON.stringify(this.myCalls));
  }

  toggleSave(id) {
    if (this.savedIds.includes(id)) {
      this.savedIds = this.savedIds.filter(item => item !== id);
      showToast('Saqlanganlardan chiqarildi', 'info');
    } else {
      this.savedIds.push(id);
      showToast('E’lon saqlab qo‘yildi!', 'success');
    }
    this.save();
    this.updateCounters();
    this.renderSavedList();
  }

  updateCounters() {
    document.querySelectorAll('.saved-count-pill').forEach(el => {
      el.textContent = this.savedIds.length;
      el.classList.toggle('hidden', this.savedIds.length === 0);
    });
  }

  calculateWageFromHours(hours) {
    // Whiteboard logic: Bir kunda 150 ming gacha
    // 2-3 soat: 60,000 - 80,000 so'm
    // 4-5 soat: 100,000 - 130,000 so'm
    // 6-8 soat: 140,000 - 150,000 so'm (max 150k)
    let wage = Math.min(150000, Math.round((hours / 8) * 150000 / 10000) * 10000);
    if (wage < 50000) wage = 50000;
    return wage;
  }
}

const appState = new ImkonController();

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setupModeSwitcher();
  setupInteractiveCalculator();
  setupFilterControls();
  renderTaskFeed();
  renderHelpersGrid();
  renderGuidesGrid();
  appState.updateCounters();
  setupModals();
});

// Toast Helper
function showToast(text, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600 text-white' : (type === 'info' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white');
  toast.className = `toast px-5 py-3.5 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2.5 ${bg}`;
  toast.innerHTML = `
    <span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-black text-[11px]">✓</span>
    <span>${text}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// 4. TOP DUAL MODE SWITCHER (Mijoz vs Yordamchi)
function setupModeSwitcher() {
  const btnOrder = document.getElementById('mode-btn-order');
  const btnWorker = document.getElementById('mode-btn-worker');
  const sectionOrder = document.getElementById('section-order-view');
  const sectionWorker = document.getElementById('section-worker-view');

  if (btnOrder && btnWorker) {
    btnOrder.addEventListener('click', () => {
      appState.currentMode = 'order';
      btnOrder.className = 'flex-1 py-3 px-5 rounded-2xl font-black text-xs sm:text-sm bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2';
      btnWorker.className = 'flex-1 py-3 px-5 rounded-2xl font-bold text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center gap-2';
      
      sectionOrder.classList.remove('hidden');
      sectionWorker.classList.add('hidden');
    });

    btnWorker.addEventListener('click', () => {
      appState.currentMode = 'worker';
      btnWorker.className = 'flex-1 py-3 px-5 rounded-2xl font-black text-xs sm:text-sm bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2';
      btnOrder.className = 'flex-1 py-3 px-5 rounded-2xl font-bold text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center gap-2';
      
      sectionOrder.classList.add('hidden');
      sectionWorker.classList.remove('hidden');
      renderTaskFeed();
    });
  }
}

// 5. INTERACTIVE DOSKA CALCULATOR ("Tezkor Yordamchi Chaqirish")
function setupInteractiveCalculator() {
  // Service category selection
  const serviceCards = document.querySelectorAll('.service-card-select');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      appState.selectedCategory = card.getAttribute('data-category');
      updateCalculatorPreview();
    });
  });

  // Hours buttons
  const hourBtns = document.querySelectorAll('.hour-btn-select');
  hourBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      hourBtns.forEach(b => {
        b.className = 'hour-btn-select px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all';
      });
      btn.className = 'hour-btn-select px-3.5 py-2 rounded-xl text-xs font-black bg-emerald-600 text-white shadow-sm transition-all';
      
      const hrs = parseInt(btn.getAttribute('data-hours'), 10);
      appState.selectedHours = hrs;
      appState.calculatedWage = appState.calculateWageFromHours(hrs);
      updateCalculatorPreview();
    });
  });

  // City dropdown
  const citySelect = document.getElementById('calc-city-select');
  if (citySelect) {
    citySelect.addEventListener('change', (e) => {
      appState.selectedCity = e.target.value;
      updateCalculatorPreview();
    });
  }

  // Find Helper Trigger Button
  const submitBtn = document.getElementById('calc-submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      openDirectOrderModal();
    });
  }
}

function updateCalculatorPreview() {
  const wageDisplay = document.getElementById('calc-wage-display');
  const hoursDisplay = document.getElementById('calc-hours-display');
  const wageDesc = document.getElementById('calc-wage-desc');

  if (wageDisplay) {
    wageDisplay.textContent = `${appState.calculatedWage.toLocaleString('uz-UZ')} so‘m`;
  }
  if (hoursDisplay) {
    hoursDisplay.textContent = `${appState.selectedHours} soat`;
  }
  if (wageDesc) {
    wageDesc.textContent = appState.selectedHours >= 7 
      ? 'To‘liq 1 kunlik ish haqi (Maksimal 150 ming gacha)' 
      : `${appState.selectedHours} soatlik hisoblangan adolatli haq`;
  }
}

// 6. RENDER TASK FEED (FOR WORKERS / YORDAMCHILAR)
function renderTaskFeed() {
  const container = document.getElementById('tasks-feed-container');
  if (!container) return;

  let list = IMKON_DB.tasks.filter(t => {
    const matchesCity = appState.filterCity === 'all' || t.city === appState.filterCity;
    const matchesCategory = appState.filterCategory === 'all' || t.category === appState.filterCategory;
    return matchesCity && matchesCategory;
  });

  const countBadge = document.getElementById('task-count-text');
  if (countBadge) {
    countBadge.textContent = `${list.length} ta faol buyurtma mavjud`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-3xl p-10 text-center border border-slate-100">
        <p class="text-3xl mb-2">🔍</p>
        <p class="text-sm font-black text-slate-800">Ushbu parametr bo‘yicha hozircha buyurtma yo‘q</p>
        <button onclick="resetWorkerFilters()" class="mt-3 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold">Barcha hududlarni ko‘rish</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(t => `
    <div class="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs task-card flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
      
      <div class="space-y-3 flex-grow">
        <!-- Top Tags -->
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 rounded-full text-[11px] font-black bg-emerald-50 text-emerald-800 border border-emerald-200">
            ${t.categoryIcon} ${t.categoryName}
          </span>
          <span class="px-3 py-1 rounded-full text-[11px] font-black bg-indigo-50 text-indigo-700 border border-indigo-100">
            ⏱️ ${t.hoursText}
          </span>
          ${t.isHot ? '<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-rose-50 text-rose-600 border border-rose-200 animate-pulse">🔥 Shoshilinch</span>' : ''}
          <span class="text-[11px] text-slate-400 font-medium ml-auto sm:ml-0">${t.postedTime}</span>
        </div>

        <div>
          <h3 class="text-base sm:text-lg font-black text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer" onclick="openTaskDetails('${t.id}')">
            ${t.title}
          </h3>
          <p class="text-xs text-slate-500 mt-1">👤 <strong>Buyurtmachi:</strong> ${t.employer}</p>
        </div>

        <!-- 3 Doska Ustuni: Vazifasi, Ish vaqti, Manzil -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
          <div>
            <span class="text-[10px] font-bold uppercase text-slate-400 block">Vazifasi:</span>
            <span class="font-bold text-slate-800 leading-tight">${t.taskDuty}</span>
          </div>
          <div>
            <span class="text-[10px] font-bold uppercase text-slate-400 block">Ish vaqti:</span>
            <span class="font-extrabold text-indigo-600">⏱️ ${t.hours} soat davomida</span>
          </div>
          <div>
            <span class="text-[10px] font-bold uppercase text-slate-400 block">Qayerga borish:</span>
            <span class="font-bold text-slate-800">📍 ${t.locationName}</span>
          </div>
        </div>
      </div>

      <!-- Price & Action Call -->
      <div class="flex items-center sm:flex-col justify-between sm:justify-center items-end gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
        <div class="text-left sm:text-right">
          <span class="text-[10px] font-bold uppercase text-slate-400 block">Kunlik ish haqi:</span>
          <span class="text-xl sm:text-2xl font-black text-emerald-600">${t.wageText}</span>
          <span class="text-[10px] text-slate-400 block">${t.payMethod}</span>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="appState.toggleSave('${t.id}')" class="p-3 rounded-2xl border border-slate-200 text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all" title="Saqlash">
            <svg class="w-5 h-5 ${appState.savedIds.includes(t.id) ? 'fill-rose-500 text-rose-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
          
          <a href="tel:${t.phone}" onclick="recordCall('${t.employer}', '${t.title}', '${t.phone}')" class="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2">
            <span>📞 Qo‘ng‘iroq qilish</span>
          </a>
        </div>
      </div>

    </div>
  `).join('');
}

// 7. RENDER HELPERS DIRECTORY
function renderHelpersGrid() {
  const container = document.getElementById('helpers-grid-container');
  if (!container) return;

  container.innerHTML = IMKON_DB.helpers.map(h => `
    <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-start justify-between gap-3 mb-4">
          <div class="flex items-center gap-3">
            <div class="relative">
              <img src="${h.avatar}" alt="${h.name}" class="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-100 shadow-xs">
              ${h.isOnline ? '<span class="live-badge absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white" title="Hozir bo‘sh va onlayn"></span>' : ''}
            </div>
            <div>
              <h3 class="text-sm font-black text-slate-900">${h.name}</h3>
              <p class="text-xs font-bold text-emerald-700">${h.role}</p>
              <div class="flex items-center gap-1 text-[11px] text-amber-500 font-bold mt-0.5">
                <span>★ ${h.rating}</span>
                <span class="text-slate-400">(${h.reviewsCount} xonadon)</span>
              </div>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-50 text-emerald-800 border border-emerald-100 shrink-0">
            ${h.badge}
          </span>
        </div>

        <!-- 3 Doska Parametri: Vazifa, Vaqt, Hudud -->
        <div class="space-y-2 mb-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs">
          <div class="flex items-start gap-1.5">
            <span class="text-slate-400 font-bold shrink-0">📍 Hududi:</span>
            <span class="font-bold text-slate-800">${h.district}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-slate-400 font-bold shrink-0">⏱️ Ish vaqti:</span>
            <span class="font-extrabold text-indigo-600">${h.hoursPerDay}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-slate-400 font-bold shrink-0">💰 Ish haqi:</span>
            <span class="font-black text-emerald-600">${h.dailyWage}</span>
          </div>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">${h.bio}</p>

        <!-- Ko'nikmalar -->
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${h.specialties.map(s => `<span class="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-lg">${s}</span>`).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <a href="https://t.me/${h.telegram}" target="_blank" class="px-3.5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5">
          <span>✈️ Telegram</span>
        </a>
        <a href="tel:${h.phone}" onclick="recordCall('${h.name}', '${h.role}', '${h.phone}')" class="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black text-center transition-all shadow-md shadow-emerald-600/20">
          📞 Chaqirish (${h.phone.slice(-8)})
        </a>
      </div>
    </div>
  `).join('');
}

// 8. RENDER PRACTICAL GUIDES (TA'LIM)
function renderGuidesGrid() {
  const container = document.getElementById('guides-grid-container');
  if (!container) return;

  container.innerHTML = IMKON_DB.guides.map(g => `
    <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-3 py-1 rounded-full text-[10px] font-black bg-indigo-50 text-indigo-700 border border-indigo-100">${g.tag}</span>
          <span class="text-[11px] font-bold text-slate-400">⏱️ ${g.readTime}</span>
        </div>
        <div class="text-3xl mb-2">${g.icon}</div>
        <h3 class="text-base font-black text-slate-900 mb-2 leading-snug">${g.title}</h3>
        <p class="text-xs text-slate-600 leading-relaxed mb-5">${g.summary}</p>
      </div>

      <button onclick="openGuideModal('${g.id}')" class="w-full py-3 rounded-2xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-all">
        To‘liq o‘qish
      </button>
    </div>
  `).join('');
}

// 9. FILTERS FOR WORKERS FEED
function setupFilterControls() {
  // City filter
  document.querySelectorAll('[data-feed-city]').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.filterCity = btn.getAttribute('data-feed-city');
      document.querySelectorAll('[data-feed-city]').forEach(b => {
        b.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-600 hover:border-emerald-400 transition-all';
      });
      btn.className = 'px-4 py-2 rounded-xl text-xs font-black bg-emerald-600 text-white shadow-sm';
      renderTaskFeed();
    });
  });

  // Category filter
  document.querySelectorAll('[data-feed-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.filterCategory = btn.getAttribute('data-feed-cat');
      document.querySelectorAll('[data-feed-cat]').forEach(b => {
        b.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all';
      });
      btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black bg-slate-900 text-white';
      renderTaskFeed();
    });
  });
}

function resetWorkerFilters() {
  appState.filterCity = 'all';
  appState.filterCategory = 'all';
  renderTaskFeed();
}

// 10. MODALS & FORMS
function setupModals() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) modal.classList.add('hidden');
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.add('hidden');
    });
  });

  // Direct Order Form Submission
  const orderForm = document.getElementById('direct-order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const employerName = document.getElementById('order-employer-name').value;
      const employerPhone = document.getElementById('order-employer-phone').value;
      const addressDetail = document.getElementById('order-address-detail').value;

      const categoryLabels = {
        tozalash: 'Uylarni tozalash',
        hovli: 'Hovli & Bog‘',
        yuk: 'Do‘kon & Yuk',
        oshxona: 'Oshxona & Idish',
        usta: 'Usta yordamchisi'
      };

      const newTask = {
        id: 'task-' + Date.now(),
        title: `${categoryLabels[appState.selectedCategory] || 'Yordamchi ishi'} (${appState.selectedHours} soatlik)`,
        category: appState.selectedCategory,
        categoryIcon: '🧹',
        categoryName: categoryLabels[appState.selectedCategory] || 'Yordamchi',
        employer: employerName,
        phone: employerPhone,
        telegram: '',
        city: appState.selectedCity,
        locationName: `${appState.selectedCity} viloyati, ${addressDetail}`,
        hours: appState.selectedHours,
        hoursText: `${appState.selectedHours} soatlik ish`,
        wage: appState.calculatedWage,
        wageText: `${appState.calculatedWage.toLocaleString('uz-UZ')} so‘m`,
        payMethod: 'Kun oxirida darhol',
        taskDuty: `Xizmat turi: ${categoryLabels[appState.selectedCategory]}. ${addressDetail} manzilida.`,
        urgency: 'Zudlik bilan',
        postedTime: 'Hozirgina',
        isHot: true
      };

      IMKON_DB.tasks.unshift(newTask);
      document.getElementById('modal-direct-order').classList.add('hidden');
      showToast('Buyurtmangiz Farg‘onadagi yordamchilarga yetkazildi!', 'success');
      orderForm.reset();
      renderTaskFeed();
    });
  }
}

function openDirectOrderModal() {
  const modal = document.getElementById('modal-direct-order');
  if (!modal) return;

  const categoryLabels = {
    tozalash: '🧹 Uylarni tozalash (Xonadon, deraza, pol)',
    hovli: '🏡 Hovli & Bog‘ (Xazon tozalash, daraxt oqlash)',
    yuk: '📦 Do‘kon & Yuk (Tushirish, taxlash)',
    oshxona: '🍽️ Oshxona & Idish (Yuvish, tayyorgarlik)',
    usta: '🔨 Usta yordamchisi (Remont, gipsokarton)'
  };

  document.getElementById('order-modal-category').textContent = categoryLabels[appState.selectedCategory] || 'Tozalash';
  document.getElementById('order-modal-hours').textContent = `${appState.selectedHours} soat`;
  document.getElementById('order-modal-city').textContent = `${appState.selectedCity} viloyati ichida`;
  document.getElementById('order-modal-wage').textContent = `${appState.calculatedWage.toLocaleString('uz-UZ')} so‘m`;

  modal.classList.remove('hidden');
}

function recordCall(name, title, phone) {
  appState.myCalls.unshift({
    name,
    title,
    phone,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  appState.save();
  showToast(`${name} bilan bog‘lanilmoqda: ${phone}`, 'info');
}

function openTaskDetails(taskId) {
  const task = IMKON_DB.tasks.find(t => t.id === taskId);
  if (!task) return;

  const modal = document.getElementById('modal-task-detail');
  const body = document.getElementById('task-detail-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-800">${task.categoryIcon} ${task.categoryName}</span>
        <span class="px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700">⏱️ ${task.hoursText}</span>
      </div>
      <h3 class="text-xl font-black text-slate-900">${task.title}</h3>
      <p class="text-xs text-slate-500 mt-1">👤 Buyurtmachi: <strong>${task.employer}</strong></p>
    </div>

    <!-- 3 Doska Ustuni -->
    <div class="space-y-3 mb-6">
      <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
        <span class="text-[10px] font-black uppercase text-slate-400 block">1. Vazifasi (Nima ish qiladi):</span>
        <p class="text-sm font-bold text-slate-800 mt-1">${task.taskDuty}</p>
      </div>

      <div class="p-3.5 bg-indigo-50/70 rounded-2xl border border-indigo-100">
        <span class="text-[10px] font-black uppercase text-indigo-500 block">2. Necha soat ishlashi aniq:</span>
        <p class="text-sm font-black text-indigo-800 mt-1">⏱️ ${task.hoursText}</p>
      </div>

      <div class="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100">
        <span class="text-[10px] font-black uppercase text-emerald-600 block">3. Ish haqi (Bir kunda):</span>
        <p class="text-lg font-black text-emerald-700 mt-0.5">${task.wageText}</p>
        <span class="text-[11px] text-emerald-800 font-bold">${task.payMethod}</span>
      </div>

      <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
        <span class="text-[10px] font-black uppercase text-slate-400 block">4. Qayerga borish:</span>
        <p class="text-sm font-bold text-slate-800 mt-1">📍 ${task.locationName}</p>
      </div>
    </div>

    <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
      <button onclick="appState.toggleSave('${task.id}')" class="px-4 py-3 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700">
        ${appState.savedIds.includes(task.id) ? '❤️ Saqlangan' : '🤍 Saqlash'}
      </button>
      <a href="tel:${task.phone}" onclick="recordCall('${task.employer}', '${task.title}', '${task.phone}')" class="flex-1 py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black text-center shadow-lg shadow-emerald-600/20">
        📞 Qo‘ng‘iroq qilish (${task.phone})
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
}

function openGuideModal(guideId) {
  const guide = IMKON_DB.guides.find(g => g.id === guideId);
  if (!guide) return;

  const modal = document.getElementById('modal-task-detail');
  const body = document.getElementById('task-detail-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="mb-4">
      <span class="px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700">${guide.tag}</span>
      <h3 class="text-xl font-black text-slate-900 mt-2">${guide.title}</h3>
    </div>
    <div class="text-xs text-slate-600 leading-relaxed space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl">
      <p class="font-bold text-slate-800">${guide.summary}</p>
      <p class="whitespace-pre-line">${guide.content}</p>
    </div>
    <button data-close-modal onclick="document.getElementById('modal-task-detail').classList.add('hidden')" class="w-full py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold">
      Tushunarli, rahmat
    </button>
  `;

  modal.classList.remove('hidden');
}

// Global modal opener for custom job posting
function openCustomPostModal() {
  openDirectOrderModal();
}
