
export interface GameCategoriesModel {
    platform: Platforms;
    count: number;
}

export enum Platforms {
    All = 'All',
    PC = 'PC',
    Xbox = 'Xbox',
    PlayStation = 'PlayStation'
}