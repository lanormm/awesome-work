# básico de git :top:

### 1. Download
https://git-scm.com/


### 2. Quickstart  

  - Crie uma pasta e navegue até ela.
  - Crie um repositório  
    `git init`
  - Crie um arquivo qualquer e salve com um conteúdo  
  - Adicione ao *ndex*
    `git add .` ou `git add <arquivo>`
  - Commite
     `git commit -m "first"`
  
  `Pronto. :thumbsup:`

### 3. Comandos básico

###### configurando ambiente inicial
  ###### git config --global user.name "Nome"  
  ###### git config --global user.email "email@email.com"   


#### iniciando um repositório

* `git init`  
  Inicia um repositório local.  
  O branch inicial é o *master*

#### gerenciando repositórios
* `git branch`  
  Lista os repositórios locais.
 
* `git branch *<nome>*`  
  Cria um novo branch sem apontar pra ele.
  
* `git checkout *<branch>*`  
  Aponta pra um branch específico.
  
* `git checkout --b *<branch>*`  
  Cria e aponta para um novo branch. 
  
* `git branch -D * <branch>*`
  Delete a um branch
  
#### gerenciando repositórios 
* `git status`  
  Lista o status dos arquivos no branch (se estão commitados,alterados ou deletados) 
  
* `git add`  
  Adiciona todos os arquivos (.) ou um arquivo específico `git add arquivo`
  
* `git commit`  
  Commita um arquivo no branch selecionado.  
  É usado sempre acompanhado de uma mensagem `git commit -m "meu commit"`
  
* `git push`  
  Transfere um commit para um repo local ou remoto
  
* `git remote -v`  
  Lista os repositórios remotos  
* `git remote add origin *<url do repositorio>*`
  Adiciona um repositório remoto
  
* `git push origin <branch>`  
   Transfere o commit para o repo remoto.
   
* `git pull origin <branch>`  
   Atualiza o repositório
   
* `git merge <branch>`  
  Realiza o merge com um branch.  
  Atenção: precisa commitar antes no repositório que está aplicando as alterações para depois  
  fazer o merge se não haverá conflitos e terá que resolver a mão (`git diff`)
  
* `gitk`
  utilitário na visualização gráfica dos repositórios.
  
* `git stash`  
  O stash é uma "mala" onde armazena as alterações feitas *até um ponto*. Ex: equivalente ao savepoint.  
  Funciona como uma pilha... Ideal para quando você está trabalhando em um branch e quer salvar o estado  
  atual do branch sem precisar commitar.  
  É muito util em algumas situações :ok_hand:
  
* `git stash list` 
  Lista os stashes.  
  
* `git stash apply`  
 Aplica o último stash. `git stash drop` remove...
 
* `git clone <url do repo>`  
 Clona um repositório 
