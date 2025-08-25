# 🛒📋 Aplicativo Mobile de Lista Compras (Protótipo)

O aplicativo é voltado para pessoas que queiram organizar suas listas de compras de maneira prática e eficiente, substituindo o tradicional papel e caneta. Seu público-alvo abrange usuários que realizam compras diversas (supermercado, presente, materiais, etc.), especialmente de maneira regular, e desejam uma solução móvel, acessível, simples e visualmente organizada, com a possibilidade de criar múltiplas listas categorizadas e de acompanhar seus itens comprados e pendentes.

---

## 🖼️ Imagens da Interface

### • Tela inicial:

<img width="473" height="1025" alt="listacompras_tela_inicial" src="https://github.com/user-attachments/assets/ccdea3e4-4e00-4141-95b0-e6995a3bf17b" />

### • Menu lateral:

<img width="473" height="1025" alt="listacompras_menu_lateral" src="https://github.com/user-attachments/assets/356a008f-79a4-4a6b-b843-9c0630c54370" />

### • Campo para criar uma nova lista:

<img width="473" height="1025" alt="listacompras_criar_lista" src="https://github.com/user-attachments/assets/f4d26b44-bcf1-40b2-b544-d03cbcd3d83f" />

### • Opções de manipulação de lista (três pontos):

<img width="473" height="1025" alt="listacompras_opcoes_lista" src="https://github.com/user-attachments/assets/ab8719a8-8b60-48d7-a91f-7fdce173cd06" />

### • Lista de compras acessada, com itens já adicionados e botão de checkbox:

<img width="473" height="1025" alt="listacompras_lista" src="https://github.com/user-attachments/assets/51ae5900-a77e-4e46-bc2a-b78bfe1b66b3" />

### • Campo para adicionar item na lista acessada:

<img width="473" height="1025" alt="listacompras_incluir_item" src="https://github.com/user-attachments/assets/d9102ff7-cd53-45ee-adbf-238dc6133adc" />

### • Opções de manipulação de item de lista (três pontos):

<img width="473" height="1025" alt="listacompras_opcoes_item" src="https://github.com/user-attachments/assets/a10741ce-714c-461e-be8c-6d6403cb8549" />

---

## 🔗 Visualização na Plataforma Expo

É possível interagir com este protótipo de interface por meio da "Preview" do projeto no Snack Expo online:

```
https://snack.expo.dev/@a-cn/mapa_listacompras
```

---

## 🤳 Interações

### • Criação de lista:
O usuário acessa o aplicativo e toca no ícone “+” (Adicionar), localizado no canto superior direito da tela inicial. Ele então digita o nome que desejar para a sua nova lista de compras e confirma o cadastro dessa nova lista, tocando no ícone de “✓”. Desse modo, sua lista será salva e aparecerá na tela inicial do aplicativo, onde poderá ser acessada para adicionar itens e/ou visualizar os já adicionados.

O usuário também poderá cancelar a ação, tocando no ícone de “x”, que fechará a janela com o campo de digitação.

##

### • Acessar a lista e seus respectivos itens:
Se o usuário tiver listas criadas, elas aparecerão na tela inicial por padrão e, para acessar o conteúdo de uma determinada lista, ele deverá tocar sobre seu nome. Assim, será redirecionado para a página de listagem e inclusão de itens.

Ele também pode utilizar o ícone de lupa (pesquisa), localizado no canto superior direito da tela, para buscar uma lista a partir de seu nome.

Ao acessar uma lista, o usuário verá que os itens podem ser classificados em duas categorias: a primeira é observada na parte superior da listagem e mostra os itens que ainda não foram adquiridos; enquanto que a segunda se encontra após os itens pendentes, sendo identificada pela descrição “Comprados”, e reúne os itens que já foram comprados e tiveram suas caixas (checkboxes) marcadas.

##

### • Inserir itens na lista:
Após acessar uma lista, o usuário poderá inserir itens dentro dela. Para isso, deve tocar no ícone de “+” (Adicionar), disposto no canto superior direito da tela. Em seguida, deverá digitar o nome do item e confirmar, tocando no ícone de “✓”. Assim, o item será adicionado à lista selecionada.

O usuário também poderá cancelar a ação, tocando no ícone de “x”, que fechará a janela com o campo de digitação.

Caso deseje encontrar um determinado item de maneira mais rápida, o usuário deve tocar no ícone de lupa (pesquisa) e digitar o nome do item desejado. O sistema então fará uma busca em toda a lista e trará o(s) item(ns) que coincidir(em) com o texto inserido no campo de pesquisa.

##

### • Marcar item como comprado:
Para marcar um item como comprado, o usuário deve tocar no ícone de caixa vazia (checkbox), que fica ao lado direito do nome do item.	Desta forma, o item será automaticamente movido para a lista de “Comprados”, localizada no final da tela.

