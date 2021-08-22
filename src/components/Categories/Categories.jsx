import {memo} from "react";
import PropTypes from "prop-types";

const Categories = memo(props => {

    const onSelectItem = (index) => {
        props.onClick(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={props.activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {props.items &&
                props.items.map((item, index) => {
                    return <li
                        className={props.activeCategory === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={item + index}
                    >{item}</li>
                })}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number,null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired
}

Categories.defaultProps = {
    activeCategory: null,
    items: [],
}

export default Categories