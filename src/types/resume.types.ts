export interface Address {
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

export interface Education extends Summary {
  institution: string;
  degree: string;
  city: string;
  state: string;
  country: string;
  graduationDate: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface Skill extends Summary {
  title: string;
}

export interface Summary {
  summary: string;
}

export interface WorkExperience extends Summary {
  organizationName: string;
  title: string;
  startDate: string;
  endDate: string;
  currentEmployment: boolean;
  city: string;
  state: string;
  country: string;
}
