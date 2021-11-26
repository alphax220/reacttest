import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Formulaire extends React.Component {

   
    state={
        user : "Open your account",
        nameUser:"alpha"
    }


    handleSubmit= (event)=>{
        const newValue = <h1>Connected</h1>
        this.setState({user: newValue})
        console.log(newValue)
    }

    handleChange = (event)=>{
        this.setState({user:event.target.value})
        
    }
    render(){
         
        
        return (      
            
            <form  >
                
                <div className="form-group">
                <div>
                    <h2 > {this.state.user} </h2>
                </div>
                <input type="text" style={{marginBottom :20}} className="form-control" name="username" placeholder="Username" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="*****"/>
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