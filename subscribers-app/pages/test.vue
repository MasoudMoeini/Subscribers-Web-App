<style>
	body {
	  background-color: rgb(13, 162, 221);
	  color: rgb(255, 255, 255);
       margin:50px 20px; padding:10px;
       text-align:left;
	}
	h1{
    	text-align: center;
    }

    div{
      text-align: center;
    }
    form {
    display: inline-block;
     margin-left: auto;
    margin-right: auto;
    text-align: center;
    
      }
    label,input,button {
    display: block;
    width: 180px;
    float: left;
     margin-bottom: 15px;
    }

  label {
  text-align: right;
  width: 75px;
  padding-right: 20px;
  }

br {
 clear: left;
}
</style>
<template>
 <main>
   <title>Subscribers Application</title>
   <h1>Hello From Frontend</h1>
    <div class="form">
        <label>Name</label>
        <input type="text" v-model="form.name"/><br>
        <label>Role</label>
        <input type="text" v-model="form.subscribedToChannel"/><br>
        <label>Id</label>
        <input type="text" v-model="form.id"/><br>
        <button v-on:click="submitForm()">Submit</button>
        <button v-on:click="updateForm()">Update</button><br>
        <input type="reset" value="Reset" ><br>
    </div>
    
    <div>
     <v-card class="mx-auto" max-width="400" tile>
  
    <v-list-item four-line v-for="(item, i) in items" :key="i">
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title><br>
        <v-list-item-subtitle v-text="item.subscribedToChannel"></v-list-item-subtitle><br>
        <v-list-item-subtitle v-text="item.subscribeDate"></v-list-item-subtitle><br>
        <v-list-item-subtitle v-text="item._id"></v-list-item-subtitle><br>
      </v-list-item-content><br>
    </v-list-item>
  
  </v-card>

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
    this.items=await fetch("http://0.0.0.0:3000/subscribers").then(res=>
    res.json());
    },
    methods: {
        submitForm(){
            axios.post('http://0.0.0.0:3000/subscribers', this.form)
                .then(function( response ){
                    // Handle success
                }.bind(this));
        },
        updateForm(){
            axios.put(`http://0.0.0.0:3000/subscribers/{id}`, this.form)
                .then(response => { 
	              console.log(response)
                })
        }
    }
}
</script>