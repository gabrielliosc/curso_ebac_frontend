function handleForm(event) {
    event.preventDefault();

    const numeroA = document.getElementById('campoA');
    const numeroB = document.getElementById('campoB');

    if (Number(numeroB.value) > Number(numeroA.value)) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Formulário inválido!');
    }
}

const button = document.getElementById('enviar');
button.addEventListener('click', handleForm);
