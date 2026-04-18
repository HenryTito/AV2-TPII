import Menu from "../interfaces/menu";
import Entrada from "../io/entrada";
import MenuTipoCadastroCliente from "./menuTipoCadastroCliente";
import MenuTipoListagemClientes from "./menuTipoListagemClientes";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        let entrada = new Entrada();
        let execucao = true;

        while (execucao) {
            console.clear();
            console.log(`****************************`);
            console.log(`| Sistema Atlantis`);
            console.log(`----------------------`);
            console.log(`| 1 - Gerenciar clientes`);
            console.log(`| 2 - Listagens`);
            console.log(`| 0 - Sair`);
            console.log(`----------------------`);

            let entradaBruta = entrada.receberTexto("Escolha uma opção: ");

            
            if (entradaBruta.toLowerCase() === "bettercallsaul") {
                console.log(`
 505-503-4455

Better Call Saul!

"You don't need a criminal lawyer...
you need a CRIMINAL lawyer." 
                `);

                entrada.receberTexto("\nPressione Enter para continuar...");
                continue;
            }

            let opcao = Number(entradaBruta);

            switch (opcao) {
                case 1:
                    new MenuTipoCadastroCliente().mostrar();
                    break;

                case 2:
                    new MenuTipoListagemClientes().mostrar();
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