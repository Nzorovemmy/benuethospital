from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import scheduleAppointment, Doctor, Billing, Patient
# Create your views here.

def home(request):
    return render(request, 'LAST_MANAGEMENT.html', {})

def treatment_care(request):
    return render(request, 'TREATMENT AND CARE.html', {})

def make_appointment(request):

    doctors = Doctor.objects.all()
    
    if request.method == 'POST':
        patient_name = request.POST['patient_name']
        appointment_date = request.POST['appointment_date']
        appointment_time = request.POST['appointment_time']
        doctor_name = request.POST['doctor_name']

        new_appointment = scheduleAppointment.objects.create(patient_name=patient_name, appointment_date=appointment_date, appointment_time=appointment_time, doctor_name=doctor_name)

        new_appointment.save()

        messages.info(request, 'Appointment added Successfully!')
        return redirect('/')

    else:

        return render(request, 'appointment_scheduling.html', {'doctors':doctors})


def billing(request):
    payments = Billing.objects.all()
    if request.method == 'POST':

        patient_name = request.POST['name']
        amount = request.POST['amount']

        new_payment = Billing.objects.create(name=patient_name, amount=amount)
        new_payment.save()
        messages.info(request, 'payment Successfully!')
        return redirect('billing')
    else:
        return render(request, 'BILLING.html', {'payments': payments})

def employee(request):
   return render(request, 'EMPLOYEE.html', {'payments': payments})



def Logout(request):
   logout(request)
   return redirect('login')

def patient(request):

    if request.method == 'POST':
        name = request.POST['patient-name']
        age = request.POST['age']
        gender = request.POST['gender']
        address = request.POST['address']
        email = request.POST['email']
        phone = request.POST['phone']
        medical_history = request.POST['medical-history']
        
        new_patient = Patient.objects.create(name=name, age=age, sex=gender, address=address, phone=phone, email=email, medical_history=medical_history)
        new_patient.save()
        messages.info(request, 'New patient added successfully!')
        return redirect('patient')
    else:
        return render(request, 'PATIENT.html')

def signup(request):

    if request.method == 'POST':
       username = request.POST['username']
       email = request.POST['email']
       password = request.POST['password']
       password2 = request.POST['password2']

       if password == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'username already exists, try using a choosing another')
                return redirect('signup')
                
            elif User.objects.filter(email=email).exists():
                messages.info(request, 'Email Already exists, try using a choosing another')
                return redirect('signup')

            else:
                user = User.objects.create_user(username=username,email=email, password=password)
                user.save()
                # login user after signup
                user_login = authenticate(username=username, password=password)
                login(request)
                return redirect('home')
       else:
          messages.info(request, 'Password do not match!') 
          return redirect('login')


    else:
        return render(request, 'signup.html')

def Login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
             messages.info(request, 'Invalid Credentials!') 
             return redirect('login')
        
    return render(request, 'LOGIN.html')
            
    return render(request, 'signup.html', {})

def medical_records(request):
    patients =Patient.objects.all()

    return render(request, 'MEDICAL_RECORDS.html', {'patients':patients})
