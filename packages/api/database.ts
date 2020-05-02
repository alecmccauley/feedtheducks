import {
  Connection,
  ConnectionManager,
  ConnectionOptions,
  createConnection,
  getConnectionManager,
} from "typeorm";

// this is a custom class used to handle TypeORM in the serverless environment
export class Database {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
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
      const connectionOptions: ConnectionOptions = {
        name: CONNECTION_NAME,
        type: `mongodb`,
        synchronize: true,
        logging: true,
        url: process.env.DB_URL,
        entities: [__dirname + "/src/types/*.*"],
      };
      connection = await createConnection(connectionOptions);
    }

    return connection;
  }
}
