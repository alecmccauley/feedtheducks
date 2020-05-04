import {
  Connection,
  ConnectionManager,
  ConnectionOptions,
  createConnection,
  getConnectionManager,
} from "typeorm";
import Feeding from "./src/types/feeding";
import RecurringFeeding from "./src/types/recurringFeeding";

// this is a custom class used to handle TypeORM in the serverless environment
export class Database {
  private connectionManager: ConnectionManager;
  private mock: boolean;
  constructor(mock?: boolean) {
    this.connectionManager = getConnectionManager();
    this.mock = mock;
  }

  public async getConnection(): Promise<Connection> {
    const CONNECTION_NAME = `default`;

    let connection: Connection;

    // check and see if there is already a connection established to the database
    // this might be the case if the API has been invoked recently
    if (this.connectionManager.has(CONNECTION_NAME)) {
      connection = await this.connectionManager.get(CONNECTION_NAME);

      if (!connection.isConnected) {
        connection = await connection.connect();
      }
    }
    // otherwise create a new connection to the database using the data stored in
    // environment variables
    else {
      let connectionOptions: ConnectionOptions;
      if (!this.mock) {
        connectionOptions = {
          name: CONNECTION_NAME,
          type: `mongodb`,
          synchronize: true,
          logging: true,
          url: process.env.DB_URL,
          entities: [Feeding, RecurringFeeding],
        };
      } else {
        connectionOptions = {
          type: "sqlite",
          database: ":memory:",
          dropSchema: true,
          synchronize: true,
          entities: [Feeding, RecurringFeeding],
        };
      }
      connection = await createConnection(connectionOptions);
    }

    return connection;
  }
}
