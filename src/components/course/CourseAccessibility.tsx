import React from 'react';
import { Headphones, Eye, MessageSquare } from 'lucide-react';

interface CourseAccessibilityProps {
  features: {
    captioned: boolean;
    screenReaderOptimized: boolean;
    textToSpeech: boolean;
  };
}

export function CourseAccessibility({ features }: CourseAccessibilityProps) {
  return (
    <div className="flex gap-2 mt-2">
      {features.captioned && (
        <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400" title="Closed Captions Available">
          <MessageSquare className="h-3 w-3 mr-1" />
          CC
        </span>
      )}
      {features.screenReaderOptimized && (
        <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400" title="Screen Reader Optimized">
          <Eye className="h-3 w-3 mr-1" />
          SR
        </span>
      )}
      {features.textToSpeech && (
        <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400" title="Text to Speech Available">
          <Headphones className="h-3 w-3 mr-1" />
          TTS
        </span>
      )}
    </div>
  );
}