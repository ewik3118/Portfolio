Rails.application.routes.draw do
  # root to: "home#index"
  root to: '', to: redirect("/#{I18n.default_locale}/home")
  # get 'home', to: redirect("/#{I18n.default_locale}/home"), constraints: lambda { |req| !req.path.starts_with? "/#{I18n.default_locale}/" }, as: :home
# get '', to: redirect("/#{I18n.default_locale}/comments")
  # get 'home' => 'home#index', as: :home
  # get 'curriculum_vitae' => 'curriculum_vitae#index', as: :curriculum_vitae
  # get 'contact' => 'contact#index', as: :contact
  # get 'portfolio' => 'portfolio#index' , as: :portfolio
  # get 'curriculum_vitae/download_cv' , as: :download_cv 
  scope "/:locale"  do
  get 'home' => 'home#index', as: :home
# get '', to: redirect("/#{I18n.default_locale}/comments")
  # get 'home' => 'home#index', as: :home
  get 'curriculum_vitae' => 'curriculum_vitae#index', as: :curriculum_vitae
  get 'contact' => 'contact#index', as: :contact
  get 'portfolio' => 'portfolio#index' , as: :portfolio
  get 'curriculum_vitae/download_cv' , as: :download_cv 
  get 'curriculum_vitae/download_cv_pl' , as: :download_cv_pl 
  post 'contact', to: 'contact#create'

end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
