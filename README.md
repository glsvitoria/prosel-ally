# Processo seletivo | Desafios Online

## Desafio parte 2
### <a href="https://prosel-ally.vercel.app/">Link do projeto</a>

## Objetivo: 
Criar uma interface web para marcar Destinos de Interesse.

## Resolução:
### Tecnologias utilizadas: 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
### Desenvolvimento:
&nbsp;
#### Pré projeto:
- Primeiro defini o que iria utilizar durante o projeto atrelado ao React, e como faço bastante uso e também consegue me fazer ser mais produtivo trouxe o Typescript e também vale as mesmas justicativas para o TailwindCSS que consegue me dar uma maior clareza de toda a estilização da página direto do componente. No caso do ChakraUI me surgiu o desejo de utiliza-lo já durante o desenvolvimento por conta dos components já criados de Select, Input (com messagem de erro) e o Button (com a animação de loading).
- Quando ao design da página segui o wireframe proposto com a inclusão de cores de uma palheta definida por mim, e pegando uma logo da deixar mais visual a página junto com um cabeçalho e rodapé.
- Também não poupei o uso de ícones do site para facilitar o entendimento do usuário quanto a cada funcionalidade de botão presente.
#### Estruturação da página:
- A partir daí começou o desenvolvimento em si da aplicação, criação dos campos do formulário, ajustes CSS, criação dos selects e todo o resto da estrutura.
#### Validação e conexão com api:
- Após a estrutura criada partimos para a validação dos campos, que de início pensei em utilizar alguma biblioteca para isso como React Hook Form atrelado ao yup, mas por conta de termos apenas 4 campos de input de texto optei por seguir a forma básica de useState atrelado a uma expressão regular de validação e messagens de erro que aparecem ao tentar enviar o formulário.
- Partindo para os select de destinos fiz a conexão com a api dada utilizando o axios para isso
- Com os dados na aplicação, insiro todos os países no select respectivo, e para fazer a liberação das cidades espero o país ser selecionadado para filtrar as cidades apenas daquele país. Caso nenhuma cidade seja encontrada o select terá a opção sinalizando que nenhuma cidade foi encontrada
- O botão de "Add destiny" funciona a partir do momento que temos um país e uma cidade selecionada e ao clicar será salvo aquele destino como destino de interesse e também sinalizado na tela para o usuário, que pode remover ele também caso deseje.
#### Envio do form e visualização do envio:
- Ao ter todos os campos preenchidos e pelo menos um destino definido, o formulário pode ser enviado
- Para visualizar os dados que foram enviados, criei um backend simples utilizando o Express + Typescript com um JSON para salvar os dados e rodando essa aplicação localmente no PC (acessar link: `https://github.com/glsvitoria/backend-prosel-ally` e ler o README.md para saber como rodar) e entrar na rota: ```http://localhost:3000/destination``` é possível ver o JSON com todos os dados do usuário e os destinos que foram definidos


