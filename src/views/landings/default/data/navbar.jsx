// @project
import { PAGE_PATH } from '@/path';
/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  primaryBtn: { children: 'Sign Up', href: PAGE_PATH.signup },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
  ]
};
