// @project;
import { PAGE_PATH } from '@/path';

export const feature20 = {
  heading: 'Your Personalized MCQ Learning Platform',
  caption: 'Practice smarter, improve faster, and track your progress like never before.',
  actionBtn: { children: 'Start Practicing', href: PAGE_PATH.dailyPractice },
  secondaryBtn: { children: 'Take a Placement Test', href: PAGE_PATH.placementTest },
  features: [
    {
      icon: 'tabler-target',
      title: 'Smart Placement Test',
      content: 'Get assessed with a quick test and start learning from your real level.'
    },
    {
      icon: 'tabler-brain',
      title: 'Adaptive Practice',
      content: 'Questions adjust to your strengths and weaknesses for better focus.'
    },
    {
      icon: 'tabler-chart-bar',
      title: 'Progress Tracking',
      content: 'Visualize your growth with detailed charts and performance analytics.'
    },
    {
      icon: 'tabler-clock',
      title: 'Timed Practice Mode',
      content: 'Simulate real exam conditions to boost your time management skills.'
    },
    {
      icon: 'tabler-book',
      title: 'Detailed Explanations',
      content: 'Understand why an answer is right or wrong — not just guess.'
    },
    {
      icon: 'tabler-language',
      title: 'Bilingual Support',
      content: 'Study in English or Arabic with localized content and UI.'
    }
  ]
};
