import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'thuy',
        chanel: 'thuyyoutube'
    }

    handleOnChangeName = (eventt) => {
        this.setState(
            {
                name: eventt.target.value
            }
        )
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="class1">
                    <input value={this.state.name} type="text"
                        onChange={(eventt) => this.handleOnChangeName(eventt)} />
                </h1>
                My name is {this.state.name}
            </React.Fragment>
        )

    }
}
export default MyComponent;
