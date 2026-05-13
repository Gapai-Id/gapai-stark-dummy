'use client'

import React, { useState } from 'react';
import PreAssessmentResults from './PreAssessmentResults';
import PreAssessmentPhysicalConditions from './PreAssessmentPhysicalConditions';

type View = 'results' | 'physical';

export default function PreAssessmentResultsFlow() {
  const [view, setView] = useState<View>('results');
  const [selectedJaker, setSelectedJaker] = useState<string | null>(null);
  const [excludedJakers, setExcludedJakers] = useState<string[]>([]);

  const handleSelectJaker = (jakerName: string) => {
    setSelectedJaker(jakerName);
    setView('physical');
  };

  const handleConfirm = () => {
    console.log(`Confirmed no physical conditions for ${selectedJaker} → POST /enrollments → Assessment`);
  };

  const handleExclude = () => {
    if (selectedJaker) {
      setExcludedJakers((prev) => [...prev, selectedJaker]);
    }
    setSelectedJaker(null);
    setView('results');
  };

  const handleBackToResults = () => {
    setSelectedJaker(null);
    setView('results');
  };

  if (view === 'physical' && selectedJaker) {
    return (
      <PreAssessmentPhysicalConditions
        selectedJaker={selectedJaker}
        onConfirm={handleConfirm}
        onExclude={handleExclude}
        onBack={handleBackToResults}
      />
    );
  }

  return (
    <PreAssessmentResults
      excludedJakers={excludedJakers}
      onSelectJaker={handleSelectJaker}
    />
  );
}
