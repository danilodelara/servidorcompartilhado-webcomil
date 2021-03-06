class SetMylanguageController < ApplicationController
    #English
    def en
     I18n.locale = :en
     set_session_and_redirect
    end
   
    #Portugues
    def pt
     I18n.locale = :pt
     set_session_and_redirect
    end
   
    private
    def set_session_and_redirect
     session[:locale] = I18n.locale
     redirect_to :back
     rescue ActionController::RedirectBackError
     redirect_to :root
    end
   end