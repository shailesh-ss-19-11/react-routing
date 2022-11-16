import React, { Component } from 'react'
class ProductDetails extends Component {
    constructor(props) {
      super(props)
        console.log(props);
      this.state = {
         
      }
    }
    save =()=> {
        // alert("hello")
        this.props.history.push("/about")
    }
    replace=()=>{
        this.props.history.replace("/about")
    }

    goback = ()=>{
        this.props.history.goBack();
    }

    goforword = ()=>{
        this.props.history.goForword(1);
    }
    go = ()=>{
        console.log(this.props.history.go)
    }
    render() { 
        return (
            <>
                <h1>this is the product detail ---{this.props.match.params.id}</h1>
                <button className="btn btn-primary m-3" onClick={this.save}>save or push</button><br />
                <button className="btn btn-primary m-3" onClick={this.replace}>replace</button><br />
                <button className="btn btn-primary m-3" onClick={this.goback}>goback</button><br />
                <button className="btn btn-primary m-3" onClick={this.goforword}>goforword</button>
                <button className="btn btn-primary m-3" onClick={this.replace}>go</button>
            </>
        );
    }
}
 
export default ProductDetails;