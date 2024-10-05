export const APIBuilder = (url:string, param: string): string => {
    return url.replace(':param', param);
}