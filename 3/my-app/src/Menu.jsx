import React from "react";


export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            data: props.data,
            pos: 0
        };
    }
    render() {
            num: props.zkey
        };
        
        
    }

    add_data(e, compon){
        
        let id = compon.state.data.name+""+compon.state.num
        let table = document.getElementById(id)
        if (this.state.pos === false){
            table.classList.add("shown")
        } else {
            table.classList.remove("shown")
        }
        this.state.pos = !this.state.pos
    }

    render() {
        
        return (
            <span>
                <div className="Detail_Info" >
                    <span onClick={(e) => this.add_data(e, this)}>{this.state.data.name}{this.state.num}</span>
                    <ul id={this.state.data.name + "" + this.state.num}>
                        {this.state.data.links.map(link => {return <li><a href={link.url}>{link.name}</a></li>})}
                    </ul>
                </div>
            </span>
        );
    }
}

export default Menu;