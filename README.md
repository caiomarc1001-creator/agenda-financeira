# Agenda Financeira v3.0

Primeira refatoração modular do projeto, preservando o comportamento atual.

## Como publicar no GitHub Pages

1. Apague/substitua os arquivos antigos do repositório somente depois de fazer backup.
2. Envie todos estes arquivos e pastas para o repositório:
   - `index.html`
   - `css/`
   - `js/`
   - `assets/`
   - `manifest.json`
   - `service-worker.js`
   - `firebase/firestore.rules`
3. Confirme que o arquivo principal se chama `index.html`.
4. Faça commit.
5. Abra o site com Ctrl + Shift + R no PC.
6. No celular, remova o atalho antigo e crie um novo após confirmar que a versão está correta.

## Regras do Firebase

As regras estão no arquivo `firebase/firestore.rules`. Copie o conteúdo para Firestore Database > Rules > Publish.

## Premissas preservadas

- Nuvem/Firebase como fonte principal.
- Sem localStorage como armazenamento.
- Calendário e valores visíveis preservados.
- Modo Cirurgião preservado.
- Backup em nuvem/JSON preservado.
