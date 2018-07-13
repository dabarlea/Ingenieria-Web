<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">

    <h1>TODO APP</h1>

    <div class="card">

      <div cass="card-header">
        <h3>Add a task</h3>
      </div>

      <div class="card-body">
        <form v-on:submit.prevent="addTitle" class="form-inline">

          <div class="form-group">
            <label for="">Title</label>
            <input 
            v-model="newTitle.title"
            class="form-control"
            placeholder="Title" 
            type="text">
          </div>

          

          <input type="submit" clas="btn btn-success" value="Add A Title">
 
        </form>
      </div>

      <hr>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Titles List</h3>
        </div>

        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>is Checked</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="title in titles">
                <td>
                  {{ title.title }}
                </td>
                <td>
                  {{ title.isChecked }}
                  <button 
                  v-on:click="changetofalseTitle(title)"
                  class="btn btn-danger">
                    <i class="fa fa-times" aria-hidden="false"></i>
                  </button>
                  <button 
                  v-on:click="changetotrueTitle(title)"
                  class="btn btn-success">
                    <i class="fa fa-check" aria-hidden="false"></i>
                  </button>
                </td>
                <td>
                  <button 
                  v-on:click="deleteTitle(title)"
                  class="btn btn-danger">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>

      </div>


    </div>

    <h1>David Escobar</h1>




  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Firebase from 'firebase';
import toastr from 'toastr';


let config = {
  
    apiKey: "AIzaSyBmBF7HDMSNBNWkprlcyDOW4y8-VJPnebo",
    authDomain: "todolistapp-92276.firebaseapp.com",
    databaseURL: "https://todolistapp-92276.firebaseio.com",
    projectId: "todolistapp-92276",
    storageBucket: "",
    messagingSenderId: "309601498752"
    
/*
    apiKey: "AIzaSyAo_RdS68xKrpaaYALpiTn-YgvX8baDpBg",
    authDomain: "todolistapp-4312c.firebaseapp.com",
    databaseURL: "https://todolistapp-4312c.firebaseio.com",
    projectId: "todolistapp-4312c",
    storageBucket: "todolistapp-4312c.appspot.com",
    messagingSenderId: "229749699586"
*/
};

let app = Firebase.initializeApp(config);
let db =app.database();

let titlesRef = db.ref('titles'); 

export default {
  name: 'app',
  firebase: {
    titles: titlesRef
  },

  data(){

    return {
      newTitle: {
        title: '',
        isChecked: ''
      }
    }

  },


  methods: {
    addTitle:function () {
      this.newTitle.isChecked = 'false';
      titlesRef.push(this.newTitle);
      this.newTitle.title = '';
      this.newTitle.isChecked = 'false'; 
    },
    deleteTitle: function (title) {
      titlesRef.child(title['.key']).remove();
      toastr.success('Title Removed');
    },
    changetofalseTitle: function (title) {
      titlesRef.child(title['.key']).update({  "isChecked": "false"});
      toastr.success('Title Incompleted');
    },
    changetotrueTitle: function (title) {
      titlesRef.child(title['.key']).update({  "isChecked": "true"});
      toastr.success('Title Completed');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- 

  <template>
  <div id="app" class="container">
    <img src="./assets/logo.png">

    <h1>Vue and Firebase David</h1>

    <div class="card">

      <div cass="card-header">
        <h3>Add a Link</h3>
      </div>

      <div class="card-body">
        <form v-on:submit.prevent="addLink" class="form-inline">

          <div class="form-group">
            <label for="">Title</label>
            <input 
            v-model="newLink.title"
            class="form-control"
            placeholder="Title" 
            type="text">
          </div>

          <div class="form-group">
            <label for="">Author</label>
            <input 
            v-model="newLink.author"
            class="form-control"
            placeholder="Author" 
            type="text">
          </div>

          <div class="form-group">
            <label for="">Url</label>
            <input 
            v-model="newLink.url"
            class="form-control"
            placeholder="Url" 
            type="text">
          </div>

          <input type="submit" clas="btn btn-success" value="Add A Link">

          
        </form>

      </div>

      <hr>

      <div class="card">

        <div class="card-header">
          <h3 class="card-title">Links List</h3>
        </div>

        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Delete</th>
              </tr>

            </thead>

            <tbody>
              <tr v-for="link in links">
                <td>
                  <a target="_blank" v-bind:href="link.url">{{ link.title }}</a>
                </td>
                <td>
                  {{ link.author}}
                </td>
                <td>
                  <button 
                  v-on:click="deleteLink(link)"
                  class="btn btn-danger">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>





      </div>


    </div>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Firebase from 'firebase';
import toastr from 'toastr';


let config = {
    apiKey: "AIzaSyBD2jc9Lfb_Rmq5PswQCdspgbqesppLbqM",
    authDomain: "vuejsfire-fcd3e.firebaseapp.com",
    databaseURL: "https://vuejsfire-fcd3e.firebaseio.com",
    projectId: "vuejsfire-fcd3e",
    storageBucket: "",
    messagingSenderId: "382055238760"
};

let app = Firebase.initializeApp(config);
let db =app.database();

let linksRef = db.ref('links'); 

export default {
  name: 'app',
  firebase: {
    links: linksRef
  },

  data(){

    return {
      newLink: {
        title: '',
        author: '',
        url: ''
      }
    }

  },


  methods: {
    addLink:function () {
      linksRef.push(this.newLink);
      this.newLink.title = '';
      this.newLink.author = '';
      this.newLink.url = ''; 
    },
    deleteLink: function (link) {
      linksRef.child(link['.key']).remove();
      toastr.success('Link Removed');
    } 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

  -->