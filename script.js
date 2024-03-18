     function validateLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        if (username.trim() === '' || password.trim() === '') {
            window.alert("Por favor, preencha todos os campos.");
        } else {
          
            window.location.href = "cadastro_atividades.html";
        }
}




function validateCadastroUsuario() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
        
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert("Por favor, preencha todos os campos.");

    } else {
    alert("Usuário cadastrado com sucesso!");
        window.location.href = "index.html";
        }
    }
    

    function cadastrar() {
        var nomePessoa = document.getElementById("nomePessoa").value;
        var telefone = document.getElementById("telefone").value;
        var email = document.getElementById("email").value;
        var rua = document.getElementById("rua").value;
        var numero = document.getElementById("numero").value;
        var complemento = document.getElementById("complemento").value;
        var cidade = document.getElementById("cidade").value;
    
        
        if (nomePessoa.trim() !== '' || telefone.trim() !== '' || email.trim() !== '' || rua.trim() !== '' || numero.trim() !== '' || cidade.trim() !== '') {
            
            alert("Pessoa cadastrada com sucesso!");
        } else {
            alert("Por favor, preencha pelo menos um campo para cadastrar a pessoa.");
            return; 
        }
    
        var nomeAtividade = document.getElementById("nomeAtividade").value;
    
        
        if (nomeAtividade.trim() !== '') {
            alert("Atividade cadastrada com sucesso!");
        } else {
            alert("Por favor, preencha os campos para cadastrar pessoa e atividade.");
        }
    }
    
    