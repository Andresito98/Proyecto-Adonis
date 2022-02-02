import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Experiences extends BaseSchema {
  protected tableName = 'experiences'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('nivel');
      table.string('candidateRelacion');
      table.string('skillRelacion');
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
