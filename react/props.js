
var Author=React.createClass({

   render:function(){
       return <div>{this.props.name}_{this.props.children} </div>;
   }
});

var Hello = React.createClass({
    render: function() {
        return (
        <div>
          <Author  name={this.props.name}>liyao</Author>
          <div>Hello {this.props.name}</div>
        </div>

        );
    }
});

ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('container')
);
