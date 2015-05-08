from django.shortcuts 				import render, redirect
from django.core.urlresolvers   	import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth         	import authenticate, login, logout

def login_usr(request):
	if request.user.is_authenticated():
		return redirect(reverse(index))
	if 'error' in request.session:
		context = {
			'error' : request.session['error']
		}
		del request.session['error']
		return render(request, 'login.html', context)
	context = {}
	return render(request, 'login.html', context)

def login_usr_do(request):
	usuario_nombre 		= request.POST['usuario']
	usuario_contrasenia = request.POST['contrasenia']
	usuario 	 		= authenticate(username=usuario_nombre, password=usuario_contrasenia)
	if usuario is not None:
		if usuario.is_active:
			login(request, usuario)
			return redirect('/inicio')
	request.session['error'] = 'Error en los datos del usuario'
	return login_usr(request)

@login_required(login_url='/login')
def logout_usr(request):
	logout(request)
	return redirect(reverse(login_usr))