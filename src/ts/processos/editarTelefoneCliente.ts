import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";

export default class EditarTelefoneCliente extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        let entrada = new Entrada();

        if (this.cliente.Telefones.length === 0) {
            console.log("Cliente não possui telefones.");
            return;
        }

        console.log("\nTelefones:");

        this.cliente.Telefones.forEach((t, i) => {
            console.log(`${i + 1} - (${t.Ddd}) ${t.Numero}`);
        });

        let indice = entrada.receberNumero("Escolha o telefone: ") - 1;

        if (indice < 0 || indice >= this.cliente.Telefones.length) {
            console.log("Opção inválida");
            return;
        }

        let telefone = this.cliente.Telefones[indice];

        console.log("\nO que deseja fazer?");
        console.log("1 - Editar");
        console.log("2 - Remover");

        let opcao = entrada.receberNumero("Opção: ");

        switch (opcao) {
            case 1:
                telefone.Ddd = entrada.receberTexto("Novo DDD: ");
                telefone.Numero = entrada.receberTexto("Novo número: ");
                console.log("Telefone atualizado!");
                break;

            case 2:
                this.cliente.Telefones.splice(indice, 1);
                console.log("Telefone removido!");
                break;

            default:
                console.log("Opção inválida");
        }
    }
}