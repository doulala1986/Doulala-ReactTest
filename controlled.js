var user='doulala'

var ControlledComponent=React.createClass({
    getInitialState:function(){
        return {auther:this.props.name,text:''};
    },
    onAutherChanged:function(e){
        this.setState({auther: e.target.value});
        ReactDOM.render();
    },

    onTextChanged:function(e){
        this.setState({text: e.target.value});
    },

    render:function(){
        return (
          <div>
              <input
                  type="text"
                  placeholder="Your name"
                  value={this.state.auther}
                  onChange={this.onAutherChanged}
              />
              <br/>
              <input
                  type="text"
                  placeholder="Say something..."
                  value={this.state.text}
                  onChange={this.onTextChanged}
              />
              <p>auther:{this.state.auther}</p>
              <p>text:{this.state.text}</p>

         </div>

        );
    }
});



ReactDOM.render(
    <ControlledComponent name={user}/>,
      document.getElementById('container')

);

