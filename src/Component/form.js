import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Formulaire extends React.Component {

   constructor(){
    super()
    this.state={
        user : "Open your account",
        nameUser:"alpha",
        valuetext:null,
        valuepass:null,
    }


   }
    


    handleSubmit= (event)=>{
        
        const newValue = <h1>Connected</h1>
        const nullValue = <h1>Invalide</h1>
        this.state.valuetext === "" || this.state.valuepass === "" || this.state.valuetext === null || this.state.valuepass === null? this.setState({user:nullValue}): this.setState({user:newValue})
        console.log(this.state.valuetext)
        console.log(this.state.valuepass)
    }

    handleChange = (event)=>{
        this.setState({user:event.target.value})
        this.setState({valuetext:event.target.value})
        
    }

    HandlePass = (event)=>
    {
        this.setState({valuepass:event.target.value})
    }    
    render(){
         
        
        return (      
            
            <form  >
                
                <div className="form-group">
                <div>
                    <h2 > {this.state.user} </h2>
                </div>
                <input type="text" style={{marginBottom :20}} className="form-control" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.valuetext}/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="*****" onChange={this.HandlePass} value={this.state.valuepass}/>
                </div>
                <div className="form-group">
                <button  type="button" style={{marginTop :20}}  className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit} >Valider</button>
                </div>
                <div className="form-group forget-password">
                    <a href="www.google.com">Forget Password</a>
                </div>
            </form >
        );

    }
}

  

export default Formulaire;