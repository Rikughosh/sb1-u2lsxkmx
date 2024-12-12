import React from 'react';

interface CourseTopicsProps {
  topics: string[];
}

export function CourseTopics({ topics }: CourseTopicsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <span
          key={topic}
          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs text-gray-600 dark:text-gray-300"
        >
          {topic}
        </span>
      ))}
    </div>
  );
}