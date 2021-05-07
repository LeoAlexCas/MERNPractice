import React from 'react';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            tasks: []
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    fetchTasks() {
        fetch('/api/tasks', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            this.setState({ tasks: data });
            console.log(this.state.tasks);
        })
        .catch(err => console.error(err));
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
           this.setState({ title: '', description: ''});
           this.fetchTasks();
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

    componentDidMount() {
        this.fetchTasks();
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
                           <table>
                               <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                               </thead>
                               <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                </tr>
                                            );
                                        })
                                    }
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default App;