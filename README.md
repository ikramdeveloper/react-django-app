# React And Django App

CRUD Operations using React for frontend and Django for backend

## Run the Project

Clone the repository

#### Running the Django Project

> Move into server directory (django):
```
cd server
```

> Create virtual environment

- On WindowsOS

```
python -m venv <path to venv>
```

> Activate virtual environment 

- On WindowsOS

- Using bash:
```
source <venv>/Scripts/activate
```

- Using CMD:
```
<venv>\Scripts\activate.bat
```

- Using PowerShell:
```
<venv>\Scripts\Activate.ps1
```

> Install requirements

```
pip install django djangorestframework django-cors-headers
```

> Run migrations:

```
python manage.py makemigrations
```

```
python manage.py migrate
```

> Run on port 8000:

```
python manage.py runserver
```

### Running the ReactJS Project

> Move into client directory (ReactJS)

```
cd client
```

> Install dependencies

```
npm install
```

> Create .env file using .env.sample

> Start the project

```
npm start
```
