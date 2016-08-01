var user = 'doulala';

var ControlledComponent = React.createClass({
    displayName: 'ControlledComponent',

    getInitialState: function () {
        return { auther: this.props.name, text: '' };
    },
    onAutherChanged: function (e) {
        this.setState({ auther: e.target.value });
        ReactDOM.render();
    },

    onTextChanged: function (e) {
        this.setState({ text: e.target.value });
    },

    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement('input', {
                type: 'text',
                placeholder: 'Your name',
                value: this.state.auther,
                onChange: this.onAutherChanged
            }),
            React.createElement('br', null),
            React.createElement('input', {
                type: 'text',
                placeholder: 'Say something...',
                value: this.state.text,
                onChange: this.onTextChanged
            }),
            React.createElement(
                'p',
                null,
                'auther:',
                this.state.auther
            ),
            React.createElement(
                'p',
                null,
                'text:',
                this.state.text
            )
        );
    }
});

ReactDOM.render(React.createElement(ControlledComponent, { name: user }), document.getElementById('container'));