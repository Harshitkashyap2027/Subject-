// School App — demo data & helpers

const SchoolApp = {
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  },

  demo: {
    students: [
      { id:'s1', name:'Riya Sharma',   class:'10A', roll:1,  avatar:'👩‍🎓', attendance:92, avg:78, rank:12, fees:'Paid' },
      { id:'s2', name:'Arjun Patel',   class:'10A', roll:2,  avatar:'👨‍🎓', attendance:88, avg:74, rank:18, fees:'Pending' },
      { id:'s3', name:'Priya Singh',   class:'9B',  roll:5,  avatar:'👩‍🎓', attendance:95, avg:85, rank:4,  fees:'Paid' },
      { id:'s4', name:'Rahul Gupta',   class:'9A',  roll:8,  avatar:'👨‍🎓', attendance:79, avg:68, rank:22, fees:'Partial' },
      { id:'s5', name:'Meera Joshi',   class:'8B',  roll:3,  avatar:'👩‍🎓', attendance:97, avg:91, rank:2,  fees:'Paid' }
    ],
    teachers: [
      { id:'t1', name:'Mr. Rajesh Kumar',  subject:'Mathematics',      avatar:'👨‍🏫', classes:['9A','9B','10A','10B'], students:120 },
      { id:'t2', name:'Ms. Priya Verma',   subject:'Science',          avatar:'👩‍🏫', classes:['8A','8B','9A'],        students:90  },
      { id:'t3', name:'Mr. Amit Singh',    subject:'English',          avatar:'👨‍🏫', classes:['8A','9B','10A'],       students:100 },
      { id:'t4', name:'Ms. Sunita Rao',    subject:'History',          avatar:'👩‍🏫', classes:['9A','10A','10B'],      students:95  },
      { id:'t5', name:'Mr. Vikram Nair',   subject:'Computer Science', avatar:'👨‍🏫', classes:['8B','9A','10A'],       students:85  },
      { id:'t6', name:'Ms. Anjali Sharma', subject:'Geography',        avatar:'👩‍🏫', classes:['8A','8B','9B'],        students:80  }
    ],
    subjects: [
      { id:'sub1', name:'Mathematics',      icon:'📐', teacher:'Mr. Rajesh Kumar',  grade:'A',  score:88, color:'math'    },
      { id:'sub2', name:'Science',          icon:'🔬', teacher:'Ms. Priya Verma',   grade:'B+', score:79, color:'science' },
      { id:'sub3', name:'English',          icon:'📖', teacher:'Mr. Amit Singh',    grade:'A-', score:83, color:'english' },
      { id:'sub4', name:'History',          icon:'🏛️', teacher:'Ms. Sunita Rao',    grade:'B',  score:74, color:'history' },
      { id:'sub5', name:'Geography',        icon:'🌍', teacher:'Ms. Anjali Sharma', grade:'A',  score:86, color:'geo'     },
      { id:'sub6', name:'Computer Science', icon:'💻', teacher:'Mr. Vikram Nair',   grade:'A+', score:95, color:'cs'      }
    ],
    classes: ['8A','8B','9A','9B','10A','10B'],
    assignments: [
      { id:'a1', subject:'Mathematics',      title:'Quadratic Equations Practice Set',  due:'2024-01-20', status:'Pending',   marks:null },
      { id:'a2', subject:'Science',          title:'Cell Division Diagram',              due:'2024-01-18', status:'Submitted', marks:18   },
      { id:'a3', subject:'English',          title:'Essay: My Role Model',               due:'2024-01-15', status:'Graded',    marks:22   },
      { id:'a4', subject:'Computer Science', title:'Python Calculator Program',          due:'2024-01-22', status:'Pending',   marks:null },
      { id:'a5', subject:'History',          title:'Ancient Civilizations Summary',      due:'2024-01-14', status:'Graded',    marks:19   },
      { id:'a6', subject:'Geography',        title:'Map Activity — River Systems',       due:'2024-01-25', status:'Pending',   marks:null }
    ],
    timetable: {
      Monday:    ['Mathematics','Science','English','—','History','Geography'],
      Tuesday:   ['Computer Science','Mathematics','—','Science','English','History'],
      Wednesday: ['Science','Geography','Mathematics','English','—','Computer Science'],
      Thursday:  ['History','English','Science','Mathematics','Geography','—'],
      Friday:    ['Mathematics','Computer Science','History','Geography','Science','English'],
      Saturday:  ['Geography','—','English','Computer Science','Mathematics','Science']
    },
    announcements: [
      { id:'an1', title:'Annual Sports Day',        date:'2024-01-25', body:'Annual Sports Day will be held on 25th Jan. All students must participate in at least one event.',    type:'event'   },
      { id:'an2', title:'Mid-Term Exam Schedule',   date:'2024-01-18', body:'Mid-Term examinations will begin from 5th February. Detailed timetable posted on the notice board.',  type:'exam'    },
      { id:'an3', title:'Fee Payment Reminder',     date:'2024-01-15', body:'Q3 fees are due by 31st January. Late payment attracts a fine of ₹500.',                              type:'fee'     },
      { id:'an4', title:'Parent-Teacher Meeting',   date:'2024-01-12', body:'PTM scheduled for 28th January, 10 AM – 2 PM. Parents are requested to attend.',                     type:'meeting' }
    ],
    results: [
      { subject:'Mathematics',      mid1:82, mid2:88, final:85, grade:'A'  },
      { subject:'Science',          mid1:74, mid2:79, final:77, grade:'B+' },
      { subject:'English',          mid1:80, mid2:83, final:81, grade:'A-' },
      { subject:'History',          mid1:70, mid2:74, final:72, grade:'B'  },
      { subject:'Geography',        mid1:84, mid2:86, final:85, grade:'A'  },
      { subject:'Computer Science', mid1:92, mid2:95, final:94, grade:'A+' }
    ],
    fees: [
      { term:'Q1 (Apr–Jun)', amount:12500, status:'Paid',    date:'2023-04-05' },
      { term:'Q2 (Jul–Sep)', amount:12500, status:'Paid',    date:'2023-07-08' },
      { term:'Q3 (Oct–Dec)', amount:12500, status:'Paid',    date:'2023-10-03' },
      { term:'Q4 (Jan–Mar)', amount:12500, status:'Pending', date:null         }
    ]
  },

  // Helpers
  formatDate(d) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
  },
  gradeColor(g) {
    if (!g) return '';
    if (g.startsWith('A')) return '#22c55e';
    if (g.startsWith('B')) return '#3b82f6';
    if (g.startsWith('C')) return '#f59e0b';
    return '#ef4444';
  },
  subjectClass(name) {
    const map = { Mathematics:'math', Science:'science', English:'english', History:'history', Geography:'geo', 'Computer Science':'cs' };
    return map[name] || '';
  },
  statusBadge(status) {
    const map = { Pending:'warning', Submitted:'info', Graded:'success', Paid:'success', Partial:'warning', Overdue:'error' };
    return `<span class="badge badge-${map[status]||'info'}">${status}</span>`;
  },

  init() {
    // Mobile sidebar toggle
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    if (toggle && sidebar) {
      toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
    // Logout buttons
    document.querySelectorAll('.logout-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        showConfirm('Logout', 'Are you sure you want to logout?', () => {
          showToast('Logged out successfully', 'info');
          setTimeout(() => { window.location.href = '../index.html'; }, 1200);
        });
      });
    });
    // Animate cards in
    document.querySelectorAll('.stat-card, .card, .subject-card, .achievement-card').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 60 + i * 60);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => SchoolApp.init());
