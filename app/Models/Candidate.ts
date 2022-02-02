import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User';
import Experience from './Experience';

export default class Candidate extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nombreCompleto: string;

  @column()
  public correoElectronico: string;

  @column()
  public telefono: string;

  @column()
  public fechaNacimiento: DateTime;

  @column()
  public salarioActual: number;

  @column()
  public salarioDeseado: number;

  @column()
  public localidad: string;

  @column()
  public pais: string;

  @column()
  public remoto: boolean;

  @column()
  public movilidadGeografica: boolean;

  @column()
  public activo: boolean;

  @column()
  public user: string;

  @belongsTo(() => User)
  public User: BelongsTo<typeof User>

  @hasMany(() => Experience)
  public Experiences: HasMany<typeof Experience>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
