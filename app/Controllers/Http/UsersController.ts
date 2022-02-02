import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import User from 'App/Models/User';
//import ProbandoUsers from 'Database/migrations/1639053416315_probando_users';

export default class UsersController {

    // GET - Obtiene todos los objetos, pudiendo **filtrar**
    public async index(ctx: HttpContextContract){
        return User.all(); //Select * from User
        //return 'GET Users';
    }

    // POST - Crea un objeto
    public async store({request, response}: HttpContextContract){

        const newUserSchema = schema.create({ 
            nombreCompleto: schema.string({trim: true}), //cambiado nombre por nombreCompleto
            correoElectronico: schema.string({trim: true}),
            password: schema.string({trim: true}),
        });

        const payload = await request.validate({ schema: newUserSchema});
        const skill = await User.create(payload);
        response.status(201);
        return skill;
    }

    //GET by id - Obtiene un objeto por su identificador
    public async show({params}: HttpContextContract){
        return User.findOrFail(params.id);
        //return 'GET Users: ' + params.id;
    }

    // PUT - Modifica el objeto, indicando su identificador
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const user = await User.findOrFail(params.id);
        user.nombreCompleto = body.nombreCompleto;
        user.correoElectronico = body.correoElectronico;
        user.password = body.password;

        return user.save();
        //return 'PUT Users' + params.id;
    }

    // DELETE - Borra un objeto por su identificador
    public async destroy({params}: HttpContextContract){
        const user = await User.findOrFail(params.id);

        return user.delete();
        //return 'DELETE Users' + params.id;
    }

}
