import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Course } from '../../types/course';
import { CourseAccessibility } from './CourseAccessibility';
import { CourseBadge } from './CourseBadge';
import { CourseTopics } from './CourseTopics';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
      role="article"
    >
      <img
        src={course.image}
        alt={`${course.title} course cover`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <CourseBadge level={course.level} />
          <CourseAccessibility features={course.accessibility} />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {course.description}
        </p>
        
        <CourseTopics topics={course.topics} />
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.students} students</span>
          </div>
        </div>
      </div>
    </div>
  );
}