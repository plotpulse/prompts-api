import path from 'path';
import dotenv from 'dotenv';
import { parse } from 'ts-command-line-args';



interface IArgs{
    env: string;
}

const args = parse<IArgs>({
    env: {
        type: String,
        defaultValue: 'development',
        alias: 'e',
        optional: true
    },
})

const result2 = dotenv.config({

})