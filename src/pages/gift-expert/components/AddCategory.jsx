import React from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((cat) => [inputValue, ...cat]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-control'>
            <input type='text' value={inputValue} onChange={handleInputChange} />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
