import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Telefone from "../modelos/telefone";
import Cliente from "../modelos/cliente";

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        let entrada = new Entrada();
        let continuar = true;

        while (continuar) {
            console.log("\n--- Cadastro de Telefone ---");

            let ddd = entrada.receberTexto("DDD: ");
            let numero = entrada.receberTexto("Número: ");

            let telefone = new Telefone(ddd, numero);
            this.cliente.adicionarTelefone(telefone);

            console.log("Telefone cadastrado!");

            let resposta = entrada.receberTexto("Adicionar outro telefone? (s/n): ");

            if (resposta.trim().toLowerCase() !== "s") {
                continuar = false;
            }
        }
    }
}