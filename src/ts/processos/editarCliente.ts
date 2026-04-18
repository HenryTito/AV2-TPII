import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import EditarEndereco from "./editarEndereco";
import EditarTelefoneCliente from "./editarTelefoneCliente";
import EditarDocumentosCliente from "./editarDocumentoCliente";

export default class EditarCliente extends Processo {

    private buscarCliente(nome: string): Cliente | undefined {
        let clientes = Armazem.InstanciaUnica.Clientes;

        for (let c of clientes) {
            if (c.Nome === nome) return c;

            let dependente = c.Dependentes.find(d => d.Nome === nome);
            if (dependente) return dependente;
        }

        return undefined;
    }

    processar(): void {
        let entrada = new Entrada();

        let id = entrada.receberNumero("ID do cliente: ");
        let cliente = Armazem.InstanciaUnica.buscarClientePorId(id);

        if (!cliente) {
            console.log("Cliente não encontrado");
            return;
        }

        console.log("\nO que deseja editar?");
        console.log("1 - Nome");
        console.log("2 - Nome social");
        console.log("3 - Endereço");
        console.log("4 - Telefones");
        console.log("5 - Documentos");
        console.log("0 - Voltar");

        let opcao = entrada.receberNumero("Opção: ");

        switch (opcao) {
            case 1:
                cliente.Nome = entrada.receberTexto("Novo nome: ");
                break;

            case 2:
                cliente.NomeSocial = entrada.receberTexto("Novo nome social: ");
                break;

            case 3:
                new EditarEndereco().processar();
                break;

            case 4:
                new EditarTelefoneCliente(cliente).processar();
                 break;

            case 5:
                new EditarDocumentosCliente(cliente).processar();
                break;

            case 0:
                return;

            default:
                console.log("Opção inválida");
        }

        console.log("Cliente atualizado!");
    }
}