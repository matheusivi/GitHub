class ORM{
     constructor(){
        if (new.target === ORM){
            throw new Error(`Não é possível instanciar essa classe abstrata.!`)
        }
        this.memoria = [];
    }

    #criar(id, dado){
        
        if (id === undefined || id === null && dado === undefined || dado === null){
            throw new Error ('Não valores no id ou dados.')
        }

        if (this.memoria.some(item => item.id === id)){
            throw new Error('ID já existe.')
        }

        this.memoria.push({id, ...dado });
        return `Id ${id} criado na memória com sucesso.`;
    }

    #ler(id) {

        if (id === undefined || id === null && dado === undefined || dado === null){
            throw new Error ('Não valores no id ou dados..')
        }

        const item = this.memoria.find(item => item.id === id)
        if (!item){
            throw new Error ('O id não foi encontrado')
        }

        return item;
    }

    #up(id, dado){

        if (id === undefined || id === null && dado === undefined || dado === null){
            throw new Error ('Não valores no id ou dados..')
        }

        const indice = this.memoria.findIndex(item => item.id === id);
        if (indice === -1){
            throw new Error ('Esse Id não foi encontrado')
        }

        this.memoria[indice] = { id, ...dado};
        return `Os itens no id${id} foram atualizados! `
    }

    #deleta(id){

        if (id === undefined || id === null && dado === undefined || dado === null){
            throw new Error ('Não valores no id ou dados..')
        }

        const indice = this.memoria.findIndex( item => item.id === id);
        if (indice === -1){
            throw new Error ('Esse indíce não existe.')
        }

        this.memoria.splice(indice, 1);
        return `O id ${id} foi deletado com sucesso.`;

    }

    #listarMemoria(){
        return this.memoria;
    }

    criar(id, dado){
        try{
            return this.#criar(id,  dado)
        } catch(error){
            return `Erro ao criar o item: ${error.message}`;
        }
        
    }
    
    ler(id){
        try{
            return this.#ler(id)
        }catch (error){
            return `Erro ao ler o item com ID ${id}: ${error.mensage}`
        }
        
    }

    up(id, dado){
        try{
            return this.#up(id, dado)
        }catch(error){
            return `Erro ao atualiar o item com ID ${id}: ${error.mensage}`;
        }
        
    }

    delete(id){
        try{
            return this.#deleta(id)
        } catch (error){
            return `Erro ao deletar o item com ID ${id}: ${error.mensage}`
        }
    }

    listarMemoria(){
        try {
            return this.#listarMemoria()
        } catch (error){
            return `Erro ao listar os itens na memória: ${error.mensage}`
        }
    }
}


export default ORM