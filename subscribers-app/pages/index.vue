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

	</style>

    <template>
    <main>
   <title>Subscribers Application</title>
   <h1>Hello From Frontend</h1>
   <div class="form">
   <form name="Form1"  action="mypage.asp" method="get">
   <label for="name">Name</label>
   <input id="name" name="name"><br>

   <label for="<role">Role</label>
   <input id="role" name="role"><br>
   <label for="date">Date</label>
   <input id="date" name="date"><br>
   <label for="id">Id</label>
   <input id="id" name="id"><br>
   <input type="submit" name="submit" id="submit" value="submit" class="button"/>
   </form>
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
    "
  </v-card>

    </div>
    
  </main>
   
</template>
<script>
export default{

  data(){
    return{
      items:[
        
      ]
    }
  },
  async fetch(){
    this.items=await fetch("http://0.0.0.0:3000/subscribers").then(res=>
    res.json()
    );
  }
}




</script>