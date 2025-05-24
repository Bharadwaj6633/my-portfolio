import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Skill {
  image: string;
  name: string;
  category: string;
}

interface Project {
  name: string;
  desc: string;
  image: string;
  redirectLink: string;
  technologies: string[];
  categories: string[];
  type: 'personal' | 'organization';
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  image: string;
  credentialLink?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isContactModalOpen = false;
  isMobileMenuOpen = false;
  name = "Bharadwaj"
  currentDesignation = "Senior Software Engineer"
  activeSection = 'home';
  activeSkillCategory = 'AI & ML';
  currentSpecialty = 'AI Agents & RAG Systems';
  specialties = ['RAG Systems', 'LLM Applications', 'AI Agent Systems', 'Scalable Architecture & Systems'];
  specialtyIndex = 0;
  isScrolled = false;
  currentProjectFilter = 'all';
  currentSlideIndex = 0;
  slideInterval: any;
  yearsOfExperience = 3;

  
  skillsList: Skill[] = [
    { image: "assets/skill-icons/nodeJS.png", name: "Node.js", category: "Programming" },
    { image: "assets/skill-icons/python.png", name: "Python", category: "Programming" },
    { image: "assets/skill-icons/JS.png", name: "JavaScript", category: "Programming" },
    { image: "assets/skill-icons/typescript-icon.png", name: "TypeScript", category: "Programming" },
    { image: "assets/skill-icons/angular_1.png", name: "Angular", category: "Frontend" },
    { image: "assets/skill-icons/html.png", name: "HTML5", category: "Frontend" },
    { image: "assets/skill-icons/CSS.png", name: "CSS3", category: "Frontend" },
    { image: "assets/skill-icons/mongodb.png", name: "MongoDB", category: "Database" },
    { image: "assets/skill-icons/elasticsearch.png", name: "Elasticsearch", category: "Database" },
    { image: "assets/skill-icons/redis.png", name: "Redis", category: "Database" },
    { image: "assets/skill-icons/docker.png", name: "Docker", category: "DevOps" },
    { image: "assets/skill-icons/kubernetes.png", name: "Kubernetes", category: "DevOps" },
    { image: "assets/skill-icons/llms.png", name: "LLMs", category: "AI & ML" },
    { image: "assets/skill-icons/rag.png", name: "RAG", category: "AI & ML" },
    { image: "assets/skill-icons/langchain.png", name: "LangChain", category: "AI & ML" }
  ];
  
