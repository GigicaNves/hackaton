
import { Firestore } from 'firebase/firestore';
import { db, auth } from './firebaseConfig'
import { doc, collection, addDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

//Função para cadastro de usuário

export const registerUser = async (email, password, nome, cpf) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const { uid } = userCredential.user;

      const colecaoUsu = collection(db, "usuarios");

        const dados = {
          id_user: uid,
          email: email,
          nome: nome,
          cpf: cpf
        };

        //Salva os dados do usuário no Firestore
        const docUsu = await addDoc(colecaoUsu, dados);
      // Você pode adicionar mais lógica aqui, como atualizar o perfil do usuário com o nome

    }
    catch (error) {
        console.log("Erro ao criar usuário: ", error.message);
        throw error;
    }
};

// Função para login de usuário
export const loginUser = async (email, password) => {
    try {
      // Realiza o login com e-mail e senha
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      console.log('Login realizado com sucesso!');
      return userCredential.user;
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      throw error;
    }
  };

  // Função para deslogar o usuário
export const logoutUser = async () => {
    try {
      await signOut(auth);
      console.log('Usuário deslogado com sucesso!');
    } catch (error) {
      console.error('Erro ao deslogar:', error.message);
      throw error;
    }
  };

