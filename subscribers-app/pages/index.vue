<style>
	body {
	  background-color: #23baf6;
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
  background-color: rgb(25, 237, 194);
  display: inline-block;
  color:rgb(45, 47, 47);
  text-align: center;
  text-decoration: none;
  width: 200px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight : bold ;
  margin: 8px 4px;
  cursor: pointer;
         }

button:hover{background-color:rgba(25, 237, 195, 0.938);}

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
        <button v-on:click="submitForm()">Submit</button>
        <button v-on:click="updateForm()">Update</button><br>
         <button v-on:click="">Reset</button>
        <button v-on:click="deleteRecord()">Delete</button><br>
        </form>
    </div>
    
    <div>
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
    </div>
   </main>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
          items:[],
            form: {
                name: '',
                subscribedToChannel: '',
                id: '',
                }
        }
    },
    async fetch(){
    this.items=await fetch(process.env.PROXY_API ||'http://0.0.0.0:3000/subscribers').then(res=>
    res.json());
    },
    methods: {
        submitForm(){
            axios.post(process.env.PROXY_API ||'http://0.0.0.0:3000/subscribers', this.form)
                .then(function( response ){
                     // Handle success
                }.bind(this));
        },
        updateForm(){
            axios.patch(process.env.PROXY_API||`http://0.0.0.0:3000/subscribers/${this.form.id}`, this.form)
            
                .then(response => { 
	              console.log(response)
                })
        },
        deleteRecord(){
           axios.delete(process.env.PROXY_API||`http://0.0.0.0:3000/subscribers/${this.form.id}`, this.form)
                .then(response => { 
	              console.log(response)
              })
        },
    }
}
</script>