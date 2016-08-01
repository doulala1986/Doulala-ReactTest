/**
 * Created by doulala on 16/7/26.
 */
var RefDom = React.createClass({
  displayName: "RefDom",

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", ref: ref => {
          this._textInput = ref;
        } }),
      React.createElement("input", { type: "button", onClick: e => {
          console.log(this._textInput.value);
          this._textInput.focus();
        } })
    );
  }
});

ReactDOM.render(React.createElement(RefDom, null), document.getElementById('container'));