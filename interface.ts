export interface Project {
  title: string;
  image: string;
  description: string;
  link?: string;
}

export interface JobExperience {
  companyName: string;
  jobTitle: string;
  years: string;
}

export interface IBlogPost {
  date: string;
  title: string;
  page: string;
}

export interface ISocial {
  label: string;
  link: string;
  icon: JSX.Element;
}
