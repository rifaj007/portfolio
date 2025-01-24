import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { projectFormSchema } from "@/lib/validator";
import { z } from "zod";

export type ProjectFormData = z.infer<typeof projectFormSchema>;

export const projectDocumentSchema = projectFormSchema.extend({
  _id: z.string().optional(),
});
export type ProjectDocument = z.infer<typeof projectDocumentSchema>;

export interface DropdownProps {
  register: UseFormRegister<ProjectFormData>;
  setValue: UseFormSetValue<ProjectFormData>;
  errors?: FieldErrors<ProjectFormData>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedOptions: string[];
}

export interface ImageUploaderProps {
  onFieldChange: (url: string) => void;
  fileUrl: string;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  errors?: FieldErrors<ProjectFormData>;
}

// ====== PROJECT PARAMS ======
export type CreateProjectParams = {
  project: {
    title: string;
    desc: string;
    client: string;
    completion_time: string;
    technologies: Array<string>;
    project_img_url: string;
    live_link: string;
    github_link: string;
  }
};

export type ProjectParams = {
  project: {
    _id: string;
    title: string;
    desc: string;
    client: string;
    completion_time: string;
    technologies: Array<string>;
    project_img_url: string;
    live_link: string;
    github_link: string;
  }
};

export type DeleteProjectParams = {
  projectId: string;
};

// ====== FORM TECHNOLOGY PARAMS ======
export type CreateFormTechnologyParams = {
  formTechnology: {
    name: string;
  }
};

// ====== TECHNOLOGY PARAMS ======
export type CreateTechnologyParams = {
  technology: {
    tech_name: string;
    tech_img_url: string;
    tech_official_url: string;
    show_in_hero: boolean;
    skill_position: string;
  }
}

export type TechnologyParams = {
  technology: {
    _id: string;
    tech_name: string;
    tech_img_url: string;
    tech_official_url: string;
    show_in_hero: boolean;
    skill_position: string;
  }
}

export type DeleteTechnologyParams = {
  technologyId: string;
};

// ====== BLOG PARAMS ======
export type CreateBlogParams = {
  blog: {
    tag: string;
    img_url: string;
    date: Date;
    read_time: string;
    title: string;
    desc: string;
    link: string;
  }
};

export type BlogParams = {
  blog: {
    _id: string;
    tag: string;
    img_url: string;
    date: Date;
    read_time: string;
    title: string;
    desc: string;
    link: string;
  }
};

export type DeleteBlogParams = {
  blogId: string;
};