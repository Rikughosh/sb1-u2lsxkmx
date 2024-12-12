export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  accessibility: {
    captioned: boolean;
    screenReaderOptimized: boolean;
    textToSpeech: boolean;
  };
}