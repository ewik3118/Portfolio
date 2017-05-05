class ContactController < ApplicationController

	def index
		@contact = Contact.new

	end

# def post
# 	@message = Contact.new(params[:message])
#   	if @message.valid?
#       	# Validation Success - Send email logic here
#       	flash[:notice] = "Message sent! Thank you for getting in contact, I will get back to you ASAP."
#       	redirect_to contact_url
#     	else
#       	flash[:alert] = "There was an error sending your message, please check all fields and send again."
#       	redirect_to :action => 'index'
#     end
# end


def create
	@contact = Contact.new(params[:contact])
	@contact.request = request
	

 
	if  @contact.deliver
    flash[:notice] = t('send_communicate')
    redirect_to contact_url
    else
	if @contact.valid?

	flash[:notice] = t('error_server_send')	
	render :action => "index"
	else
	
	 flash[:notice] = t('error_validation')
	render :action => "index"
		
	# @contact.nameField if !( @contact.name.blank?)		
	# @contact.surnameField if !( @contact.surname.blank?)
	# @contact.phoneField if !( @contact.phone.blank?)
	# @contact.emailField if !( @contact.email.blank?)
	# @contact.messageField if !( @contact.message_text.blank?)
	  
	end

end	
	#  if :name.empty?
	#  	puts "Dupa"
	#  end


end

private

def contact_params
	params.require(:contact).permit(:name, :email, :surname, :message_text, :phone)
end
end
