import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  location: string;
  profileImage: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    blog?: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  name: string;
  client: string;
  organization: string;
  teamSize: number;
  period: string;
  technology: string;
  responsibilities: string[];
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private profileSignal = signal<Profile>({
    name: 'Jay Kumar Patil',
    title: 'Technical Lead | DevOps | Cloud Specialist',
    email: 'jaykumarpatil3004@gmail.com',
    phone: '+ 91- 8982558010',
    summary: 'An achievement-driven high energy technocrat offering over 10 years of experience in designing & delivering Software Solutions and driving continuous improvement to processes, systems, workflow and customer responsiveness.',
    location: 'Vidisha, Madhya Pradesh, India',
    profileImage: 'assets/images/profile.png',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jaykumarpatil',
      github: 'https://github.com/jaykumarpatil',
      blog: 'https://apachehadoop3.blogspot.com'
    }
  });

  private educationSignal = signal<Education[]>([
    {
      degree: 'Master of Computer Application',
      institution: 'Samrat Ashok Technological Institute',
      location: 'Vidisha, MP',
      year: '2015',
      grade: 'CGPA 6.73/10'
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Yash Computers Technological College',
      location: 'Vidisha, MP',
      year: '2011',
      grade: '64.7%'
    }
  ]);

  private experienceSignal = signal<Experience[]>([
    {
      title: 'Senior Engineering Lead',
      company: 'Persistent Systems Limited',
      location: 'Indore',
      period: 'March 2023 – Present',
      achievements: [
        'Enhanced search performance by reducing response time from 0.8 seconds to 0.2 seconds, achieving a 75% improvement and significantly boosting user experience.',
        'Reduced data size by 68% through effective data compression and optimization techniques, leading to faster data processing and decreasing storage costs.',
        'Established comprehensive monitoring using Micrometer and Grafana, enabling real-time performance metrics and reducing troubleshooting time by 40%.'
      ]
    },
    {
      title: 'Technical Lead',
      company: 'HCL Technologies',
      location: 'Bangalore',
      period: 'September 2021 – February 2023',
      achievements: [
        'Engineered scalable systems capable of handling millions of requests per second, ensuring high availability and robust performance under peak traffic conditions.',
        'Architected and implemented an enterprise-level CI/CD framework for over 10 microservices, enhancing deployment efficiency by 45%.',
        'Led the development of cloud-native microservices using Spring Boot, Spring Cloud, and Kubernetes, increasing application scalability by 25%.',
        'Integrated Istio Service Mesh for advanced traffic management, security, and observability.'
      ]
    },
    {
      title: 'Sr. Software Engineer',
      company: 'RWS Moravia',
      location: 'Indore',
      period: 'March 2018 – September 2021',
      achievements: [
        'Optimized system performance by integrating modern technologies, improving efficiency by 35% and enhancing mobile platform usability.',
        'Orchestrated large-scale deployments using Docker, Kafka, RabbitMQ, and Redis, ensuring zero downtime and seamless scalability.',
        'Developed automated CI/CD pipelines with Jenkins, reducing deployment time by 50%.',
        'Implemented application monitoring using Micrometer and Grafana, improving observability and proactive issue detection.',
        'Collaborated cross-functionally to align development with business objectives, increasing client satisfaction by 15%.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Lumium Design Engineering',
      location: 'Ahmedabad',
      period: 'March 2017 – March 2018',
      achievements: [
        'Implemented RESTful APIs with Spring Data and HATEOAS, enhancing client-server communication.',
        'Optimized batch processing using Spring Batch, reducing execution time by 25%.',
        'Enhanced security features with Spring Security, ensuring data integrity and privacy.',
        'Introduced performance monitoring with Micrometer, facilitating better resource management.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Ad Hoc Services Pvt. Ltd.',
      location: 'Pune',
      period: 'December 2014 – March 2017',
      achievements: [
        'Managed concurrent programming and session management using Redis and Spring Session, improving responsiveness and reliability.',
        'Upgraded cloud infrastructure, improving network efficiency by 15%.',
        'Monitored system performance using Grafana, aiding proactive infrastructure management.'
      ]
    }
  ]);

  private projectsSignal = signal<Project[]>([
    {
      name: 'Chubb\'s & ThermoFisher',
      client: 'Chubb\'s & ThermoFisher',
      organization: 'Persistent System, Indore',
      teamSize: 12,
      period: '1 year 8 Month',
      technology: 'Spring Framework & Spring Projects',
      responsibilities: [
        'Integrated Apache Airflow, replacing Lucid work.',
        'Streamlined data processes by consolidating multiple languages into one with i8n support.',
        'Migrated 22 applications from Spring Boot to Quarks.',
        'Developed ETL processes utilizing Kafka and other data sources to enhance data integration with MongoDB.'
      ]
    },
    {
      name: 'Cisco Cross Work Network Automation and Cisco Prime Access Registrar (CPAR)',
      client: 'Cisco',
      organization: 'HCL Technologies, Bangalore',
      teamSize: 8,
      period: '8 months',
      technology: 'Spring Framework & Spring Projects',
      responsibilities: [
        'Developing strong skills for performing migration from Struts to Spring Cloud.',
        'Working on security features to protect REST APIs from various types of attacks.',
        'Organizing and conducting efficient large-scale software deployments using Kubernetes, Kafka, RabbitMQ, including testing features and correcting code with Jenkins pipeline.',
        'Involved in defining customer requirements to develop clear specifications for creating well-organized project plans.'
      ]
    },
    {
      name: 'Oriental Trading Company',
      client: 'www.orientaltrading.com',
      organization: 'RWS, Indore',
      teamSize: 4,
      period: '3+ Year',
      technology: 'Spring Framework & Spring Projects',
      responsibilities: [
        'Implemented latest technologies on existing modules by introducing a web CMS to enhance performance, responsiveness, and usability on mobile platforms.',
        'Led the large-scale software deployments using Docker, Kafka, RabbitMQ, and Redis as the backbone, including testing features and correcting code with Jenkins pipeline.',
        'Involved in defining customer requirements to develop clear specifications for creating well-organized project plans.'
      ]
    },
    {
      name: 'Avid Secure – Cloud Security',
      client: 'www.avidsecure.io',
      organization: 'Lumium, Ahmedabad',
      teamSize: 2,
      period: '7 Months',
      technology: 'Spring Framework & Spring Projects',
      responsibilities: [
        'Efficiently & effectively worked on REST communication',
        'Performed on Spring Data and HATEOAS to retrieve reporting alerts data',
        'Executed Spring Scheduled Batch Processing to find the brute force attack on AWS Server',
        'Worked on customer\'s requirements and gathered the same to design project plans'
      ]
    },
    {
      name: 'Cloud Ocular V5.4 –Server Network Configuration Tool',
      client: 'ITC INFOTECH',
      organization: 'ITC INFOTECH, Bangalore',
      teamSize: 15,
      period: '6 Months',
      technology: 'Spring Framework & Spring Projects',
      responsibilities: [
        'Performed Concurrent Spring Programming for Non-Blocking Request & Response. Initially started with spring reactor then update with spring web flux',
        'Gained exposure in managing Spring Data and HATEOAS; upgraded & maintained the Cloud Network data',
        'Extensively worked on Spring Security for session management by Redis'
      ]
    }
  ]);

  private skillsSignal = signal<Skill[]>([
    {
      category: 'DevOps & CI/CD',
      items: [
        { name: 'Jenkins', proficiency: 95 },
        { name: 'Docker', proficiency: 90 },
        { name: 'Kubernetes', proficiency: 85 },
        { name: 'GitOps', proficiency: 80 },
        { name: 'GitHub Actions', proficiency: 85 }
      ]
    },
    {
      category: 'Cloud Technologies',
      items: [
        { name: 'AWS', proficiency: 90 },
        { name: 'Azure', proficiency: 75 },
        { name: 'Cloud-Native Applications', proficiency: 85 }
      ]
    },
    {
      category: 'Microservices Development',
      items: [
        { name: 'Spring Boot', proficiency: 95 },
        { name: 'Spring Cloud', proficiency: 90 },
        { name: 'Kafka', proficiency: 85 }
      ]
    },
    {
      category: 'Programming Languages',
      items: [
        { name: 'Java', proficiency: 95 },
        { name: 'TypeScript', proficiency: 80 },
        { name: 'YAML', proficiency: 85 }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'Postgres', proficiency: 85 },
        { name: 'MongoDB', proficiency: 90 },
        { name: 'Oracle 12c', proficiency: 75 },
        { name: 'Redis', proficiency: 80 },
        { name: 'Elasticsearch', proficiency: 85 },
        { name: 'Solr', proficiency: 75 }
      ]
    }
  ]);

  // Expose signals as observables for components
  profile$ = toObservable(this.profileSignal);
  education$ = toObservable(this.educationSignal);
  experience$ = toObservable(this.experienceSignal);
  projects$ = toObservable(this.projectsSignal);
  skills$ = toObservable(this.skillsSignal);

  // Getter methods for direct signal access
  get profile() {
    return this.profileSignal();
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
}