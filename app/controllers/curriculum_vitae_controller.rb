class CurriculumVitaeController < ApplicationController
	def download_cv
		lang = I18n.locale.to_s
  	send_file(
    	"#{Rails.root}/public/cv_"+lang+".pdf",  	
    	filename: "curriculum_vitae_"+lang+".pdf",
    	type: "application/pdf"
  	)
	end
end
