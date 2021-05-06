import React from 'react';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            title: '',
            description: ''
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(e) {
       fetch('/api/tasks', {
           method: 'POST',
           body: JSON.stringify(this.state),
           headers: {
            'Accpet': 'application/json',   
            'Content-Type': 'application/json'
           }
       })
       .then(res => res.json())
       .then(data => {
           console.log(data);
           M.toast({
               html: 'Task Saved'
           });
           this.setState({ title: '', description: ''})
       })
       .catch(err => console.log(err));
        e.preventDefault();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
           <div>
               <nav className="ligth-blue darken-4">
                   <div className="container">
                        <a href="/" className="brand-logo">MERN Stack</a>
                   </div>
               </nav>

               <div className="container">
                   <div className="row">
                       <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field cols12">
                                                <input type="text" name="title" value={this.state.title} placeholder="Task Title" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field cols12">
                                                <textarea name="description" value={this.state.description} className="materialize-textarea" placeholder="Task Description" onChange={this.handleChange}></textarea>
                                            </div>
                                        </div>
                                        <button className="btn btn-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                       </div>
                       <div className="col s7">
                           
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default App;