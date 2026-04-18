import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Armazem from "../dominio/armazem";

export default class ExcluirCliente extends Processo {
    processar(): void {
        let entrada = new Entrada();
        let id = entrada.receberNumero("ID do cliente: ");

        let armazem = Armazem.InstanciaUnica;

       
        let indexTitular = armazem.Clientes.findIndex(c => c.Id === id);

        if (indexTitular !== -1) {
            armazem.Clientes.splice(indexTitular, 1);
            console.log("Cliente titular e seus dependentes removidos!");
            return;
        }

        
        for (let cliente of armazem.Clientes) {
            let indexDep = cliente.Dependentes.findIndex(d => d.Id === id);

            if (indexDep !== -1) {
                cliente.Dependentes.splice(indexDep, 1);
                console.log("Dependente removido!");
                return;
            }
        }

        console.log("Cliente não encontrado!");
    }
}