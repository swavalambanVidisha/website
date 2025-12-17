export interface NavLink {
  label: string;
  path: string;
}

export interface Project {
  title: string;
  hindiTitle?: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}