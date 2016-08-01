var name_1;
var Input_Lengthed = React.createClass({
    displayName: 'Input_Lengthed',


    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    componentWillMount: function () {
        console.log(this.props.name);
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return nextProps.name !== this.props.name;
    },

    getInitialState: function () {
        return { value: '', updateProps: false };
    },

    onValueChanged: function (event) {
        this.setState({ value: event.target.value.substr(0, 10) });
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                this.props.name
            ),
            React.createElement('input', { value: this.state.value, onChange: this.onValueChanged })
        );
    }
});

ReactDOM.render(React.createElement(Input_Lengthed, { name: 'doulala' }), document.getElementById('container'));