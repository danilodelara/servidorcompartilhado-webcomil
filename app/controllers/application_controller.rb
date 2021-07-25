class ApplicationController < ActionController::Base
    protect_from_forgery
    before_action :set_locale
   
    private
    def set_locale
     session[:locale] = params[:locale] if params[:locale].present?
     I18n.locale = session[:locale] || I18n.default_locale
    end
end
