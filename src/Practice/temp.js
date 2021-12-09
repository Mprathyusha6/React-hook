import React from 'react';


class hoo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            employee: [],
            employee1: [],
            // employee1: [],
            isLoaded: false
        }
      

    }
     componentDidMount() {

        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    employee: json,

                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });
         
    }

    handleLoadMore = () => {
       
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(json => {
            this.setState({
                employee: json,

                isLoaded: true,
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    // func = () => {
    //     alert("hello")
    // }

    loadEvents = () => {

    }

    render() {

        // const { isLoaded, employee1 } = this.state;
        const { isLoaded,employee } = this.state;
    //   const employee=[...this.state.employee1,...this.state.employee2]
        if (!isLoaded)
            return <p>wait a min.....</p>;

        return (
            <div className="App">
                <div className="headerOrFooter sticky">
                    <h1>Profiles </h1>
                    <input type="button" value="Load" className="search" onClick={this.handleLoadMore} />
                </div>
                <div className="content">

                    <input type="text" placeholder="search" className="search" />
                    {/* <input type="button" value="Click" className="search" onClick={this.func} /> */}
                   

                    {employee.data.map(item => (
                        <div key={item.id} className="flexelements ">
                            <div>
                                <img src={item.avatar} alt={item.first_name} />
                            </div>
                            <div>
                                <h1>{item.first_name} </h1>


                                <p>Email: {item.email}</p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="headerOrFooter">
                    <p>footer content</p>

                </div>
            </div>
        );

    }

}

export default hoo