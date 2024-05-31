import React from 'react';

const UserAvatar = (props) => {
    return (
        <div className={`userImg ${props.lg === true && 'lg'}`}>
            <span className="rounded-circle">
                <img src={props.img} alt="User Avatar" />
            </span>
        </div>
    );
};

export default UserAvatar;