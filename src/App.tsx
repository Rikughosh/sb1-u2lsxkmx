import React from 'react';
import { Header } from './components/Header';
import { CourseCard } from './components/course/CourseCard';
import { Chatbot } from './components/Chatbot';
import { AccessibilityPanel } from './components/accessibility/AccessibilityPanel';
import { courses } from './data/courses';
import { useAccessibilitySettings } from './hooks/useAccessibilitySettings';

function App() {
  const { settings } = useAccessibilitySettings();

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${
      settings.highContrast ? 'high-contrast' : ''
    } ${settings.reducedMotion ? 'reduced-motion' : ''}`}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn Without Limits
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Accessible education for everyone, anywhere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course}
            />
          ))}
        </div>
      </main>

      <AccessibilityPanel />
      <Chatbot />
    </div>
  );
}

export default App;