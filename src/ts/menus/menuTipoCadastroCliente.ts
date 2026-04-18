import Menu from "../interfaces/menu";
import Entrada from "../io/entrada";
import CadastroClienteTitular from "../processos/cadastroClienteTitular";
import CadastroDependente from "../processos/cadastroDependente";
import EditarCliente from "../processos/editarCliente";
import ExcluirCliente from "../processos/excluirCliente";

export default class MenuTipoCadastroCliente implements Menu {
    mostrar(): void {
        let entrada = new Entrada();
        let execucao = true;

        while (execucao) {
            console.clear();
            console.log(`****************************`);
            console.log(`| Cadastro de Clientes`);
            console.log(`----------------------`);
            console.log(`| 1 - Cadastrar titular`);
            console.log(`| 2 - Cadastrar dependente`);
            console.log(`| 3 - Editar cliente`);
            console.log(`| 4 - Excluir cliente`);
            console.log(`| 0 - Voltar`);
            console.log(`----------------------`);

            let opcao = entrada.receberNumero("Escolha uma opção: ");

            switch (opcao) {
                case 1:
                    new CadastroClienteTitular().processar();
                    break;

                case 2:
                    new CadastroDependente().processar();
                    break;

                case 3:
                    new EditarCliente().processar();
                    break;

                case 4:
                    new ExcluirCliente().processar();
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