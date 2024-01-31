import PropTypes from 'prop-types';
export default function Heading(props) {
    return (
        <>
            <div className='container-1'>
                <div>
                    <h1>{props.text}</h1>
                </div>
            </div>


        </>

    );
}

Heading.propTypes = {
    text: PropTypes.string
}

Heading.defaultProps = {
    text: "Title"
}