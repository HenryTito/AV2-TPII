import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public buscarClientePorId(id: number): Cliente | undefined {
    for (let c of this.clientes) {
        if (c.Id === id) return c;

        let dep = c.Dependentes.find(d => d.Id === id);
        if (dep) return dep;
    }
    return undefined;
}

}