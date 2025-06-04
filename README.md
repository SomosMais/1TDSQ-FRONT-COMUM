# 🚀 1TDSQ-FRONT-COMUM
 

Este é um projeto front-end desenvolvido com [Next.js](https://nextjs.org/) e estilizado utilizando [Tailwind CSS](https://tailwindcss.com/). Ele serve como base comum para aplicações da equipe 1TDSQ da SomosMais. Esse é o WEB APP para usuários.

## 🧰 Tecnologias Utilizadas

* [Next.js](https://nextjs.org/) – Framework React para produção.
* [Tailwind CSS](https://tailwindcss.com/) – Framework de utilitários CSS.
* [TypeScript](https://www.typescriptlang.org/) – Superset do JavaScript que adiciona tipagem estática.

  ## 🚀 Como executar o totem localmente

### ✅ Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

### 📦 Passos para rodar localmente 

### Clone a API em JAVA
```bash
# Clone o repositório
git clone https://github.com/SomosMais/1TDSQ-JAVA
````
---
## 🔧 Como rodar a API Java (Quarkus) no IntelliJ IDEA

### ✅ Pré-requisitos

* **Java 17** instalado ([OpenJDK 17](https://jdk.java.net/17/))
* **Maven** instalado ou configurado pelo IntelliJ
* **IntelliJ IDEA** (Community ou Ultimate)
* Conexão ativa com o banco de dados Oracle
* A API clonada localmente

---

### 💡 Instalar o plugin do Quarkus no IntelliJ

1. Abra no IntelliJ IDEA a pasta do arquivo da API "projeto-challenge-api"
2. Vá até `File > Settings > Plugins`

 ![image](https://github.com/user-attachments/assets/705c1ef7-0dcf-4afe-8241-1f0292099a5b)

3. Busque por **Quarkus** no Marketplace

![image](https://github.com/user-attachments/assets/6ec2b20b-3477-42e2-af0d-ac8b68856ed3)


4. Clique em **Install**
5. Reinicie o IntelliJ após a instalação

---

### 🚀 Executar a API no IntelliJ

1. **Importe o projeto:**

   * Vá em `File > Open` e selecione a pasta do projeto da API Java
   * O IntelliJ reconhecerá o projeto Maven automaticamente

  ![image](https://github.com/user-attachments/assets/cd72b62a-3bcf-4872-89d4-b97cc87ab498)


2. **Verifique o arquivo `pom.xml`:**

   * Certifique-se de que todas as dependências estão resolvidas (ícone verde no canto superior direito)

3. **Configure as variáveis de ambiente (se necessário):**

   * Como `QUARKUS_DATASOURCE_USERNAME`, `QUARKUS_DATASOURCE_PASSWORD` e `QUARKUS_DATASOURCE_JDBC_URL`
   * Isso pode ser feito dentro da aba `Edit Configurations` > `Application` > `Environment variables`

4. **Execute a API pelo RUN:**

   * RUN > Selecione o run com Quarkus

![image](https://github.com/user-attachments/assets/f5e56bd9-ce26-4488-a7ff-43ecf77d3d8e)


5. **Execute a API pelo TERMINAL:**

   * TERMINAL > Digite:  mvn quarkus:dev
   * ⚠️ Verifique se está no diretório correto, caso execute o código fora do repositória da API não irá funcionar

6. **A API estará disponível em:**

   ```
   http://localhost:8080
   ```

---

### 📌 Endpoints úteis (JAVA)

* **Login: http://localhost:8080/empresa/login
* **Cadastro: http://localhost:8080/empresa/cadastrar
* **Redefinir Senha: http://localhost:8080/empresa/atualizar-senha


> Garanta que o CORS está habilitado no projeto Quarkus (`application.properties`):

```properties
quarkus.http.cors=true
```
---

## 🔌 Integração com a API

> ⚠️ O web app do usuário consome endpoints da **API Java com Quarkus**. Certifique-se de que a API esteja rodando localmente (porta 8080 por padrão) ou altere os endpoints do frontend para apontar para uma URL pública com CORS liberado.

### ⚙️ Alterando a URL da API

A URL da API pode ser alterada nos arquivos de `fetch()` localizados nos componentes que consomem a API.

---

### 📌 Endpoints úteis (PYTHON RENDER)

* A API hopedada no RENDER

* **numero_ongs
* **GET https://onetdsq-python.onrender.com/numero_ongs

* **numero_pedido_concluidos
* **GET https://onetdsq-python.onrender.com/numero_pedidos_concluidos

* **mostrar_ongs
* **GET https://onetdsq-python.onrender.com/mostrar_ongs

* **status_pedido
* **GET https://onetdsq-python.onrender.com/status_pedido/<int:id>

* **historico_cliente
* **GET https://onetdsq-python.onrender.com/historico/cliente/<email>

* **canelar_pedido
* **GET https://onetdsq-python.onrender.com/cancelar_pedido/<int:id>

* **atualizar_pedido
* **PATCH https://onetdsq-python.onrender.com/atualizar_pedido/<int:id>


---


## 🛠️ Como Iniciar o Projeto

###  VERCEL
https://1-tdsq-front-comum-t5ae.vercel.app/

> ⚠️ Para o web app hospedado no vercel, deixe a API de JAVA executando, lembrando que ele é local, portanto deve estar rodando pelo IntelliJ
> ⚠️ Por estar hospedada no RENDER a API tem um delay para carregar dados de no máximo 50 segundos.

###  Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/SomosMais/1TDSQ-FRONT-COMUM.git
   cd 1TDSQ-FRONT-COMUM
   ```



2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn
   # ou
   pnpm install
   # ou
   bun install
   ```



3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```



4. **Acesse no navegador:**

   Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto em execução.

## 📁 Estrutura de Pastas

```
├── public/             # Arquivos públicos (imagens, favicon, etc.)
├── src/
│   └── app/            # Componentes e páginas da aplicação
├── tailwind.config.js  # Configurações do Tailwind CSS
├── next.config.ts      # Configurações do Next.js
├── tsconfig.json       # Configurações do TypeScript
└── package.json        # Dependências e scripts do projeto
```



## 🧪 Scripts Disponíveis

* `npm run dev` – Inicia o servidor de desenvolvimento.
* `npm run build` – Cria uma versão otimizada para produção.
* `npm run start` – Inicia o servidor em modo de produção.
* `npm run lint` – Executa o ESLint para análise de código.

---
# RESPONSIVIDADE DO PROJETO
  
---
# LINK DO VÍDEO

---
---
# LINK DO PROJETO EMPRESA
https://github.com/SomosMais/1TDSQ-FRONT-EMPRESA
---
## 🪖INTEGRANTES
*CLEYTON ENRIKE DE OLIVEIRA – RM 560485
*MATHEUS HENRIQUE NASCIMENTO DE FREITAS – RM 560442
*PEDRO HENRIQUE DE SOUZA SENA – RM 561178
