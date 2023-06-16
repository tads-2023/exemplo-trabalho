class CriarUsuarioController {
    constructor() {
        this.form = document.querySelector("#form-criar-user");
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            let bodyDaRequest = {
                nome: document.querySelector("#nome").value,
                email: document.querySelector("#email").value,
                senha: document.querySelector("#senha").value,
                dataNascimento: document.querySelector("#data-nascimento").value
            };

            fetch("http://localhost:3000/criar-usuario", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(bodyDaRequest)
            });
        })
    }
}