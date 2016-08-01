var PropTypeComponent = React.createClass({
    displayName: "PropTypeComponent",


    propTypes: { //用来设置prop的类型及限制

        text: React.PropTypes.string.isRequired,

        element: React.PropTypes.element,

        ip: function (props, propName, componentName) {

            return new Error("");
        }

    }

});