import { MigrationInterface, QueryRunner } from "typeorm"

export class Initial1695865047724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE `
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
