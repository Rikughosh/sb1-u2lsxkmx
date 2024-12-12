import React from 'react';
import { Settings } from 'lucide-react';
import { useAccessibilitySettings } from '../../hooks/useAccessibilitySettings';

export function AccessibilityPanel() {
  const { settings, updateSettings } = useAccessibilitySettings();

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Accessibility Settings</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Font Size
            </label>
            <input
              type="range"
              min="12"
              max="24"
              value={settings.fontSize}
              onChange={(e) => updateSettings({ fontSize: Number(e.target.value) })}
              className="w-full"
            />
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm">High Contrast</span>
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm">Reduced Motion</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}