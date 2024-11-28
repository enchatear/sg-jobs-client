import React from 'react';
import HeaderSection from '@/features/candidate/home-page/containers/header-section';
import JobFormSection from '@/features/candidate/home-page/containers/job-form-section';
import TelegramSection from '@/features/candidate/home-page/containers/telegram-section';
import JobListSection from '@/features/candidate/home-page/containers/job-list-section';
import JobTrendsSection from '@/features/candidate/home-page/containers/job-trends-section';
import Footer from '@/features/candidate/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employee',
  description: 'Find cool job for you',
};

export default function CandidateHome() {
  return (
    <main>
      <HeaderSection />
      <JobFormSection />
      <TelegramSection />
      <JobListSection />
      <JobTrendsSection />
      <Footer />
    </main>
  );
}
