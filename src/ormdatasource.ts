// more info: https://www.udemy.com/course/nestjs-building-real-project-api-from-scratch/learn/lecture/26416398#notes

import { DataSource } from "typeorm";
import ormConfig from "@app/ormconfig";
export default new DataSource(ormConfig);