  certificatesList: Certificate[] = [
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "Nov 2022",
      image: "assets/skill-icons/llms.png",
     //  credentialLink: "https://www.coursera.org/account/accomplishments/specialization/example"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "Aug 2022",
      image: "assets/skill-icons/deep-learning.png",
     //  credentialLink: "https://www.coursera.org/account/accomplishments/specialization/example"
    },
    {
      name: "LangChain & LangGraph",
      issuer: "DeepLearning.AI",
      date: "Aug 2022",
      image: "assets/skill-icons/langchain.png",
      //credentialLink: "https://www.coursera.org/account/accomplishments/specialization/example"
    }
  ];
  
  experienceList: Experience[] = [
    {
      title: "Senior Software Engineer",
      company: "Kore.ai",
      period: "Jan. 2024 – Present",
      location: "Hyderabad, India",
      achievements: [
        "Explored agents and contributed to the foundational POC work of the agent-building platform",
        "Built an Agentic RAG feature aligned with emerging agent frameworks, improving retrieval accuracy",
        "Worked on scaling the existing systems based on the requirements and traffic",
        "Reviewed design approaches, conducted code reviews, and implemented best practices within the team"
      ]
    },
    {
      title: "Software Engineer",
      company: "Kore.ai",
      period: "Jan. 2023 – Dec. 2023",
      location: "Hyderabad, India",
      achievements: [
        "Engineered search algorithms to improve click-through rate (CTR) by 5X, significantly enhancing user experience(CTR)",
        "Streamlined the indexing pipeline, reducing processing time for large document batches",
        "Containerized application services with support for logging, configuration management, and resource allocation and made code compatable to deploy in kubernetes"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Kore.ai",
      period: "Apr. 2022 – Dec. 2022",
      location: "Hyderabad, India",
      achievements: [
        "Standardized MongoDB schemas, improving data consistency across services",
        "Implemented document extraction features for efficient data processing(PDF, DOCX, etc) using multiple external libraries",
        "Designed and developed a tenant-level rate-limiting framework used across the organization"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Kore.ai",
      period: "Oct. 2021 – Apr. 2022",
      location: "Hyderabad, India",
      achievements: [
        "Built the UI for the onboarding module, streamlining the first-time user journey and improving UX(PLG purpose)",
        "Implemented i18n (internationalization) in Angular, enabling multi-language support for the platform",
        "Resolved UI implementation bugs and supported QA and release teams during major product releases"
      ]
    }
  ];
  
  projectList: Project[] = [
    {
      name: "RAG No-Code Platform",
      desc: "It is a enterprise no-code Retrieval-Augmented Generation (RAG) platform for document ingestion, search, retrieval, and answer generation where i worked in an organisation",
      image: "assets/skill-icons/search.png",
      redirectLink: "#",
      technologies: ["LLMs", "RAG", "Node.js", "Python", "Elasticsearch"],
      categories: ["ai", "backend", "frontend"],
      type: "organization"
    },
    {
      name: "Financial Analyst Agent(Stock Market)",
      desc: "It is a financial analyst agent that uses LLMs to analyze stock market data and provide insights and recommendations and recomends live stock to buy if you give you r budgent it will give you the best stock to buy and how much to buy etc",
      image: "assets/skill-icons/financial-analyst.png",
      redirectLink: "#",
      technologies: ["Python", "LLMs", "RAG"],
      categories: ["ai", "backend"],
      type: "personal"
    },
    {
      name: "MongoDB Migration Utility",
      desc: "NPM module to automate MongoDB schema and data migrations, designed for seamless CI/CD pipeline integration",
      image: "assets/skill-icons/mongodb.png",
      redirectLink: "https://github.com/Bharadwaj6633/mongodb-migration-utility",
      technologies: ["Node.js", "MongoDB", "CI/CD"],
      categories: ["backend"],
      type: "personal"
    }
  ];

  filteredProjects: Project[] = [];

  professionalSummary = `Senior Software Engineer with 3 years of experience in AI Retrieval-Augmented Generation (RAG) and Autonomous Agents. Proven track record in R&D, building scalable systems, and delivering real-world solutions powered by LLMs with productising them.🛠️`;

  ngOnInit() {
    this.filteredProjects = [...this.projectList];
    this.startSpecialtyRotation();
    this.initScrollObserver();
    this.startSlideshow();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.checkActiveSection();
  }

  checkActiveSection() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || '';
      }
    });
    
    if (current) {
      this.activeSection = current;
    }
  }

  initScrollObserver() {
    // This would be implemented with a real scroll observer in production
    // For demonstration, we're simulating this with a setTimeout
    setTimeout(() => {
      this.initCounters();
    }, 1000);
  }

  initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      const count = function(start: number, end: number, duration: number) {
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        
        const timer = setInterval(() => {
          current += increment;
          counter.textContent = current.toString();
          
          if (current === end) {
            clearInterval(timer);
          }
        }, stepTime);
      };
      
      count(0, target, 2000);
    });
  }

  startSpecialtyRotation() {
    setInterval(() => {
      this.specialtyIndex = (this.specialtyIndex + 1) % this.specialties.length;
      this.currentSpecialty = this.specialties[this.specialtyIndex];
    }, 3000);
  }

  openContactModal() {
    this.isContactModalOpen = true;
  }

  openContactModalMobile() {
    this.closeMobileMenu();
    this.openContactModal();
  }

  closeContactModal() {
    this.isContactModalOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  
  setActiveSkillCategory(category: string) {
    this.activeSkillCategory = category;
  }
  
  getSkillsByCategory(category: string): Skill[] {
    return this.skillsList.filter(skill => skill.category === category);
  }

  get skillCategories(): string[] {
    return [...new Set(this.skillsList.map(skill => skill.category))];
  }

  filterProjects(category: string) {
    this.currentProjectFilter = category;
    
    if (category === 'all') {
      this.filteredProjects = [...this.projectList];
    } else {
      this.filteredProjects = this.projectList.filter(project => 
        project.categories.includes(category)
      );
    }
    
    // Reset active class on filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the clicked button
    const clickedBtn = Array.from(filterBtns).find(
      btn => btn.textContent?.toLowerCase() === category
    );
    if (clickedBtn) {
      clickedBtn.classList.add('active');
    }
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % 2;
    this.resetSlideTimer();
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + 2) % 2;
    this.resetSlideTimer();
  }

  setSlide(index: number) {
    this.currentSlideIndex = index;
    this.resetSlideTimer();
  }

  resetSlideTimer() {
    // Reset the interval timer when manually changing slides
    clearInterval(this.slideInterval);
    this.startSlideshow();
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.slideInterval);
  }

  getVisibleStatsCount(): number {
    // You can expand this if you decide to make the stats visibility dynamic
    return 1; // Currently only one stat is visible
  }
}