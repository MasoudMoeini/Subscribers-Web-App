
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
  <div>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
   >
    <v-text-field
      v-model="form.name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
       <v-text-field
      v-model="form.subscribedToChannel"
      :rules="roleRules"
      label="Role"
      required
    ></v-text-field>
     <v-text-field
      v-model="form.id"
      label="Id"
      required
    ></v-text-field>

   <!--  <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select> -->

    <v-checkbox
      v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    <v-btn :disabled="!valid" @click="validate">Validate</v-btn>
    <v-btn class="mr-4" @click="reset">Reset Form</v-btn>
    <v-btn @click="resetValidation">Reset Validation </v-btn><br>
    <v-btn @click="submitForm">Submit</v-btn>
    <v-btn @click="updateForm">Update</v-btn>
    <v-btn @click="deleteRecord">Delete</v-btn>
  </v-form>
  </div>
  <!-- 
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
<button  v-on:click="getAllRecord()">Table</button> 
<button v-on:click="submitForm()">Submit</button>
<button v-on:click="updateForm()">Update</button>
<button v-on:click="deleteRecord()">Delete</button><br>
<button v-on:click="reloadPage()">Reset</button><br> 
</p> -->
 <!--  <div>
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
    </div><br> -->
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
      :items-per-page="10"
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
          valid: true,
          nameRules: [
              v => !!v || 'Name is required',
              v => (v && v.length>=3 && v.length <= 50) || 'Name must be more than 3 character and less than 50 characters',
          ],
          roleRules: [
              v => !!v || 'Role is required',
              v => (v && v.length>=5 && v.length <= 100) || 'Role must be more than 5 character and less than 100 characters',
          ],
          select:'',
          checkbox: false,
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
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
        this.$fetch()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
        submitForm(){
          if (this.valid!=false){
            this.$axios.$post('/subscribers',this.form)
                .then(function( response ){
                     // Handle success
                }.bind(this));
                this.$fetch()
          }
        },
        updateForm(){
          if (this.valid!=false){
            this.$axios.$patch(`/subscribers/${this.form.id}`, this.form)
                .then(response => { 
	              console.log(response)
                }),
                this.$fetch()
          }
                
        },
        deleteRecord(){
           this.$axios.$delete(`/subscribers/${this.form.id}`, this.form)
                .then(response => { 
	              console.log(response)
              }),
              this.$fetch()
        },
        async searchRecord(){
        const result= await this.$axios.$get(`/subscribers/${this.form.id}`, this.form);
            this.searchItem = [result];
           
            
       },
       async getAllRecord(){
        const result= await this.$axios.$get('/subscribers');
            this.items = result;
            this.form.id='',
            this.form.name='',
            this.form.subscribedToChannel=''
       },
      reloadPage(){
         window.location.reload()
             }
    },  
    
}
</script>