import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';
import Experience from 'App/Models/Experience';

export default class ExperiencesController {

    // GET - Obtiene todos los objetos, pudiendo **filtrar**
    public async index(ctx: HttpContextContract){
        return Experience.all(); //Select * from Skill
    }

    // POST - Crea un objeto
    public async store({request, response}: HttpContextContract){
        const newExperienceSchema = schema.create({ 

            nivel: schema.string({trim: true}),
            candidateRelacion: schema.number(), //aqui da puede dar algun error por no tener parametros dentro
            skillRelacion: schema.number(), //aqui da puede dar algun error por no tener parametros dentro
        });

        const payload = await request.validate({ schema: newExperienceSchema});
        const experiences = await Experience.create(payload);
        response.status(201);
        return experiences;
    }

    //GET by id - Obtiene un objeto por su identificador
    public async show({params}: HttpContextContract){
        return Experience.findOrFail(params.id);
    }

    // PUT - Modifica el objeto, indicando su identificador
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const experiences = await Experience.findOrFail(params.id);

        experiences.nivel = body.nombre;
        experiences.candidateRelacion = body.nombre;
        experiences.skillRelacion = body.nombre;
        return experiences.save();
    }

    // DELETE - Borra un objeto por su identificador
    public async destroy({params}: HttpContextContract){
        const experiences = await Experience.findOrFail(params.id);
        return experiences.delete();
    }
}
