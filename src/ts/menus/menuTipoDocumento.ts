import Menu from "../interfaces/menu";
import Entrada from "../io/entrada";

export default class MenuTipoDocumento implements Menu {
    mostrar(): number {
        let entrada = new Entrada();

        console.clear();
        console.log(`****************************`);
        console.log(`| Cadastro de Documentos`);
        console.log(`----------------------`);
        console.log(`| 1 - CPF`);
        console.log(`| 2 - RG`);
        console.log(`| 3 - Passaporte`);
        console.log(`| 0 - Finalizar`);
        console.log(`----------------------`);

        return entrada.receberNumero("Escolha: ");
    }
}