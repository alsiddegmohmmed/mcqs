// @project
import {  BUY_NOW_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  primaryBtn: { children: 'Sign Up', href: BUY_NOW_URL, ...linkProps },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
  ]
};
