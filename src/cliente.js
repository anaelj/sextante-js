class Cliente {
    constructor(name, yearsOld, enderecoCompleto) {
      this.name = name;
      this.yearsOld = yearsOld ;
      this.enderecoCompleto = enderecoCompleto;
    }
}

class PessoaFisica extends Cliente {
    constructor(name, yearsOld, rg, cpf, enderecoCompleto) {
      super(name, yearsOld, enderecoCompleto);
      this.rg = rg;
      this.cpf = cpf;
    }
}

class PessoaJuridica extends Cliente {
    constructor(name, yearsOld, cnpj , inscricaoEstadual, inscricaoMunicipal, enderecoCompleto) {
      super(name, yearsOld, enderecoCompleto);
      this.inscricaoEstadual = inscricaoEstadual;
      this.inscricaoMunicipal = inscricaoMunicipal;
    }
}


const pessoaFisica = new PessoaFisica ('Anael Medeiros', 12, 1188603, 95474358172, 'ciro bueno');
const pessoaJuridica = new PessoaJuridica ('Bichano', 10, '123', '123456', '123132') ;

console.log(pessoaFisica);
console.log(pessoaJuridica);