const menu = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  sidebar.classList.toggle('active');
});

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    sidebar.classList.remove('active');
  });
});

// ======= Scroll Reveal Effect =======
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((element) => {
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Run on page load

// ======= Contact Form Handling =======
const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Basic validation
  if (!form.checkValidity()) {
    alert("Please fill in all required fields correctly.");
    return;
  }

  // Show thank you message
  formResponse.style.display = 'block';

  // Reset form fields
  form.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    formResponse.style.display = 'none';
  }, 5000);
});

// ======= Smooth Scroll for "Explore Courses" Button =======
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// ======= Watch Clock Animation =======
function setWatchTime() {
  const now = new Date();

  // Hour hand rotation (360 degrees / 12 hours = 30deg per hour)
  const hours = now.getHours() % 12;
  const hourDeg = (hours + now.getMinutes() / 60) * 30;

  // Minute hand rotation (360deg / 60min = 6deg per min)
  const minutes = now.getMinutes();
  const minuteDeg = (minutes + now.getSeconds() / 60) * 6;

  // Second hand rotation (360deg / 60s = 6deg per sec)
  const seconds = now.getSeconds();
  const secondDeg = seconds * 6;

  // Set CSS transform rotate for hands
  document.querySelectorAll('.watch').forEach(watch => {
    watch.querySelector('.hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    watch.querySelector('.minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    watch.querySelector('.second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  });
}

setInterval(setWatchTime, 1000);
setWatchTime(); // Initialize immediately

// ======= Course Details Modal Functionality =======
const coursesData = {
  webdesign: {
    title: "Web Design & Development",
    details: `
      <p><strong>Duration:</strong> 6 Months</p>
      <p><strong>Price:</strong> ৳25,000</p>
      <p><strong>What You Learn:</strong></p>
      <ul>
        <li>HTML, CSS, JavaScript basics & advanced</li>
        <li>Responsive design & cross-browser compatibility</li>
        <li>WordPress CMS & Hosting essentials</li>
        <li>SEO basics & website optimization</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Build professional business websites</li>
        <li>Start freelancing or agency work</li>
        <li>Entry-level jobs in web development</li>
      </ul>
      <p><strong>Job Opportunities:</strong> Frontend Developer, WordPress Developer, Junior Web Designer</p>
    `
  },
  mernstack: {
    title: "MERN Stack Development",
    details: `
      <p><strong>Duration:</strong> 6 Months</p>
      <p><strong>Price:</strong> ৳30,000</p>
      <p><strong>What You Learn:</strong></p>
      <ul>
        <li>MongoDB, Express.js, React.js, Node.js</li>
        <li>REST APIs & JWT Authentication</li>
        <li>Deployment & Cloud Hosting</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Build full-stack web applications</li>
        <li>Gain skills for high-demand jobs</li>
        <li>Ready for freelancing or startups</li>
      </ul>
      <p><strong>Job Opportunities:</strong> Full Stack Developer, React Developer, Backend Developer</p>
    `
  },
  python: {
    title: "Python Programming",
    details: `
      <p><strong>Duration:</strong> 6 Months</p>
      <p><strong>Price:</strong> ৳20,000</p>
      <p><strong>What You Learn:</strong></p>
      <ul>
        <li>Python basics to advanced</li>
        <li>Object-Oriented Programming</li>
        <li>Automation & Web Scraping</li>
        <li>Data Analysis basics</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Automate repetitive tasks</li>
        <li>Prepare for data-related roles</li>
        <li>Build software & tools</li>
      </ul>
      <p><strong>Job Opportunities:</strong> Python Developer, Automation Engineer, Data Analyst (Entry Level)</p>
    `
  },
  java: {
    title: "Java Programming",
    details: `
      <p><strong>Duration:</strong> 6 Months</p>
      <p><strong>Price:</strong> ৳22,000</p>
      <p><strong>What You Learn:</strong></p>
      <ul>
        <li>Java SE fundamentals</li>
        <li>Object-Oriented Programming</li>
        <li>Swing GUI basics</li>
        <li>JDBC & Database Connectivity</li>
        <li>Intro to Android development</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Foundation for enterprise jobs</li>
        <li>Start Android app development</li>
      </ul>
      <p><strong>Job Opportunities:</strong> Java Developer, Android Developer (Junior)</p>
    `
  },
  digitalmarketing: {
    title: "Digital Marketing",
    details: `
      <p><strong>Duration:</strong> 6 Months</p>
      <p><strong>Price:</strong> ৳18,000</p>
      <p><strong>What You Learn:</strong></p>
      <ul>
        <li>SEO & SEM basics</li>
        <li>Social Media Marketing</li>
        <li>Email Marketing strategies</li>
        <li>Content Marketing & Strategy</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Work with businesses on marketing</li>
        <li>Freelance or join agencies</li>
      </ul>
      <p><strong>Job Opportunities:</strong> Digital Marketer, SEO Specialist, Social Media Manager</p>
    `
  },
  uiux: {
    title: "UI/UX Design",
    details: `
      <p><strong>Duration:</strong> 6 Months</p>
      <p><strong>Price:</strong> ৳24,000</p>
      <p><strong>What You Learn:</strong></p>
      <ul>
        <li>Figma & Adobe XD</li>
        <li>Design Thinking & Prototyping</li>
        <li>User Research & Wireframing</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Create beautiful, user-friendly apps</li>
        <li>Freelance globally or join startups</li>
      </ul>
      <p><strong>Job Opportunities:</strong> UI Designer, UX Researcher, Product Designer</p>
    `
  },
  freelancing: {
    title: "Freelancing & Outsourcing",
    details: `
      <p><strong>Duration:</strong> 6 Months</p>
      <p><strong>Price:</strong> ৳15,000</p>
      <p><strong>What You Learn:</strong></p>
      <ul>
        <li>Popular freelancing platforms</li>
        <li>Client communication & negotiation</li>
        <li>Setting up gigs & building reputation</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Earn from home as a freelancer</li>
        <li>Build sustainable client relationships</li>
      </ul>
      <p><strong>Job Opportunities:</strong> Freelancer, Remote Contractor, Agency Owner</p>
    `
  }
};

const modalCourse = document.getElementById('courseModal');
const modalTitleCourse = document.getElementById('modalCourseTitle');
const modalDetailsCourse = document.getElementById('modalCourseDetails');
const closeBtnCourse = modalCourse.querySelector('.close');

document.querySelectorAll('.course').forEach(courseEl => {
  courseEl.style.cursor = 'pointer';
  courseEl.addEventListener('click', () => {
    const key = courseEl.getAttribute('data-course');
    if (key && coursesData[key]) {
      modalTitleCourse.innerHTML = coursesData[key].title;
      modalDetailsCourse.innerHTML = coursesData[key].details;
      modalCourse.style.display = 'block';
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }
  });
});

closeBtnCourse.addEventListener('click', () => {
  modalCourse.style.display = 'none';
  document.body.style.overflow = '';
});

window.addEventListener('click', e => {
  if (e.target === modalCourse) {
    modalCourse.style.display = 'none';
    document.body.style.overflow = '';
  }
});

// ======= Portfolio Modal JS =====
const projectDetails = {
  1: {
    title: "Project One",
    description: "This is a detailed description of Project One. It explains the project goals, technologies used, and results.",
    features: [
      "Responsive design",
      "Built with HTML, CSS, JS",
      "Integrated API",
      "Cross-browser compatibility"
    ]
  },
  2: {
    title: "Project Two",
    description: "Detailed info about Project Two including challenges faced and solutions implemented.",
    features: [
      "Modern UI/UX",
      "React and Redux based",
      "Optimized performance",
      "Unit tested components"
    ]
  },
  3: {
    title: "Project Three",
    description: "Project Three focuses on backend development with Django and RESTful APIs.",
    features: [
      "Django Framework",
      "REST API Integration",
      "PostgreSQL database",
      "JWT Authentication"
    ]
  },
  4: {
    title: "Project Four",
    description: "Project Four is a mobile-first web application with progressive web app features.",
    features: [
      "Mobile-first design",
      "PWA support",
      "Offline capabilities",
      "Service workers implemented"
    ]
  },
  5: {
    title: "Project Five",
    description: "Project Five is an e-commerce platform with shopping cart and payment gateway integration.",
    features: [
      "E-commerce functionality",
      "Secure payment gateway",
      "Shopping cart system",
      "User account management"
    ]
  }
};

const portfolioItems = document.querySelectorAll('.portfolio-item');
const projectModal = document.getElementById('portfolioModal');
const projectModalClose = document.getElementById('projectModalClose'); // id ভিত্তিক সিলেক্টর
const projectTitle = document.getElementById('modalTitle');
const projectDescription = document.getElementById('modalDescription');
const projectFeatures = document.getElementById('modalFeatures');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const projectId = item.getAttribute('data-project');
    const project = projectDetails[projectId];
    if (project) {
      projectTitle.textContent = project.title;
      projectDescription.textContent = project.description;
      projectFeatures.innerHTML = '';
      project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        projectFeatures.appendChild(li);
      });
      projectModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // background scroll বন্ধ
    }
  });
});

projectModalClose.addEventListener('click', () => {
  projectModal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

projectModal.addEventListener('click', e => {
  if (e.target === projectModal) {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

