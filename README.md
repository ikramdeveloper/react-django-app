# Users CRUD Operations

#### Video Demo:

https://www.loom.com/share/559d3deae0da4d77b47e0b9175afef82?sid=12dab4a2-774f-4530-8a17-4e5e62abd2c4

#### Description:

Website to manage records of your workers or employees with the following features:

- Read/View data
- Add new data
- Update existing data
- Delete/Remove data

**Technologies used:**

- reactjs
- boostrap v5
- reactstrap
- react-hot-toast
- django
- django-rest-framework
- sqlite

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
