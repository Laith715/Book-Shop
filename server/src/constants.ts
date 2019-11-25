export class Constants {
    public static readonly RepositoryProviders = class RepositoryProviders {
        public static readonly UserProvider: string = 'UserProvider';
        public static readonly PrintingEditionProvider: string = 'PrintingEditionProvider';
    };
    public static readonly HashSaltRounds: number = 11;
    public static readonly Configuration: string = 'Configuration';
    public static readonly SequelizeInstance = 'SEQUELIZE';
    public static readonly DefaultEnvironment: string = 'DEVELOPMENT';
    public static readonly DefaultStrategy: string = 'jsonwebtoken';
}
