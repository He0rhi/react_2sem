import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.formatDate(this.props.offset, this.props.format)
        };
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    formatDate(offset, format) {
        let d = new Date(new Date().getTime() + (offset*3600*1000) );
        
        let time_str = format == 12 ? this.formatAMPM(d) : this.formatTFhrs(d);
        return time_str;

    }
    formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
    
    formatTFhrs(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;
        hours = hours < 10 ? '0'+hours : hours;
        let strTime = hours + ':' + minutes;
        return strTime;
    }

    tick() {
        this.setState({
            time: this.formatDate(this.props.offset, this.props.format)
        });
    }
    render() {
        return (
            <span className="glow">
                {this.state.time}
                
            </span>
        );
    }
}
  
  export default Clock;