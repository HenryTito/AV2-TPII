import Processo from "../abstracoes/processo";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";

export default class CadastrarDocumentosCliente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Iniciando o cadastro de documentos...')

        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')

            let tipo: TipoDocumento

            switch (this.opcao) {
                case 1:
                    tipo = TipoDocumento.CPF
                    break
                case 2:
                    tipo = TipoDocumento.RG
                    break
                case 3:
                    tipo = TipoDocumento.Passaporte
                    break
                case 0:
                    this.execucao = false
                    continue
                default:
                    console.log('Opção não entendida :(')
                    continue
            }

            let numero = this.entrada.receberTexto("Número: ")
            let data = this.entrada.receberData("Data de expedição: ")

            let documento = new Documento(numero, tipo, data)
            this.cliente.Documentos.push(documento)

            console.log("Documento cadastrado!")
        }
    }
}