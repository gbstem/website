export const semesterStartDate = new Date('2025-08-20');
export const instructorAppsDueDate = new Date('2025-09-19')
export const registrationEndsDate = new Date('2025-10-01')
export const semesterEndDate = new Date('2025-12-26');
export const latestSemester =  new Date().getMonth() < 9 && new Date().getMonth() >= 3 ? "spring" : "fall";
export const upcomingSemester = latestSemester === "fall" ? "spring" : "fall";
export const registrationOpen = new Date() >= semesterStartDate && new Date() <= registrationEndsDate;
export const semesterInProgress = new Date() >= semesterStartDate && new Date() <= semesterEndDate;
export const formLink = 'https://docs.google.com/forms/u/3/d/e/1FAIpQLSfRe7CVWxhOLb7mN20zER94-le4Wt-PCNX3Xd1iAJ53Ljh0ow/viewform?usp=sf_link';
export const gbSTEMSignup = 'https://portal.gbstem.org/signup';