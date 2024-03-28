import { startApolloServer } from "./utils/initialSetup";
import 'colors';
import * as database from './config/database';
import { tableCreation } from "./utils/tableCreation";
database.connectDb();
startApolloServer();
tableCreation();
