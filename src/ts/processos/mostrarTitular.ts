import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";

export default class MostrarTitular extends Processo {
    processar(): void {
        let entrada = new Entrada();
        let id = entrada.receberNumero("ID do dependente: ");

        let cliente = Armazem.InstanciaUnica.buscarClientePorId(id);

        if (!cliente || !cliente.Titular) {
            console.log("Dependente não encontrado");
            return;
        }

        console.log("\nTitular do dependente:\n");

        let impressor = new ImpressaorCliente(cliente.Titular);
        console.log(impressor.imprimir());
    }
}