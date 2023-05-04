# mern-classified-with-firebase
Membuat aplikasi classified menggunakan MERN dan Firebase

[Github repo](https://github.com/gurnitha/mern-classified-with-firebase)


## 1. Setup


#### 1.1 Create React app with hello world

        modified:   .gitignore
        modified:   README.md
        new file:   package-lock.json
        new file:   package.json
        new file:   public/favicon.ico
        new file:   public/index.html
        new file:   public/logo192.png
        new file:   public/logo512.png
        new file:   public/manifest.json
        new file:   public/robots.txt
        new file:   src/App.css
        new file:   src/App.js
        new file:   src/firebaseConfig.js
        new file:   src/index.css
        new file:   src/index.js


#### 1.2 Configuring db with firebase

       Aktivitas:

       1. Signup dan login
       console.firebase.google.com
       my-credentials:
       email: ........63@gmail.com 
       password: ........
       2. Create:
       - Authentication
       - Firestore database
       - Storage 


#### 1.3 Instal modules

       Aktivitas:

       > npm install firebase react-router-dom moment react-moment react-icons 


#### 1.4 Project settings in firebase and copy the settings

       Aktivitas:

       1. Membuat project settings di firebase

       2. Copy project settings dan buat file src/firebaseConfig.js

       3. Paste the code di src/firebaseConfig.js

       modified:   README.md
       modified:   src/firebaseConfig.js


#### 1.5 Membuat .env file dan konfigurasi database

       Aktivitas:

       1. Membuat .env dan .env-example file
       2. Mengisi konfigurasi pada .env dan firebaseConfig.js
       3. Testing :)

        new file:   .env-example
        modified:   .gitignore
        modified:   src/firebaseConfig.js


#### 1.6 Add bootstrap cdn css and cdn js

       Aktivitas:

       1. Add bootstrap cdn css and cdn js

       modified:   README.md
       modified:   public/index.html


## 2. Authentication 

       modified:   README.md


#### 2.1 Create components/Navbar.js

        modified:   README.md
        new file:   src/components/Navbar.js


#### 2.2 Modified Navbar.js and add it to App.js

        modified:   src/App.js
        modified:   src/components/Navbar.js


#### 2.3 Create src/pages/Home.js and add it to App.js

        modified:   README.md
        modified:   src/App.js
        new file:   src/pages/Home.js


#### 2.4 Create Register.js and add it to App.js

        modified:   README.md
        modified:   src/App.js
        new file:   src/pages/auth/Register.js


#### 2.5 Link the Home and Register pages

        modified:   README.md
        modified:   src/App.js
        modified:   src/components/Navbar.js


#### 2.6 Add form to Register page and modified Navbar

        modified:   README.md
        modified:   src/App.css
        modified:   src/components/Navbar.js
        modified:   src/pages/auth/Register.js


#### 2.7 Configuring firbase functions to access the db

        modified:   README.md
        modified:   src/firebaseConfig.js



