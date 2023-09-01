export default class Gestante {
    private nome:           string;
    private endereco:       string;
    private telefone:       number;  //Modelo DDD + número tudo junto (ex.: 27987654321), apenas sugestão
    private dataNascimento: Date;    //No typescript, podemos armazenar datas instanciando um objeto da classe Date, dessa forma: Date(ano, mês, dia), o horário também pode ser armazenado, mas isso não é um requisito do projeto
    
    constructor(
        nome:           string,
        endereco:       string,
        telefone:       number,
        dataNascimento: Date,)
        {
            this.nome           = nome;
            this.endereco       = endereco;
            this.telefone       = telefone;
            this.dataNascimento = dataNascimento;
        }
}