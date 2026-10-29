import { Component } from '@angular/core';
// Permitir que a gente vincule o input e as variáveis / for / if
import { CommonModule }from '@angular/common';
// Permitir que o Angular gerencie o formulário | vinculo de botão com métodos
import { FormsModule } from '@angular/forms';
import { atividade } from './atividade';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
// Atributo => Variável de uma classe
  public nome = '';

// Criando uma lista de atividades
  public lista = [
  {id: 1, nome:"Dormir"},
  {id: 2, nome:"Tomar remédio"}
  ];  

  public editando: number | null = null;

  adicionar(): void {
    const atividade: atividade = {
      id: this.lista.length,
      nome: this.nome
    }
    // Eu adicionio a minha lista tudo o que na lista + atividade nova
    this.lista = [...this.lista, atividade];
    this.nome = '';

  }

  salvar(): void {
     this.lista = this.lista.map(item => item.id === this.editando ? {...item, nome: this.nome}: item);
      this.editando = null;
      this.nome = '';
  }

  // Salvo o nome da atividade que quero editar e o id deste objeto
  // Desta maneira, consigo desenha no input o nome a ser editado e 
  // salvo o id do objeto para atualiazar seu valor.
  
  editar(item: atividade): void {
    this.nome = item.nome;
    this.editando = item.id;
  }
  excluir(id: number): void {
    this.lista.splice(id, 1);
      for(let i = 0; i < this.lista.length; i++) {
        this.lista[i].id = i;
      }
  }

  cancelar(): void {
    this.nome = '';
  }

}
