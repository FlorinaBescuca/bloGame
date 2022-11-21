## :video_game: bloGame

---

### Usage

- npm install
- npm start

* Visit http://localhost:5500

---

### Configuration

1. Open server.js
2. Add your MongoDB URI, local or Atlas
3. If you are using MongoDB Compass, you may wanna add the dummy data I created and this is how:

   Open MongoDB Compass, **Connect**, click on your folder where you wanna store the data, click on **ADD DATA**, chose _import file_, select the file from blogame/db-data/posts-simple and after that select file type _JSON_ and **IMPORT**. Refresh the page and there you go, all the dummy data is there and you can see it live on the bloGame.

---

### Features

- [x] You can publish in the with _Create Tournament & Update_
- [x] Each post will be displayed depending on what you selected to _Which Game/News_
- [x] You have the option to _delete_ the post
- [x] Cool animations :black_cat:

---

### In development

- [ ] Login page for Admin (the only person who can make changes to posts should be an admin)
- [ ] Add the _edit_ button
- [ ] The _Tournaments_ posts to be organized, including _date_, _team_, _prize pool_
- [ ] Mobile Responsive
