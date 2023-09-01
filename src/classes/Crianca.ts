import Gestante from "./Gestante";
import Medico from "./Medico";

export default class Crianca {
    private nome:           string;
    private dataNascimento: Date;       //No typescript, podemos armazenar datas instanciando um objeto da classe Date, dessa forma: Date(ano, mês, dia), o horário também pode ser armazenado, mas isso não é um requisito do projeto
    private peso:           number;
    private altura:         number;
    private maeResp:        Gestante;   //Armazenará o objeto que representa a mãe responsável pelo bebê (criar o objeto da mãe antes do da criança)
    private obstetra:       Medico;     //Armazenará o objeto que representa o médico responsável pelo parto do bebê (criar o objeto do médico antes do da criança)

    constructor(
        nome:           string, 
        dataNascimento: Date, 
        peso:           number, 
        altura:         number,
        maeResp:        Gestante,
        obstetra:       Medico)
        {
            this.nome            = nome;
            this.dataNascimento  = dataNascimento;
            this.peso            = peso;
            this.altura          = altura;
            this.maeResp         = maeResp;
            this.obstetra        = obstetra;
        }
}