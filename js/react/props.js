
var Author = React.createClass({
    displayName: "Author",


    render: function () {
        return React.createElement(
            "div",
            null,
            this.props.name,
            "_",
            this.props.children,
            " "
        );
    }
});

var Hello = React.createClass({
    displayName: "Hello",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                Author,
                { name: this.props.name },
                "liyao"
            ),
            React.createElement(
                "div",
                null,
                "Hello ",
                this.props.name
            )
        );
    }
});

ReactDOM.render(React.createElement(Hello, { name: "World" }), document.getElementById('container'));