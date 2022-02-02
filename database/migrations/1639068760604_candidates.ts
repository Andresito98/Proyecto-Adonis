import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Candidates extends BaseSchema {
  protected tableName = 'candidates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nombreCompleto',100);
      table.string('correoElectronico',100);
      table.string('telefono',20);
      table.date('fechaNacimiento');
      table.double('salarioActual');
      table.double('salarioDeseado');
      table.string('localidad',100);
      table.string('pais',50);
      table.boolean('remoto');
      table.boolean('movilidadGeografica');
      table.boolean('activo');
      table.string('user',100);

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
