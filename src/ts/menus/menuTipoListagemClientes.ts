import Menu from "../interfaces/menu";
import Entrada from "../io/entrada";
import ListagemTitulares from "../processos/listagemTitulares";
import ListagemDependentes from "../processos/listagemDependentes";
import MostrarTitular from "../processos/mostrarTitular";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        let entrada = new Entrada();
        let execucao = true;

        while (execucao) {
            console.clear();
            console.log(`****************************`);
            console.log(`| Listagem de Clientes`);
            console.log(`----------------------`);
            console.log(`| 1 - Todos os titulares`);
            console.log(`| 2 - Dependentes de um titular`);
            console.log(`| 3 - Mostrar titular de um dependente`);
            console.log(`| 0 - Voltar`);
            console.log(`----------------------`);

            let opcao = entrada.receberNumero("Escolha uma opção: ");

            switch (opcao) {
                case 1:
                    new ListagemTitulares().processar();
                    break;

                case 2:
                    new ListagemDependentes().processar();
                    break;

                case 3:
                    new MostrarTitular().processar();
                    break;

                case 0:
                    execucao = false;
                    break;

                default:
                    console.log("Opção inválida");
            }

            if (execucao) {
                entrada.receberTexto("\nPressione Enter para continuar...");
            }
        }
    }
}