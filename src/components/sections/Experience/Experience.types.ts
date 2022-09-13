export interface JobListItem {
    date: string;
    title: string;
    company: string;
    location: string;
    range: string;
    url: string;
    content: string[];
}

export type JobsList = JobListItem[];

export interface ExperienceProps {
    jobsList: JobsList;
}
