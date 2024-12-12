import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: 'web-dev-101',
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
    duration: "8 weeks",
    students: 1234,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    level: "Beginner",
    topics: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    accessibility: {
      captioned: true,
      screenReaderOptimized: true,
      textToSpeech: true
    }
  },
  {
    id: 'digital-marketing',
    title: "Digital Marketing Essentials",
    description: "Master the core concepts of digital marketing and social media.",
    duration: "6 weeks",
    students: 856,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    level: "Beginner",
    topics: ["Social Media", "SEO", "Content Marketing", "Analytics"],
    accessibility: {
      captioned: true,
      screenReaderOptimized: true,
      textToSpeech: true
    }
  },
  {
    id: 'data-analysis',
    title: "Data Analysis Basics",
    description: "Introduction to data analysis using spreadsheets and visualization tools.",
    duration: "10 weeks",
    students: 2156,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    level: "Intermediate",
    topics: ["Excel", "Data Visualization", "Statistics", "Reporting"],
    accessibility: {
      captioned: true,
      screenReaderOptimized: true,
      textToSpeech: true
    }
  }
];