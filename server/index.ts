import { startApolloServer } from "./utils/initialSetup";
import 'colors';
import * as database from './config/database';
import { tableCreation } from "./utils/tableCreation";
import yourRouteHandler from "./scrappers/schemes";
import { request, response } from "express";
database.connectDb();
startApolloServer();
tableCreation();
yourRouteHandler(request,response);