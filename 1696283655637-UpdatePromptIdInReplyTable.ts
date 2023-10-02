import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePromptIdInReplyTable1696283655637
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Delete records where promptId is NULL
    await queryRunner.query(`DELETE FROM reply WHERE "promptId" IS NULL`);

    // Change the column to NOT NULL
    await queryRunner.query(
      `ALTER TABLE "reply" ALTER COLUMN "promptId" SET NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverse the NOT NULL constraint
    await queryRunner.query(
      `ALTER TABLE "reply" ALTER COLUMN "promptId" DROP NOT NULL`
    );

    // Add back records if needed, although this would be tricky since they were deleted
  }
}
