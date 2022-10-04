import React from "react";

class NumperInput extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            country_code: '+375',
            number: '0000000',
        }
        
        this.county_codes = [
            {"name":'Belarus', 'code': '+375', "code_len": 2},
            {'name': "Russia", 'code': '+7', "code_len": 3},
            {'name': 'Ukraine', 'code': '+380', "code_len": 2}
        ]
        this.selected_code = this.county_codes[0]
        this.country_code_options = this.county_codes.map((code) => <option key={code["name"]} value={code["code"]}>{code["name"]} {code["num"]}</option>)

    }

    chacge_country_code(e){
        this.state.country_code = e.target.value
        e.target.nextSibling.innerHTML = this.state.country_code
    }

    change_number(e){
        if (e.target.value.charAt(0) == "+"){
            for (let i = 0; i <= this.country_code_options.length; i++){
                if (e.target.value == this.county_codes[i]["code"]){
                    this.selected_code = this.county_codes[i]["code"];
                    e.target.value = "";
                    this.state.country_code = this.selected_code;
                    e.target.previousSibling.innerHTML = this.state.country_code
                    e.target.previousSibling.previousSibling.value = this.state.country_code
                }
            }
            
        }
        if (String(e.target.value).length > 7 + this.selected_code["code_len"]){
            e.target.value = this.state.number
        }
        else{
            this.state.number = e.target.value
        }
        
    }

    alert_number(e){
        alert(this.state.country_code +" (" + this.state.number.substr(0, 2) + ") " + this.state.number.substr(2, this.state.number.length))
    }

    render(){
        return <div>
            <select name="code_selector" id="code_selector" onChange={(e) => this.chacge_country_code(e)}>
                {this.country_code_options}
            </select>
            <span>{this.state.country_code}</span>
            <input type="text" placeholder="445693622" onChange={(e) => this.change_number(e)}/>
            <button onClick={(e) => this.alert_number(e)}>Подтвердить номер</button>
        </div>
    }
}

export default NumperInput