import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Candidate from './Candidate';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;


  @column()
  public nombreCompleto: string;

  @column()
  public correoElectronico: string;

  @column()
  public password: string;

  @hasMany(() => Candidate)
  public Experiences: HasMany<typeof Candidate>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
