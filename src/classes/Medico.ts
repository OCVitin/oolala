export default class Medico {
    private crm:            string; //Documento médico com números e caracteres ('.' e '-', funciona como um CNPJ ou uma IE para médicos)
    private nome:           string;
    private telefone:       number; //Modelo DDD + número tudo junto (ex.: 27987654321), apenas sugestão
    private especialidade:  string; //Tratando de um sistema de hospital voltado à área de parto, a especialidade vai determinar se o médico pode entrar como atributo (no caso, no atributo da classe criança "obstetra", só podem ficar armazenados os dados de um médico que 'especialidade = "obstetra"')

    constructor(
        crm:            string,
        nome:           string,
        telefone:       number,
        especialidade:  string,)
        {
            this.crm            = crm;
            this.nome           = nome;
            this.telefone       = telefone;
            this.especialidade  = especialidade;
        }
}