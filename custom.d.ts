declare module "*.svg" {
    const content: any;
    export default content;
}

type schools = {
    [key: string]: string[];
};

declare module "schools.json" {
    const content: schools;
    export default content;
}
