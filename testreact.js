(function(){
    const e=React.createElement;
    const br=e("br",null,null)
    
    class Login extends React.Component{
	render(){
	    function login(loginFunc){
		return function(){
		    let user=document.getElementById("uname").value;
		    let pass=document.getElementById("pass").value;
		    loginFunc(user,pass);
		}
	    }
	    function register(registerFunc){
		return function(){
		    let user=document.getElementById("uname").value;
		    let pass=document.getElementById("pass").value;
		    registerFunc(user,pass);
		}
	    }
	    function reset(resetFunc){
		return function(){
		    let user=document.getElementById("uname").value;
		    if(user==""){
			alert("please enter username to send reset link");
		    }else{
			resetFunc(user);
		    }
		}
	    }
	    return e("div",{className:"login-box"},
		     "username:",e("input",{id:"uname",type:"test"}),br,
		     "password:",e("input",{id:"pass",type:"password"}),br,
		     e("button",{onClick:login(this.props.loginFunc)},"login"),
		     e("button",{onClick:register(this.props.registerFunc)},"register"),
		     e("button",{onClick:reset(this.props.resetFunc)},"reset password"),
		    )
	}
    }
    
    class AuthContainer extends React.Component {
	constructor(props){
	    super()
	    this.state={
		authed:props.sclient.isAuthenticated()
	    }
	}
	login(client){
	    return function(user, pass){
		client.login(user,pass)
		    .then(userId =>{
			this.setState({authed:true});
		    }).catch(err => {
			alert("bad username or password")
			console.log(err);
		    });
	    }
	}
	register(client){
	    return function(user, pass){
		client.register(user,pass)
		    .then(userId =>{
			alert("confirmation email sent!");
		    }).catch(err => {
			alert("bad password or username is taken. password must be 6 to 128 characters");
			console.log(err);
		    });
	    }
	}
	logout(client){
	    return function(){
		client.logout();
		this.setState({authed:false});
	    }
	}
	reset(client){
	    return function(user){
		client.auth.provider('userpass').sendPasswordReset(user);
		    .then(()=>alert("reset link sent!"))
		    .catch(()=>alert("failed to send reset link"));
	    }
	}
	render(){
	    if(!this.state.authed){
		return e(Login,{
		    loginFunc:this.login(this.props.sclient).bind(this),
		    registerFunc:this.register(this.props.sclient).bind(this)
		    resetFunc:this.reset(this.props.sclient).bind(this)
		},null)
	    }else{
		return e(App,{
		    sclient:this.props.sclient,
		    logoutFunc:this.logout(this.props.sclient).bind(this)
		},null);
	    }
	}
    }
    class NoteList extends React.Component{
	render(){
	    let removeNote=this.props.removeNote
	    return e("ul",{className:"note-list"},
		     ...this.props.notes.map(note=>{
			 console.log(note._id);
			 return e("li",{className:"note"},
				  note.text,
				  e("button",{onClick:removeNote(note._id)},"X")
				 )
		     }));
	}
    }
    class App extends React.Component{
	updateNotes(props,app){
	    let atlas=props.sclient.service("mongodb","mongodb-atlas");
	    atlas.db("test").collection("notes").find({}).execute()
		.then(notes=>{
		    app.setState({notes})
		});
	    console.log("update",props,app);
	}
	constructor(props){
	    super();
	    let atlas=props.sclient.service("mongodb","mongodb-atlas");
	    this.notes=atlas.db("test").collection("notes");
	    props.sclient.executeFunction("markAsTestreact");
	    this.state={
		notes:[]
	    };
	    this.updateNotes(props,this);
	}
	addNote(){
	    let text=document.getElementById("text").value;
	    this.notes
		.insertOne({text,owner_id:this.props.sclient.authedId()})
		.then(()=>{
		    this.updateNotes(this.props,this);
		    console.log("addnote",text);
		}).catch(err=>{
		    if(err.message=="validation failed for field 'text'"){
			alert("can't add blank note");
		    }else{
			console.log(err);
		    }
		});
	}
	removeNote(_id){
	    return (function(){
		this.notes
		    .deleteOne({_id})
		    .then(()=>{
			this.updateNotes(this.props,this)
		    });
	    }).bind(this)
	}
	render(){
	    return e("div",{className:"app"},
		     e("h1",null,"welcome to the app!!"),
		     e("button",{onClick:this.props.logoutFunc},"logout"),br,
		     "new note:",e("input",{type:"text",id:"text"},null),
		     e("button",{onClick:this.addNote.bind(this)},"add note!"),
		     e(NoteList,{
			 notes:this.state.notes,
			 removeNote:this.removeNote.bind(this)
		     },null)
		    )
	}
    }
    
    stitch.StitchClientFactory
	.create("testreact-xyknf")
	.then(sclient=>{
	    ReactDOM.render(
		e(AuthContainer,{sclient},null),
		document.getElementById("root")
	    );
	}).catch(console.log);
})();
