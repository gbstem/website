export const SEMESTER_START_DATE = new Date('2026-03-16');
export const REGISTRATION_OPEN_DATE = new Date('2026-02-01');
export const INSTRUCTOR_APPS_DUE_DATE = new Date('2026-02-28');
export const REGISTRATION_ENDS_DATE = new Date('2026-03-16');
export const SEMESTER_END_DATE = new Date('2026-06-14');
export const LATEST_SEMESTER =
  new Date().getMonth() < 9 && new Date().getMonth() >= 3 ? 'spring' : 'fall';
export const UPCOMING_SEMESTER = LATEST_SEMESTER === 'fall' ? 'spring' : 'fall';
export const REGISTRATION_OPEN =
  new Date() >= REGISTRATION_OPEN_DATE && new Date() <= REGISTRATION_ENDS_DATE;
export const SEMESTER_IN_PROGRESS =
  new Date() >= SEMESTER_START_DATE && new Date() <= SEMESTER_END_DATE;
export const FORM_LINK =
  'https://docs.google.com/forms/u/3/d/e/1FAIpQLSfRe7CVWxhOLb7mN20zER94-le4Wt-PCNX3Xd1iAJ53Ljh0ow/viewform?usp=sf_link';
export const GBSTEM_SIGNUP = 'https://portal.gbstem.org/signup';
