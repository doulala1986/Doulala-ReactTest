/**
 * Created by doulala on 16/7/26.
 */
var RefDom=React.createClass({
    render(){
        return (
            <div>
              <input type="text"  ref={(ref)=>{
               this._textInput=ref;
              }}/>
                <input type="button" onClick ={(e)=>{
                  console.log(this._textInput.value);
                  this._textInput.focus();
                }}/>

            </div>
          );
    }
});

ReactDOM.render(<RefDom/>,document.getElementById('container'));
