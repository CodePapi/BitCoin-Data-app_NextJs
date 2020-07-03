 class Prices extends   React.Component {
    
   state={
       currency:'USD'
   }
    render() {
        
        return (
            <div>
               <ul className="list-group">
                   <li className="list-group-item">
                       Bitcoin rates for {this.props.bpi.USD.code}:
                       <span className="badge badge-primary">{this.props.bpi.time}</span>
        <strong>{this.props.bpi.time}</strong>
        
                   </li>
               </ul>
            </div>
        )
    }
}

export default Prices