#  Sistema Atlantis

Sistema de gestão de clientes (titulares e dependentes) desenvolvido em **TypeScript**, com execução via terminal (CLI).

O projeto implementa operações completas de **CRUD**, seguindo uma estrutura orientada a objetos e com separação de responsabilidades.

---

##  Funcionalidades

* ✅ Cadastro de clientes titulares
* ✅ Cadastro de dependentes vinculados a um titular
* ✅ Edição de clientes
* ✅ Exclusão de clientes e dependentes
* ✅ Listagem de titulares
* ✅ Listagem de dependentes por titular
* ✅ Consulta do titular de um dependente
* ✅ Cadastro de:

  * Endereço
  * Telefone
  * Documentos

---

## Regra importante do sistema

 Todas as operações são baseadas em **ID do cliente**, e não apenas pelo nome.

* Cada cliente (titular ou dependente) possui um **ID único**
* Esse ID é utilizado para:

  * Editar dados
  * Excluir clientes
  * Consultar informações

---

## 🔎 Como descobrir o ID de um cliente

Você pode obter os IDs através da listagem:

### 📌 Para titulares:

* Acesse: `Listagens → Todos os titulares`
* O sistema exibirá **ID + Nome**

### 📌 Para dependentes:

* Acesse: `Listagens → Dependentes de um titular`
* Informe o **ID do titular**
* O sistema mostrará os dependentes com seus respectivos **IDs**

💡 Ou seja:

> Você descobre o ID do dependente a partir do titular.

---

##  Estrutura de Cadastro

### 👤 Titular

Ao cadastrar um titular, o sistema solicita:

* Nome
* Nome social
* Data de nascimento
* Endereço
* Telefones
* Documentos

---

### 👥 Dependente

Para cadastrar um dependente:

1. Informe o **ID do titular**
2. Preencha:

   * Nome
   * Nome social
   * Data de nascimento
3. Cadastre:

   * Endereço
   * Telefone
   * Documentos

---

## 🛠️ Tecnologias utilizadas

* TypeScript
* Node.js
* Programação Orientada a Objetos (POO)

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/HenryTito/AV2-TPII.git
```

---

### 2. Acesse a pasta

```bash
cd AV2-TPII
```

---

### 3. Instale as dependências

```bash
npm install
```

---

### 4. Compile o projeto

```bash
npx tsc
```

---

### 5. Execute o sistema

```bash
node src/js/app/app.js
```

---


## ⚙️ Padrões e organização

O projeto utiliza:

* Separação por camadas (processos, modelos, menus)
* Encapsulamento com getters/setters
* Reutilização de processos (ex: cadastro de endereço/documentos)
* Uso de Singleton (`Armazem`)

---

## 🎯 Destaques

* ✔ Sistema totalmente funcional via terminal
* ✔ Suporte a múltiplos dependentes por titular
* ✔ Dados organizados em memória
* ✔ Navegação por menus interativos
* ✔ Implementação completa de CRUD

---

##  Observações

* Os dados são armazenados **em memória** (não persistem após encerrar o programa)
* IDs são gerados automaticamente pelo sistema
* O sistema foi desenvolvido com foco acadêmico

---


## 👨‍💻 Autor

Henry Tito


