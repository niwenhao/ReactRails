Rails.application.routes.draw do
  resources :system_users
  get 'dictionary_tool/domain_type_tool'

  get 'dictionary_tool/domain_tool'

  get 'dictionary_tool/word_tool'

  resources :domain_types do
    resources :domains do
      resources :words
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
