<style>
	body {
	  background-color: rgb(18, 177, 239);
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
    text-align: left;
    
      }
    label,input {
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
    <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4">
          <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4" >
          <v-text-field
            v-model="subscribedToChannel"
            :counter="14"
            label="Subscription Channel"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4" >
          <v-text-field
            v-model="id"
            label="Subscription Id"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn
          elevation="4"
          color="succes"
          class="mr-4"
          @click="submitForm"
          value="Submit"
             ></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
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
export default{
  data(){
    return{
      name: '',
      subscribedToChannel: '',
      id: '',
      items:[]
    }
  },
  async fetch(){
    this.items=await fetch("http://0.0.0.0:3000/subscribers").then(res=>
    res.json()
    );
    },
  methods: {
     submitForm(e){
      e.preventDefault()
      console.log(this.name)
    },
  

  }
};

</script>