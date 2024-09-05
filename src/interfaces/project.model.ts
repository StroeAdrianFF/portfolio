export interface IProject {
    name: string;
    description: string;
    githubUrl: string;
    liveUrl: string;
    imgLink: string;
    disabled: boolean;
    disabledMessage: string;
    tags: IProjectTag[]
}

interface IProjectTag {
    tagColorLeft: string;
    tagColorRight: string;
    svgPath: string;
    tagName: string;
}