<style>
	body {
	  background-color: #09b0f3;
	  color: rgb(255, 255, 255);
       margin:50px 20px; padding:10px;
       text-align:left;
	}
	h1{
    	text-align: center;
      font-size: 42px;
      margin:40px 10px; 
      padding:5px;
    }

    div{
      text-align: center;
    }
     p{ display: inline-block;
       margin-left: auto;
        margin-right: auto;
      text-align: center;}
    label,input,button {
    display: block;
    float: left;
     margin-bottom: 15px;
    }
 input { background-color: rgb(255, 255, 255);
  width: 250px;
  font-size: 16px;
  } 
 button{
  background-color: rgb(255, 255, 255);
  display: inline-block;
  color: rgb(8, 163, 253);
  text-align: center;
  text-decoration: none;
  width: 200px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight : bold ;
  margin: 8px 4px;
  cursor: pointer;
         }

button:hover{background-color:rgba(157, 255, 130, 0.82);}

button:focus{background-color:rgba(17, 220, 179, 0.647);}
  label {
  text-align: right;
  width: 75px;
  padding-right: 20px;
  font-size: 16px;
  }
   form {
    display: inline-block;
     margin-left: auto;
    margin-right: auto;
    text-align: center; }

br {
 clear: left;
}
table, th, td {
  border: 1px solid rgb(242, 250, 250);
}
table.center {
  margin-left: auto; 
  margin-right: auto;
}
th, td {
  padding: 5px;
}
</style>
<template>
 <main>
   <title>Subscribers Application</title>
  <h1>Hello From Frontend</h1>
    <div class="form">
        <form>
        <label>Name</label>
        <input type="text" v-model="form.name"/><br>
        <label>Role</label>
        <input type="text" v-model="form.subscribedToChannel"/><br>
        <label>Id</label>
        <input type="text" v-model="form.id"/><br>
        </form> 
    </div>
<p>
<button  v-on:click="searchRecord()">Search</button>
<button v-on:click="submitForm()">Submit</button>
<button v-on:click="updateForm()">Update</button>
<button v-on:click="deleteRecord()">Delete</button>
<button v-on:click="reloadPage()">Reset</button><br>
</p>
  <div>
      <v-simple-table  class="mx-auto">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Subscription Channel
          </th>
           <th class="text-left">
            Subscription Date
          </th>
           <th class="text-left">
            Subscribtion Id
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in searchItem" :key="i"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.subscribedToChannel }}</td>
          <td>{{ item.subscribeDate }}</td>
          <td>{{ item._id}}</td>
        </tr>
      </tbody>
  </v-simple-table>
    </div><br>
    <div>
      <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-card>

    </div>
    <!-- <div>
      <v-simple-table  height="350px">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Subscription Channel
          </th>
           <th class="text-left">
            Subscription Date
          </th>
           <th class="text-left">
            Subscribtion Id
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in items" :key="i"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.subscribedToChannel }}</td>
          <td>{{ item.subscribeDate }}</td>
          <td>{{ item._id}}</td>
        </tr>
      </tbody>
  </v-simple-table>
    </div> -->
      

   </main>
</template>

<script>

export default {
    data(){
        return {
          items:[],
          searchItem:[],
          search: '',
          headers:[
          {
            text: 'Name',
            align: 'start',
            filterable: true,
            value: 'name',
          },
          { text: 'Subscription Channel', value: 'subscribedToChannel' },
          { text: 'Subscription Date', value: 'subscribeDate' },
          { text: 'Subscribtion Id', value: '_id' },
          ],
            form: {
                name: '',
                subscribedToChannel: '',
                id: '',
                }
        }
    },
    async fetch(){
    this.items=await this.$axios.$get('/subscribers').then(res=>
    res);
    },
    methods: {
        submitForm(){
            this.$axios.$post('/subscribers', this.form)
                .then(function( response ){
                     // Handle success
                }.bind(this));
                this.reloadPage();
        },
        updateForm(){
            this.$axios.$patch(`/subscribers/${this.form.id}`, this.form)
                .then(response => { 
	              console.log(response)
                })
                this.reloadPage();
        },
        deleteRecord(){
           this.$axios.$delete(`/subscribers/${this.form.id}`, this.form)
                .then(response => { 
	              console.log(response)
              })
              this.reloadPage();
        },
        async searchRecord(){
        const result= await this.$axios.$get(`/subscribers/${this.form.id}`, this.form);
            this.searchItem = [result];
           
            
       },
       async getAllRecord(){
        const result= await this.$axios.$get(`/subscribers/${this.form.id}`, this.form);
            this.items = result;
            this.reloadPage();
            
       },
      reloadPage(){
         window.location.reload()
             }
    },  
    
}
</script>