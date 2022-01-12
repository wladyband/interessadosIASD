const locators = {
    CADASTRAR_DISCUPULOS: {
        VARIFICAR_FLAVIA_COMO_SELECIONADO: '#pr_id_5_label',
        CLICAR_NO_CALENDARIO: '.p-calendar > .p-inputtext',
        SELECIONAR_DATA: '.p-datepicker-today > .p-ripple',
        ESCREVER_NOME_DO_DISCIPULO: '.col-9 > .p-inputtext',
        ESCREVER_O_ENDERECO_DO_DISCIPULO: '.col-12.col-3 > .p-inputtext',
        SELECIONAR_TIPO_INTERESSE: '.col-12.col-6 > .p-element > .p-dropdown > .p-dropdown-trigger',
        CLICAR_NO_TIPO_INTERESSE: '[ng-reflect-label="Frequenta a igreja e não há im"] > .p-ripple',
        SELECIONAR_TIPO_ATENDIMENTO: ':nth-child(6) > .p-element > .p-dropdown > .p-dropdown-label',
        CLICAR_NA_OPCAO_PEQUENO_GRUPO: '[ng-reflect-label="Pequeno Grupo"] > .p-ripple',
        SELECIONAR_DISCIPULADORES: '.col-4 > .p-element > .p-dropdown > .p-dropdown-label',
        SELECIONAR_FLAVIA: '[ng-reflect-label="Flávia"] > .p-ripple',
        ESCREVER_O_TELEFONE: '.ng-untouched > .p-inputtext',
        ESCREVER_A_ORIGEM: ':nth-child(10) > .p-inputtext',
        CLICAR_NO_BOTAO_SALVAR: '[label="Salvar"]',
        MENSAGEM_SUCESSO: '.p-toast-message-content'
     },
    DIT: {
        BTN_INCLUIR_DIT: ':nth-child(1) > .btn',
        SELECT_TIPO_PROCESSO: "//select2[@formcontrolname='idTipoProcesso']//span[@class='select2-selection__rendered']",
        ESCREVER_TIPO_PROCESSO: '.select2-search__field',
        BTN_TIPO_PROCESSO: "//li[. ='Doação']",
        SELECT_MUNICIPIO: "//select2[@formcontrolname='codMunicipioProcesso']//span[@class='select2-selection__rendered']",
        ESCREVER_O_MUNICIPIO: "//input[@class='select2-search__field']",
        BTN_MUNICIPIO: "//li[. ='ALEGRETE']",
        BTN_SUBMETER_INCLUCAO_DIT: '.btn-primary',
        CONFIRMACAO_INCLUSAO: "//div[@class='toast-message ng-star-inserted']",
        FECHAR_MENSAGEM_DE_SUCESSO: '.toast-close-button > .ng-tns-c9-0'
    },
    SISTEMA: {
        MENU: 'p-button.p-element > .p-ripple',
        FECHAR_MENU: '.p-sidebar-close-icon',
        DASHBOARD: '.dashboard > span'
    }
}

export default locators;