 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
 import { schema } from '@ioc:Adonis/Core/Validator';
import Skill from 'App/Models/Skill';

export default class SkillsController {

    // GET - Obtiene todos los objetos, pudiendo **filtrar**
    public async index(ctx: HttpContextContract){
        return Skill.all(); //Select * from Skill
    }

    // POST - Crea un objeto
    public async store({request, response}: HttpContextContract){
        const newSkillSchema = schema.create({ 
            nombre: schema.string({trim: true}), //cambiado nombre por nombreCompleto
        });

        const payload = await request.validate({ schema: newSkillSchema});
        const skill = await Skill.create(payload);
        response.status(201);
        return skill;
    }

    //GET by id - Obtiene un objeto por su identificador
    public async show({params}: HttpContextContract){
        return Skill.findOrFail(params.id);
    }

    // PUT - Modifica el objeto, indicando su identificador
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const skill = await Skill.findOrFail(params.id);
        skill.nombre = body.nombre;
        return skill.save();
    }

    // DELETE - Borra un objeto por su identificador
    public async destroy({params}: HttpContextContract){
        const skill = await Skill.findOrFail(params.id);
        return skill.delete();
    }
}
