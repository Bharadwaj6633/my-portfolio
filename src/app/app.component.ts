import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  skillsList = [
    {
      image: "assets/skill-icons/python_1.png",
      name: "Python"
    },
    {
      image: "assets/skill-icons/nodeJS.png",
      name: "Node Js"
    },
    {
      image: "assets/skill-icons/html.png",
      name: "HTML5"
    },
    {
      image: "assets/skill-icons/CSS.png",
      name: "CSS3"
    },
    {
      image: "assets/skill-icons/JS.png",
      name: "Javascript"
    },
    {
      image: "assets/skill-icons/angular_1.png",
      name: "Angular 10+"
    }
  ];
  
  experienceDescription = `
As a Senior Software Engineer, I have extensive experience in leading architectural optimizations to enhance the performance and scalability of various software products. My work involves transitioning critical components from one technology stack to another, such as moving from Python services to Node.js, and leveraging asynchronous processing to significantly reduce runtime for operations. I have also automated database migrations to ensure seamless updates and minimize downtime during deployment cycles, resulting in faster response times and an improved user experience.

In addition to backend optimizations, I specialize in frontend development with Angular and TypeScript, where I focus on optimizing module performance and integrating advanced features. My experience includes designing and implementing robust frameworks for extracting relevant information from documents using natural language processing (NLP) and information retrieval techniques. These features are integrated seamlessly into existing application architectures, ensuring compatibility and scalability. My technical skill set includes a strong understanding of data structures, algorithms, and proficiency in programming languages such as JavaScript and Python, as well as experience with containerization technologies like Docker and Kubernetes.
`;
  projectList = [
    {
      name:"Migration-utility",
      desc:"Used for automating CI-CD pipeline to run mongo migration scripts",
      image:"",
      redirectLink:""
    },
  ]
}
