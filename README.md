# Brook Form to Docx Conversor - Conversor de Formulários HTML em Docx

Este projeto é uma Prova de Conceito (PoC) que demonstra como gerar documentos do Word (.docx) a partir de um formulário web. Ele utiliza tecnologias modernas como Vite, TypeScript e Tailwind CSS, além das bibliotecas `docx` e `file-saver` para facilitar a criação e o download de documentos.

## Tecnologias Utilizadas

- **Vite**: Uma ferramenta de construção que visa fornecer uma experiência de desenvolvimento mais rápida para projetos modernos.
- **TypeScript**: Um superset de JavaScript que adiciona tipos estáticos à linguagem, melhorando o desenvolvimento e a manutenção de grandes bases de código.
- **Tailwind CSS**: Um framework CSS utility-first para criar designs personalizados sem sair do seu HTML.
- **docx**: Uma biblioteca JavaScript para criar documentos do Word (.docx) programaticamente.
- **file-saver**: Uma solução JavaScript para salvar arquivos no lado do cliente de forma eficiente.

## Pré-requisitos

- Node.js versão 20.10.0
- npm (acompanha a instalação do Node.js)

## Como Instalar

1. Clone este repositório para a sua máquina local usando:
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   ```
2. Navegue até o diretório do projeto clonado.
3. Execute `npm install` para instalar as dependências necessárias.

## Como Usar

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no seu navegador padrão. Preencha o formulário e clique no botão "Gerar Word" para criar e baixar o documento do Word.

## Estrutura do Projeto

- `src/components/FormToWord.tsx`: Componente do formulário que coleta os dados para geração do documento.
- `src/lib/generateDocx.ts`: Função que implementa a geração do documento do Word.