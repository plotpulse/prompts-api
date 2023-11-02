import path from 'path';
import dotenv from 'dotenv';

// Set the env file (assuming it's in the root directory)
const result = dotenv.config({
  path: path.join(__dirname, '../.env'),
});

if (result.error) {
  throw result.error;
}