import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Armazem from "../dominio/armazem";
import Endereco from "../modelos/endereco";

export default class EditarEndereco extends Processo {

    processar(): void {
        let entrada = new Entrada();

        let id = entrada.receberNumero("ID do cliente: ");
        let cliente = Armazem.InstanciaUnica.buscarClientePorId(id);

        if (!cliente) {
            console.log("Cliente não encontrado");
            return;
        }

        console.log("\n--- Novo Endereço ---");

        let rua = entrada.receberTexto("Rua: ");
        let numero = entrada.receberTexto("Número: ");
        let bairro = entrada.receberTexto("Bairro: ");
        let cidade = entrada.receberTexto("Cidade: ");
        let estado = entrada.receberTexto("Estado: ");
        let codigoPostal = entrada.receberTexto("Código postal: ");

        let novoEndereco = new Endereco(
            rua,
            numero,
            bairro,
            cidade,
            estado,
            codigoPostal
        );

        cliente.Endereco = novoEndereco;

        console.log("Endereço atualizado!");
    }
}