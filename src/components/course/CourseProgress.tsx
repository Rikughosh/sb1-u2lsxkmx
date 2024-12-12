import React from 'react';
import { Progress } from 'lucide-react';

interface CourseProgressProps {
  completed: number;
  total: number;
}

export function CourseProgress({ completed, total }: CourseProgressProps) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}