Caso o usuário tenha marcado a caixa (checkbox) por engano, e deseje que um determinado item retorne para a lista superior (itens ainda não comprados), ele deverá então localizar o item desejado, na lista identificada pela descrição “Comprados”, e tocar no ícone de caixa marcada (checkbox), assim desmarcando-a e fazendo o item retornar para a lista na parte superior da tela.

##

### • Editar item de lista:
Caso deseje alterar o texto de um item já adicionado na lista, o usuário poderá tocar no ícone de três pontos, que fica ao lado direito da checkbox (caixa de marcação) na linha do item, e selecionar a opção “Editar”. Isso abrirá uma janela com um campo de digitação preenchido com o texto atual do item registrado até então, permitindo que o usuário reescreva sobre este.

Feito isso, deverá tocar no ícone de “✓” para salvar as alterações e, assim, atualizar o item na lista selecionada. Ou tocar no ícone de “x”, que fechará a janela com o campo de digitação, cancelando o processo.

##

### • Excluir item da lista:
Caso o usuário deseje excluir um item de uma lista, ele poderá fazer isso tocando no ícone de três pontos, que fica ao lado direito da checkbox (caixa de marcação) na linha do item. Ali aparecerá a opção “Excluir” e, ao tocar nela e confirmar a ação, o item desejado será removido totalmente da lista.

##

### • Retornar à tela inicial:
Para retornar à tela inicial, onde estão dispostas todas as listas cadastradas, o usuário poderá tocar no ícone “<” (Retornar), localizado no canto superior esquerdo da tela. 

##

### • Editar nome da lista:
Caso o usuário queira alterar o nome de uma lista já criada, ele poderá fazer isso por meio do ícone de edição, que fica ao lado do nome de cada lista, ou pela opção “Renomear”, acessada por meio do ícone de três pontos. Clicando nesse ícone ou nessa opção, o usuário deverá digitar o novo nome da lista e confirmar a escolha. Com isso, o nome da lista será atualizado.

##

### • Excluir lista:
Para excluir uma lista, o usuário deve tocar no ícone de três pontos, que fica logo ao lado do ícone de edição, selecionar a opção “Excluir” e confirmar a ação. Feito isso, a lista e todos os itens dentro dela serão excluídos, ficando disponível na “Lixeira” por um determinado período de tempo.

##

### • Arquivar lista:
Caso o usuário deseje arquivar uma lista, de modo que ela não apareça na tela inicial, mas que ainda seja acessível, ele deve tocar no ícone de três pontos, localizado ao lado do ícone de edição, e selecionar a opção “Arquivar”. Em seguida, deverá confirmar esta ação. A lista será então removida da tela inicial e ficará disponível na tela de “Listas Arquivadas”.

##

### • Acessar as listas arquivadas:
Para acessar todas as listas que já foram arquivadas, o usuário deve abrir a tela inicial do sistema e tocar no ícone de três riscos horizontais, que fica localizado no canto superior esquerdo da tela. Ao fazer isso, um menu lateral é mostrado e a opção “Arquivadas” deve ser selecionada. Com isso, o usuário é redirecionado para uma tela na qual poderá ver todas as listas que foram arquivadas.

##

### • Acessar as listas excluídas:
Para acessar todas as listas que já foram excluídas, o usuário deve abrir a tela inicial do sistema e tocar no ícone de três riscos horizontais, que fica localizado no canto superior esquerdo da tela. Ao fazer isso, um menu lateral é mostrado e a opção “Lixeira” deve ser selecionada. Com isso, o usuário é redirecionado para uma tela na qual poderá ver todas as listas que já foram excluídas e restaurá-las ou excluí-las permanentemente, se desejar.

##

### • Botão “Ordenar”:
Tanto a página inicial, que exibe os conjuntos de listas criadas pelo usuário, quanto as próprias listagens de itens dentro destas, possuem um elemento chamado “Ordenar”, que permite organizar os registros existentes de acordo com as necessidades do usuário. Ao tocar nele, é possível escolher organizar os registros em ordem alfabética ou cronológica, de maneira crescente ou decrescente.

##

### • Caminhos do menu lateral:
Ao tocar no ícone de três riscos horizontais, encontrado na tela inicial do aplicativo, é possível acessar o menu lateral do sistema, o qual permite acesso aos seguintes caminhos:

<b>a)	“Todas as listas”:</b> direciona para a tela inicial do aplicativo;

<b>b)	“Arquivadas”:</b> direciona para a tela de “Listas Arquivadas”, mencionada anteriormente;

<b>c)	“Lixeira”:</b> direciona para tela de acesso às listas excluídas;

<b>d)	“Configurações”:</b> direciona o usuário à tela em que poderá configurar suas preferências gerais de uso do aplicativo.
