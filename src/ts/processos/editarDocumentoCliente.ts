import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";

export default class EditarDocumentosCliente extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        let entrada = new Entrada();

        if (this.cliente.Documentos.length === 0) {
            console.log("Cliente não possui documentos.");
            return;
        }

        console.log("\nDocumentos:");

        this.cliente.Documentos.forEach((d, i) => {
            console.log(`${i + 1} - ${d.Tipo} | ${d.Numero}`);
        });

        let indice = entrada.receberNumero("Escolha o documento: ") - 1;

        if (indice < 0 || indice >= this.cliente.Documentos.length) {
            console.log("Opção inválida");
            return;
        }

        let documento = this.cliente.Documentos[indice];

        console.log("\nO que deseja fazer?");
        console.log("1 - Corrigir número");
        console.log("2 - Corrigir data");
        console.log("3 - Remover documento");

        let opcao = entrada.receberNumero("Opção: ");

        switch (opcao) {
            case 1:
                (documento as any).numero = entrada.receberTexto("Novo número: ");
                console.log("Número atualizado!");
                break;

            case 2:
                (documento as any).dataExpedicao = entrada.receberData("Nova data: ");
                console.log("Data atualizada!");
                break;

            case 3:
                this.cliente.Documentos.splice(indice, 1);
                console.log("Documento removido!");
                break;

            default:
                console.log("Opção inválida");
        }
    }
}