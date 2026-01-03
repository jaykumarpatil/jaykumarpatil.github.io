import { Injectable, signal } from '@angular/core';

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  shortGoal: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    blog?: string;
  };
}

export interface ValueBullet {
  icon: string;
  text: string;
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
  url?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  url?: string;
}

export interface Project {
  slug: string;
  name: string;
  role: string;
  client: string;
  organization: string;
  teamSize: number;
  period: string;
  technology: string[];
  impactSummary: string;
  responsibilities: string[];
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  challenges?: string[];
  solutions?: string[];
  outcomes?: string[];
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
}

export interface Interest {
  icon: string;
  title: string;
  description: string;
}

export interface JourneyStep {
  period: string;
  title: string;
  description: string;
  url?: string;
}

export interface Achievement {
  icon: string;
  metric: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private profileSignal = signal<Profile>({
    name: 'Jay Kumar Patil',
    title: 'Senior Engineering Leader & Cloud Architect',
    email: 'jaykumarpatil3004@gmail.com',
    phone: '', // Hidden for privacy
    summary: 'I am an engineering leader with over 10 years of experience. I specialize in building scalable cloud systems and automating software delivery. My work ensures your systems stay fast, reliable, and ready to grow as your business expands.',
    shortGoal: 'I help you design resilient and high-performance systems that scale effortlessly.',
    location: 'Indore, MP, India',
    profileImage: 'images/profile.png',
    resumeUrl: 'resume/jay-kumar-patil-resume.pdf',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jaykumarpatil3004',
      github: 'https://github.com/jaykumarpatil',
      blog: 'https://apachehadoop3.blogspot.com'
    }
  });

  private valueBulletsSignal = signal<ValueBullet[]>([
    { icon: '#icon-wrench', text: 'Streamlining your delivery with DevOps and CI/CD automation.', url: '/blog' },
    { icon: '#icon-cloud', text: 'Building robust, modern applications using AWS and Azure cloud platforms.', url: '/blog' },
    { icon: '#icon-rocket', text: 'Solving complex problems with microservices and real-time data.', url: '/blog' }
  ]);

  private educationSignal = signal<Education[]>([
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Samrat Ashok Technological Institute',
      location: 'Vidisha, MP',
      year: '2015',
      grade: 'CGPA 6.73/10',
      url: 'https://www.satiengg.in/'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Yash Computers Technological College',
      location: 'Vidisha, MP',
      year: '2011',
      grade: '64.7%',
      url: 'https://www.mcu.ac.in'
    }
  ]);

  private experienceSignal = signal<Experience[]>([
    {
      title: 'Senior Engineering Lead',
      company: 'Persistent Systems',
      location: 'Indore',
      period: 'March 2023 – Present',
      achievements: [
        'I boosted search performance by 75%, cutting response times from 0.8s to 0.2s.',
        'I reduced data storage needs by 68% through smart compression and optimization.',
        'I built a monitoring system that cut troubleshooting time by 40% for the team.'
      ],
      url: 'https://www.persistent.com/'
    },
    {
      title: 'Technical Lead',
      company: 'HCL Technologies',
      location: 'Bangalore',
      period: 'September 2021 – February 2023',
      achievements: [
        'I built scalable systems that handle millions of requests every second.',
        'I designed a delivery framework for 10 microservices, making deployments 45% faster.',
        'I led the development of cloud-native applications using Kubernetes and Spring Boot.',
        'I added advanced security and traffic tools to improve system visibility.'
      ],
      url: 'https://www.hcltech.com/'
    },
    {
      title: 'Sr. Software Engineer',
      company: 'RWS Moravia',
      location: 'Indore',
      period: 'March 2018 – September 2021',
      achievements: [
        'I improved overall system efficiency by 35% using modern tech stacks.',
        'I managed large-scale deployments for global users with zero downtime.',
        'I automated build and release processes to save the team 50% of their time.',
        'I implemented real-time monitoring to catch and fix issues before they impacted users.'
      ],
      url: 'https://www.rws.com/'
    },
    {
      title: 'Software Engineer',
      company: 'Lumium Design Engineering',
      location: 'Ahmedabad',
      period: 'March 2017 – March 2018',
      achievements: [
        'I created reliable web interfaces (APIs) for seamless data communication.',
        'I optimized background data tasks, making them 25% faster to complete.',
        'I strengthened application security to protect sensitive user data.'
      ],
      url: 'https://lumiumdesign.com'
    },
    {
      title: 'Software Engineer',
      company: 'Ad Hoc Services',
      location: 'Pune',
      period: 'December 2014 – March 2017',
      achievements: [
        'I managed complex user sessions and data tasks using high-speed tools.',
        'I upgraded cloud infrastructure to make the network 15% more efficient.',
        'I monitored performance daily to ensure systems ran smoothly and reliably.'
      ]
    }
  ]);

  private projectsSignal = signal<Project[]>([
    {
      slug: 'performance-optimization',
      name: 'System Speed & Efficiency Boost',
      role: 'Senior Engineering Lead',
      client: 'Chubb & ThermoFisher',
      organization: 'Persistent Systems',
      teamSize: 12,
      period: '1 year 8 months',
      technology: ['Spring Boot', 'Kafka', 'MongoDB', 'Apache Airflow'],
      impactSummary: 'I cut search times by 75% and reduced data size by 68% to create a better user experience.',
      responsibilities: [
        'I integrated new workflow tools to replace slow legacy systems.',
        'I simplified data processes so the app works better in different languages.',
        'I moved 22 applications to a modern framework for better performance.',
        'I built fast data flows between systems using Kafka and MongoDB.'
      ],
      tags: ['Performance', 'ETL', 'Kafka', 'MongoDB'],
      challenges: [
        'Users experienced slow search results which hurt engagement.',
        'Large data volumes slowed down storage and processing.',
        'Old systems were hard to maintain and update.'
      ],
      solutions: [
        'I added robust workflow tools to manage complex data tasks.',
        'I used smart compression to save storage space.',
        'I modernized the entire tech stack for better efficiency.'
      ],
      outcomes: [
        'Search results now appear 75% faster than before.',
        'Stored data takes up 68% less space.',
        'The system is now easier for the team to maintain.'
      ]
    },
    {
      slug: 'microservices-transformation',
      name: 'Cloud-Native Modernization',
      role: 'Technical Lead',
      client: 'Cisco',
      organization: 'HCL Technologies',
      teamSize: 8,
      period: '8 months',
      technology: ['Spring Cloud', 'Kubernetes', 'Kafka', 'Istio'],
      impactSummary: 'I built systems that handle millions of daily users and made updates 45% faster.',
      responsibilities: [
        'I moved the system from old tech to a modern cloud-based setup.',
        'I added strong security layers to protect all web communications.',
        'I managed massive deployments using Kubernetes and Kafka.',
        'I automated the entire software delivery process.'
      ],
      tags: ['Microservices', 'Kubernetes', 'CI/CD', 'Istio'],
      challenges: [
        'The old structure made it slow to add new features.',
        'Security was inconsistent across different services.',
        'Manual updates were slow and often had errors.'
      ],
      solutions: [
        'I designed a new microservices system for better scaling.',
        'I used advanced tools to secure and monitor all services.',
        'I automated every step of the update process.'
      ],
      outcomes: [
        'We can now release updates 45% more often.',
        'The system easily handles millions of user requests.',
        'Security and visibility are now standard across the board.'
      ]
    },
    {
      slug: 'cicd-automation',
      name: 'Automated Delivery Pipeline',
      role: 'Sr. Software Engineer',
      client: 'Multi-client',
      organization: 'RWS Moravia',
      teamSize: 4,
      period: '3+ years',
      technology: ['Jenkins', 'Docker', 'Kafka', 'RabbitMQ', 'Redis'],
      impactSummary: 'I cut release times by 50% and ensured we never had to take the site down for updates.',
      responsibilities: [
        'I built a new content system to improve mobile app usability.',
        'I led large-scale app deployments using modern container tools.',
        'I automated the entire build and release cycle.'
      ],
      tags: ['DevOps', 'Docker', 'Jenkins', 'CI/CD'],
      challenges: [
        'Manual releases took too long and caused delays.',
        'The site had to go offline during updates, affecting users.'
      ],
      solutions: [
        'I packaged every app for consistent performance everywhere.',
        'I created a strategy to update the site while users were still on it.',
        'I fully automated the delivery pipeline.'
      ],
      outcomes: [
        'Releases are now 50% faster than they used to be.',
        'We achieve zero downtime during all updates.',
        'The team is now much more productive.'
      ]
    },
    {
      slug: 'avid-secure',
      name: 'Cloud Security Protection',
      role: 'Software Engineer',
      client: 'Avid Secure',
      organization: 'Lumium',
      teamSize: 2,
      period: '7 months',
      technology: ['Spring Data', 'HATEOAS', 'Spring Batch', 'AWS'],
      impactSummary: 'I built a security tool that detects and stops attacks on cloud infrastructure.',
      responsibilities: [
        'I designed how different parts of the app talk to each other securely.',
        'I used reporting tools to alert users about security threats.',
        'I created a fast detection tool to catch hackers in real-time.'
      ],
      tags: ['Security', 'AWS', 'Spring Batch', 'REST']
    },
    {
      slug: 'cloud-ocular',
      name: 'Real-Time Network Monitor',
      role: 'Software Engineer',
      client: 'ITC Infotech',
      organization: 'ITC Infotech',
      teamSize: 15,
      period: '6 months',
      technology: ['Spring WebFlux', 'Spring Security', 'Redis'],
      impactSummary: 'I created a tool to configure and monitor server networks in real-time.',
      responsibilities: [
        'I used reactive tools to handle many network tasks at once.',
        'I managed network data securely across the cloud.',
        'I used high-speed storage for quick access to user sessions.'
      ],
      tags: ['Reactive', 'WebFlux', 'Redis', 'Cloud']
    }
  ]);

  private skillsSignal = signal<Skill[]>([
    {
      category: 'Languages',
      items: [
        { name: 'Java', proficiency: 95 },
        { name: 'TypeScript', proficiency: 70 },
        { name: 'Python', proficiency: 80 }
      ]
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'Spring Boot', proficiency: 95 },
        { name: 'Spring Cloud', proficiency: 90 },
        { name: 'Kafka', proficiency: 85 },
        { name: 'RabbitMQ', proficiency: 80 }
      ]
    },
    {
      category: 'DevOps',
      items: [
        { name: 'Jenkins', proficiency: 70 },
        { name: 'Docker', proficiency: 90 },
        { name: 'Kubernetes', proficiency: 85 },
        { name: 'GitOps', proficiency: 85 },
        { name: 'GitHub Actions', proficiency: 85 }
      ]
    },
    {
      category: 'Cloud',
      items: [
        { name: 'AWS', proficiency: 90 },
        { name: 'Azure', proficiency: 75 },
        { name: 'Cloud-Native Apps', proficiency: 85 }
      ]
    },
    {
      category: 'Monitoring',
      items: [
        { name: 'Micrometer', proficiency: 90 },
        { name: 'Grafana', proficiency: 85 },
        { name: 'Prometheus', proficiency: 80 }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', proficiency: 85 },
        { name: 'MongoDB', proficiency: 90 },
        { name: 'Redis', proficiency: 80 },
        { name: 'Elasticsearch', proficiency: 85 },
        { name: 'Oracle', proficiency: 75 }
      ]
    }
  ]);

  private interestsSignal = signal<Interest[]>([
    {
      icon: '#icon-zap',
      title: 'High Performance',
      description: 'I love making systems run at top speeds.'
    },
    {
      icon: '#icon-cloud',
      title: 'Cloud Design',
      description: 'I enjoy building modern, observable cloud apps.'
    },
    {
      icon: '#icon-rocket',
      title: 'Automation',
      description: 'I focus on making software delivery fast and easy.'
    },
    {
      icon: '#icon-about',
      title: 'Leadership',
      description: 'I enjoy mentoring teams and driving projects to success.'
    }
  ]);

  private journeySignal = signal<JourneyStep[]>([
    {
      period: '2023–Present',
      title: 'Senior Engineering Lead',
      description: 'Leading speed boosts and better monitoring at Persistent.',
      url: 'https://www.persistent.com/'
    },
    {
      period: '2021–2023',
      title: 'Technical Lead',
      description: 'Built massive systems and fast delivery pipelines at HCL.',
      url: 'https://www.hcltech.com/'
    },
    {
      period: '2018–2021',
      title: 'Sr. Software Engineer',
      description: 'Automated releases and optimized systems at RWS.',
      url: 'https://www.rws.com/'
    },
    {
      period: '2014–2017',
      title: 'Software Engineer',
      description: 'Built secure APIs and fast data tasks at Ad Hoc and Lumium.',
      url: 'https://www.lumium.com/'
    }
  ]);

  private achievementsSignal = signal<Achievement[]>([
    {
      icon: '#icon-rocket',
      metric: '75%',
      description: 'Faster search response times'
    },
    {
      icon: '#icon-chart-down',
      metric: '68%',
      description: 'Reduction in data storage needs'
    },
    {
      icon: '#icon-zap',
      metric: 'Millions',
      description: 'Handled requests per second'
    },
    {
      icon: '#icon-clock',
      metric: '40%',
      description: 'Cut troubleshooting time'
    }
  ]);

  // Getter methods for direct signal access
  get profile() {
    return this.profileSignal();
  }

  get valueBullets() {
    return this.valueBulletsSignal();
  }

  get education() {
    return this.educationSignal();
  }

  get experience() {
    return this.experienceSignal();
  }

  get projects() {
    return this.projectsSignal();
  }

  get skills() {
    return this.skillsSignal();
  }

  get interests() {
    return this.interestsSignal();
  }

  get journey() {
    return this.journeySignal();
  }

  get achievements() {
    return this.achievementsSignal();
  }
}
