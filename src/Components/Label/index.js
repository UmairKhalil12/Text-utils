import "./styles.css"
import PropTypes from 'prop-types';
export default function Label(props) {
    return (
        <div className="container-1">
            <div><label className="label-1">{props.text}</label></div>
        </div>


    );
}

Label.propTypes = {
    text: PropTypes.string
}

Label.defaultProps = {
    text: "Button"
}