// ── COLLECTION DATA ──────────────────────────────────────
const collection = [
  {
    id: "001",
    title: "First Date in QC",
    date: "May 17, 2024",
    location: "Quezon City, Philippines",
    caption: "The first time we kissed.",
    img: "images/image2.jpg",
    story: `Our date in a coffee shop, the kind of place where time moves differently. We talked about everything — life, dreams, the small fears we had never shared with anyone else. Coffee cups sat between us, growing cold as the conversation deepened.

Hours passed. and i'm so nervous my mind is a jumble of thoughts and feelings. I wanted to kiss you, but I also wanted to respect the moment and not rush it. I didn't want to take something that felt so fragile and new without asking.

When the moment came, I asked first. "Will you be upset if I kiss you?" The simplicity of the question, the vulnerability of asking instead of taking, seemed to matter. You smiled and said no. And then I kissed you, there in that ordinary coffee shop that had become the most important place in the world.

We were happy. I find myself always watching you, always noticing the way the light catches your eyes. There is a particular kind of beauty in watching someone you love when they don't know you're looking — in that unguarded moment before you smile. I love everything about you. The way you laugh, the way you think, the way you make the ordinary feel extraordinary.`
  },
  {
    id: "002",
    title: "Photobooth",
    date: "January 7, 2024",
    location: "Manila, Philippines",
    caption: "Coffee and nowhere to be",
    img: "images/image8.jpg",
    story: ``
  },
  {
    id: "003",
    title: "Cafe I'm Here",
    date: "August 22, 2024",
    location: "Cafe I'm Here, Quezon City, Philippines",
    caption: "The clouds came and we stayed anyway",
    img: "images/image4.jpg",
    story: ``
  },
  {
    id: "004",
    title: "The Quiet Afternoon",
    date: "October 3, 2024",
    location: "QC, Philippines",
    caption: "Coffee and nowhere to be",
    img: "images/meandher.jpg",
    story: ``
  },
  {
    id: "005",
    title: "Photobooth",
    date: "May 18, 2024",
    location: "Fairview, Philippines",
    caption: "Light and noise and everything good",
    img: "images/image9.jpg",
    story: ``
  },
  {
    id: "006",
    title: "Her Eyes",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "Eyes that made me inlove with you all over again",
    img: "images/image6.jpg",
    story: ``
  },
  
  {
    id: "007",
    title: "Her Smile",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "A smile that i will never get tired of seeing",
    img: "images/image3.jpg",
    story: ``
  },

  {
    id: "008",
    title: "Bonchon Date",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "Bonchon and a date",
    img: "images/image5.jpg",
    story: ``
  },
  {
    id: "009",
    title: "SM North Date",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "Coffee and a date",
    img: "images/image7.jpg",
    story: ``
  },
  {
    id: "010",
    title: "Bonchon Date Part 2",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "Bonchon and a date part 2",
    img: "images/image10.jpg",
    story: ``
  },
  {
    id: "011",
    title: "Sungit",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "So Cutiee",
    img: "images/img11.jpg",
    story: ``
  },
  {
    id: "012",
    title: "Crying Baby :(",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "Pinaiyak ko sya :<",
    img: "images/cryingbaby.png",
    story: ``
  },
  {
    id: "013",
    title: "Kisses",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "kisses and more kisses",
    img: "images/kiss1.jpeg",
    story: ``
  },
  {
    id: "014",
    title: "Sick :(",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "Sick but still smiling",
    img: "images/sick.png",
    story: ``
  },
  {
    id: "015",
    title: "So Prettyy :)",
    date: "February 29, 2024",
    location: "QC, Philippines",
    caption: "Pretty baby",
    img: "images/pretty.jpeg",
    story: ``
  },
];

// ── RENDER GALLERY ───────────────────────────────────────
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = collection.map((item, i) => `
    <div class="exhibit" onclick="showDetail(${i})" tabindex="0" role="button" aria-label="View exhibit: ${item.title}">
      <div class="frame-outer">
        <div class="frame-inner">
          <div class="frame-img-wrap">
            <img class="frame-img" src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="frame-spotlight"></div>
            <div class="frame-view-prompt">
              <div class="view-badge">View Exhibit</div>
            </div>
          </div>
        </div>
      </div>
      <div class="placard">
        <div class="placard-number">No. ${item.id}</div>
        <div class="placard-title">${item.title}</div>
        <div class="placard-date">${item.caption}</div>
      </div>
    </div>
  `).join('');
}

// ── NAVIGATION ───────────────────────────────────────────
function showDetail(index) {
  const item = collection[index];
  document.getElementById('detail-img').src = item.img;
  document.getElementById('detail-img').alt = item.title;
  document.getElementById('detail-number').textContent = `Exhibit ${item.id}`;
  document.getElementById('detail-title').textContent = item.title;
  document.getElementById('detail-date').textContent = item.date;
  document.getElementById('detail-location').textContent = item.location;

  const storyHTML = item.story.trim().split(/\n\n+/).map(p => `<p>${p.trim()}</p>`).join('');
  document.getElementById('detail-story').innerHTML = storyHTML;

  document.getElementById('gallery-page').classList.remove('active');
  document.getElementById('detail-page').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGallery() {
  document.getElementById('detail-page').classList.remove('active');
  document.getElementById('gallery-page').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('detail-page').classList.contains('active')) {
    showGallery();
  }
});

// Expose functions to global scope for inline onclick handlers
window.showDetail = showDetail;
window.showGallery = showGallery;

renderGallery();