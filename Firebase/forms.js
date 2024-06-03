// form.js
import { db, storage } from './firebase.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById('medicoForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const crm = document.getElementById('crm').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('data_nascimento').value;

    const medico = {
        nome,
        cpf,
        crm,
        email,
        telefone,
        dataNascimento,
    };

    try {
        await setDoc(doc(db, 'Interessados', email), medico);
        alert('Médico cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar médico:', error);
        alert('Erro ao cadastrar médico, tente novamente.');
    }
});
