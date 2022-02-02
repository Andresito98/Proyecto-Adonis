 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
 import { schema } from '@ioc:Adonis/Core/Validator';
import Candidate from 'App/Models/Candidate';

export default class CandidatesController {

    // GET - Obtiene todos los objetos, pudiendo **filtrar**
    public async index(ctx: HttpContextContract){
        return Candidate.all(); //Select * from Candidate
    }

    // POST - Crea un objeto
    public async store({request, response}: HttpContextContract){
        const newCandidateSchema = schema.create({

            nombreCompleto: schema.string({trim: true}),
            correoElectronico: schema.string({trim: true}),
            telefono: schema.string({trim: true}),
            fechaNacimiento: schema.date(),
            salarioActual: schema.number(),
            salarioDeseado: schema.number(),
            localidad: schema.string({trim: true}),
            pais: schema.string({trim: true}),
            remoto: schema.boolean(),
            movilidadGeografica: schema.boolean(),
            activo: schema.boolean(),
            user: schema.string({trim: true}),

        });

        
        const payload = await request.validate({ schema: newCandidateSchema});
        const candidate = await Candidate.create(payload);
        response.status(201);
        return candidate;
    }

    //GET by id - Obtiene un objeto por su identificador
    public async show({params}: HttpContextContract){
        return Candidate.findOrFail(params.id);
    }

    // PUT - Modifica el objeto, indicando su identificador
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const candidate = await Candidate.findOrFail(params.id);

        candidate.nombreCompleto = body.nombreCompleto;
        candidate.correoElectronico = body.correoElectronico;
        candidate.telefono = body.telefono;
        candidate.fechaNacimiento = body.fechaNacimiento;
        candidate.salarioActual = body.salarioActual;
        candidate.salarioDeseado = body.salarioDeseado;
        candidate.localidad = body.localidad;
        candidate.pais = body.pais;
        candidate.remoto = body.remoto;
        candidate.movilidadGeografica = body.movilidadGeografica;
        candidate.activo = body.activo;
        candidate.user = body.user;        

        return candidate.save();
    }

    // DELETE - Borra un objeto por su identificador
    public async destroy({params}: HttpContextContract){
        const candidate = await Candidate.findOrFail(params.id);
        return candidate.delete();
    }
}
