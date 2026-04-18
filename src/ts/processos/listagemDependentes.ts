import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";

export default class ListagemDependentes extends Processo {
    processar(): void {
        let entrada = new Entrada();
        let id = entrada.receberNumero("ID do titular: ");
        let cliente = Armazem.InstanciaUnica.buscarClientePorId(id);

        
        if (!cliente) {
            console.log("Cliente não encontrado");
            return;
        }

        if (cliente.Titular) {
            console.log("O cliente informado não é um titular");
            return;
        }

        console.log(`\nDependentes do titular ${cliente.Nome} (ID: ${cliente.Id}):\n`);

        if (cliente.Dependentes.length === 0) {
            console.log("Nenhum dependente cadastrado.");
            return;
        }

        cliente.Dependentes.forEach(d => {
            console.log(`ID: ${d.Id}`);
            let impressor = new ImpressaorCliente(d);
            console.log(impressor.imprimir());
        });
    }
}