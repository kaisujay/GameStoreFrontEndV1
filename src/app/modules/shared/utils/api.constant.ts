export const URL = 'https://localhost:7217/';
export const API = {
    games: {
        all: URL + 'api/Game/GetGames',
        oneById: URL + 'api/Game/GetGameById/:param',
        allByName: URL + 'api/Game/GetGamesByName/:param',
        createGame: URL + 'api/Game/CreateGame',
        updateGame: URL + 'api/Game/UpdateGame/:param',
    },
    gamePlatformType: {
        getGameCatagories: URL + 'api/GamePlatformType/GetGameCatagories',
        getGameByCategoryName: URL + 'api/GamePlatformType/GetGameByCategory?catagoryName=:param'
    }
};