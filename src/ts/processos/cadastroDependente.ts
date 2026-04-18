import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Armazem from "../dominio/armazem";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastroTelefoneTitular from "./cadastroTelefoneTitular";

export default class CadastroDependente extends Processo {
    processar(): void {

        let idTitular = this.entrada.receberNumero("ID do titular: ");
        let titular = Armazem.InstanciaUnica.buscarClientePorId(idTitular);

        if (!titular) {
            console.log("Cliente não encontrado");
            return;
        }

        if (titular.Titular) {
            console.log("O cliente informado não é um titular");
            return;
        }

        let nome = this.entrada.receberTexto("Nome do dependente: ");
        let nomeSocial = this.entrada.receberTexto("Nome social: ");
        let dataNascimento = this.entrada.receberData("Data de nascimento: ");

        let dependente = new Cliente(nome, nomeSocial, dataNascimento);

        dependente.Titular = titular;
        titular.adicionarDependente(dependente);

        this.processo = new CadastroEnderecoTitular(dependente);
        this.processo.processar();

        this.processo = new CadastroTelefoneTitular(dependente);
        this.processo.processar();

        this.processo = new CadastrarDocumentosCliente(dependente);
        this.processo.processar();

        console.log("Dependente cadastrado!");
    }
}