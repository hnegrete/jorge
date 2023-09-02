import { config } from 'dotenv';
import { executeStudentCrudOperations } from './studentsCrud.js';

config();
console.log(process.env.DB_URI);
await executeStudentCrudOperations();
