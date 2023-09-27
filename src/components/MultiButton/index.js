import classNames from "classnames";
import './MultiButton.scss';

function MultiButton ({onClickHandler ,copy, type, size}) {

    const btnClass = classNames({
        basic_btn: true,
    })

    return (
        <button className={btnClass} onClick={onClickHandler}>
            {copy}
        </button>
    )
}

export default MultiButton;