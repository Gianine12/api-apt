const { Op } = require("sequelize");
const Visitante = require("../database/model/Visitante");

module.exports = {
    async createVisitante(req,res) {
        const data = req.body;

        const visitante = await Visitante.create({...data});

        return res.json(visitante);
    },

    async getVisitante(req,res){
        console.log(new Date(new Date() - 24 * 60 * 60 * 1000))
        const visitantes = await Visitante.findAll({
            where: {
                createdAt: {
                    [Op.lt]: new Date(),
                    [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
                }
            }
        });

        return res.json(visitantes);
    }

    // função de que retorna todos os vistantes do dia em questão e um filtro de pesquisa de data  atravez do created_at
}
