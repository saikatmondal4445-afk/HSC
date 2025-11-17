// ===== Global State =====
const tierPalette = {
  S: { background: 'rgba(255, 95, 206, 0.85)', border: 'rgba(255, 95, 206, 1)' },
  A: { background: 'rgba(124, 58, 237, 0.85)', border: 'rgba(124, 58, 237, 1)' },
  B: { background: 'rgba(34, 211, 238, 0.85)', border: 'rgba(14, 165, 233, 1)' }
};

let currentSubject = 'Higher Math';
let allSubjects = {};
let pieChart = null;
let barChart = null;

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', async () => {
  await loadSubjects();
  initializeNavigation();
  initializeEventListeners();
  renderSubject(currentSubject);
  hideLoadingScreen();
});

// ===== API Functions =====
async function loadSubjects() {
  try {
    const response = await fetch('/api/subjects');
    const result = await response.json();
    
    if (result.success) {
      allSubjects = result.data;
    } else {
      console.error('Failed to load subjects');
    }
  } catch (error) {
    console.error('Error fetching subjects:', error);
  }
}

// ===== Navigation =====
function initializeNavigation() {
  const navTabs = document.getElementById('navTabs');
  const navToggle = document.getElementById('navToggle');
  
  // Generate navigation tabs
  Object.keys(allSubjects).forEach(subjectName => {
    const subject = allSubjects[subjectName];
    const tab = document.createElement('div');
    tab.className = `nav-tab ${subjectName === currentSubject ? 'active' : ''}`;
    tab.innerHTML = `
      <span class="tab-icon">${subject.icon}</span>
      <span>${subjectName}</span>
    `;
    tab.addEventListener('click', () => switchSubject(subjectName));
    navTabs.appendChild(tab);
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navTabs.classList.toggle('active');
  });
}

function switchSubject(subjectName) {
  currentSubject = subjectName;
  
  // Update active tab
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.trim().includes(subjectName)) {
      tab.classList.add('active');
    }
  });

  // Close mobile menu
  document.getElementById('navTabs').classList.remove('active');
  
  // Render new subject
  renderSubject(subjectName);
  
  // Animate content
  animateContent();
}

// ===== Render Subject =====
function renderSubject(subjectName) {
  const subject = allSubjects[subjectName];
  if (!subject) return;

  // Update hero section
  document.getElementById('heroIcon').textContent = subject.icon;
  document.getElementById('heroTitle').textContent = subject.title;
  document.getElementById('totalCQ').textContent = subject.stats.totalCQ;
  document.getElementById('totalChapters').textContent = subject.stats.totalChapters;
  document.getElementById('studyHours').textContent = subject.stats.sTierHours;

  // Update statistics cards
  document.getElementById('statTotalChapters').textContent = subject.stats.totalChapters;
  document.getElementById('statSTier').textContent = subject.tiers.S.chapters.length;
  document.getElementById('statCQScore').textContent = subject.stats.totalCQ;
  document.getElementById('statHours').textContent = `${subject.stats.sTierHours}h`;

  // Render charts
  renderCharts(subject);

  // Render tiered chapters
  renderTieredChapters(subject);

  // Render study plan
  renderStudyPlan(subject);

  // Render checklist
  renderChecklist(subject);
}

// ===== Charts =====
function renderCharts(subject) {
  const tierData = {
    S: subject.tiers.S.chapters.length,
    A: subject.tiers.A.chapters.length,
    B: subject.tiers.B.chapters.length
  };

  // Pie Chart
  renderPieChart(tierData);

  // Bar Chart
  renderBarChart(subject);
}

function renderPieChart(tierData) {
  const ctx = document.getElementById('pieChart');
  
  if (pieChart) {
    pieChart.destroy();
  }

  pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['S-Tier 🔥', 'A-Tier ⭐', 'B-Tier ✅'],
      datasets: [{
        data: [tierData.S, tierData.A, tierData.B],
        backgroundColor: ['S', 'A', 'B'].map(tier => tierPalette[tier].background),
        borderColor: ['S', 'A', 'B'].map(tier => tierPalette[tier].border),
        borderWidth: 2,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#ffffff',
            font: {
              size: 13,
              family: 'Inter'
            },
            padding: 15
          }
        },
        tooltip: {
          backgroundColor: 'rgba(10, 14, 39, 0.95)',
          titleColor: '#ffffff',
          bodyColor: '#a0aec0',
          borderColor: 'rgba(99, 102, 241, 0.5)',
          borderWidth: 1,
          padding: 12,
          displayColors: true,
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value} chapters (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function renderBarChart(subject) {
  const ctx = document.getElementById('barChart');
  
  if (barChart) {
    barChart.destroy();
  }

  // Collect all chapters with their importance
  const allChapters = [];
  ['S', 'A', 'B'].forEach(tier => {
    subject.tiers[tier].chapters.forEach(chapter => {
      allChapters.push({
        name: `Ch ${chapter.num}: ${chapter.name}`,
        importance: chapter.importance,
        tier: tier
      });
    });
  });

  // Sort by chapter number
  allChapters.sort((a, b) => {
    const numA = parseInt(a.name.match(/\d+/)[0]);
    const numB = parseInt(b.name.match(/\d+/)[0]);
    return numA - numB;
  });

  const labels = allChapters.map(ch => ch.name);
  const data = allChapters.map(ch => ch.importance);
  const colors = allChapters.map(ch => tierPalette[ch.tier].background);
  const borderColors = allChapters.map(ch => tierPalette[ch.tier].border);

  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Importance Score',
        data: data,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(10, 14, 39, 0.95)',
          titleColor: '#ffffff',
          bodyColor: '#a0aec0',
          borderColor: 'rgba(99, 102, 241, 0.5)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              return `Importance: ${context.parsed.x}/100`;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)'
          },
          ticks: {
            color: '#a0aec0',
            font: {
              size: 11
            }
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            color: '#ffffff',
            font: {
              size: 11
            }
          }
        }
      }
    }
  });
}

