document.querySelector('#incluir').onclick = function(){
    if(document.querySelector('#nova-tarefa input').value.length == 0){
        alert("Adicione uma tarefa");
    }else{
        document.querySelector('#tarefas').innerHTML += `
        <div  class="tarefa">
         <span id="nome-tarefa">
            ${document.querySelector('#nova-tarefa input').value}
          </span>
          <button class="delete">
             <i class="fa fa-trash-alt"></i>
        </button>
        </div>
        `;
        
        var current_tarefas = document.querySelectorAll('.delete');
        for (var i = 0; i < current_tarefas.length;  i++){
            current_tarefas[i].onclick = function(){
                this.parentNode.remove();
      }
    }
  }
}