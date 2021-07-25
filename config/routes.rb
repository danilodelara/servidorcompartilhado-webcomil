Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'servicosaocliente/areadeatuacao'
  get 'servicosaocliente/assistenciatecnica'
  get 'servicosaocliente/pecaseservicos'
  get 'produtos/silosplanos'
  get 'produtos/siloselevados'
  get 'produtos/tulhasgraneleiras'
  get 'produtos/maquinadelimpeza'
  get 'produtos/maquinalimpezarotativa'
  get 'produtos/secadorescoluna'
  get 'produtos/secadorcavalete'
  get 'produtos/secadorarroz'
  get 'produtos/fornalha'
  get 'produtos/fornalhavortex'
  get 'produtos/correiastransportadoras'
  get 'produtos/roscatransportadora'
  get 'produtos/elevador'
  get 'produtos/redlerrd'
  get 'produtos/redlerrdc'
  get 'institucional/sobre'
  get 'institucional/missaovisaovalores'
  get 'institucional/historia'
  get 'institucional/nossasobras'
  get 'institucional/imprensa'
  get 'institucional/governanca'
  get 'institucional/financiamento'

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    root :to => 'static_pages#index'
    get "static_pages/index"   
  end 

end