// ===== Tiered Chapters =====
function renderTieredChapters(subject) {
  // Update tier titles
  document.getElementById('sTierTitle').textContent = subject.tiers.S.name;
  document.getElementById('aTierTitle').textContent = subject.tiers.A.name;
  document.getElementById('bTierTitle').textContent = subject.tiers.B.name;

  // Render S-Tier
  renderChapterTier('sTierChapters', subject.tiers.S.chapters, 'S');
  
  // Render A-Tier
  renderChapterTier('aTierChapters', subject.tiers.A.chapters, 'A');
  
  // Render B-Tier
  renderChapterTier('bTierChapters', subject.tiers.B.chapters, 'B');
}

function renderChapterTier(containerId, chapters, tier) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  chapters.forEach((chapter, index) => {
    const card = document.createElement('div');
    card.className = `chapter-card tier-${tier.toLowerCase()} card-animate`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    const importanceClass = chapter.importance >= 85 ? 'high' : 
                           chapter.importance >= 70 ? 'medium' : 'low';
    
    card.innerHTML = `
      <div class="chapter-header">
        <div class="chapter-num">${chapter.num}</div>
        <div class="importance-badge ${importanceClass}">
          ${chapter.importance >= 85 ? '🔥' : chapter.importance >= 70 ? '⭐' : '✅'}
          ${chapter.importance}%
        </div>
      </div>
      <div class="chapter-name">${chapter.name}</div>
      <div class="chapter-meta">
        <div class="meta-item">
          <span>📝</span>
          <span>CQ: ${chapter.cqRange}</span>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// ===== Study Plan =====
function renderStudyPlan(subject) {
  const container = document.getElementById('studyPlanList');
  container.innerHTML = '';

  const storageKey = `studyPlan_${currentSubject}`;
  const savedProgress = JSON.parse(localStorage.getItem(storageKey) || '{}');

  subject.studyPlan.forEach((chapterNum, index) => {
    // Find chapter details
    let chapterName = '';
    ['S', 'A', 'B'].forEach(tier => {
      const chapter = subject.tiers[tier].chapters.find(ch => ch.num === chapterNum);
      if (chapter) chapterName = chapter.name;
    });

    const item = document.createElement('div');
    item.className = `tracker-item ${savedProgress[chapterNum] ? 'completed' : ''}`;
    item.innerHTML = `
      <div class="tracker-checkbox"></div>
      <div class="item-number">Ch ${chapterNum}</div>
      <div class="item-text">${chapterName}</div>
    `;
    
    item.addEventListener('click', () => toggleStudyPlanItem(chapterNum, item));
    container.appendChild(item);
  });

  updateStudyProgress();
}

function toggleStudyPlanItem(chapterNum, element) {
  const storageKey = `studyPlan_${currentSubject}`;
  const savedProgress = JSON.parse(localStorage.getItem(storageKey) || '{}');
  
  if (savedProgress[chapterNum]) {
    delete savedProgress[chapterNum];
    element.classList.remove('completed');
  } else {
    savedProgress[chapterNum] = true;
    element.classList.add('completed');
  }
  
  localStorage.setItem(storageKey, JSON.stringify(savedProgress));
  updateStudyProgress();
}

function updateStudyProgress() {
  const subject = allSubjects[currentSubject];
  const storageKey = `studyPlan_${currentSubject}`;
  const savedProgress = JSON.parse(localStorage.getItem(storageKey) || '{}');
  
  const completed = Object.keys(savedProgress).length;
  const total = subject.studyPlan.length;
  const percentage = Math.round((completed / total) * 100);
  
  document.getElementById('progressFill').style.width = `${percentage}%`;
  document.getElementById('progressPercent').textContent = percentage;
}

// ===== Checklist =====
function renderChecklist(subject) {
  const container = document.getElementById('checklistItems');
  container.innerHTML = '';

  subject.checklist.forEach((item, index) => {
    const checklistItem = document.createElement('div');
    checklistItem.className = 'checklist-item';
    checklistItem.textContent = item;
    checklistItem.style.animationDelay = `${index * 0.05}s`;
    container.appendChild(checklistItem);
  });
}

// ===== Event Listeners =====
function initializeEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('checklistSearch');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.checklist-item');
    
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
}

// ===== Animations =====
function animateContent() {
  // Animate hero icon
  anime({
    targets: '.hero-icon',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutElastic(1, .8)'
  });

  // Animate stat cards
  anime({
    targets: '.stat-card',
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 600,
    easing: 'easeOutQuad'
  });

  // Animate chapter cards
  anime({
    targets: '.chapter-card',
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(50, {start: 200}),
    duration: 600,
    easing: 'easeOutQuad'
  });
}

function hideLoadingScreen() {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    animateContent();
  }, 500);
}

// ===== Utility Functions =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
