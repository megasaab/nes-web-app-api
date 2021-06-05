import {Sequelize} from "sequelize-typescript";
import {POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER} from "./constant";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PWD,
                database: process.env.POSTGRES_DB,
            });
            sequelize.addModels([]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
