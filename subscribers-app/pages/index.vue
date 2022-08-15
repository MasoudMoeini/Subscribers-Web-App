<style>
	body {
	  background-color: rgb(7, 172, 198);
	  color: rgb(255, 255, 255);
       margin:50px 20px; padding:20px;
       text-align:left;
	}
	h1{
    	text-align: center;
    }
	h2{
    	text-align: left;
    }
    p{
      text-align: left;
    }
    form {
    display: inline-block;
     margin-left: auto;
    margin-right: auto;
    text-align: left;
    
      }
    label,input {
    display: block;
    width: 150px;
    float: left;
     margin-bottom: 10px;
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

   <label for="email">E-mail</label>
   <input id="email" name="email"><br>

   <label for="<Srole">Role</label>
   <input id="role" name="role"><br>
   <input type="submit" name="submit" id="submit" value="submit" class="button"/>
   </form>
    </div>
  </main>
   
</template>
