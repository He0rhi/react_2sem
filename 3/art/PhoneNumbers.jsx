import React from "react";

class PhoneNumbers extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        holder: "(29) 666 77 88",
        inputValue: "",
        selectValue: ""
      };
  
      this.checkCountry = this.checkCountry.bind(this);
      this.checkCode = this.checkCode.bind(this);
      this.blr_ukr_litvNum = this.blr_ukr_litvNum.bind(this);
      this.rusNum = this.rusNum.bind(this);
      this.plNum = this.plNum.bind(this);
      this.latvNum = this.latvNum.bind(this);
    }
  
    checkCode(e){
      let str = e.target.value;
      if(str === "+375" || str === "+7" || str === "+380" || str === "+370" || str === "+48" || str === "+371"){
        document.querySelector("select").value = str;
        e.target.value = "";
        this.setState({inputValue: e.target.value});
      }
    }
  
    checkCountry(e){
      this.checkCode(e);
      let str = e.target.value;
      const select = document.querySelector("select").value;
      if(select === "+375" || select === "+380" || select === "+370")
        this.blr_ukr_litvNum(e);
      else if(select === "+7")
        this.rusNum(e);
      else if(select === "+48")
        this.plNum(e);
      else if(select === "+371")
        this.latvNum(e);
      else
        this.setState({inputValue: e.target.value});
    }
  
    blr_ukr_litvNum(e){
      let str = e.target.value;
  
      if(str.length == 2 && str[0] != "(" && str[0] != "+")
        e.target.value = "(" + str + ") ";
      else if(str.length == 9 && str[8] != "-"){
        const buf = str[8];
        e.target.value = e.target.value.slice(0, -1) + "-" + buf;
        this.setState({inputValue: e.target.value});
      }
      else if(str.length == 12 && str[11] != "-"){
        const buf = str[11];
        e.target.value = e.target.value.slice(0, -1) + "-" + buf;
        this.setState({inputValue: e.target.value});
      }
      if(str.length < 15)
        this.setState({inputValue: e.target.value});
      else
        e.target.value = this.state.inputValue;
    }
  
    rusNum(e){
      let str = e.target.value;
  
      if(str.length == 3 && str[0] != "(" && str[0] != "+"){
        e.target.value = "(" + str + ") ";
      }
      else if(str.length == 10 && str[9] != "-"){
        const buf = str[9];
        e.target.value = e.target.value.slice(0, -1) + "-" + buf;
        this.setState({inputValue: e.target.value});
      }
      else if(str.length == 13 && str[12] != "-"){
        const buf = str[12];
        e.target.value = e.target.value.slice(0, -1) + "-" + buf;
        this.setState({inputValue: e.target.value});
      }
      if(str.length < 16){
        this.setState({inputValue: e.target.value});
      }
      else
        e.target.value = this.state.inputValue;
    }
  
    plNum(e){
      let str = e.target.value;
  
      if(str.length == 4 && str[3] != "-"){
        const buf = str[3];
        e.target.value = e.target.value.slice(0, -1) + "-" + buf;
        this.setState({inputValue: e.target.value});
      }
      else if(str.length == 8 && str[7] != "-"){
        const buf = str[7];
        e.target.value = e.target.value.slice(0, -1) + "-" + buf;
        this.setState({inputValue: e.target.value});
      }
      if(str.length < 12){
        this.setState({inputValue: e.target.value});
      }
      else
        e.target.value = this.state.inputValue;
    }
  
    latvNum(e){
      let str = e.target.value;
  
      if(str.length == 5 && str[4] != "-"){z
        const buf = str[4];
        e.target.value = e.target.value.slice(0, -1) + "-" + buf;
        this.setState({inputValue: e.target.value});
      }
      if(str.length < 10){
        this.setState({inputValue: e.target.value});
      }
      else
        e.target.value = this.state.inputValue;
    }
  
    render(){
      const holder = this.state.holder;
      
      return(
        <form>
          <label>Ваш телефон:</label>
          <br/>
          <div>
          <select>
            <option value="+375">+375</option>
            <option value="+7">+7</option>
            <option value="+380">+380</option>
            <option value="+371">+371</option>
            <option value="+370">+370</option>
            <option value="+48">+48</option>
          </select>
          <input type = "text" placeholder = {holder} value = {this.state.inputValue} onChange = {this.checkCountry}/>
          </div>
        </form>
      );
    }
  }
  
  export default PhoneNumbers;