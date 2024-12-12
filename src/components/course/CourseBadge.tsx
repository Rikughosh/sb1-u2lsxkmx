import React from 'react';

interface CourseBadgeProps {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const badgeColors = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
};

export function CourseBadge({ level }: CourseBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColors[level]}`}>
      {level}
    </span>
  );
}